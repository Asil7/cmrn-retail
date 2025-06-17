import React from "react";
import { Card, Typography } from "antd";
import "bootstrap/dist/css/bootstrap.min.css";
import { useTranslation } from "react-i18next";

const { Title, Paragraph } = Typography;

const AboutUs = () => {
  const { t } = useTranslation();

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
                  {t("about.companyOverview")}
                </Title>
                <Paragraph style={{ fontSize: "16px", lineHeight: "1.8" }}>
                  {t("about.companyOverviewText")}
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
                  {t("about.missionStatement")}
                </Title>
                <Paragraph style={{ fontSize: "16px", lineHeight: "1.8" }}>
                  {t("about.missionStatementText")}
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
                  {t("about.visionStatement")}
                </Title>
                <Paragraph style={{ fontSize: "16px", lineHeight: "1.8" }}>
                  {t("about.visionStatementText")}
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
