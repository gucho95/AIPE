import { FC, HTMLAttributes } from "react";
import clsx from "clsx";
import classes from "./style.module.css";

interface H4Props extends HTMLAttributes<HTMLHeadElement> {}

const H4: FC<H4Props> = ({ children, className, ...props }) => {
  return (
    <h4 className={clsx(classes.h4, className)} {...props}>
      {children}
    </h4>
  );
};

export default H4;
