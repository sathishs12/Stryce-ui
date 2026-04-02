"use client";

import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type Testimonial = {
  image: string;
  text: string;
  author: string;
  role?: string;
};

interface Props {
  items: Testimonial[];
}

export default function TestimonialCarousel({ items }: Props) {
  const autoplay = useRef(
    Autoplay({
      delay: 2000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 mt-0">
      <Carousel
        plugins={[autoplay.current]}
        className="w-full"
        opts={{ loop: true }}
      >
        <CarouselContent>
          {items.map((item, index) => (
            <CarouselItem key={index}>
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden">

                {/* IMAGE */}
                <img
                  src={item.image}
                  alt="testimonial"
                  className="w-full h-[300px] sm:h-[380px] md:h-[440px] object-cover"
                />

                {/* GRADIENT */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                {/* ── MOBILE layout (< sm) ── */}
                <div className="absolute bottom-0 left-0 right-0 p-3 flex items-end gap-2 sm:hidden">
                  <div className="bg-white/95 backdrop-blur-sm p-3 rounded-xl flex-1 min-w-0 shadow-lg">
                    <p className="text-xs text-gray-700 leading-relaxed line-clamp-4">
                      "{item.text}"
                    </p>
                    <div className="flex items-center justify-between mt-2 gap-2">
                      <p className="text-[11px] font-semibold text-gray-900 truncate">
                        {item.author}
                        {item.role && (
                          <span className="font-normal text-gray-500"> — {item.role}</span>
                        )}
                      </p>
                      <div className="flex gap-2 flex-shrink-0">
                        <CarouselPrevious className="static h-7 w-7 bg-gray-100 hover:bg-gray-200 border-0 shadow-none" />
                        <CarouselNext className="static h-7 w-7 bg-gray-100 hover:bg-gray-200 border-0 shadow-none" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* ── DESKTOP layout (sm+) ── */}
                <div className="hidden sm:flex absolute bottom-6 left-6 right-6 items-end justify-between gap-4">

                  {/* CARD — dashed border, semi-transparent */}
                  <div className="bg-white/80 backdrop-blur-sm px-6 py-5 rounded-xl border border-gray-400 max-w-[55%]">
                    <p className="text-sm text-gray-800 leading-relaxed">
                      "{item.text}"
                    </p>
                    <p className="text-xs mt-3 font-bold text-gray-900">
                      {item.author}
                      {item.role && (
                        <span className="font-normal text-gray-500 uppercase tracking-wide text-[10px] ml-2">
                          {item.role}
                        </span>
                      )}
                    </p>
                  </div>

                  {/* ARROWS — side by side horizontally, bottom right */}
                  <div className="flex flex-row gap-2 flex-shrink-0">
                    <CarouselPrevious className="static h-10 w-10 bg-white/90 hover:bg-white shadow-md border border-gray-200 rounded-full" />
                    <CarouselNext className="static h-10 w-10 bg-white/90 hover:bg-white shadow-md border border-gray-200 rounded-full" />
                  </div>

                </div>

              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}