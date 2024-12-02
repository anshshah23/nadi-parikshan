import { arrowRight } from '../assets/icons';
import { offer } from '../assets/images';
import { Button } from '../components';

const SpecialOffers = () => {
  return (
    <section className=" flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          src={offer}
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className=" max-lg:block flex flex-1 flex-col">
        <p className=" font-palanquin text-left text-4xl font-bold">
          <span className=" text-apple-red font-bold">Special</span> Offers
        </p>
        <p className=" my-4 lg:max-w-lg info-text break-words">
        Discover the joy of personalized wellness with exclusive benefits at Nadi Parikshan. Enjoy tailored health plans, loyalty rewards, and seasonal discounts designed to enhance your well-being. Explore unique treatments crafted for your dosha, earn points for additional perks, and access unbeatable value on a range of wellness solutions.
        Start your journey with Nadi Parikshan and make the most of these incredible offers today!

        </p>
        <p className=" mt-6 lg:max-w-lg break-words info-text">
        "Join the Nadi Parikshan journey and embrace these exceptional offers today!"
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Tell Me More" iconURL={arrowRight} />

        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
