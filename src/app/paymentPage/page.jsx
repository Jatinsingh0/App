import React from "react";
import styles from "./payment.module.css";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "PaymentPage",
  description: "This is a PaymentPage",
};
const PaymentPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.paymentHeading}>
          <div className={styles.imageContainer}>
            <Link href={"/"}>
              <Image
                src="/leftArrow.png"
                alt=""
                fill
                className={styles.image}
              />
            </Link>
          </div>
          <p className={styles.paymentText}>Payment</p>
        </div>

        <div className={styles.content}>
          <div className={styles.Suscríbete}>
            <p>Suscríbete a</p>
            <p>ECO RESPONSABILIDAD</p>
          </div>

          <div className={styles.price}>
            <p>20€</p>
          </div>

          <div className={styles.Impuesto}>
            <p>Impuesto</p>
            <p>HK$0.00</p>
          </div>
          <div className={styles.total}>
            <p>Total a pagar :</p>
            <p>20.00€</p>
          </div>
        </div>

        <div className={styles.Correo}>
          <p className={styles.CorreoHeading}>Correo electrónico*</p>
          <p className={styles.CorreoSubHeading}>
            Dirección de correo electrónico
          </p>
        </div>

        <div className={styles.iconsImageContainer}>
          <div className={styles.imageWrapper}>
            <Link href={"/bank"}>
              <Image
                src="/tarjeta.png"
                alt=""
                fill
                className={styles.imageTarjeta}
              />
            </Link>
          </div>
          <div className={styles.imageWrapper}>
            <Link href={"/reviewPaymentPage"}>
              <Image src="/paypal.png" alt="" fill className={styles.image} />
            </Link>
          </div>

          <div className={styles.imageWrapper}>
            <Link href={"/bank"}>
              <Image src="/bank.png" alt="" fill className={styles.image} />
            </Link>
          </div>

          <div className={styles.imageWrapper}>
            <Link href={"/bank"}>
              <Image src="/pago.png" alt="" fill className={styles.image} />
            </Link>
          </div>
        </div>
        <Link href="./login">
          <div className={styles.login}>
            <p>Iniciar sesión en PayPal</p>
          </div>
        </Link>

        <Link href={"/reviewPaymentPage"}>
          <div className={styles.enviar}>
            <p>Enviar pago</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default PaymentPage;
