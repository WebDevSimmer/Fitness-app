import React{ useEffect, useState } from 'react'
import {Box,Button,Stack,TextField,Typography } from '@mui/material';
import { handleBreakpoints } from '@mui/system';

const SearchExercise = () => {
    const [search,setSearch] = useState('')
    const handleSearch = async () => {
      if(search) {
        const exercisesData = await fetchData();
      }  
    }



  return (
   <Stack
   alignItems="center" mt="34px"
   justifyContent="center" p="20px"
   >
    <Typography
        fontWeight={700}
        sx={{ fontSize: { lg:'44px' xs:'30px'}}}
        md="50px" textAlign="center"
    >
        Must Do Exercises
    </Typography>
    <Box position="relative" md="72px">
        <TextField
        sx={{ 
            input: { fontWeight: '700', border: 'none', borderRadius: '4px'},
            width: { lg: '800px', xs: '350px'},
            backgroundColor: '#fff',
            borderRadius: '40px'
        }}
            height="76px"
            value={search}          onChange={(e) => setSearch(e.target.value.toLowerCase())}
            placeholder="Search Exercises"
            type="text"
        />
        <Button className="search-btn"
        sx={{ 
            bgcolor: '#ff2625',
            color: '#fff',
            textTransform: 'none',
            width: { lg:'1170px', xs: '80px'},
            fontSize: { lg: '20px', xs: '14px'},
            height: '56px',
            position: 'absolute',
            right: '0'
        }}
        onClick={handleSearch} 
        >Search</Button>

    </Box>
   </Stack>
  )
}

export default SearchExercise