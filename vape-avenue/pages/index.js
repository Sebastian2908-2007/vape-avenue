import Head from 'next/head';
import { Inter } from '@next/font/google';
import Carousel from '@/components/Carousel';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';


export default function Home() {
  return (
    <Box >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
      <Grid container spacing={2} >
       <Grid item xs={12}>    
         <Carousel/>
      </Grid>
       <Grid item xs={12}>    
        <Carousel/>
      </Grid>
       <Grid item xs={12}>    
         <Carousel/>
      </Grid>
       <Grid item xs={12}>    
        <Carousel/>
      </Grid>
     </Grid>
    </Box>
  )
}
