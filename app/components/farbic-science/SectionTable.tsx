import React, {useState} from 'react';
import ExpandTable from './ExpandTable';

const SectionTable: React.FC = () => {
  const initialTableData = [
    {
      id: 1,
      benefit: 'Acne & Breakout Prevention',
      isExpanded: true, // Mở rộng ban đầu như trong ảnh chụp màn hình
      columns: {
        dreamey: {
          rating: 'Exceptional',
          description:
            'Powerful antibacterial and moisture-wicking properties prevents clogged pores and reduces acne-causing bacteria by 200% compared to cotton.',
        },
        cotton: {
          rating: 'Low',
          description:
            'Traps bacteria and moisture against skin, significantly increasing risk of breakouts and irritation.',
        },
        silk: {
          rating: 'Moderate',
          description:
            'Offers some antibacterial benefits but retains moisture that can allow bacteria to multiply, making it less effective for acne-prone skin.',
        },
      },
      scienceInfo: {
        title: 'The Science Behind CloudThera',
        description:
          "The Hohenstein Institute's comprehensive 2018 clinical study on advanced cellulose fibers, which form the foundation of CloudThera's technology, demonstrates a remarkable ability to reduce bacterial growth by over 200% compared to cotton, scientifically supporting its effectiveness for acne-prone skin and prevention of breakouts.",
      },
    },
    {
      id: 2,
      benefit: 'Dry Skin & Redness Relief',
      isExpanded: false,
      columns: {
        dreamey: {
          rating: 'Exceptional',
          description: 'Description for Dry Skin & Redness Relief on Dreamey.',
        },
        cotton: {
          rating: 'Low',
          description: 'Description for Dry Skin & Redness Relief on Cotton.',
        },
        silk: {
          rating: 'Moderate',
          description: 'Description for Dry Skin & Redness Relief on Silk.',
        },
      },
      scienceInfo: null,
    },
    {
      id: 3,
      benefit: 'Wrinkle & Fine Line Prevention',
      isExpanded: false,
      columns: {
        dreamey: {
          rating: 'Exceptional',
          description:
            'Description for Wrinkle & Fine Line Prevention on Dreamey.',
        },
        cotton: {
          rating: 'Low',
          description:
            'Description for Wrinkle & Fine Line Prevention on Cotton.',
        },
        silk: {
          rating: 'Exceptional',
          description:
            'Description for Wrinkle & Fine Line Prevention on Silk.',
        },
      },
      scienceInfo: null,
    },
    {
      id: 4,
      benefit: 'Prevents Allergies & Irritation',
      isExpanded: false,
      columns: {
        dreamey: {
          rating: 'Exceptional',
          description:
            'Description for Prevents Allergies & Irritation on Dreamey.',
        },
        cotton: {
          rating: 'Low',
          description:
            'Description for Prevents Allergies & Irritation on Cotton.',
        },
        silk: {
          rating: 'Exceptional',
          description:
            'Description for Prevents Allergies & Irritation on Silk.',
        },
      },
      scienceInfo: null,
    },
  ];

  const [tableData, setTableData] = useState(initialTableData);

  const handleToggleRow = (id: number) => {
    setTableData(
      tableData.map((row) =>
        row.id === id ? {...row, isExpanded: !row.isExpanded} : row,
      ),
    );
  };
  return (
    <div className="w-full bg-background-2 flex justify-center  ">
      <div className="max-w-[1440px] w-full flex items-center justify-center lg:gap-y-[64px] h-full lg:px-[64px] md:px-3 py-[100px] flex-col">
        <span className="font-satoshi font-medium lg:text-[48px] text-[24px] leading-5xl tracking-normal text-center">
          SCIENTIFICALLY SUPERIOR BY EVERY MEASURE
        </span>
        <div className="w-full grid grid-cols-3 gap-4 h-[56px] md:hidden bg-background-3 mt-8">
          <div className="p-1 font-satoshi font-medium text-[14px] leading-xl tracking-normal text-center flex items-center justify-center relative after:content-[''] after:absolute after:right-0 after:w-[1px] after:h-[24px] after:bg-neutral-0">
            Dreamey’s CloudThera
          </div>
          <div className="p-1 font-satoshi font-medium text-[14px] leading-xl tracking-normal text-center flex items-center justify-center relative after:content-[''] after:absolute after:right-0 after:w-[1px] after:h-[24px] after:bg-neutral-0">
            Cotton
          </div>
          <div className="p-1 font-satoshi font-medium text-[14px] leading-xl tracking-normal text-center flex items-center justify-center">
            Silk
          </div>
        </div>
        <div className="flex flex-col w-full ">
          <ExpandTable
            tableData={tableData}
            onToggleRow={handleToggleRow}
            tableLabel="SKIN HEALTH"
          />
        </div>
        <div className="flex flex-col w-full ">
          <ExpandTable
            tableData={tableData}
            onToggleRow={handleToggleRow}
            tableLabel="SLEEP QUALITY"
          />
        </div>
        <div className="flex flex-col w-full ">
          <ExpandTable
            tableData={tableData}
            onToggleRow={handleToggleRow}
            tableLabel="HAIR HEALTH"
          />
        </div>
        <div className="flex flex-col w-full ">
          <ExpandTable
            tableData={tableData}
            onToggleRow={handleToggleRow}
            tableLabel="QUALITY & SUSTAINABILITY"
          />
        </div>
      </div>
    </div>
  );
};

export default SectionTable;
