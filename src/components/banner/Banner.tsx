import BannerHeader from "./BannerHeader";
import BannerHero from "./BannerHero";
import BannerCTA from "./BannerCTA";

const Banner = () => {
  return (
    <div
      className="relative w-full h-screen overflow-hidden"
    >
      <div
        className="absolute inset-0 w-full h-full bg-center bg-cover"
        style={{ backgroundImage: 'url("/src/assets/img/banner.jpg")' }}
      />
      <div 
        className="absolute inset-0 w-full h-full bg-[#E5D3B3]/40" 
      />
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
        <BannerHeader />

        <div className="flex flex-col items-center gap-5">
          <BannerHero />
          <BannerCTA />
        </div>

        {/* WhatsApp Floating Button */}
        <div className="absolute bottom-8 right-8 bg-whatsapp-green w-14 h-14 rounded-full flex items-center justify-center text-3xl text-white cursor-pointer shadow-lg z-10 hover:scale-110 transition-transform">
          💬
        </div>
      </div>
    </div>
  );
};

export default Banner;
