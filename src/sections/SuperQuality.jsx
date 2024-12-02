import { Button } from '../components';
import { arrowRight } from '../assets/icons';
import { shoe8 } from '../assets/images';

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className=" flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className=" max-lg:block flex flex-1 flex-col">
        <p className=" font-palanquin text-left text-4xl font-bold">
          We Deliver{' '}
          <span className=" text-apple-red font-bold">Super Quality</span> Wellness Solutions
        </p>
        <p className=" my-4 lg:max-w-lg info-text">
        At Nadi Parikshan, we take pride in offering personalized health solutions designed to transform your well-being. Each plan is thoughtfully crafted with expert care, focusing on balance, vitality, and lasting results to help you thrive in every aspect of life.
        </p>
        <p className=" mt-6 lg:max-w-lg info-text">
        Our focus on innovation and personalized solutions ensures a transformative journey toward your well-being.
        </p>
        <div className="mt-11">
          <Button label="View Details" />
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center max-lg:hidden">
        <img
          src={shoe8}
          alt="shoe8"
          width={570}
          height={522}
          className=" object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
