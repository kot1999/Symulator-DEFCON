/* ============================================================================
   STRATCOM / NORAD — ZEWNĘTRZNA BAZA DANYCH OPERACYJNYCH (events_data.js)
   Zawiera:
   1. window.MOLINK_DILEMMAS  — Depesze i dylematy decyzyjne Gorącej Linii (24)
   2. window.RANDOM_INCIDENTS — Globalne incydenty i zdarzenia losowe (25)
   ============================================================================ */

window.MOLINK_DILEMMAS = [
    {
        category: "WCZESNE OSTRZEGANIE // SYBERIA",
        text: "[DEPESZA #01] WYKRYTO ANOMALIĘ TERMICZNĄ NA SYBERII. MOSKWA TWIERDZI, ŻE TO POŻAR GAZOCIĄGU, LECZ WIDMO IR Z SATELITY SBIRS PRZYPOMINA TEST SILNIKA RAKIETOWEGO R-36M2.",
        options: [
            { label: "A) Przyjmij wyjaśnienie i przekieruj satelitę optycznego KH-11 (Deeskalacja)", delta: -10, slidersDelta: [-5, -10, -15, -12, -10], icbmDelta: -15 },
            { label: "B) Podnieś gotowość radarów BMEWS i zażądaj telemetrii (Proporcjonalnie)", delta: +8, slidersDelta: [5, 5, 10, 15, 10], icbmDelta: 0 },
            { label: "C) Ogłoś alarm bojowy dla dywizjonów Minuteman III (Eskalacja)", delta: +22, slidersDelta: [15, 20, 25, 25, 30], icbmDelta: +20 }
        ]
    },
    {
        category: "FLOTA PODWODNA // PACYFIK",
        text: "[DEPESZA #02] UTRACONO ŁĄCZNOŚĆ VLF Z OKRĘTEM PODWODNYM USS OHIO NA PACYFIKU W POBLIŻU STREFY PATROLOWEJ FLOTY PACYFICZNEJ PRZECIWNIKA.",
        options: [
            { label: "A) Przekaż komunikat o awarii radioboju przez MOLINK (Deeskalacja)", delta: -12, slidersDelta: [-8, -12, -15, -8, -12], icbmDelta: 0 },
            { label: "B) Wyślij samoloty ZOP P-8 Poseidon w rejon ostatniego kontaktu", delta: +10, slidersDelta: [5, 15, 12, 10, 12], icbmDelta: 0 },
            { label: "C) Odblokuj procedurę bojową dla reszty floty SSBN (Eskalacja)", delta: +25, slidersDelta: [15, 25, 25, 20, 35], icbmDelta: +15 }
        ]
    },
    {
        category: "OBRONA PRZECIWRAKIETOWA // ARKTYKA",
        text: "[DEPESZA #03] SYSTEM NORAD ZGŁASZA 12 NADLATUJĄCYCH OBIEKTÓW Z KIERUNKU BIEGUNA PÓŁNOCNEGO. RADARY ZAHORYZONTALNE NIE POTWIERDZAJĄ ECHA.",
        options: [
            { label: "A) Zweryfikuj taśmy symulacyjne komputerów NORAD (Błąd systemu)", delta: -18, slidersDelta: [-15, -15, -15, -25, -20], icbmDelta: -40 },
            { label: "B) Poderwij dyżurne myśliwce i samolot E-4B Nightwatch", delta: +14, slidersDelta: [10, 15, 12, 20, 18], icbmDelta: +25 },
            { label: "C) Przekaż Prezydentowi teczkę Nuclear Football i ogłoś alarm ICBM", delta: +30, slidersDelta: [20, 25, 30, 35, 40], icbmDelta: +55, spawnHostile: 1 }
        ]
    },
    {
        category: "DETEKCJA SEJSMICZNA // ARKTYKA",
        text: "[DEPESZA #04] WYKRYTO PODZIEMNY WSTRZĄS SEJSMICZNY 5.9 MAGNITUDO W REJONIE ARCHIPELAGU NOWA ZIEMIA. PODEJRZENIE NIEZAPOWIEDZIANEGO TESTU GŁOWICY TERMOJĄDROWEJ.",
        options: [
            { label: "A) Zleć analizę izotopową przez stacje pomiarowe CTBTO (Deeskalacja)", delta: -8, slidersDelta: [-5, -8, -10, -8, -8], icbmDelta: 0 },
            { label: "B) Wezwij ambasadora i zawieś wymianę danych traktatu New START", delta: +12, slidersDelta: [10, 10, 18, 12, 14], icbmDelta: 0 },
            { label: "C) Rozmieść bombowce B-2A Spirit w bazach wysuniętych (Eskalacja)", delta: +22, slidersDelta: [15, 25, 22, 18, 30], icbmDelta: +10 }
        ]
    },
    {
        category: "WOJNA CYBERNETYCZNA // C4ISR",
        text: "[DEPESZA #05] WYKRYTO ZŁOŚLIWY KOD W SIECI LOGISTYCZNEJ BAZY MALMSTROM AFB. PEKIN I MOSKWA ZAPRZECZAJĄ UDZIAŁOWI PAŃSTWOWYCH GRUP APT.",
        options: [
            { label: "A) Odizoluj serwery lokalne i przeprowadź cichy audyt NSA", delta: -6, slidersDelta: [-10, -5, -8, -5, -5], icbmDelta: 0 },
            { label: "B) Przełącz łączność silosów na awaryjną sieć satelitarną MILSTAR", delta: +9, slidersDelta: [18, 8, 10, 8, 12], icbmDelta: 0 },
            { label: "C) Uruchom odwetowe uderzenie USCYBERCOM na węzły energetyczne", delta: +24, slidersDelta: [35, 18, 28, 20, 22], icbmDelta: 0 }
        ]
    },
    {
        category: "PRZESTRZEŃ KOSMICZNA // ASAT",
        text: "[DEPESZA #06] ROSYJSKI SATELITAINSPEKTOR „KOSMOS-2558” ZBLIŻYŁ SIĘ NA ODLEGŁOŚĆ 4 KM DO AMERYKAŃSKIEGO SATELITY WCZESNEGO OSTRZEGANIA SBIRS-GEO-4.",
        options: [
            { label: "A) Wykonaj manewr korekty orbity satelity SBIRS (Unik taktyczny)", delta: -7, slidersDelta: [-5, -5, -8, -12, -6], icbmDelta: 0 },
            { label: "B) Wyślij oficjalne ultimatum przez kanał MOLINK i oślep czujniki obiektu", delta: +14, slidersDelta: [12, 10, 18, 22, 14], icbmDelta: 0 },
            { label: "C) Autoryzuj gotowość pocisku antysatelitarnego SM-3 Block IIA", delta: +26, slidersDelta: [20, 22, 28, 35, 28], icbmDelta: +15 }
        ]
    },
    {
        category: "TELEMETRIA BALISTYCZNA // PACYFIK",
        text: "[DEPESZA #07] RADAR COBRA DANE NA ALEUTACH ŚLEDZI NIEZAPOWIEDZIANY OBIEKT HIPERSONICZNY (MACH 18) LECĄCY Z KIERUNKU KAMCZATKI W STRONĘ PACYFIKU.",
        options: [
            { label: "A) Potwierdź trajektorię — obiekt spada do strefy poligonowej Kura", delta: -14, slidersDelta: [-10, -10, -12, -18, -15], icbmDelta: -25 },
            { label: "B) Aktywuj dywizjon wyrzutni GBI w Fort Greely na Alasce", delta: +16, slidersDelta: [10, 18, 15, 25, 22], icbmDelta: +30 },
            { label: "C) Uznaj start za próbę dekapitacji — wystrzel pocisk ostrzegawczy", delta: +35, slidersDelta: [25, 30, 35, 40, 45], icbmDelta: +75, spawnHostile: 1 }
        ]
    },
    {
        category: "MARYNARKA WOJENNA // GIUK GAP",
        text: "[DEPESZA #08] TRZY WIELOZADANIOWE OKRĘTY PODWODNE PROJEKTU 885 „JASIEŃ-M” PRZancowały RUBIEŻ GIUK (GRENLANDIA-ISLANDIA-UK) Z PEŁNYM UZBROJENIEM KALIBR/CYRKON.",
        options: [
            { label: "A) Śledź jednostki pasywnie za pomocą sieci hydrofonów SOSUS", delta: -5, slidersDelta: [-4, -6, -6, -4, -5], icbmDelta: 0 },
            { label: "B) Rozmieść grupę uderzeniową lotniskowca USS Gerald R. Ford", delta: +12, slidersDelta: [8, 22, 14, 10, 15], icbmDelta: 0 },
            { label: "C) Zezwól okrętom SSN typu Virginia na agresywne namierzanie aktywne", delta: +21, slidersDelta: [12, 30, 24, 18, 25], icbmDelta: 0 }
        ]
    },
    {
        category: "LOTNICTWO STRATEGICZNE // ARKTYKA",
        text: "[DEPESZA #09] FORMACJA 8 BOMBOWCÓW TU-95MS ORAZ TU-160 WYKONUJE SYMULOWANEODEJŚCIE DO ODPALENIA POCISKÓW MANEWRUJĄCYCH CH-101 W ODLEGŁOŚCI 300 MIL OD ALASKI.",
        options: [
            { label: "A) Eskortuj formację parą F-22A Raptor bez włączania radarów kierowania ogniem", delta: -8, slidersDelta: [-6, -10, -8, -8, -8], icbmDelta: 0 },
            { label: "B) Opromieniuj formację wiązką celowniczą i zażądaj natychmiastowego zwrotu", delta: +13, slidersDelta: [8, 18, 16, 15, 14], icbmDelta: 0 },
            { label: "C) Poderwij w powietrze całą flotę bombowców B-52H z bazy Minot AFB", delta: +25, slidersDelta: [15, 28, 26, 22, 32], icbmDelta: +10 }
        ]
    },
    {
        category: "KRYZYS DYPLOMATYCZNY // ONZ",
        text: "[DEPESZA #10] PERSONEL DYPLOMATYCZNY AMBASAD PAŃSTW WSCHODNICH W WASZYNGTONIE I LONDYNIE OTRZYMAŁ ROZKAZ EWAKUACJI W CIĄGU 12 GODZIN.",
        options: [
            { label: "A) Zaproponuj natychmiastowe spotkanie szefów sztabów w Genewie", delta: -15, slidersDelta: [-12, -15, -22, -10, -15], icbmDelta: 0 },
            { label: "B) Wprowadź stan podwyższonej gotowości w bazach NATO w Europie", delta: +14, slidersDelta: [10, 18, 20, 12, 16], icbmDelta: 0 },
            { label: "C) Ewakuuj kierownictwo państwa do bunkra Mount Weather i Raven Rock", delta: +28, slidersDelta: [22, 26, 35, 25, 32], icbmDelta: +15 }
        ]
    },
    {
        category: "ŁĄCZNOŚĆ STRATEGICZNA // TACAMO",
        text: "[DEPESZA #11] SAMOLOT RETRANSMISYJNY E-6B MERCURY ZGŁASZA SILNE ZAKŁÓCENIA ELEKTROMAGNETYCZNE NA CZĘSTOTLIWOŚCIACH VLF SŁUŻĄCYCH DO KOMUNIKACJI Z OKRĘTAMI SSBN.",
        options: [
            { label: "A) Przełącz transmisję na zapasowe nadajniki naziemne w Cutler i Jim Creek", delta: -6, slidersDelta: [-8, -6, -6, -8, -6], icbmDelta: 0 },
            { label: "B) Wyślij kolejne 3 samoloty E-6B z rozwiniętymi antenami holowanymi", delta: +11, slidersDelta: [14, 10, 12, 15, 16], icbmDelta: 0 },
            { label: "C) Nadaj dla okrętów SSBN sygnał przejścia na autonomię bojową", delta: +27, slidersDelta: [20, 24, 26, 28, 38], icbmDelta: +20 }
        ]
    },
    {
        category: "ALARM BALISTYCZNY // MORZE BARENTSA",
        text: "[DEPESZA #12] SATELITA SBIRS WYKRYŁ DWA PIÓROPUSZE CIEPLNE NAD MORZEM BARENTSA! DOWÓDZTWO PÓŁNOCNE TWIERDZI, ŻE TO PLANOWE ĆWICZENIA RAKIET „SINIEWA”, LECZ BRAK NOTAM.",
        options: [
            { label: "A) Poczekaj 90 sekund na obliczenie apogeum przez komputery Cheyenne Mountain", delta: -12, slidersDelta: [-8, -10, -10, -15, -12], icbmDelta: -20 },
            { label: "B) Ogłoś alarm przeciwlotniczy dla baz w Grenlandii i Wielkiej Brytanii", delta: +18, slidersDelta: [12, 18, 20, 25, 25], icbmDelta: +35 },
            { label: "C) Potraktuj odpalenie jako uderzenie wyprzedzające SLBM — odblokuj SIOP!", delta: +38, slidersDelta: [30, 35, 38, 45, 50], icbmDelta: +85, spawnHostile: 2 }
        ]
    },
    {
        category: "INFRASTRUKTURA KRYTYCZNA // ATLANTYK",
        text: "[DEPESZA #13] PRZECIĘTO TRZY GŁÓWNE TRANSATLANTYCKIE KABLE ŚWIATŁOWODOWE ŁĄCZĄCE USA Z DOWÓDZTWEM EUCOM W STUTTGARCIE. W REJONIE WYKRYTO STATEK BADAWCZY „JANTAR”.",
        options: [
            { label: "A) Przekieruj ruch sztabowy na konstelację satelitarną Starshield", delta: -5, slidersDelta: [-6, -5, -5, -4, -5], icbmDelta: 0 },
            { label: "B) Wyślij niszczyciele typu Arleigh Burke w celu inspekcji i blokady jednostki", delta: +13, slidersDelta: [18, 16, 15, 10, 12], icbmDelta: 0 },
            { label: "C) Zablokuj cieśniny duńskie i Bosfor dla okrętów pomocniczych rywala", delta: +23, slidersDelta: [25, 28, 26, 18, 20], icbmDelta: 0 }
        ]
    },
    {
        category: "WYWIAD ELEKTRONICZNY // URAL",
        text: "[DEPESZA #14] NASŁUCH NSA WYKRYŁ AKTYWACJĘ AUTOMATYCZNEGO SYSTEMU DOWODZENIA „PERIMETR” (MARTWA RĘKA) WTRYBIE PRZEDBOJOWYM W BUNKierZE POD GÓRĄ JAMANTAU.",
        options: [
            { label: "A) Prześlij bezpośrednie zapewnienie o braku intencji pierwszego uderzenia", delta: -16, slidersDelta: [-12, -14, -20, -15, -18], icbmDelta: -20 },
            { label: "B) Rozprosz mobilne centra dowodzenia i samoloty E-4B Nightwatch", delta: +15, slidersDelta: [12, 14, 16, 18, 24], icbmDelta: +10 },
            { label: "C) Wyceluj głowice W88 pocisków Trident D5 w węzły łączności Jamantau", delta: +29, slidersDelta: [20, 25, 30, 30, 40], icbmDelta: +30 }
        ]
    },
    {
        category: "RADAR ZAHORYZONTALNY // PÓŁWYSEP KOLSKI",
        text: "[DEPESZA #15] STACJA RADAROWA „WORONEŻ-DM” W OLENIEGORSKU ROZPOCZĘŁA PRACĘ Z MAKSYMALNĄ MOCĄ IMPULSOWĄ, ZAKŁÓCAJĄC SYSTEMY NAWIGACYJNE W PÓŁNOCNEJ SKANDYNAWII.",
        options: [
            { label: "A) Złóż protest przez Komisję Konsultacyjną i skoryguj filtry GPS", delta: -7, slidersDelta: [-5, -6, -8, -10, -5], icbmDelta: 0 },
            { label: "B) Przebazuj samoloty walki elektronicznej EA-18G Growler do Norwegii", delta: +11, slidersDelta: [14, 14, 12, 16, 10], icbmDelta: 0 },
            { label: "C) Przeprowadź cybernetyczne przeciążenie podstacji zasilających radar", delta: +22, slidersDelta: [30, 18, 22, 28, 20], icbmDelta: 0 }
        ]
    },
    {
        category: "KONTROLA ZBROJEŃ // INSPEKCJA START",
        text: "[DEPESZA #16] ZDJĘCIA SATELITARNE BAZY DOMBAROWSKIJ POKAZUJĄ ODSUNIĘTE POKRYWY 6 SILOSÓW RAKIET RS-28 SARMAT POZA HARMONOGRAMEM PRZEGLĄDÓW TECHNICZNYCH.",
        options: [
            { label: "A) Zażądaj wyjaśnień technicznych w ramach procedury wymiany telemetrii", delta: -9, slidersDelta: [-6, -8, -12, -8, -12], icbmDelta: -10 },
            { label: "B) Otwórz pokrywy treningowe w 10 silosach Minuteman III w Dakocie Północnej", delta: +15, slidersDelta: [10, 14, 18, 16, 25], icbmDelta: +15 },
            { label: "C) Wprowadź gotowość T-0 dla wszystkich trzech skrzydeł ICBM USA", delta: +28, slidersDelta: [18, 24, 28, 30, 42], icbmDelta: +35 }
        ]
    },
    {
        category: "OBRONA POWIETRZNA // KARAIBY",
        text: "[DEPESZA #17] DWA OKRĘTY FREGATY Z HIPERSONICZNYMI POCISKAMI „CYRKON” ZAWINĘŁY DO PORTU W HAWANIE. ODLEGŁOŚĆ DO BAZY PODWODNEJ KINGS BAY WYNOSI PONIŻEJ 900 KM.",
        options: [
            { label: "A) Monitoruj wizytę za pomocą lotnictwa morskiego bez blokady morskiej", delta: -8, slidersDelta: [-5, -10, -10, -6, -8], icbmDelta: 0 },
            { label: "B) Rozmieść baterie Patriot PAC-3 MSE oraz THAAD na Florydzie", delta: +12, slidersDelta: [8, 18, 15, 12, 14], icbmDelta: 0 },
            { label: "C) Ogłoś kwarantannę morską wokół archipelagu i wyślij okręty podwodne SSN", delta: +26, slidersDelta: [16, 32, 30, 20, 28], icbmDelta: +10 }
        ]
    },
    {
        category: "INCYDENT JĄDROWY // DALEKI WSCHÓD",
        text: "[DEPESZA #18] WCZESNE OSTRZEGANIE WYKRYŁO START RAKIETY BALISTYCZNEJ Z PÓŁWYSPU KOREAŃSKIEGO. TRAJEKTORIA PRZEBIEGA PONAD JAPONIĄ W KIERUNKU GUAM.",
        options: [
            { label: "A) Oblicz punkt wodowania w Pacyfiku i powiadom Tokio oraz Pekin", delta: -11, slidersDelta: [-6, -10, -12, -14, -10], icbmDelta: -15 },
            { label: "B) Przechwyć cel za pomocą krążownika Aegis USS Shiloh (SM-3)", delta: +14, slidersDelta: [8, 18, 14, 20, 18], icbmDelta: +25 },
            { label: "C) Postaw siły strategiczne USINDOPACOM i bombowce na Guam w stan alarmu", delta: +27, slidersDelta: [18, 28, 26, 30, 35], icbmDelta: +45, spawnHostile: 1 }
        ]
    },
    {
        category: "BEZPIECZEŃSTWO WEWNĘTRZNE // CHEYENNE",
        text: "[DEPESZA #19] WYKRYTO PRÓBĘ FIZYCZNEJ INFILTRACJI WĘZŁA ŚWIATŁOWODOWEGO W POBLIŻU BAZY PETERSON SFB W KOLORADO PRZEZ NIEZIDENTYFIKOWANĄ GRUPĘ DYWERSYJNĄ.",
        options: [
            { label: "A) Zatrzymaj podejrzanych siłami FBI i Żandarmerii Sił Kosmicznych", delta: -6, slidersDelta: [-8, -6, -6, -5, -5], icbmDelta: 0 },
            { label: "B) Zamknij grodzie przeciwwybuchowe kompleksu Cheyenne Mountain", delta: +13, slidersDelta: [16, 15, 12, 14, 15], icbmDelta: 0 },
            { label: "C) Przekaż dowodzenie operacyjne na pokład powietrznego stanowiska E-4B", delta: +24, slidersDelta: [24, 22, 24, 22, 30], icbmDelta: +10 }
        ]
    },
    {
        category: "MOBILNE WYRZUTNIE // TAJGA",
        text: "[DEPESZA #20] SATELITY RADAROWE SAR WYKRYŁY WYJŚCIE 27 MOBILNYCH WYRZUTNI RS-24 „JARS” Z GARAŻY W REJONIE TEJKOWA I IWANOWA NA POZYCJE POLOWE W LASACH.",
        options: [
            { label: "A) Zażądaj potwierdzenia harmonogramu ćwiczeń na linii MOLINK", delta: -10, slidersDelta: [-6, -12, -12, -8, -12], icbmDelta: 0 },
            { label: "B) Wyślij w rejon Morza Norweskiego okręty podwodne z pociskami Tomahawk", delta: +14, slidersDelta: [10, 18, 16, 14, 20], icbmDelta: 0 },
            { label: "C) Rozpocznij procedurę odbezpieczania kodów SAS i podnieś gotowość ICBM", delta: +27, slidersDelta: [18, 26, 28, 26, 38], icbmDelta: +25 }
        ]
    },
    {
        category: "ZAKŁÓCENIA SATELITARNE // GPS / GLONASS",
        text: "[DEPESZA #21] MASOWY SPOOFING SYGNAŁU GPS NAD BAŁTYKIEM I MORZEM CZARNYM POWODUJE BŁĘDY NAWIGACJI SAMOLOTÓW ZWIADOWCZYCH RC-135V RIVET JOINT.",
        options: [
            { label: "A) Przełącz samoloty na nawigację inercyjną INS i gwiezdną", delta: -7, slidersDelta: [-8, -6, -8, -8, -5], icbmDelta: 0 },
            { label: "B) Uruchom kierunkowe zagłuszanie pasma L systemu GLONASS w sektorze", delta: +12, slidersDelta: [18, 12, 14, 16, 10], icbmDelta: 0 },
            { label: "C) Wyślij myśliwce F-35A do demonstracyjnego przelotu wzdłuż granicy", delta: +21, slidersDelta: [20, 26, 22, 20, 18], icbmDelta: 0 }
        ]
    },
    {
        category: "IMPUlS ELEKTROMAGNETYCZNY // ORBITA",
        text: "[DEPESZA #22] CZUJNIKI NUDET (NUCLEAR DETONATION DETECTION SYSTEM) ZGŁASZAJĄ KRÓTKI BŁYSK GAMMA NA WYSOKOŚCI 380 KM NAD OCEANEM INDYJSKIM.",
        options: [
            { label: "A) Zweryfikuj odczyt z danymi obserwatoriów astrofizycznych (Rozbłysk gamma)", delta: -16, slidersDelta: [-12, -12, -15, -24, -18], icbmDelta: -30 },
            { label: "B) Przełącz satelity wojskowe w tryb ochrony radiacyjnej (Hardened Mode)", delta: +15, slidersDelta: [15, 14, 16, 25, 20], icbmDelta: +15 },
            { label: "C) Zakwalifikuj zjawisko jako próbny atak HEMP — ogłoś alarm strategiczny!", delta: +32, slidersDelta: [28, 28, 32, 38, 40], icbmDelta: +60 }
        ]
    },
    {
        category: "DEESKALACJA // TRAKTAT ROZBROJENIOWY",
        text: "[DEPESZA #23] KREML I PEKIN PROPONUJĄ PRZEZ MOLINK NATYCHMIASTOWE WSTRZYMANIE LOTÓW PATROLOWYCH BOMBOWCÓW ORAZ WZNOWIENIE GORĄCYCH INSPEKCJI SILOSÓW.",
        options: [
            { label: "A) Przyjmij propozycję i podpisz protokół deeskalacji (Głęboka odwilż)", delta: -25, slidersDelta: [-25, -30, -30, -25, -30], icbmDelta: -100 },
            { label: "B) Zgódź się warunkowo — utrzymaj podwyższony dozór satelitarny SBIRS", delta: -10, slidersDelta: [-10, -12, -14, -5, -10], icbmDelta: -30 },
            { label: "C) Odrzuć propozycję jako fortel dezinformacyjny (Maskirowka)", delta: +18, slidersDelta: [14, 18, 24, 16, 20], icbmDelta: 0 }
        ]
    },
    {
        category: "KRYZYS OSTATECZNY // ROZKAZ PREZYDENCKI",
        text: "[DEPESZA #24] RADARY BMEWS W THULE I FYLINGDALES POTWIERDZAJĄ ODPALENIE WIELU GŁOWIC MIRV Z REJONU KOZIELSKA I UŻURU! CZAS DOLOTU DO WASZYNGTONU: 26 MINUT.",
        options: [
            { label: "A) Żądaj natychmiastowego potwierdzenia z Kremla (Ostatnia szansa)", delta: +10, slidersDelta: [10, 10, 15, 20, 20], icbmDelta: +50 },
            { label: "B) Odpal przeciwrakiety GBI i ewakuuj sztab do bunkra Cheyenne", delta: +25, slidersDelta: [25, 30, 30, 35, 35], icbmDelta: +85, spawnHostile: 2 },
            { label: "C) Autoryzuj natychmiastowe uderzenie odwetowe USA (Launch on Warning)!", delta: +45, slidersDelta: [40, 40, 45, 50, 50], icbmDelta: +100, spawnHostile: 3, spawnUS: 3 }
        ]
    }
];

