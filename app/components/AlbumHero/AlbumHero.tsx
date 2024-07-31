import styles from './AlbumHero.module.scss';
import {Button} from '@/app/components/Button/Button';


interface Props {
    title: string;
    image: string;
    total: number;
}

export const AlbumHero = (props: Props) =>{
    return(
        <div className={styles.container}>
            <h2 className={styles.h2}>{props.title}</h2>
            <div className={styles.main}>
                <img className={styles.img} src={props.image} alt={props.title} />
                <div className={styles.about}>
                    <h3 className={styles.h3}>{props.title}<span>Album</span></h3>
                    <div className={styles.control}>
                        <div className={styles.buttons}>
                            <Button title={'Play'} bg={'pink'}/>
                            <Button title={'Shuffle'} bg={'none'} icon={'SHUFFLE'} hoverIcon={'SHUFFLE'} activeIcon={'SHUFFLE'}/>
                        </div>
                        <span className={styles.total}>{`${props.total} listeners`}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}