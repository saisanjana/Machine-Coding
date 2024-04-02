import { createContext, useState } from "react";

export const FeatureContext = createContext({});

export const FeatureProvider = ({children}:any) => {
    const [features, setFeatures] = useState({
        darkMode: false,
        cacheApiCalls: false
    })
    return (
        <FeatureContext.Provider value={{features,setFeatures}} >
            {children}
        </FeatureContext.Provider>
    )
}