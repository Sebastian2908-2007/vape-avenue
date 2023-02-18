import Head from 'next/head';
import Carousel from '@/components/Carousel';
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import styles from '@/styles/Home.module.css';

const images = [
  {
    label: 'GeekVape',
    imgPath:
      '/geekvape-mod (10).png',
  }, {
    label: 'GeekVape',
    imgPath:
      '/geekvape-mod (11).png',
  },
  {
    label: 'GeekVape',
    imgPath:
      '/geekvape-mod (12).png',
  },
  {
    label: 'GeekVape',
    imgPath:
      '/geekvape-mod (13).png',
  },
  {
    label: 'GeekVape',
    imgPath:
      '/geekvape-mod (14).png',
  },
  {
    label: 'GeekVape',
    imgPath:
      '/geekvape-mod (15).png',
  },
  {
    label: 'GeekVape',
    imgPath:
      '/geekvape-mod (16).png',
  },
  {
    label: 'GeekVape',
    imgPath:
      '/geekvape-mod (17).png',
  },
  {
    label: 'GeekVape',
    imgPath:
      '/geekvape-mod (18).png',
  },
  {
    label: 'GeekVape',
    imgPath:
      '/geekvape-mod (19).png',
  },
  {
    label: 'GeekVape',
    imgPath:
      '/geekvape-mod (20).png',
  },
  {
    label: 'Vaporesso',
    imgPath:
      '/vaporesso-mod (1).png',
  },
  {
    label: 'Vaporesso',
    imgPath:
      '/vaporesso-mod (2).png',
  },
  {
    label: 'Vaporesso',
    imgPath:
      '/vaporesso-mod (3).png',
  },
  {
    label: 'Vaporesso',
    imgPath:
      '/vaporesso-mod (4).png',
  },
  {
    label: 'Vaporesso',
    imgPath:
      '/vaporesso-mod (5).png',
  },
  {
    label: 'Vaporesso',
    imgPath:
      '/vaporesso-mod (6).png',
  },
  {
    label: 'Vaporesso',
    imgPath:
      '/vaporesso-mod (7).png',
  },
  {
    label: 'Vaporesso',
    imgPath:
      '/vaporesso-mod (8).png',
  },
  {
    label: 'Vaporesso',
    imgPath:
      '/vaporesso-mod (9).png',
  },
  {
    label: 'Vaporesso',
    imgPath:
      '/vaporesso-mod (10).png',
  },
  {
    label: 'Voopoo',
    imgPath:
      '/voopoo-mods (1).png',
  },
  {
    label: 'Voopoo',
    imgPath:
      '/voopoo-mods (2).png',
  },
  {
    label: 'Voopoo',
    imgPath:
      '/voopoo-mods (3).png',
  },
  {
    label: 'Voopoo',
    imgPath:
      '/voopoo-mods (4).png',
  },
  {
    label: 'Voopoo',
    imgPath:
      '/voopoo-mods (5).png',
  },
  {
    label: 'Voopoo',
    imgPath:
      '/voopoo-mods (6).png',
  },
  {
    label: 'Voopoo',
    imgPath:
      '/voopoo-mods (7).png',
  },
  {
    label: 'Voopoo',
    imgPath:
      '/voopoo-mods (8).png',
  },
  {
    label: 'Voopoo',
    imgPath:
      '/voopoo-mods (9).png',
  },
  {
    label: 'Voopoo',
    imgPath:
      '/voopoo-mods (10).png',
  },
];
export default function Home() {
  return (
    <>
     <Head>
        <title>Vape Avenue</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head> 
    <Box >   
      <Grid container rowSpacing={{ xs: 3, sm: 2, md: 3 }} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
       <Grid item xs={12} sm={6} md={4} lg={3} xl={4}> 
       <section className={styles.productSection}>
        <h1 className={styles.productSecH1}>Mods</h1>
         <Carousel images={images}/>
        </section>   
      </Grid>
       <Grid item xs={12} sm={6} md={4} lg={3} xl={4}>    
         <section className={styles.productSection}>
        <h1 className={styles.productSecH1}>Juice</h1>
         <Carousel images={images}/>
        </section>
      </Grid>
       <Grid item xs={12} sm={6} md={4} lg={3} xl={4}>    
         <section className={styles.productSection}>
        <h1 className={styles.productSecH1}>Disposable</h1>
         <Carousel images={images}/>
        </section>
      </Grid>
       <Grid item xs={12} sm={6} md={4} lg={3} xl={4}>    
         <section className={styles.productSection}>
        <h1 className={styles.productSecH1}>Accessories</h1>
         <Carousel images={images}/>
        </section>
      </Grid>
     </Grid>
    </Box>
    </>
  )
}

/*
xs, extra-small: 0px
sm, small: 600px
md, medium: 900px
lg, large: 1200px
xl, extra-large: 1536px
*/
