"use client"

import React, { Suspense } from "react";
import styles from "./payment.module.css";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const PaymentPageContent = () => {
  const searchParams = useSearchParams(); 
  const price = searchParams.get("price") || "0";

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.paymentHeading}>
          <div className={styles.imageContainer}>
            <Link href={"/"}>
              <Image
                src="/leftArrow.png"
                alt="Back Arrow"
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
            <p>{price}</p>
          </div>

          <div className={styles.Impuesto}>
            <p>Impuesto</p>
            <p>HK$0.00</p>
          </div>
          <div className={styles.total}>
            <p>Total a pagar :</p>
            <p>{price}€</p>
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
                alt="Credit Card"
                fill
                className={styles.imageTarjeta}
              />
            </Link>
          </div>
          <div className={styles.imageWrapper}>
            <Link href={"/reviewPaymentPage"}>
              <Image src="/paypal.png" alt="PayPal" fill className={styles.image} />
            </Link>
          </div>

          <div className={styles.imageWrapper}>
            <Link href={"/bank"}>
              <Image src="/bank.png" alt="Bank Transfer" fill className={styles.image} />
            </Link>
          </div>

          <div className={styles.imageWrapper}>
            <Link href={"/bank"}>
              <Image src="/pago.png" alt="Other Payment" fill className={styles.image} />
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

const PaymentPage = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <PaymentPageContent />
  </Suspense>
);

export default PaymentPage;
