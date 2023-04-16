import { ReactElement, SVGProps } from "react";

const ArrowRightIcon = (props: SVGProps<SVGSVGElement>): ReactElement => (
  <svg
    viewBox="0 0 16 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15 6L0.999999 6M15 6L9.75 1M15 6L9.75 11"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export default ArrowRightIcon;
