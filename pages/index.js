import Head from "next/head";
import Link from "next/link";
import { Accordion } from "react-bootstrap";
import dynamic from "next/dynamic";

const Counter = dynamic(() => import("../src/components/Counter"), {
  ssr: false,
});
import ClientsFeedback from "../src/components/home1/ClientsFeedback";
import Hero1 from "../src/components/home1/Hero1";
import RecentProjects from "../src/components/home1/RecentProjects";
import Layout from "../src/layout/Layout";
import SideBar from "../src/layout/SideBar";

const IndexOnePage = () => {
  return (
    <Layout className="home-one" footer={1} noHeader>
      <Head>
        {" "}
        <link
          rel="shortcut icon"
          href="assets/images/favicon1.png"
          type="image/x-icon"
        />
      </Head>
      <header className="main-header header-two">
        {/*Header-Upper*/}
        <div className="header-upper">
          <div className="container clearfix">
            <div className="header-inner rel d-flex align-items-center">
              <div className="logo-outer">
                <div className="logo">
                  <Link href="/">
                    <a>
                      <img
                        src="assets/images/logos/logo-two.png"
                        alt="Logo"
                        title="Logo"
                        style={{
                          width: "60px",
                          marginLeft: "30px",
                        }}
                      />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="nav-outer clearfix">
                {/* Main Menu */}
                <nav className="main-menu navbar-expand-lg">
                  <Accordion>
                    <div className="navbar-header">
                      <div className="mobile-logo my-15">
                        <Link href="/">
                          <a>
                            <img
                              src="assets/images/logos/logo-two.png"
                              alt="Logo"
                              title="Logo"
                              style={{
                                width: "60px",
                              }}
                            />
                          </a>
                        </Link>
                      </div>
                      {/* Toggle Button */}
                      <Accordion.Toggle
                        eventKey="nav"
                        as="button"
                        className="navbar-toggle"
                      >
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                      </Accordion.Toggle>
                    </div>
                    <Accordion.Collapse
                      eventKey="nav"
                      className="navbar-collapse clearfix"
                    >
                      <ul className="navigation onepage clearfix">
                        <li>
                          <a href="#home">Trang chủ</a>
                        </li>
                        <li>
                          <a href="#about">Về FIT Media</a>
                        </li>
                        <li>
                          <a href="#products">Sản phẩm</a>
                        </li>
                        <li>
                          <a href="#activities">Hoạt động</a>
                        </li>
                        {/* <li>
                          <a href="#pricing">pricing</a>
                        </li> */}
                        <li>
                          <a href="#contact">Liên hệ</a>
                        </li>
                        {/* <li>
                          <a href="#news">news</a>
                        </li> */}
                      </ul>
                    </Accordion.Collapse>
                  </Accordion>
                </nav>
                {/* Main Menu End*/}
              </div>
              {/* Nav Search */}
              <div className="nav-search py-15">
                {/* <button className="far fa-search" />
                <form
                  onSubmit={(e) => e.preventDefault()}
                  action="#"
                  className="hide"
                >
                  <input
                    type="text"
                    placeholder="Search"
                    className="searchbox"
                    required=""
                  />
                  <button
                    type="submit"
                    className="searchbutton far fa-search"
                  />
                </form> */}
              </div>
              {/* Menu Button */}
              <div className="menu-btns">
                <a
                  className="theme-btn style-three"
                  href="https://www.facebook.com/fitmediahaui"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Theo dõi chúng tôi <i className="fas fa-angle-double-right" />
                </a>
                {/* menu sidbar */}
                {/* <div className="menu-sidebar">
                  <button onClick={() => sideBarToggle()}>
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                  </button>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        {/*End Header Upper*/}
      </header>
      <SideBar />
      {/*End Hidden Sidebar */}
      {/* Slider Section Start */}
      <Hero1 />
      {/* Slider Section End */}
      {/* Core Feature start */}
      <section className="feature-area-five bgc-lighter pt-100 pb-70">
        <div className="container">
          <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
            <span className="sub-title mb-10">Hoạt động truyền thông</span>
            <h2>Đồng Hành Cùng Sự Kiện & Truyền Thông</h2>
          </div>
          <div className="row row-cols-xl-6 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 justify-content-center">
            <div className="col wow fadeInUp delay-0-2s">
              <div className="feature-item-five">
                <i className="fi fi-tr-camcorder"></i>
                <h5>
                  <span>TVC / Event Production</span>
                </h5>
              </div>
            </div>
            <div className="col wow fadeInUp delay-0-3s">
              <div className="feature-item-five">
                <i className="fi fi-ts-aperture"></i>
                <h5>
                  <span>Photography &amp; Yearbook</span>
                </h5>
              </div>
            </div>
            <div className="col wow fadeInUp delay-0-4s">
              <div className="feature-item-five">
                {/* <i className="flaticon-aim" /> */}
                <i className="fi fi-tr-live-alt"></i>
                <h5>
                  {/* <Link href="/service-details">
                    <a>Cool &amp; modern animations</a>
                  </Link> */}
                  <span>Livestream Services</span>
                </h5>
              </div>
            </div>
            <div className="col wow fadeInUp delay-0-5s">
              <div className="feature-item-five">
                <i className="fi fi-tr-customize-computer"></i>
                <h5>
                  <span>Graphic Design &amp; Branding</span>
                </h5>
              </div>
            </div>
            <div className="col wow fadeInUp delay-0-6s">
              <div className="feature-item-five">
                <i className="fi fi-tr-photo-video"></i>
                <h5>
                  <span>Media Content Creation</span>
                </h5>
              </div>
            </div>
            <div className="col wow fadeInUp delay-0-7s">
              <div className="feature-item-five">
                <i className="fi fi-tr-sliders-v-square"></i>
                <h5>
                  <span>Technical Event Support</span>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Feature end */}
      {/* About Us Area start */}
      <section id="about" className="about-area-one pt-130 pb-125 rel z-1">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-5">
              <div className="about-image-one bg-squire-shape rmb-85 wow fadeInUp delay-0-2s">
                <img src="assets/images/about/about-one.jpg" alt="About us" />
                <img
                  className="image-left"
                  src="assets/images/shapes/image-left.png"
                  alt="shape"
                />
              </div>
            </div>
            <div className="col-xl-6 col-lg-7">
              <div className="about-content-one wow fadeInUp delay-0-4s">
                <div className="section-title mb-45">
                  <span className="sub-title mb-15">Về chúng tôi</span>
                  <h2>Bộ phận truyền thông Khoa CNTT - FIT Media</h2>
                </div>
                <ul className="list-style-one">
                  <li>
                    <div className="content">
                      <h4>Giới thiệu</h4>
                      <p>
                        Được thành lập vào ngày 17/05/2014, Bộ phận truyền thông
                        khoa CNTT FIT Media đang từng bước từng bước khẳng định
                        vị trí của mình tại trường Đại học Công nghiệp Hà Nội.
                        Trong suốt chiều dài 10 năm phát triển, FIT Media luôn
                        đóng vai trò là kênh cung cấp thông tin kịp thời và
                        chính xác nhất cho người xem.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="content">
                      <h4>Vị thế</h4>
                      <p>
                        Với sự ủng hộ đông đảo và nhiệt tình đến từ phía khán
                        giả ở trong và ngoài trường, đi cùng đó là sự chuyên
                        nghiệp trong hoạt động, công việc, kết hợp với trang
                        thiết bị hiện đại, trình độ chuyên môn cao, không quá
                        khi nói rằng, FIT Media đã trở thành một trong những đội
                        đang đứng đầu về lĩnh vực truyền thông của tại HaUI.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="content">
                      <h4>Hoạt động</h4>
                      <p>
                        Câu lạc bộ cho ra nhiều sản phẩm chất lượng, trau chuốt
                        về nội dung, các chuyên mục đem lại những thông tin bổ
                        ích, những giây phút thư giãn và những sự kiện thú vị
                        như là FIT News, FIT Fun, FIT Games, Sinh Viên Ăn Gì,...{" "}
                        <br />
                        Không chỉ dừng lại ở các chuyên mục, FIT Media còn tham
                        gia hỗ trợ truyền thông, bảo trợ hình ảnh các chương
                        trình lớn, ở cả trong trường cũng như là tại các trường
                        trong khu vực.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Area end */}
      {/* Statistics Three Area start */}
      <section className="statistics-area-three bgs-cover pb-100 rel z-1">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-7">
              <div className="statistics-three-content rmb-65 wow fadeInRight delay-0-2s">
                <div className="row justify-content-center justify-content-xl-start">
                  <div className="col-xl-9">
                    <div className="section-title mb-60">
                      <span className="sub-title mb-15">Thành tựu nổi bật</span>
                      <h2>Các con số ấn tượng từ các nền tảng Mạng xã hội</h2>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                    <div className="counter-item style-two counter-text-wrap wow fadeInRight delay-0-3s">
                      <i className="fi fi-brands-facebook"></i>
                      <Counter end={52070} />
                      <span className="counter-title">
                        Lượt theo dõi Fanpage
                      </span>
                      <p>Cùng 45k+ lượt thích với nhiều bài viết chất lượng</p>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                    <div className="counter-item style-two counter-text-wrap wow fadeInRight delay-0-5s">
                      {/* <i className="flaticon-global" /> */}
                      <i className="fi fi-brands-tik-tok"></i>
                      <Counter end={48832} />
                      <span className="counter-title">
                        Lượt theo dõi trên Tiktok
                      </span>
                      <p>Với nhiều nội dung sáng tạo, vui vẻ và hấp dẫn</p>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                    <div className="counter-item style-two counter-text-wrap wow fadeInRight delay-0-7s">
                      {/* <i className="flaticon-rating" /> */}
                      <i className="fi fi-sr-circle-heart"></i>
                      <Counter end={1416333} />
                      <span className="counter-title">
                        Lượt yêu thích trên Tiktok
                      </span>
                      <p>
                        Nhờ vào sự đầu tư kỹ lưỡng và sáng tạo trong từng sản
                        phẩm
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="statistics-three-image bg-squire-shape mb-30 wow fadeInLeft delay-0-3s">
                <img
                  src="assets/images/about/statictics.jpg"
                  alt="Statictics"
                />
                <img
                  className="image-right"
                  src="assets/images/shapes/image-right.png"
                  alt="shape"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Three Area end */}
      {/* Design Products Start */}
      <section
        id="products"
        className="design-feature-area overflow-hidden pt-130 pb-100 text-white bgc-black-with-lighting rel z-1"
      >
        <div className="container">
          <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
            <span className="sub-title mb-10">Sản phẩm chất lượng</span>
            <h2>Các ẩn phẩm truyền thông trong và ngoài trường</h2>
          </div>
          <div className="row no-gap align-items-center">
            <div className="col-lg-3">
              <div className="feature-left">
                <div className="row">
                  <div className="col-lg-12 col-sm-6">
                    <div className="service-item style-three wow fadeInRight delay-0-2s">
                      <div className="icon">
                        <i className="fi fi-ts-newspaper"></i>
                      </div>
                      <div className="content">
                        <h4>
                          <span>FIT News</span>
                        </h4>
                        <p>Cung cấp thông tin mới nhất cho các bạn sinh viên</p>
                        {/* <Link href="/service-details"> */}
                        <a className="more-btn">
                          <i className="fal fa-long-arrow-right" />
                        </a>
                        {/* </Link> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 col-sm-6">
                    <div className="service-item style-three wow fadeInRight delay-0-3s">
                      <div className="icon">
                        <i className="fi fi-tr-gamepad"></i>
                      </div>
                      <div className="content">
                        <h4>
                          <span>FIT Fun, FIT Games</span>
                        </h4>
                        <p>Đem lại những giây phút giải trí, thư giãn</p>
                        <a className="more-btn">
                          <i className="fal fa-long-arrow-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="feature-middle rmt-30">
                <div className="image wow fadeInUp delay-0-2s">
                  <img
                    className="circle-text"
                    src="assets/images/shapes/feature-image-top.png"
                    alt="Text"
                  />
                  <img
                    className="round"
                    src="assets/images/features/feature-middle.png"
                    alt="Feature Middle"
                  />
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="service-item style-three wow fadeInUp delay-0-3s">
                      <div className="icon">
                        <i className="fi fi-tr-plate-eating"></i>
                      </div>
                      <div className="content">
                        <h4>
                          <span>Sinh Viên Ăn Gì?</span>
                        </h4>
                        <p>
                          Đa dạng video review ẩm thực xoay quanh cuộc sống sinh
                          viên
                        </p>
                        <a className="more-btn">
                          <i className="fal fa-long-arrow-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="service-item style-three mt-30 wow fadeInUp delay-0-4s">
                      <div className="icon">
                        <i className="fi fi-tr-blog-text"></i>
                      </div>
                      <div className="content">
                        <h4>
                          <spana>Hỗ trợ truyền thông</spana>
                        </h4>
                        <p>
                          Đồng hành cùng các sự kiện lớn nhỏ trong và ngoài
                          trường
                        </p>
                        <a className="more-btn">
                          <i className="fal fa-long-arrow-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="feature-right">
                <div className="row">
                  <div className="col-lg-12 col-sm-6">
                    <div className="service-item style-three mt-100 wow fadeInLeft delay-0-2s">
                      <div className="icon">
                        <i className="fi fi-tr-workshop"></i>
                      </div>
                      <div className="content">
                        <h4>
                          <span>FIT Media Workshop</span>
                        </h4>
                        <p>
                          Nơi chia sẻ những kinh nghiệm về ngành truyền thông
                        </p>
                        <a className="more-btn">
                          <i className="fal fa-long-arrow-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 col-sm-6">
                    <div className="service-item style-three wow fadeInLeft delay-0-3s">
                      <div className="icon">
                        <i className="fi fi-tr-images"></i>
                      </div>
                      <div className="content">
                        <h4>
                          <span>Bảo trợ hình ảnh</span>
                        </h4>
                        <p>Lưu giữ hình ảnh chuyên nghiệp cho các sự kiện</p>
                        <a className="more-btn">
                          <i className="fal fa-long-arrow-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="design-feature-shapes">
          <img
            className="shape dots"
            src="assets/images/shapes/slider-dots.png"
            alt="Shape"
          />
          <img
            className="shape wave-line"
            src="assets/images/shapes/feature-wave-line.png"
            alt="Shape"
          />
        </div>
      </section>

      {/* Design Products End */}
      {/* Activities Area start */}
      <RecentProjects />

      {/* Activities Area end */}
      {/* Working Process Area start */}
      <section className="work-process-area pb-95 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="section-title text-center mb-55 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-15">Cơ cấu tổ chức</span>
                <h2>Chúng tôi làm việc như thế nào?</h2>
              </div>
            </div>
          </div>
          <div className="work-process-wrap rel z-1">
            <div className="row justify-content-between">
              <div className="col-xl-3 col-lg-5 col-sm-6">
                <div className="work-process-item mt-30 wow fadeInUp delay-0-2s">
                  <div className="icon">
                    <span className="number">01</span>
                    <i className="flaticon-optimization" />
                  </div>
                  <h4>Ban phụ trách</h4>
                  <p>
                    Trưởng Bộ phận: Lê Đình Quốc và 2 Phó Bộ phận: Nguyễn Huy
                    Công, Bùi Đức Mạnh
                  </p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-5 col-sm-6">
                <div className="work-process-item wow fadeInUp delay-0-4s">
                  <div className="icon">
                    <span className="number">02</span>
                    <i className="flaticon-link" />
                  </div>
                  <h4>Ban Biên tập</h4>
                  <p>
                    Phụ trách content truyền thông trên các nền tảng Facebook,
                    Tik Tok. Hoàn thiện kịch bản cho các ấn phẩm truyền thông,
                    video Tik Tok và các chương trình lớn nhỏ. MC cho các chương
                    trình, sự kiện.
                  </p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-5 col-sm-6">
                <div className="work-process-item mt-55 wow fadeInUp delay-0-6s">
                  <div className="icon">
                    <span className="number">03</span>
                    <i className="flaticon-data" />
                  </div>
                  <h4>Ban Kỹ thuật</h4>
                  <p>
                    Quay, chụp tại tất cả các chương trình của khoa, của trường
                    Edit ảnh, video sau mỗi sự kiện. Sản xuất các chuyên mục
                    hàng tháng của Bộ phận
                  </p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-5 col-sm-6">
                <div className="work-process-item mt-45 wow fadeInUp delay-0-8s">
                  <div className="icon">
                    <span className="number">04</span>
                    <i className="flaticon-star" />
                  </div>
                  <h4>Ban Tổ chức sự kiện</h4>
                  <p>
                    Lên ý tưởng cho các chương trình, sự kiện trong và ngoài. Bộ
                    phận Tổ chức các chương trình gắn kết các thành viên.
                  </p>
                </div>
              </div>
            </div>
            <div className="work-process-shape">
              <img
                src="assets/images/shapes/worp-process-step.png"
                alt="Shape"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Working Process Area end */}
      {/* CTA Area start */}
      {/* <section className="call-to-action-area rel z-2">
        <div className="container">
          <div
            className="cta-inner bgs-cover"
            style={{
              backgroundImage: "url(assets/images/background/cta-bg.jpg)",
            }}
          >
            <div className="row">
              <div className="col-xl-6">
                <div className="cta-item wow fadeInLeft delay-0-2s">
                  <div className="icon">
                    <i className="flaticon-target" />
                  </div>
                  <h4>Have any Project On Minds ?</h4>
                  <Link href="/contact">
                    <a className="details-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="cta-item wow fadeInRight delay-0-2s">
                  <div className="icon">
                    <i className="flaticon-target" />
                  </div>
                  <h4>We are to work SEO optimization ?</h4>
                  <Link href="/contact">
                    <a className="details-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Area end */}
      {/* Pricing Two Area start */}
      {/* <section
        id="pricing"
        className="pricing-area-two bgc-lighter pt-240 pb-100 rel z-1"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="section-title text-center mb-55 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-15">Our Pricing Package</span>
                <h2>Website Design Packages</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="pricing-item-two wow fadeInUp delay-0-2s">
                <h4 className="title">Basic Plan</h4>
                <span className="badge">popular package</span>
                <div className="pricing-inner">
                  <ul className="list-style-two">
                    <li>Landing page design (10 pages)</li>
                    <li>HTML+CSS design (12 pages)</li>
                    <li>Social Media Marketing</li>
                    <li>Domin hosting provider</li>
                    <li>Online support (24/7)</li>
                  </ul>
                  <div className="price-and-btn">
                    <div className="content">
                      <span className="price">248</span>
                      <span className="save">
                        Save<span> 25%</span>
                      </span>
                      <Link href="/pricing">
                        <a className="theme-btn style-three">
                          Choose Package{" "}
                          <i className="fas fa-angle-double-right" />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="pricing-item-two wow fadeInUp delay-0-4s">
                <h4 className="title">Standard plan</h4>
                <span className="badge">popular package</span>
                <div className="pricing-inner">
                  <ul className="list-style-two">
                    <li>Landing page design (10 pages)</li>
                    <li>HTML+CSS design (12 pages)</li>
                    <li>Social Media Marketing</li>
                    <li>Domin hosting provider</li>
                    <li>Online support (24/7)</li>
                  </ul>
                  <div className="price-and-btn">
                    <div className="content">
                      <span className="price">352</span>
                      <span className="save">
                        Save<span> 25%</span>
                      </span>
                      <Link href="/pricing">
                        <a className="theme-btn style-three">
                          Choose Package{" "}
                          <i className="fas fa-angle-double-right" />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="pricing-item-two wow fadeInUp delay-0-2s">
                <h4 className="title">golder Plan</h4>
                <span className="badge">popular package</span>
                <div className="pricing-inner">
                  <ul className="list-style-two">
                    <li>Landing page design (10 pages)</li>
                    <li>HTML+CSS design (12 pages)</li>
                    <li>Social Media Marketing</li>
                    <li>Domin hosting provider</li>
                    <li>Online support (24/7)</li>
                  </ul>
                  <div className="price-and-btn">
                    <div className="content">
                      <span className="price">583</span>
                      <span className="save">
                        Save<span> 25%</span>
                      </span>
                      <Link href="/pricing">
                        <a className="theme-btn style-three">
                          Choose Package{" "}
                          <i className="fas fa-angle-double-right" />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="pricing-item-two wow fadeInUp delay-0-4s">
                <h4 className="title">platinum Plan</h4>
                <span className="badge">popular package</span>
                <div className="pricing-inner">
                  <ul className="list-style-two">
                    <li>Landing page design (10 pages)</li>
                    <li>HTML+CSS design (12 pages)</li>
                    <li>Social Media Marketing</li>
                    <li>Domin hosting provider</li>
                    <li>Online support (24/7)</li>
                  </ul>
                  <div className="price-and-btn">
                    <div className="content">
                      <span className="price">834</span>
                      <span className="save">
                        Save<span> 25%</span>
                      </span>
                      <Link href="/pricing">
                        <a className="theme-btn style-three">
                          Choose Package{" "}
                          <i className="fas fa-angle-double-right" />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pricing-shapes">
          <img
            className="shape dots"
            src="assets/images/shapes/pricing-bg-dots.png"
            alt="Shape"
          />
          <img
            className="shape wave"
            src="assets/images/shapes/pricing-wave-line.png"
            alt="Shape"
          />
        </div>
      </section> */}

      {/* Pricing Two Area end */}
      {/* Testimonial Area Start */}
      {/* <ClientsFeedback /> */}

      {/* Testimonial Area End */}
      {/* Contact Area Start */}
      <section
        id="contact"
        className="contact-area overflow-hidden py-130 bgc-black-with-lighting rel z-1"
      >
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-5 col-lg-6">
              <div className="contact-info-area text-white rmb-75 wow fadeInLeft delay-0-2s">
                <div className="section-title mb-55">
                  <h2>
                    Bạn cần giải pháp truyền thông? Hãy <span>liên hệ </span>
                    với chúng tôi!
                  </h2>
                </div>
                <div className="contact-info-wrap">
                  <h5 style={{ marginBottom: "20px" }}>
                    Bộ phận truyền thông khoa Công nghệ thông tin - Trường Đại
                    học Công nghiệp Hà Nội
                  </h5>
                  <div className="contact-info-item">
                    <div className="icon">
                      <i className="fal fa-map-marker-alt" />
                    </div>
                    <div className="content">
                      <span className="title">Địa chỉ</span>
                      <b className="text">
                        Văn phòng Đoàn thanh niên, tầng 8, nhà A1, Trường ĐHCNHN
                      </b>
                    </div>
                  </div>
                  <div className="contact-info-item">
                    <div className="icon">
                      <i className="far fa-envelope-open-text" />
                    </div>
                    <div className="content">
                      <span className="title">Email</span>
                      <b className="text">
                        <a href="mailto:media@fit-haui.edu.vn">
                          media@fit-haui.edu.vn
                        </a>
                      </b>
                    </div>
                  </div>
                  <div className="contact-info-item">
                    <div className="icon">
                      <i className="far fa-phone" />
                    </div>
                    <div className="content">
                      <span className="title">Hotline</span>
                      <b className="text">
                        <a href="callto:+84978717514">0978.717.514</a>
                      </b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <form
                onSubmit={(e) => e.preventDefault()}
                id="contact-area-form"
                className="contact-area-form text-center wow fadeInRight delay-0-2s"
                name="contact-area-form"
                action="#"
                method="post"
              >
                <h4>Gửi tin nhắn cho chúng tôi</h4>
                <input
                  type="text"
                  id="full-name"
                  name="full-name"
                  className="form-control"
                  defaultValue=""
                  placeholder="Họ tên"
                  required="true"
                />
                <input
                  type="email"
                  id="blog-email"
                  name="blog-email"
                  className="form-control"
                  defaultValue=""
                  placeholder="Địa chỉ Email"
                  required=""
                />
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  className="form-control"
                  defaultValue=""
                  placeholder="Số điện thoại"
                  required="true"
                />
                <textarea
                  name="message"
                  id="message"
                  className="form-control"
                  rows={5}
                  placeholder="Tin nhắn"
                  required=""
                  defaultValue={""}
                />
                <button type="submit" className="theme-btn">
                  Gửi tin nhắn <i className="fas fa-angle-double-right" />
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="contact-shapes">
          <img
            className="shape circle"
            src="assets/images/shapes/slider-dots.png"
            alt="Shape"
          />
          <img
            className="shape dots"
            src="assets/images/shapes/contact-dots.png"
            alt="Shape"
          />
          <img
            className="shape wave-line"
            src="assets/images/shapes/contact-wave-line.png"
            alt="Shape"
          />
        </div>
      </section>

      {/* Contact Area End */}
      {/* Blog Area start */}
      {/* <section id="news" className="news-blog-area pt-130 pb-75 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-15">Get Every Updates</span>
                <h2>Read Latest News &amp; Blog</h2>
              </div>
            </div>
          </div>
          <div className="row large-gap">
            <div className="col-lg-6">
              <div className="blog-item wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/blog/blog1.jpg" alt="Blog" />
                </div>
                <div className="content">
                  <span className="date">
                    <i className="far fa-calendar-alt" /> 25 March 2022
                  </span>
                  <h4>
                    <Link href="/blog-details">
                      <a>Easy Ways to Incorporate Customer Feedback</a>
                    </Link>
                  </h4>
                  <div className="author">
                    <img src="assets/images/blog/author1.jpg" alt="Author" />
                    <div className="post-by">
                      <span>Post by</span>
                      <a href="#">Douglas B. Dickens</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="blog-item wow fadeInUp delay-0-4s">
                <div className="image">
                  <img src="assets/images/blog/blog2.jpg" alt="Blog" />
                </div>
                <div className="content">
                  <span className="date">
                    <i className="far fa-calendar-alt" /> 27 March 2022
                  </span>
                  <h4>
                    <Link href="/blog-details">
                      <a>How to create modern web site for your business?</a>
                    </Link>
                  </h4>
                  <div className="author">
                    <img src="assets/images/blog/author2.jpg" alt="Author" />
                    <div className="post-by">
                      <span>Post by</span>
                      <a href="#">Carson C. Rhodes</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="blog-item wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/blog/blog3.jpg" alt="Blog" />
                </div>
                <div className="content">
                  <span className="date">
                    <i className="far fa-calendar-alt" /> 25 March 2022
                  </span>
                  <h4>
                    <Link href="/blog-details">
                      <a>How to digital marketing work social networking?</a>
                    </Link>
                  </h4>
                  <div className="author">
                    <img src="assets/images/blog/author3.jpg" alt="Author" />
                    <div className="post-by">
                      <span>Post by</span>
                      <a href="#">Robert T. Evans</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="blog-item wow fadeInUp delay-0-4s">
                <div className="image">
                  <img src="assets/images/blog/blog4.jpg" alt="Blog" />
                </div>
                <div className="content">
                  <span className="date">
                    <i className="far fa-calendar-alt" /> 25 March 2022
                  </span>
                  <h4>
                    <Link href="/blog-details">
                      <a>Easy Ways to Incorporate Customer Feedback</a>
                    </Link>
                  </h4>
                  <div className="author">
                    <img src="assets/images/blog/author4.jpg" alt="Author" />
                    <div className="post-by">
                      <span>Post by</span>
                      <a href="#">Stanley J. Contreras</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </Layout>
  );
};
export default IndexOnePage;
