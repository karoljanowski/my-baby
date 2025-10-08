import { AlertCircleIcon } from "lucide-react";

const Alert = ({ message }: { message: string }) => {
    return (
        <div className="bg-red-500/10 border border-red-500/20 rounded-lg px-6 py-4">
            <div className="text-red-600 text-lg flex items-center gap-3"><AlertCircleIcon className="size-5" />{message}</div>
        </div>
    );
};

export default Alert;