import Marquee from "react-fast-marquee";
import banner1 from "../../assets/banner1.png";
import banner2 from "../../assets/banner2.png";
import banner3 from "../../assets/banner3.png";
import banner4 from "../../assets/banner4.png";
import banner5 from "../../assets/banner5.png";
import banner6 from "../../assets/banner6.png";

const Marque = () => {
  return (
    <div className="mt-12 max-w-screen-xl mx-auto px-5">
      <Marquee loop={2}>
        <div className="flex">
          <img src={banner1} alt="" />
          <img src={banner2} alt="" />
          <img src={banner3} alt="" />
          <img src={banner4} alt="" />
          <img src={banner5} alt="" />
          <img src={banner6} alt="" />
          <img src={banner1} alt="" />
          <img src={banner1} alt="" />
          <img src={banner2} alt="" />
          <img src={banner3} alt="" />
          <img src={banner4} alt="" />
          <img src={banner5} alt="" />
          <img src={banner6} alt="" />
          <img src={banner1} alt="" />
        </div>
      </Marquee>
      <div className="bg-red-500 p-4 font-bold w-full text-white">
        <Marquee speed={120} pauseOnHover="true">
          খুব দ্রুত অফারটি প্রাইস বৃদ্ধি করা হবে তাই প্রয়োজন হলে এখনই সংগ্রহ
          করে ফেলুন
        </Marquee>
      </div>
    </div>
  );
};

export default Marque;
