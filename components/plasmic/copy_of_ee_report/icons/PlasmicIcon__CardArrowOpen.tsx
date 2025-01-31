// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CardArrowOpenIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CardArrowOpenIcon(props: CardArrowOpenIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 12 12"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M5.64 8.829L.711 3.9a.511.511 0 01.36-.874h9.858c.454 0 .685.557.36.874L6.36 8.829a.523.523 0 01-.729 0"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CardArrowOpenIcon;
/* prettier-ignore-end */
