import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import { Badge, Layout, Menu, message } from "antd";
import { sumBy } from 'lodash';
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Auth from "./Auth";
import Cart from './containers/Cart';
import ChangePassword from "./containers/ChangePassword";
import ForgotPassord from "./containers/ForgotPassord";
import Home from "./containers/Home";
import Login from "./containers/Login";
import OrderHistory from "./containers/OrderHistory";
import Register from "./containers/Register";
import ResetPassword from "./containers/ResetPassword";
import useCustomers from "./_actions/customerActions";
import React from 'react';
import { Col, Row } from 'antd';


const { Header, Content, Footer } = Layout;
const { SubMenu } = Menu;

function App() {
  let auth = useSelector((state) => state.customer.auth);
  const cartItems = useSelector((state) => state.cart.cartItems?.cartDetails);
  const { customerLogout } = useCustomers();
  const dispatch = useDispatch();

  const handleLogout = ({ key }) => {
    if (key === "logout") {
      dispatch(customerLogout()).then((res) => {
        if (res.payload.status) {
          localStorage.removeItem("customerToken");
          message.success(res.payload.message);
        }
      });
    }
  };
  const renderHeader = () => {
    const fullName = `${auth?.data?.firstName} ${auth?.data?.lastName}`;
    const itemCount = sumBy(cartItems, (item) => item?.quantity);
    return (
      <Header className="app-header">

        <img className="app-logo" style={{margin:"6px",height:"50px", width:"auto", marginLeft:"25px"}}
                src="https://iili.io/Hg7XXxj.png"
                
                alt="logo"
                loading="lazy"
              />
        <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={["login"]}
          onClick={handleLogout}
        >
          <Menu.Item key="home">
            <Link to="/">Home</Link>
          </Menu.Item>
          {auth?.status ? (
            <>
              <Menu.Item key="cart">
              <div className="cart-nav">
                <Link to="/cart">
                 
                  <Badge count={itemCount} offset={[8, 0]}>
                    <ShoppingCartOutlined style={{ fontSize: 20 }} />
                  </Badge>
                </Link> </div>
              </Menu.Item>
              <SubMenu 
                key="account"
                icon={<UserOutlined />}
                title={`Hi ${fullName}`}
              >
                <Menu.Item key="orderHistory">
                  <Link to="orderHistory">Order History</Link>
                </Menu.Item>
                <Menu.Item key="changePassword">
                  <Link to="changePassword">Change Password</Link>
                </Menu.Item>
                <Menu.Item key="logout">Logout</Menu.Item>
              </SubMenu>
            </>
          ) : (
            <>
              <Menu.Item key="login">
                <div className="login-nav">
                  <Link to="login">
                    Login
                  </Link>
                </div>
              </Menu.Item>
              <Menu.Item key="register">
                <div className="reg-nav">
                  <Link to="register">Register</Link>
                </div>
              </Menu.Item>
            </>
          )}
        </Menu>
      </Header>
    );
  };

  return (
    <BrowserRouter>
      <Layout>
        {renderHeader()}
        <Content className="app-content">
          <div className="app-wrapper">
            <Routes>
              <Route
                path="/"
                element={
                  <Auth>
                    <Home />
                  </Auth>
                }
              />
              <Route path="/forgotPassword" element={<ForgotPassord />} />
              <Route path="/resetPassword/:token" element={<ResetPassword />} />
              <Route
                path="/changePassword"
                element={
                  <Auth authRoute={true} redirectTo="/login">
                    <ChangePassword />
                  </Auth>
                }
              />
              <Route path="/cart" element={<Auth authRoute={true} redirectTo="/login">
                <Cart />
              </Auth>} />
              <Route path="/orderHistory" element={<Auth authRoute={true} redirectTo="/login">
                <OrderHistory />
              </Auth>} />
              <Route
                path="/login"
                element={
                  <Auth redirectTo="/">
                    <Login />
                  </Auth>
                }
              />
              <Route
                path="/register"
                element={
                  <Auth redirectTo="/">
                    <Register />
                  </Auth>
                }
              />
            </Routes>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          <Row>
            <Col xs={2} sm={4} md={6} lg={8} xl={10}>
              <Row>Organic Waste Connection</Row>
              <Row>Garbage Company</Row>
              <Row>No. 7</Row>
              <Row>Galle Road</Row>
              <Row>Collombo</Row>
              <Row>Sri Lanka</Row>
            </Col>
            <Col xs={20} sm={16} md={12} lg={8} xl={4}>
              <img className="app-logo" style={{margin:"6px",height:"80px", width:"auto", marginLeft:"25px"}}
                src="https://iili.io/Hg7XXxj.png"
                
                alt="logo"
                loading="lazy"
              />
            </Col>
            <Col xs={2} sm={4} md={6} lg={8} xl={10}>
              <Row>Social Media Links</Row>
              <Row></Row>
              <Row>Facebook</Row>
              <Row>Instagram</Row>
              <Row>Youtube</Row>
              <Row>LinkedIn</Row>
            </Col>
          </Row>
        </Footer>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
