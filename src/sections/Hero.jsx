import { arrowRight } from '../assets/icons';
import { bigShoe1 } from '../assets/images';
import { Button, ShoeCard} from '../components';
import { shoes, statistics } from '../constants';
import { useState } from 'react';

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1)
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className=" text-xl font-montserrat mt-12 blinking-text">
          Our Latest Collections
        </p>
        <h1 className=" mt-8 font-palanquin text-4xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className=" xl:whitespace-nowrap relative pr-10">
            Unleash Your Stride.
            <br />
            Elevate your run.
          </span>
        </h1>
        <p className=" font-montserrat text-slate-gray text-lg leading-8 mt-8 mb-14 sm:max-w-sm">
          Explore our latest collections, find your perfect fit, and let your
          feet lead the way.
        </p>
        <Button label="Shop now" iconURL={arrowRight} />
        <div className="flex justify-start items-start flex-wrap w-full max-sm:my-10 mt-20 mb-20 gap-16">
          {statistics.map(stat => (
            <div key={stat.label}>
              <p className=" text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className=" leading-7 font-montserrat text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className=' relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center -z-40'>
        <img src={bigShoeImg} alt="shoe collection" width={610} height={500} className=' object-contain relative z-10' />

        <div className=' flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6'>
          {shoes.map((shoe) => (
            <div key={shoe}>
              <ShoeCard 
                imgURL={shoe}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
