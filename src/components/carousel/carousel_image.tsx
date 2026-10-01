import { useState } from "react";
import img1 from "../../assets/test_carousel/ancintciv.jpg";
import img2 from "../../assets/test_carousel/bydrvr.jpg";
import img3 from "../../assets/test_carousel/slipigirl.jpg";
import img4 from "../../assets/test_carousel/grlas.jpg";

const slides = [img1, img2, img3, img4];

export default function Carousel_Image() {
  const [current, setCurrent] = useState(0);

  function goToPrev() {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }

  function goToNext() {
    setCurrent((prev) => (prev + 1) % slides.length);
  }

  return (
    <div className="relative mx-auto mt-6">
      <div className="aspect-[40/9] overflow-hidden rounded-lg">
        <img
          src={slides[current]}
          alt={`slide ${current + 1}`}
          className="w-full h-full object-cover"
        />
      </div>

      <button
        onClick={goToPrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 text-white text-3xl px-2 select-none cursor-pointer"
      >
        ‹
      </button>
      <button
        onClick={goToNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 text-white text-3xl px-2 select-none cursor-pointer"
      >
        ›
      </button>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 rounded-full transition-all ${
              index === current ? "bg-gray-500 w-4" : "bg-white/70 w-2"
            }`}
          />
        ))}
      </div>
    </div>
  );
}