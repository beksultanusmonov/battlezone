function CreateBattle() {
  return (
    <div className="flex flex-wrap justify-evenly rounded-md gap-3">
      <div className="w-[400px] max-w-[96vw] bg-base-100 px-1.5 sm:px-2 py-4 rounded">
        <label className="input w-full mb-4">
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
          <input type="search" required placeholder="Search" />
        </label>
        <div className="w-full h-20 hidden">
          <ul className="border-base-content/25 divide-base-content/25 *:last:rounded-b-md divide-y rounded-md border *:p-3 *:first:rounded-t-md">
            <li className="flex items-start sm:items-center">
              <img
                src="../../avatars/1.png"
                alt="User Image"
                className="w-13 me-3 rounded-full bg-f-c"
              />
              <div className="flex grow flex-col items-start justify-between sm:flex-row">
                <div>
                  <h6 className="text-base text-base-content">
                    Danish sesame snaps halvah
                  </h6>
                </div>
                <div className="action max-sm:mt-1">
                  <button className="btn btn-primary btn-sm">Add</button>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="w-full h-20 my-2 hidden">
          <ul className="border-base-content/25 divide-base-content/25 *:last:rounded-b-md divide-y rounded-md border *:p-3 *:first:rounded-t-md">
            <li className="flex items-start sm:items-center">
              <img
                src="../../avatars/1.png"
                alt="User Image"
                className="w-13 me-3 rounded-full bg-f-c"
              />
              <div className="flex grow flex-col items-start justify-between sm:flex-row">
                <div>
                  <h6 className="text-base text-base-content">
                    Danish sesame snaps halvah
                  </h6>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="w-full justify-center mb-3 flex">
          <div className="w-[300px] h-[160px] relative">
            <img
              src=""
              className="w-[62%] absolute top-0  left-0 btl-i-l h-full bg-purple-800"
            />
            <div className="absolute top-[50px] w-full flex justify-center">
              <img src="../../vs-md.png" className="z-20 w-30" />
            </div>
            <img
              src=""
              className="w-[62%] absolute top-0 right-0 btl-i-r h-full bg-base-300 bg-f-c"
            />
          </div>
        </div>
        <form>
          <div className="bg-base-200/60 rounded-box flex flex-col justify-center border-2 border-base-content/20 border-dashed relative">
            <div className="text-center cursor-pointer p-10">
              <i className="fa-solid fa-cloud-arrow-down f-c text-5xl"></i>
              <p className="text-base-content/50 mb-3 text-sm">
                Rasm yuklash uchun joy
              </p>
              <div className="btn btn-soft btn-sm btn-primary text-nowrap">
                <i className="fa-solid fa-file-arrow-up"></i> Fayl tanlash
              </div>
              <input
                type="file"
                className="absolute w-full h-full top-0 left-0 opacity-0"
              />
            </div>
          </div>
          <h1 className="mt-2 text-gray-500">Muddati:</h1>
          <select
            className="input w-full mt-2 select"
            defaultValue={"Muddatni tanlang"}
          >
            <option disabled={true}>Muddatni tanlang</option>
            <option value="1">1 Kun</option>
            <option value="3">3 Kun</option>
            <option value="7">7 Kun</option>
            <option value="15">15 Kun</option>
            <option value="30">30 Kun</option>
          </select>
          <button className="btn bg-f-c w-full my-5 text-white">
            Yuborish
          </button>
        </form>
      </div>
      <div className="w-[300px] max-w-[96vw] rounded pl-2 px-1.5 sm:px-2 py-4 bg-base-100">
        <h1 className="px-1 text-xl text-gray-600">
          Sizga yuborilgan takliflar
        </h1>
        {/* <h2>Sizga takliflar mavjud emas !</h2> */}
        <ul className="border-base-content/25 divide-base-content/25 *:last:rounded-b-md divide-y rounded-md border *:p-3 *:first:rounded-t-md my-2">
          <li className="flex items-start sm:items-center">
            <img
              src="../../avatars/1.png"
              alt="User Image"
              className="w-13 me-3 rounded-full bg-f-c"
            />
            <div className="flex grow flex-col items-start justify-between sm:flex-row">
              <div>
                <h6 className="text-base text-base-content">username</h6>
              </div>
              <div className="action max-sm:mt-1">
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() =>
                    document.getElementById("my_modal_2").showModal()
                  }
                >
                  <i className="fa-solid fa-eye"></i>
                </button>
              </div>
              <dialog id="my_modal_2" className="modal">
                <div className="modal-box">
                  <div className="w-full justify-center mb-3 flex">
                    <div className="w-[300px] h-[160px] relative">
                      <img
                        src=""
                        className="w-[62%] absolute top-0  left-0 btl-i-l h-full bg-purple-800"
                      />
                      <div className="absolute top-[50px] w-full flex justify-center">
                        <img src="../../vs-md.png" className="z-20 w-30" />
                      </div>
                      <img
                        src=""
                        className="w-[62%] absolute top-0 right-0 btl-i-r h-full bg-base-300 bg-f-c"
                      />
                    </div>
                  </div>
                  <form>
                    <div className="bg-base-200/60 rounded-box flex flex-col justify-center border-2 border-base-content/20 border-dashed relative">
                      <div className="text-center cursor-pointer p-10">
                        <i className="fa-solid fa-cloud-arrow-down f-c text-5xl"></i>
                        <p className="text-base-content/50 mb-3 text-sm">
                          Rasm yuklash uchun joy
                        </p>
                        <div className="btn btn-soft btn-sm btn-primary text-nowrap">
                          <i className="fa-solid fa-file-arrow-up"></i> Fayl tanlash
                        </div>
                        <input
                          type="file"
                          className="absolute w-full h-full top-0 left-0 opacity-0"
                        />
                      </div>
                    </div>
                    <div className="w-full grid grid-cols-2">
                      <button className="btn bg-f-c w-full my-5 text-white">
                        Yuborish
                      </button>
                      <button className="btn bg-red-500 w-full my-5 text-white">
                        <i className="fa-solid fa-trash"></i>
                      </button>
                    </div>
                  </form>
                </div>
                <form method="dialog" className="modal-backdrop">
                  <button>close</button>
                </form>
              </dialog>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CreateBattle;
