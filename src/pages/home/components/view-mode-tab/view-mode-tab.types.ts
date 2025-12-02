export enum ViewModes {
  LIST = "list",
  GRID = "grid",
}

export interface ViewModeTabProps {
  viewMode: ViewModes;
  setViewMode: (viewMode: ViewModes) => void;
}
