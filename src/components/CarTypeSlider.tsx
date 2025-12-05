"use client";

import { useState } from "react";

export default function CarTypeSlider() {
  const [type, setType] = useState<"domestic" | "import">("domestic");

  return (
    <div className="relative mx-auto w-64 overflow-hidden rounded-full bg-neutral-100 p-1 shadow">
      <div
        className={`bg-main absolute inset-y-1 w-[calc(50%-2px)] rounded-full transition-all duration-300 ${type === "domestic" ? "left-1" : "left-[calc(50%-4px)]"} `}
      />

      <div className="relative z-10 grid w-full grid-cols-2 items-center justify-center text-center">
        <button
          className={`w-full cursor-pointer px-4 py-2 text-lg transition ${
            type === "domestic" ? "font-semibold text-white" : "text-neutral-500"
          }`}
          onClick={() => setType("domestic")}
        >
          국산차
        </button>

        <button
          className={`w-full cursor-pointer px-4 py-2 text-lg transition ${
            type === "import" ? "font-semibold text-white" : "text-neutral-500"
          }`}
          onClick={() => setType("import")}
        >
          수입차
        </button>
      </div>
    </div>
  );
}
