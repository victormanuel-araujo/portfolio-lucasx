import { AsideHeader } from "../../components/aside-header";
import { LayoutGroup, motion } from "motion/react";
import "./home.css";

import { useMemo, useState } from "react";
import { DESIGNS, ILLUSTRATIONS, MOTIONS } from "./home.constants";
import { SelectionList } from "./home.types";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import { GalleryModal } from "./components/gallery-modal";

export const HomePage = () => {
  const [selectionList, setSelectionList] = useState<SelectionList>(
    SelectionList.ILLUSTRATIONS
  );

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const galleryItems = useMemo(() => {
    if (selectionList === SelectionList.ILLUSTRATIONS) {
      return ILLUSTRATIONS;
    }
    if (selectionList === SelectionList.DESIGNS) {
      return DESIGNS;
    }

    if (selectionList === SelectionList.MOTION) {
      return MOTIONS;
    }

    return [];
  }, [selectionList]);

  const handleCloseModal = () => {
    setSelectedIndex(null);
  };

  return (
    <main className="flex flex-row relative">
      <AsideHeader
        selectionList={selectionList}
        setSelectionList={setSelectionList}
      />

      <LayoutGroup>
        <div
          className="overflow-scroll h-[100vh] grid grid-cols-3"
          style={{
            gridTemplateRows: "repeat(3, minmax(420px, 480px))",
          }}
        >
          {galleryItems.map(({ cover, carousel, className }, index) => (
            <motion.div
              key={index}
              layout="position"
              layoutId={`gallery-item-${selectionList}-${index}`}
              className={`w-full h-full grid ${
                className ?? ""
              } relative image-hover-effect`}
              onClick={() => setSelectedIndex(index)}
            >
              <motion.img
                src={cover}
                className="w-full h-full object-cover object-center"
              />
              {carousel.length > 1 && (
                <PhotoLibraryIcon className="absolute top-2 right-2 z-20" />
              )}
            </motion.div>
          ))}
        </div>

        <GalleryModal
          selectedIndex={selectedIndex}
          galleryItems={galleryItems}
          selectionList={selectionList}
          handleCloseModal={handleCloseModal}
        />
      </LayoutGroup>
    </main>
  );
};
