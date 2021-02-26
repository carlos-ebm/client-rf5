import React, { useEffect, useState } from "react";
import "./National.scss";
import News from "../../../components/Visitor/News";
import ListMostViewed from "../../../components/Visitor/MostViewed/ListMostViewed";
import ListSections from "../../../components/Visitor/Sections/ListSections";
import { getPublicationsSectionVisitorApi, getPublicationsMostviewedSectionVisitorApi } from "../../../api/publication";
import { Helmet } from "react-helmet";

import { Row, Col, Card } from "antd";

export default function National() {
  const [publications, setPublications] = useState([]);
  const [publicationsMostviewed, setPublicationsMostviewed] = useState([]);

  useEffect(() => {
    getPublicationsSectionVisitorApi(1).then((response) => {
      setPublications(response);
    });
    getPublicationsMostviewedSectionVisitorApi(1).then((response) => {
      setPublicationsMostviewed(response);
    });
  }, []);

  return (
    <>
        <Helmet><title>Radio F5 | Nacional</title></Helmet>
        <Row className="row-national">
          <Col className="row-national__left-news" span={18}>
            <ListSections publications={publications} />
          </Col>
          <Col className="row-national__right-news" span={6}>
            <Card className="row-national__right-news__ads">
              <h1>Anuncios</h1>
            </Card>
            <Card className="row-national__right-news__related" title="Noticias más vistas" >
              <ListMostViewed publicationsMostviewed={publicationsMostviewed}/>
            </Card>
          </Col>
        </Row>
        <Row>
            <Card className="sponsors">
              <h1>Patrocinadores</h1>
            </Card>
        </Row>
      
    </>
  );
}
