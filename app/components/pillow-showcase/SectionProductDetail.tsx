import React, {useState} from 'react';
import ButtonUnderline from '../ui/ButtonUnderline';
import ArrowDown from '../icons/ArrowDown';
import {Rating} from '@smastrom/react-rating';
import CheckedIcon from '../icons/CheckedIcon';
import HundredDayIcon from '../icons/100DayIcon';
import PlaneIcon from '../icons/PlaneIcon';
import {GuaranteesList} from './GuaranteesList';
import BagIcon from '../icons/BagIcon';
import RelevantProducts from './RelevantProducts';
import ExpandCollapseSection from './ExpandCollapseSection';

const SectionProductDetail: React.FC = () => {
  const sampleItems = [
    {
      question: 'What materials are used in the product?',
      answer:
        'Our product is made from hypoallergenic and breathable fabrics designed for maximum comfort.',
    },
    {
      question: 'How do I care for the product?',
      answer:
        'The product is machine washable. Use cold water and tumble dry on low heat for best results.',
    },
    {
      question: 'What is the return policy?',
      answer:
        'We offer a 100-day risk-free guarantee. If you’re not satisfied, you can return the product for a full refund.',
    },
    {
      question: 'Is the product available in different sizes?',
      answer:
        'Yes, the product is available in Standard, King, and Large sizes to suit your needs.',
    },
  ];

  const images = [
    {src: '/yellow_pillow.png', alt: 'Small Product 1'},
    {src: '/white_pillow.png', alt: 'Small Product 2'},
    {src: '/bed_1.png', alt: 'Small Product 3'},
    {src: '/bed_2.png', alt: 'Small Product 4'},
  ];

  const guarantees = [
    {icon: <PlaneIcon />, text: 'Free Shipping'},
    {icon: <HundredDayIcon />, text: '100-Day Risk-Free Guarantee'},
    {icon: <CheckedIcon />, text: 'Hypoallergenic & Dermatologist Approved'},
  ];

  const sizes = [
    {fullText: 'Standard (20” x 27”)', short: 'S'},
    {fullText: 'King (20" x 36")', short: 'K'},
    {fullText: 'Large (20" x 40")', short: 'L'},
  ];

  const colors = ['yellow', 'white', 'grey'];

  const [selectedColor, setSelectedColor] = useState<string>(colors[0]);
  const [selectedSize, setSelectedSize] = useState<string>(sizes[0].fullText);
  const [quantity, setQuantity] = useState<number>(1);
  const [bigImage, setBigImage] = useState<string>(images[0].src);

  const relevantProducts = [
    {
      title: 'Essentials Sleep Set',
      image: '/img_pillowcase.png',
      price: '$309',
      salePrice: '$395',
      discount: 'SAVE 22%',
    },
    {
      title: 'Complete Sleep System',
      image: '/img_pillowcase.png',
      price: '$349',
      salePrice: '$455',
      discount: 'SAVE 22%',
    },
  ];

  const starDrawing = (
    <path d="M28.6669 14.873L23.3015 19.4899L24.9087 26.3635C24.9938 26.7229 24.9695 27.099 24.839 27.4448C24.7084 27.7906 24.4774 28.0908 24.1747 28.3078C23.8721 28.5249 23.5112 28.6491 23.1373 28.6651C22.7634 28.681 22.3931 28.5879 22.0725 28.3975L15.9921 24.7613L9.92475 28.3975C9.60422 28.5879 9.23385 28.681 8.85996 28.6651C8.48607 28.6491 8.12524 28.5249 7.82258 28.3078C7.51993 28.0908 7.28889 27.7906 7.15833 27.4448C7.02778 27.099 7.00351 26.7229 7.08856 26.3635L8.69343 19.4969L3.3268 14.873C3.04295 14.6317 2.8377 14.313 2.73679 13.9571C2.63587 13.6012 2.64378 13.2238 2.75953 12.8723C2.87528 12.5208 3.09371 12.2108 3.38743 11.9812C3.68114 11.7516 4.03708 11.6126 4.4106 11.5817L11.4844 10.9776L14.2457 4.48395C14.3899 4.14322 14.6331 3.85217 14.9447 3.64745C15.2563 3.44273 15.6224 3.3335 15.9969 3.3335C16.3713 3.3335 16.7374 3.44273 17.049 3.64745C17.3607 3.85217 17.6039 4.14322 17.7481 4.48395L20.5176 10.9776L27.5891 11.5817C27.9626 11.6126 28.3185 11.7516 28.6122 11.9812C28.906 12.2108 29.1244 12.5208 29.2401 12.8723C29.3559 13.2238 29.3638 13.6012 29.2629 13.9571C29.162 14.313 28.9567 14.6317 28.6729 14.873H28.6669Z" />
  );

  return (
    <div className="w-full flex-col items-center gap-[80px] bg-background-2 flex justify-center py-[64px] lg:py-[100px]">
      <div className="max-w-[1440px] grid grid-cols-1 md:grid-cols-2 gap-[80px] items-start justify-center h-full px-3 lg:px-[64px]">
        {/* Block 1: Images */}
        <div className="grid grid-rows-2 gap-8">
          <img
            src={bigImage}
            alt="Big Product"
            className="w-full max-w-[680px] h-auto object-cover row-span-1"
          />
          <div className="grid grid-cols-2 gap-8">
            {images.map((image, index) => (
              <button
                key={index}
                className="w-full h-auto object-cover"
                onClick={() => {
                  if (index == 1 || index === 2) {
                    setBigImage(image.src);
                  }
                }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Block 2: Product Details */}
        <div className="flex flex-col">
          <h1 className="!m-o font-satoshi font-medium text-[48px] leading-5xl tracking-normal">
            CloudThera™ Pillowcases
          </h1>
          <h2 className="text-neutral-3 pt-2 font-inter font-normal text-[20px] leading-xl tracking-normal">
            Includes 2 pillowcases
          </h2>
          <div className="flex items-center gap-6 pt-6">
            <Rating
              value={5}
              readOnly
              style={{
                width: 150,
              }}
              itemStyles={{
                activeFillColor: '#F69149',
                inactiveFillColor: '#D9D9D9',
                itemShapes: starDrawing,
              }}
            />
            <span className="font-inter text-neutral-3 font-normal text-[20px] leading-xl tracking-normal">
              15,000+ happy customers
            </span>
          </div>
          <div className="flex  items-center  gap-6 pt-6">
            <span className="font-satoshi font-medium text-[48px] leading-5xl tracking-normal">
              $69
            </span>
            <span className="font-satoshi font-medium text-4xl leading-[48px] tracking-normal line-through">
              $85
            </span>
            <span className="font-inter flex justify-center items-center rounded-[1000px] text-white py-2 px-4 bg-black  font-semibold text-[20px]  tracking-normal">
              SAVE 19%
            </span>
          </div>
          <p className="font-inter font-normal text-[20px] leading-xl tracking-normal pt-6">
            Experience clearer skin, fewer wrinkles, smoother hair, and
            unmatched softness for deeper, more restorative sleep. CloudThera™
            is scientifically proven to outperform cotton and silk in every
            measurable way.
          </p>
          <div className="flex flex-col gap-4 pt-6">
            <div>
              <span className="font-inter font-normal text-[20px] leading-xl tracking-normal">
                <div className="flex items-center gap-2">
                  <span className="font-inter font-normal text-[20px] leading-xl tracking-normal">
                    Color:
                  </span>
                  <span className="font-satoshi font-medium text-[24px] leading-2xl tracking-normal">
                    {selectedColor}
                  </span>
                </div>
              </span>
              <div className="flex gap-4 mt-2">
                {colors.map((color) => (
                  <button
                    key={color}
                    className={`w-[56px] h-[56px] rounded-full cursor-pointer ${
                      color === 'yellow'
                        ? 'border border-neutral-0 bg-[#E8E0D2] '
                        : color === 'white'
                          ? 'border border-neutral-0 bg-[#F7FAFC]'
                          : color === 'grey'
                            ? 'border border-primary-1 bg-[#A9A9A9]'
                            : ''
                    }`}
                    onClick={() => {
                      setSelectedColor(color);
                      setBigImage(`/${color}_pillow.png`);
                    }}
                  ></button>
                ))}
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-inter font-normal text-[20px] leading-xl tracking-normal">
                  Size:{' '}
                </span>
                <span className="font-satoshi font-medium text-[24px] leading-2xl tracking-normal">
                  {selectedSize}
                </span>
              </div>
              <div className="flex gap-4 mt-2 ">
                {sizes.map((size) => (
                  <button
                    key={size.short}
                    className={`py-4 px-8 flex items-center justify-center border cursor-pointer ${
                      selectedSize === size.fullText
                        ? 'border-[#F69149]'
                        : 'border-neutral-0'
                    } font-inter font-normal text-[16px] rounded-[8px] leading-xl tracking-normal`}
                    onClick={() => setSelectedSize(size.fullText)}
                  >
                    {size.fullText}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-4 pt-6 cursor-pointer">
              <span className="font-satoshi font-medium text-[16px]">QTY:</span>
              <div className="flex items-center gap-4">
                <button
                  className="w-[56px] h-[56px] bg-neutral-0 rounded-full flex items-center justify-center"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </button>
                <span className="tl font-inter font-semibold text-lg leading-[20px] tracking-[0%] text-center">
                  {quantity}
                </span>
                <button
                  className="w-[56px] h-[56px] bg-neutral-0 rounded-full flex items-center justify-center"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <ButtonUnderline className="lg:py-4 lg:px-8 px-5 py-3 mt-6">
            <div className="flex justify-center items-center gap-4">
              <BagIcon />
              <span className="font-satoshi font-medium text-[24px] leading-2xl tracking-normal">
                ADD TO CART
              </span>
            </div>
          </ButtonUnderline>
          <GuaranteesList className="mt-6" guarantees={guarantees} />
          <span className="pt-6 font-satoshi font-medium text-[24px] leading-2xl tracking-[0%]">
            Bundles and save
          </span>
          <RelevantProducts products={relevantProducts} />

          <ExpandCollapseSection items={sampleItems} />
        </div>
      </div>
    </div>
  );
};

export default SectionProductDetail;
