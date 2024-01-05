# Documentation BU

Matière: Design Pattern
Date: 04/01/2024

## Classe `Book`

La classe **`Book`** représente un modèle pour la gestion d'informations liées à un livre dans une application Java. Cette classe est annotée avec des annotations de la Jakarta Persistence API (JPA) pour la liaison avec une base de données.

**Attributs** :

- **`id` : `int`**
- **`title`** : `string`
- **`author`** :`string`
- **`publisher`** :`string`
- **`publishedDate`** :`Date`
- **`description`** :`string`
- **`industryIdentifiers`** : `string`

**Méthode** **:**

- **`getId(): int`**  Renvoie l'identifiant unique du livre.
- **`setId(int id): void`**  Modifie l'identifiant du livre.
- **`getTitle(): String`**  Renvoie le titre du livre.
- **`setTitle(String title) void`**  Modifie le titre du livre.
- **`getAuthor(): String`**  Renvoie l'auteur du livre.
- **`setAuthor(String author): void`**  Modifie l'auteur du livre.
- **`getPublisher(): String`** Renvoie l'éditeur du livre.
- **`setPublisher(String publisher): void`**  Modifie l'éditeur du livre.
- **`getPublishedDate(): Date`**  Renvoie la date de publication du livre.
- **`setPublishedDate(Date publishedDate): void`**  Modifie la date de publication du livre.
- **`getDescription(): String`**  Renvoie la description du livre.
- **`setDescription(String description): void`**  Modifie la description du livre.
- **`getIndustryIdentifiers(): String`**  Renvoie l’identifiants de l'industrie associés au livre.
- **`setIndustryIdentifiers(String industryIdentifiers): void`**  Modifie l’identifiants de l'industrie associés au livre.

### **Respect des Principes SOLID**

La conception de la classe `**Book**` illustre une approche alignée sur les principes SOLID. Le Principe de Responsabilité Unique (SRP) est observé en se concentrant exclusivement sur la gestion des informations liées à un livre. L'Encapsulation est préservée à travers des méthodes cohérentes, favorisant la cohérence des données. La classe suit le Principe Ouvert/Fermé (OCP) en utilisant des annotations JPA, facilitant l'extensibilité sans modification directe du code. Le Principe d'Interface Segregation (ISP) est respecté en fournissant des méthodes spécifiques pour chaque attribut, évitant de forcer les clients à dépendre de méthodes non nécessaires. La classe Book offre ainsi une base solide pour des extensions futures tout en maintenant la clarté et la cohérence du code existant.

### **Classe `Copy`**

La classe **`Copy`** représente un exemplaire d’un livre dans la bibliothèque. Elle possède les caractéristiques suivantes :

**Attributs :**

- **`id` :** **`int`** - Identifiant unique de la copie.
- **`book` :** **`Book`** - Livre associé à la copie.
- **`availability` :** **`boolean`** - Disponibilité de la copie (**`true`** si disponible, **`false`** sinon).

**Méthodes :**

- **`getId(): int`** - Renvoie l'identifiant unique de la copie.
- **`setId(int id): void`** - Modifie l'identifiant de la copie.
- **`getBook(): Book`** - Renvoie le livre associé à la copie.
- **`setBook(Book book): void`** - Associe le livre donnée en paramètre à la copie(cette copie est un exemplaire du livre donnée en paramètre).
- **`isAvailability(): boolean`** - Renvoie la disponibilité de la copie (**`true`** si disponible, **`false`** sinon).
- **`setAvailability(boolean availability): void`** - Modifie la disponibilité de la copie.

### **Respect des Principes SOLID**

La conception de la classe **`Copy`** suit les principes SOLID de manière appropriée. Elle respecte le Principe de Responsabilité Unique (SRP) en se concentrant sur la modélisation des caractéristiques spécifiques à une copie de livre. L'Encapsulation est maintenue à travers des méthodes cohérentes, offrant des interfaces claires pour accéder et modifier les attributs internes. La classe **`Copy`** suit également le Principe d'Interface Segregation (ISP) en fournissant des méthodes distinctes pour chaque aspect de la copie, évitant d'imposer des méthodes inutiles aux clients. Enfin, le Principe Ouvert/Fermé (OCP) est respecté, car la classe peut être étendue pour de nouvelles fonctionnalités sans altérer le code existant. En globalité, la classe **`Copy`** offre une représentation solide d'un exemplaire de livre, conforme aux principes SOLID.

### **Classe `BookAvailability`**

La classe **`BookAvailability`** représente la vue des différents livres disponibles dans la bibliothèque.
Elle possède les caractéristiques suivantes :

**Attributs :**

- **`id` :** **`int`** - Identifiant unique de la disponibilité du livre.
- **`title` :** **`String`** - Titre du livre.
- **`author` :** **`String`** - Auteur du livre.
- **`publisher` :** **`String`** - Éditeur du livre.
- **`publishedDate` :** **`Date`** - Date de publication du livre.
- **`description` :** **`String`** - Description du livre.
- **`industryIdentifiers` :** **`String`** - Identifiants de l'industrie associés au livre.
- **`nbAvailable` :** **`int`** - Nombre de livres disponibles.
- **`nbTotal` :** **`int`** - Nombre total de livres.

**Méthodes :**

