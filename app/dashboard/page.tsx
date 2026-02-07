"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import {
  IconArrowLeft,
  IconUsersGroup,
  IconBrandTabler,
  IconSettings,
  IconMessage2Bolt,
  IconUserBolt,
  IconChartLine,
  IconReceiptBitcoin,
} from "@tabler/icons-react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import ThemeButton from "@/components/widget/themeToggle";
import SplashScreen from "@/components/screens/splashScreen";

export function SidebarWidget() {
  const [showSplash, setShowSplash] = useState(true);
  const links = [
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: (
        <IconBrandTabler className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Transaksi",
      href: "/dashboard",
      icon: (
        <IconReceiptBitcoin className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Member",
      href: "/dashboard",
      icon: (
        <IconUserBolt className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Kas Group",
      href: "/dashboard",
      icon: (
        <IconUsersGroup className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Chatbot",
      href: "/dashboard",
      icon: (
        <IconMessage2Bolt className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Analytics",
      href: "/dashboard",
      icon: (
        <IconChartLine className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Settings",
      href: "/dashboard",
      icon: (
        <IconSettings className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Profile",
      href: "/dashboard",
      icon: (
        <IconUserBolt className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Logout",
      href: "/dashboard",
      icon: (
        <IconArrowLeft className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
  ];

  const [open, setOpen] = useState(false);

  return (
    <div
      className={cn(
        "flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full flex-1 mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden",
        "h-screen", // for your use case, use `h-screen` instead of `h-[60vh]`
      )}
    >
      {showSplash ? <SplashScreen onFinish={() => setShowSplash(false)} /> : null}
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
          <div>
            <SidebarLink
              link={{
                label: "Dummy User",
                href: "#",
                icon: (
                  <img
                    src="https://i.pinimg.com/736x/3c/1c/ee/3c1ceec39be2d57ce882ad8a1fb37a15.jpg"
                    className="h-7 w-7 shrink-0 rounded-full"
                    width={50}
                    height={50}
                    alt="Avatar"
                  />
                ),
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>
      {/* Page Content */}
    </div>
  );
}
export const Logo = () => {
  return (
    <a
      href="#"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black"
    >
      <img src="/Logo_Octary.png" alt="Logo" className="h-5 w-5 shrink-0" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium whitespace-pre text-black dark:text-white"
      >
        Kas<span className="text-blue-500">Kuy</span>
      </motion.span>
      <div className="flex items-center gap-8">
        <ThemeButton />
      </div>
    </a>
  );
};
export const LogoIcon = () => {
  return (
    <a
      href="#"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black"
    >
      <img src="/Logo_Octary.png" alt="Logo" className="h-5 w-5 shrink-0" />
    </a>
  );
};

export default function dashboardPage() {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white">
      <main className="min-h-screen">
        <SidebarWidget />
      </main>
    </div>
  );
}
