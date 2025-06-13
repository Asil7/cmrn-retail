import React from "react";
import { Card, Typography } from "antd";
import "bootstrap/dist/css/bootstrap.min.css";

const { Title, Paragraph } = Typography;

const AboutUs = () => {
  return (
    <div style={{ backgroundColor: "#f2eadc", padding: "40px 0" }}>
      <div className="container">
        <div className="row justify-content-center mb-4">
          <div className="col-md-10 col-lg-8">
            <Card
              className="blurred-fade-in"
              style={{
                borderRadius: "16px",
                boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
              }}
            >
              <div className="p-4">
                <Title
                  level={2}
                  className="text-center mb-4"
                  style={{ color: "#52c41a" }}
                >
                  Company Overview
                </Title>
                <Paragraph style={{ fontSize: "16px", lineHeight: "1.8" }}>
                  "<strong>CMRN Retail</strong> has dedicated itself to
                  providing the finest fruits and vegetables from the fertile
                  lands of Uzbekistan. Our commitment to quality and freshness
                  sets us apart as a trusted supplier in the international
                  market."
                </Paragraph>
              </div>
            </Card>
          </div>
        </div>

        <div className="row justify-content-center mb-4">
          <div className="col-md-10 col-lg-8">
            <Card
              className="fade-in-right"
              style={{
                borderLeft: "4px solid #1890ff",
                borderRadius: "16px",
                backgroundColor: "#ffffffcc",
              }}
            >
              <div className="p-4">
                <Title level={3} style={{ color: "#1890ff" }}>
                  Mission Statement
                </Title>
                <Paragraph style={{ fontSize: "16px", lineHeight: "1.8" }}>
                  “Our mission is to deliver premium quality produce that not
                  only satisfies our customers' needs but also supports local
                  farmers and sustainable agricultural practices.”
                </Paragraph>
              </div>
            </Card>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-8">
            <Card
              className="fade-in-left"
              style={{
                borderLeft: "4px solid #fa541c",
                borderRadius: "16px",
                backgroundColor: "#ffffffcc",
              }}
            >
              <div className="p-4">
                <Title level={3} style={{ color: "#fa541c" }}>
                  Vision Statement
                </Title>
                <Paragraph style={{ fontSize: "16px", lineHeight: "1.8" }}>
                  “To be recognized as the leading supplier of fresh products
                  renowned for our quality, reliability, and customer service.”
                </Paragraph>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
