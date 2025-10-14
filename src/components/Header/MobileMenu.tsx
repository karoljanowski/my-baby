"use client";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const MobileMenu = ({ menuItems }: { menuItems: { label: string, href: string }[] }) => {
    const [isOpen, setIsOpen] = useState(false);
    
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };


    return (
        <>
            <button 
                className="md:hidden order-3 p-2 hover:bg-muted rounded-lg transition-colors"
                onClick={toggleMenu}
                aria-label="Toggle menu"
            >
                <Menu className="w-6 h-6" />
            </button>

            {/* Backdrop */}
            {isOpen && (
                <div 
                    className="fixed inset-0 bg-black/50 z-40 animate-in fade-in duration-300"
                    onClick={closeMenu}
                />
            )}

            {/* Menu Panel */}
            <div className={`fixed top-0 left-0 w-4/5 max-w-sm h-screen bg-background z-50 shadow-2xl transition-transform duration-300 ease-in-out ${
                isOpen ? 'translate-x-0' : '-translate-x-full'
            }`}>
                <div className="flex flex-col h-full">
                    {/* Header */}
                    <div className="flex items-center justify-between p-6 border-b border-border">
                        <h2 className="text-xl font-semibold text-foreground">Menu</h2>
                        <button 
                            onClick={closeMenu}
                            className="p-2 hover:bg-muted rounded-lg transition-colors"
                            aria-label="Close menu"
                        >
                            <X className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Menu Items */}
                    <nav className="flex-1 overflow-y-auto py-6">
                        <ul className="flex flex-col gap-2 px-4">
                            {menuItems.map((item) => (
                                <li key={item.label}>
                                    <Link 
                                        href={item.href}
                                        onClick={closeMenu}
                                        className="block px-4 py-3 text-foreground hover:bg-muted hover:text-primary rounded-lg transition-colors font-medium"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    );
};

export default MobileMenu;