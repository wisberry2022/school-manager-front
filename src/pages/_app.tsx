import TopNav from "@/components/layout/TopNav";
import WrapperTemplate from "@/components/layout/WrapperTemplate";
import "@/styles/reset.css";
import { Stack, styled } from "@mui/material";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";

const Wrapper = styled(Stack)`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 70%;
  transform: translate(-50%, -50%);
`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Wrapper>
        <TopNav />
        <WrapperTemplate>
          <Component {...pageProps} />
        </WrapperTemplate>
      </Wrapper>
    </RecoilRoot>
  );
}
