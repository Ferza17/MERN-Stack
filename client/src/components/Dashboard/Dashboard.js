import React, { Component } from 'react';
import {Table,Button} from 'react-bootstrap';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import Edit from './Edit';
import Add from './Add';
import { getAllBarang, getBarangID, createNewBarang, deleteBarang, updateBarang} from '../../actions/barang-action';


class Dashboard extends Component {
  
    constructor(props){
        super(props);
        this.props.getAllBarang();
        this.state = {
            isSucces : false,
            isLoading : false,
            isModalEdit: false,
            isModalNew : false,
            id:'',
            nama:'',
            harga:null,
            jumlah:null,
            items : []
        }
        this.handleDelete = this.handleDelete.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }


    componentWillMount(){
        this.state.items.sort();
    }
    

    componentWillReceiveProps(nextProps) {
        this.setState({
            isSucces: nextProps.isSucces,
            isLoading: nextProps.isLoading,
            isModalEdit: nextProps.isModalEdit,
            isModalNew : nextProps.isModalNew,
            items: nextProps.items
        });
    }

    handleDelete(event,id){
        event.preventDefault();
        this.props.onDeleteBarang(id);
    }

    handleAdd(event){
        event.preventDefault();
        this.setState({
            isModalNew : true
        });
    }

    handleEdit(event,id,nama,harga,jumlah){
        event.preventDefault();
        this.setState({
            isModalEdit : true,
            id: id,
            nama: nama,
            harga : harga,
            jumlah : jumlah
        });
    }


    render() {

        const items = this.state.items.map((barang,index) => {
            return(
                <tr key={barang._id}>
                    <td>{index+1}</td>
                    <td>{barang.nama} </td>
                    <td>{barang.harga}</td>
                    <td> {barang.jumlah} </td>
                    <td>
                        <span style={{ marginRight: 10 }}>
                            <Button type="button" className="btn btn-primary" onClick={(event) =>this.handleEdit(event,barang._id,barang.nama,barang.harga,barang.jumlah)}> Edit </Button>
                        </span>
                        <Button type="button" className="btn btn-danger" onClick={(event) => this.handleDelete(event,barang._id)}> Delete </Button>
                    </td>
                </tr>
            );
        });

        return (
            <div className="container" style={{ marginTop:40 }}>
                <Edit />
                <div style={{ marginBottom : 16 }}>
                    <Button variant="success" name="Add" onClick={event => this.handleAdd(event)} >Tambah Data</Button>
                </div>
                <Table responsive>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Nama</th>
                            <th>Harga</th>
                            <th>Jumlah</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {items}
                    </tbody>
                </Table>
                <Edit 
                id={this.state.id} 
                nama={this.state.nama} 
                harga={this.state.harga}
                jumlah={this.state.jumlah} 
                isModal={this.state.isModalEdit}
                 />

                 <Add 
                 isModal = { this.state.isModalNew}
                 />
            </div>
        );
    }
}






const mapStateToProps = state => ({
    isSucces: state.barang.isSucces,
    isLoading : state.barang.isLoading,
    items : state.barang.items,
    barang : state.barang
});

const MapActionToProps = (dispatch) => {
    
    return bindActionCreators({
        getAllBarang,
        onGetBarangID: getBarangID,
        onCreateNewBarang: createNewBarang,
        onDeleteBarang: deleteBarang, 
        onUpdateBarang: updateBarang
    }, dispatch);
}

export default connect(mapStateToProps, MapActionToProps)(withRouter(Dashboard));
