# Opdrachten CSS
 ## H1 Selectors and visual rules
 <br>

* ### Q1 Je kunt op 3 verschillende manieren CSS in je HTML inladen. Op welke 3 manieren kun je dat doen? Leg ook voor elke wijze uit wat het precies inhoud.

1. inline: je gebruikt het style attribute van het html element. Bijvoorbeeld: 
```
<h1 style="color: white;">Dit is een witte Titel</h1>
```
2. internal CSS: je zet de css-regels in het document zelf. Binnen een &lt;style> tag in de HEAD.

3. external CSS: je verwijst met een link in HEAD naar een extern CSS bestand. Voorbeeld:
```
<head>
  <link rel="stylesheet" href="styles.css">
</head>
```
<br>

* ### Q2 CSS pas je toe met een bepaalde syntax. Hoe ziet zo'n syntax eruit? Kun je ook uitleggen wat elk element uit de syntax betekent?

De syntax (een set regels) bevat de volgende elementen:
1. De selector: hiermee selecteer je het element of de elementen waarvan je de kenmerken wilt aanpassen.
    Je kunt onder andere selecteren op &lt;type>, class en id.
2. Property/Value pairs: hiermee zeg je welk kenmerk (Property) je wilt aanpassen met welke waarde (Value).
Voorbeeld:

```
h1 (type-selector) {
    color: (property) white(value);
}

.green-paragraph (class-selector) {
    color: green;
}

#para1 (id-selector) {
    color: red;
}
```
<br>

* ### Q3 Er zijn verschillende selectors, bijvoorbeeld;

* type selectors
* class selectors
* ID selectors
* descendant selectors

### Maak van de bovengenoemde selectors voorbeelden. Geef in je antwoord ook aan wat de voordelen zijn van elke selector.

zie Q2. Voorbeeld van een descendand selector:
```
div p {
  background-color: yellow;
  }
<!--  (Alle <p> elementen binnen <div> elementen worden hier geselecteerd) -->
```
<br>

De voordelen van:
* type selectors: alle elementen van dit type worden geselecteerd, snel een resultaat.
* class selectors: alle elementen met deze classname worden geselecteerd, hiermee kun je preciezer zijn.
* ID selectors: hiermee wordt één uniek element geselecteerd.
* descendant selectors: alle elementen van het laatsgenoemde type die binnen het eerst genoemde element staan worden geselecteerd.

<br>

* ### Q4 Maak een .html file en voeg de volgende code toe:

![alt_text](../images/image7.png)

Maak het onderstaande na door gebruik te maken van selectors. De kleuren die hiervoor gebruikt zijn is green en darkblue.

![alt_text](../images/image30.png)

<br>

