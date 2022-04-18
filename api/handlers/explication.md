# Le handler (ou contrôleur de route)

Le rôle du handler est de
- Gérer les droits d'accès (pas nécéssaire dans notre cas)
- Vérifier les données envoyées par le client
- Répondre au client

## 🎓 COURS DEBUTANT - Réponse HTTP à une requête client

La réponse au client est composée de deux parties
- Le statut : Code HTTP normalisé (voir https://en.wikipedia.org/wiki/List_of_HTTP_status_codes)
- Les données : format libre, peut être vide

Exemple de statuts courants
- 200 - OK : code par défaut quand la requête a été traitée avec succès
- 403 - Forbidden : L'accès est interdit au client
- 400 - Bad data : Les données envoyées par le client sont mal formatées
- 500 - Internal Server Error : Il y a un bug côté serveur

Exemples de formats de données courants
- JSON :
```json
{ propriete: valeur }
```
- XML :
```html
<root><tag propriete="valeur" /></root>
```
- String : "une chaine de caracteres"

## 🎓 COURS AVANCE - Appeler une méthode avec ou sans contexte

### Cas 1
```javascript
  class Gateau {
    constructor(deco) {
      this.deco = deco
    }
    test() {
      console.log(this.deco)
    }
  }
```

NE FONCTIONNE PAS :

```javascript
  const g = new Gateau("test")
  const method = g.test  // method est simplement une référence à test, sans son contexte
  method() // 'this' undefined
```

FONCTIONNE :

```javascript
  const t = new Gateau("test")
  t.test() // log 'test'
```

Car la référence à la méthode test n'a pas de contexte associé

### Cas 2
```javascript
  class Gateau {
    constructor(deco) {
      this.deco = deco
    }
    test = () => {
      console.log(this.deco)
    }
  }
```

FONCTIONNE :

```javascript
  const t = new Gateau("test")
  const method = t.test
  method() // log 'test'
```

Car les méthodes anonymes (avec une flèche () => {}) gardent le contexte de l'endroit où elle a été déclarée
```
