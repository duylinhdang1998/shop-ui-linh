interface LocationImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: 'square' | 'wide';
}

export const LocationImage = ({ src, alt, className = '', aspectRatio = 'square' }: LocationImageProps) => {
  return (
    <div className={`${className}`}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover rounded-sm"
      />
    </div>
  );
}; 