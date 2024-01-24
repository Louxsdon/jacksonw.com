import Image from "next/image";
import { GoDeviceDesktop } from "react-icons/go";
import { IoIosPhonePortrait } from "react-icons/io";
import { MdLaptopMac } from "react-icons/md";

export default function Home() {
  return (
    <>
      {/* HERO HEADER SECTION */}
      <div className="flex flex-col justify-center items-center align-middle bg-gradient-to-tr from-primary-600 to-secondary-600  ">
        <div className="overflow-hidden p-4 items-center justify-center flex flex-col">
          <Image
            src={require("/public/assets/images/JACKSONw23.png")}
            alt="site logo"
          />
        </div>
        <div className="w-full lg:flex items-center justify-center pb-6 pt-2 mt:pt-4">
          {/* hero text section */}
          <div className="w-full xl:w-[50%] flex flex-col justify-center items-center  text-white">
            <div className="hero-text text-4xl md:text-6xl xl:text-7xl 2xl:text-8xl font-black text-center items-center">
              <h2 className="">The Ultimate</h2>
              <h2 className="text-primary-300 outline">Photo</h2>
              <h2>Challenge</h2>
            </div>
            <div className="mt-5 font-light text-2xl text">
              <p>LET YOUR BEAUTY STAND</p>
            </div>
            <div className="edition bg-orange-400 py-3 px-6 text-xl uppercase mt-2">
              <h2>Edition One (1)</h2>
            </div>
          </div>

          {/* hero images */}
          <div className="w-full xl:w-[35%] ">
            {/* photo cam */}
            <Image
              objectFit="contain"
              className="w-full"
              src={require("/public/assets/images/jacksonw-bg1.png")}
              alt="model-image-2"
            />
          </div>
        </div>
      </div>

      {/* PRIZE SECTION */}
      <div className="prizes py-24">
        <div className="container text-center">
          <h3 className="text-4xl font-semibold">The Prize Can Be Yours</h3>
          <p className="text-slate-500 md:w-[40%] m-auto">
            Stand a chance of winning exciting gift prizes just by participating
            in the Photo Contest
          </p>
          <div className="prizes grid grid-cols-1 xl:grid-cols-4 md:grid-cols-2 gap-2 md:gap-4 xl:gap-6 justify-center mt-12">
            <div className="prize flex flex-col justify-center items-center p-5 bg-white shadow-lg inset-5">
              <GoDeviceDesktop className="text-5xl text-slate-500" />
              <p>Flat Screen TV</p>
            </div>
            <div className="prize flex flex-col justify-center items-center p-5 bg-white shadow-lg inset-5">
              <IoIosPhonePortrait className="text-5xl text-slate-500" />
              <p>Smart Phones</p>
            </div>
            <div className="prize flex flex-col justify-center items-center p-5 bg-white shadow-lg inset-5">
              <MdLaptopMac className="text-5xl text-slate-500" />
              <p>Laptops</p>
            </div>
            <div className="prize flex flex-col justify-center items-center p-5 bg-white shadow-lg inset-5">
              <GoDeviceDesktop className="text-5xl text-slate-500" />
              <p>Air Conditioners</p>
            </div>
          </div>
        </div>
      </div>
      {/* MEDIA PARTNERS */}
      <div className="bg-slate-200 h-80 py-24">
        <div className="container text-center">
          <h2 className="text-4xl font-semibold">Our Media Partners</h2>
          <div className="media-partners"></div>
        </div>
      </div>
    </>
  );
}
