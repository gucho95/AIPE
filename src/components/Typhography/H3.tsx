import { FC, HTMLAttributes } from "react";
import clsx from "clsx";
import classes from "./style.module.css";

interface H3Props extends HTMLAttributes<HTMLHeadElement> {}

const H3: FC<H3Props> = ({ children, className, ...props }) => {
  return (
    <h3 className={clsx(classes.h3, className)} {...props}>
      {children}
    </h3>
  );
};

export default H3;