- **`getId(): int`** - Renvoie l'identifiant unique de la disponibilité du livre.
- **`setId(int id): void`** - Modifie l'identifiant de la disponibilité du livre.
- **`getTitle(): String`** - Renvoie le titre du livre.
- **`setTitle(String title): void`** - Modifie le titre du livre.
- **`getAuthor(): String`** - Renvoie l'auteur du livre.
- **`setAuthor(String author): void`** - Modifie l'auteur du livre.
- **`getPublisher(): String`** - Renvoie l'éditeur du livre.
- **`setPublisher(String publisher): void`** - Modifie l'éditeur du livre.
- **`getPublishedDate(): Date`** - Renvoie la date de publication du livre.
- **`setPublishedDate(Date publishedDate): void`** - Modifie la date de publication du livre.
- **`getDescription(): String`** - Renvoie la description du livre.
- **`setDescription(String description): void`** - Modifie la description du livre.
- **`getIndustryIdentifiers(): String`** - Renvoie l’identifiants de l'industrie associés au livre.
- **`setIndustryIdentifiers(String industryIdentifiers): void`** - Modifie l’identifiant de l'industrie associés au livre.
- **`getNbAvailable(): int`** - Renvoie le nombre de livres disponibles.
- **`setNbAvailable(int nbAvailable): void`** - Modifie le nombre de livres disponibles.
- **`getNbTotal(): int`** - Renvoie le nombre total de livres.
- **`setNbTotal(int nbTotal): void`** - Modifie le nombre total de livres.

### **Respect des Principes SOLID**

La classe BookAvailability représente une vue directe de la base de données, étroitement alignée sur la structure sous-jacente des tables, book-view est une jointure de copy et de book permettant d’afficher un livre et le nombre d’exemplaire disponible. En tant que tel, cette classe peut nécessiter des ajustements en cas de modifications dans la base de données, ne suivant pas strictement le Principe Ouvert/Fermé (OCP). Cette divergence est justifiée par le fait que la classe est spécifiquement conçue pour refléter la structure de la base de données, et des ajustements dans le code sont attendus lorsque la base de données évolue. Bien que le Principe OCP favorise l'extensibilité sans modification du code existant, il est important de reconnaître que dans certaines situations, comme celle-ci, la flexibilité peut être priorisée au bénéfice d'une représentation directe et efficace de la base de données. Les choix de conception doivent être évalués en fonction des besoins spécifiques de l'application, en tenant compte des compromis entre la facilité de maintenance et la nécessité d'ajustements en cas de changements dans la base de données.
Dans cette exemple les différents caractéristiques d’un livre et d’un exemplaire sont prédéfinis et le changement de ses caractéristiques n’est pas associé à un évènement ponctuelle mais exceptionnelle et nécessiterais la modification de la base de donnée et donc de la classe.

Quand au principe de Responsabilité Unique (SRP),ici on possède une responsabilité unique qui est de représenter la disponibilité d'un livre avec certaines informations agrégées elle est le point d’accès vers la vue sql et ne dois pas être utilisé pour modifier un livre ou une copie.

### **Classe `Borrow`**

La classe **`Borrow`** représente un emprunt dans la bibliothèque. Elle possède les caractéristiques suivantes :

**Attributs :**

- **`id` :** **`int`** - Identifiant unique de l'emprunt.
- **`copy` :** **`Copy`** - Copie associée à l'emprunt.
- **`borrower` :** **`Borrower`** - Emprunteur associé à l'emprunt.
- **`borrowDate` :** **`Date`** - Date de l'emprunt.
- **`returnDate` :** **`Date`** - Date de retour prévue.

**Méthodes :**

- **`getId(): int`** - Renvoie l'identifiant unique de l'emprunt.
- **`setId(int id): void`** - Modifie l'identifiant de l'emprunt.
- **`getCopy(): Copy`** - Renvoie la copie associée à l'emprunt.
- **`setCopy(Copy copy): void`** - Modifie la copie associée à l'emprunt.
- **`getBorrower(): Borrower`** - Renvoie l'emprunteur associé à l'emprunt.
- **`setBorrower(Borrower borrower): void`** - Modifie l'emprunteur associé à l'emprunt.
- **`getBorrowDate(): Date`** - Renvoie la date de l'emprunt.
- **`setBorrowDate(Date borrowDate): void`** - Modifie la date de l'emprunt.
- **`getReturnDate(): Date`** - Renvoie la date de retour prévue.
- **`setReturnDate(Date returnDate): void`** - Modifie la date de retour prévue.

### **Respect des Principes SOLID**

La conception de la classe **`Borrow`** est conforme aux principes SOLID, suivant le Principe de Responsabilité Unique (SRP) en se concentrant sur la modélisation des informations spécifiques à un emprunt. L'Encapsulation est maintenue à travers des méthodes claires, offrant des interfaces définies pour accéder et modifier les attributs internes. La classe suit le Principe d'Interface Segregation (ISP) en offrant des méthodes distinctes pour chaque aspect de l'emprunt, évitant ainsi d'imposer des méthodes inutiles aux clients. Le Principe Ouvert/Fermé (OCP) est également respecté, car la classe peut être étendue pour de nouvelles fonctionnalités sans altérer le code existant. En somme, la classe **`Borrow`** offre une représentation robuste d'un emprunt, alignée sur les principes SOLID.

### **Classe `Borrower`**

La classe **`Borrower`** représente un emprunteur dans la Bibliothèque. Elle possède les caractéristiques suivantes :

**Attributs :**

- **`id` :** **`int`** - Identifiant unique de l'emprunteur.
- **`firstName` :** **`String`** - Prénom de l'emprunteur.
- **`lastName` :** **`String`** - Nom de l'emprunteur.
- **`email` :** **`String`** - Adresse email de l'emprunteur (unique).
- **`phone` :** **`String`** - Numéro de téléphone de l'emprunteur.

**Méthodes :**

- **`getId(): int`** - Renvoie l'identifiant unique de l'emprunteur.
- **`setId(int id): void`** - Modifie l'identifiant de l'emprunteur.
- **`getFirstName(): String`** - Renvoie le prénom de l'emprunteur.
- **`setFirstName(String firstName): void`** - Modifie le prénom de l'emprunteur.
- **`getLastName(): String`** - Renvoie le nom de l'emprunteur.
- **`setLastName(String lastName): void`** - Modifie le nom de l'emprunteur.
- **`getEmail(): String`** - Renvoie l'adresse email de l'emprunteur.
- **`setEmail(String email): void`** - Modifie l'adresse email de l'emprunteur.
- **`getPhone(): String`** - Renvoie le numéro de téléphone de l'emprunteur.
- **`setPhone(String phone): void`** - Modifie le numéro de téléphone de l'emprunteur.

