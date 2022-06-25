import { Carousel } from "antd";

const contentImage = [
  {
    height: "300px",
    lineHeight: "160px",
    textAlign: "center",
    backgroundImage:
      "url(" +
      "https://images.unsplash.com/photo-1614588522761-c28918c00d05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzl8fHNraW5jYXJlfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60" +
      ")",
    backgroundPosition: "center",
    color: "transparent",
    backgroundRepeat: "no-repeat",
  },
  {
    height: "300px",
    lineHeight: "160px",
    textAlign: "center",
    backgroundImage:
      "url(" +
      "https://images.unsplash.com/photo-1542833807-ad5af0977050?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2xlYXIlMjBza2lufGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60" +
      ")",
    backgroundPosition: "center",
    color: "transparent",
    backgroundRepeat: "no-repeat",
  },
  {
    height: "300px",
    lineHeight: "160px",
    textAlign: "center",
    backgroundImage:
      "url(" +
      "https://images.unsplash.com/photo-1618546421236-3c6f5f78add2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fHNraW5jYXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" +
      ")",
    backgroundPosition: "center",
    color: "transparent",
    backgroundRepeat: "no-repeat",
  },
];
const HomeCarousel = () => (
  <Carousel autoplay>
    <div>
      <h3 style={contentImage[0]}>Lotions</h3>
    </div>
    <div>
      <h3 style={contentImage[1]}>Eye care</h3>
    </div>
    <div>
      <h3 style={contentImage[2]}>Theraputic Hand Cream</h3>
    </div>
  </Carousel>
);

export default HomeCarousel;
