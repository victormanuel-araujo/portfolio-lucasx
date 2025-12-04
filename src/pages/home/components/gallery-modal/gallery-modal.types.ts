import type { GalleryItem } from "../../home.constants";
import type { SelectionList } from "../../home.types";

export interface GalleryModalProps {
  selectedIndex: number | null;
  galleryItems: GalleryItem[];
  selectionList: SelectionList;
  handleCloseModal: () => void;
}
