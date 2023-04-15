import { ButtonHTMLAttributes, FC, ReactElement } from "react";
import clsx from "clsx";
import SpinnerIcon from "../Icons/Spinner";
import classes from "./style.module.css";

export enum ButtonVariant {
  primary = "primary",
  dark = "dark",
  outlined = "outlined",
  custom = "custom",
}

export enum ButtonSize {
  small = "small",
  base = "base",
  large = "large",
  custom = "custom",
}

const VariantClasses = {
  [ButtonVariant.primary]: classes.buttonPrimary,
  [ButtonVariant.dark]: classes.buttonDark,
  [ButtonVariant.outlined]: classes.buttonOutlined,
  [ButtonVariant.custom]: "",
};

const SizeClasses = {
  [ButtonSize.custom]: "",
  [ButtonSize.small]: "px-4 py-2.5",
  [ButtonSize.base]: " px-6 py-[18px]",
  [ButtonSize.large]: "px-8 py-4",
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  icon?: ReactElement;
}

const Button: FC<ButtonProps> = ({
  variant = ButtonVariant.primary,
  size = ButtonSize.base,
  children,
  className,
  loading,
  icon,
  ...props
}) => {
  const variantClassName = VariantClasses[variant];
  const sizeClassName = SizeClasses[size];

  const finalClassName = clsx(
    variantClassName,
    sizeClassName,
    { [classes.buttonLoading]: loading },
    { [classes.buttonEnabled]: !loading },
    classes.buttonBase,
    className
  );

  return (
    <button {...props} className={finalClassName}>
      {/* show spinner on loading */}
      {loading ? (
        <span className={classes.spinnerWrapper}>
          <SpinnerIcon className={classes.spinner} />
        </span>
      ) : null}
      {/* show icon if provided */}
      {icon}
      {icon && children ? <span className="pl-4" /> : null}
      {/* button content */}
      {children}
    </button>
  );
};

export default Button;
