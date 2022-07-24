import { useState } from 'react';
import Menu from '../Menu/Menu';
import styles from './Header.module.scss';

const Header = () => {
    const [menuIsActive, setMenuIsActive] = useState(false);

    return (
        <header className={styles.header}>
        <div className={styles.header__content}>
            <div className={styles.header__logo}>
                <img src={require('../../assets/GitHub-Mark-Light-32px.png')} alt="" width="23"></img>
                <a href="https://github.com/IvanXablin">IvanXablin</a>
            </div>       
            <div className={styles.header__burger}>
                <img src={require('../../assets/icons8-menu-rounded-50.png')} alt="" width="29" onClick={() => setMenuIsActive(!menuIsActive)}/>
             </div> 
            <Menu active={menuIsActive} setActive={setMenuIsActive} />
        </div>
    </header>
    );
};

export default Header;