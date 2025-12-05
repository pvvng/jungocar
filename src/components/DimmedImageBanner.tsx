import { ImageSpace } from "./ImageSpace";

interface DimmedImageBannerProps {
  title: string;
  descriptions?: string[];
}

export function DimmedImageBanner({ title, descriptions = [] }: DimmedImageBannerProps) {
  return (
    <div className="relative flex h-[300px] items-center justify-center text-center">
      <div className="z-1">
        <h1 className="mb-3 text-3xl font-extrabold text-white">{title}</h1>
        {descriptions.map((desc) => (
          <p key={desc} className="mb-0.5 text-base text-neutral-100 last:mb-0">
            {desc}
          </p>
        ))}
      </div>
      <div className="absolute inset-0 h-full w-full bg-black/30" />
      <ImageSpace className="absolute inset-0 -z-1 rounded-none" />
    </div>
  );
}
