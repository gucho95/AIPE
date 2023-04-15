import { ReactElement, SVGProps } from "react";

const CloseIcon = (props: SVGProps<SVGSVGElement>): ReactElement => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1 1L13 13M13 1L1 13"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default CloseIcon;
