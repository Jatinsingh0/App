import React from 'react';
import styles from "./reviewPaymentPage.module.css"
import Image from 'next/image';
import Link from 'next/link';


const ReviewPayment = () => {
  return (
    <div className={styles.container}>
        <Link href={"/planInfoPage"}>
      <div className={styles.reviewPage}>
            <Image
              src="/reviewPage.png"
              alt=""
              fill
              className={styles.review}
            />
          </div>
          </Link>
    </div>
  )
}

export default ReviewPayment
