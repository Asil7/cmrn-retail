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

        <Col
          span={12}
          style={{
            paddingTop: "60px",
            paddingLeft: "100px",
            backgroundColor: "#f2eadc",
          }}
        >
          <div>
            <h6>Fruit</h6>
          </div>
          <hr style={{ width: "50%" }} />
          <br />
          <h2 style={{ fontSize: "3rem" }}>{product.name}</h2>
          <br />
          <ul style={{ paddingLeft: "40px" }}>
            {benefits.map((benefit, index) => (
              <li className="fs-6" key={index}>
                {benefit.text}
              </li>
            ))}
          </ul>

          <p>{product.local_name && `Local Name: ${product.local_name}`}</p>
          {/* <p>Season: {product.description.season}</p> */}

          <h5 style={{ marginTop: "40px" }}>Packaging:</h5>
          <div style={{ marginLeft: "30px", marginTop: "20px" }}>
            <p>{product.description.packaging.types.join(", ")}</p>
            <p>Weight: {product.description.packaging.weight_range_kg}</p>
            {product.description.packaging.custom_packaging && (
              <p>Packaging is made according to customer demands.</p>
            )}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ProductDetail;
