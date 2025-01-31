// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ouJBE5YY9cRiEJb3g9pqrR
// Component: Fv08UHulvA0Z

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import { VerticalBarChartWrapper } from "app/plasmic/components/ChartWrapper"; // plasmic-import: IglSE8FPGHVG/codeComponent

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic.module.css"; // plasmic-import: ouJBE5YY9cRiEJb3g9pqrR/projectcss
import sty from "./PlasmicVerticalBarGraph.module.css"; // plasmic-import: Fv08UHulvA0Z/css

createPlasmicElementProxy;

export type PlasmicVerticalBarGraph__VariantMembers = {};
export type PlasmicVerticalBarGraph__VariantsArgs = {};
type VariantPropType = keyof PlasmicVerticalBarGraph__VariantsArgs;
export const PlasmicVerticalBarGraph__VariantProps =
  new Array<VariantPropType>();

export type PlasmicVerticalBarGraph__ArgsType = {
  children?: React.ReactNode;
};
type ArgPropType = keyof PlasmicVerticalBarGraph__ArgsType;
export const PlasmicVerticalBarGraph__ArgProps = new Array<ArgPropType>(
  "children"
);

export type PlasmicVerticalBarGraph__OverridesType = {
  root?: Flex__<"div">;
  verticalBarGraph?: Flex__<typeof VerticalBarChartWrapper>;
};

export interface DefaultVerticalBarGraphProps {
  children?: React.ReactNode;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicVerticalBarGraph__RenderFunc(props: {
  variants: PlasmicVerticalBarGraph__VariantsArgs;
  args: PlasmicVerticalBarGraph__ArgsType;
  overrides: PlasmicVerticalBarGraph__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = useCurrentUser?.() || {};

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <VerticalBarChartWrapper
        data-plasmic-name={"verticalBarGraph"}
        data-plasmic-override={overrides.verticalBarGraph}
        className={classNames("__wab_instance", sty.verticalBarGraph)}
        data={[
          { category: "Not Started", value: 2 },
          { category: "In Progress", value: 2 },
          { category: "Completed", value: 2, type: "HIGHLIGHTED" }
        ]}
        templateName={"classInstructionTheme"}
      />

      {renderPlasmicSlot({
        defaultContents: "Hi",
        value: args.children,
        className: classNames(sty.slotTargetChildren)
      })}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "verticalBarGraph"],
  verticalBarGraph: ["verticalBarGraph"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  verticalBarGraph: typeof VerticalBarChartWrapper;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicVerticalBarGraph__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicVerticalBarGraph__VariantsArgs;
    args?: PlasmicVerticalBarGraph__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicVerticalBarGraph__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicVerticalBarGraph__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicVerticalBarGraph__ArgProps,
          internalVariantPropNames: PlasmicVerticalBarGraph__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicVerticalBarGraph__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicVerticalBarGraph";
  } else {
    func.displayName = `PlasmicVerticalBarGraph.${nodeName}`;
  }
  return func;
}

export const PlasmicVerticalBarGraph = Object.assign(
  // Top-level PlasmicVerticalBarGraph renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    verticalBarGraph: makeNodeComponent("verticalBarGraph"),

    // Metadata about props expected for PlasmicVerticalBarGraph
    internalVariantProps: PlasmicVerticalBarGraph__VariantProps,
    internalArgProps: PlasmicVerticalBarGraph__ArgProps
  }
);

export default PlasmicVerticalBarGraph;
/* prettier-ignore-end */
