import { PropsWithChildren } from "react";
import { ThemeProvider } from "../ThemeProvider/ThemeProvider";

interface ProvidersProps extends PropsWithChildren {}

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <ThemeProvider>
      { children }
    </ThemeProvider>
  );
};
