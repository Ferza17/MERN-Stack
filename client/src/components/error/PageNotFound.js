import React, { Component } from 'react';
import { Container, Row, Card, Col } from 'react-bootstrap';
import notfound from '../../images/404.png'

 const PageNotFound = () =>{
    
        return(
            <React.Fragment>
                <Container>
                    <Row>
                        <Col md={{ span: 2, offset: 2 }}>
                            <Card style={{ width: 450, height: 400, marginTop:205, marginLeft:140 }}>
                                <Card.Body>
                                    <Row>
                                       <Col>
                                            <img src={notfound} style={{ width: 380, height: 350 }} alt="" />
                                       </Col>
                                       <Col>
                                            <p align="center"> <strong>We Sorry, Can't Reach the Page </strong> </p>
                                       </Col>
                                        
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        );
    
}

export default PageNotFound;