import React, { useState } from 'react'
import styling from "./ButtonTable.module.scss"
import {useId} from "react"

const ButtonTable = ({apiFetcher, fetchPerson}) => {
 
    const [show,setShow] = useState(false)
    const [addListToTable, setAddListToTable] = useState([])
     const id = useId();

console.log(addListToTable)

const addList = () =>{
  setAddListToTable([
      ...addListToTable,
  {
        Name: `${fetchPerson?.name?.title} ${fetchPerson?.name?.first} ${fetchPerson?.name?.last}`,
        Email:  `${fetchPerson?.email}`,
        Phone:  `${fetchPerson?.phone}`,
        Age:    `${fetchPerson?.dob?.age}`,
  }
]);
};
  return (
      <div>
    <div className={styling.buttons}>
     <button className={styling.newuser} onClick={apiFetcher}>NEW USER</button>
     <button className={styling.adduser} onClick={()=>
         setShow(true)
    }>ADD USER</button>
    </div>
    <table className={styling.table}>
 {show ?(
   <thead>
       <tr  key={id} className={styling.title}>
       <th>FirstName</th>
       <th>Email</th>
       <th>Phone</th>
       <th>Age</th>
      </tr>
   </thead> 
   )
:(null)}
      <tbody>
  {addListToTable?.map((info,index)=>(
    <tr key={index}>
      <td>{info.Name})</td>
      <td>{info.Email}</td>
      <td>{info.Phone}</td>
      <td>{info.Age}</td>
    </tr>
  ))}
      </tbody>
     </table>
  </div>
  )
}

export default ButtonTable

