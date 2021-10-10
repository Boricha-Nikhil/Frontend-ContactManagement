import axios from 'axios';
import React,{useState,useEffect} from 'react'
import {Container} from 'react-bootstrap'
import { useParams,useLocation } from "react-router-dom";
import '../../container/contact.css';
import Navbar from '../Navbar/navbar'

const Edit = (props) => {

  
  let {id,names,Phnumbers} = useParams();
    const [name, setName] = useState(names);
    const [phone, setPhone] = useState(Phnumbers);
    const [message, setMessage] = useState("")
   // const [message1, setMessage1] = useState("")
    const [status, setStatus] = useState("")
    const [error, setError] = useState('');
    const [file,setFile] = useState('');
    

    // useEffect(() => {
    //     axios.get(`http://localhost:3002/contact/get/${_id}`)
    //     .then(res => {
    //         //console.log(res.data.contact.name);
    //         setName(res.data.contact.name);
    //         setPhone(res.data.contact.Phnumber)
            
    //     })
    // })

    const onUpdateContact = (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append("name",name)
        data.append("Phnumber",phone)
        data.append("image",file)
        // let data ={
        //     name: name,
        //     Phnumber: phone
        // }
        axios.put(`http://localhost:3002/contact/update/${id}`,data)
        .then(res => {
            console.log(res);
            setStatus(res.status);
            if(res.status==200){
              props.history.push('/')
            }
            if(res.status==201){
              setError(res.data.message.msg)
            }

        })
    }

    return (
        <div>
            <Container>
            <Navbar />
            <div className="card border-1 shadow set">
              {status === 201 ? <h5 style={{color:'red',textAlign:'center'}}>Please check either name or Number is invalid</h5> : null }
      <div className="card-header">Add a Contact</div>
      <div className="card-body">
        <form onSubmit={(e) => onUpdateContact(e)
                
        }>
          <div className="form-group">
            <input
              type="text"             
              className="form-control"
              placeholder="Enter Your Name"
              value={name}
              onChange={(e) => {setName(e.target.value)
                    setMessage("");
                          }            }
           required />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Phone Number"
              value={phone}
              onChange={(e) => {setPhone(e.target.value)
                setMessage("")}
            }
            required />
            {error ? <h4>{error}</h4> : null}
          </div>
          <div>
          <input type="file" onChange={(event) => setFile(event.target.files[0])} />
          </div>
          <button className="btn btn-warning" type="submit">
            Update Contact
          </button>
          {message ? <h5 style={{color:'green', textAlign: 'center'}}>{message}</h5> : null}
          
        </form>
      </div>
    </div>
    </Container>
        </div>
    )
}

export default Edit
