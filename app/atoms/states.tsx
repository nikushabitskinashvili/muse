import { atom } from "recoil";


export const imageChangeState = atom({
    key: 'imageChange',
    default: ''
})

export const audioPlayerState = atom({
    key: 'audioPlayerState',
    default: {
        currentTime: 0,
        duration: 0,
        currentSongIndex: 0,
        loop: false,
    },
});

