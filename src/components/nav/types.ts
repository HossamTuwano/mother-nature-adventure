export interface NavLink {
  label: string;
  path: string;
  description: string;
}

export interface NavCategory {
  category: string;
  links: NavLink[];
}

export interface DropdownData {
  sections: NavCategory[];
}
