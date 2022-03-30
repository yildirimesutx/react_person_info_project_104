import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styling from "./PersonInfo.module.scss"

const PersonInfo = () => {
const [fetchPerson, setFetchPerson] = useState({})

const [text1, setText1] = useState("")
const [text2, setText2] = useState("")

const ApiFetcher = async ()=>{
   try {const response = await axios.get("https://randomuser.me/api/")

   setFetchPerson(response)
} catch(e){
    console.log(e);
}

};

useEffect(()=>{
    ApiFetcher();
},[]);


  return (
    <div className={styling.card}>
    <nav className={styling.navbar}>
        <img src={fetchPerson?.data?.results[0]?.picture?.large} alt="passpart"  className={styling.image}/>
        <div className={styling.text1}>{text1 || setText1("My Name is")}</div>
        <div className={styling.text2}>{text2 || `${fetchPerson?.data?.results[0]?.name?.first}`}</div>
    </nav>    
        
    </div>
  )
}

export default PersonInfo;