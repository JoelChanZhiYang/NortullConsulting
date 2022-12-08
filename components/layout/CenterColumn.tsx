import { ReactNode } from "react";

export const CenterColumn = ({ children }: { children: ReactNode }) => {
  return <div className="max-w-3xl mx-auto">{children}</div>;
};
