export default function Phone({ children }: { children?: React.ReactNode }) {
  return (
    <div className="font-paperlogy group relative mx-auto h-[530px] w-full max-w-[280px] rounded-[35px] border border-neutral-800 bg-black p-[7px] shadow-xl">
      {/* buttons */}
      <div className="absolute top-[30%] -right-1 h-[45px] w-[3px] rounded-r-2xl bg-linear-to-r from-[#111] via-[#333] to-[#595959]"></div>
      <div className="absolute top-[26%] -left-1 h-[30px] w-[3px] scale-x-[-1] rounded-r-2xl bg-linear-to-r from-[#111] via-[#333] to-[#595959]"></div>
      <div className="absolute top-[36%] -left-1 h-[30px] w-[3px] scale-x-[-1] rounded-r-2xl bg-linear-to-r from-[#111] via-[#333] to-[#595959]"></div>
      {/* content */}
      <div className="h-full w-full overflow-scroll rounded-[25px]">{children}</div>
      {/* camera */}
      <div className="absolute top-0 right-1/2 h-[18px] w-[35%] translate-x-1/2 rounded-b-[10px] bg-black">
        <div className="absolute top-1.5 right-[84%] size-1.5 translate-x-1/2 rounded-full bg-white/5">
          <div className="absolute top-1/2 right-1/2 h-[3px] w-[3px] translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/20"></div>
        </div>
        <div className="absolute top-0.5 right-1/2 h-0.5 w-[40%] translate-x-1/2 rounded bg-neutral-800"></div>
      </div>
    </div>
  );
}
