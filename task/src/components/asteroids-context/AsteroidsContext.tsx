import {createContext, FC, ReactNode, useState} from "react";

export const AsteroidsContext = createContext(null);

type AsteroidsContextProviderProps = {
    children?: ReactNode
};

export const AsteroidsContextProvider: FC<AsteroidsContextProviderProps> = ({children})=>{
    const [onlyDangerous, setOnlyDangerous] = useState(false);
    const [DistanceMode, setDistanceMode] = useState(true)
    const [destruction, setDestruction] = useState([]);
    const addAsteroid = (asteroid)=>{
        setDestruction([...destruction.filter(item=>item.id !== asteroid.id), asteroid])
    }
    const deleteAsteroid = (asteroid)=>{
        setDestruction([...destruction.filter(item=>item.id !== asteroid.id)])
    }
    return <AsteroidsContext.Provider value={{onlyDangerous, setOnlyDangerous, DistanceMode, setDistanceMode, addAsteroid}}>
        {children}
    </AsteroidsContext.Provider>
}

