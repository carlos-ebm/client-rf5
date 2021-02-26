import React from "react";
import { Helmet } from "react-helmet";
import { Layout, Tabs, Space, Card } from "antd";
import { Redirect } from "react-router-dom";
import Logo from "../../../assets/img/png/logo.png";
import LoginForm from "../../../components/Admin/LoginForm";
import { getAccessTokenApi } from "../../../api/auth";

import "./SignIn.scss";

export default function SignIn() {
  const { Content } = Layout;
  const { TabPane } = Tabs;

  if (getAccessTokenApi()) {
    return <Redirect to="/admin" />;
  }

  return (
    <>
    <Helmet><title>Radio F5 | Login</title></Helmet>
    <Layout className="sign-in">
      <Content className="sign-in__content">
        <div className="sign-in__content-logo">
          <img src={Logo} />
        </div>
        <Card className="sign-in__content-card">
          <LoginForm />
        </Card>
      </Content>
    </Layout>
    </>
  );
}