[link naar antwoord CTRL+CLICK](https://htmlpreview.github.io/?https://github.com/TG-WD6/wd-6-repo-Verwoost/blob/main/01_Fundamentals/04_css/opdrachten/hfdstkEENopdrachtVIER.html)

<br>
<br>

* ### Q5 Maak een aparte html bestand en voeg de volgende code toe:

![alt_text](../images/image35.png)


Maak het onderstaande na door gebruik te maken van selectors. De kleuren die hiervoor gebruikt zijn is green en black.

![alt_text](../images/image38.png)

<br>

[link naar antwoord CTRL+CLICK](https://htmlpreview.github.io/?https://github.com/TG-WD6/wd-6-repo-Verwoost/blob/main/01_Fundamentals/04_css/opdrachten/hfdstkEENopdrachtVIJF.html)

<br>
<br>

* ### Q6 Verder heb je ook nog de volgende selectors:


* universal selector
* attribute selectors
* child selectors
* adjacent sibling selectors
* general sibling selectors

### Maak een .html file waar je alledrie in gebruikt
<br>

[link naar antwoord CTRL+CLICK](https://htmlpreview.github.io/?https://github.com/TG-WD6/wd-6-repo-Verwoost/blob/main/01_Fundamentals/04_css/opdrachten/hfdstkEENopdrachtZES.html)

<br>
<br>

* ### Q7 Je kan selectors ook op meerdere manieren combineren. Bijvoorbeeld:

* Een selector die alle elementen met type div EN class “opdracht” selecteert
* Meerdere selectors die hetzelfde stukje CSS gebruiken

### Maak een .html file waarin beide voorbeelden worden gebruikt
<br>

[link naar antwoord CTRL+CLICK](https://htmlpreview.github.io/?https://github.com/TG-WD6/wd-6-repo-Verwoost/blob/main/01_Fundamentals/04_css/opdrachten/hfdstkEENopdrachtZEVEN.html)
<br>
<br>

* ### Q8 Leg in eigen woorden uit wat met cascade en inheritance wordt bedoeld. Maak voorbeelden om je antwoord uit te leggen.

<br>

Cascade: kun je zien als een waterval waarbij het water dat het langst aan het vallen is de meeste impact heeft.
Met betrekking tot CSS zijn er drie regels waar je rekening mee moet houden: 

* volgorde (source order):      wanneer meerdere regels even specifiek en belangrijk zijn telt de onderste
* specicificiteit (specificity) wanneer meerdere regels even belangrijk zijn telt de meest specifieke
* belang (importance)           de meest belangrijke regel telt   

<br>
Voorbeeld 1: de h2 elementen zullen rood zijn omdat de laatste regel telt.
<br>

```
<style>
  h2{
    color: blue;
  }

  h2{
    color: red;
  }

```
<br>

Voorbeeld 2: Het eerste h2 element is rood. Het tweede h2 element is blauw omdat de .class selector meer specifiek is. Het derde element groen omdat deze een id attribute heeft. Een id selector is de meest specifieke selector.

<br>

```
<style> 

  h2{ 
    color: red;
  }

  .bluetitle{
    color: blue;
  }

  #greentitle{
    color: green;
  }

</style>
</head>

<html>
  <body>

    <h2>Title1</h2>

    <h2 class="bluetitle">Title2</h2>

    <h2 class="bluetitle" id="greentitle">Title3</h2>

```
<br>
<br>

Voorbeeld 3: In het volgende voorbeeld zal het h2 element rood zijn en geen border hebben omdat hoewel de id-selector het meest specifiek is, de regel "border: none !important;" in de class-selector de rest overtreft wat betreft belang.
<br>

```
  .greenNoBorder{
    color: green;
    border: none !important;
  }

  #redGreyBorder{
    color: red;
    border: 2px solid grey;
  }

</style>
</head>

<html>
  <body>

  <h2 class="greenNoBorder" id="redGreyBorder">Title</h2>

```

## H2 Het BOX-model

* ### Q1 Wat zijn de eigenschappen van block boxes en inline boxes?

<br>

Block neemt de gehele breedte van de container in beslag, inline boxes kunnen naast elkaar.

<br>

* ### Q2 Maak wat hieronder staat met paragraph en span tags.

![alt_text](../images/image17.png "image_tooltip")

<br>

[link naar het antwoord CTRL+CLICK](https://htmlpreview.github.io/?https://github.com/TG-WD6/wd-6-repo-Verwoost/blob/main/01_Fundamentals/04_css/opdrachten/hfdstkTWEEopdrachtTWEE.html)

<br>

* ### Q3 Wat gebeurt er als je een width en een height toevoegt aan de span tag ( &lt;span> ) van vorige opdracht?

Helemaal niets.

<br>

* ### Q4 Hieronder zie je een box-model:

![alt_text](../images/image11.png)

Leg uit wat de volgende termen betekenen: content, padding, margin en border.

<br>

1. Content is de inhoud.
2. Padding is de ruimte tussen de inhoud en de border.
3. Border is de rand om de inhoud en de padding.
4. Margin is ruimte tussen de border en buiten de box.

<br>

* ### Q5 Als je ruimte wilt maken tussen de border en content, welke css property gebruik je dan? Maak een voorbeeld in je antwoord.

```
Antwoord: padding.
Voorbeeld: 

<p style= "padding: 2rem;"> Dit is een paragraaf </p>

```

<br>

* ### Q6 Als je ruimte wilt maken tussen de border en buiten de box, welke css property gebruik je dan? Maak een voorbeeld in je antwoord.

```
Antwoord: margin.
Voorbeeld:

<p style= "margin: 2rem;"> Dit is een paragraaf </p>

```

<br>

* ### Q7 Maak nu een blok met width: 100px, height: 100px, margin: 5px, padding 5px en border-width: 5px. Zie hieronder:

![alt_text](../images/image25.png)

1. Hoe breed is de box? 120px

2. Hoe hoog is de box? 120px

3. Wat merk je op met width en height? alles behalve margin telt mee voor de breedte en hoogte. Dus als je width en height op 100px zet en de padding op 5px, dan is de totale hoogte 100px PLUS (2 x 5px) = 110px

<br>

[link naar het voorbeeld CTRL+CLICK](https://htmlpreview.github.io/?https://github.com/TG-WD6/wd-6-repo-Verwoost/blob/main/01_Fundamentals/04_css/opdrachten/hfdstkTWEEopdrachtZEVEN.html)

* ### Q8 Welke CSS property kun je gebruiken om ervoor te zorgen dat de waarde van width en height de totale breedte en hoogte is van het blok van de voorgaande opdracht?

box-sizing: border-box;

<br>
<br>

## H3 Display and Positioning

* ### Q1 De belangrijkste waardes van “position” zijn static, relative, absolute, fixed & sticky. Leg voor elke uit wat ze doen.

<br>

1. Static: Dit is de standaardwaarde. Het element blijft in de normale flow van het document.
2. Relative: Het element wordt relatief aan de initiele positie gepositioneerd en de ruimte die het element in zou nemen blijft bezet. Andere elementen blijven dus op hun plek.
3. Absolute: Het element wordt uit de normale flow getild en verhoudt zich tot de buitenkant van de container.
Andere elementen schuiven op alsof het element niet bestaat. 
4. Fixed:  Het element wordt uit de normale flow getild en verhoud zich tot de initiele positie in de viewport.
5. Sticky: Het element blijft in de normale flow en verhoud zich tot het dichtstbijzijnde scrolling element. Als je scrollt lijkt dit element vast-(geplakt) te zitten.

<br>

* ### Q2  to Q8

[link naar de antwoorden CTRL+CLICK](https://htmlpreview.github.io/?https://github.com/TG-WD6/wd-6-repo-Verwoost/blob/main/01_Fundamentals/04_css/opdrachten/hfdstkDRIE.html)

## H4 Pseudo Elements

* ### Q1 Er zijn 16 verschillende pseudo-elementen. Beschrijf ze alle 16 kort en maak voor elk een voorbeeld

1. **::after** als je iets wilt toevoegen na een element. Bijvoorbeeld een pijl na een link.
2. **::backdrop** als je een achtergrondkleur wilt toevoegen aan een element als het fullscreen wordt weergegeven.
3. **::before** als je iets wilt toevoegen vóór een element. Bijvoorbeeld een icon voor een listitem.
4. **::cue** als je de cijfers bij het afspelen van een video wilt aanpassen
6. **::first-letter** als je de eerste letter van de inhoud van een element wilt stylen. de IJ werkt niet.
5. **::cue-region** heeft ook iets te maken met de tekst die bij een video komt
7. **::first-line** als je de eerste regel van de inhoud van een element wilt stylen. toepassen bij block elementen en niet bij inline elementen.
8. **::file-selector-button** als je bij &lt;input type="file"> de knop: bestand kiezen wilt aanpassen.
9. **::grammar-error** als de browser een grammaticale fout detecteert.
10. **::marker** de bullets bij een listitem. Het pijltje bij een summary.
11. **::part** heeft iets met schaduw te maken, maar ik begrijp het niet helemaal.
12. **::placeholder** dit kun je beter niet aanpassen ivm leesbaarheid en accessibility.
13. **::selection** de door de gebruiker geselecteerde tekst stylen. Denk aan contrast en accessibility.
14. **::slotted** te ingewikkeld voor nu.
15. **::spelling-error** als de browser een spelfout detecteert.
16. **::target-text** als de browser scroll-to-text fragments ondersteunt dan kun je deze stylen.

[link naar de voorbeelden CTRL+CLICK](https://htmlpreview.github.io/?https://github.com/TG-WD6/wd-6-repo-Verwoost/blob/main/01_Fundamentals/04_css/opdrachten/hfdstkVIERopdrachtEEN.html)

<br>

* ### Q2 Hieronder vind je een voorbeeld van het gebruik van een pseudo-element. Kun jij dit namaken?

![alt_text](../images/image34.png)

<br>

[link naar antwoord CTRL+CLICK](https://htmlpreview.github.io/?https://github.com/TG-WD6/wd-6-repo-Verwoost/blob/main/01_Fundamentals/04_css/opdrachten/hfdstkVIER.html)

<br>

* ### Q3 Hieronder vind je nog eens een voorbeeld van het gebruik van een pseudo-element ::before. Kun jij dit namaken? Gebruik een eigen afbeelding.

![alt_text](../images/image29.png)

<br>

[link naar antwoord CTRL+CLICK](https://htmlpreview.github.io/?https://github.com/TG-WD6/wd-6-repo-Verwoost/blob/main/01_Fundamentals/04_css/opdrachten/hfdstkVIER.html)

<br>

* ### Q4 Hieronder vind je wederom een voorbeeld van het gebruik van een pseudo-element. Kun jij dit namaken?

<br>

![alt_text](../images/image31.png)

<br>

[link naar antwoord CTRL+CLICK](https://htmlpreview.github.io/?https://github.com/TG-WD6/wd-6-repo-Verwoost/blob/main/01_Fundamentals/04_css/opdrachten/hfdstkVIER.html)

<br>

* ### Q5 De laatste opdracht vergt wat creativiteit. Zie het onderstaande voorbeeld en maak het na.



![alt_text](../images/image18.png)

<br>

[link naar antwoord CTRL+CLICK](https://htmlpreview.github.io/?https://github.com/TG-WD6/wd-6-repo-Verwoost/blob/main/01_Fundamentals/04_css/opdrachten/hfdstkVIER.html)

<br>




