import Marquee from "react-fast-marquee";
import { FaMinus } from "react-icons/fa";

const Discount = () => {
  return (
    <div className="mt-12 max-w-screen-xl mx-auto px-5 text-center">
      <div>
        <img
          className="inline md:w-[300px]"
          src="https://i.ibb.co/Zcz6x00/Screenshot-2024-07-13-112237.png"
          alt=""
        />
        <div>
          <h3 className="text-xl font-extrabold">সুপার এক্সাইটিং অফার</h3>
          <h2 className="text-2xl font-extrabold mt-4">
            <span className="text-red-500">৬০% ডিস্কাউন্ট</span> অ্যাভেইল্যাবল!!
          </h2>
          <div className="flex flex-wrap gap-6 mt-12 items-center font-bold text-white justify-center">
            <div className="px-16 py-1 bg-red-500 rounded-lg">
              <h3 className="text-2xl">22</h3>
              <p>Hours</p>
            </div>
            <div className="px-16 py-1 bg-red-500 rounded-lg">
              <h3 className="text-2xl">31</h3>
              <p>Minutes</p>
            </div>
            <div className="px-16 py-1 bg-red-500 rounded-lg">
              <h3 className="text-2xl">12</h3>
              <p>Seconds</p>
            </div>
          </div>
          <div className="space-y-5 mt-8">
            <p className="font-extrabold">
              আমরা সত্যিকার অর্থেই চাই সকল বিজনেস ফাউন্ডার দের সাক্সেস্ফুল হতে
              হেল্প করতে
            </p>
            <p className="font-extrabold">
              তাই ল্যান্ডিং পেইজ টেমপ্লেটের পাশাপাশি ১০ ঘন্টার ল্যান্ডিং পেইজ
              ডিজাইন কোর্স, ই-কমার্স কোর্স, সেলস ড্রিভেন কপি লিখার টেমপ্লেট সহ
              আরও ভ্যালুয়েবল রিসোর্স থাকার পরও আমরা দিচ্ছি{" "}
              <span className="text-red-500">৬০% ডিস্কাউন্ট!</span>
            </p>
            <p className="font-extrabold text-red-500">
              তবে এটা অবশ্যই খুবই সীমিত সময়ের জন্য
            </p>
            <h1 className="text-3xl font-extrabold">
              অর্ডার করুন মাত্র{" "}
              <span className="bg-red-500 p-1 text-white rounded-lg">
                ৮৯০ টাকায়!
              </span>
            </h1>
          </div>
          {/* order btn*/}
          <div className="mt-16 text-center">
            <button className="py-4 px-12 md:px-24 bg-red-500 text-white font-bold duration-500 hover:scale-110 rounded-xl">
              এখনই অর্ডার করুন
            </button>
          </div>
          {/* -------------- */}
          <div className="mt-28 max-w-screen-lg mx-auto text-center ">
            <img
              className="inline"
              src="https://i.ibb.co/FVVhh1n/Screenshot-2024-07-13-120510.png"
              alt=""
            />
            {/* course Price  */}
            <div className="shadow-md rounded-xl shadow-red-400 ">
              <div className="p-8 space-y-7">
                <div className="flex items-center justify-between font-bold">
                  <h1 className="text-2xl">কাস্টোমাইজেবল ল্যান্ডিং পেইজ</h1>
                  <h1>
                    <FaMinus />
                  </h1>
                  <h1 className="text-2xl">৫,০০০ টাকা/=</h1>
                </div>
                <div className="flex items-center justify-between font-bold">
                  <h1 className="text-2xl">ডিজাইন কার্ড টেমপ্লেট</h1>
                  <h1>
                    <FaMinus />
                  </h1>
                  <h1 className="text-2xl">২,০০০ টাকা/=</h1>
                </div>
                <div className="flex items-center justify-between font-bold">
                  <h1 className="text-2xl">কপি স্ট্রাকচার টেমপ্লেট</h1>
                  <h1>
                    <FaMinus />
                  </h1>
                  <h1 className="text-2xl">৫,০০০ টাকা/=</h1>
                </div>
                <div className="flex items-center justify-between font-bold">
                  <h1 className="text-2xl">
                    ১০ ঘন্টার ল্যান্ডিং পেইজ ডিজাইন কোর্স
                  </h1>
                  <h1>
                    <FaMinus />
                  </h1>
                  <h1 className="text-2xl">৫,০০০ টাকা/=</h1>
                </div>
                <div className="flex items-center justify-between font-bold">
                  <h1 className="text-2xl">
                    ৭ ঘন্টার ই-কমার্স ওয়েবসাইট ডিজাইন কোর্স
                  </h1>
                  <h1>
                    <FaMinus />
                  </h1>
                  <h1 className="text-2xl">৫,০০০ টাকা/=</h1>
                </div>
                <hr className="border-2 border-black" />
                <h1 className="text-2xl font-extrabold text-center">
                  টোটাল <span className="text-red-500">১৭,৯৯৯ টাকা</span>{" "}
                  <span className="font-normal">সমমূল্যের ভ্যালু</span>
                </h1>
              </div>
            </div>
            <div className="mt-12 max-w-screen-md mx-auto">
              <h1 className="text-sm font-extrabold ">
                জী, টেমপ্লেট সহ ভ্যালুয়েবল রিসোর্সে ঠাসা এই সব কিছুই আপনি পাবেন
                <span className="text-red-500">৬০% ডিস্কাউন্টে!</span>
              </h1>
              <h2 className="text-2xl font-extrabold mt-4">
                <span className="text-red-500">মাত্র ৮৯০ টাকায়</span> (সীমিত
                সময়ের জন্য)
              </h2>
            </div>
            {/* order */}
            <div className="mt-16 text-center">
              <button className="py-4 px-12 md:px-24 bg-red-500 text-white font-bold duration-500 hover:scale-110 rounded-xl">
                এখনই অর্ডার করুন
              </button>
            </div>
            {/* marque */}
            <div className="mt-32">
              <div className="bg-red-500 p-4 font-bold text-white">
                <Marquee speed={120} pauseOnHover="true">
                  খুব দ্রুত অফারটি প্রাইস বৃদ্ধি করা হবে তাই প্রয়োজন হলে এখনই
                  সংগ্রহ করে ফেলুন
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discount;
