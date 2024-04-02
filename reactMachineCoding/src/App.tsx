import MultiStepper from "./Components/MultiStepper";
// import Sample from "./Components/Sample";
import { FeatureProvider } from "./Contexts/Features"

const App = () => {
  return(
    <FeatureProvider>
      <MultiStepper/>
    </FeatureProvider>
    
  )
}
export default App;