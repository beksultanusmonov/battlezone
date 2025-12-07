

export default function UserProfile() {
  return (
    <div>
      
      <div className="flex flex-wrap justify-center gap-3 transition duration-300">
        <div
          className={`w-[300px] bg-base-100 py-5 px-1 rounded`}
        >
          <div className="w-[150px] h-[150px] rounded-full mx-auto relative bg-f-c">
            <img
              src="../../avatars/1.png"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="flex flex-col px-2 gap-y-2">
            <div className="mt-4 text-center">
              <p className="text-lg text-slate-900 font-semibold">username</p>
              <p className="text-sm text-slate-500 mt-1">beksulton@gmail.com</p>
              <span><strong className="text-black dark:text-white">123</strong> Obunachiga ega</span>
            </div>
            <button className="btn bg-f-c text-white">Obuna</button>
            {/* <button className="btn bg-red-500 text-white">Obunani toxtatish</button> */}
          </div>
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
  )
}
