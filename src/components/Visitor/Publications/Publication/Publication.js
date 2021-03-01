import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Card, Col, Row } from "antd";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import { Button } from "antd";
import {
  getPublicationsVisitorApi,
  getPublicationsMostviewedSectionVisitorApi,
} from "../../../../api/publication";
import moment from "moment";
import "moment/locale/es";

import ListMostViewed from "../../../../components/Visitor/MostViewed/ListMostViewed";

import { getImageApi } from "../../../../api/publication";

import "./Publication.scss";

import NoImage from "../../../../assets/img/png/no-image.png";

export default function Publications(props) {
  const { publication } = props;
  const [publicationsMostviewed, setPublicationsMostviewed] = useState([]);

  const [image, setImage] = useState(null);

  useEffect(() => {
    if (publication.image) {
      getImageApi(publication.image).then((response) => {
        setImage(response);
      });
    } else {
      setImage(null);
    }
  }, [publication]);

  useEffect(() => {
    getPublicationsMostviewedSectionVisitorApi(publication.section).then((response) => {
      setPublicationsMostviewed(response);
    });
  }, [publication]);

  return (
    <>
    <Helmet><title>{ `Radio F5 | ${ publication.title }` }</title></Helmet>
      <Row className="row-publication" >
      <Col className="row-publication__col-news" span={18} >
        <Card className="row-publication__col-news__card">
          <h1 className="row-publication__col-news__card__title">
            <b>{publication.title}</b>
          </h1>
          <h4>
            <i>
              {moment(publication.creationDate).calendar() +
                ` por ` +
                publication.author}
            </i>
          </h4>
          <img
            className="row-publication__col-news__card__image"
            alt="example"
            src={image ? image : NoImage}
          />
          <h1><b>{publication.subtitle}</b></h1>
          <div dangerouslySetInnerHTML={{ __html: publication.content }} />
        </Card>
      </Col>
      <Col className="row-publication__col-mostviewed" span={6} >
        <Card className="row-publication__col-mostviewed__card" title="Noticias más vistas">
          <ListMostViewed publicationsMostviewed={publicationsMostviewed} />
        </Card>
      </Col>
    </Row>
    </>
  );
}
