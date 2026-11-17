import { useState } from 'react';
import { Sprout } from 'lucide-react';

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectClassName?: string;
}

export function SafeImage({
  src,
  alt,
  className = 'w-full h-full object-cover',
  aspectClassName = 'w-full h-full',
}: SafeImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`${aspectClassName} flex flex-col items-center justify-center bg-gradient-to-br from-[#EAF7EE] to-[#DCEFE2] text-[#14532D] p-6 text-center`}
        role="img"
        aria-label={alt}
      >
        <div className="w-12 h-12 rounded-xl bg-white/80 flex items-center justify-center mb-3 border border-[#C6DFCD]">
          <Sprout className="w-6 h-6 text-[#16803C]" aria-hidden="true" />
        </div>
        <p className="text-sm font-medium text-[#14532D] max-w-xs">{alt}</p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
      loading="lazy"
    />
  );
}
