// Lesen & Verstehen – @ Joschy
// Stufe 1 – weitere Texte (31–54)
window.TEXTE.push(
{ id: 31, stufe: 1, emoji: "🐈", titel: "Wo ist Minka?",
  text: [
    "Lotta hat eine graue Katze. Sie heißt Minka. Heute ist Minka verschwunden. Lotta sucht sie im Garten, im Keller und unter dem Sofa. Aber Minka ist nirgends zu finden.",
    "Lotta ist traurig. Da hört sie ein leises Miauen. Es kommt aus ihrem Zimmer! Lotta öffnet ihren Kleiderschrank. Dort liegt Minka zusammengerollt auf einem warmen Pullover und schnurrt.",
    "„Du kleine Schlafmütze!“, lacht Lotta und streichelt ihr weiches Fell."
  ],
  fragen: [
    { t: "mc", q: "Welche Farbe hat Minka?", o: ["Schwarz", "Grau", "Weiß"], a: 1, h: "Lotta hat eine graue Katze." },
    { t: "yn", q: "Findet Lotta Minka im Keller?", a: false, h: "Lotta sucht sie im Garten, im Keller und unter dem Sofa. Aber Minka ist nirgends zu finden." },
    { t: "mc", q: "Was hört Lotta plötzlich?", o: ["Ein lautes Bellen", "Ein leises Miauen", "Ein Klingeln"], a: 1, h: "Da hört sie ein leises Miauen." },
    { t: "tap", q: "Wo findet Lotta die Katze? Im …", a: "Kleiderschrank", h: "Lotta öffnet ihren Kleiderschrank." },
    { t: "mc", q: "Worauf liegt Minka?", o: ["Auf einem Kissen", "Auf einem warmen Pullover", "Auf einer Decke"], a: 1, h: "auf einem warmen Pullover" },
    { t: "yn", q: "Ist Lotta am Ende wütend auf Minka?", a: false, h: "„Du kleine Schlafmütze!“, lacht Lotta" }
  ]},

{ id: 32, stufe: 1, emoji: "🛒", titel: "Im Supermarkt",
  text: [
    "Mama schickt Noah zum ersten Mal allein in den Supermarkt. Er bekommt einen Zettel und zehn Euro. Auf dem Zettel steht: Brot, Butter, Milch und Äpfel.",
    "Im Laden legt Noah alles in den Korb. An der Kasse bezahlt er und bekommt Geld zurück. Stolz läuft er nach Hause.",
    "Mama packt die Tasche aus. „Wo ist denn die Milch?“, fragt sie. Noah schaut auf den Zettel. Die Milch hat er vergessen! Er lacht und läuft schnell noch einmal zurück."
  ],
  fragen: [
    { t: "yn", q: "Geht Noah zum ersten Mal allein einkaufen?", a: true, h: "Mama schickt Noah zum ersten Mal allein in den Supermarkt." },
    { t: "mc", q: "Wie viel Geld bekommt Noah?", o: ["Fünf Euro", "Zehn Euro", "Zwanzig Euro"], a: 1, h: "Er bekommt einen Zettel und zehn Euro." },
    { t: "mc", q: "Was steht NICHT auf dem Zettel? (Lies genau!)", o: ["Butter", "Äpfel", "Käse"], a: 2, h: "Auf dem Zettel steht: Brot, Butter, Milch und Äpfel." },
    { t: "tap", q: "Wohin legt Noah im Laden alles?", a: "Korb", h: "Im Laden legt Noah alles in den Korb." },
    { t: "tap", q: "Was hat Noah vergessen?", a: "Milch", h: "Die Milch hat er vergessen!" },
    { t: "mc", q: "Was macht Noah am Ende?", o: ["Er weint", "Er läuft noch einmal zurück", "Er geht schlafen"], a: 1, h: "Er lacht und läuft schnell noch einmal zurück." }
  ]},

{ id: 33, stufe: 1, emoji: "🦁", titel: "Der Löwe",
  text: [
    "Der Löwe lebt in Afrika. Er wohnt in der Savanne. Dort gibt es viel Gras und nur wenige Bäume.",
    "Löwen leben in Gruppen. So eine Gruppe nennt man Rudel. Die männlichen Löwen haben eine große Mähne um den Kopf. Die Weibchen haben keine Mähne. Meistens gehen die Weibchen auf die Jagd.",
    "Löwen schlafen sehr viel, oft bis zu 20 Stunden am Tag. Wenn ein Löwe brüllt, kann man ihn kilometerweit hören."
  ],
  fragen: [
    { t: "mc", q: "Wo lebt der Löwe?", o: ["In Afrika", "In Europa", "In der Antarktis"], a: 0, h: "Der Löwe lebt in Afrika." },
    { t: "tap", q: "Wie nennt man eine Gruppe von Löwen?", a: "Rudel", h: "So eine Gruppe nennt man Rudel." },
    { t: "yn", q: "Haben die Weibchen eine Mähne?", a: false, h: "Die Weibchen haben keine Mähne." },
    { t: "mc", q: "Wer geht meistens auf die Jagd?", o: ["Die Männchen", "Die Weibchen", "Die Jungen"], a: 1, h: "Meistens gehen die Weibchen auf die Jagd." },
    { t: "mc", q: "Wie lange schlafen Löwen oft am Tag?", o: ["Bis zu 5 Stunden", "Bis zu 10 Stunden", "Bis zu 20 Stunden"], a: 2, h: "oft bis zu 20 Stunden am Tag" },
    { t: "yn", q: "Ist das Brüllen eines Löwen sehr laut? (Denk nach!)", a: true, h: "Wenn ein Löwe brüllt, kann man ihn kilometerweit hören." }
  ]},

{ id: 34, stufe: 1, emoji: "🏕️", titel: "Die Höhle im Wohnzimmer",
  text: [
    "Es regnet schon den ganzen Tag. Elif und ihr Bruder Can dürfen nicht nach draußen. „Mir ist so langweilig“, sagt Can.",
    "Da hat Elif eine Idee. Sie holen alle Decken und Kissen aus den Zimmern. Dann stellen sie zwei Stühle auseinander und legen eine große Decke darüber. Fertig ist die Höhle!",
    "In der Höhle ist es gemütlich. Mit einer Taschenlampe lesen die beiden ein Buch über Piraten. Später bringt Papa ihnen Popcorn. Jetzt finden die Kinder den Regentag gar nicht mehr schlimm."
  ],
  fragen: [
    { t: "yn", q: "Scheint an diesem Tag die Sonne?", a: false, h: "Es regnet schon den ganzen Tag." },
    { t: "mc", q: "Wer hat die Idee mit der Höhle?", o: ["Can", "Elif", "Papa"], a: 1, h: "Da hat Elif eine Idee." },
    { t: "mc", q: "Woraus bauen die Kinder die Höhle?", o: ["Aus Kartons", "Aus Stühlen und Decken", "Aus Ästen"], a: 1, h: "Dann stellen sie zwei Stühle auseinander und legen eine große Decke darüber." },
    { t: "tap", q: "Womit lesen die Kinder in der Höhle?", a: "Taschenlampe", h: "Mit einer Taschenlampe lesen die beiden ein Buch über Piraten." },
    { t: "mc", q: "Worum geht es in dem Buch?", o: ["Um Piraten", "Um Dinosaurier", "Um Ritter"], a: 0, h: "ein Buch über Piraten" },
    { t: "yn", q: "Finden die Kinder den Regentag am Ende noch langweilig?", a: false, h: "Jetzt finden die Kinder den Regentag gar nicht mehr schlimm." }
  ]},

{ id: 35, stufe: 1, emoji: "🚴", titel: "Das neue Fahrrad",
  text: [
    "Zu seinem Geburtstag bekommt Ben ein rotes Fahrrad. Er möchte sofort losfahren. Aber Ben kann noch nicht gut Fahrrad fahren.",
    "Papa hält das Fahrrad hinten fest und läuft neben ihm her. Beim dritten Versuch lässt Papa heimlich los. Ben fährt ganz allein! Doch dann sieht er, dass Papa weit hinten steht. Er erschrickt und fällt ins Gras.",
    "Ben hat nur ein kleines Loch in der Hose. Er steigt wieder auf. „Nochmal!“, ruft er. Am Abend kann er schon allein im Kreis fahren."
  ],
  fragen: [
    { t: "mc", q: "Welche Farbe hat das Fahrrad?", o: ["Blau", "Rot", "Grün"], a: 1, h: "Ben ein rotes Fahrrad" },
    { t: "yn", q: "Kann Ben am Anfang schon gut Fahrrad fahren?", a: false, h: "Aber Ben kann noch nicht gut Fahrrad fahren." },
    { t: "mc", q: "Wann lässt Papa los?", o: ["Beim ersten Versuch", "Beim dritten Versuch", "Gar nicht"], a: 1, h: "Beim dritten Versuch lässt Papa heimlich los." },
    { t: "tap", q: "Wohin fällt Ben?", a: "Gras", h: "Er erschrickt und fällt ins Gras." },
    { t: "mc", q: "Warum fällt Ben hin? (Denk nach!)", o: ["Weil er erschrickt", "Weil das Rad kaputt ist", "Weil es regnet"], a: 0, h: "Er erschrickt und fällt ins Gras." },
    { t: "yn", q: "Gibt Ben nach dem Sturz auf?", a: false, h: "Er steigt wieder auf. „Nochmal!“, ruft er." }
  ]},

{ id: 36, stufe: 1, emoji: "🦷", titel: "Beim Zahnarzt",
  text: [
    "Heute muss Maja zum Zahnarzt. Sie ist ein bisschen aufgeregt. Im Wartezimmer liegen viele Bücher und Spielsachen.",
    "Dann ruft die Zahnärztin Majas Namen. Maja setzt sich auf den großen Stuhl. Der Stuhl fährt nach hinten. Die Zahnärztin schaut mit einem kleinen Spiegel in Majas Mund. „Deine Zähne sind sehr sauber“, sagt sie. „Du putzt sie bestimmt jeden Morgen und jeden Abend.“",
    "Maja ist stolz. Zum Schluss darf sie sich aus einer Kiste einen Aufkleber aussuchen. Sie nimmt einen mit einem Delfin."
  ],
  fragen: [
    { t: "yn", q: "Ist Maja ein bisschen aufgeregt?", a: true, h: "Sie ist ein bisschen aufgeregt." },
    { t: "mc", q: "Was liegt im Wartezimmer?", o: ["Bücher und Spielsachen", "Süßigkeiten", "Zahnbürsten"], a: 0, h: "Im Wartezimmer liegen viele Bücher und Spielsachen." },
    { t: "tap", q: "Womit schaut die Zahnärztin in Majas Mund? Mit einem kleinen …", a: "Spiegel", h: "Die Zahnärztin schaut mit einem kleinen Spiegel in Majas Mund." },
    { t: "yn", q: "Hat Maja schmutzige Zähne?", a: false, h: "„Deine Zähne sind sehr sauber“" },
    { t: "mc", q: "Wie oft putzt Maja wohl ihre Zähne?", o: ["Einmal in der Woche", "Morgens und abends", "Nur am Wochenende"], a: 1, h: "Du putzt sie bestimmt jeden Morgen und jeden Abend." },
    { t: "mc", q: "Was ist auf Majas Aufkleber?", o: ["Ein Hai", "Ein Delfin", "Ein Zahn"], a: 1, h: "Sie nimmt einen mit einem Delfin." }
  ]},

{ id: 37, stufe: 1, emoji: "🐿️", titel: "Das Eichhörnchen",
  text: [
    "Eichhörnchen leben im Wald und in Parks. Sie haben ein rotbraunes Fell und einen langen, buschigen Schwanz. Mit dem Schwanz halten sie beim Springen das Gleichgewicht.",
    "Im Herbst sammeln Eichhörnchen Nüsse und Samen. Sie vergraben sie an vielen Stellen im Boden. So haben sie im Winter etwas zu fressen.",
    "Manche Verstecke finden die Eichhörnchen nicht wieder. Aus den vergessenen Nüssen können im Frühling neue Bäume wachsen."
  ],
  fragen: [
    { t: "mc", q: "Wo leben Eichhörnchen?", o: ["Im Wasser", "Im Wald und in Parks", "In der Wüste"], a: 1, h: "Eichhörnchen leben im Wald und in Parks." },
    { t: "tap", q: "Womit halten sie beim Springen das Gleichgewicht? Mit dem …", a: "Schwanz", h: "Mit dem Schwanz halten sie beim Springen das Gleichgewicht." },
    { t: "mc", q: "Wann sammeln Eichhörnchen Nüsse?", o: ["Im Frühling", "Im Sommer", "Im Herbst"], a: 2, h: "Im Herbst sammeln Eichhörnchen Nüsse und Samen." },
    { t: "yn", q: "Verstecken sie alle Nüsse an einer einzigen Stelle?", a: false, h: "Sie vergraben sie an vielen Stellen im Boden." },
    { t: "yn", q: "Finden Eichhörnchen immer alle Verstecke wieder?", a: false, h: "Manche Verstecke finden die Eichhörnchen nicht wieder." },
    { t: "mc", q: "Was kann aus vergessenen Nüssen wachsen?", o: ["Pilze", "Neue Bäume", "Blumen"], a: 1, h: "Aus den vergessenen Nüssen können im Frühling neue Bäume wachsen." }
  ]},

{ id: 38, stufe: 1, emoji: "🐧", titel: "Im Zoo",
  text: [
    "Die Klasse 4a besucht den Zoo. Zuerst sehen die Kinder die Giraffen. Sie fressen Blätter ganz oben aus den Bäumen.",
    "Um elf Uhr ist Fütterung bei den Pinguinen. Ein Tierpfleger wirft Fische ins Wasser. Die Pinguine springen hinterher und schwimmen blitzschnell. „An Land watscheln sie so langsam, aber im Wasser sind sie richtig schnell!“, staunt Ali.",
    "Zum Schluss gehen die Kinder ins Affenhaus. Ein kleiner Affe schneidet Grimassen. Alle müssen lachen."
  ],
  fragen: [
    { t: "mc", q: "Welche Tiere sehen die Kinder zuerst?", o: ["Die Pinguine", "Die Giraffen", "Die Affen"], a: 1, h: "Zuerst sehen die Kinder die Giraffen." },
    { t: "mc", q: "Um wie viel Uhr ist die Fütterung?", o: ["Um zehn Uhr", "Um elf Uhr", "Um zwölf Uhr"], a: 1, h: "Um elf Uhr ist Fütterung bei den Pinguinen." },
    { t: "tap", q: "Was wirft der Tierpfleger ins Wasser?", a: "Fische", h: "Ein Tierpfleger wirft Fische ins Wasser." },
    { t: "yn", q: "Sind Pinguine im Wasser langsam?", a: false, h: "im Wasser sind sie richtig schnell!" },
    { t: "mc", q: "Wer staunt über die Pinguine?", o: ["Ali", "Die Lehrerin", "Der Tierpfleger"], a: 0, h: "staunt Ali" },
    { t: "mc", q: "Warum lachen am Ende alle?", o: ["Weil ein Affe Grimassen schneidet", "Weil ein Pinguin hinfällt", "Weil es regnet"], a: 0, h: "Ein kleiner Affe schneidet Grimassen. Alle müssen lachen." }
  ]},

{ id: 39, stufe: 1, emoji: "🏮", titel: "Der Laternenumzug",
  text: [
    "Am 11. November ist Sankt Martin. In der Schule basteln die Kinder Laternen. Jana bastelt eine Laterne, die wie ein Mond aussieht.",
    "Am Abend treffen sich alle vor der Kirche. Es ist schon dunkel. Die Laternen leuchten hell. Vorne reitet ein Mann auf einem Pferd. Er spielt Sankt Martin und trägt einen roten Mantel. Die Kinder laufen hinterher und singen Laternenlieder.",
    "Am Ende gibt es ein großes Feuer. Jedes Kind bekommt einen süßen Weckmann aus Teig. Jana teilt ihren mit ihrem kleinen Bruder, genau wie Sankt Martin seinen Mantel geteilt hat."
  ],
  fragen: [
    { t: "mc", q: "An welchem Tag ist Sankt Martin?", o: ["Am 6. Dezember", "Am 11. November", "Am 1. Mai"], a: 1, h: "Am 11. November ist Sankt Martin." },
    { t: "tap", q: "Wie sieht Janas Laterne aus? Wie ein …", a: "Mond", h: "eine Laterne, die wie ein Mond aussieht" },
    { t: "yn", q: "Findet der Umzug am Morgen statt?", a: false, h: "Am Abend treffen sich alle vor der Kirche. Es ist schon dunkel." },
    { t: "mc", q: "Welche Farbe hat der Mantel von Sankt Martin?", o: ["Blau", "Rot", "Grün"], a: 1, h: "trägt einen roten Mantel" },
    { t: "mc", q: "Was bekommt jedes Kind am Ende?", o: ["Eine Kerze", "Einen Weckmann", "Ein Buch"], a: 1, h: "Jedes Kind bekommt einen süßen Weckmann aus Teig." },
    { t: "yn", q: "Teilt Jana ihren Weckmann?", a: true, h: "Jana teilt ihren mit ihrem kleinen Bruder" }
  ]},

{ id: 40, stufe: 1, emoji: "🍎", titel: "Der Apfelbaum",
  text: [
    "In Opas Garten steht ein alter Apfelbaum. Im Frühling bekommt er viele weiße und rosa Blüten. Dann summen die Bienen um den Baum herum.",
    "Im Sommer wachsen aus den Blüten kleine grüne Äpfel. Sie werden jeden Tag ein bisschen größer.",
    "Im Herbst sind die Äpfel rot und reif. Dann hilft Ida ihrem Opa beim Pflücken. Aus den Äpfeln backt Oma einen leckeren Apfelkuchen.",
    "Im Winter hat der Baum keine Blätter mehr. Er ruht sich aus, bis es wieder Frühling wird."
  ],
  fragen: [
    { t: "mc", q: "Wo steht der Apfelbaum?", o: ["Im Wald", "In Opas Garten", "Vor der Schule"], a: 1, h: "In Opas Garten steht ein alter Apfelbaum." },
    { t: "mc", q: "Welche Farben haben die Blüten?", o: ["Gelb und orange", "Weiß und rosa", "Blau und lila"], a: 1, h: "viele weiße und rosa Blüten" },
    { t: "yn", q: "Sind die Äpfel im Sommer schon rot und reif?", a: false, h: "Im Sommer wachsen aus den Blüten kleine grüne Äpfel." },
    { t: "tap", q: "Was backt Oma aus den Äpfeln?", a: "Apfelkuchen", h: "Aus den Äpfeln backt Oma einen leckeren Apfelkuchen." },
    { t: "mc", q: "Wer hilft Opa beim Pflücken?", o: ["Ida", "Oma", "Die Bienen"], a: 0, h: "Dann hilft Ida ihrem Opa beim Pflücken." },
    { t: "yn", q: "Hat der Baum im Winter Blätter?", a: false, h: "Im Winter hat der Baum keine Blätter mehr." }
  ]},

{ id: 41, stufe: 1, emoji: "🐉", titel: "Der kleine Drache Fips",
  text: [
    "Fips ist ein kleiner grüner Drache. Alle anderen Drachen können Feuer spucken. Nur Fips nicht. Wenn er es versucht, kommt nur eine kleine Rauchwolke heraus. Die anderen Drachen lachen ihn aus.",
    "Eines Tages ist es im Drachental sehr kalt. Der Kakao der Drachenkinder ist eiskalt geworden. Die großen Drachen pusten Feuer – aber dabei verbrennen sie die Becher.",
    "Da pustet Fips vorsichtig seine warme Luft auf die Becher. Der Kakao wird schön warm, und kein Becher geht kaputt. Jetzt lacht niemand mehr über Fips."
  ],
  fragen: [
    { t: "mc", q: "Welche Farbe hat Fips?", o: ["Rot", "Grün", "Blau"], a: 1, h: "Fips ist ein kleiner grüner Drache." },
    { t: "yn", q: "Kann Fips Feuer spucken?", a: false, h: "Nur Fips nicht." },
    { t: "tap", q: "Was kommt heraus, wenn Fips es versucht? Eine kleine …", a: "Rauchwolke", h: "kommt nur eine kleine Rauchwolke heraus" },
    { t: "mc", q: "Was passiert, als die großen Drachen Feuer pusten?", o: ["Der Kakao gefriert", "Sie verbrennen die Becher", "Es fängt an zu schneien"], a: 1, h: "aber dabei verbrennen sie die Becher" },
    { t: "mc", q: "Wie hilft Fips?", o: ["Er holt neuen Kakao", "Er pustet warme Luft auf die Becher", "Er macht ein Feuer"], a: 1, h: "Da pustet Fips vorsichtig seine warme Luft auf die Becher." },
    { t: "mc", q: "Was lernt man aus der Geschichte? (Denk nach!)", o: ["Jeder kann etwas Besonderes", "Drachen mögen keinen Kakao", "Man soll nie Feuer machen"], a: 0, h: "Jetzt lacht niemand mehr über Fips." }
  ]},

{ id: 42, stufe: 1, emoji: "🐢", titel: "Schildkröten",
  text: [
    "Schildkröten tragen ihr Haus immer mit sich. Ihr Panzer ist hart und schützt sie vor Feinden. Wenn Gefahr droht, ziehen viele Schildkröten den Kopf und die Beine in den Panzer.",
    "Es gibt Landschildkröten und Wasserschildkröten. Landschildkröten fressen vor allem Pflanzen. Sie bewegen sich sehr langsam.",
    "Schildkröten können sehr alt werden. Manche leben über 100 Jahre! Schildkröten haben keine Zähne. Mit ihrem harten Mund können sie trotzdem gut abbeißen."
  ],
  fragen: [
    { t: "tap", q: "Was schützt die Schildkröte vor Feinden? Ihr …", a: "Panzer", h: "Ihr Panzer ist hart und schützt sie vor Feinden." },
    { t: "mc", q: "Was machen viele Schildkröten bei Gefahr?", o: ["Sie rennen weg", "Sie ziehen Kopf und Beine in den Panzer", "Sie beißen"], a: 1, h: "ziehen viele Schildkröten den Kopf und die Beine in den Panzer" },
    { t: "mc", q: "Was fressen Landschildkröten vor allem?", o: ["Fleisch", "Pflanzen", "Fische"], a: 1, h: "Landschildkröten fressen vor allem Pflanzen." },
    { t: "yn", q: "Sind Landschildkröten schnell?", a: false, h: "Sie bewegen sich sehr langsam." },
    { t: "mc", q: "Wie alt können manche Schildkröten werden?", o: ["Über 10 Jahre", "Über 100 Jahre", "Über 1000 Jahre"], a: 1, h: "Manche leben über 100 Jahre!" },
    { t: "yn", q: "Haben Schildkröten Zähne?", a: false, h: "Schildkröten haben keine Zähne." }
  ]},

{ id: 43, stufe: 1, emoji: "🐄", titel: "Auf dem Bauernhof",
  text: [
    "Die Klasse 4b fährt mit dem Bus zu einem Bauernhof. Bauer Klaus zeigt den Kindern seine Tiere.",
    "Im Stall stehen viele Kühe. Bauer Klaus melkt sie jeden Morgen und jeden Abend mit einer Maschine. Danach dürfen die Kinder ein kleines Kälbchen streicheln. Es heißt Flecki.",
    "Im Hühnerstall suchen die Kinder Eier. Mila findet sechs Eier im Stroh. Zum Mittagessen gibt es Rührei – mit den Eiern, die die Kinder selbst gefunden haben."
  ],
  fragen: [
    { t: "mc", q: "Womit fährt die Klasse zum Bauernhof?", o: ["Mit dem Zug", "Mit dem Bus", "Mit dem Fahrrad"], a: 1, h: "fährt mit dem Bus zu einem Bauernhof" },
    { t: "yn", q: "Melkt Bauer Klaus die Kühe mit der Hand?", a: false, h: "mit einer Maschine" },
    { t: "tap", q: "Wie heißt das Kälbchen?", a: "Flecki", h: "Es heißt Flecki." },
    { t: "mc", q: "Wie viele Eier findet Mila?", o: ["Drei", "Sechs", "Zehn"], a: 1, h: "Mila findet sechs Eier im Stroh." },
    { t: "mc", q: "Was gibt es zum Mittagessen?", o: ["Pfannkuchen", "Rührei", "Suppe"], a: 1, h: "Zum Mittagessen gibt es Rührei" },
    { t: "yn", q: "Haben die Kinder die Eier selbst gefunden?", a: true, h: "mit den Eiern, die die Kinder selbst gefunden haben" }
  ]},

{ id: 44, stufe: 1, emoji: "🪔", titel: "Deepavali – das Lichterfest",
  text: [
    "Deepavali ist ein großes Fest in Indien und Sri Lanka. Auch viele tamilische Familien in Deutschland feiern es. Es findet im Herbst statt, im Oktober oder November.",
    "Deepavali heißt „Reihe von Lichtern“. Die Menschen zünden kleine Öllampen an und stellen sie ins Fenster und vor die Tür. Das Licht steht für das Gute, das stärker ist als die Dunkelheit.",
    "Am Morgen ziehen alle neue Kleider an. Die Familien besuchen sich und essen zusammen viele Süßigkeiten. Am Abend gibt es oft ein buntes Feuerwerk."
  ],
  fragen: [
    { t: "yn", q: "Wird Deepavali auch in Deutschland gefeiert?", a: true, h: "Auch viele tamilische Familien in Deutschland feiern es." },
    { t: "mc", q: "Wann ist Deepavali?", o: ["Im Frühling", "Im Herbst", "Im Sommer"], a: 1, h: "Es findet im Herbst statt, im Oktober oder November." },
    { t: "mc", q: "Was heißt Deepavali?", o: ["Reihe von Lichtern", "Großes Essen", "Neues Jahr"], a: 0, h: "Deepavali heißt „Reihe von Lichtern“." },
    { t: "tap", q: "Was zünden die Menschen an? Kleine …", a: "Öllampen", h: "Die Menschen zünden kleine Öllampen an" },
    { t: "mc", q: "Wofür steht das Licht?", o: ["Für den Sommer", "Für das Gute", "Für das Geld"], a: 1, h: "Das Licht steht für das Gute, das stärker ist als die Dunkelheit." },
    { t: "yn", q: "Ziehen die Menschen am Morgen alte Kleider an?", a: false, h: "Am Morgen ziehen alle neue Kleider an." }
  ]},

{ id: 45, stufe: 1, emoji: "🏊", titel: "Das Seepferdchen",
  text: [
    "Mia geht jeden Mittwoch zum Schwimmkurs. Am Anfang hatte sie Angst vor dem tiefen Wasser. Aber ihr Schwimmlehrer Tim hat ihr viel Mut gemacht.",
    "Heute ist ein besonderer Tag. Mia will das Seepferdchen schaffen. Dafür muss sie vom Beckenrand springen, 25 Meter schwimmen und einen Ring vom Boden holen.",
    "Mia springt ins Wasser und schwimmt los. Ihre Arme werden müde, aber sie gibt nicht auf. Dann taucht sie nach dem Ring. Geschafft! Tim gibt ihr ein Abzeichen mit einem Seepferdchen. Mama näht es zu Hause an Mias Badeanzug."
  ],
  fragen: [
    { t: "mc", q: "Wann geht Mia zum Schwimmkurs?", o: ["Jeden Montag", "Jeden Mittwoch", "Jeden Freitag"], a: 1, h: "Mia geht jeden Mittwoch zum Schwimmkurs." },
    { t: "yn", q: "Hatte Mia am Anfang Angst vor dem tiefen Wasser?", a: true, h: "Am Anfang hatte sie Angst vor dem tiefen Wasser." },
    { t: "tap", q: "Wie heißt der Schwimmlehrer?", a: "Tim", h: "ihr Schwimmlehrer Tim" },
    { t: "mc", q: "Wie weit muss Mia schwimmen?", o: ["10 Meter", "25 Meter", "100 Meter"], a: 1, h: "25 Meter schwimmen" },
    { t: "mc", q: "Was muss Mia vom Boden holen?", o: ["Einen Ball", "Einen Ring", "Einen Stein"], a: 1, h: "einen Ring vom Boden holen" },
    { t: "yn", q: "Gibt Mia auf, als ihre Arme müde werden?", a: false, h: "Ihre Arme werden müde, aber sie gibt nicht auf." }
  ]},

{ id: 46, stufe: 1, emoji: "🌈", titel: "Der Regenbogen",
  text: [
    "Nach einem Regenschauer kann man manchmal einen Regenbogen sehen. Dafür braucht man zwei Dinge: Sonne und Regentropfen.",
    "Das Sonnenlicht sieht weiß aus. Aber eigentlich steckt in ihm ein ganzes Farbenmeer. Wenn das Licht durch die Regentropfen scheint, wird es in seine Farben zerlegt. Dann sehen wir Rot, Orange, Gelb, Grün, Blau und Violett.",
    "Einen Regenbogen sieht man nur, wenn die Sonne hinter einem steht und vorne Regen fällt. Am besten klappt das am Morgen oder am späten Nachmittag."
  ],
  fragen: [
    { t: "mc", q: "Was braucht man für einen Regenbogen?", o: ["Sonne und Regentropfen", "Wind und Schnee", "Mond und Wolken"], a: 0, h: "Dafür braucht man zwei Dinge: Sonne und Regentropfen." },
    { t: "yn", q: "Sieht das Sonnenlicht bunt aus?", a: false, h: "Das Sonnenlicht sieht weiß aus." },
    { t: "mc", q: "Was passiert, wenn das Licht durch die Regentropfen scheint?", o: ["Es wird dunkel", "Es wird in seine Farben zerlegt", "Es wird warm"], a: 1, h: "wird es in seine Farben zerlegt" },
    { t: "tap", q: "Welche Farbe wird im Text als letzte genannt?", a: "Violett", h: "Dann sehen wir Rot, Orange, Gelb, Grün, Blau und Violett." },
    { t: "yn", q: "Muss die Sonne vor dir stehen, damit du einen Regenbogen siehst?", a: false, h: "wenn die Sonne hinter einem steht und vorne Regen fällt" },
    { t: "mc", q: "Wann klappt es am besten?", o: ["Um Mitternacht", "Am Morgen oder am späten Nachmittag", "Genau am Mittag"], a: 1, h: "Am besten klappt das am Morgen oder am späten Nachmittag." }
  ]},

{ id: 47, stufe: 1, emoji: "🐹", titel: "Mein Hamster Krümel",
  text: [
    "Ich heiße Leon und habe einen Hamster. Er heißt Krümel, weil er so gern Krümel frisst. Krümel hat ein weiches, goldbraunes Fell.",
    "Am Tag schläft Krümel in seinem Häuschen. Erst am Abend wird er wach. Dann läuft er stundenlang in seinem Laufrad. Manchmal stopft er sich so viel Futter in die Backen, dass sein Kopf ganz dick aussieht. Das Futter trägt er dann in sein Versteck.",
    "Jeden Samstag mache ich Krümels Käfig sauber. Das ist meine Aufgabe."
  ],
  fragen: [
    { t: "mc", q: "Wer erzählt die Geschichte?", o: ["Krümel", "Leon", "Leons Mutter"], a: 1, h: "Ich heiße Leon und habe einen Hamster." },
    { t: "mc", q: "Warum heißt der Hamster Krümel?", o: ["Weil er so klein ist", "Weil er gern Krümel frisst", "Weil er braun ist"], a: 1, h: "weil er so gern Krümel frisst" },
    { t: "yn", q: "Ist Krümel am Tag wach?", a: false, h: "Am Tag schläft Krümel in seinem Häuschen." },
    { t: "tap", q: "Worin läuft Krümel am Abend?", a: "Laufrad", h: "Dann läuft er stundenlang in seinem Laufrad." },
    { t: "mc", q: "Wo trägt Krümel das Futter hin?", o: ["In sein Versteck", "In den Garten", "Zu Leon"], a: 0, h: "Das Futter trägt er dann in sein Versteck." },
    { t: "mc", q: "Wann macht Leon den Käfig sauber?", o: ["Jeden Tag", "Jeden Samstag", "Nie"], a: 1, h: "Jeden Samstag mache ich Krümels Käfig sauber." }
  ]},

{ id: 48, stufe: 1, emoji: "🚒", titel: "Die Feuerwehr",
  text: [
    "Wenn es brennt, ruft man die Feuerwehr. Die Notrufnummer ist 112. Am Telefon sagt man, wo es brennt und was passiert ist.",
    "Die Feuerwehrleute ziehen schnell ihre Schutzkleidung und einen Helm an. Dann fahren sie mit Blaulicht und Martinshorn los. So wissen alle Autos, dass sie Platz machen müssen.",
    "Die Feuerwehr löscht nicht nur Feuer. Sie hilft auch bei Unfällen, bei Hochwasser und manchmal sogar, wenn eine Katze auf einem Baum festsitzt."
  ],
  fragen: [
    { t: "tap", q: "Welche Nummer ruft man an, wenn es brennt? Tippe auf die Zahl.", a: "112", h: "Die Notrufnummer ist 112." },
    { t: "mc", q: "Was sagt man am Telefon?", o: ["Wie man heißt und wie alt man ist", "Wo es brennt und was passiert ist", "Welches Wetter es ist"], a: 1, h: "Am Telefon sagt man, wo es brennt und was passiert ist." },
    { t: "mc", q: "Was ziehen die Feuerwehrleute an?", o: ["Schutzkleidung und Helm", "Badehose und Mütze", "Anzug und Krawatte"], a: 0, h: "ziehen schnell ihre Schutzkleidung und einen Helm an" },
    { t: "yn", q: "Fährt die Feuerwehr mit Blaulicht?", a: true, h: "Dann fahren sie mit Blaulicht und Martinshorn los." },
    { t: "mc", q: "Warum fährt die Feuerwehr mit Martinshorn?", o: ["Damit die Autos Platz machen", "Weil es Spaß macht", "Damit die Kinder winken"], a: 0, h: "So wissen alle Autos, dass sie Platz machen müssen." },
    { t: "yn", q: "Löscht die Feuerwehr nur Feuer?", a: false, h: "Die Feuerwehr löscht nicht nur Feuer." }
  ]},

{ id: 49, stufe: 1, emoji: "🧺", titel: "Das Picknick",
  text: [
    "Am Sonntag macht Familie Nguyen ein Picknick im Park. Papa breitet eine große Decke auf der Wiese aus. Mama packt Brote, Erdbeeren und Saft aus dem Korb.",
    "Die kleine Lan isst gerade eine Erdbeere, da ruft sie: „Iiih, da sind Ameisen!“ Eine lange Reihe Ameisen krabbelt über die Decke direkt zu den Broten.",
    "Papa lacht. „Die haben auch Hunger.“ Er legt ein kleines Stück Brot ein Stück weiter weg ins Gras. Sofort laufen die Ameisen dorthin. Jetzt kann die Familie in Ruhe weiteressen."
  ],
  fragen: [
    { t: "mc", q: "Wann macht die Familie ein Picknick?", o: ["Am Samstag", "Am Sonntag", "Am Montag"], a: 1, h: "Am Sonntag macht Familie Nguyen ein Picknick im Park." },
    { t: "yn", q: "Gibt es beim Picknick Erdbeeren?", a: true, h: "Mama packt Brote, Erdbeeren und Saft aus dem Korb." },
    { t: "tap", q: "Welche Tiere krabbeln über die Decke?", a: "Ameisen", h: "Eine lange Reihe Ameisen krabbelt über die Decke direkt zu den Broten." },
    { t: "mc", q: "Wohin wollen die Ameisen?", o: ["Zu den Broten", "Zum Saft", "Zu Papa"], a: 0, h: "direkt zu den Broten" },
    { t: "mc", q: "Was macht Papa?", o: ["Er schimpft", "Er legt ein Stück Brot weiter weg", "Er packt alles ein"], a: 1, h: "Er legt ein kleines Stück Brot ein Stück weiter weg ins Gras." },
    { t: "yn", q: "Ist Papas Idee gut? (Denk nach!)", a: true, h: "Jetzt kann die Familie in Ruhe weiteressen." }
  ]},

{ id: 50, stufe: 1, emoji: "🎃", titel: "Der Riesenkürbis",
  text: [
    "Im Mai pflanzt Jonas einen Kürbiskern in ein Beet im Garten. Jeden Tag gießt er die Pflanze. Bald wachsen große Blätter und gelbe Blüten.",
    "Im Sommer entdeckt Jonas einen kleinen grünen Kürbis. Er wächst und wächst. Im Herbst ist er orange und so schwer, dass Jonas ihn nicht allein tragen kann. Papa muss helfen.",
    "Aus dem Kürbis kochen sie eine leckere Suppe. Die Schale schnitzt Jonas zu einem lustigen Gesicht. Am Abend stellt er eine Kerze hinein."
  ],
  fragen: [
    { t: "mc", q: "Wann pflanzt Jonas den Kürbiskern?", o: ["Im Mai", "Im Juli", "Im Oktober"], a: 0, h: "Im Mai pflanzt Jonas einen Kürbiskern" },
    { t: "mc", q: "Welche Farbe haben die Blüten?", o: ["Weiß", "Gelb", "Rot"], a: 1, h: "gelbe Blüten" },
    { t: "yn", q: "Ist der Kürbis im Sommer schon orange?", a: false, h: "Im Sommer entdeckt Jonas einen kleinen grünen Kürbis." },
    { t: "yn", q: "Kann Jonas den Kürbis im Herbst allein tragen?", a: false, h: "so schwer, dass Jonas ihn nicht allein tragen kann" },
    { t: "tap", q: "Was kochen sie aus dem Kürbis?", a: "Suppe", h: "Aus dem Kürbis kochen sie eine leckere Suppe." },
    { t: "mc", q: "Was stellt Jonas am Abend in den Kürbis?", o: ["Eine Blume", "Eine Kerze", "Einen Apfel"], a: 1, h: "Am Abend stellt er eine Kerze hinein." }
  ]},

{ id: 51, stufe: 1, emoji: "🦉", titel: "Die Eule",
  text: [
    "Eulen sind Vögel der Nacht. Am Tag schlafen sie versteckt in Bäumen, in Scheunen oder in Kirchtürmen. Wenn es dunkel wird, gehen sie auf die Jagd.",
    "Eulen können im Dunkeln sehr gut sehen und hören. Ihre Augen sind groß. Sie können sie aber nicht bewegen. Deshalb drehen Eulen ihren ganzen Kopf, fast einmal nach hinten.",
    "Eulen fliegen fast ohne Geräusch. So merken Mäuse nicht, dass eine Eule kommt."
  ],
  fragen: [
    { t: "yn", q: "Jagen Eulen am Tag?", a: false, h: "Wenn es dunkel wird, gehen sie auf die Jagd." },
    { t: "mc", q: "Wo schlafen Eulen am Tag?", o: ["Im Wasser", "In Bäumen, Scheunen oder Kirchtürmen", "In Erdhöhlen"], a: 1, h: "in Bäumen, in Scheunen oder in Kirchtürmen" },
    { t: "yn", q: "Können Eulen ihre Augen bewegen?", a: false, h: "Sie können sie aber nicht bewegen." },
    { t: "tap", q: "Was drehen Eulen, um sich umzuschauen? Ihren ganzen …", a: "Kopf", h: "Deshalb drehen Eulen ihren ganzen Kopf" },
    { t: "mc", q: "Wie fliegen Eulen?", o: ["Sehr laut", "Fast ohne Geräusch", "Nur im Kreis"], a: 1, h: "Eulen fliegen fast ohne Geräusch." },
    { t: "mc", q: "Warum ist das leise Fliegen wichtig? (Denk nach!)", o: ["Damit die Mäuse es nicht merken", "Damit sie nicht müde werden", "Damit sie schneller sind"], a: 0, h: "So merken Mäuse nicht, dass eine Eule kommt." }
  ]},

{ id: 52, stufe: 1, emoji: "⛈️", titel: "Das Gewitter",
  text: [
    "In der Nacht wacht Sami auf. Draußen blitzt es hell. Dann donnert es laut. Sami hat Angst und läuft zu seiner großen Schwester Rana.",
    "Rana sagt: „Ich zeige dir einen Trick. Wenn es blitzt, zählst du die Sekunden bis zum Donner. Wenn du bis drei zählst, ist das Gewitter etwa einen Kilometer weit weg.“",
    "Beim nächsten Blitz zählt Sami: „Eins, zwei, drei, vier, fünf, sechs …“ Dann donnert es. Beim übernächsten Blitz kommt er bis neun. „Das Gewitter zieht weg!“, ruft Sami. Jetzt hat er keine Angst mehr und schläft wieder ein."
  ],
  fragen: [
    { t: "mc", q: "Wann wacht Sami auf?", o: ["Am Morgen", "In der Nacht", "Am Mittag"], a: 1, h: "In der Nacht wacht Sami auf." },
    { t: "mc", q: "Zu wem läuft Sami?", o: ["Zu Mama", "Zu seiner Schwester Rana", "Zu Opa"], a: 1, h: "läuft zu seiner großen Schwester Rana" },
    { t: "tap", q: "Was zählt man zwischen Blitz und Donner?", a: "Sekunden", h: "zählst du die Sekunden bis zum Donner" },
    { t: "mc", q: "Wie weit ist das Gewitter weg, wenn man bis drei zählt?", o: ["Etwa einen Kilometer", "Etwa zehn Kilometer", "Direkt über dem Haus"], a: 0, h: "Wenn du bis drei zählst, ist das Gewitter etwa einen Kilometer weit weg." },
    { t: "yn", q: "Kommt das Gewitter näher? (Denk nach!)", a: false, h: "„Das Gewitter zieht weg!“" },
    { t: "yn", q: "Hat Sami am Ende noch Angst?", a: false, h: "Jetzt hat er keine Angst mehr und schläft wieder ein." }
  ]},

{ id: 53, stufe: 1, emoji: "📚", titel: "In der Bücherei",
  text: [
    "Heute geht Aylin zum ersten Mal in die Stadtbücherei. Dort gibt es Tausende Bücher. Man kann sie ausleihen, ohne etwas zu bezahlen.",
    "Zuerst bekommt Aylin einen Leseausweis mit ihrem Namen. Dann sucht sie sich drei Bücher aus: eines über Pferde, ein Comic und eine lustige Geschichte über einen frechen Raben.",
    "Die Frau an der Theke sagt: „Du kannst die Bücher drei Wochen behalten. Dann bringst du sie zurück.“ Aylin freut sich schon darauf, zu Hause zu lesen."
  ],
  fragen: [
    { t: "yn", q: "Muss man in der Bücherei für das Ausleihen bezahlen?", a: false, h: "Man kann sie ausleihen, ohne etwas zu bezahlen." },
    { t: "tap", q: "Was bekommt Aylin zuerst? Einen …", a: "Leseausweis", h: "Zuerst bekommt Aylin einen Leseausweis mit ihrem Namen." },
    { t: "mc", q: "Wie viele Bücher sucht sie aus?", o: ["Zwei", "Drei", "Fünf"], a: 1, h: "Dann sucht sie sich drei Bücher aus" },
    { t: "mc", q: "Welches Buch nimmt sie NICHT? (Lies genau!)", o: ["Ein Buch über Pferde", "Ein Comic", "Ein Kochbuch"], a: 2, h: "eines über Pferde, ein Comic und eine lustige Geschichte über einen frechen Raben" },
    { t: "mc", q: "Wie lange darf Aylin die Bücher behalten?", o: ["Eine Woche", "Drei Wochen", "Ein Jahr"], a: 1, h: "Du kannst die Bücher drei Wochen behalten." },
    { t: "yn", q: "Freut sich Aylin auf das Lesen?", a: true, h: "Aylin freut sich schon darauf, zu Hause zu lesen." }
  ]},

{ id: 54, stufe: 1, emoji: "🦒", titel: "Die Giraffe",
  text: [
    "Die Giraffe ist das höchste Tier der Welt. Sie kann über fünf Meter hoch werden. Das ist höher als ein Bus!",
    "Mit ihrem langen Hals kommt die Giraffe an die Blätter ganz oben in den Bäumen. Ihre Zunge ist sehr lang und dunkel. Damit zupft sie die Blätter ab.",
    "Giraffen schlafen nur sehr wenig, oft nur kurz und im Stehen. Ein Giraffenbaby ist bei der Geburt schon fast zwei Meter groß. Schon nach einer Stunde kann es stehen."
  ],
  fragen: [
    { t: "yn", q: "Ist die Giraffe das höchste Tier der Welt?", a: true, h: "Die Giraffe ist das höchste Tier der Welt." },
    { t: "mc", q: "Wie hoch kann eine Giraffe werden?", o: ["Über zwei Meter", "Über fünf Meter", "Über zehn Meter"], a: 1, h: "Sie kann über fünf Meter hoch werden." },
    { t: "tap", q: "Womit zupft die Giraffe die Blätter ab? Mit ihrer …", a: "Zunge", h: "Ihre Zunge ist sehr lang und dunkel. Damit zupft sie die Blätter ab." },
    { t: "yn", q: "Schlafen Giraffen sehr lange?", a: false, h: "Giraffen schlafen nur sehr wenig" },
    { t: "mc", q: "Wie groß ist ein Giraffenbaby bei der Geburt?", o: ["Fast zwei Meter", "Fast ein Meter", "So groß wie eine Katze"], a: 0, h: "Ein Giraffenbaby ist bei der Geburt schon fast zwei Meter groß." },
    { t: "mc", q: "Wann kann das Baby stehen?", o: ["Nach einer Stunde", "Nach einer Woche", "Nach einem Jahr"], a: 0, h: "Schon nach einer Stunde kann es stehen." }
  ]}
);
