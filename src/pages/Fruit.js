import React from "react";
import { Row, Col, Card } from "antd";
import fruitsData from "../data/fruitsData";

const Fruit = () => {
  return (
    <div
      style={{
        padding: "40px",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#f2eadc",
      }}
    >
      <Row gutter={[80, 24]} justify="center" style={{ maxWidth: "1500px" }}>
        {fruitsData.products.map((fruit, index) => (
          <Col key={index}>
            <Card
              hoverable
              style={{
                width: 400,
                height: 500,
                backgroundColor: "#c2bbb0",
                padding: 0,
              }}
              cover={
                <div
                  style={{ position: "relative", width: "100%", height: 500 }}
                >
                  <img
                    src={fruit.photo_example}
                    alt={fruit.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "8px 8px 0 0",
                    }}
                  />
                  {fruit.frame && (
                    <img
                      src={fruit.frame}
                      alt={`${fruit.name} frame`}
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        pointerEvents: "none",
                      }}
                    />
                  )}
                </div>
              }
            >
              {/* Istasangiz nomini yoki boshqa malumotni shu yerga yozishingiz mumkin */}
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Fruit;
