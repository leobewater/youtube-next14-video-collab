"use client";

import { Info } from "@/app/board/[boardId]/_components/info";

export const Canvas = () => {
  return (
    <main className="h-full w-full relative bg-neutral-100 touch-none">
      <Info />
    </main>
  );
};
