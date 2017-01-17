# TeamMessenger
A classic subject with a beautiful code.

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
Go to http://localhost:8080

#### Build for production
```bash
$ npm run build
```
This will create a `dist` folder at the project root. You will have to link the main css file in `index.html`

```html
<head>
  ...
  <link rel="stylesheet" href="dist/bundle.css">
  ...
</head>
```
