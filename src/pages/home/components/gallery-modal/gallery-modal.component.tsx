import { AnimatePresence, motion } from "motion/react";
import type { GalleryModalProps } from "./gallery-modal.types";
import "./gallery-modal.css";
import CloseIcon from "@mui/icons-material/Close";
import { FramerDraggableCarousel } from "../draggable-carousel/draggable-carousel.component";

export const GalleryModal = ({
  selectedIndex,
  galleryItems,
  selectionList,
  handleCloseModal,
}: GalleryModalProps) => {
  return (
    <AnimatePresence>
      {selectedIndex !== null && galleryItems[selectedIndex] && (
        <motion.div
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={handleCloseModal}
          className="fixed inset-0 z-40 flex items-center justify-center bg-black/60"
        >
          <motion.div
            layoutId={`gallery-item-${selectionList}-${selectedIndex}`}
            className="relative max-w-5xl w-[90vw] max-h-[90vh] h-[90vh] bg-neutral-900 rounded-2xl overflow-hidden shadow-2xl modal-motion-container"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={handleCloseModal}
              className="absolute right-3 top-3 rounded-full bg-black/60 px-3 py-1 text-xs text-white hover:bg-black/80 z-50"
            >
              <CloseIcon />
            </button>

            <FramerDraggableCarousel
              carousel={galleryItems[selectedIndex].carousel}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
