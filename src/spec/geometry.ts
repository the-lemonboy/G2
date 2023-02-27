import { MarkComponent, Primitive } from '../runtime';
import { Encode } from './encode';
import { Transform } from './transform';
import { Scale } from './scale';
import { Coordinate, CoordinateTransform } from './coordinate';
import { AnimationTypes } from './animate';
import { Interaction } from './interaction';
import { Theme } from './theme';
import { ClusterTransform, Data } from './data';
import { Literal2Object } from './utils';

export type Geometry =
  | IntervalGeometry
  | RectGeometry
  | LineGeometry
  | PointGeometry
  | TextGeometry
  | CellGeometry
  | AreaGeometry
  | NodeGeometry
  | EdgeGeometry
  | ImageGeometry
  | PolygonGeometry
  | BoxGeometry
  | VectorGeometry
  | LineXMark
  | LineYMark
  | RangeMark
  | RangeXMark
  | RangeYMark
  | ConnectorMark
  | SankeyMark
  | PathMark
  | TreemapMark
  | PackMark
  | BoxPlotMark
  | ShapeMark
  | ForceGraphMark
  | TreeMark
  | WordCloudMark
  | CustomComponent;

export type GeometryTypes =
  | 'interval'
  | 'rect'
  | 'line'
  | 'point'
  | 'text'
  | 'cell'
  | 'area'
  | 'node'
  | 'edge'
  | 'link'
  | 'image'
  | 'polygon'
  | 'box'
  | 'vector'
  | 'lineX'
  | 'lineY'
  | 'connector'
  | 'range'
  | 'rangeX'
  | 'rangeY'
  | 'sankey'
  | 'path'
  | 'treemap'
  | 'pack'
  | 'boxplot'
  | 'shape'
  | 'forceGraph'
  | 'tree'
  | 'wordCloud'
  | MarkComponent;

export type ChannelTypes =
  | 'x'
  | 'y'
  | 'x1'
  | 'y1'
  | 'series'
  | 'color'
  | 'opacity'
  | 'shape'
  | 'enterType'
  | 'enterEasing'
  | 'enterDuration'
  | 'enterDelay'
  | 'enter'
  | 'size'
  | 'tooltip'
  | 'title'
  | 'key'
  | 'groupKey'
  | 'label'
  | 'position'
  | 'series';

export type BaseGeometry<
  T extends GeometryTypes,
  C extends string = ChannelTypes,
> = {
  type?: T | string;
  class?: string;
  key?: string;
  paddingLeft?: number;
  paddingRight?: number;
  paddingBottom?: number;
  paddingTop?: number;
  padding?: number;
  inset?: number;
  insetLeft?: number;
  insetBottom?: number;
  insetTop?: number;
  insetRight?: number;
  margin?: number;
  marginLeft?: number;
  marginBottom?: number;
  marginTop?: number;
  marginRight?: number;
  data?: Data;
  transform?: Transform[];
  encode?: Partial<Record<C, Encode | Encode[]>>;
  scale?: Partial<Record<C, Scale>>;
  state?: StateOptions;
  axis?:
    | Partial<
        Record<
          'x' | 'y' | 'position' | `position${number}`,
          (Axis & { state?: StateOptions }) | boolean
        >
      >
    | boolean;
  legend?:
    | Partial<
        Record<
          'size' | 'color' | 'shape' | 'opacity',
          (Legend & { state?: StateOptions }) | boolean
        >
      >
    | boolean;
  slider?: Partial<Record<'x' | 'y', any>>;
  scrollbar?: Partial<Record<'x' | 'y', any>>;
  coordinate?: Coordinate & { transform?: CoordinateTransform[] };
  style?: Record<string, any>;
  interaction?: Literal2Object<Interaction>;
  theme?: Theme;
  facet?: boolean;
  frame?: boolean;
  labels?: Record<string, any>[];
  stack?: boolean;
  tooltip?: Tooltip;
  animate?:
    | boolean
    | {
        enter?: Animation | null | boolean;
        update?: Animation | null | boolean;
        exit?: Animation | null | boolean;
      };
  cartesian?: boolean;
  layout?: Record<string, any>;
  zIndex?: number;
};

type StateOptions = {
  active?: Record<string, any>; // @todo
  selected?: Record<string, any>; // @todo
  inactive?: Record<string, any>; // @todo
  unselected?: Record<string, any>; // @todo
};

export type Animation = {
  type?: AnimationTypes;
  duration?: number;
  delay?: number;
  easing?: string;
  fill?: 'forwards' | 'none' | 'backwards' | 'both' | 'auto';
};

