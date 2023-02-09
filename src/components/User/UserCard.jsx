import React from "react";
import styles from "./User.scss";

const UserCard = (props)=>{

    return(
        <div className={styles.userCard}>
            <h3></h3>
            <p> Name: {props.name} </p>
            <img src={props.picture} alt=""/>
        </div>

    )
}

export default UserCard;