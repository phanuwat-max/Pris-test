"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Countdown from "@/components/elements/Countdown";
import { Link } from "@/i18n/routing";
import {
  ArrowRight,
  CalendarDays,
  MapPin,
} from "lucide-react";

export default function Hero() {
  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 1280px)");

    const syncChromeVisibility = () => {
      if (!desktopQuery.matches) {
        document.body.classList.remove("hero-playing");
        return;
      }

      const shouldHideChrome = window.scrollY < Math.min(window.innerHeight * 0.65, 640);
      document.body.classList.toggle("hero-playing", shouldHideChrome);
    };

    syncChromeVisibility();
    window.addEventListener("scroll", syncChromeVisibility, { passive: true });
    desktopQuery.addEventListener("change", syncChromeVisibility);

    return () => {
      window.removeEventListener("scroll", syncChromeVisibility);
      desktopQuery.removeEventListener("change", syncChromeVisibility);
      document.body.classList.remove("hero-playing");
    };
  }, []);

  return (
    <section className="font-heading relative isolate flex min-h-[100svh] w-full overflow-x-hidden bg-[#04050d] text-white min-[1280px]:h-full xl:overflow-hidden">
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

      <div className="relative z-[2] mx-auto flex min-h-[100svh] w-full max-w-[1920px] flex-col px-4 pb-6 pt-16 sm:px-8 sm:pt-20 md:px-10 md:pb-[7vh] md:pt-[7vh] md:portrait:px-[5.2vw] md:portrait:pb-[2.6vh] md:portrait:pt-[7.2vh] min-[1280px]:h-full min-[1280px]:min-h-0 min-[1280px]:px-[8vw] min-[1280px]:pb-[2.2vh] min-[1280px]:pt-[5.6rem] min-[1280px]:max-[1439px]:landscape:pt-[9.2rem] max-md:landscape:pb-5 max-md:landscape:pt-12">
        <div className="mx-auto flex w-full flex-col md:max-w-[820px] md:portrait:max-w-none min-[1280px]:mx-0 min-[1280px]:max-w-[58vw]">
          <div className="flex translate-y-6 items-start gap-4 sm:gap-6 lg:gap-5 md:portrait:gap-5 max-md:landscape:translate-y-3 max-md:landscape:gap-3">
            <div className="relative h-16 w-16 sm:h-[5.25rem] sm:w-[5.25rem] md:portrait:h-[4.6rem] md:portrait:w-[4.6rem] lg:h-[5.5vw] lg:w-[5.5vw] lg:max-h-[84px] lg:max-w-[84px] max-md:landscape:h-12 max-md:landscape:w-12">
              <Image
                src="/assets/Img/logo/Logo_Pharmacycouncil_White.png"
                alt="The Pharmacy Council of Thailand"
                fill
                sizes="112px"
                className="scale-[0.88] object-contain drop-shadow-[0_0_14px_rgba(255,255,255,0.18)]"
              />
            </div>
            <div className="relative h-16 w-16 sm:h-[5.25rem] sm:w-[5.25rem] md:portrait:h-[4.6rem] md:portrait:w-[4.6rem] lg:h-[5.5vw] lg:w-[5.5vw] lg:max-h-[84px] lg:max-w-[84px] max-md:landscape:h-12 max-md:landscape:w-12">
              <Image
                src="/assets/Img/logo/Logo_ราชวิทยาลัยสีขาว.png"
                alt="Royal College of Pharmacy of Thailand"
                fill
                sizes="112px"
                className="scale-[1.35] object-contain drop-shadow-[0_0_14px_rgba(255,255,255,0.18)]"
              />
            </div>
          </div>

          <div className="-ml-4 mt-6 sm:-ml-10 sm:mt-9 lg:-ml-[3vw] lg:mt-[1.6vh] md:portrait:-ml-[1.8vw] md:portrait:mt-[2.8vh] min-[1280px]:portrait:mt-[1.6vh] max-md:landscape:mt-3">
            <Image
              src="/assets/Img/logo/LOGO1.png"
              alt="2nd PRIS 2026 Pharmacy Research and Innovation Summit"
              width={982}
              height={268}
              priority
              className="h-auto w-full max-w-[min(94vw,620px)] sm:max-w-[780px] md:portrait:max-w-[min(88vw,900px)] lg:max-w-[min(50vw,780px)] max-md:landscape:max-w-[360px] drop-shadow-[0_0_24px_rgba(71,139,255,0.34)]"
            />
          </div>

          <div className="mt-7 sm:mt-10 lg:mt-[2.2vh] md:portrait:mt-[4.1vh] min-[1280px]:portrait:mt-[2.2vh] max-md:landscape:mt-4">
            <h1 className="max-w-[1060px] text-[1.85rem] font-black uppercase leading-[1.14] tracking-[0.07em] text-white min-[380px]:text-[2.1rem] sm:text-[2.65rem] md:text-[3.05rem] md:portrait:text-[clamp(2.75rem,5.3vw,3.55rem)] lg:text-[clamp(2.05rem,2.25vw,2.95rem)] max-md:landscape:text-[1.45rem] max-md:landscape:leading-[1.08]">
              Pharmacy Research & Innovation
              <span className="block">Driving Sustainable Healthcare</span>
            </h1>
          </div>

          <div className="mt-7 flex w-full max-w-[860px] flex-col gap-4 text-white sm:flex-row sm:items-center sm:gap-6 lg:mt-[2.8vh] lg:max-w-[780px] lg:gap-5 md:portrait:mt-[3.4vh] md:portrait:max-w-none md:portrait:gap-5 min-[1280px]:portrait:mt-[2.8vh] max-md:landscape:mt-4 max-md:landscape:flex-row max-md:landscape:items-center max-md:landscape:gap-3">
            <div className="flex min-w-0 items-center gap-3 md:portrait:gap-2.5 max-md:landscape:gap-2">
              <CalendarDays aria-hidden="true" className="h-5 w-5 shrink-0 text-[#168fff] md:portrait:h-5 md:portrait:w-5 lg:h-5 lg:w-5 max-md:landscape:h-4 max-md:landscape:w-4" />
              <div className="min-w-0 uppercase">
                <p className="flex flex-nowrap items-baseline gap-2 whitespace-nowrap leading-none text-[#168fff] sm:gap-2.5 md:portrait:gap-1.5 max-md:landscape:gap-1.5">
                  <span className="text-[1.12rem] font-black tracking-[0.14em] sm:text-[1.35rem] md:text-[1.48rem] md:portrait:text-[1.34rem] md:portrait:tracking-[0.1em] lg:text-[1.12rem] max-md:landscape:text-[0.78rem]">
                    29-30
                  </span>
                  <span className="text-[1.12rem] font-black tracking-[0.14em] sm:text-[1.35rem] md:text-[1.48rem] md:portrait:text-[1.34rem] md:portrait:tracking-[0.1em] lg:text-[1.12rem] max-md:landscape:text-[0.78rem]">
                    October
                  </span>
                  <span className="text-[1.12rem] font-black tracking-[0.14em] text-white sm:text-[1.35rem] md:text-[1.48rem] md:portrait:text-[1.34rem] md:portrait:tracking-[0.1em] lg:text-[1.12rem] max-md:landscape:text-[0.78rem]">
                    2026
                  </span>
                </p>
              </div>
            </div>

            <div className="hidden h-11 w-px shrink-0 bg-gradient-to-b from-transparent via-white/28 to-transparent sm:block md:portrait:hidden max-md:landscape:block max-md:landscape:h-8" />

            <div className="flex min-w-0 items-center gap-3 md:portrait:gap-2.5 max-md:landscape:gap-2">
              <MapPin aria-hidden="true" className="h-5 w-5 shrink-0 text-[#168fff] md:portrait:h-5 md:portrait:w-5 lg:h-5 lg:w-5 max-md:landscape:h-4 max-md:landscape:w-4" />
              <div className="min-w-0 uppercase">
                <p className="whitespace-nowrap text-[1.12rem] font-black leading-none tracking-[0.14em] text-[#168fff] sm:text-[1.35rem] md:text-[1.48rem] md:portrait:text-[1.34rem] md:portrait:tracking-[0.1em] lg:text-[1.12rem] max-md:landscape:text-[0.78rem]">
                  Jupiter Room 4-13
                </p>
                <p className="mt-2 text-sm font-black leading-snug tracking-[0.08em] text-white/90 sm:text-[0.9rem] md:portrait:mt-1.5 md:portrait:text-[0.78rem] md:portrait:tracking-[0.06em] lg:text-[0.78rem] max-md:landscape:mt-1 max-md:landscape:text-[0.58rem]">
                  Impact Muang Thong Thani
                  <span className="block">Nonthaburi, Thailand</span>
                </p>
              </div>
            </div>

          </div>

          <div className="mt-7 grid w-full max-w-[760px] grid-cols-1 gap-4 sm:grid-cols-2 md:portrait:mt-[4.6vh] md:portrait:max-w-none md:portrait:gap-5 min-[1280px]:mt-[2.8vh] max-md:landscape:mt-4 max-md:landscape:grid-cols-2 max-md:landscape:gap-3">
            <Link
              href="/registration"
              className="group relative grid min-h-[64px] grid-cols-[1.75rem_1fr_1.75rem] items-center gap-3 overflow-hidden rounded-full border border-[#ff8a24] bg-[#ff6a00] px-5 text-center text-[0.8rem] font-black uppercase tracking-[0.16em] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.26),inset_0_-18px_38px_rgba(140,43,0,0.22),0_0_30px_rgba(255,112,20,0.38),0_14px_34px_rgba(0,0,0,0.42)] transition duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-[#ffc078] hover:bg-[#ff7a1a] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.32),inset_0_-18px_42px_rgba(140,43,0,0.24),0_0_48px_rgba(255,122,26,0.62),0_18px_42px_rgba(0,0,0,0.5)] active:translate-y-0 active:scale-[0.99] sm:min-h-[76px] sm:grid-cols-[2rem_1fr_2rem] sm:gap-4 sm:px-7 sm:text-base sm:tracking-[0.2em] md:portrait:min-h-[70px] lg:min-h-[72px] max-md:landscape:min-h-[52px] max-md:landscape:text-[0.68rem]"
            >
              <span className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_0%,rgba(255,221,177,0.52),transparent_58%)]" />
              <span className="absolute inset-x-8 bottom-0 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-75 transition group-hover:via-[#07101f]" />
              <span className="absolute -left-1/3 top-0 h-full w-1/3 skew-x-[-18deg] bg-white/26 opacity-0 blur-sm transition duration-700 group-hover:left-[115%] group-hover:opacity-100" />
              <span className="relative justify-self-start h-2 w-2 rounded-full bg-white opacity-85 shadow-[0_0_18px_rgba(255,255,255,0.9)] transition group-hover:scale-[1.7] group-hover:opacity-100" />
              <span className="relative justify-self-center whitespace-nowrap drop-shadow-[0_0_12px_rgba(100,28,0,0.32)]">Register Now</span>
              <span className="relative flex h-7 w-7 items-center justify-center justify-self-end rounded-full border border-white/18 bg-white text-[#ff6a00] shadow-[0_0_16px_rgba(255,255,255,0.28)] transition duration-300 group-hover:translate-x-1 group-hover:bg-[#07101f] group-hover:text-white sm:h-8 sm:w-8">
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
            <Link
              href="/call-for-abstracts"
              className="group relative grid min-h-[64px] grid-cols-[1.75rem_1fr_1.75rem] items-center gap-3 overflow-hidden rounded-full border border-white/85 bg-white px-5 text-center text-[0.8rem] font-black uppercase tracking-[0.16em] text-[#07101f] shadow-[inset_0_1px_0_rgba(255,255,255,0.95),0_0_30px_rgba(255,255,255,0.24),0_14px_34px_rgba(0,0,0,0.42)] transition duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-white hover:bg-[#f5fbff] hover:shadow-[inset_0_1px_0_rgba(255,255,255,1),0_0_42px_rgba(255,255,255,0.38),0_18px_42px_rgba(0,0,0,0.5)] active:translate-y-0 active:scale-[0.99] sm:min-h-[76px] sm:grid-cols-[2rem_1fr_2rem] sm:gap-4 sm:px-7 sm:text-base sm:tracking-[0.2em] md:portrait:min-h-[70px] lg:min-h-[72px] max-md:landscape:min-h-[52px] max-md:landscape:text-[0.68rem]"
            >
              <span className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.92),rgba(214,238,255,0.55)_48%,transparent_72%)]" />
              <span className="absolute inset-x-8 bottom-0 h-px bg-gradient-to-r from-transparent via-[#168fff] to-transparent opacity-80 transition group-hover:via-[#ff7a1a]" />
              <span className="absolute -left-1/3 top-0 h-full w-1/3 skew-x-[-18deg] bg-[#168fff]/22 opacity-0 blur-sm transition duration-700 group-hover:left-[115%] group-hover:opacity-100" />
              <span className="relative justify-self-start h-2 w-2 rounded-full bg-[#168fff] opacity-80 shadow-[0_0_18px_rgba(22,143,255,0.9)] transition group-hover:scale-[1.7] group-hover:opacity-100" />
              <span className="relative justify-self-center whitespace-nowrap drop-shadow-[0_1px_0_rgba(255,255,255,0.65)]">Submit Abstract</span>
              <span className="relative flex h-7 w-7 items-center justify-center justify-self-end rounded-full border border-[#07101f]/10 bg-[#07101f] text-white shadow-[0_0_16px_rgba(22,143,255,0.25)] transition duration-300 group-hover:translate-x-1 group-hover:bg-[#168fff] sm:h-8 sm:w-8">
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          </div>

        </div>

        <div className="relative mt-14 w-full px-1 py-4 sm:mt-auto sm:px-5 sm:py-5 md:portrait:pb-[1.8vh] min-[1280px]:mt-[clamp(1.75rem,3.8vh,3.5rem)] min-[1280px]:mb-3 min-[1280px]:max-[1439px]:landscape:mt-[6vh] max-md:landscape:mt-8 max-md:landscape:py-2">
          <div className="relative flex flex-col items-center gap-3 max-md:landscape:gap-2">
            <p className="text-center text-[0.62rem] font-black uppercase tracking-[0.26em] text-white/58 sm:text-[0.68rem] sm:tracking-[0.34em] max-md:landscape:text-[0.52rem]">
              Countdown to PRIS 2026
            </p>
            <Countdown className="mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}
