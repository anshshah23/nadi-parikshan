import { ReviewCard } from "../components"
import { reviews } from "../constants"

const CustomerReviews = () => {
  return (
    <section className=" max-container">
      <h3 className=" font-palanquin text-center text-4xl font-bold">
        <span className=" text-apple-red font-bold">Customer</span> Testimonials
      </h3>

      <div className="mt-16 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review) => (
          <ReviewCard
            key={review.customerName}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
           />
        ))}
      </div>
    </section>
  )
}

export default CustomerReviews