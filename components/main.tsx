"use client";

import { HeroHighlightDemo } from "./hero-component";
import { AnimatedTooltip } from "./ui/animated-tool-tip";

const MainPage = () => {
  const people = [
    {
      id: 1,
      name: "John Doe",
      designation: "Software Engineer",
      image:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    },
    {
      id: 2,
      name: "Manthan Narang",
      designation: "Software Engineer",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 3,
      name: "Hello World",
      designation: "Marketing",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
  ];

  return (
    <div>
      {/* gallery */}
      <div className="flex flex-col md:flex-row w-full min-h-screen justify-between">
        {/* right (Chat Preview) - First on mobile */}
        <div className="order-1 sticky top-36 md:top-0 md:order-2 flex-1 flex items-center justify-center h-screen">
          <div className="md:h-[35rem] h-[30rem] w-[35rem] rounded-md md:w-[40rem] border flex items-center justify-center border-black">
            chat preview
          </div>
        </div>

        {/* left (Text Content) - Second on mobile */}
        <div className="order-2 md:order-1 flex-1 text-6xl font-extrabold flex gap-3 flex-col min-h-screen">
          <div className="w-full flex items-center flex-col md:items-start h-[15rem] md:h-[30rem] shrink-0 justify-center mt-32 px-12">
            <HeroHighlightDemo />
            <div className="flex py-4 shrink-0">
              <AnimatedTooltip items={people} />
            </div>
          </div>
          <div className="w-full flex items-center h-[30rem] justify-start px-12">
            Text-1
          </div>
          <div className="w-full flex items-center h-[30rem] justify-start px-12">
            Text-2
          </div>
          <div className="w-full flex items-center h-[30rem] justify-start px-12">
            Text-3
          </div>
          <div className="w-full flex items-center h-[30rem] justify-start px-12">
            Text-4
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
