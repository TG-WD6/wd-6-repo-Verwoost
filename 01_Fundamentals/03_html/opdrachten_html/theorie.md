## The implicit ARIA role of html elements.

* ### Header: 
If not a descendant of an article, aside, main, nav or section element, 
or an element with role=article, complementary, main, navigation or region 
then role=banner. Otherwise no corresponding role.

* ### Footer: 
If not a descendant of an article, aside, main, nav or section element,
or an element with role=article, complementary, main, navigation or region
then role=contentinfo. Otherwise no corresponding role.

* ### Section: 
 role=region if the section element has an accessible name. Otherwise, no corresponding role

* ### Aside:
 role=complementary

* ### Input:
 role=textbox

<br>

## HTML Questions


1. Wat is HTML?
2. Hoe ziet de basis-structuur van HTML eruit?
3. Wat is een anchor tag?
4. Noem een aantal nieuwe functionaliteiten van HTML5
5. Wat zijn HTML attributen?
6. Wat is HTML semantics?
7. Waarvoor worden meta tags gebruikt?
8. Wat is een nested element?
9. Wat is het verschil tussen inline- en blok-elementen?
10. Wat is accessibility?

<br>

* ### 1 Wat is HTML?
HTML staat voor Hypertext Markup Language en is een taal waarbij je doormiddel
van tags verschillende elementen met ieder hun eigen kenmerken in een document plaatst.

* ### 2 Hoe ziet de basis-structuur van HTML eruit?
Bovenaan het document geef je met de tag:  &lt;!DOCTYPE html> aan dat het een html-document is.<br>
Dan volgt het 'root-element'  &lt;html>  &lt;/html>. Alle inhoud van de pagina komt tussen deze twee tags.<br>
Vervolgens het  &lt;head>  &lt;/head> element.  Informatie binnen dit element wordt niet weergegeven en 
bevat bijvoorbeeld de titel van de pagina, informatie over de auteur, keywords en de verwijzing naar een css bestand.<br>
Ten slotte het element  &lt;body>  &lt;/body>. Binnen dit element staat alle inhoud die zichtbaar is. Bijvoorbeeld tekst, 
afbeeldingen, video's en audio.

 ``` 
 <!DOCTYPE html> 
 
 <html>
 
   <head>
    <title> MijnTitel  </title>
   </head>

   <body>

   </body>

 </html> 
 ```

 * ###  3 Wat is een anchor tag?
  Text binnen de anchor-tag  &lt;a>  &lt;/a> gedraagt zich als een link.
  Je kunt hier met een href attribuut (hypertext reference) verwijzen naar een extern document
   of een element binnen het document zelf. Voorbeeld:  &lt;a> href="https://www.framedevogel.nl"  &lt;/a>

* ### 4 Noem een aantal nieuwe functionaliteiten in HTML5
De &lt;video> en &lt;audio> tags: met deze tags plaats je video of audio waar je voorheen JavaScript nodig had.
De tags die je document structuur geven als &lt;nav> , &lt;header>, &lt;footer en &lt;section> zijn eveneens nieuw.
Voor het toepassen van Vector Graphics heb je geen extra programma's meer nodig.

* ### 5 Wat zijn HTML attributen?
Dit zijn speciale woorden die je in de openingstag van HTML-elementen zet om bepaalde kenmerken van dit element te bepalen.  Bijvoorbeeld: het &lt;img> element heeft een src="mijnPath" attribuut en een alt="mijnAlt" attribuut, &lt;a> heeft het href="mijnURL" attribuut, &lt;html> heeft het lang="mijnTaal" attribuut.

* ### 6 Wat is HTML semantics?
Met sementics worden elementen bedoelt die een duidelijke rol hebben. &lt;div> is dat bijvoorbeeld NIET. Wel: 
```
<article>
<aside>
<details>
<figcaption>
<figure>
<footer>
<header>
<main>
<mark>
<nav>
<section>
<summary>
<time>
```