import { Status, StatusState } from "@/lib/types";
import { CircleCheckIcon, CircleXIcon, Loader2Icon } from "lucide-react";

const DiaryEntryStatusInfo = ({ status }: { status: Status }) => {
    return <span className="text-xs text-muted-foreground flex items-center gap-2 mb-1">
        {status.state === StatusState.NO_CHANGES ? <><CircleCheckIcon className="w-4 h-4" /> Brak zmian</> :
        status.state === StatusState.SAVING ? <><Loader2Icon className="w-4 h-4 animate-spin" /> Zapisywanie...</> :
        status.state === StatusState.SAVED ? <><CircleCheckIcon className="w-4 h-4" /> Zapisano</> :
        status.state === StatusState.ERROR ? <><CircleXIcon className="w-4 h-4" /> {status.message || 'Błąd'}</> : null}
    </span>;
}

export default DiaryEntryStatusInfo;