import React from 'react';
import styles from './styles.scss';
import Clock from "./components/Clock/Clock";
import {Tabs, Tab} from "./components/Tabs/Tabs";
import tabStyles from "./components/Tabs/Tabs.scss";
import User from "./components/User/User";



localStorage.setItem("count", 0);

const App = () => {
    return (
        <div className={tabStyles.tabs}>
            <h1>Home work(useState, useEffect)</h1>
            <Tabs>
                <Tab label="Clock">
                    <Clock/>
                </Tab>
                <Tab label="User">
                    <User/>
                </Tab>
            </Tabs>
        </div>
    )
}

export default App;