import styles from '@/styles/Home.module.css'
const Layout = ({children}) => {
    return(
        <>
        <header className={styles.header}>Header</header>
        <main className={styles.main}>
          {children}
        </main>
        <footer className={styles.footer}>footer</footer>
        </>
    );
};

export default Layout;