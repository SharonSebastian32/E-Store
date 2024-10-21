import { Link } from "react-router-dom";
import Banner from "../assets/brc.jpg";
const Hero = () => {
  return (
    <section>
      <div
        className="hero h-svh "
        style={{ backgroundImage: `url(${Banner})` }}
      >
        <div className="hero-overlay bg-opacity-50  "></div>
        <div className="hero-content text-center text-neutral-content ">
          <div className="max-w-md  ">
            <h1 className="mb-5 text-2xl font-bold font-montserrat animate-pulsing">
              E-Store
            </h1>
            <p className="mb-5  text-5xl font-bold font-montserrat animate-flash">
              Most wanted and most loved
            </p>
            <Link
              to="/shop"
              className="btn btn-info font-montserrat animate-shake"
            >
              Shop New Arrivals
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
