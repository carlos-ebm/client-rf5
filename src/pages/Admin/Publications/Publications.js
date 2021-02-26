import React, {useState, useEffect} from "react";
import { Helmet } from "react-helmet";
import { Menu, Button, Table } from "antd";
import ListPublications from "../../../components/Admin/Publications/ListPublications";
import { getPublicationsApi } from "../../../api/publication";

import { getAccessTokenApi } from "../../../api/auth";

import "./Publications.scss";

export default function Publications() {
  const [ publications, setPublications] = useState([]);
  const [ reloadPublications, setReloadPublications ] = useState(false);
  const token = getAccessTokenApi();

  useEffect( () => {
    getPublicationsApi(token).then(response => {
      setPublications(response.publications);
    });
    setReloadPublications(false);
  }, [token, reloadPublications]);
  
  return (
    <>
    <Helmet><title>Radio F5 | Publicaciones</title></Helmet>
      <ListPublications publications={publications} setReloadPublications={setReloadPublications} />
    </>
  );
}


