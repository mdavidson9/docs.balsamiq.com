#!/bin/sh

rm -rf public
rm -rf static
mkdir static
hugo server --buildDrafts --watch

