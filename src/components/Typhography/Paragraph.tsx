import { FC, HTMLAttributes } from "react";
import clsx from "clsx";
import classes from "./style.module.css";

interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {}

const Paragraph: FC<ParagraphProps> = ({ children, className, ...props }) => {
  return (
    <p className={clsx(classes.paragraph, className)} {...props}>
      {children}
    </p>
  );
};

export default Paragraph;
