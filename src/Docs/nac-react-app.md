## Interface et interaction 

Détails de l'interface et interaction :

1. Une fois que l'utilisateur accède au site Web, il peut cliquer sur le bouton de la page d'accueil pour accéder à l'espace utilisateur.
2. Cliquer sur le bouton de gauche pour déplier le menu. Le menu contient 4 options : la page d'accueil, mon espace, mode d'emploi, et les documents. Si l’option de « les documents » est dépliée, les documents détaillés peuvent être cliqué.
3. Mon espace est divisé en deux étapes, la première étape est la connexion et l'inscription, et la deuxième étape est mon espace. 

Si l'utilisateur n'a pas de compte, il peut saisir son adresse e-mail et son mot de passe dans la case et cliquer sur « S'inscrire » pour créer un nouveau compte. Si l'utilisateur possède un compte, il peut saisir le mot de passe du compte dans la case et cliquer sur connexion.

4. Une remarque de « Connexion réussie » apparaîtra sur la nouvelle page, et les utilisateurs peuvent se déconnecter de leur compte sur cette page aussi.
5. Cliquer sur le bouton « L’étape prochaine » pour accéder à mon espace
6. Par défaut, l'utilisateur n'a pas de données, donc une fois le nouvel utilisateur enregistré, la page n'affichera pas les données et images.
7. Lorsque les utilisateurs cliquent sur le bouton de « Résumé quotidien », ils peuvent voir le rapport d'activité du NAC tout au long de la journée. (Cette fonctionnalité n'est pas encore terminée.)
8. Lorsque l'utilisateur clique sur « Renouveler », les images et les données ci-dessous peuvent être renouvelées pour obtenir les derniers résultats.
9. Au bas de la page Web, les utilisateurs peuvent définir les paramètres associés. Par exemple, le nom personnalisé de chaque zone. (Cette fonctionnalité n'est pas encore terminée.)

### L’autoadaptation de page

1. Cette application est une application Web, donc elle s'adaptera à divers écrans de taille normale.
2. Il y a trois blocs d’introductions de fonctions sur la page d'accueil. Dans l'interface de APP bureau, ces trois éléments de contenu seront disposés horizontalement, mais sur les pages du téléphone et de la tablette, les trois éléments de contenu seront disposés verticalement.
3. Dans la page du document et la page de « mon espace », dans l'interface de l’APP bureau, la barre latérale occupera 1/3 de l'espace et affichera un contenu fixe ; Mais sur les pages du téléphone et de la tablette, la barre latérale se déplacera vers le bas et occupera la largeur totale de l'écran.
4. Pour la dernière capture d'écran de la caméra et le tableau de nombre du NAC sur la page « Mon espace », dans l'interface de l’APP bureau, ils représentent respectivement 2/3 et 1/3 de l’espace ; dans les pages mobile et tablette, le tableau sera déplacé en bas et occupera toute la largeur de l'écran.

## Brève description du processus de réalisation des fonctions

### L’utilisation du « NAC React APP » （Pour développeur）

 « NAC React APP » utilise l'hébergement en ligne de Netlify, le site Web est : [Toujours avec votre NAC](nac-app.netlify.app). L'utilisateur peut se connecter directement à l'URL ci-dessus, terminer l'inscription, le téléchargement l’APP bureau et ensuite l'utiliser. En tant que développeur, le code source de ce projet est hébergé sur Github. Les développeurs peuvent accéder à [0sheldonhuang0/nac-react-app (github.com)](https://github.com/0sheldonhuang0/nac-react-app) pour les cloner ou télécharger.

Cette partie se concentre principalement sur les développeurs pour utiliser ces codes. (Avant de l’utiliser, le developpeur doit avoir de base de JavaScript)

1. Installer « node.js » : Télécharger le fichier « exe » sur le site officiel et installer le « exe » directement. De plus, il est recommandé d'installer « VS Code » et d'installer deux plugins : Prettier - Code formatter (pour formater le code), Simple React Snippets (pour compléter le code de « réact »).
2. Cloner ou télécharger le code sur [0sheldonhuang0/nac-react-app (github.com)](https://github.com/0sheldonhuang0/nac-react-app) , l’ouvrir sur « cmd » ou avec « VS Code ».
3. Entrer « npm install » sur la ligne de commande pour installer les bibliothèques utilisées dans ce projet. Les bibliothèques utilisées sont écrites en détail dans la partie suivante.
4. Avant d'utiliser et de modifier l'application, veuillez-vous connecter à Firebase pour créer une nouvelle application. Il est recommandé de modifier le fichier de configuration Firebase dans « src\Components\firebase.js » vers votre propre application Firebase pour le débogage et le développement après.
5. Une fois l'installation terminée, entrer « npm start » dans la ligne de commande pour afficher un aperçu de l'interface de l'application Web NAC sur « localhost: 3000 ». Ctrl + C peut arrêter l'aperçu actuel.
6. Entrer « npm run-script build » dans la ligne de commande pour générer des fichiers pour l'environnement de production dans le dossier « build ».

### Structure de NAC React APP

Vous trouverez ci-dessous une description détaillée de chaque fichier, qui peut être visualisée conformément au diagramme de structure ci-dessus :

- src\Components\BasicNac\Authentication.js
- src\Components\BasicNac\AuthInput.js
- src\Components\BasicNac\AuthSuccess.js
- src\Components\BasicNac\Espace.js
- src\Components\BasicNac\Stepbar.js
- src\Components\BasicNac\Steps.js
- src\Components\BasicNac\Welcome.js
- src\Components\IndexPage\ProductHero.js
- src\Components\IndexPage\ProductHeroLayout.js
- src\Components\IndexPage\ProductHowItWorks.js
- src\Components\Dashboard.js
- src\Components\Document.js
- src\Components\firebase.js
- src\Components\Helper.js
- src\Components\listitems.js
- src\Components\Markdown.js
- src\Components\Title.js
- src\images\
- src\Docs\
- src\store\reducer.js
- src\App.js
- src\index.js
- src\MainRouter.js

Les bibliothèques utilisées de la troisième partie par l'ensemble de l'application sont les suivantes :

- npm install @material-ui/core ：Bibliothèque d'interface de UI.
- npm install @material-ui/icons ：Bibliothèque d'icône de UI.
- npm install redux：État des composants et transfert de données.
- npm install react-redux：État des composants et transfert de données.
- npm install react-router-dom：Le routage de la page.
- npm install react-markdown：Rendu photoréaliste du fichier « Markdown ».
- npm install firebase ：SDK de Google Firebase.

### Transfert de données de JavaScript et de Firebase

#### Ajouter “Firebase Ajouter” au projet JavaScript

Ajouter le « Firebase SDK » et initialiser Firebase, installer le « Firebase SDK » dans le dossier de l’application :

```python
npm install --save firebase
```

Initialiser Firebase dans l’application. Dans cette application, le fichier d'initialisation de Firebase se trouve dans le fichier « src \ Components \ firebase.js », puis utiliser le fichier « App.js » pour l’appeler une fois.

```python
`src\Components\firebase.js` 
import firebase from "firebase/app";
require('firebase/analytics')
const EnvironmentFirebase = () => {
  var firebaseConfig = {
    apiKey: "",
    authDomain: "fir-rtc-aff50.firebaseapp.com",
    projectId: "fir-rtc-aff50",
    storageBucket: "fir-rtc-aff50.appspot.com",
    messagingSenderId: "",
    appId: "",
    measurementId: "",
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
};
export default EnvironmentFirebase;
```

#### Inscription utilisateur et authentification Auth

Importer les packages Firebase et Auth :

```python
import firebase from "firebase/app";
require("firebase/auth");
```

Créer un composant. Dans cet exemple, ce composant est « AuthInput.js ». Il y a deux fonctions ci-dessous pour l'inscription et la connexion de l'utilisateur. 

Voici un exemple de composant de bouton d'inscription. Ce bouton appelle la fonction « signUpWithEmailPassword » et transmet le nom d'utilisateur et le mot de passe saisis par l'utilisateur à la fonction :

```python
<Button
    variant="contained"
    className={classes.buttonArea}
    onClick={() => {
        var email = document.getElementById("standard-email").value;
        var password = document.getElementById("standard-password")
        .value;
        signUpWithEmailPassword(email, password);
    }}
    >
    CRÉER UN COMPTE
</Button>
```

La fonction « signUpWithEmailPassword » est appelée ci-dessus, dans laquelle, « createUserWithEmailAndPassword » est utilisé pour créer un compte de l'utilisateur. De plus, le fonctionnement « signInWithEmailAndPassword » est similaire. Le processus d'appel est le suivant ou vous pouvez lire des documents officiels. Si une erreur de connexion se produit (le nom d'utilisateur, le mot de passe est incorrect, ou l'utilisateur est déjà enregistré, etc.), Firebase renverra différents messages d'erreur. Par souci de simplicité, l'affichage unifié est "Quelques erreurs rencontrées !".

```python
// Inscription
  // https://firebase.google.com/docs/auth/web/start?authuser=0
  function signUpWithEmailPassword(email, password) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        // Signed in
        console.log(user);
        alert("Inscription réussite！");
        storeSuccessedData(true);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        alert("Quelques erreurs rencontrées !");
      });
  }

  // Connexion
  function signInWithEmailPassword(email, password) {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        // Signed in
        console.log(user);
        alert("Connexion réussite");
        storeSuccessedData(true);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        alert("Quelques erreurs rencontrées !");
      });
  }
```

#### Lire des données et des fichiers

Importer les packages de « Firebase », « auth », « database » et « storage ». 

```python
import firebase from "firebase/app";
require("firebase/auth");
require("firebase/database");
require("firebase/storage");
```

Lire les données de l'utilisateur, puis poursuivre le traitement.

```python
function readUserData(userEmail) {
  var adaRef = firebase
    .database()
    .ref("/cibles/" + userNameGenerate(userEmail))
    .once("value")
    .then( // Do something);
}
```

Lire les fichiers sous le chemin spécifié dans le « Stockage » d’utilisateur. « userNameGenerate (userEmail) » est le chemin personnalisé de l'utilisateur et « .list ({maxResults: 5}) » signifie lire jusqu'à 5 fichiers. Pour les autres opérations, vous pouvez vérifier les documents officiels.

```python
function readUserImg(userEmail) { 
  // Create a storage reference from our storage service 
  var storageRef = firebase 
    .storage() 
    .ref("/" + userNameGenerate(userEmail) + "/") 
    .list({ maxResults: 5 }) 
    .then(); 
  return storageRef; 
}
```

## Références

- [https://www.infoq.cn/article/1psaynhrx6ljme9vldta](https://www.infoq.cn/article/1psaynhrx6ljme9vldta)

- [Ajoutez Firebase à votre projet JavaScript (google.com)](https://firebase.google.com/docs/web/setup?authuser=0#node.js-apps)

- [https://firebase.google.com/docs/auth/web/start?authuser=0](https://firebase.google.com/docs/auth/web/start?authuser=0)