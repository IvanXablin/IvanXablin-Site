import styles from './Footer.module.scss';

const Footer = () => {
    return (    
        <footer className={styles.footer}>
            <div className={styles.footer__content}>
                <div className={styles.footer__info}>
                    <span>© Ivan Kondratev 2022. All rights reserved.</span>  
                </div>
                <div className={styles.footer__links}>
                     <a href="https://vk.com/xab_xab"><img src={require('../../assets/icons8-vk-в-круге-48.png')} alt="" width="24"></img></a>
                     <a href="https://t.me/ivan_xab"><img src={require('../../assets/icons8-телеграмма-app-48.png')} alt="" width="24"></img></a>
                </div>                 
            </div>            
        </footer>
    );
};

export default Footer;