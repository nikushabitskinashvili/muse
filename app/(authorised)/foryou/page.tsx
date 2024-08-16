import styles from './foryou.module.scss'
import { XButton } from '../../components/xButton/xButton';
import {MusicWrapper} from "@/app/components/musicWrapper/musicWrapper";

export default function Page() {
    return (
        <>
            <div className={styles.page}>
                <div className={styles.container}>
                    <div className={styles.head}>
                        <span className={styles.title}>For you</span>
                        <XButton bg={false} />
                    </div>
                    <MusicWrapper/>
                </div>
            </div>
        </>
    )
}