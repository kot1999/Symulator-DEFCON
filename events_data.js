/* ============================================================================
   BAZA DANYCH DEPESZ GORĄCEJ LINII (MOLINK) ORAZ ZDARZEŃ LOSOWYCH STRATCOM
   Plik: events_data.js (wczytywany z głównego folderu przez index.html)
   ============================================================================ */

window.MOLINK_DILEMMAS = [
    {
        id: "DEP-01",
        text: "[DEPESZA #01] WYKRYTO ANOMALIĘ TERMICZNĄ NA SYBERII. MOSKWA TWIERDZI, ŻE TO POŻAR GAZOCIĄGU, LECZ WIDMO IR PRZYPOMINA TEST SILNIKA RAKIETOWEGO.",
        options: [
            { label: "A) Przyjmij wyjaśnienie i wyślij satelitę optycznego (Deeskalacja)", delta: -12, icbmDelta: 0 },
            { label: "B) Podnieś gotowość radarów BMEWS i żądaj inspekcji (Proporcjonalnie)", delta: +8, icbmDelta: 0 },
            { label: "C) Ogłoś alarm dla dywizjonów Minuteman III (Eskalacja)", delta: +22, icbmDelta: 0 }
        ]
    },
    {
        id: "DEP-02",
        text: "[DEPESZA #02] UTRACONO ŁĄCZNOŚĆ VLF Z OKRĘTEM PODWODNYM USS OHIO NA PACYFIKU W POBLIŻU STREFY PATROLOWEJ PRZECIWNIKA.",
        options: [
            { label: "A) Przekaż komunikat o awarii radioboju przez MOLINK (Deeskalacja)", delta: -10, icbmDelta: 0 },
            { label: "B) Wyślij samoloty ZOP P-8 Poseidon w rejon ostatniego kontaktu", delta: +10, icbmDelta: 0 },
            { label: "C) Odblokuj procedurę bojową dla reszty floty SSBN (Eskalacja)", delta: +25, icbmDelta: 0 }
        ]
    },
    {
        id: "DEP-03",
        text: "[DEPESZA #03] SYSTEM NORAD ZGŁASZA 12 NADLATUJĄCYCH OBIEKTÓW Z KIERUNKU BIEGUNA PÓŁNOCNEGO. RADARY ZAHORYZONTALNE NIE POTWIERDZAJĄ ECHA.",
        options: [
            { label: "A) Zweryfikuj taśmy symulacyjne komputerów NORAD (Błąd systemu)", delta: -18, icbmDelta: -40 },
            { label: "B) Poderwij dyżurne myśliwce i samolot E-4B Nightwatch", delta: +14, icbmDelta: +25 },
            { label: "C) Uznaj odczyt za prawdziwy start ICBM i przekaż Nuclear Football", delta: +30, icbmDelta: +70 }
        ]
    },
    {
        id: "DEP-04",
        text: "[DEPESZA #04] WYKRYTO PODZIEMNY WSTRZĄS SEJSMICZNY 5.8 MAGNITUDO W REJONIE POLIGONU NOWA ZIEMIA / LOP NOR.",
        options: [
            { label: "A) Przeprowadź analizę izotopową przez stacje CTBTO (Deeskalacja)", delta: -8, icbmDelta: 0 },
            { label: "B) Wezwij ambasadora i wprowadź sankcje technologiczne", delta: +9, icbmDelta: 0 },
            { label: "C) Rozmieść bombowce B-2 Spirit w bazach wysuniętych (Eskalacja)", delta: +20, icbmDelta: 0 }
        ]
    },
    {
        id: "DEP-05",
        text: "[DEPESZA #05] ROSYJSKI SATELITA INSPEKCYJNY KOSMOS-2558 ZBLIŻYŁ SIĘ NA 15 KM DO AMERYKAŃSKIEGO SATELITY ZWIADOWCZEGO KH-11 KENNAN.",
        options: [
            { label: "A) Wykonaj manewr korekty orbity satelity KH-11 (Ostrożnie)", delta: -6, icbmDelta: 0 },
            { label: "B) Wyślij oficjalne ostrzeżenie przez kanał Space Force", delta: +10, icbmDelta: 0 },
            { label: "C) Aktywuj naziemne systemy zakłócania satelitarnego Counter-Space", delta: +24, icbmDelta: 0 }
        ]
    },
    {
        id: "DEP-06",
        text: "[DEPESZA #06] PRZERWANO DWA TRANSATLANTYCKIE KABLE ŚWIATŁOWODOWE ORAZ LINIĘ ZASILANIA SYSTEMU NASŁUCHU PODWODNEGO SOSUS W REJONIE GIUK.",
        options: [
            { label: "A) Przekieruj ruch sztabowy na satelity MILSTAR (Defensywnie)", delta: -5, icbmDelta: 0 },
            { label: "B) Wyślij grupę uderzeniową niszczycieli ZOP na Północny Atlantyk", delta: +14, icbmDelta: 0 },
            { label: "C) Ogłoś blokadę morską dla jednostek badawczych przeciwnika", delta: +26, icbmDelta: 0 }
        ]
    },
    {
        id: "DEP-07",
        text: "[DEPESZA #07] NIEZAPOWIEDZIANY TEST SZYBOWCA HIPERSONICZNEGO AWANGARD / DF-ZF PO ORBICIE CZĘŚCIOWEJ (FOBS). TOR LOTU PRZEBIEGA NAD ALASKĄ.",
        options: [
            { label: "A) Przyjmij spóźnioną notę NOTAM i monitoruj trajektorię", delta: -8, icbmDelta: -20 },
            { label: "B) Postaw wyrzutnie antyrakietowe GBI w Fort Greely w stan gotowości", delta: +16, icbmDelta: +30 },
            { label: "C) Rozkaż przechwycenie obiektu pociskiem SM-3 Block IIA (Eskalacja)", delta: +32, icbmDelta: +60 }
        ]
    },
    {
        id: "DEP-08",
        text: "[DEPESZA #08] MASOWY SPOOFING SYGNAŁU GPS I ZAKŁÓCANIE TRANSPONDERÓW LOTNICZYCH NAD PRZESMYKIEM SUWALSKIM I MORZEM BAŁTYCKIM.",
        options: [
            { label: "A) Przełącz jednostki NATO na nawigację inercyjną INS", delta: -6, icbmDelta: 0 },
            { label: "B) Rozmieść samoloty walki elektronicznej EA-18G Growler w Polsce", delta: +11, icbmDelta: 0 },
            { label: "C) Przeprowadź cybernetyczne uderzenie wyprzedzające na stacje WRE", delta: +23, icbmDelta: 0 }
        ]
    },
    {
        id: "DEP-09",
        text: "[DEPESZA #09] WYWIAD SYGNAŁOWY NSA PRZECHWYCIŁ TELEMETRIĘ OTWARCIA POKRYWY SILOSU R-36M2 WOJEWODA W BAZIE DOMBAROWSKIJ. DOWÓDZTWO WROGA MÓWI O ZWARCIU.",
        options: [
            { label: "A) Zaakceptuj raport techniczny i utrzymaj nadzór satelitarny", delta: -14, icbmDelta: -15 },
            { label: "B) Wyceluj dywizjon Minuteman III z Malmstrom w sektor Dombarowskij", delta: +15, icbmDelta: +20 },
            { label: "C) Przygotuj uderzenie wyprzedzające na dany silos (Krok od wojny)", delta: +35, icbmDelta: +55 }
        ]
    },
    {
        id: "DEP-10",
        text: "[DEPESZA #10] SATELITY VELA / SBIRS ZAREJESTROWAŁY PODWÓJNY BŁYSK OPTYCZNY NAD POŁUDNIOWYM OCEANEM INDYJSKIM — PODEJRZENIE PRÓBY EMP NA DUŻEJ WYSOKOŚCI.",
        options: [
            { label: "A) Wyślij samolot WC-135 Constant Phoenix do pobrania próbek powietrza", delta: -7, icbmDelta: 0 },
            { label: "B) Zwołaj nadzwyczajne posiedzenie Rady Bezpieczeństwa i NATO", delta: +10, icbmDelta: 0 },
            { label: "C) Podnieś gotowość wszystkich sił strategicznych USA do alarmu bojowego", delta: +25, icbmDelta: 0 }
        ]
    },
    {
        id: "DEP-11",
        text: "[DEPESZA #11] WYWIAD HUMINT DONOSI O NAGŁEJ EWAKUACJI WYŻSZEGO SZTABU PRZECIWNIKA DO PODZIEMNEGO KOMPLEKSU GÓRY JAMANTAU NA URALU.",
        options: [
            { label: "A) Potraktuj ruch jako doroczne ćwiczenia obrony cywilnej", delta: -10, icbmDelta: 0 },
            { label: "B) Aktywuj bunkier w Mount Weather i przebazuj personel Kongresu", delta: +14, icbmDelta: 0 },
            { label: "C) Poderwij w powietrze prezydencki samolot E-4B Nightwatch (NEACP)", delta: +28, icbmDelta: 0 }
        ]
    },
    {
        id: "DEP-12",
        text: "[DEPESZA #12] STACJE NASŁUCHOWE ODEBRAŁY SZYFROWANY KOMUNIKAT BŁYSKAWICZNY DO FLOTY PÓŁNOCNEJ W SIEWIEROMORSKU; 4 OKRĘTY SSBN KLASY BORIEJ ZANURZYŁY SIĘ ALARMOWO.",
        options: [
            { label: "A) Zażądaj wyjaśnień przez gorącą linię MOLINK", delta: -8, icbmDelta: 0 },
            { label: "B) Wyślij myśliwskie okręty podwodne klasy Virginia w ślad za nimi", delta: +12, icbmDelta: 0 },
            { label: "C) Odbezpiecz procedury startowe pocisków Trident II D5 na Atlantyku", delta: +27, icbmDelta: +15 }
        ]
    },
    {
        id: "DEP-13",
        text: "[DEPESZA #13] BATERIA S-400 TRIUMF NA KRYMIE PODŚWIETLIŁA RADAREM KIEROWANIA OGNIEM AMERYKAŃSKI BOMBOWIEC B-52H W PRZESTRZENI MIĘDZYNARODOWEJ.",
        options: [
            { label: "A) Wycofaj B-52H poza zasięg radaru i złóż protest dyplomatyczny", delta: -11, icbmDelta: 0 },
            { label: "B) Uruchom zasobniki zakłócające AN/ALQ-161 i kontynuuj lot z eskortą F-35", delta: +13, icbmDelta: 0 },
            { label: "C) Uzbrój pociski manewrujące AGM-158 JASSM przeciwko baterii radarowej", delta: +26, icbmDelta: 0 }
        ]
    },
    {
        id: "DEP-14",
        text: "[DEPESZA #14] WYKRYTO ZŁOŚLIWY KOD LOGICZNY W WĘŹLE PRZEKAŹNIKOWYM SYSTEMU ŁĄCZNOŚCI STRATEGICZNEJ SACCS W BAZIE OFFUTT.",
        options: [
            { label: "A) Odizoluj zainfekowany serwer i przejdź na obwód analogowy", delta: -9, icbmDelta: 0 },
            { label: "B) Przeprowadź pełny restart kryptograficzny sieci USSTRATCOM", delta: +9, icbmDelta: 0 },
            { label: "C) Rozkaż USCYBERCOM sparaliżowanie sieci dowodzenia przeciwnika", delta: +24, icbmDelta: 0 }
        ]
    },
    {
        id: "DEP-15",
        text: "[DEPESZA #15] EKSPERYMENTALNY POCISK Z NAPĘDEM JĄDROWYM (9M730 BURIEWIESTNIK) SPADŁ DO MORZA BARENTSA. WYKRYTO CHMURĘ IZOTOPÓW JODU-131.",
        options: [
            { label: "A) Zaoferuj pomoc techniczną i wymienij dane radiologiczne", delta: -12, icbmDelta: 0 },
            { label: "B) Ogłoś strefę zakazu żeglugi i wyślij okręty rozpoznawcze NATO", delta: +8, icbmDelta: 0 },
            { label: "C) Oskarż przeciwnika o atak radiologiczny i podnieś stan gotowości", delta: +21, icbmDelta: 0 }
        ]
    },
    {
        id: "DEP-16",
        text: "[DEPESZA #16] KOLIZJA NISZCZYCIELA MARYNARKI CHRL Z KRĄŻOWNIKIEM AEGIS USA W CIEŚNINIE TAJWAŃSKIEJ. OBIE JEDNOSTKI MAJĄ USZKODZONE KADŁUBY.",
        options: [
            { label: "A) Rozpocznij wspólną akcję ratunkową i wycisz retorykę", delta: -10, icbmDelta: 0 },
            { label: "B) Skieruj grupę lotniskowcową USS Ronald Reagan w rejon incydentu", delta: +14, icbmDelta: 0 },
            { label: "C) Przebazuj bombowce B-1B i B-52H na wyspę Guam w gotowości bojowej", delta: +25, icbmDelta: 0 }
        ]
    },
    {
        id: "DEP-17",
        text: "[DEPESZA #17] RADAR WCZESNEGO OSTRZEGANIA W PITUFFIK (THULE) NA GRENLANDII ZGŁASZA SILNE ZAKŁÓCENIA MIKROFALOWE W PASMIE UHF Z KIERUNKU ARKTYKI.",
        options: [
            { label: "A) Przełącz częstotliwość pracy radaru na pasmo rezerwowe", delta: -7, icbmDelta: 0 },
            { label: "B) Przekieruj satelity SBIRS nad sektor arktyczny", delta: +11, icbmDelta: +15 },
            { label: "C) Potraktuj oślepienie radaru jako preludium do uderzenia ICBM", delta: +29, icbmDelta: +45 }
        ]
    },
    {
        id: "DEP-18",
        text: "[DEPESZA #18] NIEZNANA STACJA NADAJĄCA Z TERENU KALININGRADU ZAGŁUSZA CZĘSTOTLIWOŚĆ ALARMOWĄ HFGCS 11175 kHz FAŁSZYWYMI KOMUNIKATAMI SKYKING.",
        options: [
            { label: "A) Przełącz łączność strategiczną na nisko-częstotliwościową sieć VLF/EHF", delta: -8, icbmDelta: 0 },
            { label: "B) Nadaj prawdziwy sygnał uwierzytelniający z pokładu E-6B Mercury", delta: +10, icbmDelta: 0 },
            { label: "C) Uznaj zagłuszanie za początek dekapitacji dowództwa i ogłoś alarm", delta: +24, icbmDelta: 0 }
        ]
    },
    {
        id: "DEP-19",
        text: "[DEPESZA #19] ZDJĘCIA SATELITARNE POTWIERDZAJĄ PRZEBAZOWANIE 18 BOMBOWCÓW TU-160 BLACKJACK NA WYSUNIĘTE LOTNISKO ARKTYCZNE ANADYR (600 KM OD ALASKI).",
        options: [
            { label: "A) Zwiększ jedynie częstotliwość patroli F-22 Raptor z bazy Elmendorf", delta: -5, icbmDelta: 0 },
            { label: "B) Rozprosz amerykańskie latające cysterny KC-135 i bombowce B-52H", delta: +13, icbmDelta: 0 },
            { label: "C) Załaduj uzbrojenie termojądrowe B61-12 i AGM-86B do komór bombowych", delta: +26, icbmDelta: 0 }
        ]
    },
    {
        id: "DEP-20",
        text: "[DEPESZA #20] SZEF SZTABU GENERALNEGO PRZECIWNIKA PROPONUJE NATYCHMIASTOWE WSTRZYMANIE MANEWRÓW STRATEGICZNYCH W ZAMIAN ZA WYCOFANIE OKRĘTÓW Z MORZA NORWESKIEGO.",
        options: [
            { label: "A) Przyjmij propozycję i podpisz protokół deeskalacyjny (Pokój)", delta: -22, icbmDelta: -100 },
            { label: "B) Zażądaj najpierw wycofania dywizjonów mobilnych Jars do garnizonów", delta: +5, icbmDelta: 0 },
            { label: "C) Odrzuć ultimatum jako próbę uśpienia czujności NORAD", delta: +19, icbmDelta: 0 }
        ]
    }
];

