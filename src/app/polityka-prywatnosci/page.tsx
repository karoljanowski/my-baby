import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Polityka prywatności | My Baby",
    description: "Polityka prywatności serwisu My Baby - dziennika rozwoju dziecka.",
};

const PrivacyPolicyPage = () => {
    return (
        <div className="container mx-auto px-4 py-12 max-w-4xl">
            <h1 className="text-[32px] md:text-[40px] leading-[120%] mb-8 text-dark -tracking-[0.06em]">
                Polityka prywatności
            </h1>

            <div className="space-y-8">
                <section>
                    <h2 className="text-[24px] md:text-[28px] leading-[120%] mb-4 text-dark -tracking-[0.06em]">
                        1. Informacje ogólne
                    </h2>
                    <p className="text-base leading-[150%] font-light mb-4">
                        Niniejsza Polityka Prywatności określa zasady przetwarzania i ochrony danych osobowych
                        przekazanych przez Użytkowników w związku z korzystaniem przez nich z usług dostępnych
                        w serwisie My Baby.
                    </p>
                    <p className="text-base leading-[150%] font-light">
                        Administratorem danych osobowych zawartych w serwisie jest właściciel serwisu My Baby.
                    </p>
                </section>

                <section>
                    <h2 className="text-[24px] md:text-[28px] leading-[120%] mb-4 text-dark -tracking-[0.06em]">
                        2. Jakie dane zbieramy
                    </h2>
                    <p className="text-base leading-[150%] font-light mb-4">
                        W ramach świadczenia usług zbieramy następujące kategorie danych osobowych:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-base leading-[150%] font-light ml-4">
                        <li>Dane rejestracyjne: adres e-mail, hasło (w formie zaszyfrowanej)</li>
                        <li>Dane dotyczące dziecka: imię, data urodzenia</li>
                        <li>Treści wpisów w dzienniku: notatki, zdjęcia, informacje o rozwoju dziecka</li>
                        <li>Dane techniczne: adres IP, informacje o przeglądarce, logi systemowe</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-[24px] md:text-[28px] leading-[120%] mb-4 text-dark -tracking-[0.06em]">
                        3. Cel i podstawa prawna przetwarzania danych
                    </h2>
                    <p className="text-base leading-[150%] font-light mb-4">
                        Dane osobowe są przetwarzane w celu:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-base leading-[150%] font-light ml-4 mb-4">
                        <li>Świadczenia usługi dziennika rozwoju dziecka (podstawa: umowa)</li>
                        <li>Komunikacji z Użytkownikami (podstawa: prawnie uzasadniony interes)</li>
                        <li>Zapewnienia bezpieczeństwa serwisu (podstawa: prawnie uzasadniony interes)</li>
                        <li>Wypełnienia obowiązków prawnych (podstawa: obowiązek prawny)</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-[24px] md:text-[28px] leading-[120%] mb-4 text-dark -tracking-[0.06em]">
                        4. Bezpieczeństwo danych
                    </h2>
                    <p className="text-base leading-[150%] font-light mb-4">
                        Zapewniamy odpowiednie środki techniczne i organizacyjne chroniące dane osobowe przed
                        nieuprawnionym dostępem, utratą lub zniszczeniem:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-base leading-[150%] font-light ml-4">
                        <li>Szyfrowanie połączenia SSL/TLS</li>
                        <li>Szyfrowanie haseł w bazie danych</li>
                        <li>Regularne kopie zapasowe</li>
                        <li>Ograniczony dostęp do danych osobowych</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-[24px] md:text-[28px] leading-[120%] mb-4 text-dark -tracking-[0.06em]">
                        5. Udostępnianie danych
                    </h2>
                    <p className="text-base leading-[150%] font-light">
                        Dane osobowe nie są sprzedawane ani udostępniane podmiotom trzecim, z wyjątkiem sytuacji
                        określonych prawem lub w przypadku korzystania z zewnętrznych dostawców usług technicznych
                        niezbędnych do funkcjonowania serwisu (hosting, poczta e-mail). Wszystkie podmioty przetwarzające
                        dane w naszym imieniu gwarantują stosowanie odpowiednich środków ochrony i bezpieczeństwa
                        danych osobowych.
                    </p>
                </section>

                <section>
                    <h2 className="text-[24px] md:text-[28px] leading-[120%] mb-4 text-dark -tracking-[0.06em]">
                        6. Prawa użytkowników
                    </h2>
                    <p className="text-base leading-[150%] font-light mb-4">
                        Każdy Użytkownik ma prawo do:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-base leading-[150%] font-light ml-4">
                        <li>Dostępu do swoich danych osobowych</li>
                        <li>Sprostowania (poprawiania) danych</li>
                        <li>Usunięcia danych (prawo do bycia zapomnianym)</li>
                        <li>Ograniczenia przetwarzania danych</li>
                        <li>Przenoszenia danych</li>
                        <li>Wniesienia sprzeciwu wobec przetwarzania danych</li>
                        <li>Cofnięcia zgody w dowolnym momencie</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-[24px] md:text-[28px] leading-[120%] mb-4 text-dark -tracking-[0.06em]">
                        7. Pliki cookies
                    </h2>
                    <p className="text-base leading-[150%] font-light mb-4">
                        Serwis wykorzystuje pliki cookies (ciasteczka) w celu:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-base leading-[150%] font-light ml-4 mb-4">
                        <li>Utrzymania sesji użytkownika po zalogowaniu</li>
                        <li>Zapamiętania preferencji użytkownika</li>
                        <li>Zapewnienia bezpieczeństwa</li>
                    </ul>
                    <p className="text-base leading-[150%] font-light">
                        Użytkownik może w dowolnym momencie zmienić ustawienia dotyczące plików cookies w swojej
                        przeglądarce internetowej.
                    </p>
                </section>

                <section>
                    <h2 className="text-[24px] md:text-[28px] leading-[120%] mb-4 text-dark -tracking-[0.06em]">
                        8. Okres przechowywania danych
                    </h2>
                    <p className="text-base leading-[150%] font-light">
                        Dane osobowe są przechowywane przez okres niezbędny do realizacji celów, dla których zostały
                        zebrane, lub do momentu usunięcia konta przez Użytkownika. Po usunięciu konta dane są
                        nieodwracalnie usuwane z naszych systemów w ciągu 30 dni.
                    </p>
                </section>

                <section>
                    <h2 className="text-[24px] md:text-[28px] leading-[120%] mb-4 text-dark -tracking-[0.06em]">
                        9. Zmiany polityki prywatności
                    </h2>
                    <p className="text-base leading-[150%] font-light">
                        Zastrzegamy sobie prawo do wprowadzania zmian w niniejszej Polityce Prywatności. O wszelkich
                        zmianach będziemy informować Użytkowników poprzez komunikat w serwisie lub wiadomość e-mail.
                        Zmiany wchodzą w życie w terminie wskazanym w komunikacie, nie wcześniej jednak niż po upływie
                        14 dni od jego publikacji.
                    </p>
                </section>

                <section>
                    <h2 className="text-[24px] md:text-[28px] leading-[120%] mb-4 text-dark -tracking-[0.06em]">
                        10. Kontakt
                    </h2>
                    <p className="text-base leading-[150%] font-light">
                        W przypadku pytań dotyczących ochrony danych osobowych lub chęci skorzystania z przysługujących
                        praw, prosimy o kontakt poprzez formularz kontaktowy dostępny w serwisie.
                    </p>
                </section>

            </div>
        </div>
    );
};

export default PrivacyPolicyPage;