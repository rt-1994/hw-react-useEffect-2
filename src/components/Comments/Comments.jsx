import React, {useState, useEffect} from "react";
import Pagination from "./Pagination";
import styles from "./Comments.scss"
const Comments = ()=>{
    const [posts, setPosts] = useState([])
    const [page, setPage] = useState(1)

    const loadData = async ()=>{
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${page}/comments`)
        const data = await response.json()
        console.log(data)
        return data
    }

    useEffect(()=>{
        (async ()=> {
           const res = await loadData();
           setPosts(res)
        })()
    }, [page])

    return (
        <div>
            <div className={styles.pagination}>
                <span>Pages</span>
                <button onClick={()=>setPage(1)}>1</button>
                <button onClick={()=>setPage(2)}>2</button>
                <button onClick={()=>setPage(3)}>3</button>
            </div>

            <div className={styles.comments}>
                <ul>
                    <li></li>
                </ul>
            </div>
        </div>
    )
}

export default Comments;