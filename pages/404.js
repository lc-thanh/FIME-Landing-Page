import Link from "next/link";

const E404 = () => {
  return (
    <div className="page-wrapper">
      {/* Preloader */}
      <div className="preloader" style={{ display: "none" }} />
      {/* Error Page Area start */}
      <section className="error-page-area py-130 rel z-1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="error-content rmb-75 wow fadeInLeft delay-0-2s animated">
                <div className="logo mb-40">
                  <Link href="/">
                    <a>
                      <img
                        src="assets/images/logos/logo-four.png"
                        alt=""
                        width={160}
                        height={160}
                      />
                    </a>
                  </Link>
                </div>
                <h1>OPPS!</h1>
                <h3>Không tìm thấy trang</h3>
                <p>
                  Có vẻ trang bạn tìm không có, hãy quay trở lại{" "}
                  <b>fime.edu.vn</b>
                </p>
                <Link href="/">
                  <a className="theme-btn">
                    Trang chủ <i className="fas fa-angle-double-right" />
                  </a>
                </Link>
                <div className="follow-us mt-3">
                  <h4>Follow Us</h4>
                  <div className="social-style-two">
                    <a
                      href="https://www.facebook.com/fitmediahaui"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a
                      href="https://www.tiktok.com/@fitmedia.haui"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <i className="fi fi-brands-tik-tok"></i>
                    </a>
                    <a
                      href="https://www.youtube.com/@fitmedia9790"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <i className="fi fi-brands-youtube"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="error-image wow fadeInRight delay-0-2s animated">
                <img src="assets/images/background/404.png" alt="404 Error" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Error Page Area end */}
    </div>
  );
};
export default E404;
