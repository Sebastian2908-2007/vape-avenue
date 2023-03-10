import {images,juiceImgs,disposableImg,accessoryImg} from '@/utils/images';
import dynamic from 'next/dynamic';
import Carousel from '@/components/Carousel';
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import styles from '@/styles/Home.module.css';
import heroVideo from '../public/herovideo.mp4';
const HeroSection = dynamic(() =>import( '@/components/HeroSection'),{ssr: false});
const boxStyle = {
  padding:{xs:'1rem',md:'3%'},
  width:{md:'100%'}
};

export default function Home() {

  return (
    <>
      <HeroSection video={heroVideo}/>
    <Box sx={boxStyle}>   
      <Grid container rowSpacing={{ xs: 3, sm: 2, md: 3 }} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
       <Grid item xs={12} sm={6} lg={3} > 
       <section className={styles.productSection}>
        <h1 className={styles.productSecH1}>Mods</h1>
         <Carousel images={images}/>
        </section>   
      </Grid>
       <Grid item xs={12} sm={6}  lg={3}>    
         <section className={styles.productSection}>
        <h1 className={styles.productSecH1}>Juice</h1>
         <Carousel images={juiceImgs}/>
        </section>
      </Grid>
       <Grid item xs={12} sm={6}  lg={3}>    
         <section className={styles.productSection}>
        <h1 className={styles.productSecH1}>Disposable</h1>
         <Carousel images={disposableImg}/>
        </section>
      </Grid>
       <Grid item xs={12} sm={6} lg={3}>    
         <section className={styles.productSection}>
        <h1 className={styles.productSecH1}>Accessories</h1>
         <Carousel images={accessoryImg}/>
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
