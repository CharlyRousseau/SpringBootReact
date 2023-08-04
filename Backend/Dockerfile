# Utilisez une image OpenJDK avec Maven comme base
FROM maven:3-eclipse-temurin-17-alpine AS build

# Copiez le fichier pom.xml pour télécharger les dépendances
COPY pom.xml .

# Téléchargez les dépendances Maven
RUN mvn dependency:go-offline -B

# Copiez tous les fichiers du projet dans le conteneur
COPY src ./src

# Construisez l'application Spring Boot à l'intérieur du conteneur
RUN mvn package -DskipTests

# Utilisez une image OpenJDK comme base pour l'exécution de l'application
FROM openjdk:20-ea-35-jdk-slim-buster

# Définissez le répertoire de travail dans le conteneur
WORKDIR /app

# Copiez le fichier WAR de l'étape de build dans l'image finale
COPY --from=build target/Backend-0.0.1-SNAPSHOT.war .

# Exposez le port sur lequel votre application écoute (par exemple, 8080)
EXPOSE 8080

# Commande pour démarrer l'application lorsque le conteneur est lancé
CMD ["java", "-jar", "Backend-0.0.1-SNAPSHOT.war"]