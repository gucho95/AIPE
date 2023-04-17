import { FC, HTMLAttributes } from "react";

interface SpacingProps
  extends Pick<HTMLAttributes<HTMLDivElement>, "className"> {}

const Spacing: FC<SpacingProps> = (props) => {
  return <div {...props} />;
};

export default Spacing;
