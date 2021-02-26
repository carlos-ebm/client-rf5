import React, { useEffect, useState} from "react";
import "./International.scss";
import News from "../../../components/Visitor/News";
import ListMostViewed from "../../../components/Visitor/MostViewed/ListMostViewed";
import ListSections from "../../../components/Visitor/Sections/ListSections";
import {getPublicationsSectionVisitorApi, getPublicationsMostviewedSectionVisitorApi} from "../../../api/publication";
import { Helmet } from "react-helmet";


import { Row, Col, Card } from "antd";

export default function International() {
  const [publications, setPublications] = useState([]);
  const [publicationsMostviewed, setPublicationsMostviewed] = useState([]);

  useEffect(() => {
    getPublicationsSectionVisitorApi(2).then((response) => {
      setPublications(response);
    });
    getPublicationsMostviewedSectionVisitorApi(2).then((response) => {
      setPublicationsMostviewed(response);
    });
  },[]);

  return (
    <>
      <Helmet><title>Radio F5 | Internacional</title></Helmet>
      <Row className="row-international">
        <Col className="row-international__left-news" span={18}>
          <ListSections publications={publications}/>
        </Col>
        <Col className="row-international__right-news" span={6}>
          <Card className="row-international__right-news__ads">
            <h1>Anuncios</h1>
          </Card>
          <Card className="row-international__right-news__related" title="Noticias más vistas">
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
