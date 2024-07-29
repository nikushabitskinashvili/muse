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
        
            <div className={styles.progressBar}>
                <InputRange
                    defaultValue={String((currentTime / duration) * 100)}
                    onChange={onProgressChange}
                    progressRef={progressRef}
                />
                <p className={styles.formatTxt}>{formatTime(duration)}</p>
            </div>
          
       
    );
};

export default ProgressBars;
