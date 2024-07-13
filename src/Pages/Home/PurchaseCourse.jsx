import Marquee from "react-fast-marquee";
import youtube from "../../assets/youtube.png";

const PurchaseCourse = () => {
  const data = [
    {
      id: 1,
      name: "আমরাই প্রথম",
      title:
        "এই প্রথম বাংলাদেশে আপনি এত সব রিসোর্স এক যায়গায় অসম্ভব রিজেনেবল প্রাইসে পাচ্ছেন, যেটা আগে অন্য কোথাও কেউ দেয়নি",
      image: "https://i.ibb.co/YjJmY7s/Screenshot-2024-07-13-100455.png",
    },
    {
      id: 2,
      name: "ডিটেইলস টিউটোরিয়াল",
      title:
        "আমাদের কোর্সের টিউটোরিয়াল গুলো এমন ভাবে বানানো হয়েছে আপনি সব ভিডিও শেষ করলে আপনি শুধু ল্যান্ডিং পেইজ কাস্টমাইজ ই না একদম শূন্য থেকে যেকোনো ধরনের ল্যান্ডিং পেইজ বানাতে পারবেন",
      image: "https://i.ibb.co/3F675nk/Screenshot-2024-07-13-100437.png",
    },
    {
      id: 3,
      name: "রেডিমেট টেমপ্লেট",
      title:
        "থাকছে সেলস ড্রিভেন ল্যান্ডিং পেইজ টেমপ্লেট যেটি ব্যবহার করে কয়েক ঘন্টার ভিতরেই বানাতে পারবেন আপনার প্রোডাক্টের ল্যান্ডিং পেইজ",
      image: "https://i.ibb.co/mHCZRLR/Screenshot-2024-07-13-100418.png",
    },
    {
      id: 4,
      name: "আনলিমিটেড ল্যান্ডিং পেইজ",
      title:
        "এমন ভাবে আমাদের টেমপ্লেটটি বানানো হয়েছে যেটা ব্যবহার করে রেডি করতে পারবেন আনলিমিটেড ল্যান্ডিং পেইজ",
      image: "https://i.ibb.co/Jy0q70C/Screenshot-2024-07-13-100359.png",
    },
    {
      id: 5,
      name: "গ্রেট সাপোর্ট",
      title:
        "যেকোনো সমস্যায় আমাদের ফেসবুক পেইজে অথবা গ্রুপে মেসেজ করলেই আমাদের টেকনিক্যাল টিম আপনার সমস্যাটি সমাধান করে দিবে",
      image: "https://i.ibb.co/k1BWZT6/Screenshot-2024-07-13-100337.png",
    },
    {
      id: 6,
      name: "ফ্রড প্লাগিন (প্রেসেসিং)",
      title:
        "আপনাদের বিজনেসের জন্য ডেভেলপ করা হচ্ছে একটি পাওয়ারফুল ফেক অর্ডার প্রেভেন্ট প্লাগিন যেটির এক বছরের এক্সেস লাইসেন্স সম্পূর্ণ ফ্রিতে পাবেন",
      image: "https://i.ibb.co/Gp14JQ6/Screenshot-2024-07-13-100321.png",
    },
  ];

  return (
    <div className="mt-12 max-w-screen-xl mx-auto px-5">
      {/* card for Template */}
      <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center place-content-center max-w-screen-xl mx-auto px-4  gap-10 mt-12 text-center">
        {data.map((item) => (
          <div className="space-y-5 md:w-96 mx-auto" key={item._id}>
            <img className="inline  rounded-xl w-44" src={item.image} alt="" />
            <h1 className="text-2xl font-extrabold ">{item.name}</h1>
            <h1 className="font-extrabold text-[12px]">{item.title}</h1>
          </div>
        ))}
      </div>
      {/* btn */}
      <div className="mt-32 text-center">
        <button className="py-4 px-12 md:px-32 bg-red-500 text-white font-bold duration-500 hover:scale-110 rounded-xl">
          সলিউশনটি নিতে চাই
        </button>
      </div>
      {/* marque */}
      <div className="mt-32">
        <div className="bg-red-500 p-4 font-bold text-white">
          <Marquee speed={120} pauseOnHover="true">
            খুব দ্রুত অফারটি প্রাইস বৃদ্ধি করা হবে তাই প্রয়োজন হলে এখনই সংগ্রহ
            করে ফেলুন
          </Marquee>
        </div>
      </div>
      {/* price */}
      <div className="mt-32 text-center">
        <h1 className="text-4xl font-bold text-center">
          সব কিছু সেটাপ করতে কেমন খরচ পড়বে?
        </h1>
        <img
          className="inline"
          src="https://i.ibb.co/4PWytxn/Screenshot-2024-07-13-102620.png"
          alt=""
        />{" "}
        <br /> <br />
        <span className="p-4 text-sm font-extrabold border border-red-500 rounded-md">
          আপনার একটি ল্যান্ডিং পেইজ অথবা ই-কমার্স ওয়েবসাইট দাড় করাতে কেমন খরচ
          হবে?
        </span>
        <p className="mt-9 max-w-screen-sm mx-auto text-sm font-extrabold">
          আপনার লাগবে শুধু একটি <span className="text-red-500">ডোমেইন</span> এবং{" "}
          <span className="text-red-500">হোস্টিং</span>, ডোমেইজ যদি{" "}
          <span className="text-red-500">.com ডোমেইন</span> হয় তাহলে{" "}
          <span className="text-red-500">৯০০-১২০০টাকা</span> পড়বে এবং যদি{" "}
          <span className="text-red-500">.xyz ডোমেইন</span> কিনেন তাহলে মাত্র{" "}
          <span className="text-red-500">২০০-৩৫০ টাকা</span> পড়বে, আর হোস্টিং
          প্রতিমাস মাত্র <span className="text-red-500">৩৫০ টাকা</span> দিয়ে
          শুরু করতে পারবেন তাহলে{" "}
          <span className="text-red-500">.com ডোমেইন</span> এবং{" "}
          <span className="text-red-500">এক মাসের হোস্টিং</span> দিয়ে শুরু করতে
          আপনার খরচ হবে <span className="text-red-500">১২৫০-১৫৫০ টাকা</span> এবং{" "}
          <span className="text-red-500">.xyz ডোমেইন</span> এবং{" "}
          <span className="text-red-500">এক মাসের হোস্টিং</span> দিয়ে শুরু করলে
          খরচ হবে <span className="text-red-500">৫৫০-৭০০ টাকা মাত্ৰ</span>
        </p>
      </div>
      {/* btn */}
      <div className="mt-12 text-center">
        <button className="py-4 px-12 md:px-32 bg-red-500 text-white font-bold duration-500 hover:scale-110 rounded-xl">
          সলিউশনটি নিতে চাই
        </button>
      </div>
      {/* marque */}
      <div className="mt-32">
        <div className="bg-red-500 p-4 font-bold text-white">
          <Marquee speed={120} pauseOnHover="true">
            খুব দ্রুত অফারটি প্রাইস বৃদ্ধি করা হবে তাই প্রয়োজন হলে এখনই সংগ্রহ
            করে ফেলুন
          </Marquee>
        </div>
      </div>
      {/* ------------------- */}
      <div className="mt-24 text-center">
        <img
          className="inline md:w-[400px]"
          src="https://i.ibb.co/tYdh58S/Screenshot-2024-07-11-182630.png"
          alt=""
        />
        <div className="max-w-screen-sm mx-auto border border-violet-600 h-44 -mt-24">
          <h1 className="mt-32 text-2xl font-extrabold">
            Ecommerce ওয়েবসাইট সলিউশন
          </h1>
        </div>
        <div className="mt-8">
          <h1 className="text-2xl font-extrabold">
            একটি বিশাল ভ্যালুয়েবল বোনাস রিসোর্স
          </h1>
          <p className="mt-4 text-sm font-extrabold max-w-screen-md mx-auto">
            একদম শূন্য থকে কোনো টেকনিক্যাল নলেজ ছাড়াই একটি ফুল ফাংশনাল{" "}
            <span className="text-violet-600">ই-কমার্স ওয়েবসাইট</span> কিভাবে
            ডিজাইন করবেন, <span className="text-violet-600">ওয়ার্ডপ্রেসে</span>{" "}
            কিভাবে সব কিছু সেটাপ করবেন, কিভাবে{" "}
            <span className="text-violet-600">বিজনেসকে অটোমেশন করবেন</span> সব
            কিছুর ইনফরমেশন দিয়ে আমরা সাজিয়েছি{" "}
            <span className="text-violet-600">৭ ঘন্টার</span> একটি ইনফরমেটিভ
            কোর্স যেটি স্টেপ বাই স্টেপ ফলো করে আপনি রেডি করে ফেলতে পারবেন একটি{" "}
            <span className="text-violet-600">
              প্রফেশনাল ই-কমার্স ওয়েবসাইট
            </span>{" "}
            , নিচ থেকে ডিটেইলস দেখে নিন কি কি কভার করেছি আমরা এই ৭ ঘন্টার ফুল
            কোর্সটিতে
          </p>
        </div>
      </div>

      {/* Curse module */}
      <div className="mt-20 max-w-screen-md mx-auto">
        <h1 className="text-center text-xl font-extrabold">কোর্স মডিউল</h1>
        {/* curse 1 */}
        <div className="space-y-2 shadow-2xl p-5 bg-slate-100 mt-6">
          <h1 className="text-xl font-extrabold text-start">
            <span className="text-red-500">ডেই ১ : </span> ডোমেইন এবং হোস্টিং
            নিয়ে আইডিয়া পাবেন
          </h1>
          <div className="flex items-center gap-3 ">
            <img className="w-8" src={youtube} alt="youtube" />
            <p className="font-extrabold text-sm">ডোমেইন নিয়ে আলোচনা</p>
          </div>
          <hr />
          <div className="flex items-center gap-3">
            <img className="w-8" src={youtube} alt="youtube" />
            <p className="font-extrabold text-sm">
              হোস্টিং নিয়ে আলোচনা পর্ব ১
            </p>
          </div>
          <hr />
          <div className="flex items-center gap-3">
            <img className="w-8" src={youtube} alt="youtube" />
            <p className="font-extrabold text-sm">
              হোস্টিং নিয়ে আলোচনা পর্ব ২
            </p>
          </div>
          <hr />
          <div className="flex items-center gap-3">
            <img className="w-8" src={youtube} alt="youtube" />
            <p className="font-extrabold text-sm">হোস্টিং রিকমেন্ডেশন</p>
          </div>
        </div>
        {/* curse 2*/}
        <div className="space-y-2 shadow-2xl rounded-lg  p-5 bg-slate-100 mt-6">
          <h1 className="text-xl font-extrabold text-start">
            <span className="text-red-500">ডেই ১ : </span> ডোমেইন এবং হোস্টিং
            নিয়ে আইডিয়া পাবেন
          </h1>
          <div className="flex items-center gap-3 ">
            <img className="w-8" src={youtube} alt="youtube" />
            <p className="font-extrabold text-sm">ডোমেইন নিয়ে আলোচনা</p>
          </div>
          <hr />
          <div className="flex items-center gap-3">
            <img className="w-8" src={youtube} alt="youtube" />
            <p className="font-extrabold text-sm">
              হোস্টিং নিয়ে আলোচনা পর্ব ১
            </p>
          </div>
          <hr />
          <div className="flex items-center gap-3">
            <img className="w-8" src={youtube} alt="youtube" />
            <p className="font-extrabold text-sm">
              হোস্টিং নিয়ে আলোচনা পর্ব ২
            </p>
          </div>
          <hr />
          <div className="flex items-center gap-3">
            <img className="w-8" src={youtube} alt="youtube" />
            <p className="font-extrabold text-sm">হোস্টিং রিকমেন্ডেশন</p>
          </div>
        </div>
        {/* curse 3 */}
        <div className="space-y-2 shadow-2xl ounded-lg p-5 bg-slate-100 mt-6">
          <h1 className="text-xl font-extrabold text-start">
            <span className="text-red-500">ডেই ১ : </span> ডোমেইন এবং হোস্টিং
            নিয়ে আইডিয়া পাবেন
          </h1>
          <div className="flex items-center gap-3 ">
            <img className="w-8" src={youtube} alt="youtube" />
            <p className="font-extrabold text-sm">ডোমেইন নিয়ে আলোচনা</p>
          </div>
          <hr />
          <div className="flex items-center gap-3">
            <img className="w-8" src={youtube} alt="youtube" />
            <p className="font-extrabold text-sm">
              হোস্টিং নিয়ে আলোচনা পর্ব ১
            </p>
          </div>
          <hr />
          <div className="flex items-center gap-3">
            <img className="w-8" src={youtube} alt="youtube" />
            <p className="font-extrabold text-sm">
              হোস্টিং নিয়ে আলোচনা পর্ব ২
            </p>
          </div>
          <hr />
          <div className="flex items-center gap-3">
            <img className="w-8" src={youtube} alt="youtube" />
            <p className="font-extrabold text-sm">হোস্টিং রিকমেন্ডেশন</p>
          </div>
        </div>
        {/* curse 4 */}
        <div className="space-y-2 shadow-2xl ounded-lg p-5 bg-slate-100 mt-6">
          <h1 className="text-xl font-extrabold text-start">
            <span className="text-red-500">ডেই ১ : </span> ডোমেইন এবং হোস্টিং
            নিয়ে আইডিয়া পাবেন
          </h1>
          <div className="flex items-center gap-3 ">
            <img className="w-8" src={youtube} alt="youtube" />
            <p className="font-extrabold text-sm">ডোমেইন নিয়ে আলোচনা</p>
          </div>
          <hr />
          <div className="flex items-center gap-3">
            <img className="w-8" src={youtube} alt="youtube" />
            <p className="font-extrabold text-sm">
              হোস্টিং নিয়ে আলোচনা পর্ব ১
            </p>
          </div>
          <hr />
          <div className="flex items-center gap-3">
            <img className="w-8" src={youtube} alt="youtube" />
            <p className="font-extrabold text-sm">
              হোস্টিং নিয়ে আলোচনা পর্ব ২
            </p>
          </div>
          <hr />
          <div className="flex items-center gap-3">
            <img className="w-8" src={youtube} alt="youtube" />
            <p className="font-extrabold text-sm">হোস্টিং রিকমেন্ডেশন</p>
          </div>
        </div>
        {/* curse 5 */}
        <div className="space-y-2 shadow-2xl ounded-lg p-5 bg-slate-100 mt-6">
          <h1 className="text-xl font-extrabold text-start">
            <span className="text-red-500">ডেই ১ : </span> ডোমেইন এবং হোস্টিং
            নিয়ে আইডিয়া পাবেন
          </h1>
          <div className="flex items-center gap-3 ">
            <img className="w-8" src={youtube} alt="youtube" />
            <p className="font-extrabold text-sm">ডোমেইন নিয়ে আলোচনা</p>
          </div>
          <hr />
          <div className="flex items-center gap-3">
            <img className="w-8" src={youtube} alt="youtube" />
            <p className="font-extrabold text-sm">
              হোস্টিং নিয়ে আলোচনা পর্ব ১
            </p>
          </div>
          <hr />
          <div className="flex items-center gap-3">
            <img className="w-8" src={youtube} alt="youtube" />
            <p className="font-extrabold text-sm">
              হোস্টিং নিয়ে আলোচনা পর্ব ২
            </p>
          </div>
          <hr />
          <div className="flex items-center gap-3">
            <img className="w-8" src={youtube} alt="youtube" />
            <p className="font-extrabold text-sm">হোস্টিং রিকমেন্ডেশন</p>
          </div>
        </div>
        {/* curse 6 */}
        <div className="space-y-2 shadow-2xl ounded-lg p-5 bg-slate-100 mt-6">
          <h1 className="text-xl font-extrabold text-start">
            <span className="text-red-500">ডেই ১ : </span> ডোমেইন এবং হোস্টিং
            নিয়ে আইডিয়া পাবেন
          </h1>
          <div className="flex items-center gap-3 ">
            <img className="w-8" src={youtube} alt="youtube" />
            <p className="font-extrabold text-sm">ডোমেইন নিয়ে আলোচনা</p>
          </div>
          <hr />
          <div className="flex items-center gap-3">
            <img className="w-8" src={youtube} alt="youtube" />
            <p className="font-extrabold text-sm">
              হোস্টিং নিয়ে আলোচনা পর্ব ১
            </p>
          </div>
          <hr />
          <div className="flex items-center gap-3">
            <img className="w-8" src={youtube} alt="youtube" />
            <p className="font-extrabold text-sm">
              হোস্টিং নিয়ে আলোচনা পর্ব ২
            </p>
          </div>
          <hr />
          <div className="flex items-center gap-3">
            <img className="w-8" src={youtube} alt="youtube" />
            <p className="font-extrabold text-sm">হোস্টিং রিকমেন্ডেশন</p>
          </div>
        </div>
        {/* curse 7 */}
        <div className="space-y-2 shadow-2xl ounded-lg p-5 bg-slate-100 mt-6">
          <h1 className="text-xl font-extrabold text-start">
            <span className="text-red-500">ডেই ১ : </span> ডোমেইন এবং হোস্টিং
            নিয়ে আইডিয়া পাবেন
          </h1>
          <div className="flex items-center gap-3 ">
            <img className="w-8" src={youtube} alt="youtube" />
            <p className="font-extrabold text-sm">ডোমেইন নিয়ে আলোচনা</p>
          </div>
          <hr />
          <div className="flex items-center gap-3">
            <img className="w-8" src={youtube} alt="youtube" />
            <p className="font-extrabold text-sm">
              হোস্টিং নিয়ে আলোচনা পর্ব ১
            </p>
          </div>
          <hr />
          <div className="flex items-center gap-3">
            <img className="w-8" src={youtube} alt="youtube" />
            <p className="font-extrabold text-sm">
              হোস্টিং নিয়ে আলোচনা পর্ব ২
            </p>
          </div>
          <hr />
          <div className="flex items-center gap-3">
            <img className="w-8" src={youtube} alt="youtube" />
            <p className="font-extrabold text-sm">হোস্টিং রিকমেন্ডেশন</p>
          </div>
        </div>
        {/* curse 8 */}
        <div className="space-y-2 shadow-2xl ounded-lg p-5 bg-slate-100 mt-6">
          <h1 className="text-xl font-extrabold text-start">
            <span className="text-red-500">ডেই ১ : </span> ডোমেইন এবং হোস্টিং
            নিয়ে আইডিয়া পাবেন
          </h1>
          <div className="flex items-center gap-3 ">
            <img className="w-8" src={youtube} alt="youtube" />
            <p className="font-extrabold text-sm">ডোমেইন নিয়ে আলোচনা</p>
          </div>
          <hr />
          <div className="flex items-center gap-3">
            <img className="w-8" src={youtube} alt="youtube" />
            <p className="font-extrabold text-sm">
              হোস্টিং নিয়ে আলোচনা পর্ব ১
            </p>
          </div>
          <hr />
          <div className="flex items-center gap-3">
            <img className="w-8" src={youtube} alt="youtube" />
            <p className="font-extrabold text-sm">
              হোস্টিং নিয়ে আলোচনা পর্ব ২
            </p>
          </div>
          <hr />
          <div className="flex items-center gap-3">
            <img className="w-8" src={youtube} alt="youtube" />
            <p className="font-extrabold text-sm">হোস্টিং রিকমেন্ডেশন</p>
          </div>
        </div>
          </div>
           {/* btn */}
      <div className="mt-12 text-center">
        <button className="py-4 px-12 md:px-32 bg-red-500 text-white font-bold duration-500 hover:scale-110 rounded-xl">
          সলিউশনটি নিতে চাই
        </button>
      </div>
      {/* marque */}
      <div className="mt-32">
        <div className="bg-red-500 p-4 font-bold text-white">
          <Marquee speed={120} pauseOnHover="true">
            খুব দ্রুত অফারটি প্রাইস বৃদ্ধি করা হবে তাই প্রয়োজন হলে এখনই সংগ্রহ
            করে ফেলুন
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default PurchaseCourse;
