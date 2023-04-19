import { ReactElement, SVGProps } from "react";

const BasketIcon = (props: SVGProps<SVGSVGElement>): ReactElement => (
  <svg
    viewBox="0 0 20 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1 5H3M19 5H17M3 5L3.8199 13.199C3.92214 14.2214 4.78247 15 5.80998 15H14.19C15.2175 15 16.0779 14.2214 16.1801 13.199L17 5M3 5H4M17 5H16M4 5L5 1M4 5H16M16 5L15 1M10 9V11M13 9V11M7 9V11"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default BasketIcon;
