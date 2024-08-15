import React from "react";
import styles from "./bank.module.css";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headingLogo}>
        <Link href={"/paymentPage"}>
          <Image
            src="/bankHeading.png"
            alt=""
            fill
            className={styles.heading}
          />
        </Link>
      </div>

      <div className={styles.paymentContainer}>
        <div className={styles.price}>$300</div>
        <div className={styles.inputGroup}>
          <div className={styles.inputItem}>
            <span className={styles.icon}>💳</span>
            <input type="text" placeholder="número de tarjeta" />
          </div>
          <div className={styles.inputItem}>
            <span className={styles.icon}>📅</span>
            <input type="text" placeholder="caducidad" />
          </div>
          <div className={styles.inputItem}>
            <span className={styles.icon}>💳</span>
            <input type="text" placeholder="número de tarjeta" />
          </div>
        </div>
        <button className={styles.payButton}>pagar</button>
      </div>

      <div className={styles.paymentContainer2}>
        <div className={styles.price2}>$300</div>
        <div className={styles.planDetails}>
          <div className={styles.planDetails1}>
            <p>IMPORTAR</p>
            <p>Comercio:</p>
            <p>Terminal:</p>
            <p>Pedido:</p>
            <p>Fecha:</p>
          </div>
          <div className={styles.planDetails2}>
            <p>20 €</p>
            <p>352350664-2</p>
            <p>352350664-2</p>
            <p>42344692</p>
            <p>08/06/2024 13:05</p>
          </div>
        </div>
      </div>

      <div className={styles.companyLogo}>
        <Image src="/companies.png" alt="" fill className={styles.companies} />
      </div>

      <p className={styles.footer}>
        Laietana 48a, 1-3, 08003 Barcelona General Weyler 99, 08912 Badalona
      </p>
    </div>
  );
};

export default page;
