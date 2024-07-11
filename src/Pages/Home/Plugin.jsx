import Marquee from "react-fast-marquee";

const Plugin = () => {
  const data = [
    {
      id: 1,
      name: "Eelementor PRO",
      title: "ল্যান্ডিং পেইজ ডিজাইন করতে আমাদের এই প্লাগিনটি লাগবে",
      image: "https://i.ibb.co/47MB6Cn/Screenshot-2024-07-11-153858.png",
    },
    {
      id: 2,
      name: "Pixelyoursite Pro",
      title: "সার্ভার সাইড ট্র্যাকিং করতে আমাদের এই প্লাগিনটি লাগবে",
      image: "https://i.ibb.co/TWc3tNr/Screenshot-2024-07-11-153927.png",
    },
    {
      id: 3,
      name: "Cartflow Pro",
      title: "ফানেল বানাতে আমাদের এই প্লাগিনটির প্রয়োজন হবে",
      image: "https://i.ibb.co/vPV2Vwc/Screenshot-2024-07-11-153945.png",
    },
  ];
  const data2 = [
    {
      id: 1,
      name: "ল্যান্ডিং পেইজ টেমপ্লেট",
      title:
        "একটি সেলস ড্রিভেন ল্যান্ডিং পেইজ টেমপ্লেট ফাইল থাকবে যেগুলো দিয়ে আনলিমিটেড ল্যান্ডিং পেইজ বানাতে পারবেন",
      image: "https://i.ibb.co/qRBmb1Q/Screenshot-2024-07-11-171658.png",
    },
    {
      id: 2,
      name: "কপি স্ট্রাকচার টেমপ্লেট",
      title:
        "একটি কপি স্ট্রাকচার টেমপ্লেট থাকবে আনলিমিটেড ল্যান্ডিং পেইজ কপি লিখার জন্য",
      image: "https://i.ibb.co/q7S3QRw/Screenshot-2024-07-11-171727.png",
    },
    {
      id: 3,
      name: "ডিজাইন টেমপ্লেট",
      title:
        "কার্ড ডিজাইন বক্সের এক্সেস দেয়া থাকবে যেটা এডিট করে আপনি আপনার প্রোডাক্টের ল্যান্ডিং পেইজের জন্য সুন্দর সুন্দর ইনফোগ্রাফিক্স কার্ড বক্স ডিজাইন করতে পারবেন",
      image: "https://i.ibb.co/gTW3wVF/Screenshot-2024-07-11-171748.png",
    },
    {
      id: 4,
      name: "১০ ঘন্টার ডিটেইলস কোর্স",
      title:
        "টেকনিক্যাল নলেজ না থাকলেও ব্যাকেন্ডের সব সেটিংস সেটাপ করে নিতে পারবেন খুব সহজেই",
      image: "https://i.ibb.co/XxqKzKr/Screenshot-2024-07-11-171812.png",
    },
  ];

  return (
    <div className="mt-12 max-w-screen-xl mx-auto px-5">
      <h1 className="text-4xl font-bold text-center">ইম্পরট্যান্ট প্লাগিন</h1>
      <p className="mt-8 font-extrabold text-center">
        ল্যান্ডিংপেইজ দিয়ে বিজনেস কে অটোমেশন করতে আপনার কিছু প্লাগিনের প্রয়োজন
        পড়বে সেসব প্লাগিনের প্রিমিয়াম ফাইল পেয়ে যাবেন আমাদের এই সলুশনে
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
        {data.map((item) => (
          <div className="space-y-5 mx-auto text-center" key={item._id}>
            <img
              className="border-2 inline border-red-500 rounded-xl w-[200px] h-[200px]"
              src={item.image}
              alt=""
            />
            <h1 className="text-2xl font-extrabold ">{item.name}</h1>
            <h1 className="font-extrabold text-sm md:w-44 lg:w-full mx-auto">
              {item.title}
            </h1>
          </div>
        ))}
      </div>
      <div className="mt-32 text-center">
        <button className="py-4 px-12 md:px-32 bg-red-500 text-white font-bold duration-500 hover:scale-110 rounded-xl">
          সলিউশনটি নিতে চাই
        </button>
      </div>
      {/* Card 2  */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12 max-w-screen-md mx-auto">
        {data2.map((item) => (
          <div className="space-y-5 mx-auto text-center  " key={item._id}>
            <img
              className="inline w-[400px] h-[300px] object-cover rounded-xl"
              src={item.image}
              alt=""
            />
            <h1 className="-mt-3 text-xl font-extrabold border p-3 rounded-xl border-red-500">
              {item.name}
            </h1>
            <h1 className="font-extrabold text-sm md:w-44 lg:w-full mx-auto">
              {item.title}
            </h1>
          </div>
        ))}
      </div>
      <div className="mt-32 text-center">
        <button className="py-4 px-12 md:px-32 bg-red-500 text-white font-bold duration-500 hover:scale-110 rounded-xl">
          সলিউশনটি নিতে চাই
        </button>
      </div>
      <div className="mt-12">
        <h1 className="text-4xl font-bold text-center">
          কাদের এই বিজনেস সলুশন নেয়া উচিৎ?
        </h1>
        <p className="mt-8 font-extrabold text-center">
          দেখে নিন সলুশনটির জন্য ইনভেস্ট করা উচিৎ কিনা
        </p>
        <div className="max-w-screen-md text-sm mx-auto border font-extrabold rounded-xl border-red-500 p-8 mt-12">
          <li>আপনার যদি একটি বিজনেস থাকে</li>
          <li>আপানার যদি ফেসবুকে একটি বিজনেস পেইজ থাকে</li>
          <li>আপনি যদি উদ্যোক্তা হন</li>
          <li>আপনি যদি নতুন স্কিল শিখতে চান</li>
          <li> আপনি যদি ফেসবুকে বিজনেস শুরু করবেন ভাবছেন</li>
          <li>আপনি যদি ল্যান্ডিং পেইজ সার্ভিস প্রোভাইড করে থাকেন</li>
          <li>আপনি যদি ল্যান্ডিং পেইজ সার্ভিস প্রোভাইড করতে চান</li>
        </div>
        <div className="mt-32 text-center">
          <button className="py-4 px-12 md:px-32 bg-red-500 text-white font-bold duration-500 hover:scale-110 rounded-xl">
            সলিউশনটি নিতে চাই
          </button>
        </div>
        <div className="text-center">
          <img
            className="inline"
            src="https://i.ibb.co/f4BtHb5/Screenshot-2024-07-11-175339.png"
            alt=""
          />
        </div>
        <div className="bg-red-500 p-4 font-bold w-full text-white">
          <Marquee speed={120} pauseOnHover="true">
            খুব দ্রুত অফারটি প্রাইস বৃদ্ধি করা হবে তাই প্রয়োজন হলে এখনই সংগ্রহ
            করে ফেলুন
          </Marquee>
        </div>
        {/* ---------- */}
        <div className="mt-24 text-center">
          <h1 className="text-4xl font-bold text-center">
            আমাদের থেকেই কেনো নিবেন?
          </h1>
          <img
            className="inline"
            src="https://i.ibb.co/0Gs8v9D/Screenshot-2024-07-11-183537.png"
            alt=""
          />
          <p className="border text-sm font-extrabold border-black p-3 md:w-96 rounded-xl mx-auto">
            আপনি অলরেডি <span className="text-violet-700">অন্য কোথাও</span> থেকে
            ল্যান্ডিং পেইজ কোর্স করেছেন?
          </p>
          <p className="border text-sm font-extrabold border-black p-3 md:w-96 rounded-xl mx-auto mt-4">
            ভাবছেন এদের থেকে এই ল্যান্ডিং পেইজ সলিউশন নেয়া কি <span className="text-violet-700">প্রফিটেবল</span> হবে
            কিনা!
          </p>
        </div>

        {/* ------------------- */}
        <div className="mt-24 text-center">
          <img
            className="inline"
            src="https://i.ibb.co/tYdh58S/Screenshot-2024-07-11-182630.png"
            alt=""
          />
          <div>
            <h1></h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plugin;
