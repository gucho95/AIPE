import { FC, ReactNode, HTMLAttributes } from "react";
import clsx from "clsx";
import Text, { TextVariant } from "../Typhography/Text";
import Button, { ButtonSize, ButtonVariant } from "../Button";
import ArrowRightIcon from "../Icons/ArrowRight";
import classes from "./style.module.css";
import Image from "next/image";
import H3 from "../Typhography/H3";
import Spacing from "../Spacing";
import ArrowUpLong from "../Icons/ArrowUpLong";

interface ImageCardProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  description: ReactNode;
  imageSrc: string;
  imageAlt: string;
}

export const mockDataImageCard = [
  {
    title: "Единая концепция + Единая концепция",
    description:
      "Мы предоставляем общую модель одежды, но уникальный принт, который создаешь лично ты с помощью предоставляемой нейронной сети",
    imageSrc: "/mockImages/image 1.png",
    imageAlt: "alt text",
  },

  {
    title: "Неповторяемые принты",
    description:
      "Мы предоставляем общую модель одежды, но уникальный принт, который создаешь лично ты с помощью предоставляемой нейронной сети",
    imageSrc: "/mockImages/image 2.png",
    imageAlt: "alt text",
  },
  {
    title: "Передача NFT",
    description:
      "Мы предоставляем общую модель одежды, но уникальный принт, который создаешь лично ты с помощью предоставляемой нейронной сети Мы предоставляем общую модель одежды, но уникальный принт, который создаешь лично ты с помощью предоставляемой нейронной сети",
    imageSrc: "/mockImages/image 3.png",
    imageAlt: "alt text",
  },
];

const ImageCard: FC<ImageCardProps> = ({
  title,
  description,
  imageSrc,
  imageAlt,
  className,
  ...props
}) => {
  return (
    <div className={clsx(classes.imageCard, className, "group")} {...props}>
      <Image src={imageSrc} alt={imageSrc} fill={true} />
      <div
        className={clsx(classes.imageCardBlurBlock, "hidden group-hover:block")}
      />

      <div className={classes.imageCardContent}>
        <div className="px-5 group-hover:px-0">
          <H3 className="text-light pl-11 py-[11px] pr-5 inline-block rounded-[10px] backdrop-blur-lg  bg-[rgba(29,29,31,0.1)] group-hover:bg-transparent group-hover:backdrop-blur-0 max-w-full truncate">
            {title}
          </H3>
          <span className="absolute bottom-0 left-[38px]  overflow-hidden transition-all ease-linear group-hover:hidden">
            <ArrowUpLong className="stroke-white h-24 flex-shrink-0" />
          </span>
          <Spacing className="pt-6" />
        </div>
        <div className="hidden group-hover:block px-11">
          <Text
            variant={TextVariant.body1}
            className={classes.imageCardDescription}
          >
            {description}
          </Text>
          <Spacing className="pt-11" />
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
