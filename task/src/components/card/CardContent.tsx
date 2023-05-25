import {AsteroidsContext} from "../asteroids-context/AsteroidsContext";
import {useContext} from "react";

type CardContentProps = {
    name: string;
    date: string;
    distance: {
        kilometers: number;
        lunar: number;
    }
    size: number;
    DistanceMode: boolean
}

export const CardContent = (props: CardContentProps) =>{

    const {name, date, distance, size, DistanceMode} = props;

    return (
        <div>
            <h2>{name}</h2>
            <div>{`Дата: ${date}`}</div>
            <div>{`Расстояние: ${DistanceChoice(DistanceMode, distance)}`}</div>
            <div>{`Размер: ${size} м`}</div>
        </div>
    )

}

const DistanceChoice = (DistanceMode, distance) => {
    if (DistanceMode)
        return `${distance.kilometers} км`
    else
        return `${distance.lunar} Лун`
}