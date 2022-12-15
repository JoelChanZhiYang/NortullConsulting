import { ReactNode } from "react";

export const CenterColumn = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={`max-w-3xl mx-auto px-4 ${className}`}>{children}</div>
  );
};
