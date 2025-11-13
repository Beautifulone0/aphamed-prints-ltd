"use client";
import Link from "next/link";


export default function Numbers() {
  
    
  return (
    <>
      <div className="[background:linear-gradient(90deg,#062B21_0%,#14916F_100%)] h-[150px] mb-20 hidden lg:block">
        <div className="flex justify-center gap-40 items-center p-11">
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold text-(--neutral-color) text-center ">250+</span>
            <span className="text-sm text-(--neutral-color) leading-4 font-extralight text-[12.7px]">Projects <br /> Completed</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold text-(--neutral-color) text-center ">180+</span>
            <span className="text-sm text-(--neutral-color) leading-4 font-extralight text-[12.7px]">Satisfied <br /> Clients</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold text-(--neutral-color) text-center ">500+</span>
            <span className="text-sm text-(--neutral-color) leading-4 font-extralight text-[12.7px]">Designs <br /> Created</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold text-(--neutral-color) text-center ">10+</span>
            <span className="text-sm text-(--neutral-color) leading-4 font-extralight text-[12.7px]">Years of <br />Experience</span>
          </div>
        </div>
      </div>
    </>
  );
}