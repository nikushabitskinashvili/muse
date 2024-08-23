import styles from './reusableModal.module.scss'
import {IconEnum} from "@/app/components/Icon/Icon";
import {Button} from "@/app/components/Button/Button";
import {XButton} from "@/app/components/xButton/xButton";

interface Props {
    title: string,
    label: string,
    placeholder: string
    closeModal: ()=>void
}

export const ReusableModal = (props: Props) => {
    return (
        <div className={styles.container}>
            <div className={styles.head}>
                <span className={styles.title}>{props.title}</span>
                <XButton closeModal={props.closeModal} bg={true}/>
            </div>
            <form className={styles.form}>
                <div className={styles.inputCont}>
                    <label className={styles.label} htmlFor={props.label}>{props.label}</label>
                    <input className={styles.input} type='text' id={props.label} placeholder={props.placeholder}/>
                </div>
                <Button bg={'pink'} title={props.title} size={'huge'}/>
            </form>
        </div>
    )
}