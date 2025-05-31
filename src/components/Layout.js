import { useLocation, Link } from "react-router-dom";
import apricotOrchard from "../images/apricotOrchard.png";
import melons from "../images/melons.png";
import fruit from "../images/fruit.png";
import { Layout, Menu, Divider } from "antd";

const { Header, Content } = Layout;

const getImageForPath = (path) => {
  switch (path) {
    case "/":
      return apricotOrchard;
    case "/about":
      return melons;
    case "/products":
      return fruit;
    case "/contact":
      return apricotOrchard;
    case "/products/fruits":
      return fruit;
    default:
      return "/images/default.jpg";
  }
};

// const dropdownMenu = (
//   <Menu>
//     <Menu.Item key="fruits">
//       <Link to="/products/fruits">Fruits</Link>
//     </Menu.Item>
//     <Menu.Item key="vegetables">Vegetables</Menu.Item>
//   </Menu>
// );

export default function AppLayout({ children }) {
  const location = useLocation();
  const headerImage = getImageForPath(location.pathname);

  return (
    <Layout>
      <div style={{ position: "relative" }}>
        <img
          src={headerImage}
          alt="Header"
          style={{ width: "100%", height: "500px", objectFit: "cover" }}
        />

        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "500px",
            backgroundColor: "rgba(0, 0, 0, 0.2)",
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
              {/* <Menu.Item key="products">
                <Dropdown overlay={dropdownMenu} trigger={["click"]}>
                  <a onClick={(e) => e.preventDefault()}>
                    Products <DownOutlined />
                  </a>
                </Dropdown>
              </Menu.Item> */}
              <Menu.Item key="about">
                <Link to="/products">Products</Link>
              </Menu.Item>
              <Menu.Item key="contact">
                <Link to="/contact">Contact Uc</Link>
              </Menu.Item>
            </Menu>
          </div>
        </Header>

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

      <Content>{children}</Content>
    </Layout>
  );
}
