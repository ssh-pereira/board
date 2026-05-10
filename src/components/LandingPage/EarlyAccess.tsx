const Arrow: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="8"
    height="8"
    viewBox="0 0 8 8"
    fill="none"
    className="shrink-0 fill-[#199FEC]"
  >
    <path d="M7.5 3.22427C8.16667 3.56904 8.16667 4.43096 7.5 4.77573L1.5 7.87866C0.833334 8.22343 6.63909e-07 7.79247 5.6647e-07 7.10293L1.33333 4L-3.10479e-07 0.897075C-4.07918e-07 0.207535 0.833333 -0.223427 1.5 0.121343L7.5 3.22427Z" />
  </svg>
);

export default function EarlyAccess({}) {
  return (
    <section className="w-full bg-cover bg-center flex flex-col items-center justify-center gap-0 md:gap-8 relative overflow-hidden max-w-[1440px] mt-[200px] px-6 md:px-20">
      <div className="flex flex-col items-start md:items-center justify-center w-full">
        <p className="md:hidden inline-flex items-center justify-center px-3 py-1 rounded-full bg-[#199FEC] text-white text-[14px] leading-[20px] font-medium self-start shadow-sm mb-4">
          Beta
        </p>

        <div className="relative flex">
          <p
            className="text-white text-[40px] leading-[48px] md:text-[56px] md:leading-[64px] font-semibold text-left md:text-center mb-[28px]"
            style={{ letterSpacing: '-0.04em' }}
          >
            Early Access Features
          </p>
          <span className="absolute top-1 -right-6 hidden md:inline-flex items-center justify-center px-3 py-1 rounded-full bg-[#199FEC] text-white text-[14px] leading-[20px] font-medium shadow-sm transform rotate-6">
            Beta
          </span>
        </div>

        {/*Desktop*/}
        <div className="hidden md:flex flex-wrap items-center gap-2 lg:gap-3 text-[14px] leading-[20px] font-medium self-start md:self-center text-left md:text-center mb-2">
          <span className="text-[#199FEC]">Free Seems Fair</span>
          <Arrow />
          <span>
            Betas are for figuring things out, and not everything will work
            correctly.
          </span>
        </div>
        <p className="hidden md:flex text-[16px] leading-[24px] font-normal self-start md:self-center text-left md:text-center">
          You are doing us a favor by playing. We want to make our trial run as
          accessible as possible,{' '}
          <span className="text-[#199FEC]">
            {' '}
            so the first beta test will be 100% on us.
          </span>
        </p>

        {/*Mobile*/}
        <div className="md:hidden">
          <p className="text-white text-[14px] leading-[20px] font-medium">
            <span className="inline-flex items-center gap-2 align-middle">
              <span className="text-[#199FEC]">Free Seems Fair</span>
              <Arrow />
            </span>{' '}
            Betas are for figuring things out, and not everything will work
            correctly. You are doing us a favor by playing. We want to make our
            trial run as accessible as possible, so the first beta test will be
            100% on us.
          </p>
        </div>
      </div>

      <div className="w-full flex flex-col items-center justify-center mt-16 md:w-[1062px]">
        <div className="flex flex-col md:flex-row items-stretch gap-4 w-full">
          <div className="flex flex-col gap-4 w-full md:flex-1">
            <div
              className="p-[1px] rounded-[16px] w-full"
              style={{
                background:
                  'linear-gradient(135deg, #002C45 0%, #F45111 34%, #199FEC 71%, #002C45 100%)',
              }}
            >
              <div
                className="h-[420px] md:h-[370px] flex rounded-[16px] mx-auto overflow-hidden"
                style={{ backgroundColor: '#041823' }}
              >
                <div className="relative w-full h-full rounded-[16px]">
                  <div className="md:hidden flex h-full w-full flex-col">
                    <div className="h-1/2 w-full bg-no-repeat bg-top bg-cover bg-[url(/lp/MapGameMobile.png)]" />
                    <div className="flex-1 flex flex-col gap-7 p-7">
                      <h1
                        className="text-[20px] leading-[28px] font-medium"
                        style={{ letterSpacing: '-0.04em' }}
                      >
                        The Depth of Crunch with Digital Convenience
                      </h1>
                      <p className="text-[rgba(255,255,255,0.5)] text-[14px] leading-[20px] font-medium">
                        Digital tools unlock new TTRPG features like Dynamic
                        Smart Character Sheets and streamline complex systems
                        with automated mechanics and digital maps.
                      </p>
                    </div>
                  </div>

                  <div className="hidden md:flex w-full h-full">
                    <div
                      className="flex flex-col w-full h-full rounded-[16px] p-7 gap-7"
                      style={{
                        backgroundImage: "url('/lp/MapGame.png')",
                        backgroundSize: 'contain',
                        backgroundPosition: 'bottom',
                        backgroundRepeat: 'no-repeat',
                      }}
                    >
                      <h1
                        className="text-[20px] leading-[28px] font-medium"
                        style={{ letterSpacing: '-0.04em' }}
                      >
                        The Depth of Crunch with Digital Convenience
                      </h1>
                      <p className="text-[rgba(255,255,255,0.5)] text-[14px] leading-[20px] font-medium">
                        Digital tools unlock new TTRPG features like Dynamic
                        Smart Character Sheets and streamline complex systems
                        with automated mechanics and digital maps.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="p-[1px] rounded-[16px] w-full"
              style={{
                background:
                  'linear-gradient(45deg, #002C45 0%, #F45111 35%, #199FEC 70%, #002C45 100%)',
              }}
            >
              <div
                className="flex rounded-[16px] mx-auto overflow-hidden h-[350px] md:h-[262px]"
                style={{ backgroundColor: '#041823' }}
              >
                <div className="relative w-full h-full rounded-[16px]">
                  <div className="md:hidden flex h-full w-full flex-col">
                    <div className="h-1/2 w-full bg-no-repeat bg-top bg-cover bg-[url(/lp/NewPersonMobile.png)]" />
                    <div className="flex-1 flex flex-col gap-7 p-7">
                      <h1
                        className="text-[20px] leading-[28px] font-medium"
                        style={{ letterSpacing: '-0.04em' }}
                      >
                        Ever-Improving Experiences
                      </h1>
                      <p className="text-[rgba(255,255,255,0.5)] text-[14px] leading-[20px] font-medium">
                        We&apos;ll expand our titles with free maps, campaign ideas,
                        and in-game content—including new illustrations, spell
                        icons, weapon art, and more.
                      </p>
                    </div>
                  </div>

                  <div className="hidden md:flex relative w-full md:h-auto md:bg-[url(/lp/NewPerson.png)] md:bg-no-repeat md:bg-right md:bg-[length:50%_auto] md:pr-[50%]">
                    <div className="flex flex-col gap-7 p-7">
                      <h1
                        className="text-[20px] leading-[28px] font-medium"
                        style={{ letterSpacing: '-0.04em' }}
                      >
                        Ever-Improving Experiences
                      </h1>
                      <p className="text-[rgba(255,255,255,0.5)] text-[14px] leading-[20px] font-medium">
                        We&apos;ll expand our titles with free maps, campaign ideas,
                        and in-game content—including new illustrations, spell
                        icons, weapon art, and more.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 w-full md:flex-1">
            <div
              className="p-[1px] rounded-[16px] w-full"
              style={{
                background:
                  'linear-gradient(225deg, #002C45 0%, #F45111 35%, #199FEC 70%, #002C45 100%)',
              }}
            >
              <div
                className="flex rounded-[16px] mx-auto overflow-hidden h-[350px] md:h-[316px]"
                style={{ backgroundColor: '#041823' }}
              >
                <div className="relative w-full h-full rounded-[16px]">
                  <div className="md:hidden flex h-full w-full flex-col">
                    <div className="h-1/2 w-full bg-no-repeat bg-top bg-cover bg-[url(/lp/RemotelyMobile.png)]" />
                    <div className="flex-1 flex flex-col gap-7 p-7">
                      <h1
                        className="text-[20px] leading-[28px] font-medium"
                        style={{ letterSpacing: '-0.04em' }}
                      >
                        Play Fully Remotely or In-Person with Digital Elements
                      </h1>
                      <p className="text-[rgba(255,255,255,0.5)] text-[14px] leading-[20px] font-medium">
                        Play remotely with a global community or gather in
                        person with real dice, miniatures, and your favorite
                        maps.
                      </p>
                    </div>
                  </div>

                  <div className="hidden h-full md:flex relative w-full md:h-full md:bg-[url(/lp/Remotely.png)] md:bg-no-repeat md:bg-right md:bg-[length:50%_auto] md:pr-[50%]">
                    <div className="flex flex-col gap-7 p-7">
                      <h1
                        className="text-[20px] leading-[28px] font-medium"
                        style={{ letterSpacing: '-0.04em' }}
                      >
                        Play Fully Remotely or In-Person with Digital Elements
                      </h1>
                      <p className="text-[rgba(255,255,255,0.5)] text-[14px] leading-[20px] font-medium">
                        Play remotely with a global community or gather in
                        person with real dice, miniatures, and your favorite
                        maps.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="p-[1px] rounded-[16px] w-full"
              style={{
                background:
                  'linear-gradient(-45deg, #002C45 0%, #F45111 35%, #199FEC 70%, #002C45 100%)',
              }}
            >
              <div
                className="flex rounded-[16px] mx-auto overflow-hidden h-[450px] md:h-[316px]"
                style={{ backgroundColor: '#041823' }}
              >
                <div className="relative w-full h-full rounded-[16px]">
                  <div className="md:hidden flex h-full w-full flex-col">
                    <div className="h-1/2 w-full bg-no-repeat bg-top bg-cover bg-[url(/lp/CreatorPartnershipMobile.png)]" />
                    <div className="flex-1 flex flex-col gap-7 p-7">
                      <h1
                        className="text-[20px] leading-[28px] font-medium"
                        style={{ letterSpacing: '-0.04em' }}
                      >
                        Commitment to Craftsmanship
                      </h1>
                      <p className="text-[rgba(255,255,255,0.5)] text-[14px] leading-[20px] font-medium">
                        Echelon vows to champion creators with our content from
                        art and authorship, to game design and user-experience
                        interfaces. We welcome our players to use any tools that
                        suit their needs, but our official content will always
                        be 100% handcrafted by real meatba—Err, humans.
                      </p>
                    </div>
                  </div>

                  <div className="hidden md:flex relative w-full md:h-auto md:bg-[url(/lp/CreatorPartnership.png)] md:bg-no-repeat md:bg-right md:bg-[length:33.333%_auto] md:pr-[33.333%]">
                    <div className="flex flex-col gap-7 p-7">
                      <h1
                        className="text-[20px] leading-[28px] font-medium"
                        style={{ letterSpacing: '-0.04em' }}
                      >
                        Commitment to Craftsmanship
                      </h1>
                      <p className="text-[rgba(255,255,255,0.5)] text-[14px] leading-[20px] font-medium">
                        Echelon vows to champion creators with our content from
                        art and authorship, to game design and user-experience
                        interfaces. We welcome our players to use any tools that
                        suit their needs, but our official content will always
                        be 100% handcrafted by real meatba—Err, humans.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
