import { useContext } from "react"
import { FeatureContext } from "../Contexts/Features"

const Feature = ({feature,value,children}:any) => {
    const {features} = useContext<any>(FeatureContext);
    return(
        features[feature] === value ? children :null
    )
    
}
export default Feature;