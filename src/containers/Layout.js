import { useLocation, Link } from "react-router-dom";
import cherries from "../images/cherries.png";
import melons from "../images/melons.png";
import fruit from "../images/fruit.png";
import { Layout, Menu, Dropdown, Divider } from "antd";
import { DownOutlined } from "@ant-design/icons";

const { Header, Content } = Layout;

const getImageForPath = (path) => {
  switch (path) {
    case "/":
      return cherries;
    case "/about":
      return melons;
    case "/products":
      return "/images/products.jpg";
    case "/contact":
      return "/images/contact.jpg";
    case "/products/fruits":
      return fruit;
    default:
      return "/images/default.jpg";
  }
};

const dropdownMenu = (
  <Menu>
    <Menu.Item key="fruits">
      <Link to="/products/fruits">Fruits</Link>
    </Menu.Item>
    <Menu.Item key="vegetables">Vegetables</Menu.Item>
  </Menu>
);

export default function AppLayout({ children }) {
  const location = useLocation();
  const headerImage = getImageForPath(location.pathname);

  return (
    <Layout>
      {/* Header Image */}
      <div style={{ position: "relative" }}>
        <img
          src={headerImage}
          alt="Header"
          style={{ width: "100%", height: "500px", objectFit: "cover" }}
        />
        {/* Navigation bar */}
        <Header
          style={{
            position: "absolute",
            top: 20,
            width: "100%",
            backgroundColor: "rgba(255, 255, 255, 0.0)",
            display: "flex",
            // alignItems: "center",
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
              <Menu.Item key="products">
                <Dropdown overlay={dropdownMenu} trigger={["click"]}>
                  <a onClick={(e) => e.preventDefault()}>
                    Products <DownOutlined />
                  </a>
                </Dropdown>
              </Menu.Item>
              <Menu.Item key="contact">
                <Link to="/contact">Contact Uc</Link>
              </Menu.Item>
            </Menu>
          </div>
        </Header>

        {/* Optional Divider */}
        <Divider
          style={{
            position: "absolute",
            top: "70px",
            left: 0,
            width: "100%",
            borderColor: "white",
          }}
        >
          Text
        </Divider>
      </div>

      {/* Content */}
      <Content>{children}</Content>
    </Layout>
  );
}
