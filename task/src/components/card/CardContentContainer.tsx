import {Card} from "./Card";
import {useContext} from "react";
import {AsteroidsContext} from "../asteroids-context/AsteroidsContext";

export const CardContentContainer = (props)=>{
    const {DistanceMode} = useContext(AsteroidsContext);
    return <Card {...props} DistanceMode={DistanceMode}/>
}