### **Respect des Principes SOLID**

La conception de la classe **`Borrower`** adhère aux principes SOLID en adoptant une structure cohérente et modulaire. Le Principe de Responsabilité Unique (SRP) est respecté en concentrant la classe sur la modélisation des informations spécifiques à un emprunteur. L'Encapsulation est préservée à travers des méthodes définies, garantissant un accès et une modification sécurisés des attributs internes. La classe suit le Principe d'Interface Segregation (ISP) en offrant des méthodes distinctes pour chaque aspect de l'emprunteur, évitant ainsi d'imposer des méthodes inutiles aux clients. Dans l'ensemble, la classe **`Borrower`** offre une représentation solide d'un emprunteur, conforme aux principes SOLID.

### **Classe `BookAvailabilityRepository`**

La classe **`BookAvailabilityRepository`** agit en tant que composant de gestion des données pour les objets **`BookAvailability`**. Elle est configurée pour interagir avec la base de données à l'aide de Spring JDBC Template. Voici une description détaillée de la classe :

**Attributs :**

- **`jdbcTemplate` :** **`JdbcTemplate`** - Template JDBC de Spring utilisé pour exécuter des requêtes SQL et mapper les résultats.

**Constructeur :**

- **`BookAvailabilityRepository(JdbcTemplate jdbcTemplate)`** - Constructeur permettant d'injecter une instance de **`JdbcTemplate`**.

**Méthodes :**

- **`findAllBookAvailability(): List<BookAvailability>`** - Méthode qui récupère toutes les entrées de la table **`BookAvailability`** dans la base de données. Elle utilise une requête SQL SELECT pour extraire les données et les mapper vers des objets **`BookAvailability`** à l'aide de **`JdbcTemplate`**. Les résultats sont renvoyés sous forme de liste.

### **Respect des Principes SOLID**

La classe **`BookAvailabilityRepository`** suit principalement le Principe de Responsabilité Unique (SRP), en se concentrant sur la persistance des objets **`BookAvailability`** dans la base de données. Cependant, il est important de noter que cette classe utilise une requête SQL directe pour extraire les données de la base de données. Pour une meilleure séparation des responsabilités et une conformité accrue au principe SRP, il serait recommandé d'utiliser une interface Spring Data JPA Repository au lieu de **`JdbcTemplate`**. Cela permettrait de déléguer la gestion des requêtes SQL et du mappage des objets à Spring Data, favorisant ainsi une meilleure modularité et une gestion transparente de la persistance des données.

### I**nterface `BookRepository`**

L'interface **`BookRepository`** est une extension de l'interface **`JpaRepository`** de Spring Data JPA, définissant des méthodes pour la manipulation des données relatives à l'entité **`Book`**. Voici une description détaillée de l'interface :

**Méthodes héritées de `JpaRepository` :**

- **`findAll(): List<Book>`** - Récupère tous les enregistrements de la table associée à l'entité **`Book`**.
- **`findById(Long id): Optional<Book>`** - Récupère un enregistrement de la table par son identifiant.
- **`save(Book book): Book`** - Enregistre un objet **`Book`** dans la base de données.
- **`deleteById(Long id): void`** - Supprime un enregistrement de la table par son identifiant.

Ces méthodes sont fournies par Spring Data JPA et permettent une interaction facile avec la base de données sans nécessiter l'écriture de requêtes SQL manuelles.

### **Respect des Principes SOLID**

L'interface **`BookRepository`** respecte le Principe de Responsabilité Unique (SRP) en se concentrant exclusivement sur la définition des méthodes d'accès aux données pour l'entité **`Book`**. Elle adhère également au Principe d'Interface Segregation (ISP) en fournissant des méthodes spécifiques à la manipulation des objets **`Book`**, évitant ainsi d'imposer des méthodes inutiles aux clients. Cette approche modulaire facilite l'extension et la maintenance du code, tout en permettant une meilleure gestion de la persistance des données dans le respect des principes SOLID.

### **Interface `BorrowRepository`**

L'interface **`BorrowRepository`** est une extension de l'interface **`JpaRepository`** de Spring Data JPA, définissant des méthodes pour la manipulation des données relatives à l'entité **`Borrow`**. Voici une description détaillée de l'interface :

**Méthodes héritées de `JpaRepository` :**

- **`findAll(): List<Borrow>`** - Récupère tous les enregistrements de la table associée à l'entité **`Borrow`**.
- **`findById(Long id): Optional<Borrow>`** - Récupère un enregistrement de la table par son identifiant.
- **`save(Borrow borrow): Borrow`** - Enregistre un objet **`Borrow`** dans la base de données.
- **`deleteById(Long id): void`** - Supprime un enregistrement de la table par son identifiant.

Ces méthodes sont fournies par Spring Data JPA et permettent une interaction facile avec la base de données sans nécessiter l'écriture de requêtes SQL manuelles.

### **Respect des Principes SOLID**

L'interface **`BorrowRepository`** respecte le Principe de Responsabilité Unique (SRP) en se concentrant exclusivement sur la définition des méthodes d'accès aux données pour l'entité **`Borrow`**. Elle adhère également au Principe d'Interface Segregation (ISP) en fournissant des méthodes spécifiques à la manipulation des objets **`Borrow`**, évitant ainsi d'imposer des méthodes inutiles aux clients. Cette approche modulaire facilite l'extension et la maintenance du code, tout en permettant une meilleure gestion de la persistance des données dans le respect des principes SOLID.

### **Interface `BorrowerRepository`**

