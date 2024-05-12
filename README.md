# Blog build

Deploys to: https://github.com/pprzetacznik/pprzetacznik.github.io

## Building with npm

```
npm install
npm run docs:build
```

## Running the blog on local environment

```
cd docs/.vuepress/dist
python -m http.server
```

## Troubleshooting

Deploying to a custom domain
```
echo 'pprzetacznik.github.io' > CNAME
```
