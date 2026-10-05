# VéToTo
Un VTT, mais pas un vélo tout terrain (malgré le nom).

## Choix du sujet
Le service choisi est un VTT (Virtual TableTop) alternatif orienté sur la gestion exclusive des fiches de personnages (il évacuera donc la gestion de chats vocaux, cartes de batailles, et autres fonctionnalités lourdes des grands acteurs actuels tels que Roll20 ou Foundry). Un VTT est un logiciel dit "table de jeu virtuelle" pour jeux de rôle, implémentant de nombreuses fonctionnalités de qualité de vie pour les joueurs (PJ) et maîtres du jeu (MJ).

Nous avons choisi ce sujet car l'équipe a un fort intérêt pour le jeu de rôle et est confrontée aux problématiques de jeu à distance. Par ailleurs l'un des membres de l'équipe a un réel besoin pour un logiciel léger capable de gérer des fiches de personnages pour le système Fate, or en dehors des grands VTT, aucun outil satisfaisant n'est disponible.

## Utilité sociale

Les bénéfices d'un tel service se reposent à la fois sur ceux des jeux de rôle et sur les choix techniques spécifiques à la présente proposition lorsqu'on la compare à des offres alternatives (ex : Roll20, Foundry VTT ou Owlbear Rodeo).

Les jeux de rôle sont bien connus dans le monde de la psychiatrie comme pouvant avoir des effets positifs sur la santé mentale (apprentissage de la prise de contrôle sur sa vie, création d'espaces d'échange et de sociabilisation, etc). Ces effets ont été démontrés dans un contexte clinique et les études préliminaires actuelles semblent prometteuses dans le cas général ([source: Baker et. al 2023](https://doi.org/10.1007/s11469-022-00832-y)). Il s'agit également d'un fort vecteur de lien social, les joueurs et joueuses vivant ensemble des aventures fictives mais les marquant malgré tout réellement.

## Effets de la numérisation

L'application en elle-même vient avec ses propres bienfaits. Premièrement, un service de type VTT renforce l'accès au jeu de rôle et donc ses effets positifs, notamment en maintenant des liens sociaux à distance qui auraient pu disparaître. Par ailleurs, une telle application rend plus accessible les règles pour les personnes rebutées par des règles parfois complexes ou atteintes de dyscalculie.

De plus les solutions techniques qui sont proposées renforcent la compatibilité du logiciel avec les valeurs d'une démocratie technique, notamment par la possibilité d'auto-hébergement. Par ailleurs, le choix de faire s'exécuter la majorité du logiciel sur les terminaux utilisateurs réduit largement les ressources serveur consommées.

On peut également supposer que dans les cas où une partie à distance sur cet outil se substituerait à un rassemblement chez l'un des joueurs, les émissions de gaz à effets de serre seraient réduites : en effet, l'usage de véhicules polluant serait alors inutile et son absence contrebalancerait largement celui des appareils informatiques.

## Scénarios d'usage et impacts

## Scénario : "Consultation par un joueur de sa fiche de personnage"
  1. Le joueur accède à une campagne via un lien fourni par le maitre du jeu.
  2. Il choisit une de ses fiches de personnage et la consulte.
  3. Il retourne consulter les informations générales de la campagne.
     
[Résultats du scénario pour Character Sheet Online](./benchmark/scenarioJoueur%20Character%20Sheet%20Online.csv)

[Résultats du scénario pour Roll20](./benchmark/scenarioJoueur%20Roll20.csv)

## Scénario : "Consultation par un maitre du jeu des fiche de personnages de ses joueurs"
  1. Le maitre du jeu accède à une page d'accueil de séléction de campagne grâce à un favori (donc sans le moteur de recherche).
  2. Il sélectionne une campagne sur la page.  
  3. Il choisit une fiche de personnage d'un des joueurs et la consulte.
  4. Il retourne consulter les informations générales de la campagne.
  5. Il choisit une autre fiche de personnage et la consulte.

[Résultats du scénario pour Character Sheet Online](./benchmark/Scenario%20MJ%20Character%20Sheet%20Online.csv)

[Résultats du scénario pour Roll20](./benchmark/Scenario%20MJ%20Roll20.csv)

## Impact de l'exécution des scénarios auprès de différents services concurrents
L'EcoIndex d'un page, qui va de A à G, est calculé par rapport au classement d'un page parmi toutes les autres du monde selon le nombre de requêtes qu'elle lance, le nombre d'éléments qu'elle contient et le poids des téléchargements.

Les impacts des scénarios ont été comparés en utilisant deux outils différents : Roll20 et Character Sheet Online. 

|Service|Score (%)|Classe|Détail des mesures|
|-------|---------|------|------------------|
|Roll20 |24,68    |F     |[Scénario MJ](./benchmark/Scenario%20MJ%20Roll20.csv), [Scénario joueur](./benchmark/scenarioJoueur%20Roll20.csv)|
|Character Sheet Online |42,33    |D|[Scénario MJ](./benchmark/Scenario%20MJ%20Character%20Sheet%20Online.csv), [Scénario joueur](./benchmark/scenarioJoueur%20Roll20.csv)|

