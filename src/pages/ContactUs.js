import { useTranslation } from "react-i18next";
import Location from "../components/location/Location";
import { Row, Col } from "antd";
import { useMediaQuery } from "react-responsive";
import LocationMobile from "../components/location/LocationMobile";

const ContactUs = () => {
  const { t } = useTranslation();
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div style={{ backgroundColor: "#f2eadc" }} className="pb-5">
      <div className="pt-5 contact-wrapper">
        <Row justify={"center"}>
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={16}
            xl={15}
            className="contact-location-padding"
          >
            {isMobile ? <LocationMobile /> : <Location />}
          </Col>
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={8}
            xl={6}
            className="contact-info-padding"
          >
            <div className="fade-in-left mb-2 d-flex align-items-center gap-2">
              <i className="bi bi-geo-alt-fill text-danger fs-5"></i>
              <strong>{t("contact.address")}</strong>
            </div>
            <div className="fade-in-right">{t("contact.addressText")}</div>
            <hr />

            <div className="fade-in-left mb-2 d-flex align-items-center gap-2">
              <i className="bi bi-telephone-fill fs-6"></i>
              <strong>{t("contact.phone")}</strong>
            </div>
            <div className="fade-in-right">
              <a className="text-decoration-none" href="tel:+998979007707">
                +998979007707
              </a>
            </div>
            <hr />

            <div className="fade-in-left mb-2 d-flex align-items-center gap-2">
              <i className="bi bi-envelope-fill fs-6"></i>
              <strong>{t("contact.email")}</strong>
            </div>
            <div className="fade-in-right">
              <a
                className="text-decoration-none"
                href="mailto:info@cmrnretail.uz"
              >
                info@cmrnretail.uz
              </a>
            </div>
            <hr />

            <div className="fade-in-left mb-2 d-flex align-items-center gap-2">
              <i className="bi bi-chat-dots-fill fs-6"></i>
              <strong>{t("contact.messenger")}</strong>
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
      </div>
    </div>
  );
};

export default ContactUs;
