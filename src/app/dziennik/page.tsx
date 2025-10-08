import DiaryTop from "@/components/Diary/DiaryTop";
import DiaryList from "@/components/Diary/DiaryList/DiaryList";

const DiaryListPage = async () => {
    return (
        <div className="bg-light-grey">
            <div className="container mx-auto py-12 px-4">
                <DiaryTop 
                title={<>Utwórz <span className="text-secondary font-secondary">dziennik</span> dla Twojego dziecka</>} 
                description="Zachowaj najpiękniejsze wspomnienia – zapisuj ważne chwile i dodawaj zdjęcia, by stworzyć wyjątkową pamiątkę na lata." 
                badgeText="Utwórz dziennik"
                />
                <DiaryList />
            </div>
        </div>
    );
};

export default DiaryListPage;