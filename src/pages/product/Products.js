import { Row, Col } from "antd";
import fruitsDataEn from "../../data/fruitsDataEn";
import fruitsDataRu from "../../data/fruitsDataRu";
import "../product/Products.css";
import { useTranslation } from "react-i18next";
import ProductCard from "./ProductCard";

const Products = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language;
  const fruitsData = lang === "ru" ? fruitsDataRu : fruitsDataEn;

  return (
    <div style={{ backgroundColor: "#f2eadc" }} className="pb-5 pt-5">
      <Row justify="center">
        {fruitsData.products.map((fruit, index) => (
          <Col key={index}>
            <ProductCard fruit={fruit} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Products;
