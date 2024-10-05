import React, { useRef, useState } from 'react';
import Image from 'next/image';
import styles from './VolumeControl.module.scss';
import { IconEnum } from '../../Icon/Icon';

type VolumeControlProps = {
  audioRef: React.RefObject<HTMLAudioElement>;
};

const VolumeControl: React.FC<VolumeControlProps> = ({ audioRef }) => {
  const MAX = 100;
  const [muted, setMuted] = useState(false);
  const prevVolumeRef = useRef(1);

  function handleVolume(e: React.ChangeEvent<HTMLInputElement>): void {
    const { value } = e.target;
    const volume = Number(value) / MAX;

    if (audioRef.current) {
      audioRef.current.volume = volume;
      if (volume > 0) {
        setMuted(false);
      }
    }
  }

  function handleMute(): void {
    if (audioRef.current) {
      if (muted) {
        audioRef.current.volume = prevVolumeRef.current;
        setMuted(false);
      } else {
        prevVolumeRef.current = audioRef.current.volume;
        audioRef.current.volume = 0;
        setMuted(true);
      }
    }
  }

  return (
    <div className={styles.container}>
      <Image
        src={muted ? IconEnum.VOLUME_MUTED : IconEnum.VOLUME_FULL
        }
        alt="volume"
        width={24}
        height={24}
        onClick={handleMute}
      />
      <input
        type="range"
        className={styles.range}
        min={0}
        max={MAX}
        onChange={(e) => handleVolume(e)}
        value={muted ? 0 : (audioRef.current?.volume ?? 1) * MAX}
      />
    </div>
  );
};

export default VolumeControl;
