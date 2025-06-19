import { useLocation, Link } from "react-router-dom";
import apricotOrchard from "../images/apricotOrchard.png";
import fruit from "../images/fruit.png";
import headproductbackground from "../images/headproductbackground.jpg";
import {
  Layout,
  Menu,
  Divider,
  ConfigProvider,
  Affix,
  Button,
  Drawer,
  Dropdown,
} from "antd";
import { useEffect, useState } from "react";
import { Footer } from "antd/es/layout/layout";
import {
  DownOutlined,
  MenuOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";
import { useTranslation } from "react-i18next";

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

const getPageTitle = (path, t) => {
  if (path === "/") return t("navigator.home");
  if (path === "/about") return t("navigator.about");
  if (path === "/products") return t("navigator.products");
  if (path === "/contact") return t("navigator.contact");
  return "";
};

const imagesToPreload = [apricotOrchard, fruit, headproductbackground];

export default function AppLayout({ children }) {
  const location = useLocation();
  const headerImage = getImageForPath(location.pathname);
  const headerHeight = getHeightForPath(location.pathname);
  const [isAffixed, setIsAffixed] = useState(false);

  const [isMobile, setIsMobile] = useState(false);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    imagesToPreload.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  const menuItems = [
    {
      key: "en",
      label: "🇬🇧 EN",
    },
    {
      key: "ru",
      label: "🇷🇺 RU",
    },
  ];

  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: "Averia Gruesa Libre",
          colorPrimary: "#ed6f01",
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

          <div
            key={location.pathname}
            style={{
              position: "absolute",
              bottom: "80px",
              left: "10%",
              color: "white",
              zIndex: 2,
              fontSize: "32px",
              fontWeight: "bold",
              textShadow: "1px 1px 4px rgba(0,0,0,0.7)",
            }}
            className="fade-in-right"
          >
            {getPageTitle(location.pathname, t)}
          </div>

          {!isMobile && (
            <>
              <Affix
                offsetTop={0}
                onChange={(affixed) => setIsAffixed(affixed)}
              >
                <Header
                  className={`main-header ${
                    isAffixed ? "affixed" : "not-affixed"
                  }`}
                >
                  <div style={{ flex: 1 }}>
                    <Menu mode="horizontal" theme="light" selectable={false}>
                      <Menu.Item key="home">
                        <Link to="/">{t("navigator.home")}</Link>
                      </Menu.Item>
                      <Menu.Item key="about">
                        <Link to="/about">{t("navigator.about")}</Link>
                      </Menu.Item>
                      <Menu.Item key="about">
                        <Link to="/products">{t("navigator.products")}</Link>
                      </Menu.Item>
                      <Menu.Item key="contact">
                        <Link to="/contact">{t("navigator.contact")}</Link>
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
                      <strong className="text-gray fs-4 d-none d-md-inline">
                        CMRN RETAIL LLC
                      </strong>
                    </div>
                  )}

                  <Dropdown
                    trigger={["click"]}
                    menu={{
                      items: menuItems,
                      selectedKeys: [i18n.language],
                      onClick: ({ key }) => i18n.changeLanguage(key),
                    }}
                    placement="bottom"
                  >
                    <div
                      style={{
                        padding: "0 30px",
                        color: isAffixed ? "gray" : "white",
                        fontSize: "16px",
                        borderLeft: isAffixed
                          ? "1px solid gray"
                          : "1px solid white",
                        cursor: "pointer",
                      }}
                    >
                      <strong>
                        {i18n.language.toUpperCase()} <DownOutlined />
                      </strong>
                    </div>
                  </Dropdown>
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
            </>
          )}

          {isMobile && (
            <>
              <div style={{ backgroundColor: "rgba(0,0,0,0.4)" }}>
                <Button
                  type="text"
                  icon={
                    <MenuOutlined style={{ fontSize: 24, color: "white" }} />
                  }
                  onClick={() => setDrawerVisible(true)}
                  style={{
                    position: "fixed",
                    top: 20,
                    right: 20,
                    zIndex: 1000,
                    backgroundColor: "rgba(0,0,0,0.4)",
                    border: "none",
                  }}
                />
              </div>

              <Drawer
                title={
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <span className="ms-2">CMRN RETAIL LLC</span>
                    <div
                      style={{ display: "flex", gap: 8 }}
                      className="fade-in-right"
                    >
                      <Button
                        size="small"
                        onClick={() => i18n.changeLanguage("en")}
                      >
                        🇬🇧 EN
                      </Button>
                      <Button
                        size="small"
                        onClick={() => i18n.changeLanguage("ru")}
                      >
                        🇷🇺 RU
                      </Button>
                    </div>
                  </div>
                }
                placement="right"
                onClose={() => setDrawerVisible(false)}
                visible={drawerVisible}
              >
                <Menu
                  mode="vertical"
                  onClick={() => setDrawerVisible(false)}
                  className="fade-in-up"
                >
                  <Menu.Item key="home">
                    <Link to="/">{t("navigator.home")}</Link>
                  </Menu.Item>
                  <Menu.Item key="about">
                    <Link to="/about">{t("navigator.about")}</Link>
                  </Menu.Item>
                  <Menu.Item key="products">
                    <Link to="/products">{t("navigator.products")}</Link>
                  </Menu.Item>
                  <Menu.Item key="contact">
                    <Link to="/contact">{t("navigator.contact")}</Link>
                  </Menu.Item>
                </Menu>

                <div
                  style={{
                    marginBottom: 40,
                    bottom: 0,
                    position: "absolute",
                    fontSize: 14,
                    color: "#888",
                  }}
                >
                  <div className="mb-4">
                    <Button className="m-2" size="large" shape="circle">
                      <i className="bi bi-telegram"></i>
                    </Button>
                    <Button className="m-2" size="large" shape="circle">
                      <i className="bi bi-whatsapp"></i>
                    </Button>
                  </div>
                  <div>© 2025 CMRN RETAIL LLC. All rights reserved.</div>
                </div>
              </Drawer>
            </>
          )}
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
