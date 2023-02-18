import Head from 'next/head';
import Carousel from '@/components/Carousel';
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import styles from '@/styles/Home.module.css';

const images = [
  {
    _id:1,
    label: 'GeekVape',
    imgPath:
      '/geekvape-mod (10).png',
  }, {
    
    _id:2,
    label: 'GeekVape',
    imgPath:
      '/geekvape-mod (11).png',
  },
  {
    _id:3,
    label: 'GeekVape',
    imgPath:
      '/geekvape-mod (12).png',
  },
  {
    _id:4,
    label: 'GeekVape',
    imgPath:
      '/geekvape-mod (13).png',
  },
  {
    _id:5,
    label: 'GeekVape',
    imgPath:
      '/geekvape-mod (14).png',
  },
  {
    _id:6,
    label: 'GeekVape',
    imgPath:
      '/geekvape-mod (15).png',
  },
  {
    _id:7,
    label: 'GeekVape',
    imgPath:
      '/geekvape-mod (16).png',
  },
  {
    _id:8,
    label: 'GeekVape',
    imgPath:
      '/geekvape-mod (17).png',
  },
  {
    _id:9,
    label: 'GeekVape',
    imgPath:
      '/geekvape-mod (18).png',
  },
  {
    _id:10,
    label: 'GeekVape',
    imgPath:
      '/geekvape-mod (19).png',
  },
  {
    _id:11,
    label: 'GeekVape',
    imgPath:
      '/geekvape-mod (20).png',
  },
  {
    _id:12,
    label: 'Vaporesso',
    imgPath:
      '/vaporesso-mod (1).png',
  },
  {
    _id:13,
    label: 'Vaporesso',
    imgPath:
      '/vaporesso-mod (2).png',
  },
  {
    _id:14,
    label: 'Vaporesso',
    imgPath:
      '/vaporesso-mod (3).png',
  },
  {
    _id:15,
    label: 'Vaporesso',
    imgPath:
      '/vaporesso-mod (4).png',
  },
  {
    _id:16,
    label: 'Vaporesso',
    imgPath:
      '/vaporesso-mod (5).png',
  },
  {
    _id:17,
    label: 'Vaporesso',
    imgPath:
      '/vaporesso-mod (6).png',
  },
  {
    _id:18,
    label: 'Vaporesso',
    imgPath:
      '/vaporesso-mod (7).png',
  },
  {
    _id:19,
    label: 'Vaporesso',
    imgPath:
      '/vaporesso-mod (8).png',
  },
  {
    _id:20,
    label: 'Vaporesso',
    imgPath:
      '/vaporesso-mod (9).png',
  },
  {
    _id:21,
    label: 'Vaporesso',
    imgPath:
      '/vaporesso-mod (10).png',
  },
  {
    _id:22,
    label: 'Voopoo',
    imgPath:
      '/voopoo-mods (1).png',
  },
  {
    _id:23,
    label: 'Voopoo',
    imgPath:
      '/voopoo-mods (2).png',
  },
  {
    _id:24,
    label: 'Voopoo',
    imgPath:
      '/voopoo-mods (3).png',
  },
  {
    _id:25,
    label: 'Voopoo',
    imgPath:
      '/voopoo-mods (4).png',
  },
  {
    _id:26,
    label: 'Voopoo',
    imgPath:
      '/voopoo-mods (5).png',
  },
  {
    _id:27,
    label: 'Voopoo',
    imgPath:
      '/voopoo-mods (6).png',
  },
  {
    _id:28,
    label: 'Voopoo',
    imgPath:
      '/voopoo-mods (7).png',
  },
  {
    _id:29,
    label: 'Voopoo',
    imgPath:
      '/voopoo-mods (8).png',
  },
  {
    _id:30,
    label: 'Voopoo',
    imgPath:
      '/voopoo-mods (9).png',
  },
  {
    _id:31,
    label: 'Voopoo',
    imgPath:
      '/voopoo-mods (10).png',
  },
];

const juiceImgs = [
  {
    _id:1,
    label: 'Daze Brand',
    imgPath:
      '/daze (1).png',
  },
  {
    _id:2,   
    label: 'Daze Brand',
    imgPath:
      '/daze (2).png',
  },
  { 
    _id:3,
    label: 'Daze Brand',
    imgPath:
      '/daze (3).png',
  },
  { 
    _id:4,
    label: 'Frutia Brand',
    imgPath:
      '/frutia (1).png',
  },
  { 
    _id:5,
    label: 'Frutia Brand',
    imgPath:
      '/frutia (2).png',
  },
  { 
    _id:6,
    label: 'Frutia Brand',
    imgPath:
      '/frutia (3).png',
  },
  { 
    _id:7,
    label: 'Juss Brand',
    imgPath:
      '/juss (1).png',
  },
  { 
    _id:8,
    label: 'Juss Brand',
    imgPath:
      '/juss (2).png',
  },
  { 
    _id:9,
    label: 'Juss Brand',
    imgPath:
      '/juss (3).png',
  },
  { 
    _id:10,
    label: 'Juss Brand',
    imgPath:
      '/juss (4).png',
  },
  { 
    _id:11,
    label: 'Juss Brand',
    imgPath:
      '/juss (5).png',
  },
  { 
    _id:12,
    label: 'Mighty Brand',
    imgPath:
      '/mighty (1).png',
  },
  { 
    _id:13,
    label: 'Mighty Brand',
    imgPath:
      '/mighty (2).png',
  },
  { 
    _id:14,
    label: 'Mighty Brand',
    imgPath:
      '/mighty (3).png',
  },
  { 
    _id:15,
    label: 'Mighty Brand',
    imgPath:
      '/mighty (4).png',
  },
  { 
    _id:16,
    label: 'Milk Brand',
    imgPath:
      '/milk.png',
  },
  { 
    _id:17,
    label: 'Reds Brand',
    imgPath:
      '/reds.png',
  },
  { 
    _id:18,
    label: 'Ruthless Brand',
    imgPath:
      '/ruthless.png',
  },
  { 
    _id:19,
    label: 'Twist Brand',
    imgPath:
      '/twist.png',
  },
  { 
    _id:20,
    label: 'SadBoy Brand',
    imgPath:
      '/sadboy (1).png',
  },
  { 
    _id:21,
    label: 'SadBoy Brand',
    imgPath:
      '/sadboy (2).png',
  },
  
];

