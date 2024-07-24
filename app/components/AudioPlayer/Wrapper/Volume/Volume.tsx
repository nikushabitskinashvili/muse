import Image from "next/image";

import styles from "./Volume.module.scss";
import { IconEnum } from "@/app/components/Icon/Icon";
import InputRange from "../../InputRange/InputRange";
import { InputRangeProps } from "@/app/Interfaces/Interfaces";
import { useRecoilState } from "recoil";
import { audioPlayerState } from "@/app/atoms/states";
const Volume = () => {

    const [audioPlayer, setAudioPlayer] = useRecoilState(audioPlayerState)



    return (
        <div className={styles.container}>
            <Image src={IconEnum.VOLUME_FULL} alt="volume" width={24} height={24} />
            <input
                type="range"
                className={styles.range}
            />
        </div>
    )
}

export default Volume;