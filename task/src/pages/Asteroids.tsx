import { Header } from '../components/header/Header'
import styles from './Asteroids.module.css'
import { Card } from '../components/card/Card'
import {useContext, useEffect, useState} from 'react'
import {AsteroidsContext} from "../components/asteroids-context/AsteroidsContext";
import {getUserKey} from "../Utilits/getUserKey";


export const Asteroids = () => {
    const [asteroids, setAsteroids] = useState<{
        name: string;
        date: string;
        distance: {
            kilometers: number;
            lunar: number;
        },
        size: number;
        id: string;
        isDangerous: boolean
    }[]>([]);


    useEffect(() => {
// eslint-disable-next-line no-unused-vars
        const result = fetch(
            `https://api.nasa.gov/neo/rest/v1/feed?api_key=${getUserKey()}`
        )
            .then((res) => {
                return res.json()
            })
            .then((response) => {
                let rawAsteroids = []
                for (const data in response.near_earth_objects) {
                    rawAsteroids = rawAsteroids.concat(
                        response.near_earth_objects[data]
                    )
                }
                console.log(rawAsteroids)
                const asteroids = rawAsteroids.map((item) => {
                    const size =
                        (item.estimated_diameter.meters.estimated_diameter_max +
                            item.estimated_diameter.meters
                                .estimated_diameter_min) /
                        2
                    const close = item.close_approach_data[0]

                    return {
                        name: item.name,
                        date: close.close_approach_date,
                        size,
                        distance: {
                            kilometers: close.miss_distance.kilometers,
                            lunar: close.miss_distance.lunar,
                        },
                        isDangerous: item.is_potentially_hazardous_asteroid,
                        id: item.id,
                    }
                })
                setAsteroids(asteroids)
            })
            .catch((err) => {
                console.log(err)
                setAsteroids(generateAsteroids())
            })
    }, [])

    const {onlyDangerous, setOnlyDangerous, setDistanceMode} = useContext(AsteroidsContext)

    return (
        <div>
            <Header/>
            <div
                className={styles.showDangerousOnly}>
                <input
                    type="checkbox"
                    value={onlyDangerous as unknown as string}
                    onChange={() => setOnlyDangerous(!onlyDangerous)}
                ></input>{' '}
                Показать только опасные
            </div>
            <div className={styles.distanceMode}>
                Расстояние{' '}
                <button
                    onClick={() => setDistanceMode(true)}
                >
                    в километрах
                </button>
                ,{' '}
                <button
                    onClick={() => setDistanceMode(false)}
                >
                    в дистанциях до луны
                </button>
            </div>
            {onlyDangerous
                ? asteroids
                      .filter((item) => item.isDangerous)
                      .map((item) => (
                          <Card
                              key={item.id}
                              {...item}
                          />
                      ))
                : asteroids.map((item) => (
                      <Card
                          key={item.id}
                          {...item}
                      />
                  ))}
            Asteroid page
        </div>
    )
}

const generateAsteroids = () => {
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
    ]

    const characters = 'ABCDEFGHIGKLMNOPQRSTUVWXYZ'
    const result = []

    for (let i = 0; i < 10; i++) {
        const name =
            characters[(Math.random() * 25).toFixed(0)] +
            characters[(Math.random() * 25).toFixed(0)] +
            characters[(Math.random() * 25).toFixed(0)] +
            characters[(Math.random() * 25).toFixed(0)]
        const date = `${(Math.random() * 27 + 1).toFixed(0)} ${
            months[(Math.random() * 12).toFixed(0)]
        } 2023`
        const size = (Math.random() * 100 + 10).toFixed(0)
        const distance = (Math.random() * 90000000).toFixed(0)
        const isDangerous = Math.random() >= 0.5
        result.push({ name, date, size, distance, isDangerous, id: name })
    }
    return result
}
