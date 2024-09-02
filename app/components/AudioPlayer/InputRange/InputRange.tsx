'use client'
import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { audioPlayerState } from '@/app/atoms/states';
import styles from './InputRange.module.scss';
import { InputRangeProps } from '@/app/Interfaces/Interfaces';

const InputRange: React.FC<InputRangeProps> = ({ defaultValue, onChange, progressRef }) => {
    const [audioPlayer, setAudioPlayer] = useRecoilState(audioPlayerState);

    useEffect(() => {
        if (progressRef.current) {
            progressRef.current.value = String((audioPlayer.currentTime / audioPlayer.duration) * 100);
        }
    }, [audioPlayer.currentTime, audioPlayer.duration, progressRef]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e);
        const newTime = (e.target.valueAsNumber / 100) * audioPlayer.duration;
        setAudioPlayer((prev) => ({ ...prev, currentTime: newTime }));
    };

    return (
        <input
            type="range"
            className={styles.range}
            ref={progressRef}
            value={audioPlayer.currentTime ? (audioPlayer.currentTime / audioPlayer.duration) * 100 : 0}
            onChange={handleChange}
        />
    );
};

export default InputRange;
