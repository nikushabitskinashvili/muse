import { FC } from "react";
import { colorsEnum } from "@/app/utils/colors.enum";

export enum IconEnum {
    AUDIO = "public/icons/audio.svg",
    BACKWARD = "public/icons/backward.svg",
    BIG_PAUSE = "public/icons/bigPause.svg",
    BIN = "public/icons/bin.svg",
    CLOCK = "public/icons/clock.svg",
    DELETE = "public/icons/delete.svg",
    DOTS = "public/icons/dots.svg",
    EXIT = "public/icons/exit.svg",
    FORWARD = "public/icons/forward.svg",
    GROUP = "public/icons/Group.svg",
    HEART = "public/icons/heart.svg",
    LEFT_ARROW = "public/icons/leftArrow.svg",
    NEXT = "public/icons/next.svg",
    PAUSE = "public/icons/pause.svg",
    PEN = "public/icons/pen.svg",
    PLUS = "public/icons/plus.svg",
    PREVOUS = "public\icons/prevous.svg",
    RIGHT_ARROW = "public/icons/rightArrow.svg",
    ROTATE = "public/icons/rotate.svg",
    SEARCH = "public/icons/search.svg",
    SHUFFLE = "public/icons/shuffle.svg",
    VECTOR = "public/icons/Vector.svg",
    VOLUME_FULL = "public/icons\\/volumeFull.svg"
}

interface Props {
    Icon : keyof typeof IconEnum;
    size: string | number;
    color?: keyof typeof colorsEnum;
}

const Icon: FC<Props> = ({ Icon, size, color, }) => {
    return ( <img src={`/icons/${IconEnum[Icon]}`} />)
};

export default Icon;