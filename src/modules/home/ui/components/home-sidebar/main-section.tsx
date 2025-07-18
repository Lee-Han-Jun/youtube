"use client";

import Link from "next/link";
import { useAuth, useClerk } from "@clerk/nextjs";
import { 
    SidebarGroup, 
    SidebarMenu, 
    SidebarMenuButton, 
    SidebarMenuItem,
    SidebarGroupContent } from "@/components/ui/sidebar";
import { FlameIcon, HomeIcon, PlaySquareIcon } from "lucide-react";

const items = [
    {
        title: "Home",
        url: "/",
        icon: HomeIcon
    },
    {
        title: "Subscriptions",
        url: "/feed/subscriptions",
        icon: PlaySquareIcon,
        auth: true,
    },
    {
        title: "Subscriptions",
        url: "/feed/trending",
        icon: FlameIcon,
    },
];

export const MainSection = () => {
    const {isSignedIn} = useAuth();
    const clerk = useClerk();
    return (
        <SidebarGroup>
            <SidebarGroupContent>
                <SidebarMenu>
                    {items.map((item) => (
                        <SidebarMenuItem key={item.title}>
                            <SidebarMenuButton
                                tooltip={item.title}
                                asChild
                                isActive={false} // TODO : Change to look at current pathname
                                onClick={(e) => {
                                    if(!isSignedIn && item.auth){
                                        e.preventDefault();
                                        return clerk.openSignIn();
                                    }
                                        
                                }} //TODO: Do something on click
                                    >
                                    <Link href={item.url} className="flex items-center gap-4">
                                        <item.icon/>
                                        <span className = "text-sm">{item.title}</span>
                                    </Link>
                                </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
    )
}