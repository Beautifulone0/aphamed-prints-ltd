"use client";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AiFillBehanceSquare } from "react-icons/ai";
import { FaGoogleDrive } from "react-icons/fa6";

const portfolioData = [
  {
    id: 1,
    category: "Print & Brand",
    image: "/image/printing-branding-img1.png",
    description: "Business card design",
  },
  {
    id: 2,
    category: "Print & Brand",
    image: "/image/printing-branding-img2.png",
    description: "Poster design",
  },
  {
    id: 3,
    category: "Print & Brand",
    image: "/image/printing-branding-img3.png",
    description: "Landing page redesign",
  },
  {
    id: 4,
    category: "Print & Brand",
    image: "/image/printing-branding-img4.png",
    description: "Brochure design",
  },
  {
    id: 5,
    category: "Print & Brand",
    image: "/image/printing-branding-img5.png",
    description: "Social media graphics",
  },
  {
    id: 6,
    category: "Print & Brand ",
    image: "/image/printing-branding-img6.png",
    description: "Mobile app interface",
  },
  {
    id: 7,
    category: "Print & Brand",
    image: "/image/printing-branding-img7.png",
    description: "Mobile app interface",
  },
  {
    id: 8,
    category: "Print & Brand",
    image: "/image/printing-branding-img8.png",
    description: "Mobile app interface",
  },
  {
    id: 9,
    category: "Print & Brand",
    image: "/image/printing-branding-img9.png",
    description: "Mobile app interface",
  },
  {
    id: 10,
    category: "Print & Brand",
    image: "/image/printing-branding-img10.png",
    description: "Mobile app interface",
  },
  {
    id: 11,
    category: "Graphic Design",
    image: "/image/graphic-designimg1.png",
    description: "graphic design",
  },
  {
    id: 12,
    category: "Graphic Design",
    image: "/image/graphic-designimg2.png",
    description: "graphic design",
  },
  {
    id: 13,
    category: "Graphic Design",
    image: "/image/graphic-designimg3.png",
    description: "graphic design",
  },
  {
    id: 14,
    category: "Graphic Design",
    image: "/image/graphic-designimg4.png",
    description: "graphic design",
  },
  {
    id: 15,
    category: "Print & Brand",
    image: "/image/printing-branding-img11.png",
    description: "graphic design",
  },
  {
    id: 16,
    category: "Print & Brand",
    image: "/image/printing-branding-img12.png",
    description: "graphic design",
  },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All Work");
  const [flippedId, setFlippedId] = useState(null);

  const filteredData =
    activeCategory === "All Work"
      ? portfolioData
      : portfolioData.filter((item) => item.category === activeCategory);

  return (
    <>
      <div className=" ml-20 mr-20 hidden lg:block">
        <div className="text-center">
          <h1 className="merienda-font font-extrabold text-3xl text-(--primary-color) leading-10">
            EXPLORE OUR PORTFOLIO
          </h1>
          <p className="michroma-font text-2xl text-(--primary-color) leading-10 ">
            Design - Prints - Quality Results
          </p>
          <p className="merienda-font font-medium text-sm text-(--primary-color)">
            Our portfolio shows our hard work and devotion to helping our
            clients <br /> succeed. Don't just take our word for it. <br />
            Check out the latest work.
          </p>
        </div>
        {/* <div className="text-center">
          <div className="flex items-center justify-center gap-3 mt-3 bg-(--neutral-color) w-120 mx-auto p-3 rounded-full shadow-gray-400 shadow-xl">
            <p className="">All Work</p>
            <p>Print & Brand</p>
            <p>Graphic Design</p>
            <p>UI/UX Design</p>
          </div>
        </div> */}
      </div>

      <div className="text-center hidden lg:block">
        {/* Category Buttons */}
        <div className="flex items-center justify-center gap-3 mt-3 bg-[--neutral-color] w-fit mx-auto p-2 rounded-full shadow-gray-400 shadow-xl ">
          {["All Work", "Print & Brand", "Graphic Design", "UI/UX Design"].map(
            (cat) => (
              <p
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`cursor-pointer px-4 py-2 rounded-full transition-all ${
                  activeCategory === cat
                    ? "bg-[--secondary-color] text-[--accent-color]"
                    : "hover:bg-gray-200"
                }`}
              >
                {cat}
              </p>
            )
          )}
        </div>
      </div>

      {/* Portfolio Grid */}
      <div className="flex items-center justify-center hidden lg:block">
        <div className="flex flex-wrap items-center justify-center gap-5 mt-16 w-250 h-auto">
          <AnimatePresence>
            {filteredData.map((item) => (
              <motion.div
                key={item.id}
                className="relative w-50 h-50 cursor-pointer perspective-[1000px]"
                onClick={() =>
                  setFlippedId(flippedId === item.id ? null : item.id)
                }
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <motion.div
                  className="relative w-full h-full"
                  animate={{ rotateY: flippedId === item.id ? 180 : 0 }}
                  transition={{ duration: 0.6 }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Front */}
                  <div
                    className="absolute inset-0  overflow-hidden"
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    <img
                      src={item.image}
                      alt={item.description}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Back */}
                  <div
                    className="absolute inset-0 flex items-center justify-center bg-(--primary-color) text-(--neutral-color) rounded-lg p-4"
                    style={{
                      transform: "rotateY(180deg)",
                      backfaceVisibility: "hidden",
                    }}
                  >
                    <div className="text-center text-sm">
                      <p className="mt-5">{item.description}</p>
                      <button className="bg-(--secondary-color) rounded-sm p-2 merienda-font mt-2">
                        <a
                          href=" https://www.behance.net/gallery/226929635/APHAMED-PROJECT"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          See More
                        </a>
                      </button>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
      {/* Buttons */}
      <div>
        <div className="text-center michroma-font text(--accent-color) mt-5">
          <p>See More</p>
        </div>
        <div className="text-center m-2">
          <button className="bg-(--secondary-color) rounded-sm py-2 px-8 m-3  merienda-font mt-2">
            <a
              href=" https://www.behance.net/gallery/226929635/APHAMED-PROJECT"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillBehanceSquare className="text-(--accent-color) text-xl" />
            </a>
          </button>
          <button className="bg-(--secondary-color) rounded-sm py-2 px-8 m-3  merienda-font mt-2">
            <a
              href="  https://drive.google.com/drive/folders/1CoAou0NdC5bKnvCPlQTUU1thQ5VqCX4X"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGoogleDrive className="text-(--accent-color) text-xl" />
            </a>
          </button>
        </div>
      </div>
    </>
  );
}
