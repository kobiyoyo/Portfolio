import React from 'react';
import {
  Row, Col, Card, CardImg, CardText, CardBody,
  CardTitle,
} from 'reactstrap';

const Blog = () => (

  <section className="blogpage" id="blog">
    <h2 className="blogpage__title title">BLOG</h2>
    <Row>
      <Col sm="12" md="6">
        <Card>
          <CardImg top width="100%" className="blogpage__img" src={require('../images/artione.jpeg')} alt="one" />
          <CardBody>
            <CardTitle><b>An in-depth look at Cardinality & Modality in Database Relationships.</b></CardTitle>

            <CardText>In database design, cardinality and modality are two modelling concepts which are used for analyzing entities, attributes and relationship structure in the database. This article aims to give a clear understanding of what cardinality and modality are all about.</CardText>
            <a href="https://medium.com/analytics-vidhya/an-in-depth-look-at-database-relationships-cardinality-modality-a3d6bba0ee1e" target="_blank" rel="noopener noreferrer">Read More</a>
          </CardBody>
        </Card>
      </Col>
      <Col sm="12" md="6">
        <Card>
          <CardImg top width="100%" className="blogpage__img" src={require('../images/second.jpeg')} alt="one" />
          <CardBody>
            <CardTitle><b>Knock as an Authentication Solution for Your Rails API</b></CardTitle>

            <CardText>I’m going to give you detailed steps on how to get knock gem up and running in your Rails application. The idea for this article stems from the fact that I couldn’t find a well-defined and up-to-date resource on how to implement a Rails API token authentication. For this tutorial, I will be using the latest version (6.0) of Ruby on Rails.</CardText>
            <a href="https://medium.com/better-programming/knock-as-an-authentication-solution-for-rails-api-acfaef5b25" target="_blank" rel="noopener noreferrer">Read More</a>
          </CardBody>
        </Card>
      </Col>

    </Row>
  </section>

);

export default Blog;
