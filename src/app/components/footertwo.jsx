"use client";
import Link from "next/link";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { PiTiktokLogoThin } from "react-icons/pi";
import { FaXTwitter } from "react-icons/fa6";

export default function Footertwo() {
  return (
    <>
      <div className="hidden lg:block">
        <div className="bg-(--primary-color) w-full h-80 p-8 relative">
          <div className="flex items-top justify-evenly m-10">
            <div>
              <img src="/image/footer-logo.png" alt="logo"  />
              <p className="mt-3 text-sm text-(--neutral-color) font-light leading-6">
                Dedicated to turning ideas into reality <br /> through stunning prints,
                creative branding, <br />  and meaningful digital design <br />  experiences
              </p>
              <div className="flex items-center gap-2 mt-4 text-(--neutral-color) animate-bounce">
                <CiFacebook />
                <CiLinkedin />
                <CiInstagram />
                <PiTiktokLogoThin />
                <FaXTwitter />
              </div>
            </div>
            <div>
              <h3 className="text-[#6B6B6B] font-bold text-sm leading-8 ">QUICKLINKS</h3>
              <ul className="text-(--neutral-color) font-extralight text-sm leading-8">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/about">About Us</Link>
                </li>
                <li>
                  <Link href="/services">Services</Link>
                </li>
                <li>
                  <Link href="/products">Products</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-[#6B6B6B] font-bold text-sm leading-8 ">Legal</h3>
              <ul className="text-(--neutral-color) font-extralight text-sm leading-8">
                <li><Link href="/privacy">Privacy</Link></li>
                <li><Link href="/terms">Terms of Service</Link></li>
                <li><Link href="/return">Returns Policy</Link></li>
                <li><Link href="/shipping">Shipping Rates</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-[#6B6B6B] font-bold text-sm leading-8 ">Help</h3>
              <ul className="text-(--neutral-color) font-extralight text-sm leading-8">
                <li><Link href="/faq">Help & FAQ</Link></li>
                <li><Link href="/contact">Contact us</Link></li>
                <li><Link href="/terms">Terms & Conditions</Link></li>
                <li><Link href="/site">Site Map</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