L'interface **`BorrowerRepository`** est une extension de l'interface **`JpaRepository`** de Spring Data JPA, définissant des méthodes pour la manipulation des données relatives à l'entité **`Borrower`**. Voici une description détaillée de l'interface :

**Méthodes héritées de `JpaRepository` :**

- **`findAll(): List<Borrower>`** - Récupère tous les enregistrements de la table associée à l'entité **`Borrower`**.
- **`findById(Long id): Optional<Borrower>`** - Récupère un enregistrement de la table par son identifiant.
- **`save(Borrower borrower): Borrower`** - Enregistre un objet **`Borrower`** dans la base de données.
- **`deleteById(Long id): void`** - Supprime un enregistrement de la table par son identifiant.

**Méthode spécifique :**

- **`findByEmail(String email): Borrower`** - Récupère un emprunteur par son adresse email.

Ces méthodes sont fournies par Spring Data JPA et permettent une interaction facile avec la base de données sans nécessiter l'écriture de requêtes SQL manuelles.

### **Respect des Principes SOLID**

L'interface **`BorrowerRepository`** respecte le Principe de Responsabilité Unique (SRP) en se concentrant exclusivement sur la définition des méthodes d'accès aux données pour l'entité **`Borrower`**. Elle adhère également au Principe d'Interface Segregation (ISP) en fournissant des méthodes spécifiques à la manipulation des objets **`Borrower`**, évitant ainsi d'imposer des méthodes inutiles aux clients. Cette approche modulaire facilite l'extension et la maintenance du code, tout en permettant une meilleure gestion de la persistance des données dans le respect des principes SOLID.

### **Interface `CopyRepository`**

L'interface **`CopyRepository`** est une extension de l'interface **`JpaRepository`** de Spring Data JPA, définissant des méthodes pour la manipulation des données relatives à l'entité **`Copy`**. Voici une description détaillée de l'interface :

**Méthodes héritées de `JpaRepository` :**

- **`findAll(): List<Copy>`** - Récupère tous les enregistrements de la table associée à l'entité **`Copy`**.
- **`findById(Long id): Optional<Copy>`** - Récupère un enregistrement de la table par son identifiant.
- **`save(Copy copy): Copy`** - Enregistre un objet **`Copy`** dans la base de données.
- **`deleteById(Long id): void`** - Supprime un enregistrement de la table par son identifiant.

**Méthode spécifique :**

- **`findAllByBookIdAndAvailabilityTrue(Long bookId): List<Copy>`** - Récupère toutes les copies disponibles associées à un livre donné.

**Annotations spécifiques à Spring Data JPA :**

- **`@Transactional`** - Indique que chaque méthode de cette interface doit être exécutée dans une transaction.
- **`@Modifying`** - Indique que la méthode modifie l'état de la base de données.
- **`@Query`** - Permet de spécifier une requête SQL personnalisée pour une méthode spécifique.
- **`@Param`** - Utilisé pour lier un paramètre de méthode à un paramètre de requête dans la requête SQL.

Ces méthodes et annotations sont fournies par Spring Data JPA pour permettre une interaction facile avec la base de données sans nécessiter l'écriture manuelle de requêtes SQL.

### **Respect des Principes SOLID**

L'interface **`CopyRepository`** respecte le Principe de Responsabilité Unique (SRP) en se concentrant exclusivement sur la définition des méthodes d'accès aux données pour l'entité **`Copy`**. Elle adhère également au Principe d'Interface Segregation (ISP) en fournissant des méthodes spécifiques à la manipulation des objets **`Copy`**, évitant ainsi d'imposer des méthodes inutiles aux clients. Cette approche modulaire facilite l'extension et la maintenance du code, tout en permettant une meilleure gestion de la persistance des données dans le respect des principes SOLID.

### **Classe `BookAvailabilityRepository`**

La classe **`BookAvailabilityRepository`** est une classe de repository utilisée pour accéder et manipuler les données liées à l'entité **`BookAvailability`**. Voici une description détaillée de la classe :

**Attributs :**

- **`jdbcTemplate` :** **`JdbcTemplate`** - Un objet de la classe **`JdbcTemplate`** de Spring qui facilite l'accès aux bases de données relationnelles.

**Constructeur :**

- **`BookAvailabilityRepository(JdbcTemplate jdbcTemplate)`:** Un constructeur qui initialise l'objet **`jdbcTemplate`** avec l'injection de dépendance de Spring.

**Méthodes :**

- **`findAllBookAvailability(): List<BookAvailability>`** - Une méthode qui exécute une requête SQL pour récupérer toutes les données liées à l'entité **`BookAvailability`**. La requête sélectionne divers champs tels que l'identifiant, le titre, l'auteur, la date de publication, l'éditeur, la description, les identifiants de l'industrie, le nombre disponible et le nombre total d'exemplaires. Les résultats sont mappés sur des objets **`BookAvailability`** et renvoyés sous forme de liste.

**Annotations spécifiques à Spring :**

- **`@Repository`** - Une annotation indiquant à Spring que cette classe est un bean de repository et doit être traitée comme tel pour bénéficier des fonctionnalités de Spring Data.

**Utilisation de `JdbcTemplate` :**

La classe utilise **`JdbcTemplate`** pour exécuter une requête SQL personnalisée et mapper les résultats sur des objets **`BookAvailability`**. Cela permet un accès direct à la base de données sans avoir besoin de définir des méthodes spécifiques comme celles fournies par Spring Data JPA.

### **Respect des Principes SOLID**

La classe **`BookAvailabilityRepository`** respecte principalement le Principe de Responsabilité Unique (SRP), car elle se concentre sur l'accès aux données de l'entité **`BookAvailability`**. Cependant, elle pourrait être étendue pour utiliser Spring Data JPA, ce qui simplifierait le code et respecterait davantage le SRP en déléguant la logique d'accès aux données à Spring Data JPA. Utiliser une solution intégrée comme Spring Data JPA favorise également le respect du Principe d'Interface Segregation (ISP) en évitant la nécessité de définir des méthodes de repository personnalisées, alignant ainsi la conception avec les principes SOLID.

