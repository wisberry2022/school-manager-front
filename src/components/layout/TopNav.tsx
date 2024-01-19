import { nav } from "@/constants/Nav";
import { Stack, Tab, Tabs } from "@mui/material";
import { FC, SyntheticEvent, useState } from "react";


const TopNav: FC = () => {
  const [tab, setTab] = useState("student");

  const onChange = (e: SyntheticEvent, newValue: string) => {
    setTab(newValue);
  }

  return <Stack sx={{ boxShadow: 3, p: 3 }}>
    <Tabs value={tab} onChange={onChange} aria-label="basic tabs example" centered>
      {Object.keys(nav).map(set => <Tab value={set} label={nav[set].name} />)}
    </Tabs>
  </Stack>
}

export default TopNav;