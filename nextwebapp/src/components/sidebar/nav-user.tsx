"use client";

// next athuh methods
import { useSession, signOut } from "next-auth/react";

import { ChevronsUpDown, DecimalsArrowRight, LogOut } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

export function NavUser() {
  const { data: userData } = useSession();
  const { isMobile } = useSidebar();


  const user = {
    name: userData?.user?.name || "Assessee",
    email: userData?.user?.email || 'Assessee@gmail.com',
  };

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <Avatar className="h-8 w-8 border rounded-sm">
                <AvatarImage src={userData?.user?.image ?? ''} alt="@avatar" />
                <AvatarFallback>
                  <DecimalsArrowRight className="size-6" />
                </AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium capitalize">{user.name}</span>
                <span className="truncate text-xs capitalize">{user.email}</span>
              </div>
              <ChevronsUpDown className="ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <Avatar className="h-8 w-8 border rounded-sm">
                  <div className="flex size-8 items-center justify-center">
                    {/* <DecimalsArrowRight className="size-6" />
                    <img src={userData?.user?.image} alt="profileImage" /> */}
                    <AvatarImage src={userData?.user?.image ?? ''} alt="@avatar" />
                    <AvatarFallback>
                      <DecimalsArrowRight className="size-6" />
                    </AvatarFallback>
                  </div>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium capitalize">{user.name}</span>
                  <span className="truncate text-xs capitalize">{user.email}</span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />

            <DropdownMenuItem onClick={() => signOut()}>
              <LogOut />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
