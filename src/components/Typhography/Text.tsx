import { FC, HTMLAttributes } from "react";
import clsx from "clsx";
import classes from "./style.module.css";

export enum TextVariant {
  body1 = "body1",
  body2 = "body2",
  body3 = "body3",
  body4 = "body4",
  custom = "custom",
}

interface TextProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: TextVariant;
}

const VariantClasses = {
  [TextVariant.body1]: classes.textBody1,
  [TextVariant.body2]: classes.textBody2,
  [TextVariant.body3]: classes.textBody3,
  [TextVariant.body4]: classes.textBody4,
  [TextVariant.custom]: "",
};

const Text: FC<TextProps> = ({
  children,
  className,
  variant = TextVariant.body1,
  ...props
}) => {
  const variantClassName = VariantClasses[variant];
  return (
    <span
      className={clsx(classes.text, variantClassName, className)}
      {...props}
    >
      {children}
    </span>
  );
};

export default Text;
