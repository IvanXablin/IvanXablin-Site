import styles from './Layout.module.scss';
import Header from './../components/Header/Header';
import Footer from './../components/Footer/Footer';

const Layout = ({children}) => {
    return (
        <div className={styles.wrapper}>
            <Header/>
                <main className={styles.main}>
                    {children}
                </main>
            <Footer/>
        </div>
    );
};

export default Layout;