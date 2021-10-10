import React, { Component } from 'react'
import Navbar from '../Navbar/navbar'
import axios from 'axios'
import {Container} from 'react-bootstrap'


export default class edits extends Component {
   
    constructor(){
        super();
        let {name} =  this.props.match.params;
        this.state={ 
            name: name,
            //phone:Phnumb
        }
    }

    // componentWillMount(){
    //     let {_id} = ;
    //     axios.get(`http://localhost:3002/contact/get/${_id}`)
    // .then(res => {
    //     //console.log(res.data.contact.name);
    //     this.setState({
    //         name: res.data.name
    //     });
    //     // setPhone(res.data.contact.Phnumber)
        
    // })   
    // }

    
    render() {
       
        // this.setState({
        //     name: nam
        // })
       
    //  onUpdateContact = (e) => {
    //         e.preventDefault();
    //         let data ={
    //             name: this.state.name,
    //             //Phnumber: phone
    //         }
    //         axios.put(`http://localhost:3002/contact/update/${_id}`,data)
    //         .then(res => {
    //             console.log(res);
    //             // setStatus(res.status);
    //             if(res.status==200){
    //               this.props.history.push('/')
    //             }
    
    //         })
    //     }



        return (
            <div>
                <div>
            <Container>
            <Navbar />
            <div className="card border-1 shadow set">
              {/* {status === 201 ? <h5>Please enter valid name and Number</h5> : null } */}
      <div className="card-header">Add a Contact</div>
      <div className="card-body">
        <form>
          <div className="form-group">
            <input
              type="text"             
              className="form-control"
              placeholder="Enter Your Name"
              value={this.state.name}
              onChange={(e) => { 
                  this.setState({
                    name:e.target.value
              })
            }}
            />
          </div>
          {/* <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Phone Number"
              value={phone}
              onChange={(e) => {setPhone(e.target.value)
                setMessage("")}
            }
            /> */}
          {/* </div> */}
          <button className="btn btn-warning" type="submit">
            Update Contact
          </button>
          {/* {message ? <h5 style={{color:'green', textAlign: 'center'}}>{message}</h5> : null} */}
        </form>
      </div>
    </div>
    </Container>
        </div>
            </div>
        )
    }
}
