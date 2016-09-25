#!/bin/bash
DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd );
bower install
rm -rf $DIR/build
buildProduction $DIR/src/index.html --inline true --outroot $DIR/build

