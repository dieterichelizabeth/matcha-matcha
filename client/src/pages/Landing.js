import Notification from "../components/Notification";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import "./landing.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const Landing = () => {
  return (
    <>
      <Notification />
      <Nav />

      {/* Hero */}
      <div className="hero">
        <div className="hero__msg-container">
          <div>
            <p className="hero__brand-names">MATCHA X TATCHA</p>
            <p className="hero__product-name">THE MATCHA DEEP CLEANSER</p>
            <p className="hero__product-desc">
              Enhance your skincare routine with this gentle and nourishing
              cleanser, designed in partnership with Tatcha.
            </p>
            <button className="hero__btn">SHOP NOW</button>
          </div>
        </div>
      </div>

      <BestSellers />
      {/* <ProductTypeDisplay /> */}

      {/* About Section */}
      <section className="about-snipit__container">
        <div className="about-snipit__text">
          <h2>MADE WITH LOVE</h2>
          <p>
            With high-quality, enriching ingredients havested from reliable
            sources in Japan, our products are gentle yet effective.
          </p>
          <a href="/our-story">OUR STORY</a>
        </div>

        {/* Support Section */}
      </section>
      <div className="support-snipit__container">
        <span className="material-symbols-outlined">spa</span>
        <p>
          Every Matcha Matcha purchase supports education equality worldwide.
        </p>
      </div>
      <Footer />
    </>
  );
};

const BestSellers = () => {
  const products = [
    {
      _id: 1,
      description: "The formula helps reduce redness...",
      name: "Healing Spot Treatment",
      image: "healing-spot-treatement.png",
      price: "42.99",
    },
    {
      _id: 2,
      description: "Improve the skin’s appearance...",
      name: "Intensive Repair Cream",
      image: "intensive-repair-cream.png",
      price: "45.99",
    },
    {
      _id: 3,
      description: "A gentle yet effective cleanser...",
      name: "Tea Hand Soap",
      image: "tea-hand-soap.png",
      price: "25.99",
    },
    {
      _id: 4,
      description: "Made with real honey...",
      name: "Original Honey-Matcha",
      image: "original-honey-matcha.png",
      price: "7.99",
    },
  ];

  return (
    <section className="best-sellers__container">
      <h2>Bestsellers</h2>

      <Swiper
        // install Swiper modules
        modules={[Navigation]}
        navigation
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product._id}>
            <CarouselItem product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

const CarouselItem = ({ product }) => {
  return (
    <div className="best-sellers__card">
      <a to={`/products/${product._id}`}>
        <img
          className="product-image"
          alt="Beauty Product"
          src={`/images/${product.image}`}
        />
        <div className="best-sellers__card-text">
          <p className="product-name w100">{product.name}</p>
          <p className="product-description">{product.description}</p>
        </div>
      </a>
      <button
        className="best-sellers__card-button"
        onClick={() => {
          console.log("clicked");
        }}
      >
        Add to Cart - ${product.price}
      </button>
    </div>
  );
};

const ProductTypeDisplay = () => {
  return (
    <section className="product-type-display__container">
      <h2>A Formula for Every Occasion</h2>

      <div className="product-type-display__cards-container">
        <div className="product-type-display__card">
          <div className="product-type-background_img1"></div>
          <p>Hands</p>
        </div>
        <div className="product-type-display__card">
          <div className="product-type-background_img2"></div>
          <p>Face</p>
        </div>
        <div className="product-type-display__card">
          <div className="product-type-background_img3"></div>
          <p>Body</p>
        </div>
        <div className="product-type-display__card">
          <div className="product-type-background_img4"></div>
          <p>Drink</p>
        </div>
      </div>
    </section>
  );
};

export default Landing;
