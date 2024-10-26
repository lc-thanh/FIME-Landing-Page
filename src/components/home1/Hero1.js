import Link from "next/link";
import Slider from "react-slick";

const Hero1 = () => {
  const props = {
    infinite: true,
    arrows: false,
    dots: false,
    fade: true,
    autoplay: false,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    slidesToScroll: 1,
    slidesToShow: 1,
  };
  return (
    <section
      id="home"
      className="main-slider-area bgc-black-with-lighting rel z-1"
    >
      <Slider {...props} className="main-slider-active">
        <div className="slider-item">
          <div className="container">
            <div className="slider-content">
              <span className="sub-title">
                Trường Đại học Công nghiệp Hà Nội
              </span>
              <h1>
                Bộ phận truyền thông khoa CNTT{" "}
                <span
                  style={{
                    background: "linear-gradient(101deg, #F15B29, #FFD623)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  FIT Media
                </span>
              </h1>
              <div className="slider-btns">
                <Link href="/contact">
                  <a className="theme-btn">
                    Fanpage <i className="fas fa-angle-double-right" />
                  </a>
                </Link>
                <Link href="/services">
                  <a className="theme-btn style-three">
                    Tìm hiểu thêm <i className="fas fa-angle-double-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div
            className="slider-video"
            style={{
              backgroundImage: "url(assets/images/slider/slide1.jpg)",
              backgroundPosition: "center",
            }}
          >
            {/* <a
              href="https://www.youtube.com/watch?v=9Y7ma241N8k"
              className="mfp-iframe video-play"
            >
              <i className="fas fa-play" />
            </a> */}
            <span className="video-title cd-headline clip">
              <span className="cd-words-wrapper">
                <b className="is-visible">FIT Media</b>
                {/* <b>Development</b> */}
              </span>
            </span>
          </div>
        </div>
        <div className="slider-item">
          <div className="container">
            <div className="slider-content">
              <span className="sub-title">
                Trường Đại học Công nghiệp Hà Nội
              </span>
              <h1>
                Bộ phận truyền thông khoa CNTT{" "}
                <span
                  style={{
                    background: "linear-gradient(101deg, #F15B29, #FFD623)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  FIT Media
                </span>
              </h1>
              <div className="slider-btns">
                <Link href="/contact">
                  <a className="theme-btn">
                    Fanpage <i className="fas fa-angle-double-right" />
                  </a>
                </Link>
                <Link href="/services">
                  <a className="theme-btn style-three">
                    Tìm hiểu thêm <i className="fas fa-angle-double-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div
            className="slider-video"
            style={{
              backgroundImage: "url(assets/images/slider/slide2.jpg)",
              backgroundPosition: "center",
            }}
          >
            <a
              href="https://www.youtube.com/watch?v=9Y7ma241N8k"
              className="mfp-iframe video-play"
            >
              <i className="fas fa-play" />
            </a>
            <span className="video-title cd-headline clip">
              <span className="cd-words-wrapper">
                <b className="is-visible">Workshop</b>
                <b>Development</b>
              </span>
            </span>
          </div>
        </div>
        <div className="slider-item">
          <div className="container">
            <div className="slider-content">
              <span className="sub-title">
                Trường Đại học Công nghiệp Hà Nội
              </span>
              <h1>
                Bộ phận truyền thông khoa CNTT{" "}
                <span
                  style={{
                    background: "linear-gradient(101deg, #F15B29, #FFD623)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  FIT Media
                </span>
              </h1>
              <div className="slider-btns">
                <Link href="/contact">
                  <a className="theme-btn">
                    Fanpage <i className="fas fa-angle-double-right" />
                  </a>
                </Link>
                <Link href="/services">
                  <a className="theme-btn style-three">
                    Tìm hiểu thêm <i className="fas fa-angle-double-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div
            className="slider-video"
            style={{
              backgroundImage: "url(assets/images/slider/slide1.jpg)",
              backgroundPosition: "center",
            }}
          >
            {/* <a
              href="https://www.youtube.com/watch?v=9Y7ma241N8k"
              className="mfp-iframe video-play"
            >
              <i className="fas fa-play" />
            </a> */}
            <span className="video-title cd-headline clip">
              <span className="cd-words-wrapper">
                <b className="is-visible">Event</b>
                <b>Development</b>
              </span>
            </span>
          </div>
        </div>
      </Slider>
      <div className="container">
        <div className="main-slider-dots" />
      </div>
      <div className="slider-shapes">
        <img
          className="shape dots one"
          src="assets/images/shapes/slider-dots.png"
          alt="Shape"
        />
        <img
          className="shape dots two"
          src="assets/images/shapes/slider-dots.png"
          alt="Shape"
        />
        <img
          className="shape wave-line"
          src="assets/images/shapes/slider-wave-line.png"
          alt="Shape"
        />
        <img
          className="shape circle"
          src="assets/images/shapes/slider-circle.png"
          alt="Shape"
        />
      </div>
    </section>
  );
};
export default Hero1;
