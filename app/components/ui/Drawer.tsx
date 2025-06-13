import React from 'react';
import {NavLink, useLocation} from 'react-router';
import CancelIcon from '~/components/icons/CancelIcon';
import RightArrow from '~/components/icons/RightArrow';
import CategoryList from '~/components/shop/CategoryList';

interface DrawerProps {
  isVisible: boolean;
  closeDrawer: () => void;
  currentMenu: string;
  setCurrentMenu: (menu: string) => void;
  menuItems: {key: string; to: string; title: string}[];
  categories: {text: string; imagePath: string}[];
  otherCategories: {text: string; imagePath: string}[];
  setIsTriggerCancel?: (val: boolean) => void;
}

const Drawer: React.FC<DrawerProps> = ({
  isVisible = false,
  closeDrawer,
  currentMenu,
  setCurrentMenu,
  menuItems,
  categories,
  otherCategories,
  setIsTriggerCancel,
}) => {
  const location = useLocation();
  const isShopPage = location.pathname.startsWith('/shop');

  return (
    <div
      className={`fixed bg-background-2 p-[14px] bottom-0 left-0 w-full h-[calc(100vh-40px)] shadow-lg z-50 transition-transform duration-500 ease-in-out ${
        isVisible ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      {/* Title and Close Button */}
      <div className="flex justify-between items-center">
        <img
          src="/logo.png"
          className="w-[118px] h-[34px] xl:w-[160px] xl:h-[46px] object-cover"
          alt="logo"
        />
        <CancelIcon
          width={24}
          height={24}
          className="cursor-pointer"
          onClick={closeDrawer} // Close the drawer
        />
      </div>

      {/* Main Menu */}
      {currentMenu === 'main' && (
        <div className="pt-[20px]">
          <ul className="space-y-4 flex flex-col gap-y-4 no-underline">
            {menuItems?.map((item) => (
              <NavLink
                className="font-satoshi cursor-pointer hover:no-underline font-medium w-full text-xl leading-3xl tracking-normal text-center flex justify-between items-center"
                key={item.key}
                to={item.to}
                onClick={() => {
                  if (item.key !== 'shop') {
                    closeDrawer();
                  }
                  setCurrentMenu(item.key === 'shop' ? 'shop' : 'main');
                }}
              >
                {item.title}
                {item.key === 'shop' && <RightArrow />}
              </NavLink>
            ))}
          </ul>
        </div>
      )}

      {/* Shop Menu */}
      {currentMenu === 'shop' && (
        <div>
          <button
            className="flex items-center py-9"
            onClick={() => setCurrentMenu('main')}
          >
            <RightArrow className="rotate-180" />
            <span className="font-satoshi text-neutral-3 cursor-pointer font-medium text-2xl leading-3xl tracking-normal text-center">
              Shop
            </span>
          </button>
          <CategoryList title="Shop Individually" categories={categories} />
          <CategoryList title="Bundle and Save" categories={otherCategories} />
        </div>
      )}
    </div>
  );
};

export default Drawer;
