import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        National Home Decor
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          Just for Your Home
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Empower your Home and Place with beautiful and enerziging vibes. Bring
        your house to life with our intuitive development tools. Get started
        today and turn your imagination into immersive reality!
      </p>
      <div className="flex justify-center my-10">
        <Link
          href="/national-home-decor/contact"
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md">
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
