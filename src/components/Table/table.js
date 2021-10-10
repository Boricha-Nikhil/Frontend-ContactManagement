import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import { Checkbox, Button } from "antd";

function Table (data,setIndividual)  {
  const [datas, setData] = useState([])
  setIndividual=(datas)
  
  let url="http://localhost:3002/";
 //console.log(data.data)
  //let contact= data.data;
  console.log(datas)
  // const { name, mobile_number, id, select } = data.data;
  return data.data.map( d=>(
    
    <tr key={d.id}>
      <td>
      <input
          type="checkbox"
          checked={d.select}
          onChange={e => {
            let value = e.target.checked
            console.log("value",value)
            setData(
              data.data.map(sd => {
                // console.log("compare",sd.id,"compare other",d.id)
                // console.log()
                if(sd.id == d.id){
                  sd.select = value
                }        
                // console.log("sd",sd)    
                return sd
                // props.setContacts(sd)
              })
            );
          }}
          
        />
      </td>
      <td><img src={url+d.image} style={{height: '60px',width: '60px',borderRadius: '50%'}}/></td>
      <td>{d.name}</td>
      <td>{d.mobile_number}</td>
      <td className="actions">
        <Link to={`/contacts/edit/${d.id}/${d.name}&&${d.mobile_number}`}>
          <span className="material-icons mr-2">edit</span>
        </Link>
      </td>
      <td>
        <Link to={`/contacts/delete/${d.id}`}>
          <span className="material-icons  text-danger">remove_circle</span>
        </Link>
      </td>
    </tr>
  ))
};

export default Table;
