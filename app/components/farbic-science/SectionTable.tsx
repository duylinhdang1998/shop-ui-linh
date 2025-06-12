import React from 'react';
import ExpandTable from './ExpandTable';

const SectionTable: React.FC = () => {
  return (
    <div className="w-full bg-background-2 flex justify-center ">
      <div className="max-w-[1440px]  flex items-center justify-center h-full px-3 lg:px-[64px] py-[100px] flex-col">
        <span>SCIENTIFICALLY SUPERIOR BY EVERY MEASURE</span>
        <div className='flex flex-col w-full'>
            <span>SKIN HEALTH</span>
            <ExpandTable />
        </div>
      </div>
    </div>
  );
};

export default SectionTable;
