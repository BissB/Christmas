import React from "react";
import { Globe, Box, Snowman, Tree, Snowfall } from '.';
import styles from "./Xmas.module.css";

const Xmas = () => {
    return (
        <div className={styles.container}>
            <div className={styles.container2}>
                <div className={styles.obj}>
                    <Box />
                    <Snowman />
                    <Tree />
                    <Globe />   
                </div>
                <div className={styles.obj2}>
                    <Snowfall />
                </div>
            </div>
        </div>
    );   
};

export default Xmas;