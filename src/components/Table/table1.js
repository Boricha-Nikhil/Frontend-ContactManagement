import React,{useState,useEffect}  from 'react'
import Table from './table'
import axios from 'axios'; 
import Navbar from '../Navbar/navbar'
import {Container} from 'react-bootstrap';
import Loader from "react-loader-spinner";
import '../../container/contact.css'
import qs from 'qs'
import { SignalCellularNullOutlined } from '@material-ui/icons';

const Table1 = (props) => {
  
    const [contacts, setContacts] = useState([]);
    const [set, setStat] = useState([])
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(false);

    let  setIndividual = (contact)  =>{
        console.log("contact",contact)
        setContacts(contact)
        console.log(contact.select)
    }

    // let  setDone = (value)  =>{
    //     setStat(value);
    //     console.log(set)
    // }

    const retriveContacts = () => {
        setLoading(true);
        axios.get('http://localhost:3002/contact/get')
        .then(res => {
            setLoading(false);
            //console.log(res.data.contacts);
            let contactlist = res.data.contacts
            setContacts(
               
                contactlist.map(d => {
                    return {
                        select:false,
                        id:d._id,
                        name: d.name,
                        mobile_number:d.Phnumber,
                        image: d.image
                    }
                })
            );
        })
    }

    useEffect(() => {
        retriveContacts()
    },[])
    
    if (loading) {
        return  <Loader
        style={{textAlign:'center',marginTop: '70px'}}
        type="ThreeDots"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={1000} //3 secs
      />;
      }
    

    let filterContact = contacts.filter((contact) =>{
            return contact.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    })



    const deleteCustomerByIds = () => {
        let arrayids = [];

    filterContact.forEach(d => {
        if (d.select) {
            arrayids.push(d.id);
         }
         console.log("Done",arrayids)
    });
    if(arrayids.length  > 0)
    {
        
    axios.delete('http://localhost:3002/contact/deleteMultiple',{
        params: {
            arrayids
          },
          
    })
    .then(res=>{
        //props.history.push('/')
    }).catch(e=>{
        console.log(e)
    })
    window.location.reload()
    }
    else{
        alert('pls select id')
    }
    
    }
    let button =  <button
    className="btn btn-danger btn-sm m-2"
    onClick={deleteCustomerByIds}>Delete</button>
    console.log(contacts)
    // if(select === true){
            
    // }
   
return (
    <div>
        <Container>
        <Navbar />
       {button}
        <input style={{marginTop: '70px' ,marginBottom: '10px', textAlign:'center', marginLeft:'300px',width: '30%', height: '40px'}} 
        type="search" placeholder="Search By Name.." onChange={(event) => setSearch(event.target.value)}/>
        <table class="table table-hover">
        <thead>
            <tr>
            <th scope="col">
            <input
                type="checkbox"
                onChange={e => {
                  let value = e.target.checked;
                  setContacts(
                    filterContact.map(d => {
                      d.select = value;
                      return d;
                    })
                  );
                }}
              />
            </th>
            <th scope="col">Photo</th>
            <th scope="col">Name</th>
            <th scope="col">Phone No.</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
            </tr>
        </thead>
        <tbody>
            {/* {filterContact.map((contact) => ( */}
                <Table 
                    data={filterContact} 
                    setIndividual={setIndividual}
                    // setDone={setDone}
                    // setContacts={setContacts} 
                />
            {/* )) */}
            {/* } */}
        </tbody>
        </table>
        </Container>
        </div>
        )
}

export default Table1
