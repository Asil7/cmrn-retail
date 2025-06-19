import { Row, Col, Card } from "antd";
import fruitsDataEn from "../../data/fruitsDataEn";
import fruitsDataRu from "../../data/fruitsDataRu";
import { useNavigate } from "react-router-dom";
import "../product/Products.css";
import { useTranslation } from "react-i18next";

const Products = () => {
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const lang = i18n.language;
  const fruitsData = lang === "ru" ? fruitsDataRu : fruitsDataEn;

  return (
    <div style={{ backgroundColor: "#f2eadc" }} className="pb-5 pt-5">
      <Row justify="center">
        {fruitsData.products.map((fruit, index) => (
          <Col key={index}>
            <Card
              hoverable
              className="product-card"
              cover={
                <div
                  style={{
                    width: "100%",
                    height: 500,
                  }}
                >
                  <img
                    src={fruit.photo[0]}
                    alt={fruit.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />

                  <div className="product-name-overlay">{fruit.name}</div>

                  {fruit.frame && (
                    <img
                      src={fruit.frame}
                      alt={`${fruit.name} frame`}
                      className="zoom-in"
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
              onClick={() => {
                navigate(`/products/${fruit.id}`);
              }}
            ></Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Products;
