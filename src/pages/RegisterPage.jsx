import React, { useState } from "react";
import { Link } from "react-router-dom";

function RegisterPage() {
  const [status, setStatus] = useState("signin");
  const [view, setView] = useState(false);
  const [signUp, setSignUp] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [signIn, setSignIn] = useState({ username: "", password: "" });

  const handleSingUp = (e) => {
    signUp[e.target.name] = e.target.value;
    setSignUp(signUp);
  };

  const handleSingIn = (e) => {
    signIn[e.target.name] = e.target.value;
    setSignIn(signIn);
  };

  const submitSignIn = (e) => {
    e.preventDefault();
    console.log(signIn);
  };

  const submitSignUp = (e) => {
    e.preventDefault();
    console.log(signUp);
  };
  return (
    <div className="flex items-center max-w-[90vw] mx-auto justify-center relative top-[120px]">
      <div className="z-20 flex gap-10 md:gap-3 md:flex-row flex-col w-[300px] md:w-[800px] py-5 bg-base-100 rounded-md px-2 md:px-4">
        <div className="sm:w-[50%] w-[280px] mx-auto">
          <img src="./main.png" className="rounded-md w-full h-full" />
        </div>
        {status == "signin" && (
          <div className="w-full md:w-[50%] max-w-sm bg-neutral-primary-soft p-4 pt-6 border border-default rounded-base shadow-xs">
            <form onSubmit={submitSignIn}>
              <div className="mb-4">
                <label
                  for="email"
                  className="block mb-2.5 text-sm font-medium text-heading"
                >
                  Username:
                </label>
                <input
                  type="text"
                  name='username'
                  onChange={handleSingIn}
                  className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
                  placeholder="username"
                  required
                />
              </div>
              <div>
                <label
                  for="password"
                  className="block mb-2.5 text-sm font-medium text-heading"
                >
                  Parol:
                </label>
                <input
                  type={view ? "text" : "password"}
                  name="password"
                  onChange={handleSingIn}
                  className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
                  placeholder="•••••••••"
                  required
                />
              </div>
              <div className="flex items-start my-6">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    defaultChecked={view}
                    onClick={() => setView(view ? false : true)}
                    className="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft"
                  />
                  <label
                    for="checkbox-remember"
                    className="ms-2 text-sm font-medium text-heading"
                  >
                    Parolni ko'rsatish
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none w-full mb-3 cursor-pointer"
              >
                Kirish
              </button>
              <div className="text-sm font-medium text-body">
                Akkauntingiz yo'qmi? 
                <a onClick={() => setStatus('signup')} className="text-fg-brand hover:underline cursor-pointer"> Yaratish</a>
              </div>
            </form>
            <Link to={'/main/'}>Demo</Link>
          </div>
        )}
        {status == "signup" && (
          <div className="w-full md:w-[50%] max-w-sm bg-neutral-primary-soft p-4 pt-6 border border-default rounded-base shadow-xs">
            <form onSubmit={submitSignUp}>
              <div className="mb-2">
                <label
                  for="email"
                  className="block mb-2.5 text-sm font-medium text-heading"
                >
                  Username:
                </label>
                <input
                  type="text"
                  name='username'
                  onChange={handleSingUp}
                  className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
                  placeholder="username"
                  required
                />
              </div>
              <div className="mb-2">
                <label
                  for="email"
                  className="block mb-2.5 text-sm font-medium text-heading"
                >
                  Email:
                </label>
                <input
                  type="email"
                  name="email"
                  onChange={handleSingUp}
                  className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
                  placeholder="emailingiz@gmail.com"
                  required
                />
              </div>
              <div>
                <label
                  for="password"
                  className="block mb-2.5 text-sm font-medium text-heading"
                >
                  Parol:
                </label>
                <input
                  type={view ? "text" : "password"}
                  name="password"
                  onChange={handleSingUp}
                  className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
                  placeholder="•••••••••"
                  required
                />
              </div>
              <div className="flex items-start my-2 mb-3">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    defaultChecked={view}
                    onClick={() => setView(view ? false : true)}
                    className="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft"
                  />
                  <label
                    for="checkbox-remember"
                    className="ms-2 text-sm font-medium text-heading"
                  >
                    Parolni ko'rsatish
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none w-full mb-3 cursor-pointer"
              >
                Yaratish
              </button>
              <div className="text-sm font-medium text-body">
                Akkauntingiz bormi? 
                <a onClick={() => setStatus('signin')} className="text-fg-brand hover:underline cursor-pointer"> Kirish</a>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default RegisterPage;
