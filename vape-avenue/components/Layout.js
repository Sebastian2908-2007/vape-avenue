import styles from '@/styles/Home.module.css'
import Image from 'next/image';
import logo from '../public/logo.png';
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { TOGGLE_DRAWER } from '@/utils/actions';
import { useStoreContext } from '@/utils/GlobalState';
const Layout = ({children}) => {
  const [state,dispatch] = useStoreContext();
  const handleDrawerOpen = () => {
    dispatch({type:TOGGLE_DRAWER});
  };
    return(
        <>
        <header className={styles.header}>
          <div className={styles.logoDiv}>
            <Image
            src={logo}
            alt='vape avenue logo'
            fill
            />
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
        </>
    );
};

export default Layout;