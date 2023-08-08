import  {useEffect} from "react";
import ReactDOM from "react-dom";
import icons7 from '../../img/S7Logo.png'
import styles from './card.module.css'
const Card=(props)=>{
useEffect(()=>{console.log(props)})
return( 
  <section className="card">
  <div className={styles.rowHeader}>
    <p className={styles.price}>12 340 P</p>
    <img className="logo-card" src={icons7}></img>
  </div>
  <div className={styles.row}>
    <div className={styles.column}>
    <span className={styles.columnDescr}>MOW – HKT</span>
    <span className={styles.columnInfo}>10:45 – 08:00</span>
    </div>
    <div className={styles.column}>
    <span className={styles.columnDescr}>В пути</span>
    <span className={styles.columnInfo}>21ч 15м</span>
    </div>
    <div className={styles.column}>
    <span className={styles.columnDescr}>2 пересадки</span>
    <span className={styles.columnInfo}>HKG, JNB</span>
    </div>
  </div>
  <div className={styles.row}>
    <div className={styles.column}>
    <span className={styles.columnDescr}>MOW – HKT</span>
    <span className={styles.columnInfo}>10:45 – 08:00</span>
    </div>
    <div className={styles.column}>
    <span className={styles.columnDescr}>В пути</span>
    <span className={styles.columnInfo}>21ч 15м</span>
    </div>
    <div className={styles.column}>
    <span className={styles.columnDescr}>2 пересадки</span>
    <span className={styles.columnInfo}>HKG, JNB</span>
    </div>
  </div>
</section>
)
}
export default Card