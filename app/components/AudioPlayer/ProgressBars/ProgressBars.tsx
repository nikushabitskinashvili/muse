import Image from "next/image";
import styles from './ProgressBars.module.scss';
import InputRange from '../InputRange/InputRange';
import { formatTime } from "@/app/Helpers/Helpers";

type ProgressBarsProps = {
    currentTime: number;
    duration: number;
    onProgressChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    progressRef: React.RefObject<HTMLInputElement>;
    ipadProgressRef: React.RefObject<HTMLInputElement>;
};

const ProgressBars: React.FC<ProgressBarsProps> = ({ currentTime, duration, onProgressChange, progressRef, ipadProgressRef }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.progressBar}>
                <p>{formatTime(currentTime)}</p>
                <InputRange
                    defaultValue={String((currentTime / duration) * 100)}
                    onChange={onProgressChange}
                    progressRef={progressRef}
                />
                <p>{formatTime(duration)}</p>
            </div>
          
        </div>
    );
};

export default ProgressBars;
