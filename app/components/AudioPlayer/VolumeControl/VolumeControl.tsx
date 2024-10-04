import React, { useRef } from 'react';
import Image from 'next/image';
import styles from './VolumeControl.module.scss';
import { IconEnum } from '../../Icon/Icon';
import { InputRangeProps } from '@/app/Interfaces/Interfaces';

type VolumeControlProps = {
  audioRef: React.RefObject<HTMLAudioElement>;
};

const VolumeControl: React.FC<VolumeControlProps> = ({ audioRef }) => {
  const MAX = 100;

  function handleVolume(e: React.ChangeEvent<HTMLInputElement>): void {
    const { value } = e.target;
    const volume = Number(value) / MAX;

    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }



  return (
    <div className={styles.container}>
      <Image src={IconEnum.VOLUME_FULL} alt="volume" width={24} height={24} />
      <input
        type="range"
        className={styles.range}
        min={0}
        max={MAX}
        onChange={(e) => handleVolume(e)}
      />
    </div>
  );
};

export default VolumeControl;
