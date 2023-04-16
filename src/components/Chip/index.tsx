import { FC, HTMLAttributes } from "react";
import clsx from "clsx";
import classes from "./style.module.css";

interface ChipProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: ChipVariant;
  size?: ChipSize;
}

export enum ChipVariant {
  light = "light",
  dark = "dark",
  yellow = "yellow",
  blue = "blue",
  custom = "custom",
}

export enum ChipSize {
  small = "small",
  base = "base",
  custom = "custom",
}

const VariantClasses = {
  [ChipVariant.light]: classes.chipLight,
  [ChipVariant.dark]: classes.chipDark,
  [ChipVariant.yellow]: classes.chipYellow,
  [ChipVariant.blue]: classes.chipBlue,
  [ChipVariant.custom]: "",
};

const SizeClasses = {
  [ChipSize.small]: classes.chipSmallSize,
  [ChipSize.base]: classes.chipBaseSize,
  [ChipSize.custom]: "",
};

const Chip: FC<ChipProps> = ({
  children,
  className,
  variant = ChipVariant.dark,
  size = ChipSize.base,
  ...props
}) => {
  const variantClassName = VariantClasses[variant];
  const sizeClassName = SizeClasses[size];

  return (
    <span
      className={clsx(classes.chip, variantClassName, sizeClassName, className)}
      {...props}
    >
      {children}
    </span>
  );
};

export default Chip;