/* ============================================================================
   BAZA 20 SZCZEGÓŁOWYCH ZDARZEŃ LOSOWYCH (RANDOM INCIDENTS)
   sliders: [sl1(Cyber), sl2(Konwencjonalne), sl3(Dyplomacja), sl4(SBIRS), sl5(Siły Strategiczne), sl6(Wykrycie ICBM w powietrzu)]
   ============================================================================ */
window.RANDOM_INCIDENTS = [
    {
        title: "Nieautoryzowany start rakiety sondażowej z Andøya / Plesiecka",
        desc: "Radary BMEWS wykryły stromy tor balistyczny nad Morzem Norweskim. Trwa weryfikacja, czy to rakieta meteorologiczna czy pojedynczy pocisk SLBM.",
        severity: "crit",
        sliders: [35, 45, 65, 85, 70, 50],
        spawnHostile: 1,
        spawnUS: 0
    },
    {
        title: "Zmasowany atak ransomware na operatorów sieci energetycznej USA",
        desc: "Wschodnie wybrzeże USA doświadcza kaskadowych wyłączeń prądu. Bazy USSTRATCOM przeszły na zasilanie z generatorów dieslowskich.",
        severity: "warn",
        sliders: [96, 40, 75, 45, 55, 0],
        spawnHostile: 0,
        spawnUS: 0
    },
    {
        title: "Przechwycenie formacji Tu-95MS i Ił-78 w strefie ADIZ Alaski",
        desc: "Myśliwce F-22 Raptor przechwyciły 6 maszyn dalekiego zasięgu wykonujących symulowane podejście do odpalenia pocisków manewrujących Ch-101.",
        severity: "warn",
        sliders: [30, 75, 65, 55, 60, 0],
        spawnHostile: 0,
        spawnUS: 0
    },
    {
        title: "Fałszywy alarm komputerowy w Cheyenne Mountain (Błąd taśmy treningowej)",
        desc: "Na głównych ekranach NORAD pojawiła się symulacja zmasowanego uderzenia 200 głowic ICBM. Oficerowie dyżurni sprawdzają surowe dane z satelitów SBIRS.",
        severity: "crit",
        sliders: [60, 50, 70, 95, 85, 65],
        spawnHostile: 0,
        spawnUS: 0
    },
    {
        title: "Zderzenie okrętów podwodnych pod lodami Arktyki",
        desc: "Myśliwski okręt podwodny typu Seawolf otarł się o kadłub wrogiego okrętu SSBN. Obie jednostki wynurzają się w przeręblu polarnym.",
        severity: "crit",
        sliders: [45, 80, 85, 60, 82, 0],
        spawnHostile: 0,
        spawnUS: 0
    },
    {
        title: "Wykrycie testowego odpalenia pocisku RS-28 Sarmat z Plesiecka",
        desc: "Satelity SBIRS-GEO zarejestrowały pióropusz gorących gazów wylotowych i oddzielenie członów rakiety lecącej w kierunku poligonu Kura na Kamczatce.",
        severity: "crit",
        sliders: [50, 65, 78, 92, 88, 60],
        spawnHostile: 1,
        spawnUS: 0
    },
    {
        title: "Awaria łącza satelitarnego MILSTAR nad Pacyfikiem",
        desc: "Nagły rozbłysk słoneczny klasy X lub użycie broni antysatelitarnej spowodowało zanik szyfrowanej łączności z flotą SSBN na Pacyfiku.",
        severity: "warn",
        sliders: [70, 45, 55, 88, 65, 0],
        spawnHostile: 0,
        spawnUS: 0
    },
    {
        title: "Wyprowadzenie mobilnych wyrzutni RS-24 Jars w lasy syberyjskie",
        desc: "Rozpoznanie radarowe SAR potwierdza opuszczenie garnizonów przez trzy pułki rakietowe i zajęcie polowych pozycji startowych.",
        severity: "warn",
        sliders: [40, 72, 70, 68, 86, 0],
        spawnHostile: 0,
        spawnUS: 0
    },
    {
        title: "Nadzwyczajne porozumienie w Genewie o gorących liniach wojskowych",
        desc: "Szefowie połączonych sztabów uzgodnili natychmiastowe cofnięcie bombowców strategicznych i wznowienie wymiany danych telemetrycznych.",
        severity: "ok",
        sliders: [10, 12, 10, 8, 8, 0],
        spawnHostile: 0,
        spawnUS: 0
    },
    {
        title: "Incydent z dronem rozpoznawczym RQ-4 Global Hawk nad Morzem Czarnym",
        desc: "Myśliwiec przechwytujący Su-35 dokonał zrzutu paliwa i uszkodził skrzydło amerykańskiego bezzałogowca strategicznego.",
        severity: "warn",
        sliders: [35, 68, 74, 48, 40, 0],
        spawnHostile: 0,
        spawnUS: 0
    },
    {
        title: "Wykrycie niezidentyfikowanego obiektu hipersonicznego nad Biegunem Północnym",
        desc: "Stacja radarowa Clear SFS na Alasce śledzi cel poruszający się z prędkością Mach 22 na wysokości 110 km.",
        severity: "crit",
        sliders: [65, 70, 82, 96, 90, 75],
        spawnHostile: 1,
        spawnUS: 0
    },
    {
        title: "Blokada morska i ćwiczenia amfibijne w Cieśninie Tajwańskiej",
        desc: "Zgrupowanie 40 okrętów wojennych i jednostek desantowych rozpoczęło ostre strzelania artyleryjskie i rakietowe wokół wyspy.",
        severity: "warn",
        sliders: [65, 88, 85, 60, 62, 0],
        spawnHostile: 0,
        spawnUS: 0
    },
    {
        title: "Aktywacja systemu 'Perimetr' (Martwa Ręka) w trybie czuwania bojowego",
        desc: "Wywiad radioelektroniczny odnotował włączenie podziemnych anten przekaźnikowych rakiety dowodzenia 15P011 pod górą Koswinski Kamień.",
        severity: "crit",
        sliders: [75, 70, 88, 82, 95, 0],
        spawnHostile: 0,
        spawnUS: 0
    },
    {
        title: "Próba penetracji sieci SIPRNet w dowództwie EUCOM w Stuttgarcie",
        desc: "Zespoły Cyber Protection Team zablokowały zaawansowany eksfiltrator danych celowniczych NATO.",
        severity: "warn",
        sliders: [88, 35, 60, 30, 35, 0],
        spawnHostile: 0,
        spawnUS: 0
    },
    {
        title: "Nagłe wynurzenie okrętu podwodnego K-550 Aleksander Newski u wybrzeży Islandii",
        desc: "Atomowy okręt podwodny z 16 pociskami Buława został wykryty przez sonar hydroakustyczny zaledwie 180 mil morskich od bazy Keflavik.",
        severity: "crit",
        sliders: [45, 78, 80, 72, 88, 0],
        spawnHostile: 0,
        spawnUS: 0
    },
    {
        title: "Symulowany start treningowy Minuteman III z bazy Vandenberg",
        desc: "Siły Powietrzne USA przeprowadziły zaplanowany test niezuzbrojonego pocisku GT-249GM w celu demonstracji wiarygodności odstraszania.",
        severity: "warn",
        sliders: [25, 45, 55, 60, 65, 35],
        spawnHostile: 0,
        spawnUS: 1
    },
    {
        title: "Zestrzelenie nieczynnego satelity własnego pociskiem ASAT Nudol",
        desc: "Chmura 1500 odłamków kosmicznych na niskiej orbicie okołoziemskiej (LEO) zagraża konstelacji wczesnego ostrzegania i stacji ISS.",
        severity: "crit",
        sliders: [60, 58, 82, 94, 70, 0],
        spawnHostile: 0,
        spawnUS: 0
    },
    {
        title: "Wykrycie podwójnego odpalenia SLBM z Morza Ochockiego",
        desc: "ALARM КRYTYCZNY: Satelity SBIRS rejestrują dwa aktywne pióropusze rakiet balistycznych wznoszących się z sektora Kuryli!",
        severity: "crit",
        sliders: [85, 88, 94, 100, 98, 100],
        spawnHostile: 2,
        spawnUS: 0
    },
    {
        title: "Wycofanie taktycznej broni jądrowej z wysuniętych magazynów polowych",
        desc: "Zespoły inspekcyjne potwierdziły powrót konwojów specjalnych do centralnych składów w głębi kraju.",
        severity: "ok",
        sliders: [15, 18, 20, 12, 14, 0],
        spawnHostile: 0,
        spawnUS: 0
    },
    {
        title: "Poderwanie samolotów zagłady E-4B Nightwatch i Ił-80 Maksymowicz",
        desc: "Obie strony konfliktu jednocześnie podniosły w powietrze latające stanowiska dowodzenia na wypadek uderzenia jądrowego.",
        severity: "crit",
        sliders: [72, 82, 90, 80, 92, 0],
        spawnHostile: 0,
        spawnUS: 0
    }
];
