import type { SelectionList } from "../../pages/home/home.types";

export interface AsideHeaderProps {
  selectionList: SelectionList;
  setSelectionList: (selectionList: SelectionList) => void;
}
