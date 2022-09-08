 import React,{useState} from 'react';
import { getPhotoId, uploadPhoto } from '../helpers/uploadPhoto';
 
 const ArticlePage = () => {
    const [file,setFile]=useState();
    const changeHandler=async(event)=>{
        
     await  setFile(event.target.files[0]);
     
    }
   const send=  ()=>{
       uploadPhoto(file);

     console.log(getPhotoId()); 
   }

    return (
        <div>
            
            <input onChange={changeHandler} type="file"  name="filename"/>
            <button onClick={send} >upload</button>
           
        </div>
    );
 };
 
 export default ArticlePage;

 