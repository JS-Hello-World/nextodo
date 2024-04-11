import { PropsWithChildren } from "react";
import { Providers } from "./components/Providers/Providers";
import './index.css';
import { Header } from "./components/Header/Header";
import { Content } from "./components/Content/Content";
import { Wrapper } from "./components/Wrapper/Wrapper";
import { Footer } from "./components/Footer/Footer";

interface RootLayoutProps extends PropsWithChildren {}

export const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <Providers>
      <html lang="en">
        <body>
          <Wrapper>
            <Header></Header>
            <Content>
              {children}
            </Content>
            <Footer></Footer>
          </Wrapper>
        </body>
      </html>
    </Providers>
  );
};

export default RootLayout;
