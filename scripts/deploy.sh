#!/bin/sh
git checkout master
git pull
git merge develop --no-ff --no-edit
git push origin HEAD
git checkout develop
