// Lesen & Verstehen – @ Joschy
// Stufe 2 – weitere Texte (55–78)
window.TEXTE.push(
{ id: 55, stufe: 2, emoji: "🐜", titel: "Ameisen",
  text: [
    "Ameisen gehören zu den fleißigsten Tieren der Welt. Sie leben in großen Gruppen zusammen, die man Staaten nennt. In einem Ameisenstaat können Tausende Ameisen wohnen.",
    "Jeder Staat hat eine Königin. Sie legt die Eier. Die anderen Ameisen haben verschiedene Aufgaben. Manche kümmern sich um die Larven, andere bauen am Nest oder suchen Futter.",
    "Ameisen sind sehr stark. Eine Ameise kann ein Vielfaches ihres eigenen Gewichts tragen. Wenn eine Ameise Futter findet, hinterlässt sie auf dem Rückweg eine Duftspur. Die anderen Ameisen riechen die Spur und finden so den Weg zum Futter. Deshalb laufen Ameisen oft in einer langen Reihe hintereinander."
  ],
  fragen: [
    { t: "tap", q: "Wie nennt man die großen Gruppen der Ameisen?", a: "Staaten", h: "die man Staaten nennt" },
    { t: "mc", q: "Wer legt die Eier?", o: ["Alle Ameisen", "Die Königin", "Die stärkste Ameise"], a: 1, h: "Jeder Staat hat eine Königin. Sie legt die Eier." },
    { t: "yn", q: "Haben alle Ameisen dieselbe Aufgabe?", a: false, h: "Die anderen Ameisen haben verschiedene Aufgaben." },
    { t: "yn", q: "Kann eine Ameise mehr tragen, als sie selbst wiegt?", a: true, h: "Eine Ameise kann ein Vielfaches ihres eigenen Gewichts tragen." },
    { t: "mc", q: "Was hinterlässt eine Ameise auf dem Rückweg?", o: ["Krümel", "Eine Duftspur", "Fußabdrücke"], a: 1, h: "hinterlässt sie auf dem Rückweg eine Duftspur" },
    { t: "mc", q: "Warum laufen Ameisen oft in einer Reihe? (Denk nach!)", o: ["Weil sie der Duftspur folgen", "Weil sie spielen", "Weil die Königin es befiehlt"], a: 0, h: "Die anderen Ameisen riechen die Spur und finden so den Weg zum Futter." }
  ]},

{ id: 56, stufe: 2, emoji: "🔑", titel: "Der verschwundene Schlüssel",
  text: [
    "„Ich finde meinen Autoschlüssel nicht!“, ruft Papa. Er muss in zehn Minuten los. Die ganze Familie sucht. Mama schaut in alle Jackentaschen. Lina sucht unter dem Sofa. Nichts.",
    "Da hat Linas Bruder Emre eine Idee. „Wir müssen wie Detektive denken“, sagt er. „Papa, was hast du gemacht, als du gestern nach Hause gekommen bist?“ Papa überlegt. „Ich habe die Einkäufe in die Küche getragen und den Joghurt in den Kühlschrank gestellt.“",
    "Emre öffnet den Kühlschrank. Und tatsächlich: Neben dem Joghurt liegt der Schlüssel! Alle lachen. Papa sagt: „Gut, dass wir einen Detektiv in der Familie haben.“"
  ],
  fragen: [
    { t: "mc", q: "Was sucht Papa?", o: ["Seine Brille", "Seinen Autoschlüssel", "Sein Handy"], a: 1, h: "„Ich finde meinen Autoschlüssel nicht!“" },
    { t: "mc", q: "Wie viel Zeit hat Papa noch?", o: ["Zwei Minuten", "Zehn Minuten", "Eine Stunde"], a: 1, h: "Er muss in zehn Minuten los." },
    { t: "yn", q: "Findet Lina den Schlüssel unter dem Sofa?", a: false, h: "Lina sucht unter dem Sofa. Nichts." },
    { t: "tap", q: "Wie wollen die Kinder denken? Wie …", a: "Detektive", h: "„Wir müssen wie Detektive denken“" },
    { t: "mc", q: "Was fragt Emre seinen Papa?", o: ["Was er gestern beim Nachhausekommen gemacht hat", "Wo er arbeitet", "Ob er einen zweiten Schlüssel hat"], a: 0, h: "was hast du gemacht, als du gestern nach Hause gekommen bist?" },
    { t: "mc", q: "Wo liegt der Schlüssel?", o: ["Im Auto", "Im Kühlschrank", "In der Jacke"], a: 1, h: "Emre öffnet den Kühlschrank." },
    { t: "yn", q: "Hat Papa den Schlüssel wohl aus Versehen dorthin gelegt? (Denk nach!)", a: true, h: "den Joghurt in den Kühlschrank gestellt" }
  ]},

{ id: 57, stufe: 2, emoji: "🏞️", titel: "Die Klassenfahrt",
  text: [
    "Die Klasse 4c fährt für drei Tage in eine Jugendherberge am See. Alle sind aufgeregt. Für viele Kinder ist es das erste Mal, dass sie ohne ihre Eltern verreisen.",
    "Am ersten Tag wandern die Kinder um den See. Am Nachmittag bauen sie Flöße aus Holz und Seilen. Das Floß von Tom und Yara geht leider unter, aber alle lachen darüber.",
    "In der Nacht können die Kinder kaum schlafen. Sie flüstern und kichern noch lange. Am zweiten Abend gibt es eine Nachtwanderung mit Taschenlampen. Am dritten Tag fahren alle müde, aber glücklich nach Hause. Paula sagt: „Das war die beste Klassenfahrt der Welt!“"
  ],
  fragen: [
    { t: "mc", q: "Wie lange dauert die Klassenfahrt?", o: ["Einen Tag", "Drei Tage", "Eine Woche"], a: 1, h: "fährt für drei Tage in eine Jugendherberge am See" },
    { t: "tap", q: "Wo übernachten die Kinder? In einer …", a: "Jugendherberge", h: "fährt für drei Tage in eine Jugendherberge am See" },
    { t: "yn", q: "Verreisen alle Kinder zum ersten Mal ohne Eltern?", a: false, h: "Für viele Kinder ist es das erste Mal" },
    { t: "mc", q: "Woraus bauen die Kinder Flöße?", o: ["Aus Plastik", "Aus Holz und Seilen", "Aus Pappe"], a: 1, h: "Am Nachmittag bauen sie Flöße aus Holz und Seilen." },
    { t: "mc", q: "Was passiert mit dem Floß von Tom und Yara?", o: ["Es gewinnt", "Es geht unter", "Es treibt weg"], a: 1, h: "Das Floß von Tom und Yara geht leider unter" },
    { t: "mc", q: "Wann gibt es die Nachtwanderung?", o: ["Am ersten Abend", "Am zweiten Abend", "Am dritten Abend"], a: 1, h: "Am zweiten Abend gibt es eine Nachtwanderung mit Taschenlampen." },
    { t: "yn", q: "Hat Paula die Fahrt gefallen?", a: true, h: "„Das war die beste Klassenfahrt der Welt!“" }
  ]},

{ id: 58, stufe: 2, emoji: "🪱", titel: "Der Regenwurm",
  text: [
    "Der Regenwurm lebt in der Erde. Er hat keine Augen, keine Ohren und keine Beine. Trotzdem kann er Licht spüren und sich gut bewegen. Sein Körper besteht aus vielen kleinen Ringen. Er zieht sich lang und wieder kurz und kriecht so durch den Boden.",
    "Der Regenwurm hat keine Lunge. Er atmet durch seine Haut. Deshalb muss seine Haut immer feucht sein. Wenn es lange regnet, kommen viele Regenwürmer an die Oberfläche. Daher hat er auch seinen Namen.",
    "Regenwürmer sind sehr nützlich. Sie fressen alte Blätter und machen daraus gute Erde. Mit ihren Gängen lockern sie den Boden. So bekommen die Pflanzenwurzeln mehr Luft und Wasser."
  ],
  fragen: [
    { t: "yn", q: "Hat der Regenwurm Augen?", a: false, h: "Er hat keine Augen, keine Ohren und keine Beine." },
    { t: "tap", q: "Woraus besteht sein Körper? Aus vielen kleinen …", a: "Ringen", h: "Sein Körper besteht aus vielen kleinen Ringen." },
    { t: "mc", q: "Womit atmet der Regenwurm?", o: ["Mit der Lunge", "Mit der Haut", "Mit dem Mund"], a: 1, h: "Er atmet durch seine Haut." },
    { t: "mc", q: "Warum muss seine Haut feucht sein?", o: ["Damit er atmen kann", "Damit er glänzt", "Damit er nicht friert"], a: 0, h: "Deshalb muss seine Haut immer feucht sein." },
    { t: "mc", q: "Woher hat der Regenwurm seinen Namen?", o: ["Weil er gern badet", "Weil er bei Regen an die Oberfläche kommt", "Weil er Wasser trinkt"], a: 1, h: "Wenn es lange regnet, kommen viele Regenwürmer an die Oberfläche." },
    { t: "yn", q: "Sind Regenwürmer schädlich für den Garten?", a: false, h: "Regenwürmer sind sehr nützlich." },
    { t: "mc", q: "Was machen Regenwürmer aus alten Blättern?", o: ["Gute Erde", "Nester", "Steine"], a: 0, h: "Sie fressen alte Blätter und machen daraus gute Erde." }
  ]},

{ id: 59, stufe: 2, emoji: "🐇", titel: "Der Hase und der Igel",
  text: [
    "An einem Sonntagmorgen geht der Igel über das Feld. Da trifft er den Hasen. Der Hase lacht über die kurzen, krummen Beine des Igels. Der Igel ärgert sich und sagt: „Ich wette, dass ich schneller laufen kann als du!“ Der Hase lacht noch lauter, aber er nimmt die Wette an.",
    "Der Igel ist schlau. Er holt seine Frau, die genauso aussieht wie er. Sie versteckt sich am Ende des Ackers. Der Igel selbst stellt sich an den Anfang.",
    "Dann geht es los. Der Hase rennt, so schnell er kann. Als er am Ende ankommt, ruft die Igelfrau: „Ich bin schon da!“ Der Hase kann es nicht glauben. Er rennt zurück. Dort ruft der Igel: „Ich bin schon da!“ Immer wieder rennt der Hase hin und her, bis er völlig erschöpft aufgibt."
  ],
  fragen: [
    { t: "mc", q: "Worüber lacht der Hase?", o: ["Über die Stacheln des Igels", "Über die kurzen, krummen Beine des Igels", "Über die Nase des Igels"], a: 1, h: "Der Hase lacht über die kurzen, krummen Beine des Igels." },
    { t: "tap", q: "Was schlägt der Igel vor? Eine …", a: "Wette", h: "„Ich wette, dass ich schneller laufen kann als du!“" },
    { t: "yn", q: "Ist der Igel schneller als der Hase?", a: false, h: "Der Igel ist schlau." },
    { t: "mc", q: "Wer versteckt sich am Ende des Ackers?", o: ["Der Igel", "Die Frau des Igels", "Ein Fuchs"], a: 1, h: "Sie versteckt sich am Ende des Ackers." },
    { t: "mc", q: "Warum funktioniert der Trick? (Denk nach!)", o: ["Weil die Igelfrau genauso aussieht wie der Igel", "Weil der Hase schlecht sieht", "Weil es dunkel ist"], a: 0, h: "Er holt seine Frau, die genauso aussieht wie er." },
    { t: "yn", q: "Läuft der Hase nur einmal?", a: false, h: "Immer wieder rennt der Hase hin und her" },
    { t: "mc", q: "Was lernt man aus der Geschichte?", o: ["Man soll andere nicht auslachen", "Hasen sind langsam", "Man soll nie wetten"], a: 0, h: "Der Hase lacht über die kurzen, krummen Beine des Igels." }
  ]},

{ id: 60, stufe: 2, emoji: "🐋", titel: "Wale",
  text: [
    "Wale leben im Meer, aber sie sind keine Fische. Wale sind Säugetiere, genau wie Hunde, Kühe und wir Menschen. Ihre Babys trinken Milch bei der Mutter.",
    "Wale können nicht unter Wasser atmen. Sie müssen immer wieder an die Oberfläche schwimmen, um Luft zu holen. Dazu haben sie oben auf dem Kopf ein Atemloch. Wenn ein Wal ausatmet, spritzt eine Fontäne aus Wasser und Luft in die Höhe.",
    "Der Blauwal ist das größte Tier, das jemals auf der Erde gelebt hat. Er ist größer als jeder Dinosaurier. Trotzdem frisst er nur winzige Krebse. Davon frisst er aber jeden Tag mehrere Tonnen."
  ],
  fragen: [
    { t: "yn", q: "Sind Wale Fische?", a: false, h: "Wale leben im Meer, aber sie sind keine Fische." },
    { t: "tap", q: "Was sind Wale? Sie sind …", a: "Säugetiere", h: "Wale sind Säugetiere" },
    { t: "mc", q: "Was trinken Walbabys?", o: ["Meerwasser", "Milch", "Nichts"], a: 1, h: "Ihre Babys trinken Milch bei der Mutter." },
    { t: "yn", q: "Können Wale unter Wasser atmen?", a: false, h: "Wale können nicht unter Wasser atmen." },
    { t: "mc", q: "Wo ist das Atemloch?", o: ["Am Bauch", "Oben auf dem Kopf", "Am Schwanz"], a: 1, h: "Dazu haben sie oben auf dem Kopf ein Atemloch." },
    { t: "mc", q: "Welches ist das größte Tier, das jemals gelebt hat?", o: ["Der Elefant", "Der Blauwal", "Der Tyrannosaurus"], a: 1, h: "Der Blauwal ist das größte Tier, das jemals auf der Erde gelebt hat." },
    { t: "mc", q: "Was frisst der Blauwal?", o: ["Haie", "Winzige Krebse", "Algen"], a: 1, h: "Trotzdem frisst er nur winzige Krebse." }
  ]},

{ id: 61, stufe: 2, emoji: "🥞", titel: "Dosa am Sonntag",
  text: [
    "Jeden Sonntag macht Ammamma, die Oma von Kavin, Dosa zum Frühstück. Dosa sind dünne, knusprige Pfannkuchen aus Südindien und Sri Lanka.",
    "Den Teig hat Ammamma schon zwei Tage vorher gemacht. Sie hat Reis und Linsen in Wasser eingeweicht und dann ganz fein gemahlen. Über Nacht ist der Teig ein bisschen sauer geworden. Das muss so sein!",
    "Heute darf Kavin zum ersten Mal helfen. Ammamma gießt eine Kelle Teig in die heiße Pfanne. Mit der Rückseite der Kelle verteilt sie ihn in Kreisen, bis er ganz dünn ist. Kavin versucht es auch. Sein erster Dosa wird ein bisschen dick und krumm. „Der erste ist immer für den Koch“, lacht Ammamma. Dazu gibt es Kokos-Chutney und Sambar."
  ],
  fragen: [
    { t: "mc", q: "Wann macht Ammamma Dosa?", o: ["Jeden Freitag", "Jeden Sonntag", "Nur an Geburtstagen"], a: 1, h: "Jeden Sonntag macht Ammamma, die Oma von Kavin, Dosa zum Frühstück." },
    { t: "tap", q: "Wer ist Ammamma? Kavins …", a: "Oma", h: "die Oma von Kavin" },
    { t: "mc", q: "Woraus ist der Teig?", o: ["Aus Mehl und Eiern", "Aus Reis und Linsen", "Aus Kartoffeln"], a: 1, h: "Sie hat Reis und Linsen in Wasser eingeweicht" },
    { t: "yn", q: "Ist es schlimm, dass der Teig sauer geworden ist?", a: false, h: "Das muss so sein!" },
    { t: "mc", q: "Womit verteilt Ammamma den Teig?", o: ["Mit einem Löffel", "Mit der Rückseite der Kelle", "Mit den Fingern"], a: 1, h: "Mit der Rückseite der Kelle verteilt sie ihn in Kreisen" },
    { t: "yn", q: "Wird Kavins erster Dosa perfekt?", a: false, h: "Sein erster Dosa wird ein bisschen dick und krumm." },
    { t: "mc", q: "Was gibt es zu den Dosa?", o: ["Marmelade", "Kokos-Chutney und Sambar", "Ketchup"], a: 1, h: "Dazu gibt es Kokos-Chutney und Sambar." }
  ]},

{ id: 62, stufe: 2, emoji: "🧸", titel: "Der Flohmarkt",
  text: [
    "Paul hat ein Ziel: Er möchte sich einen Fußball kaufen, der 20 Euro kostet. Aber er hat nur sechs Euro in seiner Spardose. Mama schlägt vor: „Verkauf doch Sachen, die du nicht mehr brauchst, auf dem Flohmarkt!“",
    "Paul sucht in seinem Zimmer. Er findet alte Bücher, ein Puzzle, Spielzeugautos und einen Teddy, mit dem er schon lange nicht mehr spielt. Am Samstag baut er mit Mama einen kleinen Stand auf.",
    "Am Anfang kommt niemand. Doch dann kauft ein Junge drei Autos für einen Euro pro Stück. Eine Frau kauft das Puzzle für zwei Euro. Am Ende des Tages zählt Paul sein Geld: Er hat 15 Euro verdient! Zusammen mit seinem Ersparten reicht es für den Fußball. Den Teddy hat er übrigens doch behalten."
  ],
  fragen: [
    { t: "mc", q: "Was möchte Paul kaufen?", o: ["Ein Fahrrad", "Einen Fußball", "Ein Spiel"], a: 1, h: "Er möchte sich einen Fußball kaufen, der 20 Euro kostet." },
    { t: "mc", q: "Wie viel Geld hat Paul in der Spardose?", o: ["Sechs Euro", "Zehn Euro", "Zwanzig Euro"], a: 0, h: "Aber er hat nur sechs Euro in seiner Spardose." },
    { t: "tap", q: "Wo will Paul seine Sachen verkaufen? Auf dem …", a: "Flohmarkt", h: "auf dem Flohmarkt!" },
    { t: "mc", q: "Wie viel kostet ein Spielzeugauto?", o: ["Einen Euro", "Zwei Euro", "Fünf Euro"], a: 0, h: "für einen Euro pro Stück" },
    { t: "mc", q: "Wie viel Geld verdient Paul auf dem Flohmarkt?", o: ["6 Euro", "15 Euro", "20 Euro"], a: 1, h: "Er hat 15 Euro verdient!" },
    { t: "yn", q: "Reicht das Geld für den Fußball? (Rechne nach: 6 + 15)", a: true, h: "Zusammen mit seinem Ersparten reicht es für den Fußball." },
    { t: "yn", q: "Hat Paul den Teddy verkauft?", a: false, h: "Den Teddy hat er übrigens doch behalten." }
  ]},

{ id: 63, stufe: 2, emoji: "🪐", titel: "Die Planeten",
  text: [
    "Unsere Erde dreht sich um die Sonne. Aber sie ist nicht allein: Insgesamt kreisen acht Planeten um die Sonne. Zusammen nennt man sie das Sonnensystem.",
    "Der Planet, der am nächsten an der Sonne ist, heißt Merkur. Dort ist es am Tag glühend heiß. Die Erde ist der dritte Planet von der Sonne aus. Sie ist der einzige Planet, auf dem wir Leben kennen.",
    "Der größte Planet ist der Jupiter. Er ist so groß, dass mehr als tausend Erden in ihn hineinpassen würden. Der Saturn ist berühmt für seine schönen Ringe. Sie bestehen aus Eis und Gestein. Der Planet, der am weitesten von der Sonne entfernt ist, heißt Neptun. Dort ist es eisig kalt."
  ],
  fragen: [
    { t: "mc", q: "Wie viele Planeten kreisen um die Sonne?", o: ["Fünf", "Acht", "Zwölf"], a: 1, h: "Insgesamt kreisen acht Planeten um die Sonne." },
    { t: "tap", q: "Welcher Planet ist der Sonne am nächsten?", a: "Merkur", h: "heißt Merkur" },
    { t: "mc", q: "Der wievielte Planet ist die Erde?", o: ["Der erste", "Der dritte", "Der fünfte"], a: 1, h: "Die Erde ist der dritte Planet von der Sonne aus." },
    { t: "mc", q: "Welcher Planet ist der größte?", o: ["Saturn", "Jupiter", "Neptun"], a: 1, h: "Der größte Planet ist der Jupiter." },
    { t: "yn", q: "Bestehen die Ringe des Saturn aus Gold?", a: false, h: "Sie bestehen aus Eis und Gestein." },
    { t: "yn", q: "Ist es auf dem Neptun heiß?", a: false, h: "Dort ist es eisig kalt." },
    { t: "mc", q: "Warum ist es auf dem Neptun wohl so kalt? (Denk nach!)", o: ["Weil er am weitesten von der Sonne weg ist", "Weil es dort schneit", "Weil er so klein ist"], a: 0, h: "Der Planet, der am weitesten von der Sonne entfernt ist, heißt Neptun." }
  ]},

{ id: 64, stufe: 2, emoji: "🥕", titel: "Der Schulgarten",
  text: [
    "Hinter der Grundschule gibt es einen Schulgarten. Jede Klasse hat dort ein eigenes Beet. Die Klasse 4a will in diesem Jahr Gemüse anbauen.",
    "Im April lockern die Kinder die Erde mit kleinen Schaufeln. Dann säen sie Möhren, Radieschen und Bohnen. Jeden Tag ist ein anderes Kind für das Gießen zuständig. An heißen Tagen muss man morgens und nachmittags gießen.",
    "Die Radieschen sind zuerst reif, schon nach vier Wochen. Sie schmecken ein bisschen scharf. Die Möhren brauchen viel länger. Im Sommer ernten die Kinder alles und machen daraus einen großen Salat. Herr Özdemir, der Lehrer, sagt: „Selbst angebautes Gemüse schmeckt am besten.“"
  ],
  fragen: [
    { t: "yn", q: "Hat jede Klasse ein eigenes Beet?", a: true, h: "Jede Klasse hat dort ein eigenes Beet." },
    { t: "mc", q: "Wann lockern die Kinder die Erde?", o: ["Im Januar", "Im April", "Im Oktober"], a: 1, h: "Im April lockern die Kinder die Erde mit kleinen Schaufeln." },
    { t: "mc", q: "Was säen die Kinder NICHT? (Lies genau!)", o: ["Möhren", "Bohnen", "Tomaten"], a: 2, h: "Dann säen sie Möhren, Radieschen und Bohnen." },
    { t: "mc", q: "Wie oft muss man an heißen Tagen gießen?", o: ["Einmal in der Woche", "Morgens und nachmittags", "Gar nicht"], a: 1, h: "An heißen Tagen muss man morgens und nachmittags gießen." },
    { t: "tap", q: "Welches Gemüse ist zuerst reif?", a: "Radieschen", h: "Die Radieschen sind zuerst reif, schon nach vier Wochen." },
    { t: "yn", q: "Brauchen die Möhren weniger Zeit als die Radieschen?", a: false, h: "Die Möhren brauchen viel länger." },
    { t: "mc", q: "Was machen die Kinder aus dem Gemüse?", o: ["Eine Suppe", "Einen Salat", "Einen Kuchen"], a: 1, h: "machen daraus einen großen Salat" }
  ]},

{ id: 65, stufe: 2, emoji: "🏰", titel: "Die Ritterburg",
  text: [
    "Im Mittelalter bauten die Menschen Burgen, um sich vor Feinden zu schützen. Viele Burgen stehen auf hohen Bergen. Von dort konnte man Feinde schon von weitem kommen sehen.",
    "Um manche Burgen herum gab es einen tiefen Graben mit Wasser. Über den Graben führte eine Zugbrücke. Bei Gefahr wurde sie hochgezogen. Dann kam niemand mehr in die Burg hinein.",
    "Der höchste Turm der Burg heißt Bergfried. Er war der letzte Zufluchtsort, wenn Feinde in die Burg eindrangen. Das Leben auf einer Burg war nicht so gemütlich, wie viele denken. Im Winter war es kalt und zugig, denn die Fenster hatten oft kein Glas."
  ],
  fragen: [
    { t: "mc", q: "Warum bauten die Menschen Burgen?", o: ["Um sich vor Feinden zu schützen", "Um Touristen anzulocken", "Um Tiere zu halten"], a: 0, h: "um sich vor Feinden zu schützen" },
    { t: "mc", q: "Warum stehen viele Burgen auf Bergen?", o: ["Weil dort die Sonne scheint", "Damit man Feinde von weitem sieht", "Weil dort Gold war"], a: 1, h: "Von dort konnte man Feinde schon von weitem kommen sehen." },
    { t: "tap", q: "Was führte über den Graben?", a: "Zugbrücke", h: "Über den Graben führte eine Zugbrücke." },
    { t: "yn", q: "Wurde die Zugbrücke bei Gefahr heruntergelassen?", a: false, h: "Bei Gefahr wurde sie hochgezogen." },
    { t: "tap", q: "Wie heißt der höchste Turm der Burg?", a: "Bergfried", h: "Der höchste Turm der Burg heißt Bergfried." },
    { t: "yn", q: "War das Leben auf einer Burg sehr gemütlich?", a: false, h: "Das Leben auf einer Burg war nicht so gemütlich, wie viele denken." },
    { t: "mc", q: "Warum war es im Winter zugig?", o: ["Weil die Fenster oft kein Glas hatten", "Weil es keine Türen gab", "Weil die Burg auf dem Wasser stand"], a: 0, h: "denn die Fenster hatten oft kein Glas" }
  ]},

{ id: 66, stufe: 2, emoji: "📵", titel: "Ein Tag ohne Bildschirm",
  text: [
    "Familie Becker macht ein Experiment. Einen ganzen Samstag lang soll niemand auf einen Bildschirm schauen. Kein Fernseher, kein Handy, kein Tablet, keine Spielkonsole.",
    "Am Morgen ist Finn schlecht gelaunt. „Was soll ich denn den ganzen Tag machen?“, mault er. Papa holt ein altes Brettspiel aus dem Schrank. Zuerst spielt Finn nur widerwillig mit. Aber dann gewinnt er zweimal hintereinander und hat plötzlich viel Spaß.",
    "Am Nachmittag fahren alle mit dem Fahrrad zum Wald. Finn baut mit seiner Schwester einen Staudamm im Bach. Am Abend sitzen alle zusammen und erzählen sich Witze. Vor dem Schlafengehen sagt Finn: „Das war gar nicht so schlimm. Können wir das nächsten Monat wieder machen?“"
  ],
  fragen: [
    { t: "tap", q: "Was macht Familie Becker? Ein …", a: "Experiment", h: "Familie Becker macht ein Experiment." },
    { t: "mc", q: "An welchem Tag ist das Experiment?", o: ["Am Freitag", "Am Samstag", "Am Sonntag"], a: 1, h: "Einen ganzen Samstag lang" },
    { t: "yn", q: "Ist Finn am Morgen gut gelaunt?", a: false, h: "Am Morgen ist Finn schlecht gelaunt." },
    { t: "mc", q: "Warum hat Finn beim Brettspiel plötzlich Spaß?", o: ["Weil er zweimal gewinnt", "Weil es Süßigkeiten gibt", "Weil sein Freund kommt"], a: 0, h: "Aber dann gewinnt er zweimal hintereinander und hat plötzlich viel Spaß." },
    { t: "mc", q: "Was baut Finn im Bach?", o: ["Ein Boot", "Einen Staudamm", "Eine Brücke"], a: 1, h: "Finn baut mit seiner Schwester einen Staudamm im Bach." },
    { t: "mc", q: "Was macht die Familie am Abend?", o: ["Sie schauen einen Film", "Sie erzählen sich Witze", "Sie gehen ins Kino"], a: 1, h: "Am Abend sitzen alle zusammen und erzählen sich Witze." },
    { t: "yn", q: "Möchte Finn das Experiment wiederholen?", a: true, h: "Können wir das nächsten Monat wieder machen?" }
  ]},

{ id: 67, stufe: 2, emoji: "🐭", titel: "Der Löwe und die Maus",
  text: [
    "Ein Löwe schlief im Schatten eines Baumes. Da lief eine kleine Maus über seine Nase. Der Löwe wachte auf und packte die Maus mit seiner Pfote. „Bitte lass mich frei!“, piepste die Maus. „Vielleicht kann ich dir eines Tages auch helfen.“ Der Löwe lachte. „Du winziges Ding willst mir helfen?“ Aber er ließ sie laufen.",
    "Ein paar Tage später geriet der Löwe in ein Netz, das Jäger aufgestellt hatten. Er brüllte und zappelte, doch er kam nicht frei. Die Maus hörte sein Brüllen. Sie lief zu ihm und nagte mit ihren scharfen Zähnen ein Seil nach dem anderen durch. Bald war der Löwe frei.",
    "„Siehst du“, sagte die Maus, „auch ein Kleiner kann einem Großen helfen.“"
  ],
  fragen: [
    { t: "mc", q: "Was machte der Löwe am Anfang?", o: ["Er jagte", "Er schlief", "Er fraß"], a: 1, h: "Ein Löwe schlief im Schatten eines Baumes." },
    { t: "mc", q: "Wo lief die Maus entlang?", o: ["Über seinen Schwanz", "Über seine Nase", "Über seinen Rücken"], a: 1, h: "Da lief eine kleine Maus über seine Nase." },
    { t: "yn", q: "Glaubte der Löwe, dass die Maus ihm helfen kann?", a: false, h: "Der Löwe lachte. „Du winziges Ding willst mir helfen?“" },
    { t: "tap", q: "Worin geriet der Löwe später? In ein …", a: "Netz", h: "geriet der Löwe in ein Netz, das Jäger aufgestellt hatten" },
    { t: "mc", q: "Wie befreite die Maus den Löwen?", o: ["Sie holte Hilfe", "Sie nagte die Seile durch", "Sie zog am Netz"], a: 1, h: "nagte mit ihren scharfen Zähnen ein Seil nach dem anderen durch" },
    { t: "mc", q: "Was ist die Lehre der Fabel?", o: ["Auch ein Kleiner kann einem Großen helfen", "Löwen fressen keine Mäuse", "Man soll nicht schlafen"], a: 0, h: "„Siehst du“, sagte die Maus, „auch ein Kleiner kann einem Großen helfen.“" }
  ]},

{ id: 68, stufe: 2, emoji: "🦈", titel: "Haie",
  text: [
    "Haie gibt es schon seit vielen Millionen Jahren. Sie lebten schon lange vor den Dinosauriern im Meer. Heute gibt es über 500 verschiedene Haiarten.",
    "Haie haben mehrere Reihen Zähne hintereinander. Wenn ein Zahn ausfällt, rückt ein neuer nach. Ein Hai kann so in seinem Leben Tausende Zähne verbrauchen.",
    "Haie können sehr gut riechen. Einen Tropfen Blut im Wasser bemerken sie schon aus großer Entfernung. Viele Menschen haben Angst vor Haien. Dabei sind die meisten Haie für Menschen ungefährlich. Der größte Hai, der Walhai, frisst sogar nur winzige Tiere und Pflanzen, das Plankton."
  ],
  fragen: [
    { t: "yn", q: "Gab es Haie schon vor den Dinosauriern?", a: true, h: "Sie lebten schon lange vor den Dinosauriern im Meer." },
    { t: "mc", q: "Wie viele Haiarten gibt es heute?", o: ["Über 50", "Über 500", "Über 5000"], a: 1, h: "Heute gibt es über 500 verschiedene Haiarten." },
    { t: "mc", q: "Was passiert, wenn ein Zahn ausfällt?", o: ["Der Hai kann nicht mehr fressen", "Ein neuer Zahn rückt nach", "Der Hai geht zum Zahnarzt"], a: 1, h: "Wenn ein Zahn ausfällt, rückt ein neuer nach." },
    { t: "mc", q: "Was können Haie besonders gut?", o: ["Riechen", "Singen", "Fliegen"], a: 0, h: "Haie können sehr gut riechen." },
    { t: "yn", q: "Sind die meisten Haie für Menschen gefährlich?", a: false, h: "Dabei sind die meisten Haie für Menschen ungefährlich." },
    { t: "tap", q: "Wie heißt der größte Hai?", a: "Walhai", h: "Der größte Hai, der Walhai" },
    { t: "mc", q: "Was frisst der Walhai?", o: ["Robben", "Plankton", "Andere Haie"], a: 1, h: "frisst sogar nur winzige Tiere und Pflanzen, das Plankton" }
  ]},

{ id: 69, stufe: 2, emoji: "🎭", titel: "Lampenfieber",
  text: [
    "Die Klasse 4b führt beim Schulfest ein Theaterstück auf. Es heißt „Der König ohne Krone“. Emma spielt die Hauptrolle, die Königin. Wochenlang hat sie ihren Text geübt.",
    "Kurz vor dem Auftritt bekommt Emma Bauchschmerzen. Ihre Hände zittern. „Ich habe meinen ganzen Text vergessen!“, flüstert sie. Frau Lange, die Lehrerin, nimmt sie zur Seite. „Das nennt man Lampenfieber“, sagt sie. „Das haben sogar berühmte Schauspieler. Atme dreimal tief ein und aus.“",
    "Emma atmet tief durch. Dann geht der Vorhang auf. Als sie auf der Bühne steht, fällt ihr der erste Satz sofort wieder ein. Danach geht alles wie von selbst. Am Ende klatschen alle Zuschauer laut. Emmas Eltern in der ersten Reihe klatschen am lautesten."
  ],
  fragen: [
    { t: "mc", q: "Wo wird das Theaterstück aufgeführt?", o: ["Im Theater der Stadt", "Beim Schulfest", "Im Kindergarten"], a: 1, h: "führt beim Schulfest ein Theaterstück auf" },
    { t: "mc", q: "Welche Rolle spielt Emma?", o: ["Den König", "Die Königin", "Einen Diener"], a: 1, h: "Emma spielt die Hauptrolle, die Königin." },
    { t: "yn", q: "Hat Emma ihren Text geübt?", a: true, h: "Wochenlang hat sie ihren Text geübt." },
    { t: "tap", q: "Wie nennt man die Aufregung vor einem Auftritt?", a: "Lampenfieber", h: "„Das nennt man Lampenfieber“" },
    { t: "mc", q: "Was rät Frau Lange?", o: ["Nach Hause zu gehen", "Dreimal tief ein- und auszuatmen", "Etwas zu essen"], a: 1, h: "Atme dreimal tief ein und aus." },
    { t: "yn", q: "Hat Emma ihren Text wirklich vergessen? (Denk nach!)", a: false, h: "fällt ihr der erste Satz sofort wieder ein" },
    { t: "mc", q: "Wo sitzen Emmas Eltern?", o: ["In der letzten Reihe", "In der ersten Reihe", "Auf der Bühne"], a: 1, h: "Emmas Eltern in der ersten Reihe klatschen am lautesten." }
  ]},

{ id: 70, stufe: 2, emoji: "🍫", titel: "Woher kommt die Schokolade?",
  text: [
    "Schokolade wird aus den Bohnen des Kakaobaums gemacht. Der Kakaobaum wächst nur in warmen Ländern in der Nähe des Äquators. Besonders viel Kakao kommt aus Westafrika, zum Beispiel von der Elfenbeinküste.",
    "Die Früchte des Kakaobaums sind groß und hängen direkt am Stamm. In jeder Frucht stecken etwa 30 bis 50 Kakaobohnen. Die Bauern holen die Bohnen heraus und lassen sie einige Tage gären. Danach werden sie in der Sonne getrocknet.",
    "Die getrockneten Bohnen werden mit Schiffen nach Europa gebracht. In der Fabrik werden sie geröstet und gemahlen. Dann mischt man sie mit Zucker und oft auch mit Milch. So entsteht die Schokolade. Die Bohnen selbst schmecken übrigens bitter und gar nicht süß."
  ],
  fragen: [
    { t: "mc", q: "Woraus wird Schokolade gemacht?", o: ["Aus Kaffeebohnen", "Aus den Bohnen des Kakaobaums", "Aus Nüssen"], a: 1, h: "Schokolade wird aus den Bohnen des Kakaobaums gemacht." },
    { t: "yn", q: "Wächst der Kakaobaum in Deutschland?", a: false, h: "Der Kakaobaum wächst nur in warmen Ländern in der Nähe des Äquators." },
    { t: "mc", q: "Wo hängen die Früchte?", o: ["Ganz oben in der Krone", "Direkt am Stamm", "Unter der Erde"], a: 1, h: "Die Früchte des Kakaobaums sind groß und hängen direkt am Stamm." },
    { t: "mc", q: "Wie viele Bohnen stecken etwa in einer Frucht?", o: ["3 bis 5", "30 bis 50", "300 bis 500"], a: 1, h: "In jeder Frucht stecken etwa 30 bis 50 Kakaobohnen." },
    { t: "tap", q: "Womit werden die Bohnen nach Europa gebracht? Mit …", a: "Schiffen", h: "Die getrockneten Bohnen werden mit Schiffen nach Europa gebracht." },
    { t: "mc", q: "Was passiert in der Fabrik zuerst?", o: ["Die Bohnen werden geröstet", "Die Bohnen werden gepflanzt", "Die Bohnen werden gewaschen"], a: 0, h: "In der Fabrik werden sie geröstet und gemahlen." },
    { t: "yn", q: "Schmecken Kakaobohnen süß?", a: false, h: "Die Bohnen selbst schmecken übrigens bitter und gar nicht süß." }
  ]},

{ id: 71, stufe: 2, emoji: "🌬️", titel: "Der Herbststurm",
  text: [
    "In der Nacht tobt ein heftiger Sturm. Der Wind heult ums Haus und die Fensterläden klappern. Jakob kann kaum schlafen.",
    "Am Morgen sieht er das Unglück: Der große Baum im Garten der Nachbarin, Frau Schulte, ist umgefallen. Er liegt quer über ihrem Gartenzaun. Frau Schulte ist schon 80 Jahre alt und steht ratlos davor.",
    "Jakobs Vater holt seine Säge. Auch die anderen Nachbarn kommen dazu. Gemeinsam zersägen sie den Stamm in kleine Stücke. Jakob und die anderen Kinder sammeln die Äste ein und tragen sie zu einem Haufen. Nach drei Stunden ist alles aufgeräumt. Frau Schulte bedankt sich und backt für alle einen großen Pflaumenkuchen. Jakob denkt: „Zusammen schafft man viel mehr als allein.“"
  ],
  fragen: [
    { t: "mc", q: "Wann tobt der Sturm?", o: ["Am Mittag", "In der Nacht", "Am Abend"], a: 1, h: "In der Nacht tobt ein heftiger Sturm." },
    { t: "mc", q: "Was ist umgefallen?", o: ["Ein Zaun", "Ein großer Baum", "Ein Haus"], a: 1, h: "Der große Baum im Garten der Nachbarin, Frau Schulte, ist umgefallen." },
    { t: "tap", q: "Wie heißt die Nachbarin? Frau …", a: "Schulte", h: "Frau Schulte ist schon 80 Jahre alt" },
    { t: "yn", q: "Hilft nur Jakobs Vater?", a: false, h: "Auch die anderen Nachbarn kommen dazu." },
    { t: "mc", q: "Was machen die Kinder?", o: ["Sie sägen den Stamm", "Sie sammeln die Äste ein", "Sie schauen zu"], a: 1, h: "Jakob und die anderen Kinder sammeln die Äste ein" },
    { t: "mc", q: "Wie lange dauert das Aufräumen?", o: ["Eine Stunde", "Drei Stunden", "Den ganzen Tag"], a: 1, h: "Nach drei Stunden ist alles aufgeräumt." },
    { t: "mc", q: "Was denkt Jakob am Ende?", o: ["Stürme sind toll", "Zusammen schafft man viel mehr als allein", "Bäume sind gefährlich"], a: 1, h: "„Zusammen schafft man viel mehr als allein.“" }
  ]},

{ id: 72, stufe: 2, emoji: "🏅", titel: "Die Olympischen Spiele",
  text: [
    "Die Olympischen Spiele sind das größte Sportfest der Welt. Sportlerinnen und Sportler aus fast allen Ländern treten dort gegeneinander an.",
    "Die ersten Olympischen Spiele gab es schon vor fast 3000 Jahren in Griechenland, in einem Ort namens Olympia. Damals durften nur Männer mitmachen. Die ersten Olympischen Spiele der Neuzeit fanden im Jahr 1896 in Athen statt.",
    "Heute gibt es Sommerspiele und Winterspiele. Sie finden jeweils alle vier Jahre statt. Das Zeichen der Olympischen Spiele sind fünf bunte Ringe, die ineinander greifen. Sie stehen für die fünf Erdteile, die sich beim Sport friedlich treffen. Die Besten bekommen Medaillen: Gold für den ersten Platz, Silber für den zweiten und Bronze für den dritten."
  ],
  fragen: [
    { t: "tap", q: "In welchem Ort gab es die ersten Spiele?", a: "Olympia", h: "in einem Ort namens Olympia" },
    { t: "yn", q: "Durften damals auch Frauen mitmachen?", a: false, h: "Damals durften nur Männer mitmachen." },
    { t: "mc", q: "Wann fanden die ersten Spiele der Neuzeit statt?", o: ["1896", "1936", "1972"], a: 0, h: "fanden im Jahr 1896 in Athen statt" },
    { t: "mc", q: "Wie oft finden die Sommerspiele statt?", o: ["Jedes Jahr", "Alle zwei Jahre", "Alle vier Jahre"], a: 2, h: "Sie finden jeweils alle vier Jahre statt." },
    { t: "mc", q: "Wofür stehen die fünf Ringe?", o: ["Für fünf Sportarten", "Für die fünf Erdteile", "Für fünf Gewinner"], a: 1, h: "Sie stehen für die fünf Erdteile" },
    { t: "mc", q: "Welche Medaille gibt es für den zweiten Platz?", o: ["Gold", "Silber", "Bronze"], a: 1, h: "Silber für den zweiten" },
    { t: "yn", q: "Gibt es nur Sommerspiele?", a: false, h: "Heute gibt es Sommerspiele und Winterspiele." }
  ]},

{ id: 73, stufe: 2, emoji: "🐙", titel: "Der Krake",
  text: [
    "Der Krake ist ein erstaunliches Meerestier. Er hat acht Arme, die mit Saugnäpfen besetzt sind. Damit kann er Dinge festhalten und sogar Schraubgläser öffnen.",
    "Kraken haben drei Herzen und blaues Blut. Sie haben keine Knochen. Deshalb können sie sich durch winzige Spalten quetschen, die kaum größer sind als ihr Auge.",
    "Kraken sind Meister im Verstecken. Sie können in Sekunden ihre Farbe ändern und sehen dann aus wie ein Stein oder eine Pflanze. Wenn ein Feind trotzdem angreift, spritzen sie eine schwarze Tinte ins Wasser und flüchten im Schutz der dunklen Wolke. Forscher halten Kraken für sehr klug. Sie können sich Dinge merken und Rätsel lösen."
  ],
  fragen: [
    { t: "mc", q: "Wie viele Arme hat ein Krake?", o: ["Sechs", "Acht", "Zehn"], a: 1, h: "Er hat acht Arme" },
    { t: "tap", q: "Womit sind die Arme besetzt? Mit …", a: "Saugnäpfen", h: "die mit Saugnäpfen besetzt sind" },
    { t: "mc", q: "Wie viele Herzen hat ein Krake?", o: ["Eins", "Zwei", "Drei"], a: 2, h: "Kraken haben drei Herzen und blaues Blut." },
    { t: "yn", q: "Haben Kraken Knochen?", a: false, h: "Sie haben keine Knochen." },
    { t: "mc", q: "Warum passen Kraken durch winzige Spalten?", o: ["Weil sie keine Knochen haben", "Weil sie so klein sind", "Weil sie Wasser ausspucken"], a: 0, h: "Deshalb können sie sich durch winzige Spalten quetschen" },
    { t: "mc", q: "Was machen Kraken, wenn ein Feind angreift?", o: ["Sie beißen zu", "Sie spritzen Tinte und flüchten", "Sie stellen sich tot"], a: 1, h: "spritzen sie eine schwarze Tinte ins Wasser und flüchten" },
    { t: "yn", q: "Halten Forscher Kraken für dumm?", a: false, h: "Forscher halten Kraken für sehr klug." }
  ]},

{ id: 74, stufe: 2, emoji: "🍪", titel: "Der Keks-Dieb",
  text: [
    "Oma hat Kekse gebacken und sie zum Abkühlen auf den Küchentisch gestellt. Zwanzig Stück waren es. Als sie nach einer halben Stunde zurückkommt, liegen nur noch zwölf Kekse auf dem Blech.",
    "„Wer war das?“, fragt Oma. Selin war die ganze Zeit in ihrem Zimmer und hat Hausaufgaben gemacht. Ihr Bruder Deniz war draußen beim Fußball. Seine Schuhe sind noch ganz schlammig. Opa hat im Wohnzimmer Zeitung gelesen.",
    "Selin schaut sich die Küche genau an. Auf dem Boden liegen Krümel. Sie führen zur Tür, hinter der Hund Bruno in seinem Körbchen liegt. Bruno wedelt mit dem Schwanz. An seiner Schnauze klebt ein Kekskrümel. „Der Dieb ist gefunden!“, ruft Selin. Alle lachen, nur Bruno schaut ein bisschen schuldbewusst."
  ],
  fragen: [
    { t: "mc", q: "Wie viele Kekse hat Oma gebacken?", o: ["Zwölf", "Zwanzig", "Dreißig"], a: 1, h: "Zwanzig Stück waren es." },
    { t: "mc", q: "Wie viele Kekse fehlen? (Rechne: 20 − 12)", o: ["Sechs", "Acht", "Zehn"], a: 1, h: "liegen nur noch zwölf Kekse auf dem Blech" },
    { t: "mc", q: "Wo war Selin die ganze Zeit?", o: ["In ihrem Zimmer", "Draußen", "Im Wohnzimmer"], a: 0, h: "Selin war die ganze Zeit in ihrem Zimmer und hat Hausaufgaben gemacht." },
    { t: "yn", q: "War Deniz in der Küche?", a: false, h: "Ihr Bruder Deniz war draußen beim Fußball." },
    { t: "tap", q: "Was liegt auf dem Boden?", a: "Krümel", h: "Auf dem Boden liegen Krümel." },
    { t: "mc", q: "Wer ist der Keks-Dieb?", o: ["Opa", "Deniz", "Hund Bruno"], a: 2, h: "An seiner Schnauze klebt ein Kekskrümel." },
    { t: "mc", q: "Woran erkennt Selin den Dieb? (Denk nach!)", o: ["An den Krümeln und an seiner Schnauze", "An den schlammigen Schuhen", "An der Zeitung"], a: 0, h: "Sie führen zur Tür, hinter der Hund Bruno in seinem Körbchen liegt." }
  ]},

{ id: 75, stufe: 2, emoji: "🎪", titel: "Die Zirkuswoche",
  text: [
    "Eine ganze Woche lang kommt ein echter Zirkus an die Schule. Statt Unterricht lernen die Kinder Zirkuskunststücke. Am Freitag soll es eine große Vorstellung im Zirkuszelt geben.",
    "Jedes Kind darf sich eine Gruppe aussuchen. Es gibt Jongleure, Seiltänzer, Clowns, Zauberer und Akrobaten. Rafael möchte unbedingt Zauberer werden. Seine Freundin Lea geht in die Seiltanz-Gruppe, obwohl sie ein bisschen Höhenangst hat.",
    "Die Woche ist anstrengend. Rafael übt jeden Tag stundenlang seinen Kartentrick. Lea fällt am ersten Tag dreimal vom Seil. Aber am Freitag klappt alles. Rafael zaubert ein Tuch aus dem Ohr des Bürgermeisters. Lea balanciert über das Seil und lächelt dabei. Das Publikum jubelt."
  ],
  fragen: [
    { t: "mc", q: "Wie lange ist der Zirkus an der Schule?", o: ["Einen Tag", "Eine Woche", "Einen Monat"], a: 1, h: "Eine ganze Woche lang kommt ein echter Zirkus an die Schule." },
    { t: "mc", q: "Wann ist die große Vorstellung?", o: ["Am Montag", "Am Mittwoch", "Am Freitag"], a: 2, h: "Am Freitag soll es eine große Vorstellung im Zirkuszelt geben." },
    { t: "tap", q: "Was möchte Rafael werden?", a: "Zauberer", h: "Rafael möchte unbedingt Zauberer werden." },
    { t: "yn", q: "Hat Lea Höhenangst?", a: true, h: "obwohl sie ein bisschen Höhenangst hat" },
    { t: "mc", q: "Wie oft fällt Lea am ersten Tag vom Seil?", o: ["Einmal", "Dreimal", "Gar nicht"], a: 1, h: "Lea fällt am ersten Tag dreimal vom Seil." },
    { t: "mc", q: "Woher zaubert Rafael das Tuch?", o: ["Aus seinem Hut", "Aus dem Ohr des Bürgermeisters", "Aus der Tasche der Lehrerin"], a: 1, h: "Rafael zaubert ein Tuch aus dem Ohr des Bürgermeisters." },
    { t: "mc", q: "Was zeigt die Geschichte? (Denk nach!)", o: ["Wer übt, kann viel schaffen", "Zirkus ist langweilig", "Seiltanzen ist zu gefährlich"], a: 0, h: "Aber am Freitag klappt alles." }
  ]},

{ id: 76, stufe: 2, emoji: "📄", titel: "Wie Papier entsteht",
  text: [
    "Papier benutzen wir jeden Tag: in Heften, Büchern, Zeitungen und als Verpackung. Aber woraus wird Papier eigentlich gemacht?",
    "Das meiste Papier wird aus Holz hergestellt. Im Wald werden Bäume gefällt und in eine Papierfabrik gebracht. Dort wird das Holz in kleine Stücke zerhackt. Mit viel Wasser entsteht daraus ein grauer Brei. Diesen Brei nennt man Zellstoff.",
    "Der Brei wird auf ein großes Sieb gegossen. Das Wasser läuft ab und die Fasern bleiben liegen. Dann wird die dünne Schicht zwischen Walzen gepresst und getrocknet. Am Ende entsteht eine riesige Papierrolle.",
    "Man kann Papier auch aus Altpapier machen. Das nennt man Recyclingpapier. Dafür müssen keine neuen Bäume gefällt werden. Außerdem braucht man weniger Wasser und Energie."
  ],
  fragen: [
    { t: "mc", q: "Woraus wird das meiste Papier gemacht?", o: ["Aus Stein", "Aus Holz", "Aus Plastik"], a: 1, h: "Das meiste Papier wird aus Holz hergestellt." },
    { t: "tap", q: "Wie nennt man den grauen Brei?", a: "Zellstoff", h: "Diesen Brei nennt man Zellstoff." },
    { t: "mc", q: "Worauf wird der Brei gegossen?", o: ["Auf ein großes Sieb", "In eine Pfanne", "Auf den Boden"], a: 0, h: "Der Brei wird auf ein großes Sieb gegossen." },
    { t: "yn", q: "Bleibt das Wasser auf dem Sieb liegen?", a: false, h: "Das Wasser läuft ab und die Fasern bleiben liegen." },
    { t: "mc", q: "Was entsteht am Ende?", o: ["Eine riesige Papierrolle", "Ein Baum", "Ein Buch"], a: 0, h: "Am Ende entsteht eine riesige Papierrolle." },
    { t: "mc", q: "Wie nennt man Papier aus Altpapier?", o: ["Buntpapier", "Recyclingpapier", "Seidenpapier"], a: 1, h: "Das nennt man Recyclingpapier." },
    { t: "yn", q: "Ist Recyclingpapier gut für die Umwelt? (Denk nach!)", a: true, h: "Dafür müssen keine neuen Bäume gefällt werden." }
  ]},

{ id: 77, stufe: 2, emoji: "🦇", titel: "Fledermäuse",
  text: [
    "Fledermäuse sind die einzigen Säugetiere, die wirklich fliegen können. Ihre Flügel bestehen aus einer dünnen Haut, die zwischen den langen Fingern gespannt ist.",
    "Am Tag schlafen Fledermäuse an dunklen Orten, zum Beispiel in Höhlen, auf Dachböden oder in hohlen Bäumen. Dabei hängen sie kopfüber und halten sich mit den Füßen fest.",
    "In der Nacht gehen sie auf Insektenjagd. Dabei hilft ihnen ein besonderer Trick: Sie stoßen sehr hohe Rufe aus, die wir Menschen nicht hören können. Die Rufe prallen an Gegenständen und Insekten ab und kommen als Echo zurück. So wissen die Fledermäuse genau, wo sich etwas befindet, auch im Stockdunkeln. Im Winter halten Fledermäuse Winterschlaf."
  ],
  fragen: [
    { t: "yn", q: "Sind Fledermäuse Vögel?", a: false, h: "Fledermäuse sind die einzigen Säugetiere, die wirklich fliegen können." },
    { t: "mc", q: "Woraus bestehen ihre Flügel?", o: ["Aus Federn", "Aus einer dünnen Haut", "Aus Schuppen"], a: 1, h: "Ihre Flügel bestehen aus einer dünnen Haut" },
    { t: "mc", q: "Wie schlafen Fledermäuse?", o: ["Im Liegen", "Kopfüber hängend", "Im Stehen"], a: 1, h: "Dabei hängen sie kopfüber und halten sich mit den Füßen fest." },
    { t: "mc", q: "Was jagen Fledermäuse?", o: ["Mäuse", "Insekten", "Fische"], a: 1, h: "In der Nacht gehen sie auf Insektenjagd." },
    { t: "yn", q: "Können Menschen die Rufe der Fledermäuse hören?", a: false, h: "die wir Menschen nicht hören können" },
    { t: "tap", q: "Was kommt zurück, wenn die Rufe abprallen? Ein …", a: "Echo", h: "kommen als Echo zurück" },
    { t: "mc", q: "Was machen Fledermäuse im Winter?", o: ["Sie fliegen in den Süden", "Sie halten Winterschlaf", "Sie jagen mehr"], a: 1, h: "Im Winter halten Fledermäuse Winterschlaf." }
  ]},

{ id: 78, stufe: 2, emoji: "🔦", titel: "Die Nachtwanderung",
  text: [
    "Bei den Pfadfindern gibt es heute eine Nachtwanderung. Um neun Uhr abends treffen sich alle am Waldrand. Jedes Kind hat eine Taschenlampe dabei. Gruppenleiter Marco erklärt die Regeln: „Wir bleiben immer zusammen. Niemand geht allein los.“",
    "Im Wald ist es stockdunkel. Die Bäume sehen ganz anders aus als am Tag. Plötzlich knackt es neben dem Weg. Die Kinder bleiben erschrocken stehen. Marco leuchtet ins Gebüsch. Zwei Augen leuchten zurück. Es ist ein Reh! Es schaut die Kinder kurz an und springt dann davon.",
    "Auf einer Lichtung sagt Marco: „Jetzt machen alle ihre Taschenlampen aus.“ Über ihnen funkeln Tausende Sterne. So viele Sterne haben die Kinder in der Stadt noch nie gesehen."
  ],
  fragen: [
    { t: "mc", q: "Um wie viel Uhr treffen sich alle?", o: ["Um sieben Uhr", "Um neun Uhr", "Um Mitternacht"], a: 1, h: "Um neun Uhr abends treffen sich alle am Waldrand." },
    { t: "mc", q: "Was ist die wichtigste Regel?", o: ["Immer zusammenbleiben", "Leise singen", "Schnell laufen"], a: 0, h: "„Wir bleiben immer zusammen. Niemand geht allein los.“" },
    { t: "tap", q: "Wie heißt der Gruppenleiter?", a: "Marco", h: "Gruppenleiter Marco erklärt die Regeln" },
    { t: "yn", q: "Ist das Tier im Gebüsch ein Wolf?", a: false, h: "Es ist ein Reh!" },
    { t: "mc", q: "Was macht das Reh?", o: ["Es greift an", "Es springt davon", "Es folgt den Kindern"], a: 1, h: "springt dann davon" },
    { t: "mc", q: "Was sollen die Kinder auf der Lichtung tun?", o: ["Ein Feuer machen", "Die Taschenlampen ausmachen", "Ein Lied singen"], a: 1, h: "„Jetzt machen alle ihre Taschenlampen aus.“" },
    { t: "mc", q: "Warum sehen die Kinder in der Stadt weniger Sterne? (Denk nach!)", o: ["Weil es dort zu hell ist", "Weil es dort keine Sterne gibt", "Weil es dort immer regnet"], a: 0, h: "So viele Sterne haben die Kinder in der Stadt noch nie gesehen." }
  ]}
);
