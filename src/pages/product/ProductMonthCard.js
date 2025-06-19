import { Card, Col, Row } from "antd";
import "./Products.css";

const ProductMonthCard = ({ product }) => {
  const monthMapEn = [
    ["January", "JAN"],
    ["February", "FEB"],
    ["March", "MAR"],
    ["April", "APR"],
    ["May", "MAY"],
    ["June", "JUN"],
    ["July", "JUL"],
    ["August", "AUG"],
    ["September", "SEP"],
    ["October", "OCT"],
    ["November", "NOV"],
    ["December", "DEC"],
  ];

  const monthMapRu = new Map([
    ["Январь", "ЯНВ"],
    ["Февраль", "ФЕВ"],
    ["Март", "МАР"],
    ["Апрель", "АПР"],
    ["Май", "МАЙ"],
    ["Июнь", "ИЮН"],
    ["Июль", "ИЮЛ"],
    ["Август", "АВГ"],
    ["Сентябрь", "СЕН"],
    ["Октябрь", "ОКТ"],
    ["Ноябрь", "НОЯ"],
    ["Декабрь", "ДЕК"],
  ]);

  return (
    <div>
      <Card
        style={{ width: "400px", height: "500px" }}
        bodyStyle={{ padding: 0 }}
      ></Card>
    </div>
  );
};

export default ProductMonthCard;
