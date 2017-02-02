# TeamMessenger
> A cloud-based team collaboration tool (client application only).


## Engines used
 - AngularJS
 - Electron
 - Semantic UI
 - Webpack


### Why Webpack ? 
- It compiles ES6 into ES5 (by using Babel)
- It isolates the code by using modules
- It includes a hot reload 


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

> Run the dev server (it compiles the project, run a watcher and open your browser at http://localhost:4000
``` bash
$ npm run dev
```

> Build the project (http://localhost:8080)
``` bash
$ npm run build
```

> Run the project with Electron (do not forget to build the project before)
``` bash
$ npm start
```
