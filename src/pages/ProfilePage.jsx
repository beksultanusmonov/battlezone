import React, { useState } from "react";

function ProfilePage() {
  const [changePass, setChangePass] = useState(false);
  return (
    <div>
      <div className="flex flex-wrap justify-center gap-3 transition duration-300">
        <div
          className={`w-[300px] bg-base-100 h-[${
            changePass ? "520px" : "380px"
          }] py-5 px-1 rounded`}
        >
          <div className="w-[150px] h-[150px] rounded-full mx-auto relative bg-f-c">
            <img
              src="../../avatars/1.png"
              className="w-full h-full object-cover rounded-full"
            />
            <div className="absolute bottom-1 z-20 right-0 rounded-full w-8 h-8 bg-white border cursor-pointer flex items-center justify-center">
              <i
                className="fa-solid fa-pen"
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
              ></i>
              <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                  <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                      ✕
                    </button>
                  </form>
                  <div className="flex flex-wrap justify-center gap-x-2 gap-y-4">
                    <img src="../../avatars/1.png" className="w-36 h-36 bg-f-c rounded-full transition duration-300 hover:scale-105" alt="" />
                    <img src="../../avatars/2.png" className="w-36 h-36 bg-f-c rounded-full transition duration-300 hover:scale-105" alt="" />
                    <img src="../../avatars/3.png" className="w-36 h-36 bg-f-c rounded-full transition duration-300 hover:scale-105" alt="" />
                    <img src="../../avatars/4.png" className="w-36 h-36 bg-f-c rounded-full transition duration-300 hover:scale-105" alt="" />
                    <img src="../../avatars/5.png" className="w-36 h-36 bg-f-c rounded-full transition duration-300 hover:scale-105" alt="" />
                    <img src="../../avatars/6.png" className="w-36 h-36 bg-f-c rounded-full transition duration-300 hover:scale-105" alt="" />
                    <img src="../../avatars/7.png" className="w-36 h-36 bg-f-c rounded-full transition duration-300 hover:scale-105" alt="" />
                    <img src="../../avatars/8.png" className="w-36 h-36 bg-f-c rounded-full transition duration-300 hover:scale-105" alt="" />
                  </div>
                </div>
              </dialog>
            </div>
          </div>
          <hr className="my-2 text-gray-500" />
          <div className="flex flex-col px-2 gap-y-2">
            <div className="w-full p-1 bg-gray-300 rounded-md">
              <span className="text-md text-gray-500">username:</span>
              <h2 className="wrap-break-word">beksultan</h2>
            </div>
            <div className="w-full p-1 bg-gray-300 rounded-md">
              <span className="text-md text-gray-500">email:</span>
              <h2 className="wrap-break-word">bek@gmail.com</h2>
            </div>
            {!changePass && (
              <>
                <button
                  className="btn bg-f-c text-white"
                  onClick={() => setChangePass(true)}
                >
                  Parolni tahrirlash
                </button>
              </>
            )}
          </div>
          {changePass && (
            <>
              <form className="flex flex-col px-2 gap-y-2 mt-4">
                <input
                  type="text"
                  placeholder="Eski parolni kiriting... "
                  className="input"
                />
                <input
                  type="text"
                  placeholder="Yangi parolni kiriting... "
                  className="input"
                />
                <input
                  type="text"
                  placeholder="Yangi parol tasdiqlang... "
                  className="input"
                />
                <div className="grid grid-cols-2 gap-1">
                  <span
                    className="btn bg-red-500"
                    onClick={() => setChangePass(false)}
                  >
                    <i className="fa-solid fa-arrow-up text-white"></i>
                  </span>
                  <button className="btn bg-f-c text-white">Saqlash</button>
                </div>
              </form>
            </>
          )}
        </div>
        <div className="w-[96vw] lg:w-[800px] md:max-[calc(100vw-300px)] rounded-lg bg-base-100 shadow-sm">
          <div className="overflow-x-auto">
            <table className="table w-[800px]">
              <thead>
                <tr>
                  <th>ID:</th>
                  <th>Jang:</th>
                  <th>Raqib:</th>
                  <th>Natija:</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-base-200">
                  <td>C135421</td>
                  <td>
                    <div className="w-[160px] h-[80px] btl btl-p-c relative">
                      <img
                        src="../../me.png"
                        className="w-[100px] h-full absolute btl-l btl-p object-cover"
                        alt=""
                      />
                      <img
                        src="../../vs-md.png"
                        className="absolute hidden"
                        alt=""
                      />
                      <img
                        src="https://data.daryo.uz/media/2024/01/26/photo_2024-01-26_15-39-44-AgLh54Az.jpg"
                        className="w-[100px] h-full absolute btl-r btl-p object-cover"
                        alt=""
                      />
                    </div>
                  </td>
                  <td>username</td>
                  <td>
                    <span className="badge badge-soft badge-success text-xs">
                      Yutish
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-base-200">
                  <td>C135421</td>
                  <td>
                    <div className="w-[160px] h-[80px] btl btl-p-c relative">
                      <img
                        src="../../me.png"
                        className="w-[100px] h-full absolute btl-l btl-p object-cover"
                        alt=""
                      />
                      <img
                        src="../../vs-md.png"
                        className="absolute hidden"
                        alt=""
                      />
                      <img
                        src="https://data.daryo.uz/media/2024/01/26/photo_2024-01-26_15-39-44-AgLh54Az.jpg"
                        className="w-[100px] h-full absolute btl-r btl-p object-cover"
                        alt=""
                      />
                    </div>
                  </td>
                  <td>username</td>
                  <td>
                    <span className="badge badge-soft badge-error text-xs">
                      Yutqazish
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
