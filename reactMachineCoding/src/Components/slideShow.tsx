import { useEffect, useState } from "react"

const SlideShow = () => {
    const [images,setImages] = useState<any>([]);
    const [page,setPage] =useState(1);
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        fetch('https://api.thecatapi.com/v1/images/search?api_key=live_JijxVofsQ60ID6RNd40PeWuZ6aPRzdrAVAJLEonqGrelsv1abXmRUKGkj032kf3U&limit=10').then(async (response)=>{
            let json = await response.json();
            setImages(json);
            setLoading(false);
        })
    },[])

    return(loading? <div>loading</div>:<div style={{display:"flex", flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
        <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
            <div style={{alignSelf:"center",cursor:"pointer"}} onClick={()=>{
                if(page!==1){
                    setPage((page)=>page-1)
                }
            }}>Prev</div>
            {images.map((image:any,index:number)=>{
                return <img key={"image"+index}src={image.url} style={{height:'200px', width:'200px',margin:"5px",display:(index===page-1)?"block":"none",transition:"linear"}} loading="eager"/>
            })}
            <div style={{alignSelf:"center",cursor:"pointer"}} onClick={()=>{
                if(page!==images.length){
                    setPage((page)=>page+1)
                }
            }}>Next</div>
        </div>
        <div>Cats Cats!</div>
        <div style={{display:"flex",flexDirection:"row",justifyContent:"space-around"}}> 
        {images.map((_:any,index:number)=>{
            return <div key={index} onClick={()=>{setPage(index+1)}} style={{cursor:"pointer",margin:"3px",backgroundColor:index===page-1?"red":''}}>{index+1}</div>
        })}
        </div>
    </div>);

}

export default SlideShow;