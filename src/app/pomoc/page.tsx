import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Pomoc | My Baby",
    description: "Centrum pomocy - najczęściej zadawane pytania i instrukcje korzystania z dziennika My Baby.",
};

const HelpPage = () => {
    return (
        <div className="bg-light-grey">
            <div className="container mx-auto px-4 py-12 max-w-4xl">
                <h1 className="text-[32px] md:text-[40px] leading-[120%] mb-4 text-dark -tracking-[0.06em]">
                    Centrum <span className="text-secondary font-secondary">pomocy</span>
                </h1>
                <p className="text-base leading-[150%] font-light mb-12 text-dark/80">
                    Znajdź odpowiedzi na najczęściej zadawane pytania i dowiedz się, jak w pełni korzystać z dziennika My Baby.
                </p>

                <div className="space-y-12">
                    {/* Sekcja: Pierwsze kroki */}
                    <section>
                        <h2 className="text-[24px] md:text-[28px] leading-[120%] mb-6 text-dark -tracking-[0.06em]">
                            Pierwsze kroki
                        </h2>
                        <div className="space-y-6">
                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <h3 className="text-[18px] md:text-[20px] font-medium mb-3 text-dark">
                                    Jak założyć konto?
                                </h3>
                                <p className="text-base leading-[150%] font-light text-dark/80">
                                    Kliknij przycisk &quot;Zarejestruj się&quot; w górnym rogu strony, podaj swój adres e-mail i utwórz bezpieczne hasło.
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <h3 className="text-[18px] md:text-[20px] font-medium mb-3 text-dark">
                                    Jak stworzyć pierwszy dziennik?
                                </h3>
                                <p className="text-base leading-[150%] font-light text-dark/80 mb-3">
                                    Po zalogowaniu:
                                </p>
                                <ol className="list-decimal list-inside space-y-2 text-base leading-[150%] font-light text-dark/80 ml-4">
                                    <li>Przejdź do zakładki &quot;Dziennik&quot;</li>
                                    <li>Kliknij &quot;Utwórz nowy dziennik&quot;</li>
                                    <li>Podaj imię dziecka</li>
                                    <li>Kliknij &quot;Utwórz&quot; i gotowe!</li>
                                </ol>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja: Zarządzanie dziennikiem */}
                    <section>
                        <h2 className="text-[24px] md:text-[28px] leading-[120%] mb-6 text-dark -tracking-[0.06em]">
                            Zarządzanie dziennikiem
                        </h2>
                        <div className="space-y-6">
                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <h3 className="text-[18px] md:text-[20px] font-medium mb-3 text-dark">
                                    Jak dodać wpis do dziennika?
                                </h3>
                                <p className="text-base leading-[150%] font-light text-dark/80">
                                    Otwórz wybrany dziennik, wybierz datę i kategorię wpisu (np. &quot;Pierwsze słowa&quot;, &quot;Jedzenie&quot;, &quot;Rodzina&quot;). Wypełnij formularz odpowiadając na pytania przewodnie i dodaj zdjęcia. Wpis zostanie zapisany automatycznie.
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <h3 className="text-[18px] md:text-[20px] font-medium mb-3 text-dark">
                                    Jak dodać zdjęcia do wpisu?
                                </h3>
                                <p className="text-base leading-[150%] font-light text-dark/80">
                                    W formularzu wpisu kliknij &quot;Dodaj zdjęcia&quot; i wybierz pliki ze swojego urządzenia. Możesz dodać wiele zdjęć jednocześnie. Każde zdjęcie może mieć maksymalnie 4.5 MB.
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <h3 className="text-[18px] md:text-[20px] font-medium mb-3 text-dark">
                                    Czy mogę edytować wpisy po zapisaniu?
                                </h3>
                                <p className="text-base leading-[150%] font-light text-dark/80">
                                    Tak! Każdy wpis możesz edytować w dowolnym momencie.
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <h3 className="text-[18px] md:text-[20px] font-medium mb-3 text-dark">
                                    Jak usunąć dziennik?
                                </h3>
                                <p className="text-base leading-[150%] font-light text-dark/80">
                                    Na liście dzienników kliknij ikonę kosza obok wybranego dziennika.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja: Eksport i udostępnianie */}
                    <section>
                        <h2 className="text-[24px] md:text-[28px] leading-[120%] mb-6 text-dark -tracking-[0.06em]">
                            Eksport i udostępnianie
                        </h2>
                        <div className="space-y-6">
                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <h3 className="text-[18px] md:text-[20px] font-medium mb-3 text-dark">
                                    Jak wygenerować PDF z dziennika?
                                </h3>
                                <p className="text-base leading-[150%] font-light text-dark/80">
                                    Na liście dzienników kliknij ikonę PDF obok wybranego dziennika. System automatycznie wygeneruje pięknie sformatowany dokument PDF zawierający wszystkie Twoje wpisy i zdjęcia.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja: Konto i bezpieczeństwo */}
                    <section>
                        <h2 className="text-[24px] md:text-[28px] leading-[120%] mb-6 text-dark -tracking-[0.06em]">
                            Konto i bezpieczeństwo
                        </h2>
                        <div className="space-y-6">
                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <h3 className="text-[18px] md:text-[20px] font-medium mb-3 text-dark">
                                    Jak zmienić hasło?
                                </h3>
                                <p className="text-base leading-[150%] font-light text-dark/80">
                                    Jeśli zapomniałeś hasła, kliknij &quot;Nie pamiętam hasła&quot; na stronie logowania. Otrzymasz link do resetowania hasła na swój adres e-mail.
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <h3 className="text-[18px] md:text-[20px] font-medium mb-3 text-dark">
                                    Czy moje dane są bezpieczne?
                                </h3>
                                <p className="text-base leading-[150%] font-light text-dark/80">
                                    Tak! Wszystkie dane są szyfrowane i przechowywane na bezpiecznych serwerach. Hasła są hashowane, a połączenie z serwerem jest zabezpieczone protokołem SSL/TLS. Więcej informacji znajdziesz w naszej Polityce Prywatności.
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <h3 className="text-[18px] md:text-[20px] font-medium mb-3 text-dark">
                                    Jak usunąć konto?
                                </h3>
                                <p className="text-base leading-[150%] font-light text-dark/80">
                                    Aby usunąć konto, skontaktuj się z nami poprzez formularz kontaktowy. Uwaga: usunięcie konta spowoduje trwałe usunięcie wszystkich dzienników, wpisów i zdjęć.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja: Problemy techniczne */}
                    <section>
                        <h2 className="text-[24px] md:text-[28px] leading-[120%] mb-6 text-dark -tracking-[0.06em]">
                            Problemy techniczne
                        </h2>
                        <div className="space-y-6">
                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <h3 className="text-[18px] md:text-[20px] font-medium mb-3 text-dark">
                                    Nie mogę się zalogować
                                </h3>
                                <p className="text-base leading-[150%] font-light text-dark/80 mb-3">
                                    Sprawdź czy:
                                </p>
                                <ul className="list-disc list-inside space-y-2 text-base leading-[150%] font-light text-dark/80 ml-4">
                                    <li>Poprawnie wpisujesz adres e-mail i hasło</li>
                                    <li>Caps Lock nie jest włączony</li>
                                    <li>Twoja przeglądarka akceptuje pliki cookies</li>
                                </ul>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <h3 className="text-[18px] md:text-[20px] font-medium mb-3 text-dark">
                                    Zdjęcie nie zostało załadowane
                                </h3>
                                <p className="text-base leading-[150%] font-light text-dark/80 mb-3">
                                    Upewnij się, że:
                                </p>
                                <ul className="list-disc list-inside space-y-2 text-base leading-[150%] font-light text-dark/80 ml-4">
                                    <li>Plik ma format JPG lub PNG</li>
                                    <li>Rozmiar pliku nie przekracza 4.5 MB</li>
                                    <li>Masz stabilne połączenie internetowe</li>
                                </ul>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <h3 className="text-[18px] md:text-[20px] font-medium mb-3 text-dark">
                                    Nie otrzymałem e-maila z resetowaniem hasła
                                </h3>
                                <p className="text-base leading-[150%] font-light text-dark/80">
                                    Sprawdź folder spam lub promocje. E-mail powinien dotrzeć w ciągu kilku minut. Jeśli nadal go nie widzisz, spróbuj ponownie zresetować hasło lub skontaktuj się z nami.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Sekcja: Kontakt */}
                    <section className="bg-brown/5 p-8 rounded-lg">
                        <h2 className="text-[24px] md:text-[28px] leading-[120%] mb-4 text-dark -tracking-[0.06em]">
                            Nie znalazłeś odpowiedzi?
                        </h2>
                        <p className="text-base leading-[150%] font-light text-dark/80 mb-6">
                            Jeśli masz inne pytanie lub napotkałeś problem, z którym nie wiesz jak sobie poradzić, skontaktuj się z nami poprzez formularz kontaktowy. Odpowiemy najszybciej jak to możliwe!
                        </p>
                        <a 
                            href="/kontakt" 
                            className="inline-flex items-center justify-center rounded-md text-sm font-medium bg-brown text-white hover:bg-brown/90 h-10 px-6 py-2 transition-colors"
                        >
                            Skontaktuj się z nami
                        </a>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default HelpPage;

