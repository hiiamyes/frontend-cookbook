# Frontend Cookbook

[![CircleCI](https://circleci.com/gh/hiiamyes/frontend-cookbook/tree/master.svg?style=svg)](https://circleci.com/gh/hiiamyes/frontend-cookbook/tree/master)

[Live Demo](https://frontend-cookbook.yeslee.me)

## Prerequisite

Install `nvm`

```
nvm install 12.4.0
nvm use 12.4.0
```

## Getting started

```
yarn
yarn start
```

## Release

```
yarn release
```

## Usage

```
yarn add https://github.com/hiiamyes/frontend-cookbook.git#release
yarn add https://github.com/hiiamyes/frontend-cookbook.git#1.0.5
```

```
import createTheme from "src/theme/createTheme";

<ThemeProvider theme={createTheme()}>...</ThemeProvider>
```

## Deploy

```
./scripts/deploy.sh
```

Onto https://frontend-cookbook.yeslee.me/
