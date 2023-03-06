import React from 'react'
import styles from "./NoFoundCard.module.css"
const NoFoundCard = (props) => {
  return (
    <div className={styles.detalle}>{props.error}</div>
  )
}

export default NoFoundCard
