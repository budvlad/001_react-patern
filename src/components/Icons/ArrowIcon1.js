import React from "react";

const SvgArrowIcon1 = props => (
  <svg width={640} height={640} {...props}>
    <defs>
      <path d="M307.93 283.91H276.9" id="arrow_icon1_svg__a" />
      <path d="M295.52 295.4l12.41-11.14-12.41-11.85" id="arrow_icon1_svg__b" />
    </defs>
    <use xlinkHref="#arrow_icon1_svg__a" fillOpacity={0} stroke="#000" />
    <use xlinkHref="#arrow_icon1_svg__b" fillOpacity={0} stroke="#000" />
  </svg>
);

export default SvgArrowIcon1;
