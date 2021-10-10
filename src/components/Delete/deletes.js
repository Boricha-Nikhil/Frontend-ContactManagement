import React, { useEffect,useState } from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import Navbar from '../Navbar/navbar'
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css' 

const Deletes = (props) => {

    const [delTask, setDelTask] = useState(false)

    let {id} = useParams();

    // if(window.confirm("Do you really want to delete this Number?"))
    //                 // if (confirmBox === true) {
        const handleDeleteTask = () => {
            axios.delete(`http://localhost:3002/contact/delete/${id}`)
            .then(res => {
                console.log(res);
                props.history.push('/');
            })
        }
                      
        const submit = () => {
            confirmAlert({
              title: 'Confirm to submit',
              message: 'Are you sure to do this Contact.',
              buttons: [
                {
                  label: 'Yes',
                  onClick: () => handleDeleteTask()
                },
                {
                  label: 'No',
                  onClick: () => {  
                    props.history.push('/')}
                }
              ]
            })
          };     

    return (

        <div>
<div className="container">
    <Navbar />
        <button onClick={submit()}></button>
      </div>
        </div>
    )
}

export default Deletes
