import { forwardRef, useImperativeHandle, useState } from 'react';

export type SlidingImagesHandle = {
  forwardsImage: () => void;
  backwardsImage: () => void;
};

type SlidingImagesProps = {
  images: string[];
};

const SlidingImages = forwardRef<SlidingImagesHandle, SlidingImagesProps>(
  ({ images: initialImages }, ref) => {
    const [images, setImages] = useState<string[]>(initialImages);
    const [animating, setAnimating] = useState(false);

    const rotateForward = () => {
      if (animating) return;
      setAnimating(true);

      // Wait for animation to complete before actually changing the order
        setImages((prev) => {
          const first = prev[0];
          return first ? [...prev.slice(1), first] : prev;
        });
        setAnimating(false);
    };

    const rotateBackward = () => {
      if (animating) return;
      setAnimating(true);

        setImages((prev) => {
          const last = prev[prev.length - 1];
          return last ? [last, ...prev.slice(0, -1)] : prev;
        });
        setAnimating(false);
    };

    useImperativeHandle(ref, () => ({
      forwardsImage: rotateForward,
      backwardsImage: rotateBackward,
    }));

    return (
      <div className="relative left-10 h-[805px] w-[920px] rounded-[50px]">
        {images.map((src, index) => {
          const slotStyles = [
            'top-10 left-70 z-30 h-[681px] w-[568px] rotate-15 ', // top
            'top-5 left-30 z-10 h-[681px] w-[568px] rotate-5',          // middle
            'top-20 z-0 h-[537px] w-[448px]',                           // back
          ];

          return (
            <div
              key={src}
              className={`absolute rounded-[50px] transition-all duration-500 ${slotStyles[index]}`}
            >
              <img
                src={src}
                alt={`Image ${index + 1}`}
                className="rounded-[50px] w-full h-full object-cover"
              />
              {(index === 1 || index === 2) && (
                <div className="absolute inset-0 rounded-[50px] bg-white opacity-40"></div>
              )}
            </div>
          );
        })}
      </div>
    );
  }
);

SlidingImages.displayName = 'SlidingImages';

export default SlidingImages;
