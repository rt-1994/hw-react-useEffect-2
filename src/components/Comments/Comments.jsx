import React, {useState, useEffect} from "react";
import styles from "./Comments.scss"
import cn from "classnames";

const Comments = () => {
    const [posts, setPosts] = useState([])
    const [page, setPage] = useState(1)
    const [load, setLoad] = useState(false)
    const [status, setStatus] = useState(null)

    const loadData = async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${page}/comments`)
        if(response.status === 200){
           setTimeout(()=>{
                setStatus(response.status)
            }, 2000)

        }
        const data = await response.json()
        console.log(data)
        return data
    }
    const changePage = (event)=>{
        setStatus(0)
        setPage(Number(event.target.innerHTML))
    }


    useEffect(() => {
        (async () => {
            setStatus(null)
            const res = load === true ? await loadData() : [];
            setPosts(res)
        })()
    }, [page,load])

    return (
        <div className={styles.commentsBlock}>
            <div className={styles.pagination}>
                <span>Pages</span>
                <button onClick={() => changePage(event)} className={cn(styles.paginationButton, page===1?styles.activeButton:"")}>1</button>
                <button onClick={() => changePage(event)} className={cn(styles.paginationButton, page===2?styles.activeButton:"")}>2</button>
                <button onClick={() => changePage(event)} className={cn(styles.paginationButton, page===3?styles.activeButton:"")}>3</button>
            </div>

            <button onClick={() => setLoad(!load)}
                    className={cn(styles.button, load === false ? styles.btnBlue : styles.btnRed)}>{load === false ? "Mount Comment Component" : "Unmount Comment Component"}</button>

            <div className={styles.comments}>
                <ul>
                    {status==200 && load ? posts.map((item)=><li key={item.id}><h4>{item.name}</h4><p>{item.body}</p></li>):""}
                    {status!==200 && load ? <div className={styles.loaderBlock}><p>Load</p> <p className={styles.loader}></p></div>:""}
                </ul>
            </div>
        </div>
    )
}

export default Comments;