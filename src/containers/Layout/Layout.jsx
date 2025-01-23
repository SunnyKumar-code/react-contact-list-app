import React from "react";
import styles from "./Layout.module.css";
import Header from "../../components/Header/Header";
import Sidbar from "../../components/Sidebar/Sidbar";
import ContactsTable from "../../components/ContactsTable/ContactsTable";
const Layout = () => {
  return (
    <div className={styles.container}>
      <Header />
      <section className="section">
        <Sidbar />
        <ContactsTable />
      </section>
    </div>
  );
};

export default Layout;
