import { ReactElement, SVGProps } from "react";

const VkIcon = (props: SVGProps<SVGSVGElement>): ReactElement => (
  <svg
    viewBox="0 0 40 38"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <rect width="40" height="38" fill="url(#pattern0)" />
    <defs>
      <pattern
        id="pattern0"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use
          xlink:href="#image0_210_6788"
          transform="scale(0.0125 0.0131579)"
        />
      </pattern>
      <image
        id="image0_210_6788"
        width="150"
        height="76"
        xlink:href="data:image/png;base64,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"
      />
    </defs>
  </svg>
);

export default VkIcon;
