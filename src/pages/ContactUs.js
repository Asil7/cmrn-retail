import Location from "../components/location/Location";
import { Row, Col, Button } from "antd";

const ContactUs = () => {
  return (
    <div style={{ backgroundColor: "#f2eadc" }}>
      <Row justify="center">
        <Col sm={24} md={24} lg={24} xl={24} xxl={18}>
          <Row className="mt-5" gutter={[60]}>
            <Col xs={24} sm={24} md={24} lg={16} xl={16}>
              <Location />
            </Col>
            <Col xs={24} sm={24} md={24} lg={8} xl={8}>
              <div className="fade-in-left mb-2 d-flex align-items-center gap-2">
                <i className="bi bi-geo-alt-fill text-danger fs-5"></i>
                <strong>Address :</strong>
              </div>
              <div className="fade-in-right">
                Uzbekistan, Tashkent, Almazar district, Kushtut MFY, Sagban
                street 5,6,7
              </div>
              <hr />

              <div className="fade-in-left mb-2 d-flex align-items-center gap-2">
                <i className="bi bi-telephone-fill fs-6"></i>
                <strong>Phone :</strong>
              </div>
              <div className="fade-in-right">
                <a class="text-decoration-none" href="tel:+998979007707">
                  +998979007707
                </a>
              </div>
              <hr />

              <div className="fade-in-left mb-2 d-flex align-items-center gap-2">
                <i className="bi bi-envelope-fill fs-6"></i>
                <strong>Email :</strong>
              </div>
              <div className="fade-in-right">
                <a
                  class="text-decoration-none"
                  href="mailto:info@cmrnretail.uz"
                >
                  info@cmrnretail.uz
                </a>
              </div>
              <hr />

              <div className="fade-in-left mb-2 d-flex align-items-center gap-2">
                <i className="bi bi-chat-dots-fill fs-6"></i>
                <strong>Messenger :</strong>
              </div>
              <div className="fade-in-right d-flex gap-3">
                <span>
                  <a
                    href="https://www.t.me/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i
                      className="bi bi-telegram fs-3 text-primary"
                      style={{ cursor: "pointer" }}
                    ></i>
                  </a>
                </span>
                <span>
                  <a
                    href="https://wa.me/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i
                      className="bi bi-whatsapp fs-3 text-success"
                      style={{ cursor: "pointer" }}
                    ></i>
                  </a>
                </span>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};
export default ContactUs;
