import {
  Grid,
  Box,
  Typography,
  TextField,
  Container,
  Card,
  InputAdornment,
  Paper,
  Pagination,
} from "@mui/material";
import React , { useState , useEffect , useRef } from "react";
import FooterMain from "../components/footers/FooterMain";
import JobsListCard from "../components/cards/JobsListCard";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import {
  Link
} from "react-router-dom";
import JobsList from "../components/data/jobs/jobsList";
import Addjob from "../components/pages-comp/employerDashboard/addJob";

const SearchJob = () => {
 
    const [searchTerm, setSearchTerm] = useState("");
    const [searchBy,setSearchBy] = useState("title");
    
    
    // 
    
    // 
  
  return (
    <>
      <Container>
        <Grid container>
          <Grid item xs={12} py={2}>
            {/* <Card sx={{ py: 10, textAlign: "center" }}>
              <Typography variant="h4">Search field here</Typography>
            </Card> */}
          
            {/* <input type="text" name="search" onChange={(event) => {
          event.preventDefault();
          
          setSearchTerm(event.target.value);
        }} /> */}



          {/* <Card sx={{ p: 5, position: "static" }}> */}
                        {/* <Typography variant="h4" color="primary" mb={2}>
                          A completely new kind of office experience
                        </Typography> */}
                        
                        {/* <Addjob /> */}
                        {/* <TextField
                          id="outlined-search"
                          label="Search field"
                          type="text"
                          name="search"
                          ref={termRef}
              
                          fullWidth
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="start">
                                <SearchRoundedIcon />
                              </InputAdornment>
                            ),
                          }}
                        />
                        <button type="button" onClick={(e) => {
                            const x = e.target.value;
                            setSearchTerm(x);
                            alert(searchTerm);
                          }}>search</button>
                        </form> */}
                       {/* <Typography variant="h2" color="primary" mb={2}>
                          Search for a Job
                        </Typography>
                      <form >
                        
                          <div>
                          <Grid item xs={12}>
                         
                          <input className="search2" type="text" name="search" onChange={(event) => {
                            event.preventDefault();
                            
                            setSearchTerm(event.target.value);
                          }} />
                          
                          </Grid> */}
                          {/* </div>
                      </form>

                     
                      </Card> */}
                      
          <Grid item xs={12}>
            <Paper variant="outlined">
              <Box p={2}>
                <Typography variant="h5">Search Result/s</Typography>
                
              </Box>
              <Grid
                container
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Grid item xs={12}>
                  {/*  */}
                 
                  <JobsListCard />
                  {/*  */}
                </Grid>
              </Grid>
              <Box
                xs={12}
                p={2}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <Pagination count={10} shape="rounded" sx={{ marginTop: 4 }} />
              </Box>
            </Paper>
          </Grid>
        </Grid>
        </Grid>
      </Container>

      <footer>
        <Box sx={{ p: 2 }}>
          <FooterMain />
        </Box>
      </footer>
    </>
  );
};

export default SearchJob;

