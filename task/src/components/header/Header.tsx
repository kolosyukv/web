import {Link} from "react-router-dom";
import styles from "./Header.module.css"
import {getUserKey} from "../../Utilits/getUserKey";
import {useState} from "react";

export const Header = ()=>{
    const [inputOpened, setInputOpened] = useState(false)
    return <div className={styles.container}>
        <div>
            <h1>ARMAGGEDON V</h1>
            <div>Сервис мониторинга и уничтожения астероидов, опасно подлетающих к Земле.</div>
        </div>
        <div>
            <Link to={"/asteroids"}>Астероиды</Link>
            <Link to={"/destruction"}>Уничтожение</Link>
        </div>
        <div>
            {getUserKey() === "DEMO_kEY" ? <button onClick={()=>setInputOpened(!inputOpened)}>Unauthorized</button> : <div>API key provided</div>}
        </div>
        {inputOpened ? <input onChange={(ev) => {
            if (ev.target.value.length == 40) {
                localStorage.setItem("API_KEY", ev.target.value);
                setInputOpened(false)
            }
        }
        }/> : null}
    </div>
}