### **Classe `BookAvailabilityController`**

La classe **`BookAvailabilityController`** est un contrôleur REST qui gère les requêtes liées à l'entité **`BookAvailability`**. Voici une description détaillée de la classe :

**Annotations spécifiques à Spring :**

- **`@RestController`** - Une annotation qui indique à Spring que cette classe est un contrôleur REST, ce qui signifie qu'elle traite les requêtes HTTP et renvoie des réponses au format JSON.
- **`@RequestMapping("/view")`** - Une annotation qui définit le préfixe commun pour toutes les méthodes de gestion des requêtes dans ce contrôleur. Ainsi, les requêtes seront gérées sous l'URL **`/view`**.

**Attributs :**

- **`bookAvailabilityRepository` :** **`BookAvailabilityRepository`** - Un objet du repository de **`BookAvailability`** qui sera utilisé pour accéder aux données liées à cette entité.

**Constructeur :**

- **`BookAvailabilityController(BookAvailabilityRepository bookAvailabilityRepository)`:** Un constructeur qui initialise l'objet **`bookAvailabilityRepository`** avec l'injection de dépendance de Spring.

**Méthodes :**

- **`getAllBooks(): List<BookAvailability>`** - Une méthode qui répond aux requêtes GET à l'URL **`/view/books`** en renvoyant la liste de toutes les données **`BookAvailability`** à travers l'appel à la méthode **`findAllBookAvailability()`** du repository.

### **Respect des Principes SOLID**

La classe **`BookAvailabilityController`** respecte principalement le Principe de Responsabilité Unique (SRP) en se concentrant sur la gestion des requêtes HTTP liées à l'entité **`BookAvailability`**. Elle suit également le Principe d'Interface Segregation (ISP), car elle expose uniquement les endpoints nécessaires pour les fonctionnalités spécifiques à l'entité **`BookAvailability`**.

En ce qui concerne le Principe Ouvert/Fermé (OCP), la classe pourrait être étendue pour inclure davantage de fonctionnalités liées à **`BookAvailability`** sans modifier son code existant. Cependant, il est important de noter que l'OCP peut être difficile à appliquer complètement dans le contexte d'un contrôleur REST, où l'extension peut souvent nécessiter des modifications pour s'adapter aux nouvelles fonctionnalités. Malgré cela, la conception actuelle de la classe reste modulaire et conforme aux principes SOLID dans la mesure du possible dans le contexte d'un contrôleur REST.

### **Classe `BookController`**

La classe **`BookController`** est un contrôleur REST qui gère les requêtes liées à l'entité **`Book`**. Voici une description détaillée de la classe :

**Annotations spécifiques à Spring :**

- **`@RestController`** - Une annotation qui indique à Spring que cette classe est un contrôleur REST, ce qui signifie qu'elle traite les requêtes HTTP et renvoie des réponses au format JSON.
- **`@CrossOrigin(maxAge = 3600)`** - Une annotation permettant les requêtes cross-origin (CORS) depuis n'importe quelle origine, avec une durée maximale de 3600 secondes (1 heure).
- **`@RequestMapping("/api/book")`** - Une annotation qui définit le préfixe commun pour toutes les méthodes de gestion des requêtes dans ce contrôleur. Ainsi, les requêtes seront gérées sous l'URL **`/api/book`**.

**Attributs :**

- **`bookService` :** **`BookService`** - Un objet du service **`BookService`** qui sera utilisé pour effectuer des opérations liées à l'entité **`Book`**.

**Constructeur :**

- **`BookController(BookService bookService)`:** Un constructeur qui initialise l'objet **`bookService`** avec l'injection de dépendance de Spring.

**Méthodes :**

- **`getAllBooks(): ResponseEntity<List<Book>>`** - Une méthode qui répond aux requêtes GET à l'URL **`/api/book/all`** en renvoyant la liste de tous les livres à travers l'appel à la méthode **`getAllBooks()`** du service.
- **`createBook(@RequestBody Book book): ResponseEntity<Integer>`** - Une méthode qui répond aux requêtes POST à l'URL **`/api/book/add`** en créant un nouveau livre à partir des données fournies dans le corps de la requête, puis en renvoyant l'ID du livre créé.
- **`deleteBook(@PathVariable Long bookId): ResponseEntity<Void>`** - Une méthode qui répond aux requêtes DELETE à l'URL **`/api/book/delete/{bookId}`** en supprimant le livre avec l'ID spécifié et renvoyant une réponse sans contenu.

### **Respect des Principes SOLID**

La classe **`BookController`** respecte principalement le Principe de Responsabilité Unique (SRP) en se concentrant sur la gestion des requêtes HTTP liées à l'entité **`Book`**. Elle suit également le Principe d'Interface Segregation (ISP), car elle expose uniquement les endpoints nécessaires pour les fonctionnalités spécifiques à l'entité **`Book`**.

En ce qui concerne le Principe Ouvert/Fermé (OCP), la classe pourrait être étendue pour inclure davantage de fonctionnalités liées à **`Book`** sans modifier son code existant. La conception actuelle est modulaire et conforme aux principes SOLID dans le contexte d'un contrôleur REST.

### **Classe `BorrowController`**

La classe **`BorrowController`** est un contrôleur REST qui gère les requêtes liées à l'entité **`Borrow`**. Voici une description détaillée de la classe :

**Annotations spécifiques à Spring :**

