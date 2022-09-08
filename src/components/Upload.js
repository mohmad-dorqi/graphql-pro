import React,{useState} from 'react';


const Upload = () => {
    const [photoid,setPhotoId]=useState()
    //for get file
    const [file,setFile]=useState();
    //for upload file in cms graph
    const uploadPhoto=(file)=>{

        const form = new FormData();
        form.append('fileUpload', file);
        fetch(`https://api-us-east-1.hygraph.com/v2/cl7ldser116ku01uhgbip4zid/master/upload`, {
            method: 'POST',
            headers: {
              Authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NjI1MjY5MDEsImF1ZCI6WyJodHRwczovL2FwaS11cy1lYXN0LTEuaHlncmFwaC5jb20vdjIvY2w3bGRzZXIxMTZrdTAxdWhnYmlwNHppZC9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiZmNlNWQ4MWYtYmI2NC00YmZmLTk4NWMtNjMxNzUxMWI2NjlhIiwianRpIjoiY2w3cjVsYXUyNXl6bTAxdWhkbXR6Z2VhNCJ9.UKgi_BJLVQWi_0wRMSiIK1YIyOP1_ErNe6jLbN4HD-pNg8bAu_V22soOS8WssR6LG46hYeF4jOCTSqrq9Kk4pPzh9IpMDSFkbh2TO7mXUcIEKfIT1XscKxiyA3AWVxiXOmeJ_4d-VRhK5C2KiNI2griLcUHfCdhdhyMOv-7mcojBqxo1tmCszpaimoILtCLl9in2dXtnJ2qctXP-OunNdT4W0kSfxfvDWQj_xOAD5OiBvGB6x2v977aRDChI-q98wkOOsiuysRM0GMK1Uo_Sbdbi5uZfs76iK0RPfmwwf8VAYxboKHZX3t_gh5JSeRnKxO794-dgoozKhXDR2zrPT0zlY_W_EXiNmapu-khGrfWuOHl6xaIaxJg0Rl6JNLwyJsVbRRpnIj_vxsSb_hdSmVwkv8EdPD7ZHkvvo1RLm831Ldlt6JuzIQN04uzTTio2BUC2p2QSbCt5e5DPd-18PMoO5652oVal0_CuH5jOmAN5FTt-Cisq-dsE3TUMwcYBnIS7o6RpEl5hFYbU6BGWd9AfnSF9g9gNFsnd23aHd5Vk1BYFO0-1DGJUlN0jKzM1tsatKS3XlXfrJyoFFfSMg2MC-Sf6CZK5Q1CeX8Nv9Y_CXLuU_eZzi8ubq6NuqOsD70PtrdSF0vZYS7F4wZQCILEnK_zOzSavCGBfdizy2g8`,
            },
            body: form,
          }).then((response)=>response.json())
          .then((data)=>{
            console.log(data);
           
        
            
          })
          
    }
    
   
    
  
    const changeHandler=(event)=>{
        
               setFile(event.target.files[0]);
     
    }
   const send=  ()=>{
             uploadPhoto(file);

            
   }
  
    return (
        <div>
            <input onChange={changeHandler} type="file"  name="filename"/>
            
            <button onClick={send} >upload</button>
           

            
        </div>
    );
};

export default Upload;