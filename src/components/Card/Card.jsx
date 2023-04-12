import React from 'react'
import styles from "./Card.module.css"

export const Card = ({ id, tokenName, imageUrl }) => {





    return (


        <div className={styles.container} style={{
           backgroundImage: `url(${imageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
      }}>
          <div className={styles.id}>
              <span>#{id}</span>
          </div>
            <div className={styles.tokenName}>
                <p>

              {tokenName}
                </p>
          </div>
    </div>

  )
}
