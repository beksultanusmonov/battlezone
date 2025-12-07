import React from "react";

function Statistics() {
  return (
    <div>
        {/* Statistika */}
      <div className="rounded-box mx-auto grid grid-cols-3 max-w-348 gap-4 p-6 max-sm:grid-cols-1 max-lg:grid-cols-2">
        <div className="flex flex-1 flex-col gap-4 bg-base-100 py-6 px-3 rounded hover:scale-105 tran cursor-pointer shadow-2xl">
          <div className="text-base-content flex items-center gap-2">
            <div className="avatar avatar-placeholder">
              <div className="bg-base-200 rounded-field size-9">
                <i className="fa-solid fa-trophy"></i>
              </div>
            </div>
            <h5 className="text-lg font-medium">Jami janglar:</h5>
          </div>
          <div>
            <div className="text-base-content text-5xl font-semibold">
              17,356,015
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-4 bg-base-100 py-6 px-3 rounded hover:scale-105 tran cursor-pointer shadow-2xl">
          <div className="text-base-content flex items-center gap-2">
            <div className="avatar avatar-placeholder">
              <div className="bg-base-200 rounded-field size-9">
                <i className="fa-solid fa-users"></i>
              </div>
            </div>
            <h5 className="text-lg font-medium">Jami foydalanuvchilar:</h5>
          </div>
          <div>
            <div className="text-base-content text-5xl font-semibold">
              17,356
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-4 bg-base-100 py-6 px-3 rounded hover:scale-105 tran cursor-pointer shadow-2xl">
          <div className="text-base-content flex items-center gap-2">
            <div className="avatar avatar-placeholder">
              <div className="bg-base-200 rounded-field size-9">
                <i className="fa-solid fa-heart"></i>
              </div>
            </div>
            <h5 className="text-lg font-medium">Aktiv janglar:</h5>
          </div>
          <div>
            <div className="text-base-content text-5xl font-semibold">65</div>
          </div>
        </div>
      </div>
    
        {/* Jadval */}
      <div className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
        <div className="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 p-4">
          <label htmlFor="input-group-1" className="sr-only">
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-body"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2"
                  d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              id="input-group-1"
              className="block w-full max-w-96 ps-9 pe-3 py-2 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body"
              placeholder="Search"
            />
          </div>
        </div>
        <table className="w-full text-sm text-left rtl:text-right text-body">
          <thead className="text-sm text-body bg-neutral-secondary-medium border-b border-t border-default-medium">
            <tr>
              <th scope="col" className="px-6 py-3 font-medium">
                Barcha Foydalanuvchi:
              </th>
              <th scope="col" className="px-6 py-3 font-medium">
                Taklif:
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-neutral-primary-soft border-b border-default hover:bg-neutral-secondary-medium">
              <th
                scope="row"
                className="flex items-center px-6 py-4 text-heading whitespace-nowrap"
              >
                <img
                  className="w-10 h-10 rounded-full"
                  src="../../avatars/2.png"
                  alt="Jese image"
                />
                <div className="ps-3">
                  <div className="text-base font-semibold">username</div>
                  <div className="font-normal text-body block max-sm:max-w-[25ch] truncate">
                    usernamexsaxasxasxa@gmail.com
                  </div>
                </div>
              </th>
              <td className="px-6 py-4">
                <button className="btn bg-f-c font-medium text-white hover:underline rounded">
                  Obuna
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Statistics;
