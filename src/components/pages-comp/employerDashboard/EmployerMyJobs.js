import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Paper,
  Stack,
  Typography,
  Button,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import WorkRoundedIcon from "@mui/icons-material/WorkRounded";
import BookmarkRoundedIcon from "@mui/icons-material/BookmarkRounded";
import ApprovalRoundedIcon from "@mui/icons-material/ApprovalRounded";
import DoDisturbOnRoundedIcon from "@mui/icons-material/DoDisturbOnRounded";
import TextField from "@mui/material/TextField";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const EmployerMyJobs = () => {
  const navigate = useNavigate();
  const [deleteValue, setDeleteValue] = useState('') /// value is empty string

    // let elements = localStorage.getItem('companies') ? JSON.parse(localStorage.getItem('companies')) : [];
    
    // alert(elements)

   
   

    //  alert(compDelete)


    


  const handleDelete = (event) => {
    event.preventDefault();

    const deleteAccount = event.target.delete.value;
    const compDelete = JSON.parse(localStorage.getItem("companies"));
    console.log(deleteAccount === compDelete.password)
   
    if(deleteAccount === compDelete.password) 
      {

      alert('account deleted')
      navigate("/")

        
  }else{
      alert("Wrong password")
  }

  }

  return (
    <>
      <Paper variant="outlined" sx={{ p: 2, mb: 2 }}>
        <Typography variant="h4" fontWeight={500} color="textPrimary" mb={2}>
          <WorkRoundedIcon /> Delete Your Account
       </Typography>
        <Divider />
        <Box style={{display:'flex',flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
        <Typography fontWeight={500} color="textPrimary" mb={2} my={4}> Before you delete your account, you must type your password.</Typography> 
            <Grid item xs={12} md={6} style={{width:'400px', margin:'0 auto' }}>
              <form onSubmit={handleDelete}  style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="delete"
              label="Enter your password"
              name="delete"
              onChange={(event) =>
                setDeleteValue(event.target.value) /// acquiring the value of the input
              }
            />
          <Button
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
             
            >
             Delete
            </Button>

              {/* {elements.map(user => 
               <p>user.id</p> )} */}

            </form>

      
            </Grid>
        </Box>
      </Paper>
    </>
  );
};

export default EmployerMyJobs;
