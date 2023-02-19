import styles from '@/styles/Home.module.css'
import Image from 'next/image';
import logo from '../public/logo.png';
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { TOGGLE_DRAWER } from '@/utils/actions';
import { useStoreContext } from '@/utils/GlobalState';

/**DRAWER */
import Box from '@mui/material/Box';
import { styled, useTheme } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import InfoIcon from '@mui/icons-material/Info';
import Link from 'next/link';

const drawerWidth = 240;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
 
}));
/**DRAWER */
const Layout = ({children}) => {
  const [state,dispatch] = useStoreContext();
  
  const theme = useTheme();
  const handleDrawerOpen = () => {
    dispatch({type:TOGGLE_DRAWER});
  };
  const handleDrawerClose = () => {
    dispatch({type:TOGGLE_DRAWER});
  };
    return(
        <>
        <header className={styles.header}>
          
          <div className={styles.logoDiv}>
          <Link href='/'>
            <Image
            src={logo}
            alt='vape avenue logo'
            fill
            />
         </Link>
          </div>
          
          <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="end"
        onClick={handleDrawerOpen}
        sx={{ ...(state.drawerOpen && { display: "none" }), }}
      >
        <MenuIcon sx={{fontSize:'3rem',color:'#5FAEBF'}}/>
      </IconButton>


      
        </header>
        <main className={styles.main}>
          {children}
        </main>
        <footer className={styles.footer}>footer</footer>
        <Box sx={{ display: "flex",backgroundColor:'rgb(214, 219, 220)' }}>
     

     <Drawer
       sx={{
         width: drawerWidth,
         flexShrink: 0,
         "& .MuiDrawer-paper": {
           width: drawerWidth
         },
       }}
       variant="persistent"
       anchor="right"
       open={state.drawerOpen}
     >
       <DrawerHeader>
         <IconButton onClick={handleDrawerClose}>
           {theme.direction === "rtl" ? (
             <ChevronLeftIcon />
           ) : (
             <ChevronRightIcon sx={{color:'#5FAEBF'}}/>
           )}
         </IconButton>
       </DrawerHeader>
       <Divider/>
       <List>
         {["About us","Contact Us"].map((text, index) => (
           <ListItem key={text} disablePadding>
               {text === 'About us' ? (<Link href='/about' onClick={handleDrawerClose}>
             <ListItemButton>
               <ListItemIcon>
                 {index % 2 === 0 ? <InfoIcon sx={{color:'#5FAEBF'}}/> : <MailIcon sx={{color:'#5FAEBF'}}/>}
               </ListItemIcon>
               <ListItemText sx={{color:'#5FAEBF'}} primary={text} />
             </ListItemButton>
             </Link>):(
               <Link href='/contact' onClick={handleDrawerClose}>
                <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InfoIcon sx={{color:'#5FAEBF'}}/> : <MailIcon sx={{color:'#5FAEBF'}}/>}
                </ListItemIcon>
                <ListItemText sx={{color:'#5FAEBF'}} primary={text} />
              </ListItemButton>
              </Link>
             )}
           </ListItem>
         ))}
       </List>
     
         <img
         className={styles.regImg}
          src='/logo.png'
          alt='vape avenue logo'
         width='100%'
         />
         <div className={styles.brandDiv}>
         <img
         className={styles.regImg}
          src='/frutia-brand.png'
          alt='vape avenue logo'
         width='100%'
         />
         <img
         className={styles.regImg}
          src='/ruthless-brand.png'
          alt='vape avenue logo'
         width='100%'
         />
         <img
         className={styles.regImg}
          src='/twist-brand.png'
          alt='vape avenue logo'
         width='100%'
         />
         <img
         className={styles.regImg}
          src='/milk-brand.png'
          alt='vape avenue logo'
         width='100%'
         />
      </div>
     </Drawer>
   </Box>

        </>
    );
};

export default Layout;