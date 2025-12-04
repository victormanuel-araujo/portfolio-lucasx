import { Button } from "../button";

import { motion } from "motion/react";
import type { AsideHeaderProps } from "./aside-header.types";
import { SelectionList } from "../../pages/home/home.types";

import "./aside-header.css";
import { useEffect, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export const AsideHeader = ({
  selectionList,
  setSelectionList,
}: AsideHeaderProps) => {
  const [isMobile, setIsMobile] = useState(false);

  const scrollToBottom = () => {
    if (!isMobile) return;
    document.querySelector("main")?.scrollTo?.({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  const onChangeSelectionList = (selection: SelectionList) => {
    setSelectionList(selection);
    scrollToBottom();
  };

  useEffect(() => {
    setIsMobile(window.innerWidth < 580);

    window.addEventListener("resize", () => {
      setIsMobile(window.innerWidth < 580);
    });

    return () => {
      window.removeEventListener("resize", () => {
        setIsMobile(window.innerWidth < 580);
      });
    };
  }, []);

  return (
    <div className="h-[100vh] bg-primary">
      <motion.aside
        className={`aside-header ${isMobile ? "mobile-header" : ""}`}
        transition={{ duration: 0.2 }}
      >
        <div />

        <motion.div
          className="flex flex-col items-center justify-center w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
        >
          <motion.img
            src="/header.webp"
            className="w-[140px] min-w-[40px] mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 0.4, delay: 0.05 }}
          />
          <motion.span
            className="text-white text-xl font-light mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            Portfólio
          </motion.span>

          <motion.div
            className="flex w-full flex-col gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 0.4, delay: 0.25 }}
          >
            {[
              SelectionList.ILLUSTRATIONS,
              SelectionList.DESIGNS,
              SelectionList.MOTION,
            ].map((selection) => (
              <Button
                active={selectionList === selection}
                onClick={() => onChangeSelectionList(selection)}
              >
                {selection}
              </Button>
            ))}
          </motion.div>

          <motion.div
            className="flex w-full flex-row items-center justify-center gap-5 mt-8 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 0.4, delay: 0.35 }}
          >
            <motion.a
              href="https://www.instagram.com/lucashb96"
              target="_blank"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
            >
              <img src="/icons/instagram.png" className="w-[20px] invert-100" />
            </motion.a>

            <motion.a
              href="mailto:lucashb96@gmail.com"
              target="_blank"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 0.3, delay: 0.55 }}
            >
              <img src="/icons/mail.png" className="w-[23px] invert-100" />
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div className="flex flex-col items-center justify-center gap-4 mb-2">
          <motion.span
            className="text-xs font-semibold"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 0.4, delay: 0.7 }}
          >
            © 2024-{new Date().getFullYear()} Lucas H. Brito
          </motion.span>

          {isMobile && (
            <KeyboardArrowDownIcon
              fontSize="large"
              onClick={() => scrollToBottom()}
            />
          )}
        </motion.div>
      </motion.aside>
    </div>
  );
};
