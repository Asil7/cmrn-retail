import { Row, Col, Card } from "antd";
import fruitsData from "../../data/fruitsData";
import { useNavigate } from "react-router-dom";
import "../product/Products.css";

const Products = () => {
  const navigate = useNavigate();

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
              className="product-card"
              cover={
                <div
                  style={{ position: "relative", width: "100%", height: 500 }}
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
