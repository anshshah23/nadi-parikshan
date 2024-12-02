import { motion } from "framer-motion";
import DJSNSSLogo from "../assets/Logo.jpg";
import Nadi from "../assets/NadiMockup.png";
import Background from "../assets/Home.png";
import { CustomerReviews, Footer, Hero, PopularProducts, SuperQuality, Services, Subscribe, SpecialOffers } from "../sections";


const data = [
  { src: DJSNSSLogo, alt: "NSS DJSCE Logo", link: "/" },
];

const Landing = () => {


  return (
    <div className="flex flex-col">
      {/* Parallax Section */}
      <motion.div
        className="w-full min-h-screen flex flex-col md:flex-row items-center bg-contain bg-fixed"
        style={{
          backgroundImage: `url(${Background})`,
          backgroundSize: "cover", // Ensures full coverage
          backgroundPosition: "center", // Centers the background
          backgroundAttachment: "fixed",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute w-full h-full bg-black/40 backdrop-blur-sm flex flex-col items-center justify-center"></div>
        <div className="w-full md:w-1/2 pt-20 md:py-0 min-h-1/2 md:min-h-screen flex flex-col items-center justify-center z-10">
          <div className="flex flex-row justify-evenly items-center">
            {data.map((d, idx) => (
              <motion.a
                key={idx}
                href={d.link}
                target="_blank"
                rel="noreferrer"
                className="bg-black/40 bg-opacity-20 hover:bg-white/10 duration-300 rounded-full mx-1 md:mr-6 flex backdrop-blur-sm shadow-lg"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.2 }}
              >
                <img src={d.src} alt={d.alt} className="h-28 md:h-40 rounded-full" />
              </motion.a>
            ))}
          </div>
          <motion.h1
            className="text-xl sm:text-3xl font-bold mx-2 mt-4 text-center text-white"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <strong className="md:text-5xl">Nadi Parikshan</strong>
            <div className="w-full border-black my-5 border-b-4"></div>
          </motion.h1>
          <motion.p
            className="text-md md:text-2xl text-center text-white"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            Nadi Parikshan to find your Dosha, Yoga and Meditation to heal your mind and body, and much more. Join us in our journey to a healthier lifestyle.
          </motion.p>
        </div>
        <div className=" w-full md:w-1/2 min-h-1/2 md:min-h-screen flex flex-col items-center pt-10 justify-center z-10">
          <motion.img
            src={Nadi}
            alt="Nadi Parikshan"
            className="h-60 md:h-full"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5 }}
          />
        </div>
      </motion.div>
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      {/* <section className="padding">
        <PopularProducts />
      </section> */}
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffers />
      </section>
      <section className="padding bg-light-coral-pink">
        <CustomerReviews />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
    </div>
  );
};

export default Landing;
