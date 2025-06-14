import React, {useEffect, useState} from 'react';
import ExpandIcon from '../icons/ExpandIcon';
import CancelIcon from '../icons/CancelIcon';
import useIsNotMobileViewport from '~/hooks/useIsNotMobileViewport';

export const RatingBadge = ({rating}: {rating: string}) => {
  const baseClasses =
    'md:px-4 px-3 py-1 text-sm font-medium rounded-full inline-block';
  const styles: Record<string, string> = {
    Exceptional:
      'bg-positive-green font-inter font-normal text-[12px] md:text-[20px] leading-xl tracking-normal text-center',
    Moderate:
      'bg-white font-inter font-normal text-[12px] md:text-[20px] leading-xl tracking-normal text-center',
    Low: 'bg-white font-inter font-normal text-[12px] md:text-[20px] leading-xl tracking-normal text-center',
  };
  return (
    <span className={`${baseClasses} ${styles[rating] || styles.Low}`}>
      {rating}
    </span>
  );
};

const Drawer = ({
  data,
  closeDrawer,
}: {
  data: {
    id: number;
    benefit: string;
    columns: {
      dreamey: {rating: string; description: string};
      cotton: {rating: string; description: string};
      silk: {rating: string; description: string};
    };
    scienceInfo: {title: string; description: string} | null;
  };
  closeDrawer: () => void;
}) => {
  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full h-full bg-[#00000066] z-40  transition-all duration-700 ease-in-out ${
          data ? 'opacity-100 translate-y-0' : 'opacity-0 pointer-events-none translate-y-full'
        }`}
        role="button"
        tabIndex={0}
        onClick={closeDrawer}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            closeDrawer();
          }
        }}
      ></div>

      <div
        className={`fixed bottom-0 left-0 w-full h-[calc(100vh-132px)] bg-background-2 shadow-lg z-50 transition-transform duration-700 ease-in-out ${
          data ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div className="flex justify-between items-center p-3 border-b border-neutral-1">
          <h3 className="font-inter font-semibold text-[14px] leading-xl tracking-normal">
            {data?.benefit}
          </h3>
          <CancelIcon
            width={24}
            height={24}
            className="cursor-pointer"
            onClick={closeDrawer}
          />
        </div>

        <div className="">
          {Object.entries(data?.columns || {}).map(([key, column]) => (
            <div
              key={key}
              className="flex flex-col border-b border-neutral-0 p-3 max-h-[calc(100vh-158px)] overflow-y-auto"
            >
              <div className="flex justify-between items-center">
                <h4 className="font-satoshi font-medium text-[14px] leading-xl tracking-normal text-gray-800">
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </h4>
                <RatingBadge rating={column.rating || ''} />
              </div>
              <p className="font-inter font-normal text-[14px] leading-xl tracking-normal text-gray-600 ">
                {column.description}
              </p>
            </div>
          ))}

          {data?.scienceInfo && (
            <div className="p-3">
              <h4 className="font-satoshi font-medium text-[14px] leading-xl tracking-normal text-gray-800">
                {data.scienceInfo.title}
              </h4>
              <p className="font-inter font-normal text-[14px] leading-xl tracking-normal text-gray-600 ">
                {data.scienceInfo.description}
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

const BenefitRow = ({
  rowData,
  onToggle,
  index,
}: {
  rowData: {
    id: number;
    benefit: string;
    isExpanded: boolean;
    columns: {
      dreamey: {rating: string; description:string};
      cotton: {rating: string; description: string};
      silk: {rating: string; description: string};
    };
    scienceInfo: {title: string; description: string} | null;
  };
  onToggle: (id: number) => void;
  index: number;
}) => {
  const {id, benefit, isExpanded, columns, scienceInfo} = rowData;
  const isEven = index % 2 === 0;

  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-4 ${
        !isEven ? 'bg-background-3' : 'bg-backgound-2'
      }`}
    >
      {/* Benefit Title and Toggle */}
      <div className="py-4 px-6 border-r border-background-3">
        <div className="flex items-center justify-between gap-3">
          <h3 className="font-satoshi font-medium text-[18px] leading-xl tracking-normal text-gray-800">
            {benefit}
          </h3>
          <button onClick={() => onToggle(id)} className="cursor-pointer">
            <ExpandIcon isExpanded={isExpanded} />
          </button>
        </div>
      </div>

      {/* Dreamey Rating */}
      <div className=" px-6 flex justify-center items-center border-r border-background-3">
        <RatingBadge rating={columns.dreamey.rating} />
      </div>

      {/* Cotton Rating */}
      <div className=" px-6 flex justify-center items-center border-r border-background-3">
        <RatingBadge rating={columns.cotton.rating} />
      </div>

      {/* Silk Rating */}
      <div className=" px-6 flex justify-center items-center">
        <RatingBadge rating={columns.silk.rating} />
      </div>

      {/* Expanded Content Section */}
      <div
        className={`md:col-span-4 transition-all duration-500 ease-in-out overflow-hidden ${
          isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="grid grid-cols-1 md:grid-cols-4 border-background-3">
          <div></div>
            {/* Dreamey Description */}
            <div className="p-6 pt-0 border-l border-b border-r border-background-3">
              <p className="font-inter font-normal text-[18px] leading-relaxed text-center text-gray-600">
                {columns.dreamey.description}
              </p>
            </div>

            {/* Cotton Description */}
            <div className="p-6 pt-0 border-r border-b border-background-3">
              <p className="font-inter font-normal text-[18px] leading-relaxed text-center text-gray-600">
                {columns.cotton.description}
              </p>
            </div>

            {/* Silk Description */}
            <div className="p-6 pt-0 border-b border-background-3">
              <p className="font-inter font-normal text-[18px] leading-relaxed text-center text-gray-600">
                {columns.silk.description}
              </p>
            </div>
        </div>

        {scienceInfo && (
         
          <div className="col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-4">
              <div className="py-8 md:col-start-2 md:col-span-3  border-l border-background-3 pl-8">
                <h4 className="font-inter font-semibold text-[24px] leading-2xl tracking-normal text-gray-800 text-left mb-2">
                  {scienceInfo.title}
                </h4>
                <p className="font-inter font-normal text-[20px] leading-xl tracking-normal text-gray-600 lg:text-left max-w-4xl">
                  {scienceInfo.description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const ExpandTable = ({
  tableData,
  onToggleRow,
  tableLabel = 'Benefits Overview',
}: {
  tableData: Array<{
    id: number;
    benefit: string;
    isExpanded: boolean;
    columns: {
      dreamey: {rating: string; description: string};
      cotton: {rating: string; description: string};
      silk: {rating: string; description: string};
    };
    scienceInfo: {title: string; description: string} | null;
  }>;
  onToggleRow: (id: number) => void;
  tableLabel: string;
}) => {
  const [drawerData, setDrawerData] = useState<null | (typeof tableData)[0]>(
    null,
  );

  const onToggleRowShowDrawer = (id: number) => {
    const selectedRow = tableData.find((row) => row.id === id);
    setDrawerData(selectedRow || null);
  };

  const closeDrawer = () => {
    setDrawerData(null);
  };

  return (
    <div className="flex flex-col justify-center font-sans">
      <span className="font-satoshi font-medium lg:text-[32px] md:px-6 px-3 md:pb-4 md:pt-[64x] mx-0 pt-4 leading-3xl text-left tracking-normal">
        {tableLabel}
      </span>
      <div className="flex flex-col gap-6 md:hidden">
        {tableData.map((row) => (
          <div key={row.id} className="flex flex-col bg-background-3 mt-4">
            {/* First block: Benefit and toggle icon */}
            <div className="flex items-center justify-between p-4">
              <h3 className="font-satoshi font-medium text-[14px] leading-xl tracking-normal text-gray-800">
                {row.benefit}
              </h3>
              <button
                onClick={() => onToggleRowShowDrawer(row.id)}
                className="cursor-pointer"
              >
                <ExpandIcon isExpanded={false} />
              </button>
            </div>

            {/* Second block: Ratings */}
            <div className="grid grid-cols-3 gap-4 bg-background-3">
              <div className="p-4 font-satoshi font-medium text-[14px] leading-xl tracking-normal text-center flex items-center justify-center relative after:content-[''] after:absolute after:right-0 after:w-[1px] after:h-[24px] after:bg-neutral-0">
                <RatingBadge rating={row.columns.dreamey.rating} />
              </div>
              <div className="p-4 font-satoshi font-medium text-[14px] leading-xl tracking-normal text-center flex items-center justify-center relative after:content-[''] after:absolute after:right-0 after:w-[1px] after:h-[24px] after:bg-neutral-0">
                <RatingBadge rating={row.columns.cotton.rating} />
              </div>
              <div className="p-4 font-satoshi font-medium text-[14px] leading-xl tracking-normal text-center flex items-center justify-center">
                <RatingBadge rating={row.columns.silk.rating} />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full hidden md:flex flex-col mx-auto bg-background-2 rounded-xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-4 bg-background-2 sticky top-0 z-8">
          <div className="lg:p-6 border-r border-background-3  flex-col flex items-center">
            <h2 className="font-satoshi font-medium text-[24px] leading-2xl tracking-normal text-gray-800">
              Research-Backed Benefits
            </h2>
          </div>
          <div className="border-r border-background-3 flex-col text-center flex items-center justify-center">
            <h2 className="font-satoshi font-medium text-[24px] leading-2xl tracking-normal text-gray-800">
              Dreamey&apos;s CloudThera
            </h2>
          </div>
          <div className="border-r border-background-3 flex-col text-center flex items-center justify-center">
            <h2 className="font-satoshi font-medium text-[24px] leading-2xl tracking-normal text-gray-800">
              Cotton
            </h2>
          </div>
          <div className="text-center flex-col flex items-center justify-center">
            <h2 className="font-satoshi font-medium text-[24px] leading-2xl tracking-normal text-gray-800">
              Silk
            </h2>
          </div>
        </div>
        <div className="border-background-3">
          {tableData.map((row, index) => (
            <div
              key={row.id}
              className="border-b border-background-3 last:border-b-0"
            >
              <BenefitRow rowData={row} onToggle={onToggleRow} index={index} />
            </div>
          ))}
        </div>
      </div>
      {drawerData && <Drawer data={drawerData} closeDrawer={closeDrawer} />}
    </div>
  );
};

export default ExpandTable;
