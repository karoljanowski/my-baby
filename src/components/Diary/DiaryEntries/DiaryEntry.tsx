import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { TQuestion } from "@/lib/questions";    
import { EntryDataWithFiles, Status, StatusState } from "@/lib/types";
import { saveEntry } from "@/server/diary";
import { useState, useEffect, useRef } from "react";
import { useDebounce } from "@/lib/hooks";
import DiaryEntryStatusInfo from "@/components/Diary/DiaryEntries/DiaryEntryStatusInfo";
import DiaryEntryImages from "@/components/Diary/DiaryEntries/DiaryEntryImages/DiaryEntryImages";

type DiaryEntryProps = {
    question: TQuestion;
    entry: EntryDataWithFiles | undefined;
    diaryId: string;
}

const DiaryEntry = ({ question, entry, diaryId }: DiaryEntryProps) => {
    const [text, setText] = useState(entry?.text ?? "");
    const [status, setStatus] = useState<Status>({ state: StatusState.NO_CHANGES });
    const debouncedText = useDebounce(text, 1000);
    const hasUserEditedRef = useRef(false);

    useEffect(() => {
        if (!hasUserEditedRef.current) {
            return;
        }

        const save = async () => {
            setStatus({ state: StatusState.SAVING });
            const result = await saveEntry({ text: debouncedText, diaryId, entryKey: question.question_key });
            if (result.success) {
                setStatus({ state: StatusState.SAVED });
            } else {
                setStatus({ state: StatusState.ERROR, message: result.message || 'Błąd podczas zapisywania' });
            }
        }
        save();
    }, [debouncedText, diaryId, question.question_key]);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value);
        hasUserEditedRef.current = true;
    }

    const handleChangeStatus = (status: Status) => {
        setStatus(status);
    }

    return (
        <div className="flex flex-col">
            <Label htmlFor={question.question_key} className="text-xl mb-3">{question.question_title}</Label>
            <Textarea 
                id={question.question_key} 
                placeholder="Wprowadź tekst..." 
                className="resize-none mb-6" 
                value={text}
                onChange={handleChange}
            />
            <DiaryEntryImages 
                initialImages={entry?.files ?? []} 
                entryKey={question.question_key} 
                diaryId={diaryId} 
                setStatus={handleChangeStatus}
                status={status}
            />
            <DiaryEntryStatusInfo status={status} />
        </div>
    );
};

export default DiaryEntry;