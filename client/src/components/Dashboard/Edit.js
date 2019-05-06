import React from 'react'
import {Modal,Form, Button} from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {updateBarang,getAllBarang } from '../../actions/barang-action';


class Edit extends React.Component {
    constructor(props) {
        super(props);
        this.onUpdate = this.onUpdate.bind(this);
        this.onCancel = this.onCancel.bind(this);
        this.state={
            id:'',
            nama:'',
            harga:0,
            jumlah:0,
            isModal : false
        }
    }



    

    componentWillReceiveProps(nextProps){
        // console.log('Receive',nextProps);
        this.setState({
            id: nextProps.id,
            nama : nextProps.nama,
            harga : nextProps.harga,
            jumlah : nextProps.jumlah,
            isModal : nextProps.isModal
        });
    }




    onUpdate(event){
        event.preventDefault();
        let data = {
            id: this.state.id,
            nama:this.state.nama,
            harga: this.state.harga,
            jumlah : this.state.jumlah
        }
        this.props.onUpdateBarang(data);
        this.setState({
            isModal : false
        });
    }

    onCancel(event){
        event.preventDefault();
       this.props.onGetAllBarang();
    }


    render() {
        return (
            <div>
                <Modal show={this.props.isModal} onHide={() => this.props.isModal } >
                    <Modal.Header style={{ color: 'white', backgroundColor: '#3490dc' }}>
                        <Modal.Title>
                            Edit Barang
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group>
                                <Form.Label>Nama</Form.Label>
                                <Form.Control type="text" value={this.state.nama} onChange={e=>this.setState({
                                    nama : e.target.value
                                })} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Harga</Form.Label>
                                <Form.Control type="text" value={isNaN(this.state.harga) ? 0 : this.state.harga} onChange={e => this.setState({
                                    harga: isNaN(e.target.value) ? e.target.value = 0 : parseInt(e.target.value)
                                })} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Jumlah</Form.Label>
                                <Form.Control type="text" value={isNaN(this.state.jumlah) ?0: this.state.jumlah }  onChange={e => this.setState({
                                    jumlah: isNaN(e.target.value)  ? e.target.value = 0 : parseInt(e.target.value)
                                })} />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button type="button" variant="primary" onClick={event => this.onUpdate(event)} >Save</Button>
                        <Button type="button" variant="danger" onClick={event=>this.onCancel(event)}>Cancel</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

const MapActionToProps = (dispatch) =>{
    return bindActionCreators({
        onGetAllBarang : getAllBarang,
        onUpdateBarang: updateBarang
    },dispatch);
}

export default connect(null,MapActionToProps)(Edit);