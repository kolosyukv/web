import {Header} from "../components/header/Header";
import styles from "./Asteroids.module.css"
import {Card} from "../components/card/Card";
import {useState} from "react";

export const Asteroids = ()=>{

    const [asteroids] = useState(generateAsteroids())

    const [onlyDangerous, setOnlyDangerous] = useState(false)
    const [DistanceMode, setDistanceMode] = useState(true)

    return <div>
        <Header/>
        <div className={styles.showDangerousOnly} onClick={() => setOnlyDangerous(onlyDangerous)}><input type="checkbox" value={onlyDangerous} onChange={() => setOnlyDangerous(!onlyDangerous)}></input> Показать только опасные
        </div>
        <div className={styles.distanceMode}>
            Расстояние <button className={`${DistanceMode}`} onClick={()=> setDistanceMode(true)}>в километрах</button>, <button className={`${DistanceMode}`} onClick={()=> setDistanceMode(false)}>в дистанциях до луны</button>
        </div>
        {onlyDangerous ?
            asteroids.filter((item)=>item.isDangerous).map((item)=><Card {...item} DistanceMode={DistanceMode}/>) :
            asteroids.map((item)=><Card {...item} DistanceMode={DistanceMode}/>)
        }
        Asteroid page
    </div>
}

const generateAsteroids = ()=>{
    const months = [
        'января',
        'февраля',
        'марта',
        'апреля',
        'мая',
        'июня',
        'июля',
        'августа',
        'сентября',
        'октября',
        'ноября',
        'декабря',
    ];

    const characters = "ABCDEFGHIGKLMNOPQRSTUVWXYZ";
    const result = [];

    for (let i = 0; i < 10; i++) {
        const name = characters[(Math.random()*25).toFixed(0)] + characters[(Math.random()*25).toFixed(0)] + characters[(Math.random()*25).toFixed(0)] + characters[(Math.random()*25).toFixed(0)]
        const date = `${(Math.random() * 27 + 1).toFixed(0)} ${months[(Math.random() * 12 ).toFixed(0)]} 2023`
        const size = (Math.random() *100 + 10).toFixed(0)
        const distance = (Math.random() *90000000).toFixed(0)
        const isDangerous = Math.random() >= 0.5;
        result.push({name, date, size, distance, isDangerous})
    }
    return result;

}