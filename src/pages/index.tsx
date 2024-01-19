import TopNav from "@/components/layout/TopNav";
import { Stack, Typography, styled } from "@mui/material";

const Wrapper = styled(Stack)`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 70%;
  transform: translate(-50%, -50%);
`;


export default function Home() {
  return (
    <Wrapper direction="column" sx={{ p: 3, gap: 1.5 }}>
      <TopNav />
    </Wrapper>
  );
}
