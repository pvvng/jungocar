interface SectionWrapperProps {
  type: "white" | "gray" | "main";
  className?: string;
  children: React.ReactNode;
}

export function SectionWrapper({ type, className = "", children }: SectionWrapperProps) {
  // type에 따른 배경/텍스트 색상 결정
  const baseClass = "relative mx-auto max-w-screen-lg px-4 py-16 text-center";
  const typeClass = (() => {
    switch (type) {
      case "white":
        return "";
      case "main":
        return "bg-main text-white";
      case "gray":
        return "bg-page-green";
    }
  })();

  return (
    <section className={typeClass}>
      <div className={`${baseClass} ${className}`}>{children}</div>
    </section>
  );
}
