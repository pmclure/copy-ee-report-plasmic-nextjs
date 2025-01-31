// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ExclamationTriangleOrangeIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ExclamationTriangleOrangeIcon(
  props: ExclamationTriangleOrangeIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 22 22"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M11 6.31v6.51m-.64 4.492a.872.872 0 01-.235-.597c0-.485.39-.875.875-.875s.875.39.875.875-.39.875-.875.875a.872.872 0 01-.64-.278zm0 0L11.5 16M9.69 2.89a1.512 1.512 0 012.62 0l8.48 14.7c.58 1.01-.15 2.27-1.31 2.27H2.52c-1.17 0-1.89-1.26-1.31-2.27l8.48-14.7z"
        }
        stroke={"currentColor"}
        strokeWidth={"1.2"}
        strokeMiterlimit={"10"}
        strokeLinecap={"round"}
      ></path>
    </svg>
  );
}

export default ExclamationTriangleOrangeIcon;
/* prettier-ignore-end */
