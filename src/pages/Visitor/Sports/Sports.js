import React, { useEffect, useState} from "react";
import "./Sports.scss";
import News from "../../../components/Visitor/News";
import ListMostViewed from "../../../components/Visitor/MostViewed/ListMostViewed";
import ListSections from "../../../components/Visitor/Sections/ListSections";
import {getPublicationsSectionVisitorApi, getPublicationsMostviewedSectionVisitorApi} from "../../../api/publication";
import { Helmet } from "react-helmet";

import { Row, Col, Card } from "antd";

export default function Sports() {
  const [publications, setPublications] = useState([]);
  const [publicationsMostviewed, setPublicationsMostviewed] = useState([]);

  useEffect(() => {
    getPublicationsSectionVisitorApi(4).then((response) => {
      setPublications(response);
    });
    getPublicationsMostviewedSectionVisitorApi(4).then((response) => {
      setPublicationsMostviewed(response);
    });
  },[]);

  return (
    <>
      <Helmet><title>Radio F5 | Deportes</title></Helmet>
      <Row className="row-sports">
        <Col className="row-sports__left-news" span={18}>
          <ListSections publications={publications}/>
        </Col>
        <Col className="row-sports__right-news" span={6}>
          <Card className="row-sports__right-news__ads">
            <h1>Anuncios</h1>
          </Card>
          <Card className="row-sports__right-news__related" title="Noticias más vistas">
            <ListMostViewed publicationsMostviewed={publicationsMostviewed}/>
          </Card>
          </Col>
      </Row>
      <Card className="sponsors">
        <h1>Patrocinadores</h1>
      </Card>
    </>
  );
}
