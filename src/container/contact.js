import React,{useState,useEffect} from 'react'
import {Container, Card,Button, Form} from 'react-bootstrap'
//import { FormControl ,InputLabel, Input, FormHelperText} from '@material-ui/core';
import './contact.css'
import  axios from 'axios'
import Navbar from '../components/Navbar/navbar'

const Contact = (props) => {

    //const [data,setData] = useState([]);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [status, setStatus] = useState('');
    const [error, setError] = useState('');
    const [file,setFile] = useState('');
   // const [error1, setError1] = useState('');

    const craeteContact = (e) => {
        e.preventDefault();
        const formData = new FormData()
        formData.append('image',file);
        formData.append('name',name);
        formData.append('Phnumber',phone)
        // console.log(file)
        // let data= {
        //     name: name,
        //     Phnumber: phone,
        //     image: formData
        // }
        console.log("Done",formData)
        axios.post('http://localhost:3002/contact/add',formData)
        .then(res => {
            console.log(res)
            setStatus(res.status);
            if(res.status === 200){
              props.history.push('/')
            }
            if(res.status === 201){
            setError(res.data.message[0].msg)
          }

            }
        )

    }

    // const onFileUpload = () => {
    
    //   // Create an object of formData
     
    
    //   // Details of the uploaded file
    //   console.log(file);
    //   return formData
    
    //   // Request made to the backend api
    //   // Send formData object
    //  // axios.post("api/uploadfile", formData);
    // };

    return (
        <div>
            <Container>
              <Navbar />
       <div className="card border-1 shadow set">
      <div className="card-header">Add a Contact</div>
      <div className="card-body">
        <form onSubmit={(e) => craeteContact(e)} enctype="multipart/form-data">
        {/* {status === 201 ? <h5 style={{color:'red', textAlign:'center'}}>Please enter valid name and phone Number</h5> : null} */}
        {status === 200 ? <h5 style={{color:'green', textAlign:'center'}}>Contact added Succesfully</h5> : null}
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Name"
              value={name}
              onChange={(e) => { 
                  setName(e.target.value)
                  if(status===200) { setStatus("") }
                  if(status===201) { setError("")}
                
                }
                }
            />
           
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Phone Number"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value)
                if(status===200) { setStatus("") }
                if(status===201) { setError("")}
              
              }}
            />
             {error ? <h5 style={{color: 'red'}}>{error}</h5> : null}
          </div>
          <div>
          <input type="file" onChange={(event) => setFile(event.target.files[0])} />
          </div>
         <button className="btn btn-primary" type="submit">
            Create Contact
          </button>
        </form>
      </div>
    </div>
            </Container>
        </div>
    )
}

export default Contact
