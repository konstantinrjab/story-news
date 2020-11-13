docker run -u 1000:1000 -v ${PWD}:/app -p 8080:8080 node bash -c 'cd /app && npm run serve'
docker run -u 1000:1000 -v ${PWD}:/app node bash -c 'cd /app && npm install axios --save'

# story-news

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
