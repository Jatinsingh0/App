import React from 'react';
import styles from "./paymentSuccess.module.css";
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: "Payment Success",
  description: "This is a payment success page.",
};
const page = () => {
  return (
    <div className={styles.container}>
        <div className={styles.successLogo}>
            <Image
              src="/success.png"
              alt=""
              fill
              className={styles.success}
            />
          </div>

          <div>
            <p className={styles.heading}>Pago exitoso</p>
            <p className={styles.subHeading}>Gracias por suscribirte</p>
          </div>

          <div className={styles.planDetails}>
          <div className={styles.planDetails1}>
            <p>ID transacción</p>
            <p>Cantidad</p>
            <p>Cargar :</p>
            <p>Total :</p>
            <p>Método de pago:</p>
          </div>
          <div className={styles.planDetails2}>
            <p>#71L69PJK3</p>
            <p>500punto 00</p>
            <p>0 Tk punto</p>
            <p>2000€</p>
            <p>11/01/22</p>
          </div>
        </div>
        <Link href={"/"}><button type="button" className={styles.button}>
        Volver a casa
        </button>
        </Link>
        <Link href={"/"}>
        <button type="button" className={styles.button2}>
        VER RECIBO
        </button>
        </Link>
    </div>
  )
}

export default page