import { PropsWithChildren } from "react";
import { Providers } from "./components/Providers/Providers";

interface RootLayoutProps extends PropsWithChildren {}

export const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <Providers>
      <html lang="en">
        <body>{children}</body>
      </html>
    </Providers>
  );
};

export default RootLayout;
