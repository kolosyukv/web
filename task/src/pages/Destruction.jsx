import {Header} from "../components/header/Header";
import {Card} from "../components/card/Card";
import {useContext} from "react";
import {AsteroidsContext} from "../index";

export const Destruction = ()=>{

    const {destruction} = useContext(AsteroidsContext)

    return <div>
        <Header/>
        {destruction.map(item=><Card key={item.id} {...item}/>)}
    </div>
}