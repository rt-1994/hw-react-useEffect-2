import React, {useState, useEffect, useRef} from "react";
import UserCard from "./UserCard";
import styles from "./User.scss";

const User = () => {

    const [user, setUser] = useState(null)
    const [name, setName] = useState("")
    const [picture, setPicture] = useState("")
    const [status, setStatus] = useState(false)



    const loadData = async ()=>{

            const response = await fetch("https://randomuser.me/api/?results=1")
                .then(response => {
                    if(response.status >= 200 && response.status < 300){
                        return  response.json()
                    }
                });
            const data = response.results[0];
            setUser(data)
            setName(data.name.first)
            setPicture(data.picture.large)
            setStatus(true)
    }

    useEffect(() => {
        setTimeout(function timer (){
            loadData()
            setStatus(false)
            setTimeout(()=>{
                timer()
            },5000)
        },5000)
    }, [])

    return (
        <div className={styles.users}>
            {
                status === true ?
                    <UserCard
                        name={name}
                        picture={picture}
                    /> :
                    <p>Pending...</p>
            }


        </div>
    )
}

export default User;