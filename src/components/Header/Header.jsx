import React from 'react';
import styles from './Header.module.css'
const Header = () => {
    return (
        <div className={styles.header}>
            <form className={styles.form} >
            <input className={styles.input} type="text" placeholder='Search contact...' />
            <button className={styles.button}>Search</button>
            </form>
           
        
        </div>
    );
}

export default Header;
