"use client";

import { Instagram, LogOut, User } from "lucide-react";
import Link from "next/link";
import { signOut } from "@/server/auth";

type HeaderIconsProps = {
    isLoggedIn: boolean;
};

const HeaderIcons = ({ isLoggedIn }: HeaderIconsProps) => {
    const handleSignOut = async () => {
        await signOut();
    };

    return (
        <div className="flex gap-4 items-center order-2 ml-auto md:ml-0">
            <Link href="https://www.instagram.com/" target="_blank">
                <Instagram className="text-dark" />
            </Link>
            {isLoggedIn ? (
                <button onClick={handleSignOut} className="cursor-pointer">
                    <LogOut className="text-dark" />
                </button>
            ) : (
                <Link href="/dziennik">
                    <User className="text-dark" />
                </Link>
            )}
        </div>
    );
};

export default HeaderIcons;