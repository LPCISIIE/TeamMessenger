# TeamMessenger
A classic subject with a beautiful code.

# TODO
- Socialize filter
- Navbar directive
- Hide sidebar (button)
- Replies with @mentions
- Electron
- Supprimer les "Reply" si on ne les utilise pas

Nous avons utilisé Webpack, qui permet :
- De compiler le code ES6 en Javascript
- D'isoler le code dans des modules
- D'avoir un serveur web avec hot reload (rechargement automatique de la page après modification du code)

Installation du projet :
Dépendences webpack et angular
``` bash
$ npm install
```

Semantic UI et jQuery
``` bash
$ bower install
```

Lancer le serveur de dev :
``` bash
$ npm run dev
```
Celà va compiler les sources, lancer un serveur et ouvrir votre navigateur
Si ce n'est pas le cas, rendez-vous sur http://localhost:4000

Utiliser le version prod :
``` bash
$ npm run build
```
Celà va compiler les sources et créer un dossier `dist` à la racine du projet
Vous pouvez vous rendre dans ce dossier et lancer un serveur. Par expemple :
``` bash
$ npm install -g http-server

$ cd dist
$ http-server
```
Et se rendre sur http://localhost:8080




==================================================

## Installation
### 1. Clone repository
```bash
$ git clone https://github.com/TPCISIIE/TeamMessenger.git
```

### 2. Install dependencies
```bash
$ cd TeamMessenger
$ npm install
$ bower install
```

### 3. Run the application
#### Dev server
```bash
$ npm run dev
```
Go to http://localhost:4000

#### Build for production
```bash
$ npm run build
```
This will create a `dist` folder at the project root with the compiled application files
