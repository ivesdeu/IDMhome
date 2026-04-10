import React from "react";
import { motion } from "motion/react";
import AutoScroll from "embla-carousel-auto-scroll";
import { useInViewParallaxY } from "../hooks/useParallaxScroll";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "./ui/carousel";

const mockLogos = [
  <svg key="0" className="h-8 w-auto" viewBox="0 0 100 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="14" r="6" stroke="currentColor" strokeWidth="2" fill="none" />
    <circle cx="28" cy="14" r="6" stroke="currentColor" strokeWidth="2" fill="none" />
    <line x1="18" y1="14" x2="22" y2="14" stroke="currentColor" strokeWidth="2" />
    <text x="40" y="18" fontSize="10" fontWeight="600" letterSpacing="0.15em" fill="currentColor">STORE</text>
  </svg>,
  <svg key="1" className="h-8 w-auto" viewBox="0 0 100 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="AMAUWM">
    <text x="50" y="18" textAnchor="middle" fontSize="10" fontWeight="600" letterSpacing="0.15em" fill="currentColor">AMAUWM</text>
  </svg>,
  <svg key="2" className="h-8 w-auto" viewBox="0 0 100 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 20 Q14 6 22 20 Q18 14 8 20z" stroke="currentColor" strokeWidth="2" fill="none" />
    <circle cx="28" cy="14" r="5" stroke="currentColor" strokeWidth="2" fill="none" />
    <text x="40" y="18" fontSize="10" fontWeight="600" letterSpacing="0.15em" fill="currentColor">BRAND</text>
  </svg>,
];

const clients: { category: string; years: number; service: string; logoImage?: string; logoAlt?: string }[] = [
  { category: "Home Improvement", years: 1, service: "Website Construction & SEO", logoImage: "/whirly-wash-logo.png", logoAlt: "Whirly Wash" },
  { category: "Professional Development Services", years: 2, service: "Website Construction & SEO", logoImage: "/amauwm-logo.png", logoAlt: "AMAUWM" },
  { category: "Home Services", years: 1, service: "Full Growth Partner", logoImage: "/badger-window-cleaners-logo.png", logoAlt: "Badger Window Cleaners West" },
];

function Card({ client, logo }: { client: (typeof clients)[0]; logo: React.ReactNode }) {
  return (
    <div className="bg-[#e8e8e8] rounded-2xl p-6 flex flex-col shadow-sm border border-white/50 h-full min-h-[260px]">
      <h3 className="font-bold text-primary text-lg mb-1">{client.category}</h3>
      <span className="inline-block w-fit px-3 py-1.5 rounded-full bg-[#f0f0f0] text-sm text-primary/90 font-medium mb-6">
        {client.service}
      </span>
      <div className="mt-auto pt-2">
        <div className="w-full rounded-full bg-white py-5 px-4 flex items-center justify-center min-h-[72px] shadow-inner text-primary">
          {client.logoImage ? (
            <img src={client.logoImage} alt={client.logoAlt ?? client.category} className="h-14 w-auto object-contain" />
          ) : (
            logo
          )}
        </div>
      </div>
    </div>
  );
}

/** Repeat slides so the loop + auto-scroll feels continuous (few logos otherwise stutter). */
const LOOP_COPIES = 4;

export function Collaborations() {
  const { ref: titleRef, y: titleY, reduced } = useInViewParallaxY(0.06);

  const slides = Array.from({ length: LOOP_COPIES }, (_, copy) =>
    clients.map((client, index) => ({
      client,
      index,
      key: `${copy}-${index}`,
      logo: mockLogos[index % mockLogos.length],
    })),
  ).flat();

  return (
    <section className="w-full bg-[#F5F5F5] py-24 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div ref={titleRef} className="mb-10" style={reduced ? undefined : { y: titleY }}>
          <h2 className="text-4xl md:text-5xl font-bold text-primary">Trusted by growing businesses.</h2>
        </motion.div>
      </div>

      <Carousel
        className="w-full"
        opts={{
          loop: true,
          align: "start",
          dragFree: true,
          containScroll: false,
        }}
        plugins={[
          AutoScroll({
            speed: 1.35,
            stopOnInteraction: false,
            stopOnMouseEnter: false,
            stopOnFocusIn: false,
            playOnInit: true,
            startDelay: 0,
          }),
        ]}
      >
        <CarouselContent className="-ml-4 md:-ml-6">
          {slides.map(({ client, index, key, logo }) => (
            <CarouselItem
              key={key}
              className="pl-4 md:pl-6 basis-[85%] sm:basis-[45%] md:basis-[38%] lg:basis-[32%] xl:basis-[28%] max-w-[380px]"
            >
              <Card client={client} logo={logo} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
