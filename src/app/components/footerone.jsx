"use client";
import Link from "next/link";


export default function Footerone() {
  
  return (
    <>
      <div className="hidden lg:block">
        <div className="bg-(--footer-color) w-full h-60 mt-30 p-8 relative">
          <div className="text-center merienda-font">
            <p className="text-(--neutral-color) text-3xl leading-15">Got something in mind?</p>
            <p className="text-(--neutral-color) text-sm font-extralight leading-10">Let’s talk about it, we’ll give you the best offer for your project.</p>
          </div>
          <div className="text-center">
            <button className="bg-(--accent-color) p-2 mt-2 text-sm rounded-full text-(--neutral-color)">Request Quote</button>
          </div>
          <div>
            <img src="/image/footerone-img.png" alt="footerimg" className="absolute top-[-50] left-[1200]" />
          </div>
        </div>
      </div>
    </>
  );
}