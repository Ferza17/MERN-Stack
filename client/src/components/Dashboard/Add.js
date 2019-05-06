import React from 'react'
import { Modal, Form, Button } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { createNewBarang,getAllBarang } from '../../actions/barang-action';


class Edit extends React.Component {
    constructor(props) {
        super(props);
        this.onCreate = this.onCreate.bind(this);
        this.onCancel = this.onCancel.bind(this);
        this.state = {
            nama: '',
            harga: 0,
            jumlah: 0,
            isModal: false
        }
    }





    componentWillReceiveProps(nextProps) {
        // console.log('Receive',nextProps);
        this.setState({
            isModal: nextProps.isModal
        });
    }




    onCreate(event) {
        event.preventDefault();
        let data = {
            nama: this.state.nama,
            harga: this.state.harga,
            jumlah: this.state.jumlah
        }
        this.props.onCreateNewBarang(data);
        this.setState({
            isModal: false
        });
    }

    onCancel(event) {
        event.preventDefault();
        this.props.onGetAllBarang();
    }


    render() {
        return (
            <div>
                <Modal show={this.props.isModal} onHide={() => this.props.isModal} >
                    <Modal.Header style={{ color: 'white', backgroundColor: '#3490dc' }}>
                        <Modal.Title>
                            Edit Barang
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group>
                                <Form.Label>Nama</Form.Label>
                                <Form.Control type="text"  onChange={e => this.setState({
                                    nama: e.target.value
                                })} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Harga</Form.Label>
                                <Form.Control type="text"  onChange={e => this.setState({
                                    harga: isNaN(e.target.value) ? e.target.value = 0 : parseInt(e.target.value)
                                })} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Jumlah</Form.Label>
                                <Form.Control type="text"  onChange={e => this.setState({
                                    jumlah: isNaN(e.target.value) ? e.target.value = 0 : parseInt(e.target.value)
                                })} />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button type="button" variant="primary" onClick={event => this.onCreate(event)} >Save</Button>
                        <Button type="button" variant="danger" onClick={event => this.onCancel(event)}>Cancel</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

const MapActionToProps = (dispatch) => {
    return bindActionCreators({
        onCreateNewBarang : createNewBarang,
        onGetAllBarang : getAllBarang
    }, dispatch);
}

export default connect(null, MapActionToProps)(Edit);