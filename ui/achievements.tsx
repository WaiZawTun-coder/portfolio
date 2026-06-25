// icons
import CodeIcon from "@mui/icons-material/Code";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import React from "react";
import { SvgIconProps } from "@mui/material";
import clsx from "clsx";

interface AchievementType {
  id: number;
  name: string;
  amount: number;
  icon: React.ComponentType<SvgIconProps>;
}

const achievements: AchievementType[] = [
  { id: 1, name: "Project Built", amount: 10, icon: CodeIcon },
  { id: 2, name: "Years Experience", amount: 2, icon: BusinessCenterIcon },
  { id: 3, name: "Technologies", amount: 5, icon: RocketLaunchIcon },
  // { id: 4, name: "Testing", amount: 1, icon: CodeIcon },
];

const Achievements = () => {
  return (
    <section
      id="achievements"
      className="mx-auto w-full max-w-7xl px-4 lg:px-8 py-8 grid grid-cols-12 gap-6"
    >
      {achievements.map((achievement, index) => {
        const Icon: React.ComponentType<SvgIconProps> = achievement.icon;
        const count = achievements.length;
        const remainder = count % 3;
        const isLast = index === count - 1;
        const isSecondLast = index === count - 2;

        const mobileRemainder = count % 2;

        return (
          <div
            key={achievement.id}
            className={clsx(
              "col-span-6 lg:col-span-4",
              "grid grid-cols-[auto_1fr] items-center gap-x-4 gap-y-1 rounded-2xl border border-primary p-5 transition-all duration-300 hover:bg-primary-hover",

              // Last row has 1 item
              remainder === 1 && index === count - 1 && "lg:col-span-12",

              // Last row has 2 items
              remainder === 2 && index >= count - 2 && "lg:col-span-6",

              // mobile
              mobileRemainder === 1 && index === count - 1 && "col-span-12",
            )}
          >
            <div className="flex items-center justify-center row-span-2 lg:w-20">
              <Icon
                sx={{
                  fontSize: {
                    xs: 30,
                    lg: 40,
                  },
                }}
              />
            </div>

            <p className="font-bold text-3xl text-white">
              {achievement.amount}+
            </p>

            <p className="font-medium text-sm text-white/80">
              {achievement.name}
            </p>
          </div>
        );
      })}
    </section>
  );
};

export default Achievements;
