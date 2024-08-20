import styles from './foryou.module.scss'
import { XButton } from '../../components/xButton/xButton';
import {MusicWrapper} from "@/app/components/musicWrapper/musicWrapper";
import Link from "next/link";

export default function Page() {
    return (
        <>
            <div className={styles.page}>
                <div className={styles.container}>
                    <div className={styles.head}>
                        <span className={styles.title}>For you</span>
                        <Link href={'/'}><XButton bg={false}/></Link>
                    </div>
                    <MusicWrapper/>
                </div>
            </div>
        </>
    )
}