import React from "react";

import Card from "../UI/Card";
import UserListing from "./userListing/UserListing";
import Playground from "./playground/Playground";

import styles from './Dashboard.module.css';

const Dashboard = () => {
    return(
        <Card className={styles.dashboard}>
            <Card>
                <UserListing />
            </Card>
            <Card>
                <Playground />
            </Card>
        </Card>
    )
}

export default Dashboard;