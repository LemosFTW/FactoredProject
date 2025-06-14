export interface SearchComponentProps {
  onSearch: (query: string) => void;
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
