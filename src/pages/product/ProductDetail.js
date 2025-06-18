import React, { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { Row, Col, Carousel } from "antd";
import fruitsDataEn from "../../data/fruitsDataEn";
import fruitsDataRu from "../../data/fruitsDataRu";
import { useTranslation } from "react-i18next";

const ProductDetail = () => {
  const { id } = useParams();
  const { i18n } = useTranslation();
  const lang = i18n.language;
  const fruitsData = lang === "ru" ? fruitsDataRu : fruitsDataEn;

  const product = fruitsData.products.find(
    (fruit) => fruit.id === parseInt(id)
  );

  const carouselRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  if (!product) {
    return (
      <div>{lang === "en" ? "Product not found." : "Товар не найден"}</div>
    );
  }

  const benefits = product.description.characteristics.map((text, index) => ({
    text,
    icon: product.frame,
  }));

  return (
    <div>
      <Row>
        <Col
          xs={24}
          md={12}
          style={{
            backgroundColor: "#c4b5a5",
            padding: "20px",
            minHeight: "400px",
            height: "75vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
            }}
          >
            <div style={{ width: "100%", maxWidth: "800px" }}>
              <Carousel
                arrows
                autoplay
                ref={carouselRef}
                afterChange={(current) => setCurrentSlide(current)}
              >
                {product.photo.map((photoUrl, index) => (
                  <div key={index}>
                    <img
                      src={photoUrl}
                      alt={`${product.name} ${index + 1}`}
                      style={{
                        width: "100%",
                        maxHeight: "500px",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                ))}
              </Carousel>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "10px",
                flexWrap: "wrap",
                gap: "10px",
              }}
            >
              {product.photo.map((photoUrl, index) => (
                <img
                  key={index}
                  src={photoUrl}
                  alt={`Thumbnail ${index + 1}`}
                  onClick={() => carouselRef.current.goTo(index)}
                  style={{
                    width: "50px",
                    height: "50px",
                    objectFit: "cover",
                    border:
                      currentSlide === index
                        ? "2px solid #1890ff"
                        : "1px solid #ccc",
                    cursor: "pointer",
                    borderRadius: "4px",
                  }}
                />
              ))}
            </div>
          </div>
        </Col>

        <Col
          xs={24}
          md={12}
          style={{
            padding: "60px 70px",
            backgroundColor: "#f2eadc",
          }}
        >
          <div>
            <h6>{lang === "ru" ? "Фрукты" : "Fruit"}</h6>
            <hr style={{ width: "50%" }} />
            <br />
            <h2 style={{ fontSize: "2rem" }}>{product.name}</h2>

            {product.varieties && (
              <p>
                {lang === "ru" ? "Сорта:" : "Varieties:"}{" "}
                {product.varieties.join(", ")}
              </p>
            )}

            <ul style={{ paddingLeft: "20px" }}>
              {benefits.map((benefit, index) => (
                <li key={index}>{benefit.text}</li>
              ))}
            </ul>

            <h5 style={{ marginTop: "30px" }}>
              {lang === "ru" ? "Упаковка " : "Packaging "}
            </h5>
            <div style={{ marginLeft: "10px", marginTop: "10px" }}>
              <p>{product.description.packaging.types.join(", ")}</p>
              <p>
                {lang === "ru" ? "Вес: " : "Weight: "}
                {product.description.packaging.weight_range_kg}
              </p>
              {product.description.packaging.custom_packaging && (
                <p>{product.description.packaging.custom_packaging_value}</p>
              )}
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ProductDetail;
