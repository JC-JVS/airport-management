import React from "react";

const Button = React.forwardRef(
  (props, ref) => {
    const {
      type,
      className,
      children,
      onClick,
      disabled = false,
      ...buttonProps
    } = props;
    return (
      <button
        onClick={(e) => {
          if (disabled) return;

          onClick?.(e);
        }}
        ref={ref}
        type={type}
        className={className}
        {...buttonProps}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default React.memo(Button);