- **`@RestController`** - Une annotation qui indique à Spring que cette classe est un contrôleur REST, ce qui signifie qu'elle traite les requêtes HTTP et renvoie des réponses au format JSON.
- **`@CrossOrigin`** - Une annotation permettant les requêtes cross-origin (CORS) depuis n'importe quelle origine.
- **`@RequestMapping("/api/borrow")`** - Une annotation qui définit le préfixe commun pour toutes les méthodes de gestion des requêtes dans ce contrôleur. Ainsi, les requêtes seront gérées sous l'URL **`/api/borrow`**.

**Attributs :**

- **`borrowService` :** **`BorrowService`** - Un objet du service **`BorrowService`** qui sera utilisé pour effectuer des opérations liées à l'entité **`Borrow`**.
- **`copyService` :** **`CopyService`** - Un objet du service **`CopyService`** qui sera utilisé pour effectuer des opérations liées à l'entité **`Copy`**.
- **`borrowerService` :** **`BorrowerService`** - Un objet du service **`BorrowerService`** qui sera utilisé pour effectuer des opérations liées à l'entité **`Borrower`**.

**Constructeur :**

- **`BorrowController(BorrowService borrowService, CopyService copyService, BorrowerService borrowerService)`:** Un constructeur qui initialise les objets **`borrowService`**, **`copyService`**, et **`borrowerService`** avec l'injection de dépendance de Spring.

**Méthodes :**

- **`getAllBorrows(): ResponseEntity<List<Borrow>>`** - Une méthode qui répond aux requêtes GET à l'URL **`/api/borrow/all`** en renvoyant la liste de tous les emprunts à travers l'appel à la méthode **`getAllBorrows()`** du service.
- **`createBook(@RequestBody Map<String, Object> requestMap): ResponseEntity<Integer>`** - Une méthode qui répond aux requêtes POST à l'URL **`/api/borrow/add`** en créant un nouvel emprunt à partir des données fournies dans le corps de la requête. Elle gère la logique pour vérifier la disponibilité de la copie et l'existence de l'emprunteur avant de créer l'emprunt.

### **Respect des Principes SOLID**

La classe **`BorrowController`** respecte également le Principe de Responsabilité Unique (SRP) en se concentrant sur la gestion des requêtes HTTP liées à l'entité **`Borrow`**. Elle suit le Principe d'Interface Segregation (ISP) en exposant uniquement les endpoints nécessaires pour les fonctionnalités spécifiques à l'entité **`Borrow`**. En ce qui concerne le Principe Ouvert/Fermé (OCP), la classe pourrait être étendue pour inclure davantage de fonctionnalités liées à **`Borrow`** sans modifier son code existant. La conception actuelle est modulaire et conforme aux principes SOLID dans le contexte d'un contrôleur REST.

### **Classe `BorrowerController`**

La classe **`BorrowerController`** est un contrôleur REST qui gère les requêtes liées à l'entité **`Borrower`**. Voici une description détaillée de la classe :

**Annotations spécifiques à Spring :**

- **`@RestController`** - Une annotation qui indique à Spring que cette classe est un contrôleur REST, ce qui signifie qu'elle traite les requêtes HTTP et renvoie des réponses au format JSON.
- **`@RequestMapping("/api/borrower")`** - Une annotation qui définit le préfixe commun pour toutes les méthodes de gestion des requêtes dans ce contrôleur. Ainsi, les requêtes seront gérées sous l'URL **`/api/borrower`**.

**Attributs :**

- **`borrowerService` :** **`BorrowerService`** - Un objet du service **`BorrowerService`** qui sera utilisé pour effectuer des opérations liées à l'entité **`Borrower`**.

**Constructeur :**

- **`BorrowerController(BorrowerService borrowerService)`:** Un constructeur qui initialise l'objet **`borrowerService`** avec l'injection de dépendance de Spring.

**Méthodes :**

- **`getAllBorrowers(): ResponseEntity<List<Borrower>>`** - Une méthode qui répond aux requêtes GET à l'URL **`/api/borrower/all`** en renvoyant la liste de tous les emprunteurs à travers l'appel à la méthode **`getAllBorrowers()`** du service.

### **Respect des Principes SOLID**

La classe **`BorrowerController`** respecte les principes SOLID en se concentrant sur la gestion des requêtes HTTP liées à l'entité **`Borrower`**. Elle suit le Principe de Responsabilité Unique (SRP) en ne traitant que les fonctionnalités spécifiques à **`Borrower`** et en déléguant la logique métier au service approprié. En outre, elle suit le Principe d'Interface Segregation (ISP) en exposant uniquement les endpoints nécessaires pour les fonctionnalités spécifiques à **`Borrower`**. La conception actuelle est modulaire et conforme aux principes SOLID dans le contexte d'un contrôleur REST.

### **Classe `CopyController`**

La classe **`CopyController`** est un contrôleur REST qui gère les requêtes liées à l'entité **`Copy`**. Voici une description détaillée de la classe :

**Annotations spécifiques à Spring :**

- **`@RestController`** - Une annotation qui indique à Spring que cette classe est un contrôleur REST, ce qui signifie qu'elle traite les requêtes HTTP et renvoie des réponses au format JSON.
- **`@CrossOrigin(maxAge = 3600)`** - Une annotation permettant le cross-origin resource sharing (CORS), autorisant les requêtes depuis des domaines différents.
- **`@RequestMapping("/api/copy")`** - Une annotation qui définit le préfixe commun pour toutes les méthodes de gestion des requêtes dans ce contrôleur. Ainsi, les requêtes seront gérées sous l'URL **`/api/copy`**.

**Attributs :**

- **`copyService` :** **`CopyService`** - Un objet du service **`CopyService`** qui sera utilisé pour effectuer des opérations liées à l'entité **`Copy`**.
- **`bookService` :** **`BookService`** - Un objet du service **`BookService`** qui sera utilisé pour effectuer des opérations liées à l'entité **`Book`**.

**Constructeur :**

