import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "solid" | "outline";
}

export const Button: React.FC<ButtonProps> = ({
  variant = "solid",
  className,
  children,
  ...props
}) => {
  const baseStyles =
    "px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2";
  const solidStyles = "bg-green-600 text-white hover:bg-green-700";
  const outlineStyles =
    "border-2 border-green-600 text-green-600 hover:bg-green-50";

  const variantStyles = variant === "solid" ? solidStyles : outlineStyles;

  return (
    <button
      className={`${baseStyles} ${variantStyles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
