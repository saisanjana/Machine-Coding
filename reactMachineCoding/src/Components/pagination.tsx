import { useEffect, useState } from "react";

const Pagination = () => {
    let [beers,setBeers] = useState<any>([]);
    let [page,setPage] = useState(1);
    let [loading,setLoading] = useState(true);
    let pages = [1,2,3,4,5,6,7,8,9,10];
    

    useEffect(()=>{
        setLoading(true)
        fetch('https://api.thecatapi.com/v1/images/search?api_key=live_JijxVofsQ60ID6RNd40PeWuZ6aPRzdrAVAJLEonqGrelsv1abXmRUKGkj032kf3U&limit=10&page='+page).then(async (response:any)=>{
            let json = await response.json();
            setBeers(json)
            setLoading(false)
        })
    },[page])

    return(loading ?<div>Loading.......</div> :<div>
        <div className="flex flex-row flex-wrap">
        {
            beers.map((beer:any)=>{
                return <img src={beer.url} className="h-28 w-28"></img>
            })
        }
        </div>
        <div className="flex flex-row justify-evenly">
            {pages.map((page)=>{
                return <div className={"m-2 cursor-pointer"} onClick={()=>{
                    setPage(page)
                }}>{page}</div>
            })}
        </div>

    </div>)

}
export default Pagination;