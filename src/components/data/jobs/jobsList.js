const JobsList =  localStorage.getItem("jobpost") ? JSON.parse(localStorage.getItem("jobpost")) : [];

export default JobsList;
