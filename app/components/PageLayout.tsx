import React, {Suspense, useEffect, useId, useState} from 'react';
import {Await, Link, useLocation} from 'react-router';
import type {
  CartApiQueryFragment,
  FooterQuery,
  HeaderQuery,
} from 'storefrontapi.generated';
import {Aside} from '~/components/Aside';
import {Footer} from '~/components/Footer';
import {Header, HeaderMenu} from '~/components/Header';
import {CartMain} from '~/components/CartMain';
import {
  SEARCH_ENDPOINT,
  SearchFormPredictive,
} from '~/components/SearchFormPredictive';
import {SearchResultsPredictive} from '~/components/SearchResultsPredictive';
import {SaleTop} from './SaleTop';
import MainFooter from './MainFooter';
import {useDrawer} from '~/context/DrawerContext';
import Drawer from '~/components/ui/Drawer';
import useIsNotMobileViewport from '~/hooks/useIsNotMobileViewport';

interface PageLayoutProps {
  cart: Promise<CartApiQueryFragment | null>;
  footer: Promise<FooterQuery | null>;
  header: HeaderQuery;
  isLoggedIn: Promise<boolean>;
  publicStoreDomain: string;
  children?: React.ReactNode;
}

export function PageLayout({
  cart,
  children = null,
  footer,
  header,
  isLoggedIn,
  publicStoreDomain,
}: PageLayoutProps) {
  const location = useLocation();
  const {isDrawerVisible, closeDrawer, openDrawer} = useDrawer();
  const isNotMobileViewport = useIsNotMobileViewport();
  const [currentMenu, setCurrentMenu] = useState('main');
  const isShopPage = location.pathname.startsWith('/shop');
  const [isTriggerCancel, setIsTriggerCancel] = useState(false);

  const menuItems = [
    {key: 'home', to: '/', title: 'Home'},
    {key: 'fabix', to: '/farbric-science', title: 'Fabix'},
    {key: 'about', to: '/about', title: 'About'},
    {key: 'shop', to: '/shop', title: 'Shop'},
  ];

  const categories = [
    {text: 'Pillowcases', imagePath: 'black_small_pillow.png'},
    {text: 'Sheets', imagePath: 'black_small_pillow.png'},
    {text: 'Duvets Cover', imagePath: 'black_small_pillow.png'},
  ];

  const otherCategories = [
    {text: 'Essentials Set', imagePath: 'black_small_pillow.png'},
    {text: 'Complete Sleep Set', imagePath: 'black_small_pillow.png'},
  ];



  useEffect(() => {
    if(isNotMobileViewport && isDrawerVisible){
      closeDrawer()
    }
    if (!isNotMobileViewport && !isDrawerVisible && isShopPage) {
      openDrawer();
    }
  }, [isNotMobileViewport])
  return (
    <Aside.Provider>
      <SaleTop />
      <CartAside cart={cart} />
      <SearchAside />
      <MobileMenuAside header={header} publicStoreDomain={publicStoreDomain} />
      {header && (
        <Header
          header={header}
          cart={cart}
          isLoggedIn={isLoggedIn}
          publicStoreDomain={publicStoreDomain}
        />
      )}
      <main className="">{children}</main>
      <MainFooter />
      {/* <Footer
        footer={footer}
        header={header}
        publicStoreDomain={publicStoreDomain}
      /> */}
      <Drawer
        setIsTriggerCancel={setIsTriggerCancel}
        isVisible={isDrawerVisible}
        closeDrawer={closeDrawer}
        currentMenu={currentMenu}
        setCurrentMenu={setCurrentMenu}
        menuItems={menuItems}
        categories={categories}
        otherCategories={otherCategories}
      />
    </Aside.Provider>
  );
}

function CartAside({cart}: {cart: PageLayoutProps['cart']}) {
  return (
    <Aside type="cart" heading="CART">
      <Suspense fallback={<p>Loading cart ...</p>}>
        <Await resolve={cart}>
          {(cart) => {
            return <CartMain cart={cart} layout="aside" />;
          }}
        </Await>
      </Suspense>
    </Aside>
  );
}

function SearchAside() {
  const queriesDatalistId = useId();
  return (
    <Aside type="search" heading="SEARCH">
      <div className="predictive-search">
        <br />
        <SearchFormPredictive>
          {({fetchResults, goToSearch, inputRef}) => (
            <>
              <input
                name="q"
                onChange={fetchResults}
                onFocus={fetchResults}
                placeholder="Search"
                ref={inputRef}
                type="search"
                list={queriesDatalistId}
              />
              &nbsp;
              <button onClick={goToSearch}>Search</button>
            </>
          )}
        </SearchFormPredictive>

        <SearchResultsPredictive>
          {({items, total, term, state, closeSearch}) => {
            const {articles, collections, pages, products, queries} = items;

            if (state === 'loading' && term.current) {
              return <div>Loading...</div>;
            }

            if (!total) {
              return <SearchResultsPredictive.Empty term={term} />;
            }

            return (
              <>
                <SearchResultsPredictive.Queries
                  queries={queries}
                  queriesDatalistId={queriesDatalistId}
                />
                <SearchResultsPredictive.Products
                  products={products}
                  closeSearch={closeSearch}
                  term={term}
                />
                <SearchResultsPredictive.Collections
                  collections={collections}
                  closeSearch={closeSearch}
                  term={term}
                />
                <SearchResultsPredictive.Pages
                  pages={pages}
                  closeSearch={closeSearch}
                  term={term}
                />
                <SearchResultsPredictive.Articles
                  articles={articles}
                  closeSearch={closeSearch}
                  term={term}
                />
                {term.current && total ? (
                  <Link
                    onClick={closeSearch}
                    to={`${SEARCH_ENDPOINT}?q=${term.current}`}
                  >
                    <p>
                      View all results for <q>{term.current}</q>
                      &nbsp; →
                    </p>
                  </Link>
                ) : null}
              </>
            );
          }}
        </SearchResultsPredictive>
      </div>
    </Aside>
  );
}

function MobileMenuAside({
  header,
  publicStoreDomain,
}: {
  header: PageLayoutProps['header'];
  publicStoreDomain: PageLayoutProps['publicStoreDomain'];
}) {
  return (
    header.menu &&
    header.shop.primaryDomain?.url && (
      <Aside type="mobile" heading="MENU">
        <HeaderMenu
          menu={header.menu}
          viewport="mobile"
          primaryDomainUrl={header.shop.primaryDomain.url}
          publicStoreDomain={publicStoreDomain}
        />
      </Aside>
    )
  );
}
