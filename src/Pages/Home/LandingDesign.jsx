import Marquee from "react-fast-marquee";
import img1 from "../../assets/arrow1.png";
import img2 from "../../assets/arrow2.png";
const LandingDesign = () => {
  const data = [
    {
      id: 1,
      name: "ডেভেলপারের উপর নির্ভরশীল হতে হবেনা",
      title:
        "ছোট কিছু চেঞ্জ করতে আর আপনার ডেভেলপারের কাছে যাওয়াই লাগবে না, কোনো কিছু ভুল হলে বা আপডেটের প্রয়োজন হলে নিজেই ইন্সট্যান্ট ঠিক করে নিতে পারবেন আর বিজনেস যদি বিজনেসের মতো করে করতে চান এতটুকু নলেজ আপনাকে রাখতেই হবে",
      image: "https://i.ibb.co/2FNM77g/Screenshot-2024-07-11-153133.png",
    },
    {
      id: 2,
      name: "নিজের ক্রিয়েটিভিটি ফুটিয়ে তুলতে পারবেন",
      title:
        "মেধার বিকাশ তো ঘটবেই যখন দেখবেন নিজেই সব দেখা শুনা করতে পারছেন তখন অন্য কাউকে আপনি আরও ভালো ডিরেকশন দিতে পারবেন",
      image: "https://i.ibb.co/nnb6dRw/Screenshot-2024-07-11-153113.png",
    },
    {
      id: 3,
      name: "বিজনেস স্কেলিং",
      title:
        "যখন নিজে নিজে সব করতে পারবেন তখন বিজনেস স্কেল করতে এই স্কিল আপনাকে যথেষ্ট সাপোর্ট দিবে",
      image: "https://i.ibb.co/pK6Pgmq/Screenshot-2024-07-11-153057.png",
    },
    {
      id: 4,
      name: "সময় নষ্ট বন্ধ হবে",
      title:
        "ডেভেলপার যখন অফ ডিউটিতে থাকে তখন কিন্তু আপনার ইমার্জেন্সি কিছু পরিবর্তন করা লাগলে মাথায় হাত দিয়ে এডস অফ করে বসে থাকা লাগবে",
      image: "https://i.ibb.co/LZ7r1Gm/Screenshot-2024-07-11-153037.png",
    },
  ];
  return (
    <div className="max-w-screen-xl mx-auto px-5 text-center mt-24">
      <div className="max-w-screen-xl mx-auto px-8 text-center">
        <h1 className="text-4xl font-bold">
          যে কয়েকটি কারনে আপনার{" "}
          <span className="bg-red-500 rounded-lg px-2 py-1 text-white">
            ল্যান্ডিং পেইজ
          </span>
          <br /> <br /> ডিজাইন শিখে রাখা উচিৎ
        </h1>
        <p className="mt-8 font-extrabold">
          আপনার যখন আপনার বিজনেস অপারেশন অটোমেশন নিয়ে ভালো ধারনা থাকবে এটা শুধু
          আপনার স্কিল ই বাড়াবেনা বরং বিজনেস গ্রোথে হেল্প করবে
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
        <div className="bg-red-500 p-4 font-bold w-full text-white mt-24">
          <Marquee speed={120} pauseOnHover="true">
            খুব দ্রুত অফারটি প্রাইস বৃদ্ধি করা হবে তাই প্রয়োজন হলে এখনই সংগ্রহ
            করে ফেলুন
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default LandingDesign;
