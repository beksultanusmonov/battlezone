import React from "react";

function BattlePage() {
  return (
    <div>
      <div className="flex justify-center mb-4">
        <label className="input w-[50%]">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="search" required placeholder="Search ID" />
        </label>
      </div>
      <div className="flex flex-wrap gap-2.5 gap-y-5 justify-center">
        <div className="flex flex-col p-4 pt-2 bg-base-100 rounded-xl gap-1 select-none transition-all duration-300 hover:scale-102 cursor-pointer shadow-2xl btl-card">
          <h1 className="text-center font-bold mt-0">ID: A56262</h1>
          <div className="w-[290px] h-[150px] btl relative">
            <img
              src="https://aniq.uz/photos/news/YzF1EfHCHnAiuRZ.jpeg"
              className="w-[180px] h-[150px] absolute btl-l object-cover"
              alt=""
            />
            <img src="../../vs-md.png" className="absolute" alt="" />
            <img
              src="https://static.xabar.uz/crop/4/8/720_460_95_485921338.jpg"
              className="w-[180px] h-[150px] absolute btl-r object-cover"
              alt=""
            />
          </div>
          <div className="flex justify-between">
            <button className="btn btn-sm bg-f-c">
              <i className="fa-solid fa-microphone text-white"></i>
            </button>
            <button className="btn btn-sm bg-f-c">
              <i className="fa-solid fa-microphone text-white"></i>
            </button>
          </div>
          <div className="flex w-full mt-2">
            <div className="w-full h-2 bg-gray-400 relative rounded overflow-hidden">
              <span className="absolute left-0 w-[55%] bg-blue-500 h-full"></span>
              <span className="absolute right-0 w-[45%] bg-red-500 h-full"></span>
            </div>
          </div>
          <div className="flex justify-between">
            <p className="font-bold text-lg">55%</p>
            <p className="font-bold text-lg">45%</p>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-1">
              <img src="../../voice.png" className="w-6 scale-x-[-1]" alt="" />
              <p className="font-bold text-lg">110</p>
            </div>
            <div className="flex gap-1">
              <p className="font-bold text-lg">90</p>
              <img src="../../voice.png" className="w-6" alt="" />
            </div>
          </div>
          <div className="flex justify-between">
            <h2 className="text-sm font-semibold">Xamdam Sobirov</h2>
            <h2 className="text-sm font-semibold">Ozoda Nursaidova</h2>
          </div>
        </div>
        <div className="flex flex-col p-4 pt-2 bg-base-100 rounded-xl gap-1 select-none transition-all duration-300 hover:scale-102 cursor-pointer shadow-2xl btl-card">
          <h1 className="text-center font-bold mt-0">ID: A26672</h1>
          <div className="w-[290px] h-[150px] btl relative">
            <img
              src="https://portal.madaniyat.uz/media/artists/photo_2024-09-10_23-54-32-2Z9rDUOq.jpg"
              className="w-[180px] h-[150px] absolute btl-l object-cover"
              alt=""
            />
            <img src="../../vs-md.png" className="absolute" alt="" />
            <img
              src="https://cdn.iticket.uz/event/poster_square/J6H2aBPQFzFint9iVrdHvdSdhwXPyIWShue0by0x.jpg"
              className="w-[180px] h-[150px] absolute btl-r object-cover"
              alt=""
            />
          </div>
          <div className="flex justify-between">
            <button className="btn btn-sm bg-f-c">
              <i className="fa-solid fa-microphone text-white"></i>
            </button>
            <button className="btn btn-sm bg-f-c">
              <i className="fa-solid fa-microphone text-white"></i>
            </button>
          </div>
          <div className="flex w-full mt-2">
            <div className="w-full h-2 bg-gray-400 relative rounded overflow-hidden">
              <span className="absolute left-0 w-[60%] bg-blue-500 h-full"></span>
              <span className="absolute right-0 w-[40%] bg-red-500 h-full"></span>
            </div>
          </div>
          <div className="flex justify-between">
            <p className="font-bold text-lg">60%</p>
            <p className="font-bold text-lg">40%</p>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-1">
              <img src="../../voice.png" className="w-6 scale-x-[-1]" alt="" />
              <p className="font-bold text-lg">180</p>
            </div>
            <div className="flex gap-1">
              <p className="font-bold text-lg">120</p>
              <img src="../../voice.png" className="w-6" alt="" />
            </div>
          </div>
          <div className="flex justify-between">
            <h2 className="text-sm font-semibold">Afruza</h2>
            <h2 className="text-sm font-semibold">Jasmin</h2>
          </div>
        </div>
        <div className="flex flex-col p-4 pt-2 bg-base-100 rounded-xl gap-1 select-none transition-all duration-300 hover:scale-102 cursor-pointer shadow-2xl btl-card">
          <h1 className="text-center font-bold mt-0">ID: A56262</h1>
          <div className="w-[290px] h-[150px] btl relative">
            <img
              src="https://viberate-upload.ams3.cdn.digitaloceanspaces.com/prod/entity/artist/yulduz-usmonova-QRAZ1"
              className="w-[180px] h-[150px] absolute btl-l object-cover"
              alt=""
            />
            <img src="../../vs-md.png" className="absolute" alt="" />
            <img
              src="https://data.daryo.uz/media/2023/Nargiz%20Murodova/photo_2023-03-22_12-43-35.jpg"
              className="w-[180px] h-[150px] absolute btl-r object-cover"
              alt=""
            />
          </div>
          <div className="flex justify-between">
            <button className="btn btn-sm bg-f-c">
              <i className="fa-solid fa-microphone text-white"></i>
            </button>
            <button className="btn btn-sm bg-f-c">
              <i className="fa-solid fa-microphone text-white"></i>
            </button>
          </div>
          <div className="flex w-full mt-2">
            <div className="w-full h-2 bg-gray-400 relative rounded overflow-hidden">
              <span className="absolute left-0 w-[40%] bg-red-500 h-full"></span>
              <span className="absolute right-0 w-[60%] bg-blue-500 h-full"></span>
            </div>
          </div>
          <div className="flex justify-between">
            <p className="font-bold text-lg">40%</p>
            <p className="font-bold text-lg">60%</p>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-1">
              <img src="../../voice.png" className="w-6 scale-x-[-1]" alt="" />
              <p className="font-bold text-lg">200</p>
            </div>
            <div className="flex gap-1">
              <p className="font-bold text-lg">300</p>
              <img src="../../voice.png" className="w-6" alt="" />
            </div>
          </div>
          <div className="flex justify-between">
            <h2 className="text-sm font-semibold">Yulduz Usmonova</h2>
            <h2 className="text-sm font-semibold">Gulsanam Mamazoitova</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BattlePage;
