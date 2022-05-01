# angular10-openlayers-demo-g5iuab

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/angular10-openlayers-demo-g5iuab)

-----01/05/2022-----

COME SI AGGIUNGONO ELEMENTI SULLA MAPPA: sulla base della mia attuale conoscenza:
Ogni volta che si vuole aggiungere un elemento alla mappa,
bisogna aggiungere un livello. Questo perchè è necessario
indicare la posizione geografica in cui il livello apparirà
sulla mappa.
E' comunque possibile evitare di aggiunere un livello apposito
nel caso si voglia semplicemente arricchire un elemento sulla
mappa. In questo caso basta arricchire il nodo sul DOM ed
aggiungere un solo livello.
ESEMPIO: è possibile definre un quadrato che mostra del testo
al suo intenro, evitando di aggiungere un Overlat per il quadrato
ed uno per il testo: è possibile aggiungere un solo Overlay che
mostri il quadrato ed il testo al suo interno. Lo faccio usando il
metodo appendChild.
Se non facessi così, mi verrebbe complicato mostrare il testo al centro
del quadrato ad esempio.
Il processo da seguireè il seguente:
 • creare una mappa
 • Creare un oggetto della classe Overlay
 • specifica del codice html da mostrare (campo element)
 • specifica della posizione (campo position)
