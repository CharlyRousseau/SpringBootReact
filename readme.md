# Cahier des charges Projet CDA LiveCampus
Date: 31/07/2023

## Présentation

Pour ce projet j'ai décidé de réaliser une plateforme de gestion d'une bibibliothèque. 
L'utilisateur de la plateforme est le/la bibliothécaire.
La plateforme permet d'accéder à la liste des livres, leurs disponibilités et de savoir par qui ils ont été empruntés.

## Objectifs 

- Réaliser une API backend.
- Réaliser une Interface minimaliste.

## User Story

En tant qu'utilisateur je peux:
- Ajouter/Supprimer un livre
- Acceder au catalogue de la bibliothèque
- Vérifier la disponibilité d'un livre
- Créer un emprunt
- Rechercher un livre

## Structure de contenu

Notre Application sera constituer de quatres tables:

- Borrower qui représente un emprunteur

```json
 {
  "id": 1,
  "firstName": "John",
  "lastName": "Doe",
  "email": "test@oui.fr",
  "phone": "1234567890"
}

```

- Book qui représente un livre:
```json
 {
  "id": 1,
  "title": "Titre 1",
  "author": "Auteur 1",
  "publisher": "Editeur 1",
  "publishedDate": "2023-07-31",
  "description": "Description du livre 1",
  "industryIdentifiers": "ISBN-123456"
}

```

- Copy qui représente un exemplaire du livre sachant que pour un livre nous pouvons avoir plusieurs exemplaires
```json
 {
  "id": 3,
  "book": {
    "id": 3,
    "title": "Titre 3",
    "author": "Auteur 3",
    "publisher": "Editeur 3",
    "publishedDate": "2023-07-31",
    "description": "Description du livre 3",
    "industryIdentifiers": "ISBN-123456"
  },
  "availability": true
}
```

- Borrow qui représente un emprunt de livre

```json
{
  "id": 1,
  "copy": {
    "id": 1,
    "book": {
      "id": 1,
      "title": "Titre 1",
      "author": "Auteur 1",
      "publisher": "Editeur 1",
      "publishedDate": "2023-07-31",
      "description": "Description du livre 1",
      "industryIdentifiers": "ISBN-123456"
    },
    "availability": false
  },
  "borrower": {
    "id": 1,
    "firstName": "John",
    "lastName": "Doe",
    "email": "test@oui.fr",
    "phone": "1234567890"
  },
  "borrowDate": "2023-07-31",
  "returnDate": "2023-08-15"
}
```

Il ya aussi Une Vue Sql permettant d'afficher les livres avec leurs nombres d'exemplaire disponible.
Cette vue permet de récupérer tout les informations nécessaire au dashboard avec une charge minimal
elle est actualiser a chaque fois que la tabel copy est modifié.
```json
 {
  "id": 4,
  "title": "Titre 4",
  "author": "Auteur 4",
  "publisher": "Editeur 4",
  "publishedDate": "2023-07-31",
  "description": "Description du livre 4",
  "industryIdentifiers": "ISBN-123456",
  "nbAvailable": 0,
  "nbTotal": 1
}
```

## Technos utilisées

- Le backend est développé en SpringBoot couplé à une base de donnée PostgresSQL 
et la solution de migration liquibase.
- Le Frontend est sous forme de dashboard en ReactJS.
- Le Projet est entièrement Dockerisé ce qui veux dire que lors qu lancement du projet
3 containers sont crées:
  - Base de donnée avec toute les tables et un dataSet 
  - Front End 
  - Backend 

## Comment lancer le Projet

Avec docker:

Dans le répertoire racine du projet:
``` 
docker compose build 
``` 
``` 
docker compose up 
``` 
Une fois les 3 services fonctionnel on peut désormais 
accéder au dashboard ou effectuer des requête à l'API via Postman par exemple.

Si le d'ashboard n'affiche rien li faut aller dans le dossier front puis dans le docker file modifier 'backend' par 'localhost'



