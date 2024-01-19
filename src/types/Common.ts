export type NavItem = {
  id: number;
  name: string;
  isDefault?: boolean;
  subNav?: NavItem
}

export type Nav = {
  [key: string]: NavItem
}

