'use client'

import styles from './Hero.module.scss';
import Navbar from '../Navbar/Navbar';
import {Button} from "@/app/components/Button/Button";
import {IconEnum} from "@/app/utils/Icon/Icon";

interface HeroProps {
    className?: string
}

const Hero = ({className}: HeroProps) => {


    return (
        <section className={styles.section}>
            <div className={styles.content}>
                <div className={styles.container}>
                    <div className={styles.wrapper}>
                        <h2 className={styles.heroHeading}>Arianna Grande : Thank You Next</h2>
                        <p className={styles.heroText}>A self-empowerment anthem reflecting on
                            past relationships with gratitude and moving
                            forward with confidence.
                        </p>
                        <Button bg={'blue'} title={'Play'}></Button>
                    </div>
                    <img src={'./images/ariana.png'} alt="img" width={265} height={392}/>
                </div>
            </div>
        </section>
    )
}

export default Hero;


