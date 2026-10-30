// Lesen & Verstehen – @ Joschy
// Lesetexte Stufe 3 (IDs 268–300)
window.TEXTE.push(
{ id: 268, stufe: 3, emoji: "✉️", titel: "Der Brief aus der Zukunft",
  text: [
    "Als Arjun an einem Montagmorgen seinen Schulranzen öffnet, findet er einen gefalteten Zettel. Darauf steht in krakeliger Schrift: „Hallo Arjun! Ich bin du, aber zwanzig Jahre älter. Ich schreibe dir aus der Zukunft.“ Ist das ein Scherz?",
    "Im Brief steht weiter: „Ich habe einen wichtigen Tipp für dich. Gib nicht auf, wenn etwas schwer ist. Ich wäre fast nie Tierarzt geworden, weil ich in der vierten Klasse beim Rechnen aufgeben wollte.“ Arjun schluckt. Er hat tatsächlich große Probleme mit dem Einmaleins.",
    "In der Pause zeigt er den Brief seiner Freundin Mia. Sie betrachtet die Schrift genau und grinst. „Das ist die Schrift von deiner Schwester Priya“, sagt sie. „Sie schreibt das kleine a immer so komisch.“ Arjun ist zuerst ein bisschen enttäuscht.",
    "Zu Hause fragt er Priya. Sie wird rot und gibt es zu. „Ich wollte dir Mut machen“, sagt sie. „Ich habe gemerkt, wie traurig du bei den Hausaufgaben bist.“ Arjun muss lachen. Der Brief kommt zwar nicht aus der Zukunft, aber der Tipp ist trotzdem gut. Ab jetzt übt er jeden Tag zehn Minuten mit Priya."
  ],
  fragen: [
    { t: "tap", q: "Welcher Beruf wird im Brief genannt?", a: "Tierarzt", h: "Ich wäre fast nie Tierarzt geworden" },
    { t: "mc", q: "Womit hat Arjun große Probleme?", o: ["Mit dem Lesen", "Mit dem Einmaleins", "Mit dem Sport"], a: 1, h: "Er hat tatsächlich große Probleme mit dem Einmaleins." },
    { t: "mc", q: "Woran erkennt Mia, wer den Brief geschrieben hat? (Lies genau!)", o: ["An der Schrift", "Am Papier", "Am Geruch"], a: 0, h: "Sie betrachtet die Schrift genau und grinst." },
    { t: "yn", q: "Kommt der Brief wirklich aus der Zukunft?", a: false, h: "Der Brief kommt zwar nicht aus der Zukunft" },
    { t: "mc", q: "Warum hat Priya den Brief geschrieben?", o: ["Um Arjun zu ärgern", "Weil ihr langweilig war", "Um Arjun Mut zu machen"], a: 2, h: "Ich wollte dir Mut machen" },
    { t: "mc", q: "Wie fühlt sich Arjun, als Mia die Wahrheit herausfindet?", o: ["Ein bisschen enttäuscht", "Sehr wütend", "Gelangweilt"], a: 0, h: "Arjun ist zuerst ein bisschen enttäuscht." },
    { t: "yn", q: "Findet Arjun den Tipp trotzdem gut? (Denk nach!)", a: true, h: "aber der Tipp ist trotzdem gut" }
  ]},

{ id: 269, stufe: 3, emoji: "🕰️", titel: "Das Geheimnis der alten Uhr",
  text: [
    "Im Flur von Opa Hamids Wohnung steht eine alte Standuhr. Sie ist größer als Leyla und hat ein glänzendes Pendel. Seit vielen Jahren ist sie stehen geblieben. Die Zeiger zeigen immer auf drei Uhr und zwölf Minuten.",
    "„Warum reparierst du die Uhr nicht?“, fragt Leyla eines Tages. Opa lächelt geheimnisvoll. „Die Uhr ist nicht kaputt“, sagt er. „Ich habe sie selbst angehalten. Finde heraus, warum.“ Leyla liebt Rätsel. Sie untersucht die Uhr ganz genau, aber sie findet nichts.",
    "Dann entdeckt sie im Wohnzimmer ein altes Foto. Darauf hält Opa ein Baby im Arm. Auf der Rückseite steht: „Unsere Tochter Samira, geboren um 3:12 Uhr.“ Samira ist Leylas Mama! Leyla rennt zu Opa. „Du hast die Uhr bei Mamas Geburt angehalten“, ruft sie.",
    "Opa nickt. „Das war der glücklichste Moment in meinem Leben“, erklärt er. „Jedes Mal, wenn ich an der Uhr vorbeigehe, erinnere ich mich daran.“ Leyla versteht jetzt, dass die Uhr keine Zeit anzeigt, sondern eine Erinnerung. Am Abend erzählt sie Mama alles. Mama hatte das Geheimnis selbst nie gekannt."
  ],
  fragen: [
    { t: "tap", q: "Wie heißt Leylas Mama?", a: "Samira", h: "Unsere Tochter Samira" },
    { t: "mc", q: "Welche Uhrzeit zeigt die alte Uhr?", o: ["Zwölf Uhr", "Drei Uhr und zwölf Minuten", "Acht Uhr"], a: 1, h: "Die Zeiger zeigen immer auf drei Uhr und zwölf Minuten." },
    { t: "yn", q: "Ist die Uhr kaputt?", a: false, h: "Die Uhr ist nicht kaputt" },
    { t: "mc", q: "Wo findet Leyla den wichtigen Hinweis?", o: ["Auf einem alten Foto", "In der Uhr", "In einem Buch"], a: 0, h: "Dann entdeckt sie im Wohnzimmer ein altes Foto." },
    { t: "mc", q: "Warum hat Opa die Uhr angehalten? (Denk nach!)", o: ["Weil sie zu laut tickte", "Weil er Strom sparen wollte", "Weil sie ihn an Samiras Geburt erinnern soll"], a: 2, h: "Jedes Mal, wenn ich an der Uhr vorbeigehe, erinnere ich mich daran." },
    { t: "mc", q: "Was bedeutet es, dass die Uhr „eine Erinnerung“ anzeigt? (Lies genau!)", o: ["Die Uhr zeigt die richtige Zeit", "Die Uhr erinnert an einen besonderen Moment", "Die Uhr klingelt jeden Morgen"], a: 1, h: "dass die Uhr keine Zeit anzeigt, sondern eine Erinnerung" },
    { t: "yn", q: "War der Moment von Samiras Geburt für Opa sehr glücklich?", a: true, h: "Das war der glücklichste Moment in meinem Leben" }
  ]},

{ id: 270, stufe: 3, emoji: "📖", titel: "Der Junge, der nicht lesen wollte",
  text: [
    "Tim findet Bücher langweilig. „Lesen ist nur was für Streber“, sagt er immer. Wenn seine Lehrerin Frau Okafor eine Geschichte vorliest, schaut er aus dem Fenster. Zu Hause spielt er lieber Fußball oder baut mit Klötzen.",
    "Eines Tages ist Tim krank und muss eine ganze Woche im Bett bleiben. Fußball geht nicht, und sein Tablet ist kaputt. Ihm ist schrecklich langweilig. Seine große Schwester legt ihm ein Buch auf die Decke. Es heißt „Die Fußball-Detektive“. Tim seufzt, aber er schlägt es auf.",
    "Schon nach ein paar Seiten will er unbedingt wissen, wer den Pokal gestohlen hat. Er liest weiter und weiter, bis Mama das Licht ausmacht. Am nächsten Morgen greift er sofort wieder zum Buch. Nach drei Tagen hat er es durchgelesen. Er kann es selbst kaum glauben.",
    "Als Tim wieder gesund ist, geht er mit seiner Schwester in die Bücherei. Er leiht sich gleich zwei neue Detektivbücher aus. In der Schule erzählt er Frau Okafor stolz davon. Sie lächelt. „Manchmal muss man einfach das richtige Buch finden“, sagt sie. Tim nickt. Lesen ist doch nicht nur was für Streber."
  ],
  fragen: [
    { t: "tap", q: "Wie heißt Tims Lehrerin? Frau …", a: "Okafor", h: "Wenn seine Lehrerin Frau Okafor eine Geschichte vorliest" },
    { t: "yn", q: "Mag Tim am Anfang Bücher?", a: false, h: "Tim findet Bücher langweilig." },
    { t: "mc", q: "Warum fängt Tim an zu lesen? (Denk nach!)", o: ["Weil die Lehrerin es befiehlt", "Weil er krank ist und ihm langweilig ist", "Weil er eine Wette verloren hat"], a: 1, h: "Ihm ist schrecklich langweilig." },
    { t: "mc", q: "Worum geht es in dem Buch?", o: ["Um einen gestohlenen Pokal", "Um einen Drachen", "Um eine Reise zum Mond"], a: 0, h: "wer den Pokal gestohlen hat" },
    { t: "mc", q: "Wie lange braucht Tim für das Buch?", o: ["Einen Tag", "Zwei Wochen", "Drei Tage"], a: 2, h: "Nach drei Tagen hat er es durchgelesen." },
    { t: "yn", q: "Leiht sich Tim später neue Bücher aus?", a: true, h: "Er leiht sich gleich zwei neue Detektivbücher aus." },
    { t: "mc", q: "Was ist die Lehre der Geschichte? (Lies genau!)", o: ["Man sollte nie krank werden", "Fußball ist besser als Lesen", "Wer das richtige Buch findet, hat Spaß am Lesen"], a: 2, h: "Manchmal muss man einfach das richtige Buch finden" }
  ]},

{ id: 271, stufe: 3, emoji: "🛗", titel: "Stecken geblieben im Aufzug",
  text: [
    "Kavin wohnt mit seiner Familie im achten Stock eines Hochhauses. Normalerweise fährt er mit dem Aufzug. An einem Samstag steigt er mit Frau Berger ein, einer älteren Nachbarin. Zwischen dem vierten und dem fünften Stock ruckelt es plötzlich. Dann bleibt der Aufzug stehen.",
    "Frau Berger wird ganz blass. „Ich habe Angst in engen Räumen“, flüstert sie. Kavins Herz klopft auch schnell, aber er erinnert sich an das, was sein Vater ihm erklärt hat: Ein Aufzug kann nicht einfach herunterfallen, denn er wird von starken Seilen und Bremsen gehalten.",
    "Kavin drückt auf den Knopf mit der gelben Glocke. Das ist der Notruf. Eine freundliche Stimme meldet sich aus dem Lautsprecher. „Wir schicken sofort einen Techniker“, sagt der Mann. „In etwa zwanzig Minuten ist er da.“",
    "Damit Frau Berger nicht so viel Angst hat, erzählt Kavin ihr von seinem Hamster und seiner Fußballmannschaft. Frau Berger hört zu und atmet ruhiger. Nach zwanzig Minuten fährt der Aufzug wieder. Am nächsten Tag klingelt Frau Berger bei Kavins Familie. Sie bringt einen selbst gebackenen Kuchen mit. „Für meinen tapferen Retter“, sagt sie."
  ],
  fragen: [
    { t: "tap", q: "In welchem Stock wohnt Kavin? Im … Stock.", a: "achten", h: "im achten Stock eines Hochhauses" },
    { t: "mc", q: "Wie fühlt sich Frau Berger, als der Aufzug stehen bleibt?", o: ["Sie hat Angst", "Sie ist fröhlich", "Sie ist müde"], a: 0, h: "Ich habe Angst in engen Räumen" },
    { t: "yn", q: "Kann ein Aufzug einfach herunterfallen?", a: false, h: "Ein Aufzug kann nicht einfach herunterfallen" },
    { t: "mc", q: "Was macht Kavin, um Hilfe zu holen?", o: ["Er schreit laut", "Er drückt den Notrufknopf", "Er klettert hinaus"], a: 1, h: "Kavin drückt auf den Knopf mit der gelben Glocke." },
    { t: "mc", q: "Warum erzählt Kavin von seinem Hamster? (Denk nach!)", o: ["Weil er angeben will", "Weil der Hamster im Aufzug ist", "Damit Frau Berger abgelenkt ist und weniger Angst hat"], a: 2, h: "Damit Frau Berger nicht so viel Angst hat" },
    { t: "mc", q: "Wie lange dauert es, bis der Aufzug wieder fährt?", o: ["Fünf Minuten", "Zwanzig Minuten", "Zwei Stunden"], a: 1, h: "Nach zwanzig Minuten fährt der Aufzug wieder." },
    { t: "yn", q: "Ist Frau Berger Kavin dankbar? (Lies genau!)", a: true, h: "Für meinen tapferen Retter" }
  ]},

{ id: 272, stufe: 3, emoji: "🥅", titel: "Die Mannschaft ohne Torwart",
  text: [
    "Die Fußballmannschaft der Grundschule hat am Samstag ein wichtiges Spiel. Doch am Freitag kommt eine schlechte Nachricht: Torwart Lukas hat sich den Arm gebrochen. Ohne Torwart kann die Mannschaft nicht antreten. Trainer Herr Nkosi fragt, wer ins Tor gehen möchte. Niemand meldet sich.",
    "Alle wollen lieber Tore schießen als halten. Da hebt Thushi langsam die Hand. Sie ist das einzige Mädchen in der Mannschaft und spielt sonst in der Abwehr. „Ich probiere es“, sagt sie leise. Ein paar Jungen kichern. Herr Nkosi sieht sie streng an, und das Kichern hört auf.",
    "Im Spiel ist Thushi am Anfang sehr nervös. Gleich in der fünften Minute lässt sie einen Ball durch. Die Mannschaft liegt mit null zu eins hinten. Doch ihre Mitspieler klatschen ihr aufmunternd zu. „Weiter so, Thushi!“, ruft Jonas. Danach hält Thushi jeden Schuss.",
    "Kurz vor Schluss schießt Jonas das Tor zum Ausgleich und dann sogar noch das Siegtor. Zwei zu eins! Nach dem Spiel heben die Jungen Thushi auf ihre Schultern. Lukas, der mit Gips am Spielfeldrand steht, grinst. „Vielleicht brauche ich gar nicht mehr zurückzukommen“, sagt er lachend."
  ],
  fragen: [
    { t: "tap", q: "Wie heißt der Trainer? Herr …", a: "Nkosi", h: "Trainer Herr Nkosi fragt" },
    { t: "mc", q: "Warum fehlt der Torwart?", o: ["Er ist im Urlaub", "Er hat sich den Arm gebrochen", "Er hat keine Lust"], a: 1, h: "Torwart Lukas hat sich den Arm gebrochen." },
    { t: "mc", q: "Warum meldet sich zuerst niemand? (Denk nach!)", o: ["Weil alle lieber Tore schießen wollen", "Weil alle krank sind", "Weil das Tor kaputt ist"], a: 0, h: "Alle wollen lieber Tore schießen als halten." },
    { t: "yn", q: "Spielt Thushi sonst im Tor?", a: false, h: "spielt sonst in der Abwehr" },
    { t: "mc", q: "Was hilft Thushi nach dem Gegentor?", o: ["Ein neuer Ball", "Eine lange Pause", "Ihre aufmunternden Mitspieler"], a: 2, h: "Doch ihre Mitspieler klatschen ihr aufmunternd zu." },
    { t: "mc", q: "Wie endet das Spiel?", o: ["Null zu eins", "Zwei zu eins", "Eins zu eins"], a: 1, h: "Zwei zu eins!" },
    { t: "yn", q: "Meint Lukas seinen Satz am Ende ernst? (Lies genau!)", a: false, h: "sagt er lachend" }
  ]},

{ id: 273, stufe: 3, emoji: "🐕", titel: "Der Hund, der nach Hause fand",
  text: [
    "Familie Selvaraj macht Urlaub an einem See, ungefähr zehn Kilometer von zu Hause entfernt. Ihr Hund Raja ist natürlich dabei. Am zweiten Tag knallt in der Nähe ein lauter Böller. Raja erschrickt furchtbar, reißt sich los und rennt in den Wald. Die Familie sucht stundenlang, aber Raja bleibt verschwunden.",
    "Die Kinder Anu und Senthil sind sehr traurig. Sie hängen Zettel mit Rajas Foto an Bäume und Laternen. Papa ruft beim Tierheim an. Abends können die beiden kaum einschlafen. „Was ist, wenn wir ihn nie wiedersehen?“, fragt Anu leise.",
    "Drei Tage später fährt die Familie nach Hause. Als sie in die Straße einbiegen, ruft Senthil: „Da! Vor unserer Tür!“ Dort sitzt Raja. Er ist schmutzig und müde, aber er wedelt wild mit dem Schwanz. Die Kinder springen aus dem Auto und umarmen ihn.",
    "Doch wie hat Raja den Weg gefunden? Papa erklärt: „Hunde haben eine sehr feine Nase. Sie können Gerüche wahrnehmen, die wir Menschen gar nicht bemerken. Vielleicht ist Raja bekannten Gerüchen gefolgt.“ Ganz genau weiß das niemand. Anu ist das egal. Hauptsache, Raja ist wieder da."
  ],
  fragen: [
    { t: "tap", q: "Wie heißt der Hund?", a: "Raja", h: "Ihr Hund Raja ist natürlich dabei." },
    { t: "mc", q: "Warum läuft Raja weg?", o: ["Er erschrickt vor einem lauten Böller", "Er jagt eine Katze", "Er hat Hunger"], a: 0, h: "Raja erschrickt furchtbar" },
    { t: "mc", q: "Was tun die Kinder, um Raja zu finden?", o: ["Sie bauen eine Hütte", "Sie hängen Zettel mit seinem Foto auf", "Sie kaufen einen neuen Hund"], a: 1, h: "Sie hängen Zettel mit Rajas Foto an Bäume und Laternen." },
    { t: "yn", q: "Ist Raja schmutzig, als die Familie ihn findet?", a: true, h: "Er ist schmutzig und müde" },
    { t: "mc", q: "Wie fühlen sich die Kinder in den Tagen ohne Raja? (Denk nach!)", o: ["Fröhlich", "Gelangweilt", "Traurig und besorgt"], a: 2, h: "Die Kinder Anu und Senthil sind sehr traurig." },
    { t: "mc", q: "Wie hat Raja vielleicht nach Hause gefunden?", o: ["Mit einer Landkarte", "Mit seiner feinen Nase", "Mit dem Bus"], a: 1, h: "Hunde haben eine sehr feine Nase." },
    { t: "yn", q: "Weiß man ganz sicher, wie Raja den Weg gefunden hat? (Lies genau!)", a: false, h: "Ganz genau weiß das niemand." }
  ]},

{ id: 274, stufe: 3, emoji: "🎨", titel: "Der Malwettbewerb",
  text: [
    "Die Stadtbücherei veranstaltet einen Malwettbewerb. Das Thema heißt „Meine Traumstadt“. Der Gewinner bekommt einen großen Malkasten. Nila möchte unbedingt gewinnen. Sie malt jeden Nachmittag an ihrem Bild: eine bunte Stadt mit Türmen, Brücken und einem Fluss.",
    "Ihre Freundin Hanna malt auch mit. Am Tag vor der Abgabe passiert ein Unglück. Hannas kleiner Bruder kippt einen Becher Wasser über ihr Bild. Die Farben laufen ineinander. Hanna weint. „Jetzt habe ich keine Zeit mehr für ein neues Bild“, schluchzt sie.",
    "Nila überlegt lange. Sie könnte jetzt einfach nach Hause gehen. Dann hätte sie eine Gegnerin weniger. Aber sie sieht, wie traurig Hanna ist. „Komm, wir schauen uns das Bild genauer an“, sagt sie. Plötzlich hat sie eine Idee: Die verlaufenen Farben sehen aus wie eine Stadt im Regen! Gemeinsam malen sie Regenschirme und Pfützen dazu.",
    "Bei der Preisverleihung gewinnt Hanna mit ihrem Regenbild den ersten Preis. Nila bekommt nur eine Urkunde. Für einen Moment ist sie enttäuscht. Doch dann umarmt Hanna sie und sagt: „Ohne dich hätte ich gar nichts abgeben können. Der Malkasten gehört uns beiden.“ Nila strahlt."
  ],
  fragen: [
    { t: "tap", q: "Was bekommt der Gewinner?", a: "Malkasten", h: "Der Gewinner bekommt einen großen Malkasten." },
    { t: "mc", q: "Was passiert mit Hannas Bild?", o: ["Es wird gestohlen", "Ihr Bruder kippt Wasser darüber", "Es zerreißt im Wind"], a: 1, h: "Hannas kleiner Bruder kippt einen Becher Wasser über ihr Bild." },
    { t: "mc", q: "Warum hilft Nila, obwohl sie selbst gewinnen will? (Denk nach!)", o: ["Weil sie sieht, wie traurig Hanna ist", "Weil die Lehrerin es will", "Weil ihr eigenes Bild schlecht ist"], a: 0, h: "Aber sie sieht, wie traurig Hanna ist." },
    { t: "mc", q: "Woran erinnern die verlaufenen Farben?", o: ["An einen Sonnenuntergang", "An einen Wald", "An eine Stadt im Regen"], a: 2, h: "Die verlaufenen Farben sehen aus wie eine Stadt im Regen!" },
    { t: "yn", q: "Gewinnt Nila den ersten Preis?", a: false, h: "Nila bekommt nur eine Urkunde." },
    { t: "yn", q: "Ist Nila am Ende glücklich?", a: true, h: "Nila strahlt." },
    { t: "mc", q: "Was zeigt Hanna mit ihrem Satz am Ende? (Lies genau!)", o: ["Dass sie angeben will", "Dass sie dankbar ist und teilen möchte", "Dass sie den Malkasten nicht mag"], a: 1, h: "Der Malkasten gehört uns beiden." }
  ]},

{ id: 275, stufe: 3, emoji: "🔍", titel: "Die Falschmeldungs-Detektive",
  text: [
    "„Habt ihr das gelesen?“, ruft Ben in der Pause. „Im Internet steht, dass morgen alle Schulen geschlossen sind, weil es Schokolade regnet!“ Einige Kinder jubeln. Doch Meena runzelt die Stirn. „Das klingt komisch“, sagt sie. „Lass uns das überprüfen.“",
    "In der Medienstunde erzählen sie ihrer Lehrerin Frau Yilmaz davon. Sie erklärt: „Nicht alles, was im Internet steht, ist wahr. Manche Leute erfinden Nachrichten, um andere zu erschrecken oder zum Lachen zu bringen. Solche erfundenen Meldungen nennt man Falschmeldungen.“",
    "Frau Yilmaz zeigt der Klasse drei Detektivfragen. Erstens: Wer hat die Nachricht geschrieben? Zweitens: Berichten auch andere, bekannte Nachrichtenseiten darüber? Drittens: Klingt die Nachricht zu verrückt, um wahr zu sein? Die Kinder prüfen Bens Meldung. Sie finden keinen Namen, und keine andere Seite berichtet davon.",
    "„Also ist es eine Falschmeldung“, sagt Ben ein bisschen enttäuscht. Meena lacht. „Schokoladenregen gibt es nun mal nicht.“ Von da an nennt sich die Klasse „die Falschmeldungs-Detektive“. Wenn jemand eine seltsame Nachricht mitbringt, prüfen sie sie gemeinsam, bevor sie sie weitererzählen."
  ],
  fragen: [
    { t: "tap", q: "Wie heißt die Lehrerin? Frau …", a: "Yilmaz", h: "ihrer Lehrerin Frau Yilmaz" },
    { t: "mc", q: "Was soll laut der Nachricht vom Himmel regnen?", o: ["Bonbons", "Schokolade", "Geld"], a: 1, h: "weil es Schokolade regnet" },
    { t: "yn", q: "Glaubt Meena die Nachricht sofort?", a: false, h: "Doch Meena runzelt die Stirn." },
    { t: "mc", q: "Warum erfinden manche Leute Nachrichten?", o: ["Um andere zu erschrecken oder zum Lachen zu bringen", "Um Hausaufgaben zu machen", "Weil sie es müssen"], a: 0, h: "um andere zu erschrecken oder zum Lachen zu bringen" },
    { t: "mc", q: "Welche Frage gehört NICHT zu den Detektivfragen? (Lies genau!)", o: ["Wer hat die Nachricht geschrieben?", "Klingt die Nachricht zu verrückt?", "Wie viele Bilder hat die Nachricht?"], a: 2, h: "Wer hat die Nachricht geschrieben?" },
    { t: "mc", q: "Woran merken die Kinder, dass die Meldung falsch ist?", o: ["Ein Erwachsener sagt es ihnen", "Es gibt keinen Namen und keine andere Seite berichtet davon", "Die Nachricht ist zu kurz"], a: 1, h: "Sie finden keinen Namen, und keine andere Seite berichtet davon." },
    { t: "yn", q: "Ist es klug, eine seltsame Nachricht zu prüfen, bevor man sie weitererzählt? (Denk nach!)", a: true, h: "prüfen sie sie gemeinsam, bevor sie sie weitererzählen" }
  ]},

{ id: 276, stufe: 3, emoji: "🍛", titel: "Das Familienrezept",
  text: [
    "Jedes Jahr zum Geburtstag kocht Paati, Kirthanas Oma, ein ganz besonderes Curry. Es duftet nach Zimt, Kardamom und Kokos. Doch Paati hat das Rezept nie aufgeschrieben. „Das steht alles in meinem Kopf“, sagt sie immer.",
    "In diesem Jahr ist Paati zu Besuch bei Verwandten in Sri Lanka. Kirthana hat aber bald Geburtstag. „Ohne Paatis Curry ist es kein richtiger Geburtstag“, sagt sie traurig. Da hat Mama eine Idee: „Wir rufen Paati an und kochen zusammen mit ihr!“",
    "Am Samstag stellen sie das Tablet in die Küche. Paati erscheint auf dem Bildschirm und gibt Anweisungen. „Erst die Zwiebeln langsam goldbraun braten. Nicht zu schnell, sonst werden sie bitter!“ Kirthana schreibt alles in ein Heft. Bei manchen Gewürzen sagt Paati nur „eine Handvoll“ oder „so viel, wie es sich richtig anfühlt“. Das ist gar nicht so einfach.",
    "Am Ende probiert Kirthana. Es schmeckt fast genauso wie bei Paati. „Was fehlt denn noch?“, fragt sie. Paati lacht. „Die Liebe beim Kochen. Aber die hast du ja schon hineingetan.“ Kirthana hütet das Heft jetzt wie einen Schatz. Endlich ist das Familienrezept aufgeschrieben."
  ],
  fragen: [
    { t: "tap", q: "Wie nennt Kirthana ihre Oma?", a: "Paati", h: "kocht Paati, Kirthanas Oma" },
    { t: "mc", q: "Wonach duftet das Curry NICHT? (Lies genau!)", o: ["Nach Zimt", "Nach Zitrone", "Nach Kokos"], a: 1, h: "Es duftet nach Zimt, Kardamom und Kokos." },
    { t: "yn", q: "Hat Paati das Rezept aufgeschrieben?", a: false, h: "Doch Paati hat das Rezept nie aufgeschrieben." },
    { t: "mc", q: "Wie kochen Kirthana und Mama mit Paati zusammen?", o: ["Paati hilft über einen Videoanruf", "Paati schickt einen Brief", "Paati kommt extra nach Hause"], a: 0, h: "Paati erscheint auf dem Bildschirm und gibt Anweisungen." },
    { t: "mc", q: "Warum soll man die Zwiebeln langsam braten?", o: ["Damit sie süß werden", "Damit es nicht spritzt", "Sonst werden sie bitter"], a: 2, h: "Nicht zu schnell, sonst werden sie bitter!" },
    { t: "mc", q: "Warum ist es schwer, Paatis Anweisungen aufzuschreiben? (Denk nach!)", o: ["Weil Paati zu leise spricht", "Weil sie keine genauen Mengen nennt", "Weil Kirthana keinen Stift hat"], a: 1, h: "Bei manchen Gewürzen sagt Paati nur" },
    { t: "yn", q: "Ist das Rezept am Ende aufgeschrieben?", a: true, h: "Endlich ist das Familienrezept aufgeschrieben." }
  ]},

{ id: 277, stufe: 3, emoji: "🏡", titel: "Der einsame Nachbar",
  text: [
    "Im Haus neben Jamal wohnt Herr Kowalski. Er ist alt, lebt allein und spricht kaum mit jemandem. Die Kinder in der Straße finden ihn komisch, weil er nie lächelt. Wenn ein Ball in seinen Garten fliegt, traut sich keiner, ihn zu holen.",
    "Eines Tages fällt Jamal auf, dass Herrn Kowalskis Briefkasten überquillt. Jamal macht sich Sorgen und erzählt es seiner Mutter. Sie klingelt sofort beim Nachbarn. Nach einer Weile öffnet Herr Kowalski langsam die Tür. Er hat sich am Fuß verletzt und kann kaum laufen.",
    "Von nun an hilft Jamal jeden Tag. Er holt die Post, trägt die Einkaufstüten und gießt die Blumen. Dabei kommen die beiden ins Gespräch. Herr Kowalski erzählt, dass er früher Uhrmacher war und dass seine Frau vor zwei Jahren gestorben ist. „Seitdem bin ich oft allein“, sagt er.",
    "Jamal merkt, dass Herr Kowalski gar nicht unfreundlich ist, sondern einsam. Eines Nachmittags bringt Jamal seine Freunde mit. Herr Kowalski zeigt ihnen, wie eine Uhr von innen aussieht. Zum ersten Mal sehen die Kinder ihn lächeln. Jetzt besuchen sie ihn jede Woche."
  ],
  fragen: [
    { t: "tap", q: "Was war Herr Kowalski früher von Beruf?", a: "Uhrmacher", h: "dass er früher Uhrmacher war" },
    { t: "mc", q: "Warum finden die Kinder Herrn Kowalski komisch?", o: ["Weil er nie lächelt", "Weil er laut singt", "Weil er einen großen Hund hat"], a: 0, h: "weil er nie lächelt" },
    { t: "mc", q: "Was fällt Jamal auf?", o: ["Das Licht brennt die ganze Nacht", "Der Briefkasten quillt über", "Die Haustür steht offen"], a: 1, h: "dass Herrn Kowalskis Briefkasten überquillt" },
    { t: "yn", q: "Ist Herr Kowalski verletzt?", a: true, h: "Er hat sich am Fuß verletzt" },
    { t: "mc", q: "Wobei hilft Jamal NICHT? (Lies genau!)", o: ["Post holen", "Blumen gießen", "Auto waschen"], a: 2, h: "Er holt die Post, trägt die Einkaufstüten und gießt die Blumen." },
    { t: "mc", q: "Warum war Herr Kowalski so still? (Denk nach!)", o: ["Weil er die Kinder nicht mag", "Weil er einsam ist", "Weil er nicht sprechen kann"], a: 1, h: "sondern einsam" },
    { t: "yn", q: "Lächelt Herr Kowalski auch am Ende nie?", a: false, h: "Zum ersten Mal sehen die Kinder ihn lächeln." }
  ]},

{ id: 278, stufe: 3, emoji: "🌕", titel: "Die Mondfinsternis",
  text: [
    "Bei einer Mondfinsternis wird der Vollmond für eine Weile dunkel oder färbt sich rötlich. Früher hatten manche Menschen deshalb Angst. Heute wissen wir, wie dieses Himmelsschauspiel entsteht. Forscher können sogar viele Jahre im Voraus berechnen, wann es die nächste Mondfinsternis gibt.",
    "Der Mond leuchtet nicht selbst. Er wird von der Sonne angestrahlt. Bei einer Mondfinsternis stehen Sonne, Erde und Mond genau in einer Linie. Die Erde steht dabei in der Mitte. Sie wirft einen großen Schatten ins All, und der Mond wandert durch diesen Schatten hindurch. Deshalb kann es eine Mondfinsternis nur bei Vollmond geben.",
    "Aber warum wird der Mond rot und nicht einfach schwarz? Ein kleiner Teil des Sonnenlichts wird von der Lufthülle der Erde umgelenkt und erreicht trotzdem den Mond. Vor allem rotes Licht kommt durch. Deshalb leuchtet der Mond während der Finsternis kupferrot.",
    "Eine Mondfinsternis kann mehrere Stunden dauern. Man braucht kein Fernrohr, um sie zu beobachten. Anders als bei einer Sonnenfinsternis darf man ganz ohne Schutzbrille hinschauen, denn das Licht des Mondes schadet den Augen nicht. Man braucht nur einen klaren Himmel und ein bisschen Geduld."
  ],
  fragen: [
    { t: "tap", q: "Bei welcher Mondphase kann es eine Mondfinsternis geben?", a: "Vollmond", h: "nur bei Vollmond" },
    { t: "yn", q: "Leuchtet der Mond selbst?", a: false, h: "Der Mond leuchtet nicht selbst." },
    { t: "mc", q: "Was steht bei einer Mondfinsternis in der Mitte?", o: ["Der Mond", "Die Sonne", "Die Erde"], a: 2, h: "Die Erde steht dabei in der Mitte." },
    { t: "mc", q: "Warum wird der Mond dunkel? (Denk nach!)", o: ["Weil er durch den Schatten der Erde wandert", "Weil Wolken davor sind", "Weil er ausgeht wie eine Lampe"], a: 0, h: "der Mond wandert durch diesen Schatten hindurch" },
    { t: "mc", q: "Warum wird der Mond rot?", o: ["Weil er heiß wird", "Weil rotes Licht durch die Lufthülle der Erde zum Mond gelangt", "Weil die Sonne rot ist"], a: 1, h: "Vor allem rotes Licht kommt durch." },
    { t: "yn", q: "Darf man eine Mondfinsternis ohne Schutzbrille ansehen?", a: true, h: "darf man ganz ohne Schutzbrille hinschauen" },
    { t: "mc", q: "Was braucht man laut Text, um eine Mondfinsternis zu sehen? (Lies genau!)", o: ["Ein Fernrohr", "Einen klaren Himmel und Geduld", "Eine Schutzbrille"], a: 1, h: "Man braucht nur einen klaren Himmel und ein bisschen Geduld." }
  ]},

{ id: 279, stufe: 3, emoji: "🏞️", titel: "Die Expedition zum Bach",
  text: [
    "In den Herbstferien beschließen Elias und seine Cousine Kavya, eine echte Expedition zu machen. Ihr Ziel ist der kleine Bach hinter dem Dorf. Sie packen einen Rucksack mit Becherlupe, Notizblock, Gummistiefeln und Proviant. Kavyas Opa begleitet sie, denn allein dürfen sie nicht ans Wasser.",
    "Am Bach drehen die beiden vorsichtig Steine um. Darunter wimmelt es von kleinen Tieren. Sie finden Bachflohkrebse, die auf der Seite liegend schwimmen, und Larven von Köcherfliegen. Diese Larven bauen sich aus Sandkörnern und Pflanzenresten eine Art Schutzröhre, die sie mit sich herumtragen.",
    "Opa erklärt: „Viele dieser Tiere leben nur in sauberem Wasser. Wenn man sie findet, ist das ein gutes Zeichen.“ Elias schreibt alles in seinen Notizblock und malt die Tiere ab. Nach dem Beobachten setzen sie jedes Tier genau dort wieder ins Wasser, wo sie es gefunden haben.",
    "Auf dem Rückweg entdeckt Kavya am Ufer eine Plastiktüte und mehrere Dosen. „Die gehören hier nicht hin“, sagt sie entschlossen. Zusammen sammeln sie den Müll ein. „Unser Bach ist gesund“, sagt Elias stolz. „Und jetzt ist er sogar noch ein bisschen sauberer.“"
  ],
  fragen: [
    { t: "tap", q: "Wer begleitet die Kinder zum Bach?", a: "Opa", h: "Kavyas Opa begleitet sie" },
    { t: "mc", q: "Warum geht Opa mit? (Denk nach!)", o: ["Weil die Kinder nicht allein ans Wasser dürfen", "Weil er angeln will", "Weil er den Weg nicht kennt"], a: 0, h: "denn allein dürfen sie nicht ans Wasser" },
    { t: "mc", q: "Woraus bauen Köcherfliegenlarven ihre Schutzröhre?", o: ["Aus Papier", "Aus Sandkörnern und Pflanzenresten", "Aus Eis"], a: 1, h: "aus Sandkörnern und Pflanzenresten" },
    { t: "mc", q: "Was bedeutet es, wenn man diese Tiere im Bach findet?", o: ["Dass der Bach austrocknet", "Dass es bald regnet", "Dass das Wasser sauber ist"], a: 2, h: "Viele dieser Tiere leben nur in sauberem Wasser." },
    { t: "yn", q: "Nehmen die Kinder die Tiere mit nach Hause?", a: false, h: "setzen sie jedes Tier genau dort wieder ins Wasser" },
    { t: "yn", q: "Sammeln die Kinder Müll ein?", a: true, h: "Zusammen sammeln sie den Müll ein." },
    { t: "mc", q: "Warum ist der Bach am Ende „noch ein bisschen sauberer“? (Lies genau!)", o: ["Weil es geregnet hat", "Weil die Kinder den Müll eingesammelt haben", "Weil mehr Fische darin sind"], a: 1, h: "Und jetzt ist er sogar noch ein bisschen sauberer." }
  ]},

{ id: 280, stufe: 3, emoji: "👔", titel: "Ein Tag als Erwachsener",
  text: [
    "„Erwachsene haben es so gut“, beschwert sich Rohan beim Abendessen. „Sie dürfen ins Bett gehen, wann sie wollen, und keiner sagt ihnen, was sie tun sollen.“ Papa lächelt. „Gut“, sagt er. „Morgen ist Samstag. Dann bist du einen Tag lang der Erwachsene im Haus.“",
    "Am Samstag weckt Papa Rohan um sieben Uhr. „Das Frühstück für alle musst du machen“, sagt er. Rohan deckt den Tisch, kocht Tee und schneidet Brot. Danach geht er mit Mama einkaufen. Er hat nur zwanzig Euro. Für die Gummibärchen reicht das Geld am Ende nicht mehr.",
    "Am Nachmittag wäscht Rohan die Wäsche, füttert die Katze und hilft seiner kleinen Schwester bei den Hausaufgaben. Dann muss er noch das Abendessen planen. Er kocht Nudeln mit Tomatensoße. Die Nudeln sind etwas zu weich, aber alle essen tapfer auf.",
    "Am Abend dürfte Rohan so lange aufbleiben, wie er will. Aber er ist so müde, dass er schon um neun Uhr auf dem Sofa einschläft. Am Sonntag sagt er: „Ich glaube, Erwachsene haben es doch nicht so leicht.“ Mama lacht. „Und Kinder dürfen jetzt wieder einfach Kind sein.“"
  ],
  fragen: [
    { t: "tap", q: "Wie viele Euro hat Rohan zum Einkaufen?", a: "zwanzig", h: "Er hat nur zwanzig Euro." },
    { t: "mc", q: "Warum möchte Rohan ein Erwachsener sein?", o: ["Weil Erwachsene größer sind", "Weil Erwachsenen keiner sagt, was sie tun sollen", "Weil Erwachsene Auto fahren"], a: 1, h: "keiner sagt ihnen, was sie tun sollen" },
    { t: "mc", q: "Wofür reicht das Geld am Ende nicht mehr?", o: ["Für Gummibärchen", "Für Brot", "Für Katzenfutter"], a: 0, h: "Für die Gummibärchen reicht das Geld am Ende nicht mehr." },
    { t: "yn", q: "Gelingen die Nudeln perfekt?", a: false, h: "Die Nudeln sind etwas zu weich" },
    { t: "mc", q: "Warum schläft Rohan so früh ein? (Denk nach!)", o: ["Weil er krank ist", "Weil ihm langweilig ist", "Weil der Tag sehr anstrengend war"], a: 2, h: "Aber er ist so müde" },
    { t: "mc", q: "Was hat Rohan am Ende gelernt? (Lies genau!)", o: ["Dass Erwachsene es nicht so leicht haben", "Dass Kochen ganz einfach ist", "Dass er nie mehr einkaufen will"], a: 0, h: "Ich glaube, Erwachsene haben es doch nicht so leicht." },
    { t: "yn", q: "Hilft Rohan seiner Schwester bei den Hausaufgaben?", a: true, h: "hilft seiner kleinen Schwester bei den Hausaufgaben" }
  ]},

{ id: 281, stufe: 3, emoji: "💰", titel: "Die verschwundene Klassenkasse",
  text: [
    "In der Klasse 4b steht eine kleine Blechdose im Regal. Darin sammeln die Kinder Geld für den Ausflug in den Kletterpark. Am Freitag will Frau Demir das Geld zählen. Doch die Dose ist leer! Alle sind entsetzt. „Wer war das?“, ruft Lars und schaut sofort zu Kenji, dem neuen Schüler.",
    "Kenji wird rot und senkt den Kopf. „Ich war das nicht“, sagt er leise. Einige Kinder flüstern trotzdem. Saranya findet das ungerecht. „Nur weil Kenji neu ist, ist er doch kein Dieb“, sagt sie. „Wir sollten erst nachdenken.“",
    "Saranya fragt Frau Demir, wann sie die Dose zuletzt gesehen hat. „Am Mittwoch“, sagt die Lehrerin. „Da habe ich das Geld gezählt, weil der Hausmeister das Regal neu streichen wollte.“ Saranya hat einen Verdacht. „Haben Sie das Geld danach vielleicht woanders hingelegt?“",
    "Frau Demir überlegt. Dann öffnet sie ihre Schreibtischschublade. Darin liegt ein Briefumschlag mit dem ganzen Geld! „Oh nein, das habe ich völlig vergessen“, sagt sie verlegen. Lars entschuldigt sich bei Kenji. „Das war nicht fair von mir“, gibt er zu. Kenji lächelt. Am Ende freuen sich alle auf den Kletterpark."
  ],
  fragen: [
    { t: "tap", q: "Wofür sammeln die Kinder Geld? Für den Ausflug in den …", a: "Kletterpark", h: "für den Ausflug in den Kletterpark" },
    { t: "mc", q: "Wen verdächtigt Lars sofort?", o: ["Saranya", "Kenji", "Den Hausmeister"], a: 1, h: "schaut sofort zu Kenji, dem neuen Schüler" },
    { t: "mc", q: "Warum findet Saranya den Verdacht ungerecht? (Denk nach!)", o: ["Weil Kenji nur verdächtigt wird, weil er neu ist", "Weil Kenji ihr Bruder ist", "Weil sie selbst das Geld genommen hat"], a: 0, h: "Nur weil Kenji neu ist, ist er doch kein Dieb" },
    { t: "mc", q: "Warum hat Frau Demir das Geld am Mittwoch gezählt?", o: ["Weil sie einkaufen wollte", "Weil Kenji es wollte", "Weil der Hausmeister das Regal streichen wollte"], a: 2, h: "weil der Hausmeister das Regal neu streichen wollte" },
    { t: "yn", q: "Wurde das Geld wirklich gestohlen?", a: false, h: "Darin liegt ein Briefumschlag mit dem ganzen Geld!" },
    { t: "yn", q: "Entschuldigt sich Lars bei Kenji?", a: true, h: "Lars entschuldigt sich bei Kenji." },
    { t: "mc", q: "Was kann man aus der Geschichte lernen? (Lies genau!)", o: ["Neue Schüler sind verdächtig", "Man sollte niemanden ohne Beweis beschuldigen", "Geld gehört in eine Blechdose"], a: 1, h: "Wir sollten erst nachdenken." }
  ]},

{ id: 282, stufe: 3, emoji: "💡", titel: "Die Erfinder-AG",
  text: [
    "Jeden Donnerstag trifft sich in der Schule die Erfinder-AG. Herr Lindqvist leitet sie. Diesmal hat er eine besondere Aufgabe: „Erfindet etwas, das einem Menschen in unserer Schule das Leben leichter macht.“ Die Kinder sammeln Ideen. Ein Roboter, der Hausaufgaben macht? Leider viel zu schwierig.",
    "Dann erzählt Aditi von ihrem Mitschüler Paul. Er sitzt im Rollstuhl und kommt nicht an den Wasserhahn im Klassenzimmer, weil das Waschbecken zu hoch hängt. Jedes Mal muss er jemanden um Hilfe bitten.",
    "Die Gruppe macht sich an die Arbeit. Zuerst fragen sie Paul selbst, was ihm helfen würde. Dann bauen sie aus einem Holzgriff, einem Seil und einer Feder einen Hebel. Wenn Paul am Griff zieht, dreht sich der Wasserhahn auf. Der erste Versuch klappt nicht, weil das Seil reißt.",
    "Beim zweiten Versuch nehmen sie ein stärkeres Seil, und es funktioniert. Paul zieht am Griff, und das Wasser läuft. Er grinst über das ganze Gesicht. „Jetzt kann ich mir allein die Hände waschen“, sagt er. Herr Lindqvist ist stolz. „Gute Erfinder hören zuerst zu“, sagt er. „Und sie geben nicht auf, wenn etwas schiefgeht.“"
  ],
  fragen: [
    { t: "tap", q: "Wie heißt der Mitschüler im Rollstuhl?", a: "Paul", h: "von ihrem Mitschüler Paul" },
    { t: "mc", q: "Warum braucht Paul Hilfe am Waschbecken?", o: ["Weil das Waschbecken zu hoch hängt", "Weil das Wasser zu kalt ist", "Weil er keine Seife hat"], a: 0, h: "weil das Waschbecken zu hoch hängt" },
    { t: "mc", q: "Was macht die Gruppe als Erstes? (Lies genau!)", o: ["Sie kauft ein Seil", "Sie baut einen Roboter", "Sie fragt Paul, was ihm helfen würde"], a: 2, h: "Zuerst fragen sie Paul selbst, was ihm helfen würde." },
    { t: "yn", q: "Klappt der erste Versuch?", a: false, h: "Der erste Versuch klappt nicht" },
    { t: "mc", q: "Warum misslingt der erste Versuch?", o: ["Der Griff bricht ab", "Das Seil reißt", "Die Feder fehlt"], a: 1, h: "weil das Seil reißt" },
    { t: "yn", q: "Kann Paul sich am Ende allein die Hände waschen?", a: true, h: "Jetzt kann ich mir allein die Hände waschen" },
    { t: "mc", q: "Was meint Herr Lindqvist mit „Gute Erfinder hören zuerst zu“? (Denk nach!)", o: ["Erfinder müssen leise sein", "Man muss erst verstehen, was ein Mensch braucht", "Erfinder hören gern Musik"], a: 1, h: "Gute Erfinder hören zuerst zu" }
  ]},

{ id: 283, stufe: 3, emoji: "♟️", titel: "Der Schachclub",
  text: [
    "Dinesh ist neu im Schachclub. Er kennt die Regeln schon, aber er verliert jedes Spiel. Am meisten ärgert er sich, wenn er gegen Clara spielt. Sie ist erst acht Jahre alt und schlägt ihn trotzdem jedes Mal nach wenigen Zügen.",
    "Nach einer weiteren Niederlage wirft Dinesh wütend seinen König um. „Schach ist doof“, schimpft er. Die Clubleiterin Frau Haddad setzt sich zu ihm. „Weißt du, warum Clara so gut ist?“, fragt sie. „Sie hat schon hunderte Spiele verloren. Aus jedem Fehler hat sie etwas gelernt.“",
    "Frau Haddad gibt Dinesh einen Tipp: „Bevor du einen Zug machst, frag dich immer: Was will mein Gegner als Nächstes tun?“ Dinesh übt das zu Hause mit seinem Opa. Am Anfang dauert jeder Zug ewig. Aber nach und nach erkennt er die Fallen, bevor er hineintappt.",
    "Vier Wochen später spielt er wieder gegen Clara. Das Spiel dauert sehr lange. Am Ende verliert Dinesh zwar, aber nur ganz knapp. Clara gibt ihm die Hand. „Das war mein schwerstes Spiel heute“, sagt sie. Dinesh ist trotzdem stolz. Er weiß jetzt: Verlieren gehört zum Lernen dazu."
  ],
  fragen: [
    { t: "tap", q: "Wie alt ist Clara? … Jahre", a: "acht", h: "Sie ist erst acht Jahre alt" },
    { t: "mc", q: "Wie reagiert Dinesh nach einer weiteren Niederlage?", o: ["Er lacht", "Er wirft wütend seinen König um", "Er geht sofort nach Hause"], a: 1, h: "wirft Dinesh wütend seinen König um" },
    { t: "mc", q: "Warum ist Clara so gut? (Denk nach!)", o: ["Weil sie aus vielen verlorenen Spielen gelernt hat", "Weil sie schummelt", "Weil sie älter ist als Dinesh"], a: 0, h: "Aus jedem Fehler hat sie etwas gelernt." },
    { t: "mc", q: "Welchen Tipp gibt Frau Haddad?", o: ["Schneller ziehen", "Immer mit dem König anfangen", "Überlegen, was der Gegner als Nächstes tun will"], a: 2, h: "Was will mein Gegner als Nächstes tun?" },
    { t: "yn", q: "Gewinnt Dinesh am Ende gegen Clara?", a: false, h: "Am Ende verliert Dinesh zwar, aber nur ganz knapp." },
    { t: "yn", q: "Ist Dinesh am Ende stolz?", a: true, h: "Dinesh ist trotzdem stolz." },
    { t: "mc", q: "Was zeigt Claras Satz am Ende? (Lies genau!)", o: ["Dass sie müde ist", "Dass Dinesh viel besser geworden ist", "Dass sie heute nicht spielen wollte"], a: 1, h: "Das war mein schwerstes Spiel heute" }
  ]},

{ id: 284, stufe: 3, emoji: "🏃", titel: "Opas erster Marathon",
  text: [
    "Opa Ravi ist siebzig Jahre alt. Beim Frühstück verkündet er: „Nächstes Jahr laufe ich einen Marathon.“ Die ganze Familie lacht. Ein Marathon ist über 42 Kilometer lang! Opa ist noch nie weiter als bis zum Bäcker gelaufen. Doch er meint es ernst.",
    "Zuerst lässt sich Opa von einer Ärztin untersuchen. Sie erlaubt ihm, zu trainieren, wenn er langsam anfängt. Also geht er jeden Morgen zügig spazieren. Nach einem Monat joggt er kleine Strecken. Seine Enkelin Lakshmi fährt mit dem Fahrrad neben ihm her und trägt die Wasserflasche. Manchmal tun Opa die Knie weh. Dann macht er eine Pause, aber er gibt nicht auf.",
    "Nach einem Jahr ist es so weit. Am Tag des Marathons stehen tausende Läuferinnen und Läufer an der Startlinie. Lakshmi und ihre Eltern warten mit einem großen Schild an der Strecke. Darauf steht: „Lauf, Opa, lauf!“",
    "Nach fast sechs Stunden kommt Opa ins Ziel. Er strahlt über das ganze Gesicht. Lakshmi hängt ihm die Medaille um. „Es ist egal, wie schnell man ist“, sagt Opa außer Atem. „Wichtig ist, dass man anfängt.“"
  ],
  fragen: [
    { t: "tap", q: "Wie heißt Opas Enkelin?", a: "Lakshmi", h: "Seine Enkelin Lakshmi" },
    { t: "yn", q: "Nimmt die Familie Opas Plan am Anfang ernst?", a: false, h: "Die ganze Familie lacht." },
    { t: "mc", q: "Was macht Opa als Allererstes?", o: ["Er läuft sofort 42 Kilometer", "Er lässt sich von einer Ärztin untersuchen", "Er kauft ein Fahrrad"], a: 1, h: "Zuerst lässt sich Opa von einer Ärztin untersuchen." },
    { t: "mc", q: "Warum fängt Opa mit Spaziergängen an? (Denk nach!)", o: ["Weil er keine Laufschuhe hat", "Weil Lakshmi es will", "Weil die Ärztin sagt, dass er langsam anfangen soll"], a: 2, h: "wenn er langsam anfängt" },
    { t: "mc", q: "Was macht Opa, wenn ihm die Knie wehtun?", o: ["Er macht eine Pause", "Er gibt auf", "Er läuft schneller"], a: 0, h: "Dann macht er eine Pause, aber er gibt nicht auf." },
    { t: "yn", q: "Kommt Opa ins Ziel?", a: true, h: "Nach fast sechs Stunden kommt Opa ins Ziel." },
    { t: "mc", q: "Was ist für Opa am wichtigsten? (Lies genau!)", o: ["Als Erster ankommen", "Eine Medaille bekommen", "Überhaupt anzufangen"], a: 2, h: "Wichtig ist, dass man anfängt." }
  ]},

{ id: 285, stufe: 3, emoji: "🐈", titel: "Ein Besuch im Tierheim",
  text: [
    "Familie Achterberg möchte eine Katze haben. Statt eine zu kaufen, fahren sie ins Tierheim. Dort leben Tiere, die kein Zuhause haben. Manche wurden ausgesetzt, andere wurden abgegeben, weil ihre Besitzer sich nicht mehr um sie kümmern konnten.",
    "Eine Tierpflegerin namens Frau Okoye führt sie herum. Im Katzenhaus gibt es viele Katzen: verspielte junge Kätzchen und ruhige ältere Katzen. Die Kinder Mira und Ilias verlieben sich sofort in ein kleines, graues Kätzchen. Doch in der Ecke sitzt ein alter, schwarzer Kater mit nur einem Ohr. Er heißt Moritz.",
    "„Moritz ist schon seit zwei Jahren bei uns“, erzählt Frau Okoye. „Die meisten Leute wollen junge Katzen. Für alte Tiere ist es schwer, ein neues Zuhause zu finden.“ Mira geht zu Moritz. Er schnurrt und reibt seinen Kopf an ihrer Hand.",
    "Auf der Heimfahrt ist es still im Auto. Am nächsten Tag sagt Ilias: „Das Kätzchen findet bestimmt schnell eine Familie. Aber Moritz nicht.“ Alle sind einverstanden. Eine Woche später zieht Moritz bei Familie Achterberg ein. Er schläft am liebsten auf Miras Bett."
  ],
  fragen: [
    { t: "tap", q: "Wie heißt der alte Kater?", a: "Moritz", h: "Er heißt Moritz." },
    { t: "mc", q: "Warum leben Tiere im Tierheim?", o: ["Weil sie kein Zuhause haben", "Weil sie dort Urlaub machen", "Weil sie dort zur Schule gehen"], a: 0, h: "Dort leben Tiere, die kein Zuhause haben." },
    { t: "mc", q: "Was ist besonders an Moritz?", o: ["Er ist ganz weiß", "Er hat nur ein Ohr", "Er kann Kunststücke"], a: 1, h: "ein alter, schwarzer Kater mit nur einem Ohr" },
    { t: "yn", q: "Ist Moritz erst seit kurzer Zeit im Tierheim?", a: false, h: "Moritz ist schon seit zwei Jahren bei uns" },
    { t: "mc", q: "Warum finden alte Tiere schwer ein Zuhause?", o: ["Weil sie beißen", "Weil sie zu teuer sind", "Weil die meisten Leute junge Katzen wollen"], a: 2, h: "Die meisten Leute wollen junge Katzen." },
    { t: "mc", q: "Warum entscheidet sich die Familie für Moritz? (Denk nach!)", o: ["Weil das Kätzchen schon weg ist", "Weil das Kätzchen leichter eine Familie findet als Moritz", "Weil Moritz jünger ist"], a: 1, h: "Das Kätzchen findet bestimmt schnell eine Familie. Aber Moritz nicht." },
    { t: "yn", q: "Fühlt sich Moritz bei der Familie wohl? (Lies genau!)", a: true, h: "Er schläft am liebsten auf Miras Bett." }
  ]},

{ id: 286, stufe: 3, emoji: "👣", titel: "Das Rätsel der Fußspuren",
  text: [
    "Über Nacht hat es geschneit. Als Zoe am Morgen in den Garten schaut, entdeckt sie seltsame Spuren im Schnee. Sie führen vom Zaun quer über den Rasen bis zum Vogelhäuschen. Dort ist das ganze Vogelfutter verschwunden. „Wer war das?“, fragt sie ihren Bruder Arun.",
    "Die Abdrücke sind ungefähr so groß wie eine Streichholzschachtel. Man sieht fünf lange Zehen mit kleinen Krallen. Eine Katze kann es nicht gewesen sein, denn Katzen hinterlassen nur vier Zehen und meistens keine Krallenspuren.",
    "Arun holt ein Tierbuch. „Ein Dachs? Nein, der hat viel längere Krallen“, murmelt Arun. „Ein Eichhörnchen?“ Zoe schüttelt den Kopf. „Eichhörnchen springen. Dann liegen die Spuren immer in kleinen Gruppen.“ Doch diese Spuren laufen in einer Reihe, und sie sehen fast aus wie kleine Menschenhände.",
    "Am Abend legen sie sich auf die Lauer. Im Licht der Laterne taucht ein Tier mit grauem Fell, einem geringelten Schwanz und einer schwarzen Maske um die Augen auf. „Ein Waschbär!“, flüstert Zoe. Papa hängt das Vogelhäuschen danach an einen dünnen Ast, der den schweren Waschbären nicht trägt."
  ],
  fragen: [
    { t: "tap", q: "Wie heißt Zoes Bruder?", a: "Arun", h: "ihren Bruder Arun" },
    { t: "mc", q: "Was ist am Vogelhäuschen passiert?", o: ["Es ist umgefallen", "Das Futter ist verschwunden", "Ein Vogel ist eingezogen"], a: 1, h: "Dort ist das ganze Vogelfutter verschwunden." },
    { t: "mc", q: "Warum kann es keine Katze gewesen sein? (Denk nach!)", o: ["Weil man fünf Zehen mit Krallen sieht", "Weil Katzen keinen Schnee mögen", "Weil die Katze im Haus schläft"], a: 0, h: "Katzen hinterlassen nur vier Zehen" },
    { t: "mc", q: "Woran erkennt Zoe, dass es kein Eichhörnchen war?", o: ["An der Farbe", "Am Geruch", "Die Spuren laufen in einer Reihe statt in Gruppen"], a: 2, h: "Doch diese Spuren laufen in einer Reihe" },
    { t: "yn", q: "Benutzen die Kinder ein Tierbuch?", a: true, h: "Arun holt ein Tierbuch." },
    { t: "yn", q: "War der Futterdieb ein Fuchs?", a: false, h: "Ein Waschbär!" },
    { t: "mc", q: "Woran erkennt man den Waschbären NICHT? (Lies genau!)", o: ["An langen Ohren", "An der schwarzen Maske", "Am geringelten Schwanz"], a: 0, h: "einer schwarzen Maske um die Augen" }
  ]},

{ id: 287, stufe: 3, emoji: "🌴", titel: "Die Reise nach Jaffna",
  text: [
    "In den Sommerferien fliegt Vishnu mit seinen Eltern zum ersten Mal nach Sri Lanka. Ihr Ziel ist Jaffna, eine Stadt ganz im Norden der Insel. Dort ist Papa aufgewachsen. Vishnu ist aufgeregt, aber auch ein bisschen nervös. Er kennt seine Verwandten bisher nur aus Videoanrufen.",
    "Als sie ankommen, ist es heiß und feucht. Überall wachsen hohe Palmyrapalmen mit fächerförmigen Blättern. Tante Malar wartet schon am Tor. Sie umarmt Vishnu so fest, dass er kaum Luft bekommt.",
    "Am nächsten Morgen besuchen sie einen großen Tempel. Viele Menschen tragen bunte Kleidung und bringen Blumen mit. Vishnu muss vor dem Eingang seine Schuhe ausziehen, so wie alle anderen. Papa erklärt ihm, dass das ein Zeichen von Respekt ist.",
    "Am schwierigsten findet Vishnu die Sprache. Zu Hause in Deutschland spricht er meistens Deutsch. Seine Cousins sprechen aber schnelles Tamil. Zuerst versteht er wenig. Doch jeden Tag lernt er neue Wörter dazu. Am Ende der Reise kann er sogar einen kleinen Witz auf Tamil erzählen. Alle lachen, und Vishnu fühlt sich zum ersten Mal richtig zu Hause in Jaffna."
  ],
  fragen: [
    { t: "tap", q: "Wie heißt die Tante?", a: "Malar", h: "Tante Malar wartet schon am Tor." },
    { t: "mc", q: "Wo liegt Jaffna?", o: ["Im Süden der Insel", "Ganz im Norden der Insel", "In Deutschland"], a: 1, h: "eine Stadt ganz im Norden der Insel" },
    { t: "mc", q: "Warum ist Vishnu nervös? (Denk nach!)", o: ["Weil er seine Verwandten nur aus Videoanrufen kennt", "Weil er Angst vor Mangos hat", "Weil er nicht gern fliegt"], a: 0, h: "Er kennt seine Verwandten bisher nur aus Videoanrufen." },
    { t: "yn", q: "Ist es in Jaffna kalt?", a: false, h: "ist es heiß und feucht" },
    { t: "mc", q: "Warum zieht man vor dem Tempel die Schuhe aus?", o: ["Weil die Schuhe nass sind", "Weil der Boden heiß ist", "Als Zeichen von Respekt"], a: 2, h: "dass das ein Zeichen von Respekt ist" },
    { t: "mc", q: "Was findet Vishnu am schwierigsten?", o: ["Das Essen", "Die Hitze", "Die Sprache"], a: 2, h: "Am schwierigsten findet Vishnu die Sprache." },
    { t: "yn", q: "Versteht Vishnu am Ende der Reise mehr Tamil als am Anfang? (Lies genau!)", a: true, h: "Doch jeden Tag lernt er neue Wörter dazu." }
  ]},

{ id: 288, stufe: 3, emoji: "❄️", titel: "Schneesturm in Kanada",
  text: [
    "Lena besucht in den Winterferien ihre Großeltern in Kanada. Sie wohnen in einem Holzhaus am Rand einer kleinen Stadt. Am dritten Tag warnt das Radio: „Heute Nacht kommt ein starker Schneesturm. Bleiben Sie zu Hause!“ Grandpa holt sofort Feuerholz ins Haus, und Grandma füllt Wasser in große Töpfe.",
    "Lena versteht nicht, warum. „Wozu braucht ihr so viel Wasser?“, fragt sie. „Bei einem Schneesturm fällt manchmal der Strom aus“, erklärt Grandma. „Dann funktioniert auch unsere Wasserpumpe nicht mehr.“",
    "Mitten in der Nacht geht tatsächlich das Licht aus. Grandpa zündet Kerzen an und legt Holz in den Ofen. Die drei kuscheln sich in Decken ein. Grandma erzählt Geschichten aus ihrer Kindheit, als sie wegen eines Sturms einmal eine ganze Woche nicht zur Schule gehen konnte.",
    "Am Morgen ist alles weiß. Der Schnee reicht bis zu den Fensterbänken, und die Haustür lässt sich kaum öffnen. Am Nachmittag ist der Strom wieder da. Für Lena war der Sturm eines der spannendsten Erlebnisse ihres Lebens. Und sie weiß jetzt, wie wichtig es ist, gut vorbereitet zu sein."
  ],
  fragen: [
    { t: "tap", q: "In was für einem Haus wohnen die Großeltern? In einem …", a: "Holzhaus", h: "Sie wohnen in einem Holzhaus" },
    { t: "mc", q: "Wovor warnt das Radio?", o: ["Vor einem Gewitter", "Vor einem Schneesturm", "Vor Hochwasser"], a: 1, h: "Heute Nacht kommt ein starker Schneesturm." },
    { t: "mc", q: "Warum füllt Grandma Wasser in Töpfe? (Denk nach!)", o: ["Damit sie bei Stromausfall trotzdem Wasser haben", "Weil sie Suppe kochen will", "Damit die Pflanzen Wasser haben"], a: 0, h: "Dann funktioniert auch unsere Wasserpumpe nicht mehr." },
    { t: "yn", q: "Fällt in der Nacht der Strom aus?", a: true, h: "Mitten in der Nacht geht tatsächlich das Licht aus." },
    { t: "mc", q: "Wie bleibt es in der Nacht warm im Haus?", o: ["Mit einer Heizdecke", "Mit einem Föhn", "Mit Holz im Ofen und Decken"], a: 2, h: "legt Holz in den Ofen" },
    { t: "yn", q: "Lässt sich die Haustür am Morgen leicht öffnen?", a: false, h: "die Haustür lässt sich kaum öffnen" },
    { t: "mc", q: "Was hat Lena gelernt? (Lies genau!)", o: ["Dass Schnee langweilig ist", "Dass man gut vorbereitet sein sollte", "Dass es in Kanada immer warm ist"], a: 1, h: "wie wichtig es ist, gut vorbereitet zu sein" }
  ]},

{ id: 289, stufe: 3, emoji: "📺", titel: "Streit um die Fernbedienung",
  text: [
    "Bei Familie Murugan gibt es jeden Abend denselben Streit. Karthik will Fußball schauen, seine Schwester Divya eine Tiersendung. Beide halten die Fernbedienung fest und ziehen daran. „Ich war zuerst da!“, ruft Karthik. „Gar nicht wahr!“, ruft Divya.",
    "An einem Abend zieht Karthik besonders fest. Die Fernbedienung rutscht ihm aus der Hand, fliegt durch das Zimmer und landet auf dem Boden. Die Batterieklappe springt ab, und eine Batterie rollt unter das Sofa. Jetzt kann keiner fernsehen. Beide schauen sich erschrocken an.",
    "Mama kommt ins Zimmer. Sie schimpft nicht, sondern setzt sich hin. „Ihr seid beide schlau“, sagt sie. „Findet selbst eine Lösung, mit der ihr beide zufrieden seid.“ Karthik und Divya schauen sich lange an. Dann krabbeln sie gemeinsam unter das Sofa und suchen die Batterie.",
    "Danach setzen sie sich an den Küchentisch und schreiben einen Plan. Montags, mittwochs und freitags darf Divya aussuchen, dienstags und donnerstags Karthik. Am Wochenende entscheiden sie zusammen. Wenn ein wichtiges Fußballspiel läuft, darf Karthik mit Divya tauschen. Den Plan hängen sie an den Kühlschrank. Seitdem ist es abends viel ruhiger."
  ],
  fragen: [
    { t: "tap", q: "Was möchte Divya schauen? Eine …", a: "Tiersendung", h: "seine Schwester Divya eine Tiersendung" },
    { t: "mc", q: "Was passiert, als Karthik besonders fest zieht?", o: ["Der Fernseher geht kaputt", "Die Fernbedienung fliegt auf den Boden", "Divya fällt hin"], a: 1, h: "fliegt durch das Zimmer und landet auf dem Boden" },
    { t: "yn", q: "Schimpft Mama mit den Kindern?", a: false, h: "Sie schimpft nicht, sondern setzt sich hin." },
    { t: "mc", q: "Warum sollen die Kinder selbst eine Lösung finden? (Denk nach!)", o: ["Weil Mama keine Zeit hat", "Weil Mama den Fernseher verkaufen will", "Weil Mama ihnen zutraut, das Problem allein zu lösen"], a: 2, h: "Ihr seid beide schlau" },
    { t: "mc", q: "Was tun die Kinder zuerst gemeinsam?", o: ["Sie suchen die Batterie", "Sie gehen ins Bett", "Sie rufen Papa an"], a: 0, h: "Dann krabbeln sie gemeinsam unter das Sofa und suchen die Batterie." },
    { t: "mc", q: "Wer darf am Dienstag aussuchen? (Lies genau!)", o: ["Divya", "Karthik", "Mama"], a: 1, h: "dienstags und donnerstags Karthik" },
    { t: "yn", q: "Ist es seit dem Plan abends ruhiger?", a: true, h: "Seitdem ist es abends viel ruhiger." }
  ]},

{ id: 290, stufe: 3, emoji: "🦁", titel: "Die mutige Entscheidung",
  text: [
    "In der Pause stehen ein paar Kinder aus der vierten Klasse um Nuri herum. Nuri ist klein und trägt eine dicke Brille. „Brillenschlange!“, ruft Max, und die anderen lachen. Sanjay steht daneben. Max ist sein Freund, und Sanjay will dazugehören.",
    "Sanjay hat ein komisches Gefühl im Bauch. Er weiß, dass das gemein ist. Aber wenn er etwas sagt, lachen die anderen vielleicht auch über ihn. Dann denkt er daran, wie er sich in der ersten Klasse gefühlt hat, als alle über seine Brotdose mit Reis gelacht haben.",
    "Sanjay atmet tief durch und stellt sich neben Nuri. „Hört auf“, sagt er laut. „Das ist nicht lustig.“ Max schaut ihn überrascht an. Dann zuckt er mit den Schultern, und die Gruppe geht weg. Sanjays Knie zittern ein bisschen.",
    "Nach der Pause erzählen Sanjay und Nuri ihrer Lehrerin, was passiert ist. Sie spricht am nächsten Tag mit der ganzen Klasse über Freundlichkeit. Nuri und Sanjay spielen ab jetzt oft zusammen. Sanjay hat gemerkt: Mut bedeutet nicht, keine Angst zu haben. Mut bedeutet, trotz Angst das Richtige zu tun."
  ],
  fragen: [
    { t: "tap", q: "Was trägt Nuri? Eine dicke …", a: "Brille", h: "trägt eine dicke Brille" },
    { t: "mc", q: "Warum sagt Sanjay zuerst nichts? (Denk nach!)", o: ["Weil er Angst hat, dass sie auch über ihn lachen", "Weil er Nuri nicht kennt", "Weil er müde ist"], a: 0, h: "lachen die anderen vielleicht auch über ihn" },
    { t: "mc", q: "Woran erinnert sich Sanjay?", o: ["An seinen Geburtstag", "An die Zeit, als über seine Brotdose gelacht wurde", "An ein Fußballspiel"], a: 1, h: "als alle über seine Brotdose mit Reis gelacht haben" },
    { t: "yn", q: "Bleibt Sanjay am Ende still?", a: false, h: "sagt er laut" },
    { t: "yn", q: "Hat Sanjay dabei ein bisschen Angst? (Lies genau!)", a: true, h: "Sanjays Knie zittern ein bisschen." },
    { t: "mc", q: "Was macht die Lehrerin?", o: ["Sie schimpft mit Nuri", "Sie schickt alle nach Hause", "Sie spricht mit der Klasse über Freundlichkeit"], a: 2, h: "Sie spricht am nächsten Tag mit der ganzen Klasse über Freundlichkeit." },
    { t: "mc", q: "Was bedeutet Mut laut der Geschichte?", o: ["Keine Angst zu haben", "Trotz Angst das Richtige zu tun", "Stärker als andere zu sein"], a: 1, h: "Mut bedeutet, trotz Angst das Richtige zu tun." }
  ]},

{ id: 291, stufe: 3, emoji: "🌍", titel: "Das Klimaprojekt der Schule",
  text: [
    "Die Klasse 4a möchte etwas für das Klima tun. Ihre Lehrerin Frau Weber erklärt zuerst, was das bedeutet: „Wenn wir Strom, Benzin oder Heizöl verbrauchen, entsteht oft ein Gas namens Kohlendioxid. Zu viel davon in der Luft sorgt dafür, dass es auf der Erde immer wärmer wird.“",
    "Die Kinder überlegen, was sie in der Schule ändern können. Ahmed entdeckt, dass in leeren Klassenzimmern oft das Licht brennt. Pia merkt, dass im Winter viele Fenster stundenlang gekippt sind, während die Heizung läuft. Dabei geht viel Wärme verloren. Besser ist es, mehrmals am Tag kurz und weit zu lüften.",
    "Die Klasse gründet die „Energie-Detektive“. Sie schalten unnötiges Licht aus und kleben kleine Erinnerungszettel an die Lichtschalter. Außerdem starten sie einen Wettbewerb: Welche Klasse kommt an den meisten Tagen mit dem Fahrrad oder zu Fuß zur Schule?",
    "Nach drei Monaten zeigt der Hausmeister den Kindern die Stromzähler. Die Schule hat deutlich weniger Strom verbraucht als im Jahr davor. „Ein einzelner Lichtschalter rettet nicht die Welt“, sagt Frau Weber. „Aber wenn viele Menschen kleine Dinge ändern, macht das einen großen Unterschied.“"
  ],
  fragen: [
    { t: "tap", q: "Wie heißt das Gas, das beim Verbrauch von Strom oder Benzin oft entsteht?", a: "Kohlendioxid", h: "ein Gas namens Kohlendioxid" },
    { t: "mc", q: "Was passiert, wenn zu viel Kohlendioxid in der Luft ist?", o: ["Es wird auf der Erde immer wärmer", "Die Luft wird blau", "Es gibt mehr Schnee"], a: 0, h: "dass es auf der Erde immer wärmer wird" },
    { t: "mc", q: "Warum ist es schlecht, Fenster im Winter lange zu kippen? (Denk nach!)", o: ["Weil Vögel hereinfliegen", "Weil viel Wärme verloren geht", "Weil es zu laut wird"], a: 1, h: "Dabei geht viel Wärme verloren." },
    { t: "yn", q: "Ist es besser, kurz und weit zu lüften?", a: true, h: "Besser ist es, mehrmals am Tag kurz und weit zu lüften." },
    { t: "mc", q: "Was machen die Energie-Detektive NICHT? (Lies genau!)", o: ["Unnötiges Licht ausschalten", "Zettel an Lichtschalter kleben", "Die Heizung abbauen"], a: 2, h: "Sie schalten unnötiges Licht aus" },
    { t: "mc", q: "Was zeigen die Stromzähler nach drei Monaten?", o: ["Dass die Schule weniger Strom verbraucht hat", "Dass die Heizung kaputt ist", "Dass mehr Strom verbraucht wurde"], a: 0, h: "Die Schule hat deutlich weniger Strom verbraucht als im Jahr davor." },
    { t: "yn", q: "Meint Frau Weber, dass ein einzelner Lichtschalter die Welt rettet?", a: false, h: "Ein einzelner Lichtschalter rettet nicht die Welt" }
  ]},

{ id: 292, stufe: 3, emoji: "🌠", titel: "Der Wunsch bei der Sternschnuppe",
  text: [
    "Im August liegen Amira und ihr Papa nachts auf einer Decke im Garten. In diesen Nächten kann man besonders viele Sternschnuppen sehen. „Eine Sternschnuppe ist kein Stern“, erklärt Papa. „Es ist ein winziges Stück Gestein aus dem Weltall. Wenn es in unsere Lufthülle rast, verglüht es und leuchtet kurz auf.“",
    "Plötzlich zischt ein heller Streifen über den Himmel. „Schnell, wünsch dir was!“, ruft Papa. Amira schließt die Augen. Sie wünscht sich, dass ihre beste Freundin Selin nicht wegzieht. Selins Familie will nämlich in eine andere Stadt umziehen, weil ihr Vater dort eine neue Arbeit hat.",
    "Ein paar Wochen später zieht Selin trotzdem weg. Amira ist sehr traurig und wütend auf die Sternschnuppe. „Wünsche funktionieren gar nicht“, sagt sie zu Papa. „Manche Wünsche kann keine Sternschnuppe erfüllen“, sagt er. „Aber vielleicht können wir selbst etwas tun.“",
    "Amira und Selin schreiben sich nun jede Woche Briefe. In den Herbstferien darf Amira Selin sogar besuchen. Sie fährt mit Papa im Zug, und die beiden Mädchen fallen sich am Bahnhof in die Arme. „Unsere Freundschaft ist stärker als jede Entfernung“, sagt Selin."
  ],
  fragen: [
    { t: "tap", q: "Wie heißt Amiras beste Freundin?", a: "Selin", h: "ihre beste Freundin Selin" },
    { t: "yn", q: "Ist eine Sternschnuppe ein Stern?", a: false, h: "Eine Sternschnuppe ist kein Stern" },
    { t: "mc", q: "Was ist eine Sternschnuppe wirklich?", o: ["Ein kleines Flugzeug", "Ein verglühendes Stück Gestein aus dem Weltall", "Ein Stern, der herunterfällt"], a: 1, h: "Es ist ein winziges Stück Gestein aus dem Weltall." },
    { t: "mc", q: "Warum zieht Selins Familie um?", o: ["Weil ihr Vater dort eine neue Arbeit hat", "Weil das Haus zu klein ist", "Weil sie lange Ferien machen"], a: 0, h: "weil ihr Vater dort eine neue Arbeit hat" },
    { t: "mc", q: "Warum ist Amira wütend auf die Sternschnuppe? (Denk nach!)", o: ["Weil sie zu schnell war", "Weil sie zu hell war", "Weil ihr Wunsch nicht in Erfüllung gegangen ist"], a: 2, h: "Wünsche funktionieren gar nicht" },
    { t: "mc", q: "Was tun die Freundinnen, um in Kontakt zu bleiben?", o: ["Sie vergessen sich", "Sie schreiben sich jede Woche Briefe", "Sie streiten sich"], a: 1, h: "Amira und Selin schreiben sich nun jede Woche Briefe." },
    { t: "yn", q: "Bleiben die beiden Mädchen trotz der Entfernung Freundinnen? (Lies genau!)", a: true, h: "Unsere Freundschaft ist stärker als jede Entfernung" }
  ]},

{ id: 293, stufe: 3, emoji: "👶", titel: "Der kleine Bruder",
  text: [
    "Seit drei Monaten hat Pranav einen kleinen Bruder namens Aadhi. Am Anfang hat er sich riesig gefreut. Doch jetzt ist alles anders. Wenn Pranav etwas erzählen will, heißt es oft: „Psst, Aadhi schläft gerade!“ oder „Gleich, ich muss erst Aadhi wickeln.“",
    "Eines Tages bekommt Pranav in der Schule ein Lob für seinen Aufsatz. Er rennt nach Hause, um es zu erzählen. Doch Aadhi schreit, und niemand hört zu. Pranav knallt die Tür zu seinem Zimmer zu. „Niemand hat mich mehr lieb“, denkt er und weint in sein Kissen.",
    "Später klopft Papa an die Tür. „Es tut mir leid“, sagt er. „Wir haben dich nicht vergessen. Ein Baby braucht nur am Anfang sehr viel Hilfe. Aber du bist uns genauso wichtig wie früher.“ Dann liest Papa den Aufsatz. Er ist sehr stolz auf Pranav.",
    "Ab jetzt haben Pranav und Papa jeden Sonntag eine Stunde nur für sich. Sie gehen Eis essen oder spielen Basketball. Und Pranav merkt noch etwas: Wenn er für Aadhi Grimassen schneidet, lacht das Baby laut. Bei niemandem lacht Aadhi so sehr wie bei seinem großen Bruder."
  ],
  fragen: [
    { t: "tap", q: "Wie heißt der kleine Bruder?", a: "Aadhi", h: "einen kleinen Bruder namens Aadhi" },
    { t: "mc", q: "Warum haben die Eltern wenig Zeit für Pranav?", o: ["Weil sie viel arbeiten", "Weil das Baby viel Hilfe braucht", "Weil sie verreisen"], a: 1, h: "Ein Baby braucht nur am Anfang sehr viel Hilfe." },
    { t: "mc", q: "Wofür hat Pranav ein Lob bekommen?", o: ["Für seinen Aufsatz", "Für ein Bild", "Für ein Tor"], a: 0, h: "bekommt Pranav in der Schule ein Lob für seinen Aufsatz" },
    { t: "mc", q: "Wie fühlt sich Pranav, als niemand zuhört? (Denk nach!)", o: ["Fröhlich", "Müde", "Traurig und übersehen"], a: 2, h: "Niemand hat mich mehr lieb" },
    { t: "yn", q: "Haben die Eltern Pranav vergessen?", a: false, h: "Wir haben dich nicht vergessen." },
    { t: "yn", q: "Verbringt Pranav jetzt Zeit allein mit Papa?", a: true, h: "jeden Sonntag eine Stunde nur für sich" },
    { t: "mc", q: "Was merkt Pranav über Aadhi? (Lies genau!)", o: ["Aadhi weint bei ihm am meisten", "Aadhi lacht bei ihm am meisten", "Aadhi schläft bei ihm sofort ein"], a: 1, h: "Bei niemandem lacht Aadhi so sehr wie bei seinem großen Bruder." }
  ]},

{ id: 294, stufe: 3, emoji: "🗾", titel: "Die Brieffreundin aus Japan",
  text: [
    "Durch ein Schulprojekt bekommt Thenmoli eine Brieffreundin aus Japan. Sie heißt Haruka und wohnt in Osaka. Die beiden schreiben sich auf Englisch, denn das lernen beide in der Schule. Thenmoli muss beim Schreiben oft ins Wörterbuch schauen, aber es macht ihr großen Spaß.",
    "In ihrem ersten Brief erzählt Haruka von ihrer Schule. Dort putzen die Kinder nach dem Unterricht selbst die Klassenzimmer und Flure. In ihrer Schule macht das eine Reinigungskraft. Haruka schreibt: „Wir glauben, dass man so lernt, gut auf seine Sachen aufzupassen.“",
    "Thenmoli antwortet und erzählt von Deutschland und von ihrer Familie, die aus Sri Lanka stammt. Sie legt ein Foto vom Lichterfest Deepavali bei. Haruka schickt ihr einen Kranich aus gefaltetem Papier. In Japan heißt Papierfalten „Origami“. Nach einer alten Sage geht ein Wunsch in Erfüllung, wenn man tausend Kraniche faltet.",
    "Thenmoli versucht selbst, einen Kranich zu falten. Beim ersten Mal sieht er eher aus wie ein zerknülltes Taschentuch. Inzwischen schreiben sich die Mädchen schon seit einem Jahr. Eines Tages wollen sie sich treffen, entweder in Osaka oder in Deutschland."
  ],
  fragen: [
    { t: "tap", q: "In welcher Stadt wohnt Haruka?", a: "Osaka", h: "wohnt in Osaka" },
    { t: "mc", q: "In welcher Sprache schreiben sich die Mädchen?", o: ["Auf Japanisch", "Auf Deutsch", "Auf Englisch"], a: 2, h: "Die beiden schreiben sich auf Englisch" },
    { t: "mc", q: "Warum schreiben sie auf Englisch? (Denk nach!)", o: ["Weil beide es in der Schule lernen", "Weil es einfacher ist als Malen", "Weil ihre Lehrerin aus England kommt"], a: 0, h: "denn das lernen beide in der Schule" },
    { t: "mc", q: "Was machen die Kinder in Harukas Schule nach dem Unterricht?", o: ["Sie singen im Chor", "Sie putzen selbst die Klassenzimmer", "Sie gehen schwimmen"], a: 1, h: "Dort putzen die Kinder nach dem Unterricht selbst die Klassenzimmer und Flure." },
    { t: "yn", q: "Gelingt Thenmolis erster Kranich sofort?", a: false, h: "Beim ersten Mal sieht er eher aus wie ein zerknülltes Taschentuch." },
    { t: "mc", q: "Was passiert laut der Sage, wenn man tausend Kraniche faltet?", o: ["Man wird reich", "Ein Wunsch geht in Erfüllung", "Es fängt an zu schneien"], a: 1, h: "geht ein Wunsch in Erfüllung, wenn man tausend Kraniche faltet" },
    { t: "yn", q: "Haben sich die Mädchen schon persönlich getroffen? (Lies genau!)", a: false, h: "Eines Tages wollen sie sich treffen" }
  ]},

{ id: 295, stufe: 3, emoji: "🌸", titel: "Das Kirschblütenfest",
  text: [
    "Jedes Frühjahr warten in Japan Millionen Menschen gespannt auf ein besonderes Ereignis: die Kirschblüte. Wenn die Kirschbäume blühen, feiern die Menschen ein Fest, das „Hanami“ heißt. Das Wort bedeutet ungefähr „Blüten anschauen“.",
    "Zum Hanami treffen sich Familien, Freunde und Arbeitskollegen in Parks. Sie breiten Decken unter den blühenden Bäumen aus, machen ein Picknick, unterhalten sich und singen. Manche Leute gehen schon früh am Morgen los, um sich den schönsten Platz zu sichern. Am Abend werden in vielen Parks Laternen angezündet, sodass man die Blüten auch im Dunkeln sehen kann.",
    "Die Kirschblüte dauert nur kurz, meistens ungefähr ein bis zwei Wochen. Dann fallen die zarten, rosa-weißen Blütenblätter wie Schnee zu Boden. Im warmen Süden blühen sie früher als im kühleren Norden.",
    "Für viele Menschen in Japan ist die Kirschblüte ein Zeichen dafür, dass schöne Dinge oft nicht lange bleiben. Deshalb soll man den Moment genießen. Auch in Deutschland gibt es Kirschbäume aus Japan. In Bonn zum Beispiel kommen jedes Frühjahr viele Besucher, um die rosa blühenden Straßen zu sehen."
  ],
  fragen: [
    { t: "tap", q: "Wie heißt das Fest zur Kirschblüte?", a: "Hanami", h: "ein Fest, das „Hanami“ heißt" },
    { t: "mc", q: "Was bedeutet das Wort ungefähr?", o: ["Blüten anschauen", "Frühling feiern", "Kirschen essen"], a: 0, h: "Das Wort bedeutet ungefähr „Blüten anschauen“." },
    { t: "mc", q: "Warum gehen manche Leute schon früh am Morgen los?", o: ["Weil es dann kühl ist", "Um sich den schönsten Platz zu sichern", "Um Kirschen zu pflücken"], a: 1, h: "um sich den schönsten Platz zu sichern" },
    { t: "yn", q: "Blühen die Kirschbäume mehrere Monate lang?", a: false, h: "Die Kirschblüte dauert nur kurz" },
    { t: "mc", q: "Wo blühen die Kirschbäume in Japan zuerst? (Denk nach!)", o: ["Im kühlen Norden", "Überall gleichzeitig", "Im warmen Süden"], a: 2, h: "Im warmen Süden blühen sie früher als im kühleren Norden." },
    { t: "mc", q: "Woran soll die Kirschblüte die Menschen erinnern? (Lies genau!)", o: ["Dass man viel arbeiten soll", "Dass schöne Dinge oft nicht lange bleiben", "Dass der Winter lang ist"], a: 1, h: "dass schöne Dinge oft nicht lange bleiben" },
    { t: "yn", q: "Gibt es auch in Deutschland japanische Kirschbäume?", a: true, h: "Auch in Deutschland gibt es Kirschbäume aus Japan." }
  ]},

{ id: 296, stufe: 3, emoji: "🍾", titel: "Die Flaschenpost",
  text: [
    "Bei einem Strandspaziergang an der Nordsee entdeckt Finn etwas Glitzerndes zwischen den Algen. Es ist eine grüne Glasflasche mit einem Korken. Darin steckt ein zusammengerollter Zettel! Mit Hilfe seiner Schwester Ishani zieht er den Zettel vorsichtig heraus.",
    "Die Schrift ist etwas verblasst, aber gut lesbar. „Hallo! Ich bin Sofie, neun Jahre alt, und wohne in Dänemark. Ich werfe diese Flasche heute ins Meer. Wenn du sie findest, schreib mir bitte!“ Darunter stehen eine Adresse und ein Datum. Die Flasche war fast zwei Jahre unterwegs.",
    "Finn und Ishani sind begeistert. Papa erklärt, dass Meeresströmungen die Flasche wahrscheinlich langsam an die deutsche Küste getrieben haben. Strömungen sind wie riesige Flüsse im Meer. Gemeinsam schreiben die Geschwister einen Brief an Sofie und legen ein Foto vom Fundort bei.",
    "Drei Wochen später kommt eine Antwort. Sofie ist inzwischen elf Jahre alt und kann kaum glauben, dass ihre Flasche gefunden wurde. Papa sagt aber auch: „Flaschen ins Meer zu werfen ist keine gute Idee mehr, denn im Meer gibt es schon genug Müll. Ein Brief mit der Post kommt auch an.“"
  ],
  fragen: [
    { t: "tap", q: "Wie heißt das Mädchen, das die Flaschenpost geschrieben hat?", a: "Sofie", h: "Ich bin Sofie, neun Jahre alt" },
    { t: "mc", q: "Wo findet Finn die Flasche?", o: ["An der Nordsee", "In einem Fluss", "Im Garten"], a: 0, h: "Bei einem Strandspaziergang an der Nordsee" },
    { t: "mc", q: "Wie lange war die Flasche ungefähr unterwegs?", o: ["Zwei Tage", "Fast zwei Jahre", "Zehn Jahre"], a: 1, h: "Die Flasche war fast zwei Jahre unterwegs." },
    { t: "mc", q: "Wie ist die Flasche an die deutsche Küste gekommen?", o: ["Ein Schiff hat sie gebracht", "Ein Vogel hat sie getragen", "Meeresströmungen haben sie getrieben"], a: 2, h: "dass Meeresströmungen die Flasche wahrscheinlich langsam an die deutsche Küste getrieben haben" },
    { t: "yn", q: "Antwortet Sofie auf den Brief?", a: true, h: "Drei Wochen später kommt eine Antwort." },
    { t: "mc", q: "Warum ist Sofie inzwischen älter als auf dem Zettel? (Denk nach!)", o: ["Weil die Flasche so lange unterwegs war", "Weil sie auf dem Zettel geschwindelt hat", "Weil Finn sich verlesen hat"], a: 0, h: "Sofie ist inzwischen elf Jahre alt" },
    { t: "yn", q: "Findet Papa es gut, heute noch Flaschen ins Meer zu werfen? (Lies genau!)", a: false, h: "Flaschen ins Meer zu werfen ist keine gute Idee mehr" }
  ]},

{ id: 297, stufe: 3, emoji: "🚲", titel: "Das Rätsel um das Fahrradschloss",
  text: [
    "Nach dem Schwimmtraining will Yasin nach Hause fahren. Doch an seinem Fahrrad hängt ein fremdes Zahlenschloss! Es ist um seinen Hinterreifen und den Fahrradständer gewickelt. Sein eigenes Schloss liegt geöffnet daneben. Yasin ist verwirrt. Wer macht denn so etwas?",
    "Am Schloss klebt ein kleiner Zettel: „Der Code ist das Jahr, in dem eure Schule gebaut wurde, minus 1000.“ Yasin denkt nach. Da hat sich jemand einen Spaß erlaubt! Er erinnert sich an die große Tafel über dem Schuleingang. Darauf steht eine Jahreszahl, aber welche?",
    "Yasin ruft seine Freundin Ananya an. Sie wohnt direkt neben der Schule. Ananya läuft hin und liest vor: „Erbaut 1972.“ Yasin rechnet: 1972 minus 1000 ergibt 972. Das Schloss hat vier Rädchen, also stellt er 0972 ein. Klick! Das Schloss springt auf.",
    "Am nächsten Tag grinst sein Freund Ole breit. „Na, hast du mein Rätsel gelöst?“ Yasin lacht. Ole erklärt, dass er Yasins Schloss offen gefunden hat. Damit das Fahrrad nicht gestohlen wird, hat er sein Ersatzschloss benutzt und gleich ein Rätsel daraus gemacht. „Danke“, sagt Yasin. „Aber nächstes Mal schreib die Lösung einfach drauf!“"
  ],
  fragen: [
    { t: "tap", q: "In welchem Jahr wurde die Schule gebaut?", a: "1972", h: "Erbaut 1972." },
    { t: "mc", q: "Was findet Yasin an seinem Fahrrad?", o: ["Einen platten Reifen", "Ein fremdes Zahlenschloss", "Einen Blumenstrauß"], a: 1, h: "an seinem Fahrrad hängt ein fremdes Zahlenschloss" },
    { t: "mc", q: "Warum ruft Yasin gerade Ananya an? (Denk nach!)", o: ["Weil sie neben der Schule wohnt und die Jahreszahl lesen kann", "Weil sie das Schloss gebaut hat", "Weil sie Oles Schwester ist"], a: 0, h: "Sie wohnt direkt neben der Schule." },
    { t: "mc", q: "Welchen Code stellt Yasin ein?", o: ["1972", "2972", "0972"], a: 2, h: "also stellt er 0972 ein" },
    { t: "yn", q: "Wollte Ole Yasin ärgern?", a: false, h: "Damit das Fahrrad nicht gestohlen wird" },
    { t: "yn", q: "Hatte Yasin sein eigenes Schloss nicht abgeschlossen? (Lies genau!)", a: true, h: "dass er Yasins Schloss offen gefunden hat" },
    { t: "mc", q: "Was wünscht sich Yasin für das nächste Mal?", o: ["Ein schwierigeres Rätsel", "Dass Ole die Lösung draufschreibt", "Ein neues Fahrrad"], a: 1, h: "Aber nächstes Mal schreib die Lösung einfach drauf!" }
  ]},

{ id: 298, stufe: 3, emoji: "🦔", titel: "Die Igelstation",
  text: [
    "Im November findet Selvi im Garten einen kleinen Igel. Er ist am helllichten Tag unterwegs und wirkt schwach. Selvis Mama weiß, dass das ein Warnzeichen ist. Igel sind nämlich nachtaktiv. Wenn ein junger Igel im späten Herbst tagsüber herumläuft, ist er oft krank oder zu leicht für den Winterschlaf.",
    "Mama legt den Igel vorsichtig mit Handschuhen in einen Karton mit Zeitungspapier. Dann fahren sie zu einer Igelstation. Das ist ein Ort, an dem freiwillige Helferinnen und Helfer kranke oder zu leichte Igel pflegen. Frau Brandt, die Leiterin, legt den Igel auf eine Waage. Er wiegt nur 280 Gramm.",
    "„Damit ein Igel den Winterschlaf übersteht, sollte er ungefähr 500 Gramm wiegen“, erklärt Frau Brandt. „Sonst reichen seine Fettreserven nicht.“ Sie gibt dem Igel Katzenfutter und Wasser. „Bitte niemals Milch geben“, sagt sie. „Davon bekommen Igel Bauchschmerzen.“",
    "Selvi nennt den Igel „Stachelchen“. Den ganzen Winter über darf er in der Igelstation bleiben und wird gut versorgt. Im April ruft Frau Brandt an. Stachelchen ist gesund und dick genug. Gemeinsam bringen sie ihn zurück in Selvis Garten. Selvi winkt ihm nach."
  ],
  fragen: [
    { t: "tap", q: "Wie nennt Selvi den Igel?", a: "Stachelchen", h: "Stachelchen ist gesund und dick genug." },
    { t: "mc", q: "Warum ist es ein Warnzeichen, dass der Igel tagsüber unterwegs ist? (Denk nach!)", o: ["Weil Igel nachtaktiv sind", "Weil Igel die Sonne nicht mögen", "Weil er sich verlaufen hat"], a: 0, h: "Igel sind nämlich nachtaktiv." },
    { t: "mc", q: "Wie viel wiegt der Igel in der Igelstation?", o: ["500 Gramm", "280 Gramm", "1 Kilogramm"], a: 1, h: "Er wiegt nur 280 Gramm." },
    { t: "mc", q: "Warum muss ein Igel vor dem Winterschlaf schwer genug sein?", o: ["Damit er nicht wegfliegt", "Damit er schneller laufen kann", "Damit seine Fettreserven reichen"], a: 2, h: "Sonst reichen seine Fettreserven nicht." },
    { t: "yn", q: "Darf man Igeln Milch geben?", a: false, h: "Bitte niemals Milch geben" },
    { t: "yn", q: "Bleibt der Igel den Winter über in der Igelstation?", a: true, h: "Den ganzen Winter über darf er in der Igelstation bleiben" },
    { t: "mc", q: "Wo wird der Igel im Frühling freigelassen? (Lies genau!)", o: ["Im Wald", "In der Igelstation", "In Selvis Garten"], a: 2, h: "Gemeinsam bringen sie ihn zurück in Selvis Garten." }
  ]},

{ id: 299, stufe: 3, emoji: "🧭", titel: "Der Wettlauf zum Südpol",
  text: [
    "Vor mehr als hundert Jahren wollten zwei Forscher als Erste den Südpol erreichen. Der Südpol liegt mitten in der Antarktis, dem kältesten Kontinent der Erde. Der Norweger Roald Amundsen und der Brite Robert Scott brachen mit ihren Mannschaften fast zur selben Zeit auf. Ein echter Wettlauf begann.",
    "Die beiden Forscher hatten unterschiedliche Pläne. Amundsen setzte auf Schlittenhunde, die an Eis und Kälte gewöhnt sind. Scott nahm Ponys und Motorschlitten mit. Doch die Motoren gingen in der Kälte kaputt, und die Ponys kamen mit dem Eis nicht gut zurecht. Scotts Männer mussten ihre schweren Schlitten schließlich selbst ziehen.",
    "Amundsen erreichte den Südpol im Dezember 1911. Er stellte dort ein Zelt mit der norwegischen Flagge auf. Scott kam ungefähr fünf Wochen später an. Als er das Zelt sah, war er sehr enttäuscht. Er und seine Begleiter schafften den langen Rückweg leider nicht und kehrten nie nach Hause zurück.",
    "Heute erinnern sich die Menschen an beide Forscher. Ihr Wettlauf zeigt aber auch, wie wichtig eine gute Vorbereitung ist. Am Südpol steht heute eine Forschungsstation, die nach Amundsen und Scott benannt ist."
  ],
  fragen: [
    { t: "tap", q: "Aus welchem Land kam Amundsen? Er war …", a: "Norweger", h: "Der Norweger Roald Amundsen" },
    { t: "mc", q: "Wo liegt der Südpol?", o: ["In der Arktis", "In der Antarktis", "In Afrika"], a: 1, h: "Der Südpol liegt mitten in der Antarktis" },
    { t: "mc", q: "Welche Tiere nutzte Amundsen?", o: ["Schlittenhunde", "Ponys", "Kamele"], a: 0, h: "Amundsen setzte auf Schlittenhunde" },
    { t: "mc", q: "Warum mussten Scotts Männer die Schlitten selbst ziehen? (Denk nach!)", o: ["Weil sie Sport machen wollten", "Weil die Hunde weggelaufen waren", "Weil die Motoren kaputtgingen und die Ponys nicht zurechtkamen"], a: 2, h: "Doch die Motoren gingen in der Kälte kaputt" },
    { t: "yn", q: "Kam Scott als Erster am Südpol an?", a: false, h: "Scott kam ungefähr fünf Wochen später an." },
    { t: "yn", q: "Gibt es heute eine Forschungsstation am Südpol?", a: true, h: "Am Südpol steht heute eine Forschungsstation" },
    { t: "mc", q: "Was zeigt der Wettlauf laut Text? (Lies genau!)", o: ["Dass Ponys schneller sind als Hunde", "Wie wichtig eine gute Vorbereitung ist", "Dass die Antarktis warm ist"], a: 1, h: "wie wichtig eine gute Vorbereitung ist" }
  ]},

{ id: 300, stufe: 3, emoji: "🛞", titel: "Die Erfindung des Rades",
  text: [
    "Das Rad ist eine der wichtigsten Erfindungen der Menschheit. Lange bevor es Räder gab, haben die Menschen schon Häuser gebaut und Felder bestellt. Schwere Lasten zogen sie auf Schlitten oder rollten sie über Baumstämme.",
    "Forscher vermuten, dass das Rad vor ungefähr 5500 Jahren erfunden wurde. Wo genau, weiß man nicht sicher. Oft wird Mesopotamien genannt, eine Gegend im heutigen Irak. Vielleicht gab es zuerst Töpferscheiben, also drehbare Scheiben, auf denen man Gefäße aus Ton formt. Erst später kamen Menschen auf die Idee, Räder an Wagen zu befestigen.",
    "Die ersten Räder waren Scheiben aus Holz. Das Schwierigste war nicht das Rad, sondern die Achse. Das ist die Stange, um die sich die Räder drehen. Sie musste genau passen, sonst wackelte der Wagen oder blieb stecken. Viel später erfand man Räder mit Speichen. Sie sind leichter und machen Wagen schneller.",
    "Heute sind Räder überall: an Autos, Fahrrädern und Einkaufswagen. Interessant ist, dass manche alten Völker in Amerika das Rad zwar kannten, aber nur für Spielzeug benutzten. Sie hatten keine großen Zugtiere wie Pferde oder Ochsen, die einen Wagen hätten ziehen können."
  ],
  fragen: [
    { t: "tap", q: "Wie heißt die Stange, um die sich die Räder drehen?", a: "Achse", h: "sondern die Achse" },
    { t: "yn", q: "Gab es Räder schon, bevor Menschen Häuser bauten?", a: false, h: "Lange bevor es Räder gab, haben die Menschen schon Häuser gebaut" },
    { t: "mc", q: "Wie wurden schwere Lasten ohne Rad bewegt?", o: ["Mit Flugzeugen", "Auf Schlitten oder über Baumstämme", "Gar nicht"], a: 1, h: "Schwere Lasten zogen sie auf Schlitten oder rollten sie über Baumstämme." },
    { t: "mc", q: "Wann wurde das Rad ungefähr erfunden?", o: ["Vor ungefähr 5500 Jahren", "Vor 100 Jahren", "Vor einer Million Jahren"], a: 0, h: "vor ungefähr 5500 Jahren erfunden wurde" },
    { t: "mc", q: "Warum musste die Achse genau passen? (Denk nach!)", o: ["Damit sie schön aussieht", "Damit sie nicht rostet", "Sonst wackelte der Wagen oder blieb stecken"], a: 2, h: "sonst wackelte der Wagen oder blieb stecken" },
    { t: "mc", q: "Warum benutzten manche Völker in Amerika das Rad nur für Spielzeug? (Lies genau!)", o: ["Weil sie keine großen Zugtiere hatten", "Weil Räder zu teuer waren", "Weil sie keine Straßen mochten"], a: 0, h: "Sie hatten keine großen Zugtiere wie Pferde oder Ochsen" },
    { t: "yn", q: "Sind Räder mit Speichen leichter als die ersten Holzscheiben?", a: true, h: "Sie sind leichter und machen Wagen schneller." }
  ]}
);
