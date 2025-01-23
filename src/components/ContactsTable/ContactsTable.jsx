import React from 'react';
import styles from './ContactsTable.module.css'


const ContactsTable = () => {
    return (
       <table className={styles.ContactsTable}> 
        <thead>
            <tr>
                <th>Profile</th>
                <th>Name</th>
                <th>Surname</th>
                <th>Mobile</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>

        </tbody>
       </table>
    );
}

export default ContactsTable;
