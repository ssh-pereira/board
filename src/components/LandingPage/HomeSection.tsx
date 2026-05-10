'use client';

import Image from 'next/image';
import React from 'react';

const HomeSection: React.FC = () => {
  const scrollToSubscribe = () => {
    const el = document.getElementById('subscribe-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/*Desktop*/}
      <section className="hidden w-full bg-cover bg-center bg-[url('/lp/homeSectionBg.png')] bg-gray-900 text-white lg:flex flex-col relative overflow-hidden max-w-[1440px]">
        <div className="flex flex-row items-start justify-between w-full min-h-[700px]">
          <div className="w-full lg:w-1/2 xl:w-[55%] flex flex-col text-left z-20 px-20 mt-[160px]">
            <h1
              className="text-[96px] leading-[88px] font-bold mb-6"
              style={{ letterSpacing: '-0.06em' }}
            >
              Game. On.
              <br /> Echelon.
            </h1>
            <p className="text-[16px] leading-[24px] font-normal w-full max-w-xl mb-8">
              A platform for online/hybrid (digitally augmented) tabletop gaming
              and digitally publishing original RPG systems.
            </p>

            <button
              onClick={scrollToSubscribe}
              className="bg-white text-black text-[18px] leading-[28px] px-8 py-3 rounded-full font-medium w-fit"
            >
              Sign up for our mailing list
            </button>
          </div>

          <div className="hidden lg:flex relative w-1/2 xl:w-[45%] self-end items-end justify-end">
            <Image
              src="/lp/DasdhbordGame.png"
              alt="Echelon Dashboard"
              width={780}
              height={616}
              quality={100}
              priority
              className="h-[616px] w-auto object-contain object-bottom-right drop-shadow-[0_0_30px_rgba(25,159,236,0.2)]"
            />
          </div>
        </div>

        <div className="pointer-events-none flex w-full h-28 absolute bottom-0 z-10 bg-gradient-to-t from-black to-transparent" />
      </section>

      {/*Mobile*/}
      <section className="lg:hidden relative w-full h-[780px] bg-cover bg-center bg-[url('/lp/fundo-mob-home.png')] text-white flex flex-col">
        <div className="pt-32 flex flex-col w-full">
          <div className="w-full space-y-5 px-6">
            <h1
              className="text-white font-bold text-[60px] sm:text-[70px] md:text-[80px] leading-[56px] sm:leading-[64px] md:leading-[72px]"
              style={{ letterSpacing: '-0.06em' }}
            >
              Game. On. Echelon.
            </h1>
            <p className="text-white font-normal text-[16px] leading-[24px]">
              A platform for online/hybrid (digitally augmented) tabletop gaming
              and digitally publishing original RPG systems.
            </p>
          </div>
        </div>

        <div className="absolute left-0 right-0 bottom-[85px] px-6">
          <button
            onClick={scrollToSubscribe}
            className="rounded-full w-full bg-white text-black text-[18px] leading-[28px] px-8 py-3 font-medium"
          >
            Sign up for our mailing list
          </button>
        </div>
      </section>
    </>
  );
};

export default HomeSection;
