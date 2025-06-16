export interface SearchComponentProps {
  onSearch: (query: string) => void;
  query: string;
}
export interface SideBarWrapperProps {
  children: React.ReactNode;
}

export interface PaginationProps {
  currentPage: number;
  hasNext: boolean;
  hasPrevious: boolean;
  onNext: () => void;
  onPrevious: () => void;
}
export interface ErrorDisplayProps {
  message: string;
}
export interface SideMenuBarProps {
  isOpen: boolean;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  entity: any;
  fields: string[];
}
export const CHARACTER_DETAIL_FIELDS = [
  "gender",
  "skin_color",
  "hair_color",
  "height",
  "eye_color",
  "mass",
  "birth_year",
];
