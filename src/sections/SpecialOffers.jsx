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
          Experience the thrill of limited edition releases, exclusive loyalty
          rewards, and seasonal discounts at RunX. Discover unique shoe models
          in premium materials, earn points for discounts and early access, and
          enjoy unbeatable prices on a wide range of running shoes.
        </p>
        <p className=" mt-6 lg:max-w-lg break-words info-text">
          Join the RunX revolution and seize these incredible offers today!
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop now" iconURL={arrowRight} />
          <Button
            label="Learn more"
            backgroundColor="bg-white"
            borderColor="border-apple-red"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
