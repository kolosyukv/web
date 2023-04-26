import {Header} from "../components/header/Header";
import {Card} from "../components/card/Card";

export const Destruction = ()=>{
    return <div>
        <Header/>
        <Card/>
        <Card/>
        <Card isDangerous={true}/>
        Destruction page
    </div>
}