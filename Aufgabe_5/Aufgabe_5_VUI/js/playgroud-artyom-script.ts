declare var Artyom: any;

window.addEventListener("load", function(): void {
    const artyom: any = new Artyom();

    artyom.addCommands({
        indexes: ["Hallo *"],
        smart: true,
        action: function (i, wildcard) {
            artyom.say("Hallo");
        }
    });

    artyom.addCommands({
        indexes: ["Hallo"],
        smart: false,
        action: function (i, wildcard) {
            artyom.say("Hallo");
        }
    });
    
    artyom.addCommands({
        indexes: ["Wie lautet dein Name", "Wer bist du", "Dein Name"],
        smart: false,
        action: function (i, wildcard) {
            artyom.say("Mein Name is Artyom");
        }
    });

    artyom.addCommands({
        indexes: ["Heutige Stückzahlen","Anzahl der heutigen Stückzahlen","Wie viele Stückzahlen wurden heute produziert"],
        smart: false,
        action: function(i: any, wildcard: string): void {
            artyom.say("Heute wurden in allen Werken X Stückzahlen produziert.");
        }
    });

    artyom.addCommands({
        indexes: ["Wie viele Stückzahlen wurden am 1 produziert"],
        smart: false,
        action: function(i: any, wildcard: string): void {
            artyom.say("Es wurden am 1 2 3 X Stückzahlen produziert.");
        }
    });

    artyom.addCommands({
        indexes: ["Wie viel Ausschuss gab es heute", "Heutiger Ausschuss"],
        smart: false,
        action: function(i: any, wildcard: string): void {
            artyom.say("Heute beträgt die Anzahl des Ausschusses X.");
        }
    });

    artyom.addCommands({
        indexes: ["Heutige Krankmeldungen"],
        smart: false,
        action: function(i: any, wildcard: string): void {
            artyom.say("Heute haben sich X Leute Krankgemeldet.");
        }
    });

    artyom.addCommands({
        indexes: ["Was kann ich Fragen","Hilfe"],
        smart: false,
        action: function(i: any, wildcard: string): void {
            artyom.say("Sie können Fragen was die heutigen Zahlen in allen Werken sind oder einzelne Attribute abfragen wie Stückzahlen, Ausschuss oder Krankmeldungen.");
        }
    });

    artyom.addCommands({
        indexes: ["Was sind die heutigen Zahlen"],
        smart: false,
        action: function(i: any, wildcard: string): void {
            artyom.say("Heute wurden in allen Werken X Stückzahlen produziert, die Anzahl des Ausschusses beträgt X, die Kosten für Verschleißteile liegen bei X und es gab X Krankmeldungen.");
        }
    });
    
    function startContinuousArtyom(): void {
        artyom.fatality();
    
        setTimeout(
            function(): void {
                artyom.initialize({
                    lang: "de-DE",
                    continuous: true,
                    listen: true,
                    interimResults: true,
                    debug: true
                }).then(function(): void {
                    console.log("Ready!");
                });
            }, 
            250);
    }
    
    startContinuousArtyom();
    
});