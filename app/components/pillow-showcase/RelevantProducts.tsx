import React from 'react';
import ButtonUnderline from '../ui/ButtonUnderline';
import ArrowIcon from '../icons/Arrow';

interface Product {
  title: string;
  image: string;
  price: string;
  salePrice: string;
  discount: string;
}

interface RelevantProductsProps {
  products: Product[];
}

const RelevantProducts: React.FC<RelevantProductsProps> = ({products}) => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 pt-4 lg:pt-6 gap-3 lg:gap-6">
      {products.map((product, index) => (
        <div key={index} className="flex flex-col lg:gap-4 gap-3 rounded-lg lg:p-4 p-3 bg-background-3">
          <h3 className="font-satoshi font-medium lg:text-[20px] text-[14px]">
            {product.title}
          </h3>
          <div className="flex lg:gap-4 gap-3 items-center">
            <img
              src={product.image}
              alt={product.title}
              className="lg:w-[100px] lg:h-[100px] w-[80px] h-[80px] object-cover"
            />
            <div className="flex flex-col lg:gap-4 gap-3">
              <span className="font-satoshi font-medium lg:text-[16px] text-[14px] text-[#4C4C4C]">
                {product.title}
              </span>
              <div className="flex items-center gap-4">
                <span className="font-satoshi font-medium lg:text-[24px] text-[16px] leading-[32px] tracking-normal">
                  {product.price}
                </span>
                <span className="text-neutral-3 font-satoshi font-medium text-[14px] lg:text-[20px] leading-[20px] tracking-normal line-through">
                  {product.salePrice}
                </span>
                <span className="font-inter text-[#F69149] font-semibold lg:text-[20px] text-[14px] leading-xl tracking-normal">
                  {product.discount}
                </span>
              </div>
            </div>
            <div className='rounded-full lg:w-[56px] w-[48px] ml-auto h-[48px] lg:h-[56px] bg-white flex justify-center items-center'><ArrowIcon /></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RelevantProducts;
