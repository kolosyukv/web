

export const CardContent = (props) =>{

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
        return `${distance} км`
    else
        return `${(distance/384467)} Лун`
}