import { Button } from "../button";

import { motion } from "motion/react";
import type { AsideHeaderProps } from "./aside-header.types";
import { SelectionList } from "../../pages/home/home.types";

export const AsideHeader = ({
  selectionList,
  setSelectionList,
}: AsideHeaderProps) => {
  return (
    <aside className="flex flex-col h-[100vh] min-w-[280px] bg-primary items-center justify-between py-6 px-8 sticky">
      <div />

      <div className="flex flex-col items-center justify-center w-full">
        <motion.img
          src="/header.webp"
          className="w-[180px] mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05 }}
        />

        <motion.span
          className="text-white text-xl font-light mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          Portfólio
        </motion.span>

        <motion.div
          className="flex w-full flex-col gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.25 }}
        >
          {[
            SelectionList.ILLUSTRATIONS,
            SelectionList.DESIGNS,
            SelectionList.MOTION,
          ].map((selection) => (
            <Button
              active={selectionList === selection}
              onClick={() => setSelectionList(selection)}
            >
              {selection}
            </Button>
          ))}
        </motion.div>

        <motion.div
          className="flex w-full flex-row items-center justify-center gap-5 mt-8 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.35 }}
        >
          <motion.a
            href="https://www.instagram.com/lucashb96"
            target="_blank"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.5 }}
          >
            <img src="/icons/instagram.png" className="w-[20px] invert-100" />
          </motion.a>

          <motion.a
            href="mailto:lucashb96@gmail.com"
            target="_blank"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.55 }}
          >
            <img src="/icons/mail.png" className="w-[23px] invert-100" />
          </motion.a>

          <motion.a
            href="/sobre"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.6 }}
          >
            <img src="/icons/info.png" className="w-[20px] invert-100" />
          </motion.a>
        </motion.div>
      </div>

      <motion.span
        className="text-xs font-semibold"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.7 }}
      >
        © 2024-{new Date().getFullYear()} Lucas H. Brito
      </motion.span>
    </aside>
  );
};
