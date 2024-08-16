import React from "react";
import styles from "./pricingPage.module.css";
import PricePageCard from "../components/pricePageCard/pricePageCard";

export const metadata = {
  title: "Home",
  description: "This is a PricePage",
};

const PricePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <p className={styles.heading}>
            Elige el plan de Reciclaje de Cabello
          </p>
          <p className={styles.subHeading}>
            First 7 days free, then $12.99/month
          </p>
        </div>

        <div className={styles.priceCard}>
          <PricePageCard
            price="20€"
            heading="ECO RESPONSABILIDAD"
            subHeading="AL ALCANCE DE TODOS!"
          />
          <PricePageCard
            price="39€"
            heading="Básico"
            subHeading="Miembro de  Básico"
          />
          <PricePageCard price="79€" heading="Pro!" subHeading="Miembro de" />
          <PricePageCard
            price="120€"
            heading="Professional !"
            subHeading="Miembro de"
          />
          <PricePageCard
            price="179€"
            heading="Professional Premium !"
            subHeading="Miembro de"
          />
        </div>
      </div>
    </div>
  );
};

export default PricePage;
