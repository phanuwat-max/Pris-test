"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import {
  CalendarDays,
  FlaskConical,
  Handshake,
  Leaf,
  Lightbulb,
  MapPin,
  Microscope,
  Users,
} from "lucide-react";

const actionChips = [
  { label: "Discover", href: "/about" },
  { label: "Connect", href: "/contact" },
  { label: "Collaborate", href: "/sponsorship" },
  { label: "Innovate", href: "/call-for-abstracts" },
] as const;

const pillars = [
  {
    title: "Research",
    description: "Advancing evidence and scientific discovery",
    icon: Microscope,
  },
  {
    title: "Innovation",
    description: "Transforming pharmacy through technology and creativity",
    icon: Lightbulb,
  },
  {
    title: "Sustainability",
    description: "Building accessible and future-ready health care systems",
    icon: Leaf,
  },
  {
    title: "Collaboration",
    description: "Connecting minds. Creating impact. Building the future.",
    icon: Handshake,
  },
] as const;

export default function Hero() {
  useEffect(() => {
    const syncChromeVisibility = () => {
      const shouldHideChrome = window.scrollY < Math.min(window.innerHeight * 0.65, 640);
      document.body.classList.toggle("hero-playing", shouldHideChrome);
    };

    syncChromeVisibility();
    window.addEventListener("scroll", syncChromeVisibility, { passive: true });

    return () => {
      window.removeEventListener("scroll", syncChromeVisibility);
      document.body.classList.remove("hero-playing");
    };
  }, []);

  return (
    <section className="relative isolate flex min-h-[100svh] w-full overflow-hidden bg-[#04050d] text-white lg:h-full">
      <Image
        src="/assets/Img/BG/BG new.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        quality={95}
        className="absolute inset-0 z-0 h-full w-full object-cover"
        style={{ objectPosition: "center top" }}
      />

      <div
        className="absolute inset-0 z-[1] pointer-events-none lg:hidden"
        style={{
          background:
            "linear-gradient(180deg, rgba(3,5,14,0.3) 0%, rgba(3,5,14,0.72) 46%, rgba(3,5,14,0.94) 100%)",
        }}
      />
      <div
        className="absolute inset-y-0 left-0 z-[1] hidden w-[62%] pointer-events-none lg:block"
        style={{
          background:
            "linear-gradient(90deg, rgba(3,5,14,0.22) 0%, rgba(3,5,14,0.04) 72%, rgba(3,5,14,0) 100%)",
        }}
      />

      <div className="relative z-[2] mx-auto flex min-h-[100svh] w-full max-w-[1920px] flex-col px-5 pb-6 pt-20 sm:px-8 md:px-12 lg:h-full lg:min-h-0 lg:px-[8vw] lg:pb-[2.2vh] lg:pt-[5.6rem]">
        <div className="flex min-h-0 flex-1 flex-col lg:max-w-[52vw]">
          <div className="flex items-start gap-4 sm:gap-6 lg:gap-5">
            <div className="relative h-16 w-16 sm:h-20 sm:w-20 lg:h-[5.2vw] lg:w-[5.2vw] lg:max-h-[74px] lg:max-w-[74px]">
              <Image
                src="/assets/Img/sponsors/Logo_Pharmacycouncil_2568_2-2_Artboard 2.png"
                alt="The Pharmacy Council of Thailand"
                fill
                sizes="96px"
                className="object-contain drop-shadow-[0_0_14px_rgba(255,255,255,0.18)]"
              />
            </div>
            <div className="relative h-16 w-16 sm:h-20 sm:w-20 lg:h-[5.2vw] lg:w-[5.2vw] lg:max-h-[74px] lg:max-w-[74px]">
              <Image
                src="/assets/Img/sponsors/Logo_ราชวิทยาลัยเภสัชกรรมแห่งประเทศไทย_2-02.png"
                alt="Royal College of Pharmacy of Thailand"
                fill
                sizes="96px"
                className="object-contain drop-shadow-[0_0_14px_rgba(255,255,255,0.18)]"
              />
            </div>
          </div>

          <div className="-ml-7 mt-7 sm:-ml-10 sm:mt-9 lg:-ml-[3vw] lg:mt-[1.8vh]">
            <Image
              src="/assets/Img/logo/LOGO1.png"
              alt="2nd PRIS 2026 Pharmacy Research and Innovation Summit"
              width={982}
              height={268}
              priority
              className="h-auto w-full max-w-[580px] sm:max-w-[760px] lg:max-w-[min(43vw,660px)] drop-shadow-[0_0_24px_rgba(71,139,255,0.34)]"
            />
          </div>

          <div className="mt-9 sm:mt-12 lg:mt-[2.8vh]">
            <h1 className="max-w-[880px] text-[2rem] font-black uppercase leading-[1.18] tracking-[0.07em] text-white sm:text-[2.65rem] md:text-[3.1rem] lg:text-[clamp(2rem,2.2vw,2.7rem)]">
              Pharmacy Research & Innovation
              <span className="block">Driving Sustainable Healthcare</span>
            </h1>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 sm:gap-4 lg:mt-[2.4vh] lg:gap-3">
            {actionChips.map((chip) => (
              <Link
                key={chip.label}
                href={chip.href}
                className="group relative inline-flex min-h-11 items-center justify-center rounded-full border border-[#51b8ff]/50 bg-[#062b58]/80 px-6 text-[0.95rem] font-bold uppercase tracking-[0.12em] text-white shadow-[inset_0_1px_8px_rgba(255,255,255,0.25),0_0_18px_rgba(0,145,255,0.34)] transition duration-300 hover:border-white/75 hover:bg-[#0a4f8f] lg:min-h-10 lg:px-5 lg:text-[0.78rem]"
              >
                <span className="absolute inset-x-5 bottom-0 h-px bg-cyan-200/90 blur-[1px] transition group-hover:bg-white" />
                {chip.label}
              </Link>
            ))}
          </div>

          <div className="mt-9 grid gap-6 text-white sm:grid-cols-[0.75fr_1.25fr] md:grid-cols-[0.8fr_1.55fr_1.35fr] lg:mt-[3.4vh] lg:gap-5">
            <div className="flex items-start gap-3">
              <CalendarDays className="mt-1 h-6 w-6 shrink-0 text-[#168fff] lg:h-5 lg:w-5" />
              <div className="uppercase">
                <p className="text-[2rem] font-black leading-none tracking-[0.04em] text-[#168fff] sm:text-[2.35rem] lg:text-[1.75rem]">
                  29-30
                </p>
                <p className="mt-1 text-[0.86rem] font-bold leading-none tracking-[0.08em] text-[#168fff] lg:text-[0.7rem]">
                  October
                </p>
                <p className="mt-1 text-[2rem] font-black leading-none tracking-[0.04em] sm:text-[2.35rem] lg:text-[1.75rem]">
                  2026
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="mt-1 h-6 w-6 shrink-0 text-[#168fff] lg:h-5 lg:w-5" />
              <div>
                <p className="text-[1.35rem] font-bold uppercase leading-tight tracking-[0.13em] text-[#168fff] sm:text-[1.65rem] lg:text-[1.18rem]">
                  Jupiter Room 4-13
                </p>
                <p className="mt-3 text-sm font-medium uppercase leading-relaxed tracking-[0.07em] text-white/90 sm:text-base lg:mt-2 lg:text-[0.82rem]">
                  Impact Muang Thong Thani
                  <span className="block">Nonthaburi, Thailand</span>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 sm:col-span-2 md:col-span-1">
              <Users className="mt-1 h-6 w-6 shrink-0 text-[#168fff] lg:h-5 lg:w-5" />
              <div>
                <p className="text-[1.25rem] font-bold uppercase leading-tight tracking-[0.13em] text-[#168fff] sm:text-[1.5rem] lg:text-[1.1rem]">
                  Pharmacists Researchers
                </p>
                <p className="mt-3 text-sm font-medium uppercase leading-relaxed tracking-[0.04em] text-white/90 sm:text-base lg:mt-2 lg:text-[0.82rem]">
                  • Students • Industry Leaders
                  <span className="block">• Healthcare Professionals</span>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 lg:hidden" />
        </div>

        <div className="mt-7 rounded-[2.8rem] border border-white/5 bg-black/82 px-5 py-5 shadow-[0_0_34px_rgba(0,120,255,0.3),inset_0_-8px_20px_rgba(0,87,174,0.38)] backdrop-blur-sm sm:px-8 lg:mt-4 lg:rounded-[2rem] lg:px-6 lg:py-4">
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4 lg:gap-4">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;

              return (
                <div key={pillar.title} className="flex min-w-0 items-center gap-4">
                  <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[radial-gradient(circle_at_35%_25%,#fff4bf_0%,#db7a42_36%,#29213a_72%,#0a1531_100%)] shadow-[0_0_20px_rgba(255,134,55,0.46)] sm:h-[74px] sm:w-[74px] lg:h-12 lg:w-12">
                    <FlaskConical className="absolute h-7 w-7 text-white/18 lg:h-5 lg:w-5" />
                    <Icon className="relative h-8 w-8 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.55)] lg:h-6 lg:w-6" />
                  </div>
                  <div className="min-w-0">
                    <h2 className="text-[1.05rem] font-black uppercase leading-tight tracking-[0.08em] text-[#ff8238] sm:text-[1.28rem] lg:text-[0.95rem]">
                      {pillar.title}
                    </h2>
                    <p className="mt-1.5 text-sm font-medium leading-snug text-white/88 lg:text-[0.78rem]">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
