import Location from "../components/location/Location";
import { Row, Col } from "antd";

const ContactUs = () => {
  return (
    <div style={{ padding: "40px", backgroundColor: "#f2eadc" }}>
      <Row gutter={[80, 24]} justify="center" style={{ maxWidth: "1500px" }}>
        <Col>
          <Location />
        </Col>
        <Col>
          <div>Email</div>
        </Col>
      </Row>
    </div>
  );
};
export default ContactUs;
