import { Card } from "antd";
import { useNavigate } from "react-router-dom";
import useInView from "../../components/useInView";

const ProductCard = ({ fruit }) => {
  const navigate = useNavigate();
  const [ref, isVisible] = useInView();

  return (
    <Card
      ref={ref}
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

          {fruit.frame && isVisible && (
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
    />
  );
};

export default ProductCard;
