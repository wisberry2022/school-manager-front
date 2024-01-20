import { nav } from "@/constants/Nav";
import { List, ListItem, Stack, styled } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";

const TabLink = styled(Link)`
  padding: 1rem;
  width: 100%;
  text-align: center;
  font-size: 1.3rem;
`;

const TopNav: FC = () => {
  const router = useRouter();

  return (
    <Stack justifyContent="center" sx={{ boxShadow: 3, p: 3 }}>
      <List sx={{ display: "flex", justifyContent: "center" }}>
        {Object.keys(nav).map((set) => {
          const { id, name, url } = nav[set];
          return (
            <ListItem
              key={id}
              sx={{
                p: 0,
                width: 350,
                borderBottom:
                  router.pathname === url ? ".1rem solid #0000ff" : "none",
              }}
              data-tab={set}
            >
              <TabLink href={url}>{name}</TabLink>
            </ListItem>
          );
        })}
      </List>
    </Stack>
  );
};

export default TopNav;
