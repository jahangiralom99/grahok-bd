import { FaCertificate } from "react-icons/fa";
import { IoRocketOutline } from "react-icons/io5";

const Banner = () => {
  return (
    <div className="max-w-xl mx-auto  mt-24 text-center px-6">
      <h1 className="text-3xl lg:text-4xl font-bold">
        বিজনেস এভিনিউ বাড়ান <br /> <br />{" "}
        <span className="px-4 py-1 bg-red-500 rounded-lg text-white">
          লেন্ডিং পেইজ{" "}
        </span>{" "}
        ব্যবহার করে <IoRocketOutline className="inline " />
      </h1>
      <div className="mt-12 space-y-4 font-bold">
        <p>ফোকাস করুন প্রডাক্ট ডেভেলপমেন্ট এবং স্কিল করুন অনলাইনে।</p>
        <p className="flex items-center justify-center gap-3">
          <FaCertificate /> Pre-tested ল্যান্ডিং পেইজ টেমপ্লেট
        </p>
        <p className="flex items-center justify-center gap-3">
          <FaCertificate /> ডিজাইন আইডিয়া নিয়ে ভাবতে হবে না
        </p>
        <p className="flex items-center justify-center gap-3">
          <FaCertificate /> মাত্র ১ ঘন্টায় ল্যান্ডিং পেইজ
        </p>
        <p className="flex items-center justify-center gap-3">
          <FaCertificate /> ড্রাগন ড্রপ কাস্টমাইজেশন with elementor
        </p>
        <button className="py-2 px-6 bg-red-500 text-white font-bold duration-500 hover:scale-110 rounded-xl">
          সলিউশনটি নিতে চাই
        </button>
      </div>
    </div>
  );
};

export default Banner;
