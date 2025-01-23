import React from 'react';
import styles from './Sidbar.module.css'
const Sidbar = () => {
    return (
      <aside className={styles.aside}>
        <div className={styles.card}>
            <h3>All Contacts</h3>
            <span>1Contact</span>
        </div>
        <div className={styles.card}>
            <h3>Favourites</h3>
            <span>0 Contact</span>
        </div>
        <form className={styles.form}>
            <div className={styles.name}>
                <input type="text" placeholder='Name' />
                <input type="text" placeholder='Surename' />
            </div>
            <div className={styles.name}>
                <input type="text" placeholder='Mobile No' />
            </div>
            <button className={styles.btn} type='submit'> Add</button>
        </form>
      </aside>
    );
}

export default Sidbar;
