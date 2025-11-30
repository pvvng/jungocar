interface SectionWrapperProps {
  type: "white" | "gray";
  children: React.ReactNode;
}

export function SectionWrapper({ type, children }: SectionWrapperProps) {
  if (type === "white") {
    return (
      <section className="relative mx-auto max-w-screen-lg px-4 py-16 text-center">
        {children}
      </section>
    );
  }

  return (
    <section className="bg-page-green">
      <div className="relative mx-auto max-w-screen-lg px-4 py-16 text-center">{children}</div>
    </section>
  );
}
