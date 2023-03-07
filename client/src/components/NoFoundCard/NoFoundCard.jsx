import React from 'react'
import styles from "./NoFoundCard.module.css"
const NoFoundCard = (props) => {
  
  return (
    <div>
      <div className={styles.titulo}>
            ERROR :
      </div>
      <div className={styles.detalle}>{props.error.error}
      </div>
    </div>
  )
}

export default NoFoundCard
