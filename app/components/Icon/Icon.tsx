import { FC } from "react";
import { colorsEnum } from "@/app/utils/colors.enum";
import Image from "next/image";

export enum IconEnum {

    AUDIO = "/icons/audio.svg",
    BACKWARD = "/icons/backward.svg",
    BIG_PAUSE = "/icons/bigPause.svg",
    BIN = "/icons/bin.svg",
    BURGER= "/icons/burger.svg",
    CLOCK = "/icons/clock.svg",
    DELETE = "/icons/delete.svg",
    DOTS = "/icons/dots.svg",
    EXIT = "/icons/exit.svg",
    FILLHEART = "/icons/fillheart.svg",
    FORWARD = "/icons/forward.svg",
    GROUP = "/icons/Group.svg",
    HEART = "/icons/heart.svg",
    LEFT_ARROW = "/icons/leftArrow.svg",
    NEXT = "/icons/next.svg",
    PAUSE = "/icons/pause.svg",
    PEN = "/icons/pen.svg",
    PLAY = "/icons/play.svg",
    PLAYMINI = "/icons/playMini.svg",
    PLUS = "/icons/plus.svg",
    PREVOUS = "/icons/prevous.svg",
    RIGHT_ARROW = "/icons/rightArrow.svg",
    ROTATE = "/icons/rotate.svg",
    SEARCH = "/icons/search.svg",
    SHUFFLE = "/icons/shuffle.svg",
    VECTOR = "/icons/Vector.svg",
    VOLUME_FULL = "/icons/volumeFull.svg",
    SHUFFLE_ACTIVE = "/icons/activeshuffle.svg",
}

interface Props {
  Icon: keyof typeof IconEnum;
  size: string | number;
  color?: keyof typeof colorsEnum;
}

const Icon: FC<Props> = ({ Icon, size, color, }) => {
    return ( <Image src={`/icons/${IconEnum[Icon]}`} width={44} height={44} alt="" />)
};

export default Icon;
