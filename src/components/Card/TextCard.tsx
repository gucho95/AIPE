import { FC, ReactNode, HTMLAttributes } from "react";
import clsx from "clsx";
import Text, { TextVariant } from "../Typhography/Text";
import Button, { ButtonSize, ButtonVariant } from "../Button";
import ArrowRightIcon from "../Icons/ArrowRight";
import classes from "./style.module.css";

interface TextCardProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  description: ReactNode;
  actionText?: string;
  action?: () => void;
}

const TextCard: FC<TextCardProps> = ({
  title,
  description,
  action,
  actionText,
  className,
  ...props
}) => {
  return (
    <div className={clsx(classes.textCard, className)} {...props}>
      <div>
        {title ? (
          <Text variant={TextVariant.body3} className="font-bold">
            {title}
          </Text>
        ) : null}
      </div>

      <Text
        variant={TextVariant.body4}
        className={clsx("text-black/90 block", {
          "pt-[10px]": Boolean(title),
          "pb-[10px]": Boolean(actionText),
        })}
      >
        {description}
      </Text>

      <div>
        {actionText ? (
          <Button
            variant={ButtonVariant.custom}
            size={ButtonSize.custom}
            className={classes.textCardAction}
          >
            {actionText}
            <ArrowRightIcon className={classes.textCardActionIcon} />
          </Button>
        ) : null}
      </div>
    </div>
  );
};

export default TextCard;
