import { useEffect, useRef, useState } from 'react';
import './styles.css'
const MultiStepper = () => {
    let stepCounts = [1,2,3,4,5];
    const [currentStep, setCurrentStep] = useState(0);
    const stepRef = useRef<any>(null);
    const onPrevClick = () => {
        if(currentStep!==0){
            let temp = currentStep - 1
            setCurrentStep(temp);
        }
    }
    const onNextClick = () => {
        if(currentStep !== (stepCounts.length-1)){
            let temp = currentStep + 1
            setCurrentStep(temp);
        }
    }
    const onNumberClick = (number:number) => {
        setCurrentStep(number-1)
    }
    useEffect(()=>{
        if(stepRef?.current){
            let width = (100/(stepCounts.length-1)) * currentStep;
            stepRef.current.style.width = `${width}%`
        }
    },[currentStep])

    return(
        <>
            <div className='numbersContainer'>
                {stepCounts.map((number)=>{
                    return <NumberChip number={number} key={number} onNumberClick={onNumberClick} currentStep={currentStep}/>
                })}
                <div ref={stepRef} className='step'></div>
            </div>
            <div  className='buttons'>
            <button onClick={onPrevClick}>Prev</button>
            <button onClick={onNextClick}>Next</button>
            </div>
            
        
        </>
        
    )
}
const NumberChip = ({number,onNumberClick,currentStep}:any) => {
    return <div className={`numberChip ${number<=(currentStep+1) ? 'active':""}`} onClick={() => {onNumberClick(number)}}>{number}</div>
}
export default MultiStepper;