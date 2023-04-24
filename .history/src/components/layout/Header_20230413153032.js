import React, { useState, useEffect } from "react";
import Loading from "../loading";
import Navbar from "../NavBar";
import { imgeProfile } from "../../db.json";
import Link from "next/link";
import MenuResponsive from "../MenuResponsive";


export default function Header() {
  const [imageProfile, setImageProfile] = useState(null);
  const [showMenu, setShowMenue] = useState(false);
  useEffect(() => {
    setImageProfile(imgeProfile);
  }, []);

  const showMenuHandler = () => {
    setShowMenue((prev) => !prev);
  };

  if (!imageProfile) {
    return <Loading />;
  }
  return (
    <header >
      <div className="bg-cyan-800  text-md w-full h-12 flex   items-center justify-center">
        <p className="text-white">1:26:45 مانده تا پخش </p>
      </div>

      <div className="hidden lg:flex h-16 px-2 items-center justify-between   container mx-auto my-4 ">
        <div className="w-3/4 h-full flex items-center justify-satrt ">
          <Link href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="60"
              height="60"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M15.3 5.55a2.9 2.9 0 0 0-2.9 2.847l-.028 1.575a.6.6 0 0 1-.68.583l-1.561-.212c-2.054-.28-4.022-1.226-5.91-2.799-.598 3.31.57 5.603 3.383 7.372l1.747 1.098a.6.6 0 0 1 .034.993L7.793 18.17c.947.059 1.846.017 2.592-.131 4.718-.942 7.855-4.492 7.855-10.348 0-.478-1.012-2.141-2.94-2.141zm-4.9 2.81a4.9 4.9 0 0 1 8.385-3.355c.711-.005 1.316.175 2.669-.645-.335 1.64-.5 2.352-1.214 3.331 0 7.642-4.697 11.358-9.463 12.309-3.268.652-8.02-.419-9.382-1.841.694-.054 3.514-.357 5.144-1.55C5.16 15.7-.329 12.47 3.278 3.786c1.693 1.977 3.41 3.323 5.15 4.037 1.158.475 1.442.465 1.973.538z" />
            </svg>
          </Link>
          <div className="bg-neutral-100 w-120 h-12 flex justify-between items-center border border-zinc-300 rounded-lg mr-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="-translate-x-4 fill-zinc-400"
              viewBox="0 0 24 24"
              width="30"
              height="30"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z" />
            </svg>
            <input
              placeholder="جستجو بین ۱۲۰۰ ویدیو"
              type="text"
              className="h-full w-11/12   outline-0 bg-inherit rounded-lg  pr-2"
            />
          </div>
        </div>

        <div className="w-1/4  h-16 flex items-center justify-end gap-x-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="fill-cyan-400"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M17 3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1h2v2h6V1h2v2zm3 8H4v8h16v-8zm-5-6H9v2H7V5H4v4h16V5h-3v2h-2V5zm-9 8h2v2H6v-2zm5 0h2v2h-2v-2zm5 0h2v2h-2v-2z" />
          </svg>
          <Link href="/register" className="w-12 h-12 rounded-full">
            <img
              src={imageProfile[0].src}
              alt={imageProfile[0].alt}
              className="rounded-full w-full h-full"
            />
          </Link>
          <div className="flex items-center justify-center gap-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="fill-cyan-400"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928L12 18.26zm0-2.292l4.247 2.377-.949-4.773 3.573-3.305-4.833-.573L12 5.275l-2.038 4.42-4.833.572 3.573 3.305-.949 4.773L12 15.968z" />
            </svg>
            <p>4 امتیاز</p>
          </div>
        </div>
      </div>

      <div className="lg:hidden w-full h-20 relative flex items-center justify-between px-4 my-6 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="30"
          height="30"
          onClick={showMenuHandler}
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z" />
        </svg>
        <Link href="/">
          {showMenu && <MenuResponsive />}

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="50"
            height="50"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M15.3 5.55a2.9 2.9 0 0 0-2.9 2.847l-.028 1.575a.6.6 0 0 1-.68.583l-1.561-.212c-2.054-.28-4.022-1.226-5.91-2.799-.598 3.31.57 5.603 3.383 7.372l1.747 1.098a.6.6 0 0 1 .034.993L7.793 18.17c.947.059 1.846.017 2.592-.131 4.718-.942 7.855-4.492 7.855-10.348 0-.478-1.012-2.141-2.94-2.141zm-4.9 2.81a4.9 4.9 0 0 1 8.385-3.355c.711-.005 1.316.175 2.669-.645-.335 1.64-.5 2.352-1.214 3.331 0 7.642-4.697 11.358-9.463 12.309-3.268.652-8.02-.419-9.382-1.841.694-.054 3.514-.357 5.144-1.55C5.16 15.7-.329 12.47 3.278 3.786c1.693 1.977 3.41 3.323 5.15 4.037 1.158.475 1.442.465 1.973.538z" />
          </svg>
        </Link>
        <div className="w-20 h-20 ">
          <img
            src={imageProfile[0].src}
            alt={imageProfile[0].alt}
            className="w-full h-full rounded-full "
          />
        </div>
      </div>
      <div className="block lg:hidden w-11/12 mx-auto h-px bg-zinc-300 "></div>

      <div className=" lg:hidden flex items-center justify-start h-14 bg-gray-100 gap-x-2  border border-zinc-300 rounded-md w-11/12 mx-auto my-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="fill-slate-400 mr-2 opacity-80 "
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z" />
        </svg>
        <input
          placeholder="جستجو بین ۱۲۰۰ ویدیو"
          type="text"
          className="  outline-0 h-full bg-inherit rounded-md"
        />
      </div>

      <Navbar />
      
    </header>
  );
}
