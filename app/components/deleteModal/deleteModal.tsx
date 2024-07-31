import styles from './deleteModal.module.scss'
import {Button} from "@/app/components/Button/Button";

export const DeleteModal = () =>{
    return(
        <div className={styles.container}>
            <div className={styles.head}>
                <span className={styles.title}>Delete playlist</span>
                <span className={styles.text}>Are you sure you want to delete this playlist? This action cannot be undone.</span>
            </div>
            <div className={styles.buttons}>
                <Button bg={'none'} title={'Cancel'} size={'big'}/>
                <Button bg={'pink'} title={'Delete'} size={'big'}/>
            </div>
        </div>
    )
}