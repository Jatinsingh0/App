import React from 'react'
import styles from "./priceCard.module.css"
import Image from 'next/image';
import Button from '../button/button';
import Link from 'next/link';



const pricePageCard = ({price, heading, subHeading}) => {
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
        <div className={styles.cardHeader}>
             <p className={styles.cardHeading}>{heading}</p>
             <p className={styles.cardSubHeading}>{subHeading}</p>
        </div>

        <div className={styles.priceSection}>
            <p className={styles.price}>{price}</p>
             <p className={styles.priceText}>/año sin IVA</p>
        </div>
        
        <Link href={"./paymentPage"}><Button title="Choose Plan"/></Link>
        
        <div className={styles.descSection}>
            <p className={styles.descHeading}>Envíe su residuo a nuestro almacén o nuestros puntos de recogida:</p>
            <div className={styles.subDesc}>
                <div className={styles.imageContainer}>
                <Image src="/location.png" alt="" fill className={styles.image}/>
                </div>
                <p>Laietana 48a, 1-3, 08003 Barcelona General Weyler 99, 08912 Badalona</p>
            </div>

            <p className={styles.descHeading}>Con esta participación, serás parte de la comunidad como</p>
            <div className={styles.subDesc}>
                <div className={styles.tickImageContainer}>
                <Image src="/tick.png" alt="" fill className={styles.image}/>
                </div>
                <p>miembro y recibirás nuestras comunicaciones de reciclaje</p>
            </div>
            <div className={styles.subDesc}>
                <div className={styles.tickImageContainer}>
                <Image src="/tick.png" alt="" fill className={styles.image}/>
                </div>
                <p>eventos, trucos y mas cositas. recibiras un contrato</p>
            </div>
            <div className={styles.subDesc}>
                <div className={styles.tickImageContainer}>
                <Image src="/tick.png" alt="" fill className={styles.image}/>
                </div>
                <p>demostrando que recuperamos 60% de tu residuo</p>
            </div>
            <div className={styles.subDesc}>
                <div className={styles.tickImageContainer}>
                <Image src="/tick.png" alt="" fill className={styles.image}/>
                </div>
                <p>el envío por correo correrá a su cargo</p>
            </div>
    
        </div>



        </div>
    </div>
  )
}

export default pricePageCard