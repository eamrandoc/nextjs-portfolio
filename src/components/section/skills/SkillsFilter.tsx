"use client";

import { useState } from "react";
import { skillList } from "./skillList";
import { AnimatePresence, motion } from "framer-motion";
import { motionTokens } from "@/components/motion/motionTokens";
import SkillCard from "./SkillCard";
import Animated from "@/components/motion/Animated";

const tabs = [
  "All",
  "Frontend",
  "Backend",
  "Database",
  "ORM/ODM",
  "Tools",
  "Design",
] as const;

type Tab = (typeof tabs)[number];

const SkillsFilter = () => {
  const [active, setActive] = useState<Tab>("All");

  const filtered =
    active === "All"
      ? skillList
      : skillList.filter((s) => s.side === active);

  return (
    <div>
      {/* ✅ TABS */}
      <div className="flex flex-wrap gap-3 justify-center">
        {tabs.map((tab, i) => (
          <Animated key={tab} delay={i * 0.04} hover>
            <button
              onClick={() => setActive(tab)}
              className={`px-5 py-2 text-sm rounded-full border backdrop-blur-md transition-all duration-300
              ${
                active === tab
                  ? "bg-primary text-primary-foreground border-primary shadow-md"
                  : "bg-background/60 text-muted-foreground border-border hover:bg-muted/40"
              }`}
            >
              {tab}
            </button>
          </Animated>
        ))}
      </div>

      {/* ✅ GRID TRANSITION */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={motionTokens.transition.default}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 mt-6">
            {filtered.map((skill, i) => (
              <Animated
                key={skill.id}
                variant="scaleIn"
                delay={i * 0.05}
                hover // ✅ moved here
              >
                <SkillCard skill={skill} />
              </Animated>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default SkillsFilter;