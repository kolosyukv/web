import styles from "./Card.module.css"

export const Card = ()=>{
    return <div className={styles.container}>
<div>
    <h2>Имя</h2>
    <div>Дата:</div>
    <div>Расстояние:</div>
    <div>Размер:</div>
</div>
    </div>
}