import react, { useEffect, useRef , useState } from "react";
import styles from './Button.module.css';
import { Button_music , Button_santa } from './index';
import stage from './img/stage.png';
import curtainsLE from './img/curtains1.png';
import curtainsRE from './img/curtains2.png';



const Button = () => {

    const [ toggle, setToggle] = useState(false);
    const audioRef = useRef(new Audio("/audio/snowman.mp3"));
    

    const handdleToggle = () => {
        setToggle((prevState) => !prevState );
    }

    useEffect(() => {
        const audio = audioRef.current;

        const handleAudioEnd = () => {
            audio.currentTime = 0;
            audio.play();
        };

        audio.addEventListener('ended', handleAudioEnd);

        if (toggle) {
            audio.play();
        } else {
            audio.pause();
        }

        return () => {
            audio.removeEventListener('ended', handleAudioEnd);
            audio.pause();
            audio.currentTime = 0;
        };

    },[ toggle ]);


    return(
        <div className= {styles.Button_ALLbox}> {/* 3-1 */}
            
            <Button_music onClick= {audioRef} /> 
            <div className= {`${styles.movingcurtains} ${toggle ? styles.Button_on : styles.Button_off}`}  > {/* 3-2 */}
                <img src= { curtainsLE } className= {`${styles.left } ${toggle ? styles.Button_on : styles.Button_off}`}  /> {/* 3-3 */}
                <img src= { curtainsRE } className= {`${styles.right } ${toggle ? styles.Button_on : styles.Button_off}`} /> {/* 3-3 */}
            </div>
            <img src= { stage } alt='무대사진' className={ styles.stage } /> {/* 3-5 */}
            <Button_santa onClick={handdleToggle} label={toggle ?  "끄기" : "켜기"} /> {/* 3-4 */}

        </div>
    );
}


export default Button;