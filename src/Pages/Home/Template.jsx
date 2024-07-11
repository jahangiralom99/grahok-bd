import Marquee from "react-fast-marquee";
import img1 from "../../assets/arrow1.png";
import img2 from "../../assets/arrow2.png";

const Template = () => {
  const data = [
    {
      id: 1,
      name: "অটোমেশন",
      title: " আমাদের এই সলুশনের মেইন বেনেফিট হচ্ছে বিজনেসে অটোমেশন আনা",
      image: "https://i.ibb.co/P1KtVd4/Screenshot-2024-07-10-130945.png",
    },
    {
      id: 2,
      name: " বিজনেস স্কেলিং",
      title: "ল্যান্ডিং পেইজ ব্যবহার করে বিজনেস স্কেলিং করতে পারবেন",
      image: "https://i.ibb.co/HKR3dfq/Screenshot-2024-07-10-131013.png",
    },
    {
      id: 3,
      name: " কস্ট ক্যালকুলেশন",
      title:
        "কনভার্সন ক্যাম্পেইন রানের মাধ্যমে প্রতি সেলের খরচ বের করে নিয়ে আসতে পারবেন",
      image: "https://i.ibb.co/PG7wQD8/Screenshot-2024-07-10-130907.png",
    },
    {
      id: 4,
      name: "রি-টার্গেট",
      title: "খুব সহজে পটেনশিয়াল কাস্টোমারদের রিটার্গেট করতে পারবেন",
      image: "https://i.ibb.co/TWKtDBh/Screenshot-2024-07-10-131037.png",
    },
    {
      id: 5,
      name: "একুরেট ডাটা",
      title:
        "ড্যাশবোর্ড এনালিটিক্স থেকে কাস্টোমারের ডাটা একটি প্লাটফর্মে সুন্দর ভাবে ম্যানেজ করতে পারবেন এবং দেখতে পারবেন কে কতবার কত টাকার প্রোডাক্ট কখন অর্ডার করেছে",
      image: "https://i.ibb.co/Gd9drcy/Screenshot-2024-07-10-131058.png",
    },
    {
      id: 6,
      name: "সার্ভার সাইড ট্র্যাকিং",
      title:
        "খুব সহজেই কোনো টেকনিক্যাল নলেজ ছাড়াই কয়েক ক্লিকে সেটাপ করতে পারবেন সার্ভার সাইড ট্র্যাকিং",
      image: "https://i.ibb.co/PDTLTLy/Screenshot-2024-07-10-131125.png",
    },
  ];

  return (
    <div className="mt-32 max-w-screen-xl mx-auto px-5">
      <div className="max-w-screen-xl mx-auto px-8">
        <h1 className="text-4xl font-extrabold text-center">
          কি কি পরিবর্তন আসবে আপনার <br /> <br /> বিজনেসে আমাদের এই সলিউশনের{" "}
          <br /> <br />{" "}
          <span className="bg-red-500 text-white px-3 py-1 rounded-md">
            {" "}
            ল্যান্ডিং পেইজ
          </span>{" "}
          টেমপ্লেট ব্যবহার করলে
        </h1>
        <p className="font-extrabold mt-12">
          {" "}
          দেখে নিন এক নজরে WordPress CMS ব্যবহার করে আমাদের ল্যান্ডিং পেইজ
          টেমপ্লেট দিয়ে এড রান করলে কি কি বেনেফিট পাবেন আপনি
        </p>
      </div>
      <div className="flex justify-center items-center mt-12">
        <img className="w-44 -rotate-12" src={img2} alt="" />
        <img className="w-44 rotate-12" src={img1} alt="" />
      </div>
      {/* card for Template */}
      <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center max-w-screen-xl mx-auto px-4  gap-10 mt-12 text-center">
        {data.map((item) => (
          <div className="space-y-5 md:w-96 mx-auto" key={item._id}>
            <img
              className="border-2 inline border-red-500 rounded-xl w-[300px]"
              src={item.image}
              alt=""
            />
            <h1 className="text-2xl font-extrabold ">{item.name}</h1>
            <h1 className="font-extrabold text-sm">{item.title}</h1>
          </div>
        ))}
      </div>
      <div className="mt-32 text-center">
        <button className="py-4 px-12 md:px-32 bg-red-500 text-white font-bold duration-500 hover:scale-110 rounded-xl">
          সলিউশনটি নিতে চাই
        </button>
      </div>
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

export default Template;
