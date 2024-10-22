# Opdracht: Debuggen en Testen

## Doel

In deze opdracht ga je een bestaande React-applicatie debuggen en testen. De applicatie heeft enkele fouten die je moet vinden en oplossen. Vervolgens gebruik je de onderstaande acceptatiecriteria om te controleren of de applicatie correct werkt.

## Stappen

### **Clone de bestaande repository om te testen:**

De applicatie die je gaat debuggen en testen is te vinden op: https://github.com/jschaik/react-debuggen.

Doorloop de onderstaande stappen om de opdracht naar jouw omgeveving te clonen.

1. **Kloon de originele repository naar je lokale machine** (de repository die je wilde overnemen):

Open je react-folder in VSCode en voer de onderstaande commando uit in de terminal:

```powershell
git clone https://github.com/jschaik/react-debuggen.git
```

1. **Ga naar de directory van de gekloonde repository**:

```powershell
cd react-debuggen
```

1. **Verwijder de `.git` directory volledig**:
Dit zorgt ervoor dat je de versiegeschiedenis van de originele repository loslaat en de inhoud als een nieuwe set bestanden behandelt.

```powershell
rm -rf .git
```

4.**Voeg alle bestanden toe aan de nieuwe repository**:

```powershell
git add .
```

1. **Commit je veranderingen**:

```powershell
git commit -m "Opzet opdracht debuggen en testen"
```

1. **Push naar jouw GitHub repository**:

```powershell
git push -u origin main
```

Nu heb je de opdracht naar jouw eigen repository gepusht en kun je beginnen met de opdracht.

### **Debuggen**

- Voer de applicatie uit in je ontwikkelomgeving.
- Test de basisfunctionaliteit (films toevoegen, verwijderen, dubbele films voorkomen).
- Gebruik de browser developer tools (bijv. Chrome DevTools) om te inspecteren waar de fouten zich bevinden.
- Los de fouten op, zodat de applicatie correct werkt.

### **Testen met acceptatiecriteria**

- Nadat je de bugs hebt opgelost, ga je de applicatie testen aan de hand van de gegeven **acceptatiecriteria**.
- De acceptatiecriteria zijn opgesteld per user story en beschrijven wat er precies moet werken in de applicatie.

# User stories & Acceptatiecriteria

### **User Story 1: Movies toevoegen aan de favorietenlijst**

Als gebruiker wil ik films kunnen toevoegen aan mijn favorietenlijst, zodat ik een lijst van mijn favoriete films kan bijhouden.

### Acceptatiecriteria:

- [ ]  Er is een invoerveld aanwezig waar ik de titel van een film kan typen.
- [ ]  Er is een knop aanwezig om de ingevoerde film toe te voegen aan de lijst.
- [ ]  Wanneer ik op de knop klik, wordt de film aan de lijst toegevoegd.
- [ ]  De ingevoerde film wordt onder de bestaande favorieten getoond.
- [ ]  Als ik een lege titel probeer toe te voegen, krijg ik een foutmelding dat de filmnaam niet leeg mag zijn.
- [ ]  De invoerveld moet na het toevoegen van een film automatisch leeg worden gemaakt.

---

### **User Story 2: Films verwijderen uit de favorietenlijst**

Als gebruiker wil ik films uit mijn favorietenlijst kunnen verwijderen, zodat ik mijn lijst kan beheren en ongewenste films kan verwijderen.

### Acceptatiecriteria:

- [ ]  Elke film in de lijst heeft een verwijderknop naast de filmtitel.
- [ ]  Wanneer ik op de verwijderknop klik, wordt de bijbehorende film uit de lijst verwijderd.
- [ ]  Na het verwijderen moet de film direct uit de lijst verdwijnen.
- [ ]  Er verschijnt geen foutmelding wanneer een film succesvol verwijderd is.

---

### **User Story 3: Duplicate films voorkomen**

Als gebruiker wil ik niet dat dezelfde film meerdere keren kan worden toegevoegd aan de favorietenlijst, zodat mijn lijst geen dubbele films bevat.

### Acceptatiecriteria:

- [ ]  Wanneer ik probeer een film toe te voegen die al in de lijst staat, krijg ik een foutmelding dat de film al bestaat.
- [ ]  De film wordt niet toegevoegd als deze al in de lijst voorkomt.
- [ ]  De lijst bevat nooit duplicaten van dezelfde filmtitel.

---

### **User Story 4: Lege lijstmelding tonen**

Als gebruiker wil ik een melding zien wanneer mijn favorietenlijst leeg is, zodat ik weet dat ik films moet toevoegen.

### Acceptatiecriteria:

- [ ]  Wanneer er geen films in de lijst staan, verschijnt er een bericht met de tekst "No favorite movies yet. Add some!".
- [ ]  Zodra de eerste film wordt toegevoegd, verdwijnt dit bericht.
- [ ]  Als alle films verwijderd zijn, verschijnt het bericht opnieuw.

---

## Oplevering

Zijn alle bugs (fouten) opgelost (zie console) en heb je de volledige acceptatiecriteria-lijst doorlopen.

Commit & Push je werk en lever de opdracht in.