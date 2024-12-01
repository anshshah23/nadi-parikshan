import { products } from '../constants';
import { PopularProductCard } from '../components';

const PopularProducts = () => {
  return (
    <section id="products" className=" max-container">
      <div className="flex flex-col justify-start gap-5">
        <h2 className=" font-palanquin text-left text-4xl font-bold">
          Our <span className=' text-apple-red font-bold'>Popular</span> Products
        </h2>
        <p className=" lg:max-w-lg mt-2 text-lg font-montserrat text-slate-gray">
          Experience the perfect blend of style and functionality with our
          extensive range of shoes.
        </p>
      </div>

      <div className="mt-12 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