const disposableImg =[
  { 
    _id:1,
    label: 'Airlove Disposable',
    imgPath:
      '/airlove.png',
  },
  { 
    _id:2,
    label: 'BiffBar Disposable',
    imgPath:
      '/biffbar.png',
  },
  { 
    _id:3,
    label: 'Cloud Nerdz Disposable',
    imgPath:
      '/cloudnerdz.png',
  },
  { 
    _id:4,
    label: 'DazeBar Disposable',
    imgPath:
      '/dazebar.png',
  },
  { 
    _id:5,
    label: 'DragBar Disposable',
    imgPath:
      '/dragbar.png',
  },
  { 
    _id:6,
    label: 'ElfBar Disposable',
    imgPath:
      '/elfbar.png',
  },
  { 
    _id:7,
    label: 'ElfBar Disposable',
    imgPath:
      '/elfbar2.png',
  },
  { 
    _id:8,
    label: 'EscoBars Disposable',
    imgPath:
      '/escobars.png',
  },
  { 
    _id:9,
    label: 'Flum Disposable',
    imgPath:
      '/flum.png',
  },
  { 
    _id:10,
    label: 'Flum Disposable',
    imgPath:
      '/flum2.png',
  },
  { 
    _id:11,
    label: 'Flum Disposable',
    imgPath:
      '/flum3.png',
  },
  { 
    _id:12,
    label: 'GeekBar Disposable',
    imgPath:
      '/geekbar.png',
  },
  { 
    _id:13,
    label: 'HotBox Disposable',
    imgPath:
      '/hotbox.png',
  },
  { 
    _id:14,
    label: 'Kros Disposable',
    imgPath:
      '/kros.png',
  },
  { 
    _id:15,
    label: 'Max Disposable',
    imgPath:
      '/max.png',
  },
  { 
    _id:16,
    label: 'Millie Disposable',
    imgPath:
      '/milli.png',
  },
  { 
    _id:17,
    label: 'Nkdmax Disposable',
    imgPath:
      '/nkdmax.png',
  },
  { 
    _id:18,
    label: 'PuffBar Disposable',
    imgPath:
      '/puffbar.png',
  },
  { 
    _id:19,
    label: 'SendIt Disposable',
    imgPath:
      '/sendit.png',
  },
  { 
    _id:20,
    label: 'SWFT Disposable',
    imgPath:
      '/swft.png',
  },
  { 
    _id:21,
    label: 'TopShine Disposable',
    imgPath:
      '/topshine.png',
  },
  { 
    _id:22,
    label: 'TrulyBar Disposable',
    imgPath:
      '/trulybar.png',
  },
  { 
    _id:23,
    label: 'XBox Disposable',
    imgPath:
      '/xbox.png',
  },
];

const accessoryImg = [
  { 
    _id:1,
    label: 'Accessories',
    imgPath:
      '/accessories (1).png',
  },
  { 
    _id:2,
    label: 'Accessories',
    imgPath:
      '/accessories (2).png',
  },
  { 
    _id:3,
    label: 'Accessories',
    imgPath:
      '/accessories (3).png',
  },
  { 
    _id:4,
    label: 'Accessories',
    imgPath:
      '/accessories (4).png',
  },
  { 
    _id:5,
    label: 'Accessories',
    imgPath:
      '/accessories (5).png',
  },
  { 
    _id:6,
    label: 'Accessories',
    imgPath:
      '/accessories (6).png',
  },
  { 
    _id:7,
    label: 'Accessories',
    imgPath:
      '/accessories (7).png',
  },
  { 
    _id:8,
    label: 'Accessories',
    imgPath:
      '/accessories (8).png',
  },
  { 
    _id:9,
    label: 'Accessories',
    imgPath:
      '/accessories (9).png',
  },
  { 
    _id:10,
    label: 'Accessories',
    imgPath:
      '/accessories (10).png',
  },
  { 
    _id:11,
    label: 'Accessories',
    imgPath:
      '/accessories (11).png',
  },
  { 
    _id:12,
    label: 'Accessories',
    imgPath:
      '/accessories (12).png',
  },
  { 
    _id:13,
    label: 'Accessories',
    imgPath:
      '/accessories (13).png',
  },
  { 
    _id:14,
    label: 'Accessories',
    imgPath:
      '/accessories (14).png',
  },
  { 
    _id:15,
    label: 'Accessories',
    imgPath:
      '/accessories (15).png',
  },
  { 
    _id:16,
    label: 'Accessories',
    imgPath:
      '/accessories (16).png',
  },
  { 
    _id:17,
    label: 'Accessories',
    imgPath:
      '/accessories (17).png',
  },
  { 
    _id:18,
    label: 'Accessories',
    imgPath:
      '/accessories (18).png',
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
         <Carousel images={juiceImgs}/>
        </section>
      </Grid>
       <Grid item xs={12} sm={6} md={4} lg={3} xl={4}>    
         <section className={styles.productSection}>
        <h1 className={styles.productSecH1}>Disposable</h1>
         <Carousel images={disposableImg}/>
        </section>
      </Grid>
       <Grid item xs={12} sm={6} md={4} lg={3} xl={4}>    
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
