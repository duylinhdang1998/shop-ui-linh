import React from 'react';
import { NavLink } from 'react-router';

function MainFooter() {
  const footerLinks = [
    {id: 1, title: 'Home', url: '/home'},
    {id: 2, title: 'Fabric Science', url: '/farbic-science'},
    {id: 3, title: 'About', url: '/about'},
    {id: 4, title: 'Shop', url: '/shop'},
  ];
  return (
    <footer className="relative bg-cover bg-[url(/footer.png)] bg-center ">
      <div className="absolute inset-0 bg-[#323232CC]"></div>
      <section className="relative w-full !pt-0 flex  md:flex-row justify-center items-center">
        <div className="max-w-[var(--max-width-container-xl)] w-full lg:items-center items-start grid grid-cols-2 md:grid-rows-1 grid-rows-2 lg:grid-cols-7 md:gap-[96px] gap-0 lg:px-[64px] px-[12px] py-[64px] lg:py-[100px]">
          {/* Logo Section */}
          <div className="col-span-1 lg:col-span-3 justify-center items-center md:block hidden md:order-none order-3">
            <img
              src="/dreamey.png"
              className="object-cover opacity-20"
              alt="logo"
            />
          </div>

          <ul className="col-span-1 mt-6 md:mt-0  flex-col flex lg:col-span-1 space-y-2 order-2 md:order-none ">
            {footerLinks?.map((item) => (
              <NavLink
                className="font-inter font-normal text-[#F0EBDF] text-lg leading-xl tracking-normal"
                end
                key={item.id}
                prefetch="intent"
                to={item.url}
              >
                {item.title}
              </NavLink>
            ))}
          </ul>

          <div className="col-span-1  mt-6 md:mt-0 lg:col-span-3 justify-center items-center block md:hidden order-3 md:order-none">
          
            <img
              src="/dreamey.png"
              className="object-cover opacity-20"
              alt="logo"
            />
          </div>

          {/* Column 3 */}
          <div className="col-span-full flex-col lg:col-span-3 flex items-left order-1 md:order-none">
            <p className="text-background-2 font-inter font-semibold text-lg leading-xl tracking-normal">
              Stay Updated
            </p>
            <p className="text-background-2 font-inter font-normal text-lg leading-xl tracking-normal">
              Subscribe to our newsletter for exclusive deals!
            </p>
            <div className="relative w-full max-w-[639px] border-0 mt-4 md:mt-6">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full max-w-[639px] bg-transparent rounded-none !pl-0 placeholder-background-2 font-inter font-semibold text-lg leading-xl tracking-normal focus:outline-none border-b-white border-x-0 border-t-0 transition-all peer text-background-2"
              />
              <span
                className="cursor-pointer absolute right-0 top-1/2 -translate-y-1/2 font-inter text-background-2 font-semibold text-lg leading-xl tracking-normal"
              >
                Subscribe
              </span>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default MainFooter;
