import Marquee from "react-fast-marquee";
import img1 from "../../assets/arrow1.png";
import img2 from "../../assets/arrow2.png";
const Business = () => {
  const data = [
    {
      id: 1,
      name: "মেসেজের রিপ্লাই দিতে হবেনা",
      title:
        "ল্যান্ডিং পেইজ ব্যবহার করলে ৯৯% গ্রাহক আপনার ইনবক্সে মেসেজ করা ছাড়াই অর্ডার প্লেস করবে এতে বাচবে আপনার মূল্যবান সময়",
      image: "https://i.ibb.co/ck0D9y5/Screenshot-2024-07-10-120756.png",
    },
    {
      id: 2,
      name: "কম কর্মী লাগবে ",
      title:
        "বিজনেস স্কেল করতে হাজার হাজার মেসেজের রিপ্লাই দেয়ার জন্য মাল্টিপল মডারেটর হায়ার করার প্রয়োজন পড়বে না",
      image: "https://i.ibb.co/wQT7Bxh/Screenshot-2024-07-10-120828.png",
    },
    {
      id: 3,
      name: "ম্যানুয়াল অর্ডার সাবমিট করা লাগবে না",
      title:
        "অর্ডার আসলে সেটা কুরিয়ারের ড্যাসবোর্ডে ম্যানুয়ালি এড করতে হবেনা, ওয়েবসাইট থেকে এক ক্লিকেই অটো সাবমিট হয়ে যাবে কুরিয়ারের ড্যাসবোর্ডে",
      image: "https://i.ibb.co/YPSPWDL/Screenshot-2024-07-10-120857.png",
    },
    {
      id: 4,
      name: " প্রোডাক্ট ডেভেলপমেন্টে ফোকাস হবে",
      title: " সময় বাচিয়ে ফোকাস করতে পারবেন আপনার প্রোডাক্ট ইনোভেশনে",
      image: "https://i.ibb.co/HhwDhG6/Screenshot-2024-07-10-120920.png",
    },
    {
      id: 5,
      name: "স্কিল ডেভেলপ হবে নতুন",
      title: " কিছু শিখবেন যেটা আপনার বিজনেস গ্রোথে হেল্প করবে",
      image: "https://i.ibb.co/k0PXNpm/Screenshot-2024-07-10-120938.png",
    },
    {
      id: 6,
      name: " বার বার হায়ার করতে হবেনা",
      title:
        " নতুন ল্যান্ডিং পেইজ বানানোর জন্য অথবা কোনো পরিবর্তনের জন্য ডেভেলপারের কাছে যাওয়া লাগবে না",
      image: "https://i.ibb.co/MBfX9y4/Screenshot-2024-07-10-120959.png",
    },
    {
      id: 7,
      name: "সময় বাঁচবে",
      title:
        "ম্যানুয়াল সব কাজ করতে গিয়ে যে অতিরিক্ত সময় অপচয় হয় সেই মূল্যবান সময় বাঁচিয়ে অন্য কিছুতে সময় দিতে পারবেন ",
      image: "https://i.ibb.co/Bz2tSYf/Screenshot-2024-07-10-121020.png",
    },
    {
      id: 8,
      name: "টাকা বাচবে ",
      title:
        "সময়ের সাথে সাথে আপনি অনেক টাকা সেভ করতে পারবেন আপনার বিজনেসকে অটোমেশন করে",
      image: "https://i.ibb.co/f15mT9r/Screenshot-2024-07-10-121038.png",
    },
  ];

  return (
    <div className="mt-12 max-w-screen-xl mx-auto px-5">
      <div className="max-w-screen-xl mx-auto px-8 text-center">
        <h1 className="text-4xl font-bold">
          বিজনেসের রেভেনিউ গ্রোথ নিয়ে <br /> <br /> আপনার সকল প্রবলেমের চমৎকার{" "}
          <br /> <br /> সলিউশন
        </h1>
        <p className="mt-8 font-extrabold">
          WordPress CMS ব্যবহার করে{" "}
          <span className="text-red-500">ল্যান্ডিং পেইজ</span> ব্যবহার করলে আপনি
          অনেক চমৎকার চমৎকার সলিউশন আপনার বিজনেসে ইমপ্লিমেন্ট করে বিজনেস কে
          পুরোপুরি অটোমেশন করে ফেলতে পারবেন
        </p>

        <div className="flex justify-center items-center mt-12">
          <img className="w-44 -rotate-12" src={img2} alt="" />
          <img className="w-44 rotate-12" src={img1} alt="" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
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
        <div className="mt-32">
          <button className="py-4 px-12 md:px-32 bg-red-500 text-white font-bold duration-500 hover:scale-110 rounded-xl">
            সলিউশনটি নিতে চাই
          </button>
        </div>
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

export default Business;
