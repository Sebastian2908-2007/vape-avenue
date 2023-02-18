import styles from '@/styles/Home.module.css'
import Image from 'next/image';
import logo from '../public/logo.png';
const Layout = ({children}) => {
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
        </header>
        <main className={styles.main}>
          {children}
        </main>
        <footer className={styles.footer}>footer</footer>
        </>
    );
};

export default Layout;