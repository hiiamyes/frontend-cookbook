#!/bin/sh
rollup -c
rm -rf release/
git clone --branch release https://github.com/hiiamyes/frontend-cookbook.git release
cp README.md release/README.md
yes | cp -rf dist/ release/dist/
cd release
git add .
yarn version --patch
git push --follow-tags