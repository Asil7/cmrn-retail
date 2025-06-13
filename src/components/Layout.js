import { useLocation, Link } from "react-router-dom";
import apricotOrchard from "../images/apricotOrchard.png";
import melons from "../images/melons.png";
import fruit from "../images/fruit.png";
import headproductbackground from "../images/headproductbackground.jpg";
import { Layout, Menu, Divider, ConfigProvider, Affix } from "antd";
import { useEffect, useState } from "react";
import { Footer } from "antd/es/layout/layout";

const { Header, Content } = Layout;

const getImageForPath = (path) => {
  if (path === "/") {
    return apricotOrchard;
  } else if (path === "/about") {
    return fruit;
  } else if (path === "/products") {
    return fruit;
  } else if (path === "/contact") {
    return apricotOrchard;
  } else if (path.startsWith("/products/")) {
    return headproductbackground;
  } else {
    return "/images/default.jpg";
  }
};

const getHeightForPath = (path) => {
  if (path === "/") {
    return "500px";
  } else if (path === "/about") {
    return "500px";
  } else if (path === "/products") {
    return "500px";
  } else if (path === "/contact") {
    return "500px";
  } else if (path.startsWith("/products/")) {
    return "250px";
  } else {
    return "500px";
  }
};

const imagesToPreload = [apricotOrchard, melons, fruit, headproductbackground];

export default function AppLayout({ children }) {
  const location = useLocation();
  const headerImage = getImageForPath(location.pathname);
  const headerHeight = getHeightForPath(location.pathname);
  const [isAffixed, setIsAffixed] = useState(false);

  useEffect(() => {
    imagesToPreload.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: "Averia Gruesa Libre",
        },
      }}
    >
      <Layout>
        <div style={{ position: "relative" }}>
          <img
            src={headerImage}
            alt="Header"
            style={{
              width: "100%",
              height: "auto",
              maxHeight: headerHeight,
              objectFit: "cover",
            }}
          />

          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "auto",
              maxHeight: headerHeight,
              backgroundColor: "rgba(0, 0, 0, 0.1)",
              zIndex: 1,
              pointerEvents: "none",
            }}
          />
          <Affix offsetTop={0} onChange={(affixed) => setIsAffixed(affixed)}>
            <Header
              className={`main-header ${isAffixed ? "affixed" : "not-affixed"}`}
            >
              <div style={{ flex: 1 }}>
                <Menu mode="horizontal" theme="light" selectable={false}>
                  <Menu.Item key="home">
                    <Link to="/">Home</Link>
                  </Menu.Item>
                  <Menu.Item key="about">
                    <Link to="/about">About Us</Link>
                  </Menu.Item>
                  <Menu.Item key="about">
                    <Link to="/products">Products</Link>
                  </Menu.Item>
                  <Menu.Item key="contact">
                    <Link to="/contact">Contact Us</Link>
                  </Menu.Item>
                </Menu>
              </div>
              {isAffixed && (
                <div
                  style={{
                    position: "absolute",
                    left: "50%",
                    transform: "translateX(-50%)",
                    color: "gray",
                    pointerEvents: "none",
                  }}
                >
                  <strong className="text-gray fs-4">CMRN RETAIL LLC</strong>
                </div>
              )}
            </Header>
          </Affix>

          <Divider
            style={{
              position: "absolute",
              top: "65px",
              left: 0,
              width: "100%",
              borderColor: "white",
            }}
          >
            <strong className="text-white fs-4">CMRN RETAIL LLC</strong>
          </Divider>
        </div>

        <Content>{children}</Content>

        <Footer
          style={{
            backgroundColor: "#002f20",
            color: "#fff",
            transition: "all 0.6s ease",
          }}
        >
          <div style={{ padding: "40px 80px" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <img src="/images/logo.png" alt="logo" height="80" />
              {/* linklar joyi */}
            </div>
            <hr style={{ borderColor: "#ccc", margin: "20px 0" }} />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: "12px",
              }}
            >
              <div>© 2025 CMRN RETAIL LLC. All rights reserved.</div>
              <div style={{ display: "flex", gap: 16 }}>
                <i className="fab fa-instagram" />
                <i className="fab fa-facebook" />
                <i className="fab fa-youtube" />
              </div>
            </div>
          </div>
        </Footer>
      </Layout>
    </ConfigProvider>
  );
}
