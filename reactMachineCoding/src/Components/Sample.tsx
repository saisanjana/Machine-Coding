import { useContext } from "react"
import { FeatureContext } from "../Contexts/Features";
import Feature from "./Feature";

const Sample = () => {
    let {features} = useContext<any>(FeatureContext);
    
    return(<div>
        {features.darkMode ? "in dark mode": "in light mode" }
        <Feature feature={'darkMode'} value={true}>
            in dark mode
        </Feature>
        <Feature feature={'darkMode'} value={false}>
            in light mode
        </Feature>
        </div>)
}
export default Sample;