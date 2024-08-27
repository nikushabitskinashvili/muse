import {FC} from "react";
import {colorsEnum} from "@/app/utils/colors.enum";


export enum IconEnum {
    AUDIO = "/icons/audio.svg",
    BACKWARD = "/icons/backward.svg",
    BIG_PAUSE = "/icons/bigPause.svg",
    BIN = "/icons/bin.svg",
    BURGER = "/icons/burger.svg",
    CLOCK = "/icons/clock.svg",
    DELETE = "/icons/delete.svg",
    DOTS = "/icons/dots.svg",
    EXIT = "/icons/exit.svg",
    FORWARD = "/icons/forward.svg",
    GROUP = "/icons/Group.svg",
    HEART = "/icons/heart.svg",
    LEFT_ARROW = "/icons/leftArrow.svg",
    LOGOUT = "/icons/logOut.svg",
    NEXT = "/icons/next.svg",
    PAUSE = "/icons/pause.svg",
    PAUSESMALL = "/icons/pauseSmall.svg",
    PEN = "/icons/pen.svg",
    PLAYSMALL = "/icons/PlaySmall.svg",
    PLUS = "/icons/plus.svg",
    PREVOUS = "/icons/prevous.svg",
    PLAY = "/icons/play.svg",
    PLAYMINI = "/icons/playMini.svg",
    RIGHT_ARROW = "/icons/rightArrow.svg",
    ROTATE = "/icons/rotate.svg",
    SEARCH = "/icons/search.svg",
    SHUFFLE = "/icons/shuffle.svg",
    SHUFFLEHOVER = "/icons/shuffleHover.svg",
    VECTOR = "/icons/Vector.svg",
    VOLUME_FULL = "/icons/volumeFull.svg",
    WHITE_PLAY = "/icons/pinkPlayWhite.svg",
}

interface Props {
    Icon: keyof typeof IconEnum;
    size?: string | number;
    color?: keyof typeof colorsEnum;
}

const Icon: FC<Props> = ({Icon, size, color,}) => {
    return (<img src={`/icons/${IconEnum[Icon]}`}/>)
};

export default Icon;