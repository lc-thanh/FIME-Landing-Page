import Link from "next/link";
import Slider from "react-slick";
import { projectThreeActive } from "../../sliderProps";

const RecentProjects = () => {
  return (
    <section className="project-area-three py-130 rel z-1" id="activities">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg10">
            <div className="section-title text-center mb-50 wow fadeInUp delay-0-2s">
              <span className="sub-title mb-15">
                Các chương trình đã tham gia
              </span>
              <h2>FIT Media đã từng tham gia tổ chức, hỗ trợ truyền thông</h2>
            </div>
          </div>
        </div>
      </div>
      <Slider {...projectThreeActive} className="project-three-active">
        <div className="project-item style-two wow fadeInUp delay-0-2s">
          <div className="project-iamge">
            <img
              src="assets/images/projects/project-three1.jpg"
              alt="Project"
            />
            <div className="project-over">
              {/* <Link href="/project-details"> */}
              <a
                className="details-btn"
                href="https://www.facebook.com/share/p/hMprKJZNLwxtCTg5/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="far fa-arrow-right" />
              </a>
              {/* </Link> */}
            </div>
          </div>
          <div className="project-content">
            <h4>
              <a
                href="https://www.facebook.com/share/p/hMprKJZNLwxtCTg5/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chào Tân Sinh Viên K19
              </a>
            </h4>
            <span className="category">Trường CNTT&TT</span>
          </div>
        </div>
        <div className="project-item style-two wow fadeInUp delay-0-4s">
          <div className="project-iamge">
            <img
              src="assets/images/projects/project-three2.jpg"
              alt="Project"
            />
            <div className="project-over">
              <a
                className="details-btn"
                href="https://www.facebook.com/share/p/HnKXNbDyQQjpTEVj/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="far fa-arrow-right" />
              </a>
            </div>
          </div>
          <div className="project-content">
            <h4>
              <a
                href="https://www.facebook.com/share/p/HnKXNbDyQQjpTEVj/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Workshop: Unlocking Creator
              </a>
            </h4>
            <span className="category">FIT Media Workshop</span>
          </div>
        </div>
        <div className="project-item style-two wow fadeInUp delay-0-6s">
          <div className="project-iamge">
            <img
              src="assets/images/projects/project-three3.jpg"
              alt="Project"
            />
            <div className="project-over">
              <a
                className="details-btn"
                href="https://www.facebook.com/share/p/AbSWhWNk1cY38tFz/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="far fa-arrow-right" />
              </a>
            </div>
          </div>
          <div className="project-content">
            <h4>
              <a
                href="https://www.facebook.com/share/p/AbSWhWNk1cY38tFz/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Lễ Tốt Nghiệp Năm 2024
              </a>
            </h4>
            <span className="category">HaUI</span>
          </div>
        </div>
        <div className="project-item style-two wow fadeInUp delay-0-8s">
          <div className="project-iamge">
            <img
              src="assets/images/projects/project-three4.jpg"
              alt="Project"
            />
            <div className="project-over">
              <a
                className="details-btn"
                href="https://www.facebook.com/share/p/yef2tEaKP3wyEPLb/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="far fa-arrow-right" />
              </a>
            </div>
          </div>
          <div className="project-content">
            <h4>
              <a
                href="https://www.facebook.com/share/p/yef2tEaKP3wyEPLb/"
                target="_blank"
                rel="noopener noreferrer"
              >
                IT FESTIVAL 2023
              </a>
            </h4>
            <span className="category">Trường CNTT&TT</span>
          </div>
        </div>
      </Slider>
    </section>
  );
};
export default RecentProjects;
