// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ouJBE5YY9cRiEJb3g9pqrR
// Component: ZvHkj5qtG8Mt

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

import { TriangleChartWrapper } from "app/plasmic/components/ChartWrapper"; // plasmic-import: FnBuEMUtL-7j/codeComponent
import { Legend } from "common/components/presentation/Legend"; // plasmic-import: Q-IS3vQpt2kR/codeComponent

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic.module.css"; // plasmic-import: ouJBE5YY9cRiEJb3g9pqrR/projectcss
import sty from "./PlasmicThreeTierPlacement.module.css"; // plasmic-import: ZvHkj5qtG8Mt/css

createPlasmicElementProxy;

export type PlasmicThreeTierPlacement__VariantMembers = {};
export type PlasmicThreeTierPlacement__VariantsArgs = {};
type VariantPropType = keyof PlasmicThreeTierPlacement__VariantsArgs;
export const PlasmicThreeTierPlacement__VariantProps =
  new Array<VariantPropType>();

export type PlasmicThreeTierPlacement__ArgsType = {
  title?: string;
  showLegend?: boolean;
};
type ArgPropType = keyof PlasmicThreeTierPlacement__ArgsType;
export const PlasmicThreeTierPlacement__ArgProps = new Array<ArgPropType>(
  "title",
  "showLegend"
);

export type PlasmicThreeTierPlacement__OverridesType = {
  root?: Flex__<"div">;
  text?: Flex__<"div">;
  freeBox?: Flex__<"div">;
  triangleChart?: Flex__<typeof TriangleChartWrapper>;
  legend?: Flex__<typeof Legend>;
};

export interface DefaultThreeTierPlacementProps {
  title?: string;
  showLegend?: boolean;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicThreeTierPlacement__RenderFunc(props: {
  variants: PlasmicThreeTierPlacement__VariantsArgs;
  args: PlasmicThreeTierPlacement__ArgsType;
  overrides: PlasmicThreeTierPlacement__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {
          title: "Overall Placement",
          showLegend: true
        },
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
      <div
        data-plasmic-name={"text"}
        data-plasmic-override={overrides.text}
        className={classNames(projectcss.all, projectcss.__wab_text, sty.text)}
      >
        <React.Fragment>
          {(() => {
            try {
              return $props.title;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return "Overall Placement";
              }
              throw e;
            }
          })()}
        </React.Fragment>
      </div>
      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(projectcss.all, sty.freeBox)}
      >
        <TriangleChartWrapper
          data-plasmic-name={"triangleChart"}
          data-plasmic-override={overrides.triangleChart}
          className={classNames("__wab_instance", sty.triangleChart)}
          data={(() => {
            try {
              return $ctx.data.summary.threeTier.tierSummaryData.diagWindow;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return [10, 20, 30];
              }
              throw e;
            }
          })()}
          height={155}
          templateName={"defaultTheme"}
          width={155}
        />

        {(() => {
          try {
            return $props.showLegend;
          } catch (e) {
            if (
              e instanceof TypeError ||
              e?.plasmicType === "PlasmicUndefinedDataError"
            ) {
              return true;
            }
            throw e;
          }
        })() ? (
          <Legend
            data-plasmic-name={"legend"}
            data-plasmic-override={overrides.legend}
            className={classNames("__wab_instance", sty.legend)}
            data={[
              { labelText: "At Risk for Tier 3", category: "17%", value: 17 },
              { labelText: "Tier 2", category: "20%", value: 20 },
              { labelText: "Tier 1", category: "63%", value: 63 }
            ]}
            itemWidth={"100%"}
            orientation={"vertical-block"}
            templateName={"diagnosticGrowthThemeTemplate"}
          />
        ) : null}
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "text", "freeBox", "triangleChart", "legend"],
  text: ["text"],
  freeBox: ["freeBox", "triangleChart", "legend"],
  triangleChart: ["triangleChart"],
  legend: ["legend"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  text: "div";
  freeBox: "div";
  triangleChart: typeof TriangleChartWrapper;
  legend: typeof Legend;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicThreeTierPlacement__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicThreeTierPlacement__VariantsArgs;
    args?: PlasmicThreeTierPlacement__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicThreeTierPlacement__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicThreeTierPlacement__ArgsType,
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
          internalArgPropNames: PlasmicThreeTierPlacement__ArgProps,
          internalVariantPropNames: PlasmicThreeTierPlacement__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicThreeTierPlacement__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicThreeTierPlacement";
  } else {
    func.displayName = `PlasmicThreeTierPlacement.${nodeName}`;
  }
  return func;
}

export const PlasmicThreeTierPlacement = Object.assign(
  // Top-level PlasmicThreeTierPlacement renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    text: makeNodeComponent("text"),
    freeBox: makeNodeComponent("freeBox"),
    triangleChart: makeNodeComponent("triangleChart"),
    legend: makeNodeComponent("legend"),

    // Metadata about props expected for PlasmicThreeTierPlacement
    internalVariantProps: PlasmicThreeTierPlacement__VariantProps,
    internalArgProps: PlasmicThreeTierPlacement__ArgProps
  }
);

export default PlasmicThreeTierPlacement;
/* prettier-ignore-end */
