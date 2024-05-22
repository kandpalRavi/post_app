import { useEffect, useState } from "react";

function getData({page}){
    return fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`).then(res =>{
        return res.json()
    })
}

function Posts(){
    const [posts,setPosts] = useState([]);
    const [loding,setLoding] = useState(false);
    const [page,setPage] = useState(1);
    useEffect( () =>{
        handleFetchData();
    },[page]);

    const handleFetchData = async (page=1)=>{
        try{
            setLoding(true);
            const data = await getData({page});
            setPosts(data);
            setLoding(false);
        }
        catch(err){
            setLoding(false);
            console.log(err)
        }
    }
    const handlePageChange =(changeBy)=>{
        setPage(page+changeBy)
    }
    // console.log(posts)
    if(loding){
        return <h3>Loding...</h3>
    }
    return(
       <div>
        <h1>Posts</h1>
        
        <ul>
            {posts.map(item =><li key={item.id}>{item.title}</li>)}
        </ul>

        <button disabled ={page===1} onClick={() =>handlePageChange(-1)}>Prev</button>
        <button>{page}</button>
        <button onClick={() => handlePageChange(1)}>Next</button>
       </div> 
    )
}

export default Posts;