- **`CopyController(CopyService copyService, BookService bookService)`:** Un constructeur qui initialise les objets **`copyService`** et **`bookService`** avec l'injection de dépendance de Spring.

**Méthodes :**

- **`getAllCopys(): ResponseEntity<List<Copy>>`** - Une méthode qui répond aux requêtes GET à l'URL **`/api/copy/all`** en renvoyant la liste de toutes les copies à travers l'appel à la méthode **`getAllCopys()`** du service.
- **`createCopy(Long bookId): ResponseEntity<Void>`** - Une méthode qui répond aux requêtes POST à l'URL **`/api/copy/add`**. Elle crée une nouvelle copie associée au livre spécifié par l'ID **`bookId`** à travers l'appel à la méthode **`addCopy()`** du service.

### **Respect des Principes SOLID**

La classe **`CopyController`** respecte les principes SOLID en se concentrant sur la gestion des requêtes HTTP liées à l'entité **`Copy`**. Elle suit le Principe de Responsabilité Unique (SRP) en ne traitant que les fonctionnalités spécifiques à **`Copy`** et en déléguant la logique métier aux services appropriés (**`CopyService`** et **`BookService`**). En outre, elle suit le Principe d'Interface Segregation (ISP) en exposant uniquement les endpoints nécessaires pour les fonctionnalités spécifiques à **`Copy`**. La conception actuelle est modulaire et conforme aux principes SOLID dans le contexte d'un contrôleur REST.

### **Classe `BookService`**

La classe **`BookService`** est un service responsable de la logique métier associée à l'entité **`Book`**. Voici une description détaillée de la classe :

**Annotations spécifiques à Spring :**

- **`@Service`** - Une annotation qui indique à Spring que cette classe est un service, responsable de la logique métier, et doit être gérée par le conteneur Spring.

**Attributs :**

- **`bookRepository` :** **`BookRepository`** - Un objet du repository **`BookRepository`** qui sera utilisé pour effectuer des opérations de persistance liées à l'entité **`Book`**.

**Constructeur :**

- **`BookService(BookRepository bookRepository):`** - Un constructeur qui initialise l'objet **`bookRepository`** avec l'injection de dépendance de Spring.

**Méthodes :**

- **`getAllBooks(): List<Book>`** - Une méthode qui retourne la liste de tous les livres à travers l'appel à la méthode **`findAll()`** du repository.
- **`createBook(Book book): Book`** - Une méthode qui crée un nouveau livre à travers l'appel à la méthode **`save()`** du repository.
- **`getBookById(Long id): Book`** - Une méthode qui récupère un livre par son identifiant à travers l'appel à la méthode **`findById()`** du repository.
- **`deleteBook(Long id): void`** - Une méthode qui supprime un livre par son identifiant à travers l'appel à la méthode **`deleteById()`** du repository.

### **Respect des Principes SOLID**

La classe **`BookService`** suit les principes SOLID en se concentrant sur la logique métier liée à l'entité **`Book`**. Elle respecte le Principe de Responsabilité Unique (SRP) en ne traitant que des fonctionnalités spécifiques à **`Book`**. La conception actuelle est modulaire, avec une séparation claire entre la logique métier et l'accès aux données grâce à l'utilisation de repositories. Elle s'intègre bien dans une architecture orientée services, favorisant la réutilisation du code et la maintenabilité.

### **Classe `BorrowerService`**

La classe **`BorrowerService`** est un service responsable de la logique métier associée à l'entité **`Borrower`**. Voici une description détaillée de la classe :

**Annotations spécifiques à Spring :**

- **`@Service`** - Une annotation qui indique à Spring que cette classe est un service, responsable de la logique métier, et doit être gérée par le conteneur Spring.

**Attributs :**

- **`borrowerRepository` :** **`BorrowerRepository`** - Un objet du repository **`BorrowerRepository`** qui sera utilisé pour effectuer des opérations de persistance liées à l'entité **`Borrower`**.

**Constructeur :**

- **`BorrowerService(BorrowerRepository borrowerRepository):`** - Un constructeur qui initialise l'objet **`borrowerRepository`** avec l'injection de dépendance de Spring.

**Méthodes :**

- **`getAllBorrowers(): List<Borrower>`** - Une méthode qui retourne la liste de tous les emprunteurs à travers l'appel à la méthode **`findAll()`** du repository.
- **`getBorrowerByEmail(String email): Borrower`** - Une méthode qui récupère un emprunteur par son adresse e-mail à travers l'appel à la méthode **`findByEmail()`** du repository.

### **Respect des Principes SOLID**

La classe **`BorrowerService`** suit les principes SOLID en se concentrant sur la logique métier liée à l'entité **`Borrower`**. Elle respecte le Principe de Responsabilité Unique (SRP) en ne traitant que des fonctionnalités spécifiques à **`Borrower`**. La conception actuelle est modulaire, avec une séparation claire entre la logique métier et l'accès aux données grâce à l'utilisation de repositories. Elle s'intègre bien dans une architecture orientée services, favorisant la réutilisation du code et la maintenabilité.

### **Classe `BorrowService`**

La classe **`BorrowService`** est un service responsable de la logique métier associée à l'entité **`Borrow`**. Voici une description détaillée de la classe :

**Annotations spécifiques à Spring :**

- **`@Service`** - Une annotation qui indique à Spring que cette classe est un service, responsable de la logique métier, et doit être gérée par le conteneur Spring.

**Attributs :**

- **`borrowRepository` :** **`BorrowRepository`** - Un objet du repository **`BorrowRepository`** qui sera utilisé pour effectuer des opérations de persistance liées à l'entité **`Borrow`**.

**Constructeur :**

- **`BorrowService(BorrowRepository borrowRepository):`** - Un constructeur qui initialise l'objet **`borrowRepository`** avec l'injection de dépendance de Spring.

**Méthodes :**

