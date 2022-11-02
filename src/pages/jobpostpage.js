import React from 'react'


function Jobpostpage() {

    let list = localStorage.getItem("jobpost") ? JSON.parse(localStorage.getItem("jobpost")) : [];
    let id = localStorage.getItem("jobpostIDselected") ? JSON.parse(localStorage.getItem("jobpostIDselected")) : [];
    
  return (
    <div>
    
      {list.filter((val) => {
          const num = parseInt(id);
          if(val.id === num){
            return val;
          } 
        }

      ).map((val,key) => {
          
          return (
           
            
            <div key={key}>
              <p>{val.title} <br/> {val.desc}</p>
            </div>
     
          );
          })}
   
    </div>
  )
}

export default Jobpostpage
