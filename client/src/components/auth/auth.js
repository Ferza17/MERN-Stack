import React, { Component } from 'react';
import marketing from '../../images/marketing.png';
import { Container, Row, Card, Col, FormGroup, Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {withRouter} from 'react-router-dom';


import ForgetPassword from './forgot';
import CreateAccount from './create';

import {  loginUser } from '../../actions/user-action';


class Auth extends Component{
    constructor(props){
        super(props);
        this.login = this.login.bind(this);
        this.state={
            email: 'null',
            password: 'null'
        }
    }

    login(event){
        event.preventDefault();
        this.props.onloginUser(this.state,this.props);
    }

    render(){
        return(
            <React.Fragment>
                <Container>
                    <Row>
                        <Col md={{ span: 6, offset: 2 }}>
                            <Card style={{ width: '750px', height: '400px', marginTop: '205px' }}>
                                <Card.Body>
                                    <Row>
                                        <Col>
                                            <img src={marketing} style={{ width: 350, height: 350 }} alt="" />
                                        </Col>
                                        <Col>
                                            <Form style={{ marginTop: '30px', width: '300px' }}>
                                                <Row>

                                                    <Col sm="12" md={{ span: 12 }}>
                                                        <FormGroup>
                                                            <Form.Label><b>Email Address</b></Form.Label>
                                                            <Form.Control type="email" placeholder="Enter Email" id="email" name="email" 
                                                                onChange={e => this.setState({ email: e.target.value  })} />
                                                            <Form.Text className="text-muted">
                                                                We'll Never share your email with anyone else.
                                                            </Form.Text>
                                                        </FormGroup>
                                                    </Col>

                                                    <Col sm="12" md={{ span: 12 }}>
                                                        <FormGroup>
                                                            <Form.Label><b>Password</b></Form.Label>
                                                            <Form.Control type="password" id="password" name="password" placeholder="Enter Password" 
                                                                onChange={e => this.setState({ password: e.target.value })}  />
                                                        </FormGroup>
                                                    </Col>

                                                    <Col sm="12" md={{ span: 5 }}>
                                                        <ForgetPassword />
                                                    </Col>

                                                    <Col sm="12" md={{ span: 6, offset: 1 }} >
                                                        <Button variant="primary" style={{ marginLeft: 60, height: 50 }} onClick={this.login} > 
                                                            Sign in </Button>
                                                    </Col>

                                                    <Col sm="12" md={{ offset: 1, span: 10 }}>
                                                        <CreateAccount />
                                                    </Col>
                                                </Row>
                                            </Form>
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
}


let mapStateToProps = (state) => {
    
    return{
        users: state.users
    };
    
};


let MapActionToProps = (dispatch) => {
    return bindActionCreators({
        onloginUser: loginUser
    },dispatch);
}


export default connect(mapStateToProps, MapActionToProps)(withRouter(Auth)); 