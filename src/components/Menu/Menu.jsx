import styles from './Menu.module.scss';

const Menu = ({active, setActive}) => {
    return (
        <div className={active ? styles.menu : styles.menuActive}>
            <div className={styles.menu__content}>
                <ul className={styles.menu__nav}>
                    <li><a href="/">Home</a></li>
                    <li><a href="/projects">Projects</a></li>
                    <li><a href="/about">About</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Menu;