import React from 'react';

interface CategoryListProps {
  categories: {text: string; imagePath: string}[];
  title?: string;
}

const CategoryList: React.FC<CategoryListProps> = ({categories, title}) => {
  return (
    <div className="pb-6">
      <span className="font-satoshi font-medium text-2xl leading-3xl text-neutral-5 pb-1 tracking-normal text-center">
        {title}
      </span>
      <div className='flex flex-col gap-3'>
        {categories.map((category, index) => (
          <div key={index} className="flex items-center py-3 gap-3">
            <img
              src={category.imagePath}
              alt={category.text}
              className="w-16 h-16 rounded"
            />
            <span className="font-satoshi font-medium text-xl leading-3xl tracking-normal text-center">
              {category.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
