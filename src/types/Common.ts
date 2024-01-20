export type NavItem = {
  id: number;
  name: string;
  isDefault?: boolean;
  subNav?: NavItem
  url: string;
}

export type Nav = {
  [key: string]: NavItem
}

