import React from "react";
import PropTypes from "prop-types";

const shapes = {
  CircleBorder20: "rounded-radius20",
  RoundedBorder5: "rounded-radius5",
};
const variants = {
  FillLightblue600: "bg-light_blue_600 text-white_A700",
  OutlineLightblue600:
    "bg-white_A700 border border-light_blue_600 border-solid text-gray_900",
  OutlineGray500: "border border-gray_500 border-solid text-gray_500",
  FillBluegray102: "bg-bluegray_102 text-black_900",
  FillBluegray103: "bg-bluegray_103 text-black_900",
};
const sizes = { sm: "p-[8px]", md: "p-[11px]", lg: "p-[14px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["CircleBorder20", "RoundedBorder5"]),
  variant: PropTypes.oneOf([
    "FillLightblue600",
    "OutlineLightblue600",
    "OutlineGray500",
    "FillBluegray102",
    "FillBluegray103",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
};
Button.defaultProps = {
  className: "",
  shape: "",
  variant: "FillLightblue600",
  size: "md",
};

export { Button };
