"use client";

import Link from "next/link";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetHeader,
    SheetTitle,
    SheetDescription,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
    BadgeCheck,
    Bell,
    LogOut,
    Menu,
    SunMoon,
} from "lucide-react";

import { GrTest } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin, FaCircleUser } from "react-icons/fa6";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { useSession, signOut } from "next-auth/react";
import { useTheme } from "next-themes";
import { Separator } from "../ui/separator";

export function SiteHeader() {
    const { data: session } = useSession();
    const { setTheme, theme } = useTheme()
    console.log(theme)

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }

    return (
        <header className="fixed top-0 inset-x-0 z-50 border-b bg-background/50 backdrop-blur lg:px-5 lg:border-b lg:border-dashed">
            <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8 lg:border-l lg:border-r lg:border-dashed">
                <div className="flex items-center gap-4">
                    <Link href="/" className="flex items-center justify-center gap-2.5">
                        <Button
                            variant='default'
                            size="icon"
                            className="rounded-full bg-foreground text-background hover:bg-foreground"
                        >
                            <GrTest className="h-3 w-3" />
                        </Button>
                        <span className="text-lg font-bold">
                            Regami Assessee
                        </span>
                    </Link>

                    <nav className="hidden lg:flex items-center gap-3 ml-6 text-sm font-medium text-muted-foreground">

                    </nav>
                </div>

                <div className="flex items-center gap-2">
                    <Button
                        variant="outline"
                        size="icon"
                        className="rounded-md"
                        aria-label="Toggle theme"
                        onClick={toggleTheme}
                    >
                        <SunMoon className="h-4 w-4" />
                    </Button>

                    <Button
                        variant="outline"
                        size="icon"
                        className="rounded-md"
                        aria-label="GitHub"
                    >
                        <FaGithub className="h-4 w-4" />
                    </Button>

                    <Button
                        variant="outline"
                        size="icon"
                        className="rounded-md"
                        aria-label="Linkedin"
                    >
                        <FaLinkedin className="h-4 w-4" />
                    </Button>
                    <Separator orientation="vertical" className="py-4.5 mx-1" />


                    <div className="hidden lg:block">

                        <DropdownMenu >
                            <DropdownMenuTrigger asChild>
                                <Avatar className="rounded-md border">
                                    <AvatarImage src={session?.user?.image ?? ''} alt='user' />
                                    <AvatarFallback>
                                        <FaCircleUser className="w-8 h-8" />
                                    </AvatarFallback>
                                </Avatar>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56 mt-2" align="end">
                                <DropdownMenuLabel>
                                    <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                                        <Avatar className="h-8 w-8 rounded-md border">
                                            <AvatarImage src={session?.user?.image ?? ''} alt={session?.user?.name ?? ''} />
                                            <AvatarFallback className="">
                                                <FaCircleUser className="w-8 h-8" />
                                            </AvatarFallback>
                                        </Avatar>
                                        <div className="grid flex-1 text-left text-sm leading-tight">
                                            <span className="truncate font-medium">{session?.user?.name ?? ''}</span>
                                            <span className="truncate text-xs">{session?.user?.email ?? ''}</span>
                                        </div>
                                    </div>
                                </DropdownMenuLabel>
                                <DropdownMenuGroup>
                                    <DropdownMenuItem disabled>
                                        <BadgeCheck />
                                        Account
                                    </DropdownMenuItem>

                                    <DropdownMenuItem disabled>
                                        <Bell />
                                        Notifications
                                    </DropdownMenuItem>

                                </DropdownMenuGroup>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem onClick={() => signOut()}>
                                    <LogOut />
                                    Log out
                                    <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>

                    <Sheet>
                        <SheetTrigger asChild>
                            <Button
                                variant="outline"
                                size="icon"
                                className="lg:hidden rounded-2xl"
                                aria-label="Open menu"
                            >
                                <Menu className="h-5 w-5" />
                            </Button>
                        </SheetTrigger>

                        <SheetContent side="right" className="flex flex-col">
                            <SheetHeader>
                                <div className="flex items-center gap-2">
                                    <SheetTitle>
                                        <Button
                                            variant="outline"
                                            size="icon"
                                            className="rounded-full"
                                            aria-label="Linkedin"
                                        >
                                            <GrTest className="h-4 w-4" />
                                        </Button>

                                    </SheetTitle>
                                    <SheetDescription>
                                        <span className="text-lg font-light">
                                            Regami Assessee
                                        </span>
                                    </SheetDescription>
                                </div>
                            </SheetHeader>

                            <div className="mt-6 flex flex-col gap-6 px-4">

                                <nav className="flex flex-col gap-3 text-sm font-medium text-muted-foreground">
                                </nav>

                                <div className="flex gap-2">
                                    <Button variant="outline" size="icon" className="rounded-md" aria-label="Toggle theme" onClick={toggleTheme}>
                                        <SunMoon className="h-4 w-4" />
                                    </Button>

                                    <Button variant="outline" size="icon" className="rounded-md" aria-label="GitHub">
                                        <FaGithub className="h-4 w-4" />
                                    </Button>

                                    <Button variant="outline" size="icon" className="rounded-md" aria-label="Linkedin menu">
                                        <FaLinkedin className="h-4 w-4" />
                                    </Button>

                                    <Button variant="outline" size="icon" className="rounded-md" aria-label="Logout" onClick={() => signOut()}>
                                        <LogOut className="h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}
