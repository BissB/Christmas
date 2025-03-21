import React from 'react';
import styles from './Button_santa.module.css';
import Santa from './img/Santa.png';


const Button_santa = ({onClick , label }) => {


    return (
        <div className= { styles.Button_santa_box}>
        <img src= { Santa }  onClick={onClick} className= {styles.Button_santa} alt= {label}/>
        </div>
    );
}



export default Button_santa;