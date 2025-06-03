import React, { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { Row, Col, Carousel } from "antd";
import fruitsData from "../../data/fruitsData";

const ProductDetail = () => {
  const { id } = useParams();
  const product = fruitsData.products.find(
    (fruit) => fruit.id === parseInt(id)
  );

  const carouselRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  if (!product) {
    return <div>Product not found.</div>;
  }

  const benefits = product.description.characteristics.map((text, index) => ({
    text,
    icon: product.frame, // using the frame image as icon
  }));

  return (
    <div>
      <Row>
        <Col
          style={{
            backgroundColor: "#c4b5a5",
            padding: "20px",
            height: "800px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          span={12}
        >
          {/* Wrapper - Carousel + Thumbnails */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
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
                        maxHeight: "550px",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                ))}
              </Carousel>
            </div>

            {/* Thumbnails */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "10px",
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

        <Col span={12} style={{ padding: "20px", backgroundColor: "#f2eadc" }}>
          <h2 style={{ fontSize: "2rem", fontWeight: "bold" }}>
            {product.name}
          </h2>
          <p>{product.local_name && `Local Name: ${product.local_name}`}</p>
          <p>Season: {product.description.season}</p>

          <h3 style={{ marginTop: "20px" }}>Packaging:</h3>
          <p>{product.description.packaging.types.join(", ")}</p>
          <p>Weight: {product.description.packaging.weight_range_kg}</p>
          {product.description.packaging.custom_packaging && (
            <p>Custom packaging is available upon request.</p>
          )}

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "20px",
              marginTop: "30px",
            }}
          >
            {benefits.map((benefit, index) => (
              <div
                key={index}
                style={{
                  flex: "1 1 200px",
                  textAlign: "center",
                  backgroundColor: "#fff",
                  padding: "10px",
                  borderRadius: "8px",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                }}
              >
                <img
                  src={benefit.icon}
                  alt={`Benefit ${index + 1}`}
                  style={{
                    width: "60px",
                    height: "60px",
                    marginBottom: "10px",
                  }}
                />
                <p>{benefit.text}</p>
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ProductDetail;
