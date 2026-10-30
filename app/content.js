// Lesen & Verstehen – @ Joschy
// Lesetexte für Vishwa – alle Texte selbst geschrieben, Niveau 4. Klasse.
// Fragetypen: yn = Ja/Nein, mc = Multiple Choice, tap = Wort im Text antippen.
// h = Textstelle, die bei einer falschen Antwort markiert wird (muss genau so im Text stehen).
window.TEXTE = [
// ───────────── STUFE 1 ─────────────
{ id: 1, stufe: 1, emoji: "🐶", titel: "Der Hund Bello",
  text: [
    "Bello ist ein kleiner brauner Hund. Er wohnt mit Familie Yilmaz in einem Haus mit Garten. Jeden Morgen geht Herr Yilmaz mit Bello spazieren.",
    "Bello liebt den Park, weil er dort mit anderen Hunden spielen kann. Am liebsten jagt er einem roten Ball hinterher.",
    "Nach dem Spaziergang ist Bello immer sehr müde. Dann legt er sich in sein Körbchen neben der Heizung und schläft ein."
  ],
  fragen: [
    { t: "yn", q: "Ist Bello ein großer Hund?", a: false, h: "Bello ist ein kleiner brauner Hund." },
    { t: "yn", q: "Geht Bello am Morgen spazieren?", a: true, h: "Jeden Morgen geht Herr Yilmaz mit Bello spazieren." },
    { t: "mc", q: "Warum liebt Bello den Park?", o: ["Weil es dort Wurst gibt", "Weil er dort mit anderen Hunden spielen kann", "Weil es dort ruhig ist"], a: 1, h: "weil er dort mit anderen Hunden spielen kann" },
    { t: "mc", q: "Welche Farbe hat Bellos Ball?", o: ["Blau", "Rot", "Gelb"], a: 1, h: "Am liebsten jagt er einem roten Ball hinterher." },
    { t: "tap", q: "Wo steht Bellos Körbchen? Neben der …", a: "Heizung", h: "Dann legt er sich in sein Körbchen neben der Heizung und schläft ein." },
    { t: "mc", q: "Wie fühlt sich Bello nach dem Spaziergang?", o: ["Müde", "Hungrig", "Wütend"], a: 0, h: "Nach dem Spaziergang ist Bello immer sehr müde." }
  ]},

{ id: 2, stufe: 1, emoji: "⛄", titel: "Der erste Schnee",
  text: [
    "Als Lena am Samstag aufwacht, ist es draußen ganz still. Sie schaut aus dem Fenster und staunt: Alles ist weiß! In der Nacht hat es zum ersten Mal geschneit.",
    "Schnell zieht Lena ihre Jacke, ihre Mütze und ihre Handschuhe an. Mit ihrem Bruder Tom baut sie im Garten einen Schneemann. Er bekommt zwei Steine als Augen und eine Karotte als Nase.",
    "Nach einer Stunde sind die Finger der Kinder eiskalt. Mama ruft sie ins Haus und macht ihnen einen heißen Kakao."
  ],
  fragen: [
    { t: "yn", q: "Hat es in diesem Winter schon oft geschneit?", a: false, h: "In der Nacht hat es zum ersten Mal geschneit." },
    { t: "mc", q: "An welchem Tag sieht Lena den Schnee?", o: ["Am Montag", "Am Samstag", "Am Sonntag"], a: 1, h: "Als Lena am Samstag aufwacht" },
    { t: "yn", q: "Baut Lena den Schneemann ganz allein?", a: false, h: "Mit ihrem Bruder Tom baut sie im Garten einen Schneemann." },
    { t: "mc", q: "Was bekommt der Schneemann als Nase?", o: ["Einen Stein", "Eine Karotte", "Einen Knopf"], a: 1, h: "eine Karotte als Nase" },
    { t: "tap", q: "Was trinken die Kinder am Ende?", a: "Kakao", h: "macht ihnen einen heißen Kakao" },
    { t: "mc", q: "Warum ruft Mama die Kinder ins Haus? (Denk nach!)", o: ["Weil ihre Finger eiskalt sind", "Weil das Essen fertig ist", "Weil es dunkel wird"], a: 0, h: "Nach einer Stunde sind die Finger der Kinder eiskalt." }
  ]},

{ id: 3, stufe: 1, emoji: "🍚", titel: "Pongal – ein Erntefest",
  text: [
    "Pongal ist ein großes Fest der Tamilen. Es wird jedes Jahr im Januar gefeiert und dauert vier Tage. Mit dem Fest sagen die Menschen Danke für die Ernte und für die Sonne.",
    "Am wichtigsten Tag kocht die Familie Reis mit Milch und braunem Zucker in einem Topf. Wenn die Milch überkocht, rufen alle laut: „Pongalo Pongal!“ Das bringt Glück.",
    "Vor dem Haus werden bunte Muster auf den Boden gemalt. Diese Bilder heißen Kolam."
  ],
  fragen: [
    { t: "yn", q: "Wird Pongal im Sommer gefeiert?", a: false, h: "Es wird jedes Jahr im Januar gefeiert" },
    { t: "yn", q: "Dauert das Fest vier Tage?", a: true, h: "dauert vier Tage" },
    { t: "mc", q: "Wofür sagen die Menschen an Pongal Danke?", o: ["Für die Geschenke", "Für die Ernte und die Sonne", "Für den Schnee"], a: 1, h: "Mit dem Fest sagen die Menschen Danke für die Ernte und für die Sonne." },
    { t: "mc", q: "Was passiert, wenn die Milch überkocht?", o: ["Alle rufen laut „Pongalo Pongal!“", "Die Mutter schimpft", "Das Fest ist vorbei"], a: 0, h: "Wenn die Milch überkocht, rufen alle laut: „Pongalo Pongal!“" },
    { t: "yn", q: "Bringt das Überkochen der Milch Pech?", a: false, h: "Das bringt Glück." },
    { t: "tap", q: "Wie heißen die bunten Bilder vor dem Haus?", a: "Kolam", h: "Diese Bilder heißen Kolam." }
  ]},

{ id: 4, stufe: 1, emoji: "⚽", titel: "Das Fußballspiel",
  text: [
    "Arun spielt seit zwei Jahren im Fußballverein. Das Training ist immer am Dienstag und am Donnerstag. Am Samstag hat seine Mannschaft ein wichtiges Spiel gegen den FC Blau.",
    "Zur Pause steht es 0:1. Die Kinder sind traurig, aber der Trainer sagt: „Gebt nicht auf!“",
    "In der letzten Minute läuft Arun mit dem Ball nach vorne. Er sieht, dass seine Freundin Mia frei steht, und spielt ihr den Ball zu. Mia schießt – Tor! Das Spiel endet 1:1. Nach dem Spiel lobt der Trainer alle Kinder."
  ],
  fragen: [
    { t: "mc", q: "An welchen Tagen ist Training?", o: ["Montag und Mittwoch", "Dienstag und Donnerstag", "Freitag und Samstag"], a: 1, h: "Das Training ist immer am Dienstag und am Donnerstag." },
    { t: "mc", q: "Wie steht es zur Pause?", o: ["0:1", "1:0", "2:2"], a: 0, h: "Zur Pause steht es 0:1." },
    { t: "yn", q: "Hat Arun das Tor geschossen?", a: false, h: "Mia schießt – Tor!" },
    { t: "yn", q: "Spielt Arun den Ball zu Mia, weil sie frei steht?", a: true, h: "Er sieht, dass seine Freundin Mia frei steht, und spielt ihr den Ball zu." },
    { t: "mc", q: "Wie endet das Spiel?", o: ["Aruns Mannschaft gewinnt", "Unentschieden, 1:1", "Aruns Mannschaft verliert"], a: 1, h: "Das Spiel endet 1:1." },
    { t: "tap", q: "Wen lobt der Trainer am Ende? Alle …", a: "Kinder", h: "Nach dem Spiel lobt der Trainer alle Kinder." }
  ]},

{ id: 5, stufe: 1, emoji: "🦔", titel: "Der Igel im Herbst",
  text: [
    "Im Herbst werden die Tage kürzer und kälter. Jetzt hat der Igel viel zu tun. Er muss sich einen dicken Bauch anfressen. Er frisst Käfer, Würmer und Schnecken.",
    "Dann sucht er sich einen guten Platz für den Winter, zum Beispiel unter einem Laubhaufen. Dort rollt er sich zusammen und hält Winterschlaf. Sein Herz schlägt dann ganz langsam.",
    "Erst im Frühling, wenn es wieder warm wird, wacht der Igel auf. Dann hat er großen Hunger."
  ],
  fragen: [
    { t: "yn", q: "Frisst der Igel im Herbst besonders viel?", a: true, h: "Er muss sich einen dicken Bauch anfressen." },
    { t: "mc", q: "Was frisst der Igel?", o: ["Käfer, Würmer und Schnecken", "Äpfel, Nüsse und Brot", "Fische und Frösche"], a: 0, h: "Er frisst Käfer, Würmer und Schnecken." },
    { t: "tap", q: "Wo schläft der Igel im Winter gern? Unter einem …", a: "Laubhaufen", h: "zum Beispiel unter einem Laubhaufen" },
    { t: "yn", q: "Schlägt sein Herz im Winterschlaf schnell?", a: false, h: "Sein Herz schlägt dann ganz langsam." },
    { t: "mc", q: "Wann wacht der Igel wieder auf?", o: ["Im Herbst", "Im Winter", "Im Frühling"], a: 2, h: "Erst im Frühling, wenn es wieder warm wird, wacht der Igel auf." },
    { t: "mc", q: "Wie geht es dem Igel nach dem Winterschlaf?", o: ["Er ist satt", "Er hat großen Hunger", "Er ist krank"], a: 1, h: "Dann hat er großen Hunger." }
  ]},

{ id: 6, stufe: 1, emoji: "✏️", titel: "Das verlorene Mäppchen",
  text: [
    "Am Montag sucht Emil überall sein Mäppchen. Es ist nicht in seinem Ranzen und nicht unter seinem Bett. Emil ist traurig, denn in dem Mäppchen sind seine neuen Buntstifte.",
    "In der Schule erzählt er es seiner Lehrerin, Frau Becker. Sie lächelt und holt etwas aus ihrem Schrank. Es ist Emils grünes Mäppchen! Der Hausmeister hat es am Freitag in der Turnhalle gefunden.",
    "Emil bedankt sich und verspricht, besser auf seine Sachen aufzupassen."
  ],
  fragen: [
    { t: "yn", q: "Findet Emil das Mäppchen unter seinem Bett?", a: false, h: "nicht unter seinem Bett" },
    { t: "mc", q: "Warum ist Emil traurig?", o: ["Weil er die Hausaufgaben vergessen hat", "Weil seine neuen Buntstifte im Mäppchen sind", "Weil er krank ist"], a: 1, h: "denn in dem Mäppchen sind seine neuen Buntstifte" },
    { t: "yn", q: "Ist Frau Becker Emils Lehrerin?", a: true, h: "seiner Lehrerin, Frau Becker" },
    { t: "mc", q: "Welche Farbe hat das Mäppchen?", o: ["Rot", "Blau", "Grün"], a: 2, h: "Es ist Emils grünes Mäppchen!" },
    { t: "tap", q: "Wer hat das Mäppchen gefunden?", a: "Hausmeister", h: "Der Hausmeister hat es am Freitag in der Turnhalle gefunden." },
    { t: "mc", q: "Wo wurde das Mäppchen gefunden?", o: ["In der Turnhalle", "Im Bus", "Auf dem Schulhof"], a: 0, h: "in der Turnhalle gefunden" }
  ]},

{ id: 7, stufe: 1, emoji: "🏖️", titel: "Ein Tag am Meer",
  text: [
    "In den Sommerferien fährt Familie Schmidt an die Nordsee. Am ersten Tag gehen sie gleich zum Strand. Paul baut mit seinem Vater eine große Sandburg. Seine Schwester Lea sammelt Muscheln in einem Eimer.",
    "Plötzlich kommt das Wasser näher. Das ist die Flut. Die Sandburg wird langsam vom Meer weggespült. Paul ist zuerst traurig, doch dann lacht er: „Morgen bauen wir eine noch größere Burg!“",
    "Am Abend essen alle zusammen Fischbrötchen."
  ],
  fragen: [
    { t: "mc", q: "Wohin fährt die Familie?", o: ["An die Ostsee", "An die Nordsee", "In die Berge"], a: 1, h: "fährt Familie Schmidt an die Nordsee" },
    { t: "yn", q: "Sammelt Lea Steine?", a: false, h: "Seine Schwester Lea sammelt Muscheln in einem Eimer." },
    { t: "tap", q: "Wie heißt es, wenn das Wasser näher kommt?", a: "Flut", h: "Das ist die Flut." },
    { t: "mc", q: "Was passiert mit der Sandburg?", o: ["Ein Hund macht sie kaputt", "Das Meer spült sie weg", "Sie wird immer größer"], a: 1, h: "Die Sandburg wird langsam vom Meer weggespült." },
    { t: "yn", q: "Bleibt Paul die ganze Zeit traurig?", a: false, h: "Paul ist zuerst traurig, doch dann lacht er" },
    { t: "mc", q: "Was isst die Familie am Abend?", o: ["Pizza", "Fischbrötchen", "Nudeln"], a: 1, h: "Am Abend essen alle zusammen Fischbrötchen." }
  ]},

{ id: 8, stufe: 1, emoji: "🐝", titel: "Die Biene",
  text: [
    "Bienen sind kleine Insekten mit sechs Beinen und vier Flügeln. Sie leben zusammen in einem Bienenstock.",
    "In einem Bienenvolk gibt es eine Königin. Sie legt jeden Tag sehr viele Eier. Die meisten anderen Bienen sind Arbeiterinnen. Sie fliegen von Blüte zu Blüte und sammeln Nektar. Aus dem Nektar machen sie Honig.",
    "Dabei helfen die Bienen auch den Pflanzen, denn sie tragen den Blütenstaub von einer Blume zur nächsten. So können neue Früchte wachsen."
  ],
  fragen: [
    { t: "yn", q: "Haben Bienen acht Beine?", a: false, h: "mit sechs Beinen und vier Flügeln" },
    { t: "mc", q: "Wie viele Flügel hat eine Biene?", o: ["Zwei", "Vier", "Sechs"], a: 1, h: "mit sechs Beinen und vier Flügeln" },
    { t: "tap", q: "Wer legt die Eier?", a: "Königin", h: "In einem Bienenvolk gibt es eine Königin. Sie legt jeden Tag sehr viele Eier." },
    { t: "mc", q: "Was machen die Bienen aus dem Nektar?", o: ["Wachs", "Honig", "Zucker"], a: 1, h: "Aus dem Nektar machen sie Honig." },
    { t: "yn", q: "Helfen Bienen den Pflanzen?", a: true, h: "Dabei helfen die Bienen auch den Pflanzen" },
    { t: "mc", q: "Warum sind Bienen wichtig für neue Früchte?", o: ["Weil sie Blütenstaub von Blume zu Blume tragen", "Weil sie die Früchte gießen", "Weil sie Schädlinge fressen"], a: 0, h: "denn sie tragen den Blütenstaub von einer Blume zur nächsten" }
  ]},

{ id: 9, stufe: 1, emoji: "🎂", titel: "Omas Geburtstag",
  text: [
    "Nächsten Sonntag hat Oma Geburtstag. Sie wird 70 Jahre alt. Mia und ihr Bruder Ben wollen ihr etwas Besonderes schenken.",
    "Ben möchte ein Bild malen. Mia hat eine bessere Idee: „Lass uns zusammen einen Kuchen backen!“",
    "Am Samstag backen die beiden mit Papa einen Schokoladenkuchen. Ben darf die Eier aufschlagen und Mia rührt den Teig.",
    "Am Sonntag freut sich Oma sehr. Sie sagt: „Das ist der beste Kuchen der Welt!“"
  ],
  fragen: [
    { t: "mc", q: "Wie alt wird Oma?", o: ["60 Jahre", "70 Jahre", "80 Jahre"], a: 1, h: "Sie wird 70 Jahre alt." },
    { t: "yn", q: "Wollte Ben zuerst einen Kuchen backen?", a: false, h: "Ben möchte ein Bild malen." },
    { t: "tap", q: "Was für einen Kuchen backen die Kinder?", a: "Schokoladenkuchen", h: "Am Samstag backen die beiden mit Papa einen Schokoladenkuchen." },
    { t: "mc", q: "Wer hilft den Kindern beim Backen?", o: ["Mama", "Papa", "Oma"], a: 1, h: "backen die beiden mit Papa" },
    { t: "mc", q: "Was macht Ben beim Backen?", o: ["Er rührt den Teig", "Er schlägt die Eier auf", "Er wäscht ab"], a: 1, h: "Ben darf die Eier aufschlagen" },
    { t: "yn", q: "Gefällt Oma der Kuchen?", a: true, h: "„Das ist der beste Kuchen der Welt!“" }
  ]},

{ id: 10, stufe: 1, emoji: "🌙", titel: "Der Mond",
  text: [
    "Der Mond ist unser nächster Nachbar im Weltall. Er dreht sich um die Erde. Für eine Runde braucht er ungefähr einen Monat.",
    "Der Mond leuchtet nicht selbst. Er wird von der Sonne angestrahlt. Deshalb sehen wir ihn manchmal rund und manchmal nur als schmale Sichel.",
    "Auf dem Mond gibt es keine Luft zum Atmen und kein Wasser. Im Jahr 1969 waren zum ersten Mal Menschen auf dem Mond. Ihre Fußspuren sind wahrscheinlich heute noch da, weil es auf dem Mond keinen Wind gibt."
  ],
  fragen: [
    { t: "yn", q: "Leuchtet der Mond von selbst?", a: false, h: "Der Mond leuchtet nicht selbst." },
    { t: "mc", q: "Wie lange braucht der Mond für eine Runde um die Erde?", o: ["Einen Tag", "Ungefähr einen Monat", "Ein Jahr"], a: 1, h: "Für eine Runde braucht er ungefähr einen Monat." },
    { t: "tap", q: "Von wem wird der Mond angestrahlt?", a: "Sonne", h: "Er wird von der Sonne angestrahlt." },
    { t: "yn", q: "Kann man auf dem Mond ohne Hilfe atmen?", a: false, h: "Auf dem Mond gibt es keine Luft zum Atmen und kein Wasser." },
    { t: "mc", q: "Wann waren zum ersten Mal Menschen auf dem Mond?", o: ["1969", "1989", "2009"], a: 0, h: "Im Jahr 1969 waren zum ersten Mal Menschen auf dem Mond." },
    { t: "mc", q: "Warum sind die Fußspuren noch da?", o: ["Weil es dort keinen Wind gibt", "Weil sie aus Stein sind", "Weil jemand sie bewacht"], a: 0, h: "weil es auf dem Mond keinen Wind gibt" }
  ]},

// ───────────── STUFE 2 ─────────────
{ id: 11, stufe: 2, emoji: "🌳", titel: "Das Baumhaus",
  text: [
    "Kemal und sein Freund Luca wollen ein Baumhaus bauen. Kemals Opa hat im Garten eine alte, starke Eiche. „Die ist perfekt“, sagt Opa und hilft den beiden.",
    "Zuerst zeichnen die Jungen einen Plan auf ein großes Blatt Papier. Dann holen sie Bretter, Nägel und einen Hammer aus dem Keller. Opa sägt die Bretter, denn die Säge ist für die Kinder zu gefährlich. Kemal und Luca streichen das Holz mit blauer Farbe an.",
    "Nach drei Wochenenden ist das Baumhaus endlich fertig. Es hat ein kleines Fenster und eine Strickleiter. Zur Feier übernachten die Jungen zum ersten Mal im Baumhaus.",
    "Mitten in der Nacht hören sie ein lautes Rascheln. Luca hat Angst. Kemal leuchtet mit der Taschenlampe nach unten – es ist nur ein Igel, der durch das Laub läuft."
  ],
  fragen: [
    { t: "mc", q: "Was für ein Baum steht in Opas Garten?", o: ["Eine Tanne", "Eine Eiche", "Ein Apfelbaum"], a: 1, h: "eine alte, starke Eiche" },
    { t: "mc", q: "Was machen die Jungen zuerst?", o: ["Sie zeichnen einen Plan", "Sie streichen das Holz", "Sie holen Nägel"], a: 0, h: "Zuerst zeichnen die Jungen einen Plan auf ein großes Blatt Papier." },
    { t: "yn", q: "Sägen die Kinder die Bretter selbst?", a: false, h: "Opa sägt die Bretter" },
    { t: "mc", q: "Warum sägt Opa die Bretter?", o: ["Weil die Kinder keine Lust haben", "Weil die Säge für die Kinder zu gefährlich ist", "Weil Opa schneller ist"], a: 1, h: "denn die Säge ist für die Kinder zu gefährlich" },
    { t: "yn", q: "Ist das Baumhaus blau? (Denk nach!)", a: true, h: "streichen das Holz mit blauer Farbe an" },
    { t: "tap", q: "Wie lange bauen sie am Baumhaus? Drei …", a: "Wochenenden", h: "Nach drei Wochenenden ist das Baumhaus endlich fertig." },
    { t: "mc", q: "Wer macht in der Nacht das Rascheln?", o: ["Eine Katze", "Ein Igel", "Opa"], a: 1, h: "es ist nur ein Igel, der durch das Laub läuft" }
  ]},

{ id: 12, stufe: 2, emoji: "🍞", titel: "Wie Brot entsteht",
  text: [
    "Brot gehört bei uns fast zu jeder Mahlzeit. Aber wie entsteht es eigentlich?",
    "Alles beginnt auf dem Feld. Im Herbst sät der Bauer Getreide, zum Beispiel Weizen oder Roggen. Im Sommer sind die Körner reif. Dann erntet der Bauer das Getreide mit einem Mähdrescher. Diese große Maschine trennt die Körner von den Halmen.",
    "Die Körner kommen in eine Mühle. Dort werden sie zu Mehl gemahlen.",
    "Der Bäcker mischt das Mehl mit Wasser, Salz und Hefe. Die Hefe sorgt dafür, dass der Teig aufgeht und das Brot schön locker wird. Danach formt der Bäcker Brote und Brötchen und backt sie im heißen Ofen. Viele Bäcker fangen schon um drei Uhr nachts mit der Arbeit an, damit wir morgens frische Brötchen kaufen können."
  ],
  fragen: [
    { t: "mc", q: "Wann sät der Bauer das Getreide?", o: ["Im Frühling", "Im Sommer", "Im Herbst"], a: 2, h: "Im Herbst sät der Bauer Getreide" },
    { t: "tap", q: "Mit welcher Maschine erntet der Bauer?", a: "Mähdrescher", h: "Dann erntet der Bauer das Getreide mit einem Mähdrescher." },
    { t: "mc", q: "Wo werden die Körner zu Mehl?", o: ["In der Bäckerei", "In der Mühle", "Auf dem Feld"], a: 1, h: "Die Körner kommen in eine Mühle. Dort werden sie zu Mehl gemahlen." },
    { t: "yn", q: "Gehört Zucker zu den Zutaten im Text?", a: false, h: "Der Bäcker mischt das Mehl mit Wasser, Salz und Hefe." },
    { t: "mc", q: "Wofür ist die Hefe da?", o: ["Damit das Brot süß wird", "Damit der Teig aufgeht und das Brot locker wird", "Damit das Brot braun wird"], a: 1, h: "Die Hefe sorgt dafür, dass der Teig aufgeht und das Brot schön locker wird." },
    { t: "yn", q: "Fangen viele Bäcker sehr früh mit der Arbeit an?", a: true, h: "Viele Bäcker fangen schon um drei Uhr nachts mit der Arbeit an" },
    { t: "mc", q: "Was ist die richtige Reihenfolge?", o: ["Feld → Mühle → Bäckerei", "Mühle → Feld → Bäckerei", "Bäckerei → Feld → Mühle"], a: 0, h: "Alles beginnt auf dem Feld." }
  ]},

{ id: 13, stufe: 2, emoji: "🤝", titel: "Der neue Mitschüler",
  text: [
    "Nach den Herbstferien kommt ein neuer Junge in die Klasse 4b. Er heißt Tarek und ist mit seiner Familie aus einer anderen Stadt hierhergezogen. Frau Weber stellt ihn vor. Tarek steht vorne an der Tafel und schaut auf den Boden. Er ist schüchtern und sagt nur leise „Hallo“.",
    "In der Pause steht Tarek allein am Rand des Schulhofs. Jonas bemerkt das. Er erinnert sich, wie er sich selbst an seinem ersten Schultag gefühlt hat. Damals kannte er auch niemanden. Jonas geht zu Tarek und fragt: „Willst du mit uns Fangen spielen?“ Tarek nickt und lächelt zum ersten Mal.",
    "Schon nach einer Woche sind die beiden gute Freunde. Tarek erzählt Jonas, dass er sehr gut zeichnen kann. Zusammen gestalten sie ein Plakat für das Klassenzimmer."
  ],
  fragen: [
    { t: "mc", q: "In welche Klasse kommt Tarek?", o: ["3a", "4b", "4c"], a: 1, h: "in die Klasse 4b" },
    { t: "yn", q: "Ist Tarek am ersten Tag laut und frech?", a: false, h: "Er ist schüchtern und sagt nur leise „Hallo“." },
    { t: "mc", q: "Wo steht Tarek in der Pause?", o: ["Allein am Rand des Schulhofs", "Bei der Lehrerin", "Im Klassenzimmer"], a: 0, h: "In der Pause steht Tarek allein am Rand des Schulhofs." },
    { t: "mc", q: "Warum geht Jonas zu Tarek?", o: ["Weil die Lehrerin es sagt", "Weil er sich an seinen eigenen ersten Schultag erinnert", "Weil Tarek ihn ruft"], a: 1, h: "Er erinnert sich, wie er sich selbst an seinem ersten Schultag gefühlt hat." },
    { t: "tap", q: "Welches Spiel spielen die Kinder?", a: "Fangen", h: "„Willst du mit uns Fangen spielen?“" },
    { t: "mc", q: "Wie fühlt sich Tarek, als Jonas ihn fragt? (Denk nach!)", o: ["Er freut sich", "Er ist wütend", "Er ist gelangweilt"], a: 0, h: "Tarek nickt und lächelt zum ersten Mal." },
    { t: "yn", q: "Kann Tarek gut zeichnen?", a: true, h: "dass er sehr gut zeichnen kann" }
  ]},

{ id: 14, stufe: 2, emoji: "🐘", titel: "Elefanten",
  text: [
    "Elefanten sind die größten Landtiere der Welt. Es gibt Afrikanische und Asiatische Elefanten. Man kann sie an den Ohren unterscheiden: Afrikanische Elefanten haben sehr große Ohren, Asiatische Elefanten haben kleinere.",
    "Der Rüssel ist für den Elefanten sehr wichtig. Mit ihm kann er riechen, greifen und trinken. Er saugt Wasser in den Rüssel und spritzt es sich dann ins Maul. An heißen Tagen duscht er sich auch damit.",
    "Elefanten fressen fast den ganzen Tag. Sie fressen Gras, Blätter, Rinde und Früchte. Ein erwachsener Elefant frisst bis zu 150 Kilogramm am Tag.",
    "Elefanten leben in Herden. Die Herde wird von der ältesten Elefantenkuh angeführt. Sie kennt die besten Wege zu Wasserstellen."
  ],
  fragen: [
    { t: "yn", q: "Sind Elefanten die größten Landtiere?", a: true, h: "Elefanten sind die größten Landtiere der Welt." },
    { t: "mc", q: "Woran erkennt man Afrikanische Elefanten?", o: ["An den sehr großen Ohren", "Am kurzen Rüssel", "An der Farbe"], a: 0, h: "Afrikanische Elefanten haben sehr große Ohren" },
    { t: "mc", q: "Was kann der Elefant mit dem Rüssel NICHT? (Lies genau!)", o: ["Riechen", "Trinken", "Sehen"], a: 2, h: "Mit ihm kann er riechen, greifen und trinken." },
    { t: "yn", q: "Frisst ein Elefant Fleisch?", a: false, h: "Sie fressen Gras, Blätter, Rinde und Früchte." },
    { t: "tap", q: "Wie viel Kilogramm frisst ein Elefant höchstens am Tag? Tippe auf die Zahl.", a: "150", h: "Ein erwachsener Elefant frisst bis zu 150 Kilogramm am Tag." },
    { t: "mc", q: "Wer führt die Herde an?", o: ["Der stärkste Bulle", "Die älteste Elefantenkuh", "Das jüngste Tier"], a: 1, h: "Die Herde wird von der ältesten Elefantenkuh angeführt." },
    { t: "mc", q: "Warum führt die älteste Elefantenkuh die Herde?", o: ["Sie ist am schnellsten", "Sie kennt die besten Wege zu Wasserstellen", "Sie ist am lautesten"], a: 1, h: "Sie kennt die besten Wege zu Wasserstellen." }
  ]},

{ id: 15, stufe: 2, emoji: "🦕", titel: "Im Museum",
  text: [
    "Die Klasse 4a macht einen Ausflug ins Naturkundemuseum. Gleich in der großen Halle steht das Skelett eines Dinosauriers. Es ist so hoch wie ein Haus. Die Kinder legen den Kopf in den Nacken und staunen.",
    "Eine Frau vom Museum erklärt: „Dieser Dinosaurier hat vor ungefähr 150 Millionen Jahren gelebt. Er hat nur Pflanzen gefressen.“ Sara fragt: „Woher weiß man das?“ Die Frau zeigt auf die Zähne. „Seine Zähne sind nicht spitz und scharf. Fleischfresser hatten spitze, scharfe Zähne.“",
    "Danach dürfen die Kinder in einem Sandkasten selbst nach Knochen graben. Lukas findet einen großen Knochen aus Gips. Zum Schluss kaufen sich einige Kinder im Museumsladen eine Postkarte. Im Bus nach Hause erzählen alle aufgeregt durcheinander."
  ],
  fragen: [
    { t: "mc", q: "Wie hoch ist das Skelett?", o: ["So hoch wie ein Auto", "So hoch wie ein Haus", "So hoch wie ein Kind"], a: 1, h: "Es ist so hoch wie ein Haus." },
    { t: "yn", q: "Hat dieser Dinosaurier Fleisch gefressen?", a: false, h: "Er hat nur Pflanzen gefressen." },
    { t: "tap", q: "Wer fragt: „Woher weiß man das?“ Tippe auf den Namen.", a: "Sara", h: "Sara fragt: „Woher weiß man das?“" },
    { t: "mc", q: "Woran erkennt man, was der Dinosaurier gefressen hat?", o: ["An den Zähnen", "An den Füßen", "Am Schwanz"], a: 0, h: "Die Frau zeigt auf die Zähne." },
    { t: "mc", q: "Woraus ist der Knochen, den Lukas findet?", o: ["Aus Holz", "Aus Gips", "Aus Stein"], a: 1, h: "Lukas findet einen großen Knochen aus Gips." },
    { t: "yn", q: "Fahren die Kinder mit dem Bus nach Hause?", a: true, h: "Im Bus nach Hause erzählen alle aufgeregt durcheinander." }
  ]},

{ id: 16, stufe: 2, emoji: "💧", titel: "Der Wasserkreislauf",
  text: [
    "Wasser ist immer unterwegs. Wenn die Sonne auf Meere, Seen und Flüsse scheint, wird das Wasser warm. Ein Teil davon verdunstet. Das heißt: Es wird zu unsichtbarem Wasserdampf und steigt in die Luft.",
    "Oben am Himmel ist es kalt. Dort kühlt der Wasserdampf ab und es entstehen winzige Wassertröpfchen. Viele Tröpfchen zusammen bilden eine Wolke. Wenn die Tröpfchen zu groß und zu schwer werden, fallen sie als Regen auf die Erde. Im Winter fallen sie oft als Schnee.",
    "Das Regenwasser versickert im Boden oder fließt in Bäche und Flüsse. Die Flüsse fließen ins Meer. Dort beginnt alles wieder von vorn. Diesen Weg nennt man Wasserkreislauf."
  ],
  fragen: [
    { t: "tap", q: "Wie nennt man es, wenn Wasser zu Wasserdampf wird?", a: "verdunstet", h: "Ein Teil davon verdunstet." },
    { t: "yn", q: "Kann man Wasserdampf sehen?", a: false, h: "Es wird zu unsichtbarem Wasserdampf" },
    { t: "yn", q: "Ist es oben am Himmel warm?", a: false, h: "Oben am Himmel ist es kalt." },
    { t: "mc", q: "Woraus besteht eine Wolke?", o: ["Aus Rauch", "Aus vielen winzigen Wassertröpfchen", "Aus Staub"], a: 1, h: "Viele Tröpfchen zusammen bilden eine Wolke." },
    { t: "mc", q: "Wann fallen die Tröpfchen als Regen herunter?", o: ["Wenn sie zu groß und zu schwer werden", "Wenn die Sonne scheint", "Wenn es windig ist"], a: 0, h: "Wenn die Tröpfchen zu groß und zu schwer werden, fallen sie als Regen auf die Erde." },
    { t: "mc", q: "Wohin fließen die Flüsse?", o: ["In die Wolken", "Ins Meer", "In die Berge"], a: 1, h: "Die Flüsse fließen ins Meer." }
  ]},

{ id: 17, stufe: 2, emoji: "✉️", titel: "Ein Brief an Ayla",
  text: [
    "Liebe Ayla,",
    "viele Grüße aus den Bergen! Wir sind jetzt schon eine Woche in Bayern. Unsere Ferienwohnung ist auf einem Bauernhof. Jeden Morgen darf ich beim Füttern der Kühe helfen. Meine Lieblingskuh heißt Rosi. Sie ist braun-weiß und sehr neugierig.",
    "Gestern sind wir mit der Seilbahn auf einen hohen Berg gefahren. Oben lag sogar noch ein bisschen Schnee, obwohl Sommer ist! Mein kleiner Bruder hatte in der Gondel Angst, aber ich fand es toll. Am Nachmittag waren wir an einem See schwimmen. Das Wasser war eiskalt!",
    "Ich vermisse dich und freue mich schon auf die Schule. Am Samstag fahren wir wieder nach Hause. Dann zeige ich dir meine Fotos.",
    "Deine Lisa"
  ],
  fragen: [
    { t: "mc", q: "Wer hat den Brief geschrieben?", o: ["Ayla", "Lisa", "Rosi"], a: 1, h: "Deine Lisa" },
    { t: "yn", q: "Wohnt Lisa im Urlaub in einem Hotel?", a: false, h: "Unsere Ferienwohnung ist auf einem Bauernhof." },
    { t: "tap", q: "Wie heißt Lisas Lieblingskuh? Tippe auf den Namen.", a: "Rosi", h: "Meine Lieblingskuh heißt Rosi." },
    { t: "mc", q: "Womit fährt die Familie auf den Berg?", o: ["Mit dem Auto", "Mit der Seilbahn", "Mit dem Zug"], a: 1, h: "Gestern sind wir mit der Seilbahn auf einen hohen Berg gefahren." },
    { t: "yn", q: "Hatte Lisa in der Gondel Angst?", a: false, h: "Mein kleiner Bruder hatte in der Gondel Angst, aber ich fand es toll." },
    { t: "mc", q: "Wie war das Wasser im See?", o: ["Warm", "Eiskalt", "Schmutzig"], a: 1, h: "Das Wasser war eiskalt!" },
    { t: "mc", q: "Wer ist Ayla wohl? (Denk nach!)", o: ["Lisas Schwester", "Lisas Freundin aus der Schule", "Lisas Lehrerin"], a: 1, h: "Ich vermisse dich und freue mich schon auf die Schule." }
  ]},

{ id: 18, stufe: 2, emoji: "🦊", titel: "Der Fuchs und der Rabe",
  text: [
    "Ein Rabe hatte ein großes Stück Käse gefunden. Er setzte sich damit auf einen hohen Ast, um es in Ruhe zu fressen. Da kam ein Fuchs vorbei. Er roch den Käse und bekam großen Hunger.",
    "Der Fuchs wusste, dass er nicht auf den Baum klettern konnte. Also überlegte er sich eine List. „Guten Tag, lieber Rabe“, rief er freundlich. „Was für schöne, glänzende Federn du hast! Wenn deine Stimme genauso schön ist, bist du der König aller Vögel.“",
    "Der Rabe fühlte sich geschmeichelt. Er wollte dem Fuchs zeigen, wie schön er singen kann. Er öffnete den Schnabel und krächzte laut. Dabei fiel der Käse hinunter. Der Fuchs schnappte ihn sich und lachte: „Merke dir: Glaube nicht jedem, der dir schmeichelt!“"
  ],
  fragen: [
    { t: "mc", q: "Was hatte der Rabe gefunden?", o: ["Brot", "Käse", "Wurst"], a: 1, h: "Ein Rabe hatte ein großes Stück Käse gefunden." },
    { t: "yn", q: "Konnte der Fuchs auf den Baum klettern?", a: false, h: "dass er nicht auf den Baum klettern konnte" },
    { t: "tap", q: "Was überlegte sich der Fuchs? Eine …", a: "List", h: "Also überlegte er sich eine List." },
    { t: "mc", q: "Was lobte der Fuchs am Raben?", o: ["Seine glänzenden Federn", "Seinen langen Schnabel", "Seine starken Krallen"], a: 0, h: "Was für schöne, glänzende Federn du hast!" },
    { t: "mc", q: "Warum fiel der Käse hinunter?", o: ["Der Wind war zu stark", "Der Rabe öffnete den Schnabel, um zu singen", "Der Fuchs schüttelte den Baum"], a: 1, h: "Er öffnete den Schnabel und krächzte laut. Dabei fiel der Käse hinunter." },
    { t: "yn", q: "Meinte der Fuchs sein Lob ehrlich? (Denk nach!)", a: false, h: "Also überlegte er sich eine List." },
    { t: "mc", q: "Was ist die Lehre der Geschichte?", o: ["Teile immer dein Essen", "Glaube nicht jedem, der dir schmeichelt", "Raben können gut singen"], a: 1, h: "Glaube nicht jedem, der dir schmeichelt!" }
  ]},

{ id: 19, stufe: 2, emoji: "🚲", titel: "Die Fahrradprüfung",
  text: [
    "In der vierten Klasse machen viele Kinder die Fahrradprüfung. Auch die Klasse 4c übt seit Wochen dafür. Zweimal kommt ein Polizist, Herr Krüger, in die Schule. Er erklärt die wichtigsten Verkehrszeichen und die Regeln im Straßenverkehr.",
    "„Bevor ihr abbiegt, müsst ihr den Arm ausstrecken und euch umschauen“, sagt Herr Krüger. „Und vergesst nie euren Helm!“",
    "Vor der Prüfung wird jedes Fahrrad kontrolliert. Funktionieren die Bremsen? Hat das Rad ein Licht vorne und hinten? Ist eine Klingel dran? Bei Nils fehlt die Klingel. Sein Vater schraubt schnell eine neue an.",
    "Am Prüfungstag fahren die Kinder einen Weg durch die Straßen rund um die Schule. Polizisten stehen an den Ecken und schauen genau zu. Am Ende bekommen alle Kinder, die bestanden haben, einen Fahrradführerschein."
  ],
  fragen: [
    { t: "mc", q: "Wer erklärt den Kindern die Regeln?", o: ["Ein Feuerwehrmann", "Ein Polizist", "Ein Arzt"], a: 1, h: "Zweimal kommt ein Polizist, Herr Krüger, in die Schule." },
    { t: "yn", q: "Muss man vor dem Abbiegen den Arm ausstrecken?", a: true, h: "Bevor ihr abbiegt, müsst ihr den Arm ausstrecken und euch umschauen" },
    { t: "tap", q: "Was sollen die Kinder nie vergessen?", a: "Helm", h: "„Und vergesst nie euren Helm!“" },
    { t: "yn", q: "Wird das Fahrrad vor der Prüfung kontrolliert?", a: true, h: "Vor der Prüfung wird jedes Fahrrad kontrolliert." },
    { t: "mc", q: "Was fehlt an Nils' Fahrrad?", o: ["Das Licht", "Die Bremse", "Die Klingel"], a: 2, h: "Bei Nils fehlt die Klingel." },
    { t: "mc", q: "Was bekommen die Kinder, die bestanden haben?", o: ["Eine Medaille", "Einen Fahrradführerschein", "Ein neues Fahrrad"], a: 1, h: "einen Fahrradführerschein" }
  ]},

{ id: 20, stufe: 2, emoji: "🌴", titel: "Sri Lanka",
  text: [
    "Sri Lanka ist eine Insel im Indischen Ozean. Sie liegt im Süden von Indien. Wegen ihrer Form nennen manche Menschen sie die „Träne Indiens“. Auf der Insel ist es das ganze Jahr über warm. Es gibt Strände mit Palmen, grüne Berge und dichte Wälder.",
    "In Sri Lanka werden vor allem zwei Sprachen gesprochen: Singhalesisch und Tamil. Die größte Stadt heißt Colombo.",
    "Sri Lanka ist berühmt für seinen Tee. In den Bergen wachsen Teesträucher an steilen Hängen. Die Teepflückerinnen pflücken nur die jüngsten, zartesten Blätter. In Nationalparks leben wilde Elefanten, Affen und sogar Leoparden. Auch Kokosnüsse, Bananen und Mangos wachsen hier."
  ],
  fragen: [
    { t: "yn", q: "Ist Sri Lanka eine Insel?", a: true, h: "Sri Lanka ist eine Insel im Indischen Ozean." },
    { t: "mc", q: "Wo liegt Sri Lanka?", o: ["Im Norden von Europa", "Im Süden von Indien", "In Afrika"], a: 1, h: "Sie liegt im Süden von Indien." },
    { t: "yn", q: "Ist es in Sri Lanka im Winter kalt?", a: false, h: "Auf der Insel ist es das ganze Jahr über warm." },
    { t: "mc", q: "Welche zwei Sprachen werden vor allem gesprochen?", o: ["Englisch und Deutsch", "Singhalesisch und Tamil", "Hindi und Chinesisch"], a: 1, h: "Singhalesisch und Tamil" },
    { t: "tap", q: "Wie heißt die größte Stadt? Tippe auf den Namen.", a: "Colombo", h: "Die größte Stadt heißt Colombo." },
    { t: "mc", q: "Wofür ist Sri Lanka berühmt?", o: ["Für Käse", "Für Tee", "Für Schokolade"], a: 1, h: "Sri Lanka ist berühmt für seinen Tee." },
    { t: "mc", q: "Welche Blätter pflücken die Teepflückerinnen?", o: ["Die ältesten", "Die größten", "Die jüngsten, zartesten"], a: 2, h: "Die Teepflückerinnen pflücken nur die jüngsten, zartesten Blätter." }
  ]},

// ───────────── STUFE 3 ─────────────
{ id: 21, stufe: 3, emoji: "🗝️", titel: "Die Kiste auf dem Dachboden",
  text: [
    "Bei Regenwetter ist Malte oft langweilig. An einem Sonntag fragt er seine Oma, ob er auf den Dachboden darf. Oma nickt: „Aber sei vorsichtig, da oben ist es staubig.“",
    "Auf dem Dachboden riecht es nach altem Holz. Überall stehen Kisten, alte Stühle und ein kaputtes Fahrrad. In einer Ecke entdeckt Malte eine kleine Holzkiste mit einem Schloss. Der Schlüssel steckt noch. Neugierig öffnet er die Kiste. Darin liegen ein altes Fotoalbum, ein Brief und eine Mundharmonika.",
    "Malte läuft mit der Kiste nach unten. Als Oma sie sieht, werden ihre Augen feucht. „Die habe ich seit über vierzig Jahren gesucht“, sagt sie leise. „Die Mundharmonika gehörte deinem Uropa. Er hat jeden Abend für mich gespielt, als ich ein kleines Mädchen war.“",
    "Oma zeigt Malte die Fotos. Auf einem sieht man einen Mann mit Schnurrbart, der auf einer Bank sitzt und Mundharmonika spielt. Am Abend versucht Malte selbst, ein paar Töne zu spielen. Es klingt noch schief, aber Oma klatscht begeistert. „Du musst nur üben“, sagt sie, „dann wirst du genauso gut wie er.“"
  ],
  fragen: [
    { t: "mc", q: "Wonach riecht es auf dem Dachboden?", o: ["Nach Kuchen", "Nach altem Holz", "Nach Blumen"], a: 1, h: "Auf dem Dachboden riecht es nach altem Holz." },
    { t: "mc", q: "Was liegt NICHT in der Kiste? (Lies genau!)", o: ["Ein Fotoalbum", "Eine Mundharmonika", "Eine Uhr"], a: 2, h: "Darin liegen ein altes Fotoalbum, ein Brief und eine Mundharmonika." },
    { t: "mc", q: "Warum werden Omas Augen feucht? (Denk nach!)", o: ["Weil Staub in ihre Augen fliegt", "Weil sie gerührt ist und sich an früher erinnert", "Weil sie wütend auf Malte ist"], a: 1, h: "„Die habe ich seit über vierzig Jahren gesucht“, sagt sie leise." },
    { t: "tap", q: "Wem gehörte die Mundharmonika früher?", a: "Uropa", h: "Die Mundharmonika gehörte deinem Uropa." },
    { t: "yn", q: "Hat Oma die Kiste lange gesucht?", a: true, h: "Die habe ich seit über vierzig Jahren gesucht" },
    { t: "yn", q: "Spielt Malte am Abend schon perfekt?", a: false, h: "Es klingt noch schief" },
    { t: "mc", q: "Was meint Oma mit „Du musst nur üben“?", o: ["Malte soll aufhören", "Malte kann besser werden, wenn er übt", "Malte soll Klavier lernen"], a: 1, h: "„Du musst nur üben“, sagt sie, „dann wirst du genauso gut wie er.“" }
  ]},

{ id: 22, stufe: 3, emoji: "🐧", titel: "Kaiserpinguine",
  text: [
    "Kaiserpinguine leben in der Antarktis. Dort ist es im Winter so kalt wie nirgendwo sonst auf der Erde: Die Temperatur kann auf minus 40 Grad fallen, und eisige Stürme fegen über das Eis.",
    "Trotzdem brüten die Kaiserpinguine genau in dieser Zeit. Das Weibchen legt ein einziges Ei. Danach geht es zurück ins Meer, um Fische zu fangen. Das Männchen bleibt beim Ei. Es legt das Ei auf seine Füße und bedeckt es mit einer warmen Bauchfalte. So brütet es etwa zwei Monate lang – ohne etwas zu fressen!",
    "Um nicht zu erfrieren, stellen sich die Männchen ganz dicht zusammen. Hunderte Pinguine bilden eine große Gruppe. Die Tiere am Rand frieren am meisten. Deshalb wechseln sie immer wieder die Plätze: Wer außen stand, darf nach innen, wo es wärmer ist.",
    "Wenn das Küken schlüpft, kommt das Weibchen zurück. Jetzt kann sich der hungrige Vater endlich auf den Weg zum Meer machen."
  ],
  fragen: [
    { t: "mc", q: "Wo leben Kaiserpinguine?", o: ["In der Arktis", "In der Antarktis", "In Afrika"], a: 1, h: "Kaiserpinguine leben in der Antarktis." },
    { t: "yn", q: "Legt das Weibchen viele Eier?", a: false, h: "Das Weibchen legt ein einziges Ei." },
    { t: "mc", q: "Wer brütet das Ei aus?", o: ["Das Weibchen", "Das Männchen", "Beide abwechselnd"], a: 1, h: "Das Männchen bleibt beim Ei." },
    { t: "tap", q: "Worauf legt das Männchen das Ei? Auf seine …", a: "Füße", h: "Es legt das Ei auf seine Füße" },
    { t: "yn", q: "Frisst das Männchen, während es brütet?", a: false, h: "ohne etwas zu fressen!" },
    { t: "mc", q: "Warum wechseln die Pinguine immer wieder die Plätze?", o: ["Damit jeder mal in die warme Mitte kommt", "Weil sie spielen wollen", "Weil sie Fische suchen"], a: 0, h: "Wer außen stand, darf nach innen, wo es wärmer ist." },
    { t: "mc", q: "Warum ist der Vater am Ende so hungrig? (Denk nach!)", o: ["Weil das Küken sein Futter frisst", "Weil er etwa zwei Monate nichts gefressen hat", "Weil es im Meer keine Fische gibt"], a: 1, h: "So brütet es etwa zwei Monate lang – ohne etwas zu fressen!" }
  ]},

{ id: 23, stufe: 3, emoji: "🗳️", titel: "Die Klassensprecherwahl",
  text: [
    "In der Klasse 4b wird ein neuer Klassensprecher gewählt. Drei Kinder wollen das Amt übernehmen: Hannah, Deniz und Paul. Jedes Kind darf eine kurze Rede halten.",
    "Paul verspricht: „Wenn ihr mich wählt, gibt es keine Hausaufgaben mehr!“ Einige Kinder jubeln. Frau Schulz lächelt nur und sagt: „Das kann ein Klassensprecher leider nicht entscheiden.“",
    "Hannah sagt: „Ich möchte, dass sich alle in unserer Klasse wohlfühlen. Wenn es Streit gibt, helfe ich, ihn zu lösen.“",
    "Deniz erzählt von seiner Idee: „Ich wünsche mir eine Lese-Ecke mit Kissen und Büchern. Ich frage den Förderverein, ob er uns Geld dafür gibt.“",
    "Dann schreibt jedes Kind einen Namen auf einen Zettel. Die Zettel kommen in eine Schachtel. Am Ende werden die Stimmen gezählt: Hannah bekommt 11 Stimmen, Deniz 9 und Paul 5. Hannah ist die neue Klassensprecherin. Deniz wird ihr Stellvertreter. Gemeinsam wollen sie die Lese-Ecke einrichten."
  ],
  fragen: [
    { t: "mc", q: "Was verspricht Paul?", o: ["Eine Lese-Ecke", "Keine Hausaufgaben mehr", "Mehr Sport"], a: 1, h: "„Wenn ihr mich wählt, gibt es keine Hausaufgaben mehr!“" },
    { t: "yn", q: "Kann ein Klassensprecher die Hausaufgaben abschaffen?", a: false, h: "„Das kann ein Klassensprecher leider nicht entscheiden.“" },
    { t: "mc", q: "Was ist Hannah wichtig?", o: ["Dass sich alle wohlfühlen", "Dass sie berühmt wird", "Dass es mehr Pausen gibt"], a: 0, h: "„Ich möchte, dass sich alle in unserer Klasse wohlfühlen." },
    { t: "tap", q: "Wen will Deniz um Geld fragen?", a: "Förderverein", h: "Ich frage den Förderverein, ob er uns Geld dafür gibt." },
    { t: "mc", q: "Wie viele Stimmen bekommt Hannah?", o: ["5", "9", "11"], a: 2, h: "Hannah bekommt 11 Stimmen" },
    { t: "yn", q: "Bekommt Deniz auch eine Aufgabe?", a: true, h: "Deniz wird ihr Stellvertreter." },
    { t: "mc", q: "Warum hat Paul wohl so wenige Stimmen bekommen? (Denk nach!)", o: ["Weil er sein Versprechen nicht halten kann", "Weil er zu leise gesprochen hat", "Weil er krank war"], a: 0, h: "„Das kann ein Klassensprecher leider nicht entscheiden.“" }
  ]},

{ id: 24, stufe: 3, emoji: "🌋", titel: "Vulkane",
  text: [
    "Tief unter unseren Füßen ist es unvorstellbar heiß. Dort ist das Gestein so heiß, dass es geschmolzen ist. Dieses flüssige Gestein nennt man Magma.",
    "Ein Vulkan ist eine Stelle, an der das Magma bis an die Erdoberfläche kommen kann. Im Inneren des Vulkans sammelt es sich in einer großen Kammer. Wenn der Druck zu groß wird, bricht der Vulkan aus. Dann schießen Asche, Gase und Steine in die Luft. Das glühende Gestein, das aus dem Vulkan fließt, heißt Lava. Lava kann über 1000 Grad heiß sein.",
    "Wenn die Lava abkühlt, wird sie wieder fest und hart. Mit jedem Ausbruch wird der Berg ein Stück höher. So sind viele Berge und sogar ganze Inseln entstanden, zum Beispiel Island und Hawaii.",
    "Auch in Deutschland gab es früher Vulkane, zum Beispiel in der Eifel. Heute sind sie erloschen. Manche Krater sind mit Wasser gefüllt. Diese runden Seen nennt man Maare."
  ],
  fragen: [
    { t: "tap", q: "Wie heißt das flüssige Gestein tief unter der Erde?", a: "Magma", h: "Dieses flüssige Gestein nennt man Magma." },
    { t: "mc", q: "Wann bricht ein Vulkan aus?", o: ["Wenn es regnet", "Wenn der Druck zu groß wird", "Wenn die Sonne scheint"], a: 1, h: "Wenn der Druck zu groß wird, bricht der Vulkan aus." },
    { t: "yn", q: "Heißt das Gestein, das aus dem Vulkan fließt, Magma?", a: false, h: "Das glühende Gestein, das aus dem Vulkan fließt, heißt Lava." },
    { t: "mc", q: "Wie heiß kann Lava sein?", o: ["Über 100 Grad", "Über 1000 Grad", "Über 100 000 Grad"], a: 1, h: "Lava kann über 1000 Grad heiß sein." },
    { t: "mc", q: "Welche Inseln sind durch Vulkane entstanden?", o: ["Island und Hawaii", "Sylt und Rügen", "England und Irland"], a: 0, h: "zum Beispiel Island und Hawaii" },
    { t: "yn", q: "Gibt es in der Eifel heute noch aktive Vulkane?", a: false, h: "Heute sind sie erloschen." },
    { t: "mc", q: "Was ist ein Maar?", o: ["Ein runder See in einem alten Krater", "Ein heißer Stein", "Ein Berg aus Asche"], a: 0, h: "Manche Krater sind mit Wasser gefüllt. Diese runden Seen nennt man Maare." }
  ]},

{ id: 25, stufe: 3, emoji: "🪢", titel: "Der Streit",
  text: [
    "Lina und Sophie sind seit dem Kindergarten beste Freundinnen. Doch an diesem Dienstag ist alles anders. In der Pause spielen sie Seilspringen. Sophie tritt aus Versehen auf Linas neues Springseil, und der Griff bricht ab.",
    "„Das hast du mit Absicht gemacht!“, schreit Lina. „Gar nicht wahr!“, ruft Sophie zurück. Beide sind wütend und reden den ganzen Tag kein Wort mehr miteinander.",
    "Am Abend kann Lina nicht einschlafen. Sie denkt an Sophie. Eigentlich weiß sie, dass Sophie so etwas nie mit Absicht tun würde. Und sie selbst war sehr gemein.",
    "Am nächsten Morgen wartet Lina vor dem Schultor. Als Sophie kommt, sagt Lina leise: „Es tut mir leid, dass ich dich angeschrien habe.“ Sophie streckt ihr eine kleine Tüte entgegen. Darin ist ein neuer Griff für das Springseil. „Den hat mein Papa im Bastelladen gefunden“, sagt sie. „Es tut mir auch leid.“ Die beiden umarmen sich. In der Pause springen sie wieder zusammen Seil."
  ],
  fragen: [
    { t: "mc", q: "Seit wann sind Lina und Sophie Freundinnen?", o: ["Seit der ersten Klasse", "Seit dem Kindergarten", "Seit einem Jahr"], a: 1, h: "Lina und Sophie sind seit dem Kindergarten beste Freundinnen." },
    { t: "yn", q: "Hat Sophie das Springseil mit Absicht kaputt gemacht?", a: false, h: "Sophie tritt aus Versehen auf Linas neues Springseil" },
    { t: "tap", q: "Welcher Teil des Springseils bricht ab?", a: "Griff", h: "und der Griff bricht ab" },
    { t: "mc", q: "Warum kann Lina abends nicht einschlafen? (Denk nach!)", o: ["Weil sie Hunger hat", "Weil sie über den Streit nachdenkt", "Weil es zu laut ist"], a: 1, h: "Am Abend kann Lina nicht einschlafen. Sie denkt an Sophie." },
    { t: "mc", q: "Was bringt Sophie am nächsten Morgen mit?", o: ["Ein neues Springseil", "Einen neuen Griff", "Süßigkeiten"], a: 1, h: "Darin ist ein neuer Griff für das Springseil." },
    { t: "yn", q: "Entschuldigen sich beide Mädchen?", a: true, h: "„Es tut mir auch leid.“" },
    { t: "mc", q: "Was kann man aus der Geschichte lernen?", o: ["Man sollte nie mit Freunden spielen", "Nach einem Streit kann man sich entschuldigen und vertragen", "Man muss immer recht haben"], a: 1, h: "Die beiden umarmen sich." }
  ]},

{ id: 26, stufe: 3, emoji: "🦜", titel: "Der Regenwald",
  text: [
    "Regenwälder wachsen in der Nähe des Äquators, zum Beispiel in Südamerika, Afrika und Asien. Dort ist es das ganze Jahr warm und es regnet fast jeden Tag. Deshalb wachsen die Pflanzen sehr schnell und sehr hoch.",
    "Ein Regenwald hat mehrere Stockwerke, fast wie ein Haus. Ganz unten auf dem Boden ist es dunkel, weil kaum Sonnenlicht durch die Blätter kommt. Hier leben Ameisen, Käfer und Spinnen. In der Mitte klettern Affen und Schlangen durch die Äste. Ganz oben, im Kronendach, wohnen bunte Vögel wie Papageien und Tukane.",
    "In den Regenwäldern lebt mehr als die Hälfte aller Tier- und Pflanzenarten der Erde. Viele davon kennt man noch gar nicht.",
    "Leider werden jedes Jahr große Flächen Regenwald abgeholzt. Man braucht das Holz, oder man will dort Felder anlegen. Dadurch verlieren viele Tiere ihr Zuhause. Wer Papier spart und Recyclingpapier benutzt, kann helfen, den Regenwald zu schützen."
  ],
  fragen: [
    { t: "yn", q: "Regnet es im Regenwald nur selten?", a: false, h: "es regnet fast jeden Tag" },
    { t: "mc", q: "Womit wird der Regenwald im Text verglichen?", o: ["Mit einem Haus mit Stockwerken", "Mit einem Schiff", "Mit einem Garten"], a: 0, h: "Ein Regenwald hat mehrere Stockwerke, fast wie ein Haus." },
    { t: "mc", q: "Warum ist es am Boden dunkel?", o: ["Weil kaum Sonnenlicht durch die Blätter kommt", "Weil dort immer Nacht ist", "Weil dort Höhlen sind"], a: 0, h: "weil kaum Sonnenlicht durch die Blätter kommt" },
    { t: "tap", q: "Wie heißt das oberste Stockwerk des Regenwalds?", a: "Kronendach", h: "Ganz oben, im Kronendach, wohnen bunte Vögel wie Papageien und Tukane." },
    { t: "mc", q: "Welche Tiere wohnen ganz oben?", o: ["Ameisen und Käfer", "Papageien und Tukane", "Affen und Schlangen"], a: 1, h: "wohnen bunte Vögel wie Papageien und Tukane" },
    { t: "yn", q: "Kennt man schon alle Tiere im Regenwald?", a: false, h: "Viele davon kennt man noch gar nicht." },
    { t: "mc", q: "Wie kannst du helfen, den Regenwald zu schützen?", o: ["Mehr Papier benutzen", "Papier sparen und Recyclingpapier benutzen", "Mehr Holz kaufen"], a: 1, h: "Wer Papier spart und Recyclingpapier benutzt, kann helfen, den Regenwald zu schützen." }
  ]},

{ id: 27, stufe: 3, emoji: "🍭", titel: "Das Eis am Stiel",
  text: [
    "Viele Erfindungen sind durch Zufall entstanden. Eine davon hat ein elfjähriger Junge gemacht.",
    "Im Jahr 1905 lebte Frank Epperson in San Francisco in Amerika. An einem kalten Winterabend mischte er sich auf der Veranda ein süßes Getränk aus Pulver und Wasser. Zum Umrühren benutzte er einen Holzstab. Dann vergaß er den Becher draußen und ging ins Bett.",
    "In der Nacht wurde es sehr kalt. Am nächsten Morgen war das Getränk gefroren, und der Stab steckte fest darin. Frank zog am Stab und hielt plötzlich ein Eis in der Hand. Er probierte es – es schmeckte köstlich!",
    "Frank zeigte seine Erfindung seinen Freunden. Viele Jahre später, als er erwachsen war, verkaufte er das Eis am Stiel auch an andere Leute. Heute isst man es auf der ganzen Welt. Und alles begann mit einem vergessenen Becher."
  ],
  fragen: [
    { t: "mc", q: "Wie alt war Frank bei seiner Erfindung?", o: ["Neun Jahre", "Elf Jahre", "Fünfzehn Jahre"], a: 1, h: "Eine davon hat ein elfjähriger Junge gemacht." },
    { t: "yn", q: "Hat Frank das Eis absichtlich erfunden?", a: false, h: "Viele Erfindungen sind durch Zufall entstanden." },
    { t: "mc", q: "In welcher Stadt lebte Frank?", o: ["New York", "San Francisco", "Berlin"], a: 1, h: "lebte Frank Epperson in San Francisco in Amerika" },
    { t: "tap", q: "Womit hat Frank umgerührt?", a: "Holzstab", h: "Zum Umrühren benutzte er einen Holzstab." },
    { t: "mc", q: "Warum war das Getränk am Morgen gefroren?", o: ["Weil Frank es in den Kühlschrank gestellt hat", "Weil es in der Nacht draußen sehr kalt war", "Weil Eis hineingefallen ist"], a: 1, h: "In der Nacht wurde es sehr kalt." },
    { t: "yn", q: "Hat Frank das Eis sofort an andere Leute verkauft?", a: false, h: "Viele Jahre später, als er erwachsen war, verkaufte er das Eis am Stiel auch an andere Leute." },
    { t: "mc", q: "Was ist die wichtigste Aussage des Textes?", o: ["Eis ist ungesund", "Manche Erfindungen entstehen durch Zufall", "Man soll nichts draußen vergessen"], a: 1, h: "Viele Erfindungen sind durch Zufall entstanden." }
  ]},

{ id: 28, stufe: 3, emoji: "🐱", titel: "Die Rettung des Kätzchens",
  text: [
    "Es ist ein stürmischer Herbsttag. Amira geht nach der Schule mit ihrem Hund Bruno spazieren. Plötzlich bleibt Bruno stehen und bellt laut in Richtung eines hohen Baumes. Amira schaut nach oben. Ganz oben auf einem dünnen Ast sitzt ein kleines graues Kätzchen und miaut kläglich.",
    "„Komm runter!“, ruft Amira. Doch das Kätzchen bewegt sich nicht. Es hat zu große Angst. Amira überlegt. Selbst hinaufzuklettern ist zu gefährlich, denn der Ast ist viel zu dünn. Sie bindet Bruno an einen Zaun, damit er die Katze nicht noch mehr erschreckt. Dann läuft sie zum nächsten Haus und klingelt.",
    "Ein älterer Mann öffnet. Er hört Amira zu und holt sofort eine lange Leiter. Vorsichtig steigt er hinauf und nimmt das Kätzchen in seine Hand. Am Halsband hängt ein kleines Schild mit einer Telefonnummer. Amira ruft die Nummer an. Eine Frau meldet sich und bedankt sich überglücklich. Ihr Kätzchen heißt Wolke und war schon seit zwei Tagen verschwunden."
  ],
  fragen: [
    { t: "mc", q: "Wer entdeckt das Kätzchen zuerst?", o: ["Amira", "Der Hund Bruno", "Der ältere Mann"], a: 1, h: "Plötzlich bleibt Bruno stehen und bellt laut in Richtung eines hohen Baumes." },
    { t: "yn", q: "Klettert Amira selbst auf den Baum?", a: false, h: "Selbst hinaufzuklettern ist zu gefährlich, denn der Ast ist viel zu dünn." },
    { t: "mc", q: "Warum bindet Amira Bruno an den Zaun?", o: ["Damit er nicht wegläuft", "Damit er die Katze nicht noch mehr erschreckt", "Damit er sich ausruht"], a: 1, h: "damit er die Katze nicht noch mehr erschreckt" },
    { t: "tap", q: "Was holt der Mann, um das Kätzchen zu retten?", a: "Leiter", h: "holt sofort eine lange Leiter" },
    { t: "mc", q: "Wie findet Amira die Besitzerin?", o: ["Über eine Telefonnummer am Halsband", "Über einen Zettel am Baum", "Die Besitzerin kommt zufällig vorbei"], a: 0, h: "Am Halsband hängt ein kleines Schild mit einer Telefonnummer." },
    { t: "yn", q: "War das Kätzchen erst seit einer Stunde weg?", a: false, h: "war schon seit zwei Tagen verschwunden" },
    { t: "mc", q: "Wie würdest du Amira beschreiben? (Denk nach!)", o: ["Klug und hilfsbereit", "Ängstlich und faul", "Frech und laut"], a: 0, h: "Amira überlegt." }
  ]},

{ id: 29, stufe: 3, emoji: "❤️", titel: "Das Herz",
  text: [
    "Leg deine Hand auf deine Brust, etwas links von der Mitte. Spürst du ein Pochen? Das ist dein Herz. Es ist ungefähr so groß wie deine Faust.",
    "Das Herz ist ein Muskel, der niemals Pause macht. Es arbeitet wie eine Pumpe. Mit jedem Schlag drückt es Blut durch die Adern in den ganzen Körper. Das Blut bringt Sauerstoff und Nährstoffe zu allen Teilen des Körpers, zum Beispiel zu den Muskeln und zum Gehirn.",
    "Bei Kindern schlägt das Herz ungefähr 80- bis 100-mal in der Minute, bei Erwachsenen etwas langsamer. Wenn du rennst oder Fußball spielst, schlägt es viel schneller. Deine Muskeln brauchen dann mehr Sauerstoff.",
    "Damit dein Herz gesund bleibt, kannst du einiges tun: Bewege dich viel, am besten draußen. Iss viel Obst und Gemüse und trinke genug Wasser. Auch ausreichend Schlaf tut deinem Herzen gut."
  ],
  fragen: [
    { t: "mc", q: "Wie groß ist das Herz ungefähr?", o: ["So groß wie eine Erbse", "So groß wie deine Faust", "So groß wie ein Fußball"], a: 1, h: "Es ist ungefähr so groß wie deine Faust." },
    { t: "yn", q: "Macht das Herz nachts eine Pause?", a: false, h: "Das Herz ist ein Muskel, der niemals Pause macht." },
    { t: "tap", q: "Womit wird das Herz verglichen? Es arbeitet wie eine …", a: "Pumpe", h: "Es arbeitet wie eine Pumpe." },
    { t: "mc", q: "Was bringt das Blut zu allen Teilen des Körpers?", o: ["Sauerstoff und Nährstoffe", "Wasser und Salz", "Luft und Licht"], a: 0, h: "Das Blut bringt Sauerstoff und Nährstoffe zu allen Teilen des Körpers" },
    { t: "yn", q: "Schlägt das Herz bei Erwachsenen schneller als bei Kindern?", a: false, h: "bei Erwachsenen etwas langsamer" },
    { t: "mc", q: "Warum schlägt das Herz beim Rennen schneller?", o: ["Weil man Angst hat", "Weil die Muskeln mehr Sauerstoff brauchen", "Weil es kalt ist"], a: 1, h: "Deine Muskeln brauchen dann mehr Sauerstoff." },
    { t: "mc", q: "Was ist NICHT gut für dein Herz? (Denk nach!)", o: ["Viel Bewegung", "Genug Schlaf", "Den ganzen Tag nur sitzen"], a: 2, h: "Bewege dich viel, am besten draußen." }
  ]},

{ id: 30, stufe: 3, emoji: "⏳", titel: "Die Zeitkapsel",
  text: [
    "Zum Ende der vierten Klasse hat Herr Albers eine besondere Idee. „Wir bauen eine Zeitkapsel“, sagt er. Die Kinder schauen ihn fragend an. Herr Albers erklärt: „Eine Zeitkapsel ist ein Behälter, in den man Dinge aus der heutigen Zeit legt. Dann vergräbt man sie. Erst viele Jahre später wird sie wieder geöffnet.“",
    "Jedes Kind darf etwas in die Kapsel legen. Merve schreibt einen Brief an sich selbst. Darin steht, was sie später einmal werden möchte: Tierärztin. Jakob legt ein Foto von seiner Fußballmannschaft hinein. Yusuf malt ein Bild von der Schule. Außerdem kommen eine Tageszeitung und eine Liste mit den Lieblingsliedern der Klasse dazu.",
    "Die Kapsel ist eine Metalldose. Herr Albers verschließt sie gut, damit kein Wasser hineinkommt. Dann vergraben die Kinder sie zusammen mit dem Hausmeister unter dem großen Kastanienbaum auf dem Schulhof.",
    "„In zehn Jahren treffen wir uns hier wieder“, sagt Herr Albers. „Dann seid ihr schon fast erwachsen.“ Die Kinder lachen. Sie können sich kaum vorstellen, wie sie dann sein werden."
  ],
  fragen: [
    { t: "mc", q: "Was ist eine Zeitkapsel?", o: ["Ein Raumschiff", "Ein Behälter mit Dingen aus der heutigen Zeit", "Eine besondere Uhr"], a: 1, h: "Eine Zeitkapsel ist ein Behälter, in den man Dinge aus der heutigen Zeit legt." },
    { t: "tap", q: "Was möchte Merve später werden?", a: "Tierärztin", h: "Darin steht, was sie später einmal werden möchte: Tierärztin." },
    { t: "yn", q: "Legt Jakob ein Bild von der Schule hinein?", a: false, h: "Jakob legt ein Foto von seiner Fußballmannschaft hinein." },
    { t: "mc", q: "Warum verschließt Herr Albers die Dose gut?", o: ["Damit niemand sie stiehlt", "Damit kein Wasser hineinkommt", "Damit sie leichter ist"], a: 1, h: "damit kein Wasser hineinkommt" },
    { t: "mc", q: "Wo wird die Kapsel vergraben?", o: ["Im Schulgarten", "Unter dem Kastanienbaum auf dem Schulhof", "Neben der Turnhalle"], a: 1, h: "unter dem großen Kastanienbaum auf dem Schulhof" },
    { t: "yn", q: "Wird die Kapsel schon nach einem Jahr geöffnet?", a: false, h: "„In zehn Jahren treffen wir uns hier wieder“" },
    { t: "mc", q: "Wie alt sind die Kinder ungefähr, wenn sie die Kapsel öffnen? (Denk nach!)", o: ["Etwa 12 Jahre", "Etwa 20 Jahre", "Etwa 40 Jahre"], a: 1, h: "„Dann seid ihr schon fast erwachsen.“" }
  ]}
];
