// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ArrowIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ArrowIcon(props: ArrowIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 245 11"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path d={"M122.5 11l-9-11h18l-9 11z"} fill={"currentColor"}></path>
    </svg>
  );
}

export default ArrowIcon;
/* prettier-ignore-end */
