import { Col, Row } from "antd";

const Home = () => {
  return (
    <div
      style={{
        backgroundColor: "#f2eadc",
        paddingTop: "60px",
        height: "100vh",
      }}
    >
      <div className="text-center fade-in-right">
        <h1>Bringing the Freshness of Uzbekistan to Your Table</h1>
      </div>

      <div
        style={{
          backgroundColor: "#ffcf38",
          height: "75vh",
          width: "80%",
          padding: "20px",
          borderTopRightRadius: "10px",
          borderBottomRightRadius: "10px",
          marginTop: "60px",
        }}
      >
        <Row>
          <Col span={14}>
            <div style={{ width: "45%", margin: "120px auto" }}>
              <h2>Introduction Brief</h2>
              <hr />
              <p style={{ lineHeight: "3", marginTop: "50px" }}>
                CMRN Retail is a leading producer and supplier of high-quality
                fruits and vegetables from Uzbekistan. Specializing in premium
                cherries, we export to major markets including Korea and China,
                ensuring freshness and superior quality with every shipment.
              </p>
            </div>
          </Col>

          <Col span={10}>
            <img
              src="https://via.placeholder.com/400x300"
              alt="Uzbek Fruits"
              style={{ maxWidth: "100%", borderRadius: "10px" }}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Home;
