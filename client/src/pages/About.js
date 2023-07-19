import Notification from "../components/Notification";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import NotificationSupport from "../components/NotificationSupport";
import "./about.css";

const About = () => {
  return (
    <>
      <Notification />
      <Nav />
      <hr></hr>
      <h1 className="about__page-heading">OUR STORY</h1>

      {/* Our Founding Section */}
      <section className="about__page-grid-1">
        <div className="grid-item">
          <img
            className="greyscale"
            src={require("../assets/about-images/our-story.webp")}
            alt="A group of humans sitting around a large table in a cafe style setting. There are bit windows in the background and barista tools on shelving on the back wall."
          ></img>
        </div>

        <div className="grid-item">
          <h2>Our Founding Story</h2>
          <p>
            One morning in 2009, Vicky Tsai woke up and said, “I choose
            happiness.” A decade of working in corporate America had left her
            disillusioned, and suffering from acute dermatitis that required
            daily steroids and antibiotics. On a trip to Asia, she unexpectedly
            found herself in Kyoto, where she encountered a culture of harmony,
            beauty, and well-being that healed her from skin to soul.
          </p>
        </div>
      </section>

      {/* Our Promise Section */}
      <section className="about__page-grid-2">
        <div className="grid-item">
          <img
            src={require("../assets/about-images/our-promise.webp")}
            alt="A wooden table with matcha spilling out of a measuring teaspoon. A wisk and tin of matcha sit in the corners."
          ></img>
        </div>

        <div className="grid-item">
          <h2>Our Promise</h2>
          <p>
            One morning in 2009, Vicky Tsai woke up and said, “I choose
            happiness.” A decade of working in corporate America had left her
            disillusioned, and suffering from acute dermatitis that required
            daily steroids and antibiotics. On a trip to Asia, she unexpectedly
            found herself in Kyoto, where she encountered a culture of harmony,
            beauty, and well-being that healed her from skin to soul.
          </p>
          <a
            href="/our-promise"
            aria-label="This link takes you to the full article describing our promise."
          >
            LEARN MORE
          </a>
        </div>
      </section>

      {/* Our Skincare Section */}
      <section className="about__page-grid-1">
        <div className="grid-item">
          <img
            src={require("../assets/about-images/our-skincare.webp")}
            alt="A hand wearing rings doing a test drop of a serum. Another hand holds the serum bottle."
          ></img>
        </div>

        <div className="grid-item">
          <h2>Our Skincare</h2>
          <p>
            One morning in 2009, Vicky Tsai woke up and said, “I choose
            happiness.” A decade of working in corporate America had left her
            disillusioned, and suffering from acute dermatitis that required
            daily steroids and antibiotics. On a trip to Asia, she unexpectedly
            found herself in Kyoto, where she encountered a culture of harmony,
            beauty, and well-being that healed her from skin to soul.
          </p>
          <a
            href="/our-promise"
            aria-label="This link takes you to the full article describing our skincare."
          >
            LEARN MORE
          </a>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="about__page-grid-2">
        <div className="grid-item">
          <img
            src={require("../assets/about-images/our-mission.webp")}
            alt="A tropical looking scene with skinny leaves in the foreground and mountains in the background. It's a clear day  with few clouds in the sky."
          ></img>
        </div>

        <div className="grid-item">
          <h2>Our Mission</h2>
          <p>
            One morning in 2009, Vicky Tsai woke up and said, “I choose
            happiness.” A decade of working in corporate America had left her
            disillusioned, and suffering from acute dermatitis that required
            daily steroids and antibiotics. On a trip to Asia, she unexpectedly
            found herself in Kyoto, where she encountered a culture of harmony,
            beauty, and well-being that healed her from skin to soul.
          </p>
        </div>
      </section>

      <NotificationSupport />
      <Footer />
    </>
  );
};

export default About;
