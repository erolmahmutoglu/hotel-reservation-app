import type { SliderProps } from "rc-slider";
import Slider from "rc-slider";
import type { TooltipRef } from "rc-tooltip";
import Tooltip from "rc-tooltip";
import "rc-tooltip/assets/bootstrap.css";
import raf from "rc-util/lib/raf";
import { useEffect, useRef } from "react";
import "rc-slider/assets/index.css";

interface HandleTooltipProps {
  value: number;
  children: React.ReactElement;
  visible: boolean;
  tipFormatter?: (value: number) => React.ReactNode;
}

const HandleTooltip: React.FC<HandleTooltipProps> = (props) => {
  const {
    value,
    children,
    visible,
    tipFormatter = (val) => `${val} TL`,
    ...restProps
  } = props;

  const tooltipRef = useRef<TooltipRef>();
  const rafRef = useRef<number | null>(null);

  function cancelKeepAlign() {
    raf.cancel(rafRef.current!);
  }

  function keepAlign() {
    rafRef.current = raf(() => {
      tooltipRef.current?.forceAlign();
    });
  }

  useEffect(() => {
    if (visible) {
      keepAlign();
    } else {
      cancelKeepAlign();
    }

    return cancelKeepAlign;
  }, [value, visible]);

  return (
    <Tooltip
      placement="top"
      overlay={tipFormatter(value)}
      overlayInnerStyle={{ minHeight: "auto" }}
      ref={tooltipRef as any}
      visible={visible}
      {...restProps}
    >
      {children}
    </Tooltip>
  );
};

export const handleRender: SliderProps["handleRender"] = (node, props) => (
  <HandleTooltip value={props.value} visible={props.dragging}>
    {node}
  </HandleTooltip>
);

interface TooltipSliderProps extends SliderProps {
  tipFormatter?: (value: number) => React.ReactNode;
  tipProps?: any;
  max: number;
  min: number;
  step: number;
  defaultValue: number | number[];
  value: number | number[];
  onChange: (value: number | number[]) => void;
}

const CustomRangeSlider: React.FC<TooltipSliderProps> = ({
  tipFormatter,
  tipProps,
  ...props
}) => {
  const tipHandleRender: SliderProps["handleRender"] = (node, handleProps) => (
    <HandleTooltip
      value={handleProps.value}
      visible={handleProps.dragging}
      tipFormatter={tipFormatter}
      {...tipProps}
    >
      {node}
    </HandleTooltip>
  );

  return (
    <Slider
      {...props}
      range
      max={props.max}
      min={props.min}
      value={props.value}
      step={props.step}
      defaultValue={props.defaultValue}
      onChange={props.onChange}
      handleRender={tipHandleRender}
    />
  );
};

export default CustomRangeSlider;
