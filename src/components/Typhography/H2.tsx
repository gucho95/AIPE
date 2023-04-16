import { FC, HTMLAttributes } from "react";
import clsx from "clsx";
import classes from "./style.module.css";

interface H2Props extends HTMLAttributes<HTMLHeadElement> {}

const H2: FC<H2Props> = ({ children, className, ...props }) => {
  return (
    <h2 className={clsx(classes.h2, className)} {...props}>
      {children}
    </h2>
  );
};

export default H2;
