import { Button } from "@/components/ui/button";
import { UserCircleIcon } from "lucide-react";
import { UserButton, SignUpButton, SignedOut, SignInButton, SignedIn } from "@clerk/nextjs";

export const AuthButton = () => {
    
    return (
        <>
        <SignedIn>
            <UserButton />
            { /* Add menu items for Studio, Menu */}
        </SignedIn>
        <SignedOut>
            <SignInButton mode = "modal">
            <Button
                variant="outline"
                className = "px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-500 border border-blue-500/20 rounded-full shadow-none [] ">
                <UserCircleIcon  />
                Sign in
            </Button>
            </SignInButton>
        </SignedOut>
        </>
    );
};