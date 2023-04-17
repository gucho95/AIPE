import { ReactElement, SVGProps } from "react";

const ArrowUpLongIcon = (props: SVGProps<SVGSVGElement>): ReactElement => (
  <svg
    viewBox="0 0 18 101"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9 2L9 101M9 2L2 8.75M9 2L16 8.75"
      stroke-opacity="0.9"
      stroke-width="2.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export default ArrowUpLongIcon;
