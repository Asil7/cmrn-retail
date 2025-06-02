import { useLocation, Link } from "react-router-dom";
import apricotOrchard from "../images/apricotOrchard.png";
import melons from "../images/melons.png";
import fruit from "../images/fruit.png";
import headproductbackground from "../images/headproductbackground.jpg";
import { Layout, Menu, Divider } from "antd";
import { useEffect } from "react";

const { Header, Content } = Layout;

const getImageForPath = (path) => {
  if (path === "/") {
    return apricotOrchard;
  } else if (path === "/about") {
    return melons;
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

  useEffect(() => {
    imagesToPreload.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <Layout>
      <div style={{ position: "relative" }}>
        <img
          src={headerImage}
          alt="Header"
          style={{ width: "100%", height: headerHeight, objectFit: "cover" }}
        />

        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: headerHeight,
            backgroundColor: "rgba(0, 0, 0, 0.1)",
            zIndex: 1,
            pointerEvents: "none",
          }}
        />
        <Header
          style={{
            position: "absolute",
            top: 20,
            width: "100%",
            backgroundColor: "rgba(255, 255, 255, 0.0)",
            display: "flex",
            zIndex: 2,
            padding: "0 20px",
          }}
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
        </Header>

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
    </Layout>
  );
}
