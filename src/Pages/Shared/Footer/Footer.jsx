import logo from "../../../assets/logo.jpg";
const Footer = () => {
  return (
    <div className="bg-black text-white mt-12">
      <div className="max-w-screen-lg mx-auto px-5 grid md:grid-cols-3 justify-items-center gap-8 p-12">
        <div>
          <div className="flex items-center justify-center">
            <img className="w-12" src={logo} alt="logo" />
            <p className="text-white text-xl font-bold">Geahok</p>
          </div>
          <p className="text-white text-center text-sm ">
            <span className="font-bold">E-Grahok</span> is the most convenient
            and trustworthy digital product store in Bangladesh. In this
            journey, we assure you of the higher quality of products to
            providing the best service to satisfy our beloved valuable clients.
          </p>
        </div>
        <div className="space-y-3 text-center">
          <h1 className="text-2xl font-bold">Information</h1>
          <p>Contact Us</p>
          <p>About Us</p>
        </div>
        <div className="space-y-3 text-center">
          <h1 className="text-2xl font-bold">FAQ</h1>
          <p>Privacy Policy</p>
          <p>Return/Refund Policy</p>
          <p>Terms & Condition</p>
        </div>
      </div>
      <div className="max-w-screen-lg mx-auto px-5">
        <p className="text-center bg-red-900 text-sm">
          Address: House: 56, Avenue : 07, Block: G, Banasree, Dhaka 1219
        </p>
        <p className="text-center mt-3 text-sm">
          {" "}
          ©2021-2024 Copyright Ionic Corporation
              </p>
              <div className="text-center mt-6">
                  <img className="inline rounded-lg" src="https://i.ibb.co/Btvq9qf/Screenshot-2024-07-13-134201.png" alt="" />
              </div>
      </div>
    </div>
  );
};

export default Footer;

//  ©2021-2024 Copyright E-Grahok