export type Axis = {
  tickCount?: number;
  labelFormatter?: any;
  tickFilter?: any;
  title?: any;
  [key: string]: any;
};

export type Legend = {
  tickCount?: number;
  labelFormatter?: any;
  tickFilter?: any;
  title?: any;
  position?: string;
  [key: string]: any;
};

export type IntervalGeometry = BaseGeometry<
  'interval',
  ChannelTypes | 'series'
>;

export type RectGeometry = BaseGeometry<'rect', ChannelTypes>;

export type LineGeometry = BaseGeometry<
  'line',
  ChannelTypes | 'position' | `position${number}`
>;

export type PointGeometry = BaseGeometry<'point'>;

export type TextGeometry = BaseGeometry<
  'text',
  | ChannelTypes
  | 'text'
  | 'fontSize'
  | 'fontWeight'
  | 'fontStyle'
  | 'rotate'
  | 'fontStyle'
  | 'textAlign'
  | 'textBaseline'
>;

export type LineXMark = BaseGeometry<'lineX', ChannelTypes>;

export type LineYMark = BaseGeometry<'lineY', ChannelTypes>;

export type RangeMark = BaseGeometry<'range', ChannelTypes>;

export type RangeXMark = BaseGeometry<'rangeX', ChannelTypes>;

export type RangeYMark = BaseGeometry<'rangeY', ChannelTypes>;

export type ConnectorMark = BaseGeometry<'connector', ChannelTypes>;

export type CellGeometry = BaseGeometry<'cell'>;

export type AreaGeometry = BaseGeometry<'area', ChannelTypes>;

export type NodeGeometry = BaseGeometry<'node', ChannelTypes>;

export type EdgeGeometry = BaseGeometry<'edge', ChannelTypes>;

export type LinkGeometry = BaseGeometry<'link', ChannelTypes>;

export type ImageGeometry = BaseGeometry<'image', ChannelTypes | 'src'>;

export type PolygonGeometry = BaseGeometry<'polygon'>;

export type BoxGeometry = BaseGeometry<'box'>;

export type BoxPlotMark = BaseGeometry<'box'>;

export type ShapeMark = BaseGeometry<'shape'>;

export type VectorGeometry = BaseGeometry<
  'vector',
  ChannelTypes | 'rotate' | 'size'
>;

export type SankeyMark = BaseGeometry<
  'sankey',
  | 'source'
  | 'target'
  | 'value'
  | `node${Capitalize<ChannelTypes>}`
  | `link${Capitalize<ChannelTypes>}`
  | ChannelTypes
> & {
  layout?: Record<string, any>;
  nodeLabels: Record<string, any>[];
  linkLabels: Record<string, any>[];
};

export type PathMark = BaseGeometry<'path', ChannelTypes>;

export type TreemapMark = BaseGeometry<'treemap', 'value' | ChannelTypes> & {
  layout?: Record<string, any>;
};

export type PackMark = BaseGeometry<'pack', 'value' | ChannelTypes> & {
  layout?: Record<string, any>;
};

export type ForceGraphMark = BaseGeometry<
  'forceGraph',
  | 'source'
  | 'target'
  | 'color'
  | 'value'
  | `node${Capitalize<ChannelTypes>}`
  | `link${Capitalize<ChannelTypes>}`
> & {
  layout?: Record<string, any>;
  nodeLabels: Record<string, any>[];
  linkLabels: Record<string, any>[];
};

export type TreeMark = BaseGeometry<'tree', 'value' | ChannelTypes> & {
  layout?: Omit<ClusterTransform, 'type'>;
  nodeLabels: Record<string, any>[];
  linkLabels: Record<string, any>[];
};

export type WordCloudMark = BaseGeometry<
  'wordCloud',
  'value' | ChannelTypes | 'text'
> & {
  layout?: Record<string, any>;
};

export type CustomComponent = BaseGeometry<MarkComponent>;

export type Tooltip =
  | TooltipItem
  | TooltipItem[]
  | { title?: Encodeable<TooltipTitle>; items?: TooltipItem[] }
  | null;

export type TooltipTitle = string | { field?: string; channel?: string };

export type TooltipItem =
  | string
  | { name?: string; color?: string; channel?: string; field?: string }
  | Encodeable<Primitive>
  | Encodeable<TooltipItemValue>;

export type TooltipItemValue = {
  name?: string;
  color?: string;
  value?: Primitive;
};

export type Encodeable<T> =
  | T
  | ((d: any, index: number, data: any[], column: any) => T);
