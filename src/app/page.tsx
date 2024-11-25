"use client";

import Header from "@/ui/sections/header";
import WavingAvatarScene from "@/app/wavingAvatar";

export default function Home() {
  return (
    <main className="font-mont w-full min-h-screen h-full flex flex-col items-center justify-center">
      <Header />
      <WavingAvatarScene />
    </main>
  );
}
