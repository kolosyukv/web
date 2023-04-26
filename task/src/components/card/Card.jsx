import styles from "./Card.module.css"
import {CardContent} from "./CardContent";
import {CardAction} from "./CardAction";
import {CardImage} from "./CardImage";

export const Card = (props)=>{
    const {name, date, distance, size, isDangerous, DistanceMode} = props;

    return <div className={isDangerous ? styles.redContainer : styles.greenContainer}>
<div>
    <CardContent name={name} date={date} distance={distance} size={size} DistanceMode={DistanceMode}/>
    <CardAction isDangerous={isDangerous}/>
    <CardImage/>
</div>
    </div>
}