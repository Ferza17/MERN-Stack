import axios from 'axios';


// Barang Manipulation
export const CREATE_BARANG = "CREATE_BARANG"
export const GET_BARANG  = "GET_DATA";
export const DELETE_BARANG = "DELETE_BARANG";
export const UPDATE_BARANG = "UPDATE_BARANG";

// MESSEGE
export const ERROR_MESSEGE = "ERROR_MESSEGE";
export const SUCCES_MESSEGE = "SUCCES_MESSEGE";

// Get Barang
export const getAllBarang =() =>{
    return dispatch => {
        Promise.resolve(retriveData())
        .then(res=>{
            return dispatch({
                type: GET_BARANG,
                payload: res
            });
        });
    }
}


// Get Barang By Id
export const getBarangID = id =>{
    return dispatch =>{

    }
}


//Retirive Data
export const retriveData = () =>{
    return axios({
        method: "GET",
        baseURL: "http://localhost:5000/v1/api/barang",
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    })
    .then(items => {return items.data})
    .catch(err =>{
        return err;
    });
    
}

// Create new BArang
export const createNewBarang = item => {
    return dispatch=>{
        axios({
            method : 'POST',
            baseURL: "http://localhost:5000/v1/api/barang",
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
            data : item
        }).then(res=>{
            return(
                Promise.resolve(retriveData()).then(response=>{
                    return dispatch({
                        type : CREATE_BARANG,
                        payload : response
                    });
                })
            );
        }).catch(err=>{
            return dispatch({
                type : ERROR_MESSEGE,
                payload:{
                    isSucces : false
                }
            })
        })
    }
}

//DElETE Barang
export const deleteBarang = (id) =>{
   
    return dispatch =>{
        axios.delete('http://localhost:5000/v1/api/barang/'+id,{
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        }).then((response) => {
            return (
                Promise.resolve(retriveData()).then(res =>{
                    return dispatch({
                        type : DELETE_BARANG,
                        payload : res
                    });
                })
            );
        }).catch((error) => {
            return dispatch({
                type:ERROR_MESSEGE,
                payload:{
                    isSucces : false
                }
            })
        });
    }   
}
//Update Barang

export const updateBarang = (data) => {
    return dispatch=>{
        axios.put('http://localhost:5000/v1/api/barang/'+data.id,{
            nama : data.nama,
            harga : data.harga,
            jumlah : data.jumlah
        },{
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        }).then(response =>{
            return (
                Promise.resolve(retriveData().then(res=>{
                    return dispatch({
                        type : UPDATE_BARANG,
                        payload : res
                    });
                }))
            )
        }).catch(err =>{
            return dispatch({
                type : ERROR_MESSEGE,
                payload : err
            })
        })
    }
}