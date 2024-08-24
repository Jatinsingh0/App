import React from 'react'
import styles from "./login.module.css"
import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: "Login",
  description: "This is a Login page",
};
const page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
            <Link href={"/paymentPage"}>
              <Image
                src="/leftArrow.png"
                alt="Back Arrow"
                fill
                className={styles.image}
              />
            </Link>
          </div>
        <div className={styles.paypalLogo}>
            <Link href={"/"}>
            <Image
              src="/paypal.png"
              alt=""
              fill
              className={styles.paypal}
            />
            </Link>
          </div>

          <div className={styles.inputs}>
            <input type="text" placeholder='Your Email ' />
            <input type="text" placeholder='Password' />
            <p>Forget password?</p>
          </div>

          <div className={styles.buttons}>
            <button type="button" >Log in</button>
            <p>Try another way</p>
          </div>

    </div>
  )
}

export default page