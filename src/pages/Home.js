import { Col, Row } from "antd";
import portak from "../images/portakalresim.jpg";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleExploreClick = () => {
    navigate("/products");
  };

  return (
    <div
      style={{
        backgroundColor: "#f2eadc",
        paddingTop: "60px",
      }}
    >
      <div className="text-center fade-in-right">
        <h1>Bringing the Freshness of Uzbekistan to Your Table</h1>
      </div>

      <div className="home-card">
        <Row>
          <Col xs={24} sm={24} md={24} lg={14} xl={14} className="fade-in-down">
            <Row justify="center">
              <Col xs={24} sm={20} md={22} lg={20} xl={18} xxl={10}>
                <div style={{ margin: "100px auto" }}>
                  <h2>Introduction Brief</h2>
                  <hr />
                  <p style={{ lineHeight: "3", marginTop: "50px" }}>
                    CMRN Retail is a leading producer and supplier of
                    high-quality fruits and vegetables from Uzbekistan.
                    Specializing in premium cherries, we export to major markets
                    including Korea and China, ensuring freshness and superior
                    quality with every shipment.
                  </p>
                  <br />
                  <button
                    type="button"
                    onClick={handleExploreClick}
                    className="btn btn-outline-dark"
                  >
                    Explore Our Products
                  </button>
                </div>
              </Col>
            </Row>
          </Col>

          <Col xs={0} sm={0} md={0} lg={10} xl={10} className="fade-in-right2">
            <img src={portak} alt="Uzbek Fruits" className="responsive-image" />
          </Col>
        </Row>
      </div>

      <div className="mobile-only-image fade-in-right2">
        <img
          src={portak}
          alt="Uzbek Fruits"
          style={{
            width: "100%",
            height: "auto",
            marginBottom: "20px",
          }}
        />
      </div>
    </div>
  );
};

export default Home;
