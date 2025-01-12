# Blog build

Deploys to: https://github.com/pprzetacznik/pprzetacznik.github.io

## Building with npm

```
npm install
npm run docs:build
```

## Running the blog on local environment

Running dev mode:
```
npm run docs:dev
```
or running static target files:
```
cd docs/.vuepress/dist
python -m http.server
```

## Troubleshooting

Deploying to a custom domain
```
echo 'pprzetacznik.github.io' > CNAME
```
