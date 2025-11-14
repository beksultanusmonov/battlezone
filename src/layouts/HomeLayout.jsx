import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

function HomeLayout() {
  return (
    <div>
      <Header />
      {/* head page */}
      <div className="bg-base-200 py-16 lg:py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative mx-auto mb-12 w-fit sm:mb-16 lg:mb-24">
            <span className="from-primary/40 to-primary/5 absolute start-0 top-9 h-1 w-full rounded-full bg-gradient-to-r"></span>
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-2">
            <img
              src="main.png"
              alt="Contact illustration"
              className="size-full"
            />

            <div className="flex flex-col gap-5">
              <h3 className="text-base-content mb-6 text-2xl font-bold">
                Battle<span className="f-c">Zone</span> - Xalq xal qiladi
              </h3>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="card bg-base-100 transition duration-700 hover:scale-105 hover:bg-f-c cursor-pointer shadow-2xl">
                  <div className="card-body items-center gap-3">
                    <div className="avatar avatar-placeholder">
                        <img src="a-vs.png" alt="" />
                    </div>
                    <h4 className="text-base-content text-lg font-medium">
                      Oylik uyushtirilgan janglar
                    </h4>
                    <address className="text-base-content/80 text-center not-italic">
                      Kim g'olib bo'ladi ?
                      <br />
                      Ovoz bering
                    </address>
                  </div>
                </div>                
                <div className="card bg-base-100 transition duration-300 hover:scale-105 hover:bg-f-c cursor-pointer shadow-2xl">
                  <div className="card-body items-center gap-3">
                    <div className="avatar avatar-placeholder">
                        <img src="c-vs.png" alt="" />
                    </div>
                    <h4 className="text-base-content text-lg font-medium">
                      Shaxsiy qilingan janglar
                    </h4>
                    <address className="text-base-content/80 text-center not-italic">
                      O'z jangingizni yarating
                      <br />
                      Ovoz yig'ing
                    </address>
                  </div>
                </div>
              </div>
              <Link to={'/accaunt'} className="btn btn-xl rounded-xl bg-f-c text-white">Akkauntga kirish</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeLayout;