window.RANDOM_INCIDENTS = [
    {
        title: "Fałszywe echo radarowe BMEWS nad Morzem Norweskim",
        category: "ANOMALIA RADAROWA",
        severity: "warn",
        logMessage: "INCYDENT LOSOWY: Stacja BMEWS RAF Fylingdales zarejestrowała odbicie od zorzy polarnej przypominające trajektorię SLBM.",
        sliders: [20, 30, 35, 70, 45, 35],
        clearMissiles: false
    },
    {
        title: "Kolizja atomowych okrętów podwodnych pod lodem Arktyki",
        category: "FLOTA PODWODNA",
        severity: "crit",
        logMessage: "INCYDENT LOSOWY: Amerykański okręt SSN typu Virginia zderzył się w zanurzeniu z jednostką projektu 955 Borej pod czapą polarną!",
        sliders: [35, 75, 80, 60, 85, 20],
        clearMissiles: false
    },
    {
        title: "Niezapowiedziany test hipersonicznego szybowca Awangard",
        category: "BROŃ HIPERSONICZNA",
        severity: "crit",
        logMessage: "INCYDENT LOSOWY: Z bazy Dombarowskij wystrzelono rakietę z manewrującą głowicą hipersoniczną! Radar BMEWS śledzi obiekt w locie!",
        sliders: [50, 70, 75, 90, 90, 80],
        hostileMissiles: 1
    },
    {
        title: "Zmasowany cyberatak DDoS i sabotaż sieci energetycznej Wschodniego Wybrzeża",
        category: "CYBERWOJNA",
        severity: "warn",
        logMessage: "INCYDENT LOSOWY: Grupa APT sparaliżowała systemy sterowania SCADA w 14 stanach USA. USCYBERCOM wprowadza stan alarmowy.",
        sliders: [98, 45, 70, 50, 45, 0],
        clearMissiles: false
    },
    {
        title: "Porozumienie genewskie o wycofaniu wojsk z rejonów przygranicznych",
        category: "DYPLOMACJA",
        severity: "ok",
        logMessage: "INCYDENT LOSOWY: Szefowie sztabów USA i państw rywalizujących podpisali w Genewie protokół o redukcji gotowości bojowej.",
        sliders: [8, 10, 12, 5, 8, 0],
        clearMissiles: true
    },
    {
        title: "Utrata kontaktu z satelitą wczesnego ostrzegania SBIRS-GEO-2",
        category: "OBRONA KOSMICZNA",
        severity: "crit",
        logMessage: "INCYDENT LOSOWY: Satelita SBIRS-GEO-2 przestał nadawać telemetrię po przelocie nad mobilnym kompleksem laserowym Pierieswiet.",
        sliders: [65, 55, 75, 95, 70, 25],
        clearMissiles: false
    },
    {
        title: "Przechwycenie formacji 6 bombowców Tu-160 nad Cieśniną Beringa",
        category: "OBRONA POWIETRZNA",
        severity: "warn",
        logMessage: "INCYDENT LOSOWY: Myśliwce F-22A Raptor z bazy Elmendorf przechwyciły ciężkie bombowce strategiczne z podwieszonymi rakietami Ch-102.",
        sliders: [30, 72, 60, 55, 65, 0],
        clearMissiles: false
    },
    {
        title: "Awaria zasilania i błąd oprogramowania w terminalu łączności WAM",
        category: "AWARIA SYSTEMU",
        severity: "warn",
        logMessage: "INCYDENT LOSOWY: Krótkotrwałe zakłócenie synchronizacji zegarów atomowych w Cheyenne Mountain wywołało alarm diagnostyczny.",
        sliders: [55, 25, 30, 60, 35, 15],
        clearMissiles: false
    },
    {
        title: "Wykrycie startu rakiety balistycznej z okrętu podwodnego na Pacyfiku",
        category: "ALARM BALISTYCZNY",
        severity: "crit",
        logMessage: "INCYDENT LOSOWY: Satelity podczerwieni wykryły odpalenie pocisku SLBM Buława z rejonu Kamczatki! Głowica w powietrzu!",
        sliders: [75, 80, 85, 95, 95, 90],
        hostileMissiles: 1,
        triggerSkyking: true
    },
    {
        title: "Udana inspekcja wzajemna głowic jądrowych w ramach traktatu START",
        category: "KONTROLA ZBROJEŃ",
        severity: "ok",
        logMessage: "INCYDENT LOSOWY: Zespoły inspektorów potwierdziły zgodność liczby rozbrojonych głowic w bazach Minot oraz Kozielsk.",
        sliders: [10, 12, 10, 8, 10, 0],
        clearMissiles: true
    },
    {
        title: "Wyjście całej Floty Północnej i Pacyficznej na pozycje bojowe",
        category: "RUCHY FLOTY",
        severity: "crit",
        logMessage: "INCYDENT LOSOWY: Wszystkie zdolne do żeglugi okręty podwodne SSBN opuściły bazy w Gadżyjewie i Wiliuczyńsku w ciągu 4 godzin.",
        sliders: [50, 85, 80, 65, 90, 15],
        clearMissiles: false
    },
    {
        title: "Nieautoryzowany przelot bezzałogowca rozpoznawczego nad poligonem w Nevadzie",
        category: "WYWIAD",
        severity: "warn",
        logMessage: "INCYDENT LOSOWY: Systemy OPL wykryły stratosferyczny aparat rozpoznawczy na wysokości 24 km nad strefą zamkniętą w Nevadzie.",
        sliders: [40, 50, 55, 60, 40, 0],
        clearMissiles: false
    },
    {
        title: "Skoordynowana salwa pocisków ICBM wykryta przez stację Pituffik (Thule)",
        category: "ATAK STRATEGICZNY",
        severity: "crit",
        logMessage: "INCYDENT LOSOWY: ALARM COCKED PISTOL! Radar BMEWS śledzi 3 wielogłowicowe pociski ICBM przekraczające koło podbiegunowe!",
        sliders: [92, 95, 98, 100, 100, 100],
        hostileMissiles: 3,
        triggerSkyking: true
    },
    {
        title: "Podziemny test ładunku termojądrowego na poligonie Lop Nor",
        category: "PROLIFERACJA",
        severity: "warn",
        logMessage: "INCYDENT LOSOWY: Czujniki sejsmiczne USGS odnotowały wstrząs o charakterystyce sztucznej eksplozji jądrowej o mocy ~150 kt.",
        sliders: [35, 55, 75, 65, 70, 0],
        clearMissiles: false
    },
    {
        title: "Przerwanie blokady morskiej i wycofanie grup uderzeniowych na Atlantyku",
        category: "DEESKALACJA",
        severity: "ok",
        logMessage: "INCYDENT LOSOWY: Okręty nawodne i podwodne obu stron otrzymały rozkaz powrotu do macierzystych portów.",
        sliders: [15, 18, 20, 10, 15, 0],
        clearMissiles: true
    },
    {
        title: "Aktywacja stacji zagłuszania łączności satelitarnej „Tirada-2”",
        category: "WALKA ELEKTRONICZNA",
        severity: "warn",
        logMessage: "INCYDENT LOSOWY: Silne zakłócenia mikrofalowe utrudniają transmisję danych z satelitów rozpoznawczych nad Europą Wschodnią.",
        sliders: [80, 50, 65, 75, 50, 0],
        clearMissiles: false
    },
    {
        title: "Ćwiczebny start pocisku Minuteman III z bazy Vandenberg SFB",
        category: "DEMONSTRACJA SIŁY",
        severity: "warn",
        logMessage: "INCYDENT LOSOWY: Siły Kosmiczne USA przeprowadziły demonstracyjny start nieuzbrojonej rakiety Minuteman III w kierunku atolu Kwajalein.",
        sliders: [25, 45, 50, 45, 65, 45],
        usMissiles: 1
    },
    {
        title: "Wykrycie pocisku o napędzie jądrowym 9M730 Buriewiestnik nad Arktyką",
        category: "ANOMALIA RADIACYJNA",
        severity: "crit",
        logMessage: "INCYDENT LOSOWY: Samolot WC-135 Constant Phoenix wykrył ślady izotopów promieniotwórczych i ślad termiczny nisko lecącego pocisku.",
        sliders: [45, 65, 75, 85, 80, 40],
        clearMissiles: false
    },
    {
        title: "Ewakuacja sztabu dowodzenia na pokład samolotów E-4B Nightwatch",
        category: "GOTOWOŚĆ SZTABOWA",
        severity: "crit",
        logMessage: "INCYDENT LOSOWY: Narodowe Centrum Dowodzenia Wojskowego (NMCC) przeniesione w powietrze. Nadano komunikat SKYKING.",
        sliders: [60, 75, 80, 70, 88, 25],
        triggerSkyking: true
    },
    {
        title: "Sabotaż rurociągu paliwowego zaopatrującego bazę lotniczą Ramstein",
        category: "DYWERSJA",
        severity: "warn",
        logMessage: "INCYDENT LOSOWY: Wybuch na magistrali paliwowej NATO w Europie Zachodniej. Wprowadzono stan zagrożenia terrorystycznego FPCON CHARLIE.",
        sliders: [60, 68, 65, 40, 45, 0],
        clearMissiles: false
    },
    {
        title: "Zestrzelenie nieaktywnego satelity na niskiej orbicie (LEO) pociskiem ASAT",
        category: "KRYZYS KOSMICZNY",
        severity: "crit",
        logMessage: "INCYDENT LOSOWY: Chmura ponad 1500 odłamków orbitalnych zagraża stacji ISS oraz satelitom rozpoznania optycznego.",
        sliders: [55, 60, 82, 92, 70, 30],
        clearMissiles: false
    },
    {
        title: "Bunt dowódcy okrętu podwodnego — nieautoryzowane otwarcie luków SLBM",
        category: "ZAGROŻENIE KRYTYCZNE",
        severity: "crit",
        logMessage: "INCYDENT LOSOWY: Wywiad morski ONI donosi o utracie kontroli sztabowej nad jednym z okrętów podwodnych na Morzu Ochockim! Wykryto start rakiety!",
        sliders: [70, 85, 90, 95, 95, 95],
        hostileMissiles: 2,
        triggerSkyking: true
    },
    {
        title: "Gorąca linia: wspólne ćwiczenia ratownicze okrętów podwodnych NATO-Wschód",
        category: "WSPÓŁPRACA MORSKA",
        severity: "ok",
        logMessage: "INCYDENT LOSOWY: Jednostki ratownicze przeprowadziły wspólną symulację ewakuacji załogi z dna Morza Barentsa.",
        sliders: [5, 10, 8, 5, 5, 0],
        clearMissiles: true
    },
    {
        title: "Wykrycie pociągu rakietowego „Barguzin” na magistrali transsyberyjskiej",
        category: "WYWIAD SATELITARNY",
        severity: "warn",
        logMessage: "INCYDENT LOSOWY: Analitycy NGA zidentyfikowali zamaskowany skład kolejowy przenoszący 6 pocisków międzykontynentalnych.",
        sliders: [30, 55, 60, 65, 78, 0],
        clearMissiles: false
    },
    {
        title: "Symulowany kontratak sił strategicznych USA (Ćwiczenia Global Thunder)",
        category: "MANEWRY STRATEGICZNE",
        severity: "warn",
        logMessage: "INCYDENT LOSOWY: Rozpoczęto doroczne manewry USSTRATCOM 'Global Thunder' z udziałem bombowców B-52H, B-2A i okrętów SSBN.",
        sliders: [40, 65, 55, 50, 75, 35],
        usMissiles: 1
    }
];
