import styles from './AlbumHero.module.scss';
import { Button } from '@/app/components/Button/Button';
import Image from 'next/image';
import { IconEnum } from '../Icon/Icon';


interface Props {
    title?: string;
    img: string;
    total?: number;
}

export const AlbumHero = (props: Props) => {
    return (
        <div className={styles.container}>
            <h2 className={styles.h2}>{props.title}</h2>
            <div className={styles.main}>
                <img className={styles.img} src={props.img} alt={props.title} />
                <div className={styles.about}>
                    <div className={styles.aboutWrapper}>
                        <h3 className={styles.h3}>{props.title}<span> Album</span></h3>
                        <div className={styles.control}>
                            <div className={styles.buttons}>
                                <Button title={'Play'} bg={'pink'} />
                                <Button title={'Shuffle'} bg={'none'} icon={'SHUFFLE'} hoverIcon={'SHUFFLE'} activeIcon={'SHUFFLE'} />
                            </div>
                            <span className={styles.total}>{`${props.total} listeners`}</span>
                        </div>
                    </div>

                    <div className={styles.images}>
                        <Image src={IconEnum.PAUSE} alt='pause' width={24} height={24}></Image>
                        <Image src={IconEnum.SHUFFLE} alt='shuffle' width={24} height={24}></Image>
                    </div>
                </div>

            </div>
        </div>
    )
}