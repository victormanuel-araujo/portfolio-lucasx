import ListIcon from "@mui/icons-material/List";
import GridViewIcon from "@mui/icons-material/GridView";
import { motion } from "motion/react";
import { ViewModes, type ViewModeTabProps } from "./view-mode-tab.types";

export const ViewModeTab = ({ viewMode, setViewMode }: ViewModeTabProps) => {
  const renderViewModeIcon = (mode: ViewModes) => {
    const iconProps = {
      htmlColor: viewMode === mode ? "white" : "black",
      fontSize: "medium",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } as any;

    switch (mode) {
      case ViewModes.LIST:
        return <ListIcon {...iconProps} />;
      case ViewModes.GRID:
        return <GridViewIcon {...iconProps} />;
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      className="absolute bottom-4 right-4 z-20 p-4 bg-white rounded-2xl shadow-lg shadow-black/20 transition-shadow duration-300"
    >
      <div className="relative flex flex-row items-center justify-center gap-8">
        <div className="relative flex flex-row items-center justify-center gap-6">
          <motion.div
            layout
            initial={false}
            className="absolute rounded-xl top-0 w-[40px] h-[40px] bg-black z-0 transition-left duration-300"
            style={{
              ...(viewMode === ViewModes.LIST
                ? { left: 0 }
                : { left: "calc(100% - 40px)" }),
            }}
          />

          {[ViewModes.LIST, ViewModes.GRID].map((mode, index) => (
            <div
              key={index}
              onClick={() => setViewMode(mode)}
              className="relative z-10 flex items-center justify-center transition-colors duration-200 cursor-pointer w-[40px] h-[40px]"
            >
              {renderViewModeIcon(mode)}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
