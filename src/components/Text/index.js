import React from "react";
const variantClasses = {
  h1: "font-bold sm:text-[24px] md:text-[26px] text-[28px]",
  h2: "text-[18px]",
  h3: "text-[16px]",
  h4: "text-[15px]",
  h5: "text-[14px]",
  h6: "font-medium text-[12px]",
};
const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
