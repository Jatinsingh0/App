"use client"

import React, { useEffect, useState } from "react";
import styles from "./planInfoPage.module.css";
import Link from "next/link";
import Image from "next/image";


const page = () => {

   // Getting Price From localStorage
  const[price, setPrice] = useState(null);
  useEffect(()=>{
    const storedPrice = localStorage.getItem("price")
    setPrice(storedPrice)
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.planHeading}>
          <div className={styles.imageContainer}>
            <Link href={"/paymentPage"}>
              <Image
                src="/leftArrow.png"
                alt=""
                fill
                className={styles.image}
              />
            </Link>
          </div>
          <p className={styles.planText}>Plan</p>
        </div>

        <div className={styles.priceSection}>
          <p className={styles.price}>{price}</p>
          <p className={styles.priceText}>/año sin IVA</p>
        </div>
        <p className={styles.desc}>ECORESPONSABILIDAD</p>

        <div className={styles.planDetails}>
          <div className={styles.planDetails1}>
            <p>ID transacción</p>
            <p>Cantidad</p>
            <p>Cargar :</p>
            <p>Total :</p>
            <p>Método de pago:</p>
            <p>Tiempo :</p>
          </div>
          <div className={styles.planDetails2}>
            <p>#71L69PJK3</p>
            <p>20.00€</p>
            <p>0 €</p>
            <p>2000€</p>
            <p>Tarjeta de débito</p>
            <p>11/01/22, 22:45</p>
          </div>
        </div>
        <Link href={"/paymentSuccessPage"}><button type="button" className={styles.button}>
          Envía tus residuos
        </button>
        </Link>
        <Link href={"/paymentSuccessPage"}>
        <button type="button" className={styles.button2}>
          Envía tus residuos
        </button>
        </Link>
      </div>
    </div>
  );
};

export default page;
