export type TQuestion = {
    question_key: string;
    question_title: string;
}

export type TCategory = {
    category_key: string;
    category_title: string;
    category_description: string;
    category_icon: string;
    questions: TQuestion[];
}

export const data: TCategory[] = [
    {
        category_key: "first_moments",
        category_title: "Pierwsze chwile",
        category_description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.",
        category_icon: "/first_moments.svg",
        questions: [
            {
                question_key: "first_moments_1",
                question_title: "Jak wyglądała chwila, kiedy po raz pierwszy zobaczyłeś swoje dziecko?",
            },
            {
                question_key: "first_moments_2",
                question_title: "Co czułeś, gdy trzymałeś je na rękach po raz pierwszy?",
            },
            {
                question_key: "first_moments_3",
                question_title: "Jakie emocje towarzyszyły Wam w drodze ze szpitala do domu?",
            },
            {
                question_key: "first_moments_4",
                question_title: "Czy pamiętasz pierwsze spojrzenie lub uśmiech dziecka?",
            },
            {
                question_key: "first_moments_5",
                question_title: "Kto był pierwszą osobą, która odwiedziła Was po narodzinach?",
            },
        ]
    },
    {
        category_key: "first_words_and_steps",
        category_title: "Pierwsze słowa i kroki",
        category_description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.",
        category_icon: "/first_words_and_steps.svg",
        questions: [
            {
                question_key: "first_words_and_steps_1",
                question_title: "Jak wyglądał pierwszy dzień Twojego dziecka?",
            },
            {
                question_key: "first_words_and_steps_2",
                question_title: "Jakie były pierwsze dzwięki, które wydało?",
            },
            {
                question_key: "first_words_and_steps_3",
                question_title: "Czy pamiętasz zapach, który kojarzy Ci się z tymi chwilami?",
            },
            {
                question_key: "first_words_and_steps_4",
                question_title: "Jakie było pierwsze ubranko, które założyło?",
            },
            {
                question_key: "first_words_and_steps_5",
                question_title: "Kto pierwszy wziął dziecko na ręce?",
            }
        ]
    },
    {
        category_key: "family",
        category_title: "Nasza rodzina i bliscy",
        category_description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.",
        category_icon: "/family.svg",
        questions: [
            {
                question_key: "family_1",
                question_title: "Jak zareagowali dziadkowie, gdy dowiedzieli się o narodzinach?",
            },
            {
                question_key: "family_2",
                question_title: "Czy pamiętasz pierwsze spotkanie dziecka z rodzeństwem lub kuzynami?",
            },
            {
                question_key: "family_3",
                question_title: "Jakie tradycje rodzinne chcieliście przekazać dziecku?",
            },
            {
                question_key: "family_4",
                question_title: "Kto najczęściej pomagał Wam w pierwszych miesiącach?",
            },
            {
                question_key: "family_5",
                question_title: "Czy masz ulubione zdjęcie rodzinne z tamtych dni?",
            },
        ]
    },
    {
        category_key: "trips",
        category_title: "Pierwsze podróże",
        category_description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.",
        category_icon: "/trips.svg",
        questions: [
            {
                question_key: "trips_1",
                question_title: "Dokąd wybraliście się w pierwszą podróż z dzieckiem?",
            },
            {
                question_key: "trips_2",
                question_title: "Jak wyglądały przygotowania do pierwszego wyjazdu?",
            },
            {
                question_key: "trips_3",
                question_title: "Czy pamiętasz, jak dziecko zareagowało na nowe miejsce?",
            },
            {
                question_key: "trips_4",
                question_title: "Jakie wspomnienia najbardziej zapadły Ci w pamięć z tego wyjazdu?",
            },
            {
                question_key: "trips_5",
                question_title: "Czy macie zdjęcia z tej pierwszej podróży?",
            },
        ]
    },
    {
        category_key: "food",
        category_title: "Ulubione smaki",
        category_description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.",
        category_icon: "/food.svg",
        questions: [
            {
                question_key: "food_1",
                question_title: "Jakie było pierwsze danie, którego spróbowało Twoje dziecko?",
            },
            {
                question_key: "food_2",
                question_title: "Jaka była jego ulubiona przekąska w dzieciństwie?",
            },
            {
                question_key: "food_3",
                question_title: "Czy pamiętasz zabawną sytuację związaną z jedzeniem?",
            },
            {
                question_key: "food_4",
                question_title: "Jak reagowało na nowe smaki?",
            },
            {
                question_key: "food_5",
                question_title: "Czy macie wspólne potrawy, które zawsze kojarzą się z dzieciństwem?",
            },
        ]
    },
    {
        category_key: "holidays",
        category_title: "Pierwsze święta i urodziny",
        category_description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.",
        category_icon: "/holidays.svg",
        questions: [
            {
                question_key: "holidays_1",
                question_title: "Jak wyglądały pierwsze święta z dzieckiem?",
            },
            {
                question_key: "holidays_2",
                question_title: "Jakie prezenty otrzymało na swoje pierwsze urodziny?",
            },
            {
                question_key: "holidays_3",
                question_title: "Czy pamiętasz dekoracje lub atmosferę tamtych chwil?",
            },
            {
                question_key: "holidays_4",
                question_title: "Kto był obecny podczas pierwszych urodzin?",
            },
            {
                question_key: "holidays_5",
                question_title: "Czy macie jakieś wyjątkowe zdjęcia lub nagrania z tych momentów?",
            },
        ]
    },
]
