import { FC, ReactNode, HTMLAttributes } from "react";
import clsx from "clsx";
import Text, { TextVariant } from "../Typhography/Text";
import classes from "./style.module.css";
import Image from "next/image";
import H3 from "../Typhography/H3";
import Spacing from "../Spacing";
import ArrowUpLongIcon from "../Icons/ArrowUpLong";

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
          <H3
            className={clsx(
              classes.imageCardTitle,
              "group-hover:bg-transparent group-hover:backdrop-blur-0"
            )}
          >
            {title}
          </H3>
          <span
            className={clsx(
              classes.imageCardArrowWrapper,
              "group-hover:hidden"
            )}
          >
            <ArrowUpLongIcon className={classes.imageCardArrow} />
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