- **`getAllBorrows(): List<Borrow>`** - Une méthode qui retourne la liste de tous les emprunts à travers l'appel à la méthode **`findAll()`** du repository.
- **`createBorrow(Borrow borrow): Borrow`** - Une méthode qui crée un nouvel emprunt en utilisant la méthode **`save()`** du repository.

### **Respect des Principes SOLID**

La classe **`BorrowService`** suit les principes SOLID en se concentrant sur la logique métier liée à l'entité **`Borrow`**. Elle respecte le Principe de Responsabilité Unique (SRP) en ne traitant que des fonctionnalités spécifiques à **`Borrow`**. La conception actuelle est modulaire, avec une séparation claire entre la logique métier et l'accès aux données grâce à l'utilisation de repositories. Elle s'intègre bien dans une architecture orientée services, favorisant la réutilisation du code et la maintenabilité.

### **Classe `CopyService`**

La classe **`CopyService`** est un service dédié à la gestion des exemplaires (**`Copy`**). Voici une description détaillée de la classe :

**Annotations spécifiques à Spring :**

- **`@Service`** - Une annotation indiquant à Spring que cette classe est un service à gérer.

**Attributs :**

- **`copyRepository` :** **`CopyRepository`** - Un objet du repository **`CopyRepository`** qui sera utilisé pour effectuer des opérations de persistance liées à l'entité **`Copy`**.

**Constructeur :**

- **`CopyService(CopyRepository copyRepository):`** - Un constructeur qui initialise l'objet **`copyRepository`** via l'injection de dépendance de Spring.

**Méthodes :**

- **`getAllCopys(): List<Copy>`** - Une méthode qui retourne la liste de tous les exemplaires en utilisant la méthode **`findAll()`** du repository.
- **`addCopy(Copy copy): Copy`** - Une méthode qui ajoute un nouvel exemplaire en utilisant la méthode **`save()`** du repository.
- **`getAvailableCopyByBookId(Long bookId): Copy`** - Une méthode qui retourne le premier exemplaire disponible associé à un livre spécifié. Si aucun exemplaire n'est disponible, elle renvoie **`null`**.
- **`updateCopy(Copy copy): void`** - Une méthode qui met à jour un exemplaire en utilisant la méthode **`save()`** du repository.

### **Respect des Principes SOLID**

La classe **`CopyService`** respecte les principes SOLID en se concentrant uniquement sur les fonctionnalités liées aux exemplaires (**`Copy`**). Elle suit le Principe de Responsabilité Unique (SRP) en ne traitant que des opérations spécifiques à **`Copy`**, et elle est modulaire, favorisant la réutilisation du code. La séparation claire entre la logique métier et l'accès aux données est maintenue, suivant une approche de conception orientée services.

# P**rincipe d'Inversion de Contrôle (IoC) dans l'Application**

L'application utilise activement le principe d'inversion de contrôle (IoC), un concept fondamental soutenu par le framework Spring. Ce principe permet de déléguer la responsabilité de la gestion du cycle de vie des objets et de l'injection des dépendances à un conteneur IoC, en l'occurrence, Spring dans notre cas.

### 1. Injection de Dépendances :

Dans nos services tels que **`BookService`**, **`BorrowerService`**, **`BorrowService`**, et **`CopyService`**, nous utilisons l'annotation **`@Autowired`** pour injecter les dépendances, telles que les repositories, dans nos services. Cette approche permet à Spring de gérer dynamiquement l'instanciation des dépendances nécessaires.

### 2. Contrôle du Cycle de Vie des Objets :

Les classes, y compris les contrôleurs tels que **`BookController`**, **`BorrowController`**, **`CopyController`**, et **`BorrowerController`**, sont des composants gérés par Spring. Le cycle de vie de ces objets est entièrement géré par le conteneur IoC de Spring, assurant une gestion cohérente et efficace des instances.

### 3. Configuration XML ou Annotations :

L'utilisation d'annotations telles que **`@Service`**, **`@RestController`**, **`@Autowired`**, etc., démontre notre choix d'utiliser la configuration basée sur les annotations, une fonctionnalité IoC de Spring. Ceci permet de déléguer la configuration des objets et la gestion des dépendances à Spring.

### 4. Injection de Dépendances via le Constructeur :

L'injection de dépendances via le constructeur, observable dans nos services, est une pratique favorisée par Spring. Cette approche améliore la clarté du code, la testabilité des composants, et suit le principe IoC en transférant la responsabilité de l'instanciation des dépendances à Spring.

En combinant ces pratiques, notre application bénéficie des avantages de l'IoC, tels que la réduction de la complexité, la facilité de testabilité, et la meilleure gestion des dépendances, contribuant ainsi à un développement plus robuste et maintenable.

# **Absence d'Héritage et Principe de Substitution de Liskov**

L'application a été délibérément conçue sans recourir à l'héritage direct entre les classes. Cette décision découle d'une approche de conception favorisant la composition et la délégation plutôt que l'héritage. Dans le modèle, les classes telles que **`Book`**, **`Borrower`**, **`Borrow`**, et **`Copy`** sont conçues pour être des entités autonomes, évitant ainsi les hiérarchies complexes induites par l'héritage.

L'absence d'héritage direct a des implications directes sur le principe de substitution de Liskov (LSP). Le LSP stipule qu'une instance d'une classe doit pouvoir être substituée par une instance de l'une de ses sous-classes sans altérer la cohérence du programme. Cependant, dans le modèle, les classes n'ont pas de relations hiérarchiques directes, et par conséquent, le LSP n'est pas applicable.

Au lieu d'utiliser l'héritage, la préférence a été donnée à la composition et à l'utilisation de relations entre les classes pour garantir une flexibilité accrue, un découplage plus efficace des composants, et une meilleure évolutivité. Cette approche contribue à réduire la complexité du code et à favoriser une conception modulaire, facilitant ainsi la maintenance et l'extension de l'application.