import { SectionWrapper } from "./SectionWrapper";

export function ExplainGrid({
  type,
  leftChildren,
  rightChildren,
}: {
  type: "white" | "main" | "gray";
  leftChildren: React.ReactNode;
  rightChildren: React.ReactNode;
}) {
  return (
    <SectionWrapper
      type={type}
      className="grid grid-cols-1 gap-4 text-start md:grid-cols-2 md:gap-10"
    >
      <div className="flex h-full w-full items-center justify-center">{leftChildren}</div>
      <div className="flex h-full w-full items-center justify-center">{rightChildren}</div>
    </SectionWrapper>
  );
}
