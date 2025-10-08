"use client";

import { Button } from "@/components/ui/button";
import { FileTextIcon, Loader2Icon } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const GeneratePdfButton = ({ id }: { id: string }) => {
    const [isLoading, setIsLoading] = useState(false);

    const handleDownload = async () => {
        setIsLoading(true);
        
        try {
            const response = await fetch(`/api/generate-pdf/${id}`, {
                method: 'GET',
            });

            if (!response.ok) {
                throw new Error('Nie udało się wygenerować PDF');
            }

            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `dziennik-${id}.pdf`;
            document.body.appendChild(a);
            a.click();
            
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);
            
            toast.success('PDF został pobrany');
        } catch (error) {
            console.error('Error downloading PDF:', error);
            toast.error('Wystąpił błąd podczas generowania PDF');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Button 
            variant="outline" 
            size="icon" 
            onClick={handleDownload}
            disabled={isLoading}
            className="border-green/20 hover:border-green hover:bg-green/5 transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            title="Pobierz PDF"
        >
            {isLoading ? (
                <Loader2Icon className="w-5 h-5 text-green animate-spin" />
            ) : (
                <FileTextIcon className="w-5 h-5 text-green" />
            )}
        </Button>
    );
};

export default GeneratePdfButton;