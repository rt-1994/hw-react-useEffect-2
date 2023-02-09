import React, {useState, useEffect, useRef} from "react";
import UserCard from "./UserCard";
import styles from "./User.scss";

const User = () => {

    const [user, setUser] = useState(null)
    const [name, setName] = useState("")
    const [picture, setPicture] = useState("")
    const [status, setStatus] = useState(300)



    const loadData = async ()=>{

            const response = await fetch("https://randomuser.me/api/?results=1")
                .then(response => {

                    if(response.status >= 200 && response.status < 300){
                        setStatus(true)
                        return  response.json()
                    }
                });
            const data = response.results[0];
            setUser(data)
            setName(data.name.first)
            setPicture(data.picture.large)


    }

    useEffect(() => {
        setTimeout(function timer (){
            loadData()
            setStatus(300)
            setTimeout(()=>{
                timer()
            },3000)
        },3000)
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