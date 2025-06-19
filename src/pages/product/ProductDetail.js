import React, { useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Row, Col, Carousel, Button } from "antd";
import fruitsDataEn from "../../data/fruitsDataEn";
import fruitsDataRu from "../../data/fruitsDataRu";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "react-responsive";
import { LeftOutlined } from "@ant-design/icons";

const ProductDetail = () => {
  const { id } = useParams();
  const { i18n } = useTranslation();
  const lang = i18n.language;
  const { t } = useTranslation();
  const fruitsData = lang === "ru" ? fruitsDataRu : fruitsDataEn;
  const isMobile = useMediaQuery({ maxWidth: 767 });

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
            height: isMobile ? "65vh" : "75vh",
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
                        ? "2px solid #ed6f01"
                        : "1px solid #ccc",
                    cursor: "pointer",
                    borderRadius: "4px",
                  }}
                />
              ))}
            </div>
          </div>
        </Col>

        {isMobile && (
          <div
            style={{
              paddingTop: "20px",
              backgroundColor: "#f2eadc",
              width: "100%",
            }}
          >
            <Link to="/products">
              <Button type="link" style={{ color: "#ed6f01" }}>
                <LeftOutlined />
                {t("navigator.products")}
              </Button>
            </Link>
          </div>
        )}

        <Col
          xs={24}
          md={12}
          style={{
            padding: isMobile ? "15px 70px" : "60px 70px",
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
