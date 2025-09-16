"use client";

import * as Tabs from "@radix-ui/react-tabs";
import { motion } from "framer-motion";

interface TabItemProps {
  value: string;
  title: string;
  isSelected?: boolean;
}

export function TabItem({ value, title, isSelected = false }: TabItemProps) {
  return (
    <Tabs.Trigger
      value={value}
      className="group relative px-1 pb-4 text-sm font-medium text-zinc-500 hover:text-violet-700 focus:outline-none data-[state=active]:text-violet-700"
    >
      <span className="group-visible-focus:ring-2 group-visible-focus:ring-violet-400 group-visible-focus:ring-offset-4 whitespace-nowrap rounded hover:text-violet-300 dark:text-zinc-400 dark:data-[state=active]:text-violet-300">
        {title}
      </span>

      {isSelected && (
        <motion.div
          layoutId="activeTab"
          className="absolute -bottom-px left-0 right-0 h-0.5 bg-violet-700 dark:bg-violet-300"
        ></motion.div>
      )}
    </Tabs.Trigger>
  );
}
