import { Status } from "@/lib/types";
import { CircleCheckIcon, CircleXIcon, Loader2Icon } from "lucide-react";

const DiaryEntryStatusInfo = ({ status }: { status: Status }) => {
    return <span className="text-xs text-muted-foreground flex items-center gap-2 mb-1">
        {status === Status.NO_CHANGES ? <><CircleCheckIcon className="w-4 h-4" /> Brak zmian</> :
        status === Status.SAVING ? <><Loader2Icon className="w-4 h-4 animate-spin" /> Zapisywanie...</> :
        status === Status.SAVED ? <><CircleCheckIcon className="w-4 h-4" /> Zapisano</> :
        status === Status.ERROR ? <><CircleXIcon className="w-4 h-4" /> Błąd</> : null}
    </span>;
}

export default DiaryEntryStatusInfo;