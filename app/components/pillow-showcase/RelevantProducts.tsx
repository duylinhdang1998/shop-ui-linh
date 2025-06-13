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
    <div className="w-full grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 pt-6 gap-6">
      {products.map((product, index) => (
        <div key={index} className="flex flex-col gap-4 rounded-lg p-4 bg-background-3">
          <h3 className="font-satoshi font-medium text-[20px]">
            {product.title}
          </h3>
          <div className="flex gap-4 items-center">
            <img
              src={product.image}
              alt={product.title}
              className="w-[100px] h-[100px] object-cover"
            />
            <div className="flex flex-col gap-4">
              <span className="font-satoshi font-medium text-[16px] text-[#4C4C4C]">
                {product.title}
              </span>
              <div className="flex items-center gap-4">
                <span className="font-satoshi font-medium text-[24px] leading-[32px] tracking-normal">
                  {product.price}
                </span>
                <span className="text-neutral-3 font-satoshi font-medium text-lg leading-[20px] tracking-normal line-through">
                  {product.salePrice}
                </span>
                <span className="font-inter text-[#F69149] font-semibold text-[20px] leading-xl tracking-normal">
                  {product.discount}
                </span>
              </div>
            </div>
            <div className='rounded-full w-[56px] ml-auto h-[56px] bg-white flex justify-center items-center'><ArrowIcon /></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RelevantProducts;
