import React from "react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./shadcn-ui/navigation-menu";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { Leaf } from "lucide-react";

const navigationLinks = [
  {
    label: <Leaf />,
    url: "/",
  },
  {
    label: "assistant",
    url: "/assistant",
  },
];

export default function Header() {
  return (
    <header className="w-full h-header flex justify-center items-center bg-white">
      <NavigationMenu>
        <NavigationMenuList>
          {navigationLinks.map((link, index) => (
            <NavigationMenuItem key={index}>
              <Link href={link.url} legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(navigationMenuTriggerStyle())}
                >
                  {link.label}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}
