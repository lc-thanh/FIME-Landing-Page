/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import Pagination from "../Pagination";
import { getProductImageUrl } from "../../utils";

const MAX_LENGTH = 165; // Số ký tự tối đa trước khi cắt

const NewestProducts = ({ products }) => {
  const [expandedItems, setExpandedItems] = useState(new Set());

  const toggleExpand = (productId) => {
    const newExpandedItems = new Set(expandedItems);
    if (newExpandedItems.has(productId)) {
      newExpandedItems.delete(productId);
    } else {
      newExpandedItems.add(productId);
    }
    setExpandedItems(newExpandedItems);
  };

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
          {products.map((product) => {
            const isExpanded = expandedItems.has(product.id);

            // Xử lý mô tả (nếu null hoặc undefined sẽ hiển thị "Không có mô tả")
            const description = isExpanded
              ? product.note ?? "Không có mô tả"
              : (product.note?.slice(0, MAX_LENGTH) ?? "Không có mô tả") +
                (product.note && product.note.length > MAX_LENGTH ? "..." : "");

            return (
              <div key={product.id} className="col-xl-4 col-md-6">
                <div className="blog-grid-item wow fadeInUp delay-0-2s">
                  <div
                    className="image"
                    style={{
                      width: "100%",
                      aspectRatio: "3/2",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src={
                        getProductImageUrl(product.image) ||
                        "assets/images/newest-product_cover.jpg"
                      }
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      alt="Blog Grid"
                    />
                  </div>
                  <div className="blog-content">
                    <ul
                      className="blog-meta"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <li>
                        <img
                          src="assets/images/newest-product_cover.jpg"
                          alt="Author"
                        />
                        <a href="#">FIT Media</a>
                      </li>
                      <li>
                        <i className="far fa-calendar-alt" />
                        <a href="#">
                          {new Date(product.date)
                            .toLocaleDateString("vi-VN", {
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                            })
                            .replace("thg", "Tháng")}
                        </a>
                      </li>
                    </ul>
                    <h5>
                      <a
                        href={product.link || "#"}
                        target="blank"
                        rel="noopener noreferrer"
                      >
                        {product.title}
                      </a>
                    </h5>
                    <p
                      style={{
                        textAlign: "justify",
                        textJustify: "inter-word",
                        fontSize: "14px",
                      }}
                    >
                      {description}{" "}
                      {product.note && product.note.length > MAX_LENGTH && (
                        <span
                          onClick={() => toggleExpand(product.id)}
                          style={{
                            display: "inline-block",
                            cursor: "pointer",
                            color: "gray",
                            textDecoration: "underline",
                          }}
                        >
                          {isExpanded ? "Thu gọn" : "Xem thêm"}
                        </span>
                      )}
                    </p>
                    <a
                      href={product.link || "#"}
                      target="blank"
                      rel="noopener noreferrer"
                    >
                      <span className="read-more">
                        Xem ảnh <i className="far fa-arrow-right" />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <ul className="pagination flex-wrap justify-content-center wow fadeInUp delay-0-2s">
          <Pagination paginationCls={".blog-grid-item"} defaultSort={6} />
        </ul>
      </div>
    </section>
  );
};

export default NewestProducts;
