// import CustomSwitchCase, { CustomCase, DefaultCase } from "./Components/CustomSwitchCase";
import InfiniteScroll from "./Components/InfiniteScroll";
import TwoStepLoginForm from "./Components/TwoStepLoginForm";
// import MultiStepper from "./Components/MultiStepper";
// import Sample from "./Components/Sample";
import { FeatureProvider } from "./Contexts/Features"

const App = () => {
  return(
    <FeatureProvider>
      {/* <CustomSwitchCase value={2}>
        <CustomCase value={10}>Helo 10</CustomCase>
        <CustomCase value={1000}>Helo 100</CustomCase>
        <CustomCase value={100}>Helo 100</CustomCase>
        <CustomCase value={100}>Helo 100 1</CustomCase>
        <CustomCase value={(e:number)=>e<10}>Number less than 10 amma</CustomCase>

        <DefaultCase>Default</DefaultCase>
        <DefaultCase>Default</DefaultCase> */}

      {/* </CustomSwitchCase> */}
      {/* <InfiniteScroll/> */}
      <TwoStepLoginForm/>
    </FeatureProvider>
    
  )
}
export default App;