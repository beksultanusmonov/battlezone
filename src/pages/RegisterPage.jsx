import React, {useState} from 'react'
import { Link } from 'react-router-dom'

function RegisterPage() {
    const [status, setStatus] = useState('signin')
  const [view, setView] = useState(false)


  const submitSignIn = (e) => {
    e.preventDefault();
    toast.warn("Hali bazaga ulanmadi !")
  }
  
  
  const submitSignUp = (e) => {
    e.preventDefault();
    toast.warn("Hali bazaga ulanmadi !")
  }
  return (
    <div className="flex items-center max-w-[90vw] mx-auto justify-center relative top-[120px] min-h-[calc(100vh-120px)] pb-6">
        <div className="z-20 flex gap-10 md:gap-3 md:flex-row flex-col w-[300px] md:w-[800px] py-5 bg-base-100 rounded-md px-2 md:px-4">
          <div className="sm:w-[50%] w-[280px] mx-auto">
              <img src="./main.png" className="rounded-md w-full h-full" />
          </div>
          {status == 'signin' &&
            <form className="w-full md:w-[50%] rounded-md flex flex-col gap-3 justify-center" onSubmit={submitSignIn}>
              <div className="flex items-center w-full gap-1 px-2 rounded-3xl">
                <i className="fa-solid fa-user text-2xl w-[30px] f-c"></i>
                <input type="text" placeholder="username..." className="input input-info" required/>
              </div>
              <div className="flex items-center w-full gap-1 px-2 rounded-3xl">
                <i className="fa-solid fa-lock text-2xl w-[30px] f-c"></i>
                <input type={view ? "text" : "password"} placeholder="parol..." className="input input-info" required/>
              </div>
              <div className="flex justify-end gap-2">
                <span>Parolni ko'rish</span>
                <input type="checkbox" className="checkbox" checked={view} onClick={() => setView(view ? false : true)} />
              </div>
              <button className="btn bg-f-c text-base-100"> Kirish</button>
              <span>Accauntingiz yo'qmi ? <a className="f-c cursor-pointer" onClick={() => setStatus('signup')}>Yaratish</a></span>
              <Link to={'/main/'}>Demo</Link>
            </form>
          }
          {status == 'signup' &&
            <form className="w-full md:w-[50%] rounded-md flex flex-col gap-3 justify-center" onSubmit={submitSignUp}>
              <div className="flex items-center w-full gap-1 px-2 rounded-3xl">
                <i className="fa-solid fa-user text-2xl w-[30px] f-c"></i>
                <input type="text" placeholder="username..." className="input input-info" required/>
              </div>
              <div className="flex items-center w-full gap-1 px-2 rounded-3xl">
                <i className="fa-solid fa-circle-user text-2xl w-[30px] f-c"></i>
                <input type="email" placeholder="email..." className="input input-info" required/>
              </div>
              <div className="flex items-center w-full gap-1 px-2 rounded-3xl">
                <i className="fa-solid fa-lock text-2xl w-[30px] f-c"></i>
                <input type={view ? "text" : "password"} placeholder="parol..." className="input input-info" required/>
              </div>
              <div className="flex justify-end gap-2">
                <span>Parolni ko'rish</span>
                <input type="checkbox" className="checkbox" checked={view} onClick={() => setView(view ? false : true)} />
              </div>
              <button className="btn bg-f-c text-base-100"> Yaratish</button>
              <span className="w-[300px]">Accauntingiz bormi ? <a className="f-c cursor-pointer" onClick={() => setStatus('signin')}>Kirish</a></span>
            </form>
          }
        </div>

      </div>
  )
}

export default RegisterPage
