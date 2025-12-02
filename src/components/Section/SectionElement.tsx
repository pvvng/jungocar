import Image, { ImageProps } from "next/image";
import { JSX } from "react";

interface SectionTextProps {
  payload: string | React.ReactNode;
  className?: string;
  tag?: keyof JSX.IntrinsicElements; // HTML tag
  baseClass?: string;
}

function BaseText({ payload, className = "", tag: Tag = "p", baseClass = "" }: SectionTextProps) {
  return <Tag className={`${baseClass} ${className}`}>{payload}</Tag>;
}

export const SectionTitle = (props: SectionTextProps) => (
  <BaseText {...props} tag="h2" baseClass="mb-10 text-4xl font-extrabold" />
);

export const SectionSubTitle = (props: SectionTextProps) => (
  <BaseText {...props} tag="h3" baseClass="text-main mb-2 text-lg font-medium" />
);

export const SectionText = ({
  payload,
  className = "",
  variant = "single",
}: SectionTextProps & { variant?: "single" | "middle" | "last" }) => {
  const spacingClass = (() => {
    switch (variant) {
      case "middle":
        return "mb-6";
      case "last":
        return "mb-8";
      case "single":
      default:
        return "mb-0.5";
    }
  })();

  return (
    <BaseText
      payload={payload}
      tag="p"
      baseClass={`${spacingClass} text-lg text-gray-700`}
      className={className}
    />
  );
};

interface SectionImageProps {
  src: string;
  alt: string;
  width: number | `${number}`;
  height: number | `${number}`;
  className?: string;
}

export function SectionImage({
  src,
  alt,
  width,
  height,
  className,
  ...rest
}: ImageProps & SectionImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={`mx-auto ${className}`}
      draggable={false}
      {...rest}
    />
  );
}
