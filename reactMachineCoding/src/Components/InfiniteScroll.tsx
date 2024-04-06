import { useEffect, useState } from "react"

const InfiniteScroll = () => {
    const [count, setCount] = useState(50);
    const elements:any = [];
    for(let i=1;i<=count;i++){
        elements.push(<div key={i}>{i}</div>)
    }
    useEffect(()=>{
        function onScroll(){
            console.log(window.innerHeight + window.scrollY >= window.document.body.offsetHeight)
            if(window.innerHeight + window.scrollY >= window.document.body.offsetHeight){
                setCount((count) => count+50);
            }
        }
        window.addEventListener('scroll',onScroll)
        return(()=>{
            window.removeEventListener('scroll',onScroll)
        })
    },[count])
    console.log(elements)
    return <div>helo{elements}</div>
}


export default InfiniteScroll;