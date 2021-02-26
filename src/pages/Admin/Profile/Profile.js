import React, { useState, useEffect } from "react";
import { userInfo } from "os";
import { Helmet } from "react-helmet";
import { getAccessTokenApi } from "../../../api/auth";
import { getUserApi } from "../../../api/admin";
import EditProfileForm from "../../../components/Admin/EditProfileForm";
import { Layout, Tabs, Card } from "antd";
import { ADMIN_ID } from "../../../utils/constants";

export default function Profile() {

  return (
    <>
    <Helmet>
      <title>Radio F5 | Perfil</title>
    </Helmet>
    <Card className="user-editprofile__card">
      <EditProfileForm />
    </Card>
    </>
  );
}
