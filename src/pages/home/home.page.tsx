import { AsideHeader } from "../../components/aside-header";
import { LayoutGroup, motion } from "motion/react";
import "./home.css";

import { useMemo, useState } from "react";
import { ViewModeTab } from "./components/view-mode-tab/view-mode-tab.component";
import { ViewModes } from "./components/view-mode-tab/view-mode-tab.types";
import { DESIGNS, ILLUSTRATIONS } from "./home.constants";
import { SelectionList } from "./home.types";

export const HomePage = () => {
  const [viewMode, setViewMode] = useState<ViewModes>(ViewModes.LIST);
  const [selectionList, setSelectionList] = useState<SelectionList>(
    SelectionList.ILLUSTRATIONS
  );

  const galleryItems = useMemo(() => {
    if (selectionList === SelectionList.ILLUSTRATIONS) {
      return ILLUSTRATIONS;
    }
    if (selectionList === SelectionList.DESIGNS) {
      return DESIGNS;
    }

    return [];
  }, [selectionList]);

  return (
    <main className="flex flex-row relative">
      <AsideHeader
        selectionList={selectionList}
        setSelectionList={setSelectionList}
      />
      <ViewModeTab viewMode={viewMode} setViewMode={setViewMode} />

      <LayoutGroup>
        <div
          className="overflow-scroll h-[100vh] grid grid-cols-3"
          style={{
            gridTemplateRows: "repeat(auto-fill, minmax(360px, 480px))",
          }}
        >
          {galleryItems.map(({ cover, className }, index) => (
            <motion.img
              layout
              src={cover}
              key={index}
              transition={{ type: "tween", duration: 0.4 }}
              className={`w-full h-full grid object-cover ${className ?? ""}`}
            />
          ))}
        </div>
      </LayoutGroup>
    </main>
  );
};
