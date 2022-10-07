import React from 'react'
import { useEffect, useState } from 'React'
import {Box,Button,Stack,TextField,Typography } from '@mui/material';
import { handleBreakpoints } from '@mui/system';
import { exerciseOptions, fetchData } from '..utils/fetchData';





const SearchExercises = () => {
    const [search,setSearch] = useState('')
    const [ exercises, setExercises ] = useState([])
    const [bodyParts, setBodyParts] = useState([])

    useEffect(() => {
        const fetchExerciseData = async () => {
            const bodyPartsData = await fetchData   ('https://exercisesdb.p.rapidapi.com/exercises', exerciseOptions )

            setBodyParts(['all', ...bodyPartsData]);
        }

        fetchExerciseData();
    }, [])



    const handleSearch = async () => {
      if(search) {
        const exercisesData = await fetchData('https://exercisesdb.p.rapidapi.com/exercises', exerciseOptions);

         const searchExercises = exerciseData.filter((exercise) => exercise.name.toLowercase().includes(search)
         || exercise.target.toLowercase().includes(search)
         || exercise.equipment.toLowercase().includes(search)
         || exercise.bodyPart.toLowercase().includes(search)
         );
        setSearch('');
        setExercises(searchedExercise);

      }  
    }



  return (
   <Stack
   alignItems="center" mt="34px"
   justifyContent="center" p="20px"
   >
    <Typography
        fontWeight={700}
        sx={{ fontSize: { lg:'44px', xs:'30px'}}}
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
    <Box
    sx={{ position: 'relative',width: '100%',p: '20px'}}
    >
        <HorizontalScrollbar data={bodyParts}></HorizontalScrollbar>
    </Box>
   </Stack>
  )
}

export default SearchExercise