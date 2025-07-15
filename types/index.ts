export interface ThemeContextType {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export interface NavigationProps {
  activeSection: string;
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export interface SectionProps {
  darkMode: boolean;
}