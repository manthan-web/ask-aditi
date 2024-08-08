"use client";

const MainPage = () => {
  return (
    <div>
      {/* gallery */}
      <div className="flex flex-col md:flex-row w-full min-h-screen justify-between">
        {/* right (Chat Preview) - First on mobile */}
        <div
          className="order-1 sticky top-36 md:top-0 md:order-2 flex-1 bg-green-200 flex items-center justify-center h-screen"
        >
          <div className="md:h-[35rem] h-[30rem] w-[35rem] rounded-md md:w-[40rem] border flex items-center justify-center border-black">
            chat preview
          </div>
        </div>

        {/* left (Text Content) - Second on mobile */}
        <div className="order-2 md:order-1 flex-1 text-6xl font-extrabold flex gap-3 flex-col min-h-screen">
          <div className="w-full flex items-center h-[15rem] md:h-[30rem] shrink-0 justify-start mt-32 px-12">
            dynamic section
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
