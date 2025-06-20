import { Card } from "antd";
import "./Products.css";
import { useTranslation } from "react-i18next";
import useInView from "../../components/useInView";

const ProductMonthCard = ({ product }) => {
  const { i18n } = useTranslation();
  const lang = i18n.language;
  const [ref, isVisible] = useInView();

  const monthMapEn = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];

  const monthMapRu = [
    "ЯНВ",
    "ФЕВ",
    "МАР",
    "АПР",
    "МАЙ",
    "ИЮН",
    "ИЮЛ",
    "АВГ",
    "СЕН",
    "ОКТ",
    "НОЯ",
    "ДЕК",
  ];

  const activeSeasons = product.description?.season || [];
  const monthMap = lang === "ru" ? monthMapRu : monthMapEn;

  return (
    <div ref={ref}>
      <Card
        style={{ width: "380px", height: "480px", margin: "15px" }}
        bodyStyle={{ padding: 0 }}
      >
        <div style={{ height: "250px", backgroundColor: "#cccccc" }}>
          <img
            src={product.photo[0]}
            alt={product.name}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />

          {product.frame && isVisible && (
            <div
              className={isVisible ? "zoom-in" : ""}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={product.frame}
                alt="frame"
                style={{
                  width: "85%",
                  height: "85%",
                  objectFit: "cover",
                  pointerEvents: "none",
                }}
              />
            </div>
          )}

          {isVisible && (
            <div
              className={isVisible ? "fade-in-down" : ""}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  backgroundColor: "#042b18",
                  color: "white",
                  padding: "6px 12px",
                  fontWeight: "bold",
                  fontSize: "18px",
                  width: "220px",
                  textAlign: "center",
                }}
              >
                {product.name}
              </div>
            </div>
          )}
        </div>
        <div style={{ height: "200px", backgroundColor: "#d7c8b8" }}></div>
        <div
          style={{
            height: "30px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0",
            backgroundColor: "#f9f9f9",
          }}
        >
          {monthMap.map((month, index) => {
            const isActive = activeSeasons.includes(month);

            return (
              <div
                key={index}
                style={{
                  flex: "1 0 auto",
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                  height: "100%",
                  width: "30px",
                  color: "white",
                  backgroundColor: isActive ? "green" : "red",
                  borderRight: "1px solid black",
                  fontFamily: "Arial, sans-serif",
                }}
              >
                {month}
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
};

export default ProductMonthCard;
