import React from 'react';
import { Modal, Row, Col,Button } from 'react-bootstrap';
import {FormField,TextInput} from 'grommet';
import forgotImage from '../../images/forgot_password.png';

export default class Forgot extends React.Component{
    constructor(props, context) {
        super(props, context)
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.sendMail = this.sendMail.bind(this);

        this.state = {
            show: false,
            email: '',
            isLoading: true,
        };
    }

    componentDidMount() {
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    sendMail() {
        alert(this.state.email);
    }
    render() {
        return (
            <React.Fragment>
                <small style={{ cursor: 'pointer', color: '#3490dc' }} onClick={this.handleShow}>Forgot Password?</small>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton style={{ backgroundColor: '#3490dc' }}>
                        <Modal.Title style={{ color: 'white' }}><b>Forgot Password</b></Modal.Title>
                    </Modal.Header>
                    <Modal.Body >
                        <Row>
                            <Col sm="12" md={{ span: 4, offset: 3 }} lg={{ span: 4, offset: 3 }} xs={{ span: 3, offset: 3 }} >
                                <img src={forgotImage}  style={{ width: '250px', height: '250px', margin: '0px' }} />
                            </Col>
                            <Col sm="12" md="12" lg="12" xs="12" >
                                <p className="text-center">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus doloribus natus eligendi hic, molestiae unde laboriosam. Incidunt sit molestias eligendi!
                                </p>
                            </Col>
                            <Col sm={{ span: 6, offset: 3 }} md={{ span: 6, offset: 3 }} lg={{ span: 6, offset: 3 }} xs={{ span: 6, offset: 3 }} >
                                {/* <Form.Group controlId="formEmail">
                                    <Form.Control type="email" placeholder="Enter Email"
                                        value={this.state.email} onChange={e => this.setState({ email: e.target.value })} />
                                </Form.Group> */}
                                <FormField label="">
                                    <TextInput  type="email" placeholder="Enter Email" value={this.state.email} onChange={e => this.setState({ email: e.target.value })} />
                                </FormField>
                            </Col>
                            <Col sm="12" md={{ span: 6, offset: 3 }} lg={{ span: 6, offset: 3 }} xs={{ span: 6, offset: 3 }} >
                                <Button variant="primary" onClick={this.sendMail} style={{ marginBottom: 50, width: 218, height: 37 }}> Submit </Button>
                            </Col>
                        </Row>
                    </Modal.Body>
                </Modal>
            </React.Fragment>
        );
    }
}