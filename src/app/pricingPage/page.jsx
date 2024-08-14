import React from 'react'
import styles from "./pricingPage.module.css"
import PricePageCard from '../components/pricePageCard/pricePageCard'

const PricePage = () => {
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <div className={styles.header}>
            <p className={styles.heading}>Elige el plan de Reciclaje de Cabello</p>
            <p className={styles.subHeading}>First 7 days free, then $12.99/month</p>
            </div>
            
            <div className={styles.priceCard}>
            <PricePageCard />
            <PricePageCard />
            <PricePageCard />
            <PricePageCard />
            <PricePageCard />
            </div>
        </div>
    </div>
  )
}

export default PricePage