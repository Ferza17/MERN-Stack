import React from 'react';
import { Modal, Row, Col, Form, Button } from 'react-bootstrap';
import {bindActionCreators} from 'redux';

import {updateUser} from '../../actions/user-action';

import { connect } from 'react-redux';



class CreateAccount extends React.Component {
    constructor(props) {
        super(props)
        this.onUpdateUser = this.onUpdateUser.bind(this);
        this.state = {
            username: '',
            email: '',
            password: '',
            address: '',
            condition:{
                loading:false,
                access:false
            },
            confirm: '',
        };
    }
    

    onUpdateUser(event) {
        event.preventDefault();
        if(this.state.password === this.state.confirm){
            const data = {
                username: this.state.username,
                email: this.state.email,
                password: this.state.password,
                address: this.state.address,
                condition: {
                    loading: true
                },
            };
            this.props.onUpdateUser(data);
        }else{
            console.log('Password is not match');
        }
    }

    render() {
        return (
            <React.Fragment>
                <p style={{ marginTop: '70px' }}>
                    <small>
                        Don't Have an Account ? <span onClick={() => this.setState({ show: true })} style={{ cursor: 'pointer', color: '#3490dc' }}>Create Account.</span>
                    </small>
                </p>
                <Modal show={this.state.show} onHide={() => this.setState({ show: false })}>
                    <Modal.Header closeButton style={{ color: 'white', backgroundColor: '#3490dc' }}>
                        <Modal.Title >
                            <Row>
                                <Col sm="12" md="12" lg="12" xs="12" >
                                    <b>Create Account</b>
                                </Col>
                                <Col sm="12" md="12" lg="12" xs="12">
                                    <small>Please fill in this form to create an account</small>
                                </Col>
                            </Row>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Form>
                            <Form.Group controlId="usernameCreate">
                                <Form.Label><b>Username</b></Form.Label>
                                <Form.Control type="text" value={this.state.username} placeholder="Enter Username"
                                    onChange={e => this.setState({ username: e.target.value })} />
                            </Form.Group>

                            <Form.Group controlId="emailCreate">
                                <Form.Label><b>Email Address</b></Form.Label>
                                <Form.Control type="email" placeholder="Enter Email"
                                    value={this.state.email} onChange={e => this.setState({ email: e.target.value })} />
                            </Form.Group>

                            <Form.Row>
                                <Form.Group as={Col} controlId="passwordCreate">
                                    <Form.Label><b>Password</b></Form.Label>
                                    <Form.Control type="password" placeholder="Enter Password"
                                        value={this.state.password} onChange={e => this.setState({ password: e.target.value })} />
                                </Form.Group>

                                <Form.Group as={Col} controlId="confirmCreate">
                                    <Form.Label><b>Confirm Password</b></Form.Label>
                                    <Form.Control type="password" placeholder="Confirm Password"
                                        value={this.state.confirm} onChange={e => this.setState({ confirm: e.target.value })} />

                                </Form.Group>
                            </Form.Row>

                            <Form.Group controlId="addressCreate">
                                <Form.Label><b>Address</b></Form.Label>
                                <Form.Control type="text" placeholder="Enter Address"
                                    value={this.state.address} onChange={e => this.setState({ address: e.target.value })} />
                            </Form.Group>
                            <Col md={{ offset: 7, span: 6 }}>
                                <Button variant="secondary" onClick={() => this.setState({ show: false })} style={{ marginRight: 5 }}>Close</Button>
                                <Button variant="primary" onClick={this.onUpdateUser}> Save changes</Button>
                            </Col>
                        </Form>
                    </Modal.Body>
                </Modal>
            </React.Fragment>
        );
    }    
}

let mapStateToProps = (state, props) => {

    return {
        users: state.users,
        userPlusProps: `${state.users} ${props.PropsAuth}`
    };

};

let MapActionToProps = (dispatch) => {
    return bindActionCreators({
        onUpdateUser: updateUser
    },dispatch);
};


export default connect(mapStateToProps, MapActionToProps)(CreateAccount);
