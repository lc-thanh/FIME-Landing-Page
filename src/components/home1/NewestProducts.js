import Link from "next/link";
import Pagination from "../Pagination";

const NewestProducts = () => {
  return (
    <section id="newest-products" className="blog-grid-area py-100 rel z-1">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="section-title text-center mb-55 wow fadeInUp delay-0-2s">
              <span className="sub-title mb-12">Các sản phẩm gần đây</span>
              <h2>Cập nhật mới nhất</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-4 col-md-6">
            <div className="blog-grid-item wow fadeInUp delay-0-2s">
              <div className="image">
                <img src="assets/images/blog/blog-grid1.jpg" alt="Blog Grid" />
              </div>
              <div className="blog-content">
                <ul className="blog-meta">
                  <li>
                    <img
                      src="assets/images/blog/blog-author.jpg"
                      alt="Author"
                    />
                    <a href="#">Somalia D. Silva</a>
                  </li>
                  <li>
                    <i className="far fa-calendar-alt" />
                    <a href="#"> 25 June 2022</a>
                  </li>
                </ul>
                <h5>
                  <Link href="/blog-details">
                    How To Build Group Chat App With Vanilla JS, Twilio And
                    Node.js
                  </Link>
                </h5>
                <p>
                  Sit amet consectetur adipiscin eiusmod temor incididunt labore
                  dolore magnaes epse
                </p>
                <Link href="/blog-details">
                  <a className="read-more">
                    Read More <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="blog-grid-item wow fadeInUp delay-0-2s">
              <div className="image">
                <img src="assets/images/blog/blog-grid1.jpg" alt="Blog Grid" />
              </div>
              <div className="blog-content">
                <ul className="blog-meta">
                  <li>
                    <img
                      src="assets/images/blog/blog-author.jpg"
                      alt="Author"
                    />
                    <a href="#">Somalia D. Silva</a>
                  </li>
                  <li>
                    <i className="far fa-calendar-alt" />
                    <a href="#"> 25 June 2022</a>
                  </li>
                </ul>
                <h5>
                  <Link href="/blog-details">
                    How To Build Group Chat App With Vanilla JS, Twilio And
                    Node.js
                  </Link>
                </h5>
                <p>
                  Sit amet consectetur adipiscin eiusmod temor incididunt labore
                  dolore magnaes epse
                </p>
                <Link href="/blog-details">
                  <a className="read-more">
                    Read More <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="blog-grid-item wow fadeInUp delay-0-4s">
              <div className="image">
                <img src="assets/images/blog/blog-grid2.jpg" alt="Blog Grid" />
              </div>
              <div className="blog-content">
                <ul className="blog-meta">
                  <li>
                    <img
                      src="assets/images/blog/blog-author.jpg"
                      alt="Author"
                    />
                    <a href="#">Somalia D. Silva</a>
                  </li>
                  <li>
                    <i className="far fa-calendar-alt" />
                    <a href="#"> 25 June 2022</a>
                  </li>
                </ul>
                <h5>
                  <Link href="/blog-details">
                    Smashing Podcast Episode 47 With Sara Soueidan Does
                    Accessibility
                  </Link>
                </h5>
                <p>
                  Sit amet consectetur adipiscin eiusmod temor incididunt labore
                  dolore magnaes epse
                </p>
                <Link href="/blog-details">
                  <a className="read-more">
                    Read More <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="blog-grid-item wow fadeInUp delay-0-6s">
              <div className="image">
                <img src="assets/images/blog/blog-grid3.jpg" alt="Blog Grid" />
              </div>
              <div className="blog-content">
                <ul className="blog-meta">
                  <li>
                    <img
                      src="assets/images/blog/blog-author.jpg"
                      alt="Author"
                    />
                    <a href="#">Somalia D. Silva</a>
                  </li>
                  <li>
                    <i className="far fa-calendar-alt" />
                    <a href="#"> 25 June 2022</a>
                  </li>
                </ul>
                <h5>
                  <Link href="/blog-details">
                    Manage Accessible Design System With CSS Color-Contrast
                  </Link>
                </h5>
                <p>
                  Sit amet consectetur adipiscin eiusmod temor incididunt labore
                  dolore magnaes epse
                </p>
                <Link href="/blog-details">
                  <a className="read-more">
                    Read More <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="blog-grid-item wow fadeInUp delay-0-2s">
              <div className="image">
                <img src="assets/images/blog/blog-grid4.jpg" alt="Blog Grid" />
              </div>
              <div className="blog-content">
                <ul className="blog-meta">
                  <li>
                    <img
                      src="assets/images/blog/blog-author.jpg"
                      alt="Author"
                    />
                    <a href="#">Somalia D. Silva</a>
                  </li>
                  <li>
                    <i className="far fa-calendar-alt" />
                    <a href="#"> 25 June 2022</a>
                  </li>
                </ul>
                <h5>
                  <Link href="/blog-details">
                    How To Build Group Chat App With Vanilla JS, Twilio And
                    Node.js
                  </Link>
                </h5>
                <p>
                  Sit amet consectetur adipiscin eiusmod temor incididunt labore
                  dolore magnaes epse
                </p>
                <Link href="/blog-details">
                  <a className="read-more">
                    Read More <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="blog-grid-item wow fadeInUp delay-0-4s">
              <div className="image">
                <img src="assets/images/blog/blog-grid5.jpg" alt="Blog Grid" />
              </div>
              <div className="blog-content">
                <ul className="blog-meta">
                  <li>
                    <img
                      src="assets/images/blog/blog-author.jpg"
                      alt="Author"
                    />
                    <a href="#">Somalia D. Silva</a>
                  </li>
                  <li>
                    <i className="far fa-calendar-alt" />
                    <a href="#"> 25 June 2022</a>
                  </li>
                </ul>
                <h5>
                  <Link href="/blog-details">
                    Smashing Podcast Episode 47 With Sara Soueidan Does
                    Accessibility
                  </Link>
                </h5>
                <p>
                  Sit amet consectetur adipiscin eiusmod temor incididunt labore
                  dolore magnaes epse
                </p>
                <Link href="/blog-details">
                  <a className="read-more">
                    Read More <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="blog-grid-item wow fadeInUp delay-0-6s">
              <div className="image">
                <img src="assets/images/blog/blog-grid6.jpg" alt="Blog Grid" />
              </div>
              <div className="blog-content">
                <ul className="blog-meta">
                  <li>
                    <img
                      src="assets/images/blog/blog-author.jpg"
                      alt="Author"
                    />
                    <a href="#">Somalia D. Silva</a>
                  </li>
                  <li>
                    <i className="far fa-calendar-alt" />
                    <a href="#"> 25 June 2022</a>
                  </li>
                </ul>
                <h5>
                  <Link href="/blog-details">
                    Manage Accessible Design System With CSS Color-Contrast
                  </Link>
                </h5>
                <p>
                  Sit amet consectetur adipiscin eiusmod temor incididunt labore
                  dolore magnaes epse
                </p>
                <Link href="/blog-details">
                  <a className="read-more">
                    Read More <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="blog-grid-item wow fadeInUp delay-0-2s">
              <div className="image">
                <img src="assets/images/blog/blog-grid7.jpg" alt="Blog Grid" />
              </div>
              <div className="blog-content">
                <ul className="blog-meta">
                  <li>
                    <img
                      src="assets/images/blog/blog-author.jpg"
                      alt="Author"
                    />
                    <a href="#">Somalia D. Silva</a>
                  </li>
                  <li>
                    <i className="far fa-calendar-alt" />
                    <a href="#"> 25 June 2022</a>
                  </li>
                </ul>
                <h5>
                  <Link href="/blog-details">
                    How To Build Group Chat App With Vanilla JS, Twilio And
                    Node.js
                  </Link>
                </h5>
                <p>
                  Sit amet consectetur adipiscin eiusmod temor incididunt labore
                  dolore magnaes epse
                </p>
                <Link href="/blog-details">
                  <a className="read-more">
                    Read More <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="blog-grid-item wow fadeInUp delay-0-4s">
              <div className="image">
                <img src="assets/images/blog/blog-grid8.jpg" alt="Blog Grid" />
              </div>
              <div className="blog-content">
                <ul className="blog-meta">
                  <li>
                    <img
                      src="assets/images/blog/blog-author.jpg"
                      alt="Author"
                    />
                    <a href="#">Somalia D. Silva</a>
                  </li>
                  <li>
                    <i className="far fa-calendar-alt" />
                    <a href="#"> 25 June 2022</a>
                  </li>
                </ul>
                <h5>
                  <Link href="/blog-details">
                    Smashing Podcast Episode 47 With Sara Soueidan Does
                    Accessibility
                  </Link>
                </h5>
                <p>
                  Sit amet consectetur adipiscin eiusmod temor incididunt labore
                  dolore magnaes epse
                </p>
                <Link href="/blog-details">
                  <a className="read-more">
                    Read More <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="blog-grid-item wow fadeInUp delay-0-6s">
              <div className="image">
                <img src="assets/images/blog/blog-grid9.jpg" alt="Blog Grid" />
              </div>
              <div className="blog-content">
                <ul className="blog-meta">
                  {/* <li>
                      <img
                        src="assets/images/blog/blog-author.jpg"
                        alt="Author"
                      />
                      <a href="#">Somalia D. Silva</a>
                    </li> */}
                  <li>
                    <i className="far fa-calendar-alt" />
                    <span> 25 June 2022</span>
                  </li>
                </ul>
                <h5>
                  <Link href="/blog-details">Gala IT Festival 2025</Link>
                </h5>
                {/* <p>
                    Sit amet consectetur adipiscin eiusmod temor incididunt
                    labore dolore magnaes epse
                  </p> */}
                <Link href="/blog-details">
                  <a className="read-more">
                    Read More <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <ul className="pagination flex-wrap justify-content-center wow fadeInUp delay-0-2s">
          <Pagination paginationCls={".blog-grid-item"} defaultSort={6} />
        </ul>
      </div>
    </section>
  );
};
export default NewestProducts;
