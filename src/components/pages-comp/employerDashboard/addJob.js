import React , { useState , useEffect } from "react";

const x = "Company-ABC";
function Addjob() {
    const [jobData, setJobData] = useState((localStorage.getItem("jobpost")) 
    ? JSON.parse(localStorage.getItem("jobpost")) 
    : []);
    const d = new Date();
    const [jobTitle, setJobTitle] = useState("");
    const [jobDesc,setJobDesc] = useState("");
    const [jobSkill, setJobSkill] = useState("");
    const [jobLoc,setJobLoc] = useState("");
    const [jobBudget, setJobBudget] = useState("");
    const btext = ".00$/hr";
    const [datePosted, setDatePosted] = useState(d.toDateString())
    const [id,setId] = useState(Date.now())
    const [logo,setLogo] = useState("https://source.unsplash.com/random/500x500?sig=1")
    // const [company,setCompany] = (x);
    // const checker = false;
    
   

    
   

    
    const postjobHandler = (e) => {
        e.preventDefault();
   
        setJobData(prevData =>  { return[...jobData,{id: id ,title: jobTitle,desc: jobDesc,skill: jobSkill ,salary:jobBudget,date: datePosted,company:x,logo:logo}]});
        setJobTitle("");
        setJobDesc("");
        setJobSkill("");
        setJobLoc("");
        setJobBudget("");
        setDatePosted(d.toDateString());
        setId(Date.now());
       
          // setJobData([...jobData,{id: id ,title: jobTitle,desc: jobDesc,skill: jobSkill, loc: jobLoc ,budget:jobBudget,date: datePosted}]);
          // setJobTitle("");
          // setJobDesc("");
          // setJobSkill("");
          // setJobLoc("");
          // setJobBudget("");
          // setDatePosted(d.toDateString());
          // setId(Date.now());
        
      
    
  }
    useEffect(() => {
        localStorage.setItem("jobpost", JSON.stringify(jobData),jobData)
    },[jobData])

    
    



  return (
    <div className="search">
      <form onSubmit={postjobHandler}>
      Job title <br/>
      <input  value={jobTitle} type="text" onChange={e => setJobTitle(e.target.value)} required/> <br/> <br/>
      Job Description  <br/>
      <textarea  rows="20" cols="50" value={jobDesc}  type="text" onChange={e => setJobDesc(e.target.value)}></textarea> <br/>

      Skills <br/>
      <select  value={jobSkill} onChange={e => setJobSkill(e.target.value)}>
        <option value="">---</option>
        <option value="Full Stack Development">
            Full Stack Development
        </option>
        <option value="Front-End Development">
            Front-End Development
        </option>
        <option value="Back-end Development">
            Back-end Development
        </option>

        </select>  <br/> <br/>
      {/* Location <br/>
      <input value={jobLoc} type="text" name="name" id="name" onChange={e => setJobLoc(e.target.value)}/> <br/> */}
      Budget <br/>
      <input value={jobBudget} type="number" name="budget" id="budget" onChange={e => setJobBudget(e.target.value)} required/> <br/>
      <button id={id} type="submit" >Post Job</button>
      </form>
      {jobData.map((val,key) => {
          
          return (
            <>
              <form>
               <div className="jobdisplayformat" key={val.id}>

              <p ><h3>{val.title}</h3><br/> {val.desc} <br/> {val.skill} <br /> {val.salary}{btext} </p>
              <p>post date: {val.date}</p>
              <button id={val.id} onClick={(e) => {
                e.preventDefault();
                let num = parseInt(e.target.id);
                const remove = [...jobData].filter((item) => {
                return item.id !== num;
              });
              setJobData(remove);
      

              }}>Delete</button>

              {/* <button id={val.id} onClick={(e) => {
                e.preventDefault();
                alert(val.id);
                let num = parseInt(e.target.id);
                {jobData.filter((val) => {
                  if(val.id === num){
                    setJobTitle(val.title);
                    setJobDesc(val.desc);
                    setJobSkill(val.skill);
                    setJobLoc(val.loc);
                    setJobBudget(val.budget);
                    setDatePosted (val.date +" edited");
                    setId(e.target.id);
                    

                  } 
                }
        
              )
      

              }}}>update</button> */}
              </div>
              </form>
            </>
          )
          
          })}
          <button type="submit" onClick={() =>  setJobData([])}>
            Clear All
          </button>

  


    </div>
    
  )
}

export default Addjob;
