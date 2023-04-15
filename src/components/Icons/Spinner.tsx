import { ReactElement, SVGProps } from "react";

const SpinnerIcon = (props: SVGProps<SVGSVGElement>): ReactElement => (
  <svg
    viewBox="0 0 21 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15.4886 18.5708C12.5513 20.8325 8.39402 21.1221 5.10855 18.9923C0.941153 16.2908 -0.245374 10.7197 2.45837 6.54878C2.45837 6.54878 3.37023 5.08025 3.54627 4.87055C4.5181 3.71294 5.06354 3.47065 5.06354 3.47065C8.00084 1.20895 12.1582 0.919314 15.4436 3.04909C19.611 5.75058 20.7976 11.3217 18.0938 15.4926"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export default SpinnerIcon;
