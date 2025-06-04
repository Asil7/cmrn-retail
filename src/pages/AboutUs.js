import React from "react";
import { Row, Col } from "antd";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/reset.css";

const AboutUs = () => {
  return (
    <div className="about-container py-5">
      <Row gutter={[24, 24]} justify="center">
        <Col xs={24} md={8} className="swing-drop-in">
          <div className="section-box">
            <h4>Company Overview</h4>
            <p>
              CMRN Retail has dedicated itself to providing the finest fruits
              and vegetables from the fertile lands of Uzbekistan. Our
              commitment to quality and freshness sets us apart as a trusted
              supplier in the international market.
            </p>
          </div>
        </Col>

        <Col xs={24} md={8} className="swing-drop-in">
          <div className="section-box">
            <h4>Mission Statement</h4>
            <p>
              Our mission is to deliver premium quality produce that not only
              satisfies our customers' needs but also supports local farmers and
              sustainable agricultural practices.
            </p>
          </div>
        </Col>

        <Col xs={24} md={8} className="swing-drop-in">
          <div className="section-box">
            <h4>Vision Statement</h4>
            <p>
              To be recognized as the leading supplier of fresh products
              renowned for our quality, reliability, and customer service.
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default AboutUs;
