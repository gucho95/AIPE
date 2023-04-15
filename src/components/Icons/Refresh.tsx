import { ReactElement, SVGProps } from "react";

const RefreshIcon = (props: SVGProps<SVGSVGElement>): ReactElement => (
  <svg
    viewBox="0 0 24 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3 11C3 15.9706 7.02944 20 12 20C15.9187 20 19.2524 17.4956 20.4879 14M3 11L6 13M3 11L1 14M21 10C21 5.02944 16.9706 1 12 1C8.08134 1 4.74763 3.50442 3.51212 7M21 10L18 8M21 10L23 7"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export default RefreshIcon;
