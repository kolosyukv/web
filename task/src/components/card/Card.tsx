import styles from './Card.module.css'
import { CardContent } from './CardContent'
import { CardAction } from './CardAction'
import { CardImage } from './CardImage'
import {CardContentContainer} from "./CardContentContainer";
import {useContext} from "react";
import {AsteroidsContext} from "../asteroids-context/AsteroidsContext";


type CardProps = {
    name: string
    date: string
    distance: {
        kilometers: number
        lunar: number
    }
    size: number
    isDangerous: boolean
}

export const Card = (props: CardProps) => {
    const { name, date, distance, size, isDangerous} = props;

    const {addAsteroid} = useContext(AsteroidsContext)

    return (
        <div
            className={
                isDangerous ? styles.redContainer : styles.greenContainer
            }
        >
            <div>
                <CardContentContainer
                    name={name}
                    date={date}
                    distance={distance}
                    size={size}
                />
                <CardAction isDangerous={isDangerous} onClick={()=>addAsteroid(props)}/>
                <CardImage />
            </div>
        </div>
    )
}