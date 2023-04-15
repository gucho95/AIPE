import { ButtonHTMLAttributes, FC, ReactElement, ReactNode } from "react";
import clsx from "clsx";
import SpinnerIcon from "../Icons/Spinner";

export enum ButtonVariant {
  primary = "primary",
  dark = "dark",
  darkOutlined = "darkOutlined",
  ghost = "ghost",
  custom = "custom",
}

export enum ButtonSize {
  small = "small",
  base = "base",
  large = "large",
  custom = "custom",
}

const VariantClasses = {
  [ButtonVariant.primary]:
    "bg-primary rounded-lg truncate text-dark disabled:text-primaryDisabled stroke-dark",
  [ButtonVariant.dark]:
    "bg-dark rounded-lg truncate text-white disabled:text-primaryDisabled disabled:bg-primary stroke-white",
  [ButtonVariant.darkOutlined]:
    "bg-white rounded-lg truncate text-dark disabled:text-primaryDisabled stroke-dark ring-2 ring-dark disabled:ring-primary",
  [ButtonVariant.ghost]:
    "text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:ring-2 focus:ring-gray-100 ",
  [ButtonVariant.custom]: "",
  //  add your variants here
};

const SizeClasses = {
  [ButtonSize.custom]: "",
  [ButtonSize.small]: "px-4 py-2.5",
  [ButtonSize.base]: " px-6 py-[18px]",
  [ButtonSize.large]: "px-8 py-4",
  // add your variant classes here
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
    className,
    // hide button text and show spinner when loading is true
    { "cursor-default text-opacity-0": loading },
    // disable hover/active styles when loading
    { "enabled:hover:scale-[1.02] enabled:active:scale-[0.98]": !loading },
    // default classes
    "relative tracking-[0.02em] outline-none"
  );

  return (
    <button {...props} className={finalClassName}>
      {/* show spinner on loading */}
      {loading ? (
        <span className="inset-0 absolute flex justify-center items-center">
          <SpinnerIcon className="w-6 h-6 animate-spin" />
        </span>
      ) : null}
      {/* show icon if provided */}
      {icon}
      {/* spacing after icon */}
      {icon && children ? <span className="pl-4" /> : null}
      {/* button content */}
      {children}
    </button>
  );
};

export default Button;
