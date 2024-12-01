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
          We Provide You{' '}
          <span className=" text-apple-red font-bold">Super Quality</span> Shoes
        </p>
        <p className=" my-4 lg:max-w-lg info-text">
          At RunX, we take immense pride in providing high-quality shoes that
          are built to elevate your running experience. Our shoes are
          meticulously designed and crafted using premium materials to ensure
          durability, comfort, and performance.
        </p>
        <p className=" mt-6 lg:max-w-lg info-text">
          Our dedication to detail and excellence ensures your satisfaction.
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
