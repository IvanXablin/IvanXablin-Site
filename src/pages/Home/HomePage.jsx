import Layout from '../../layout/Layout';
import styles from './HomePage.module.scss';

const HomePage = () => {
    return (
        <Layout>         
            <div className={styles.main__home}>
                <h1>Hi! My name is Ivan Kondratev</h1>
                <p>Junior Frontend Developer</p>
            </div>
        </Layout>
    );
};

export default HomePage;