#!/usr/bin/env sh

set -e

cspell "docs/**/*.md"
mkdocs build -d ./public/ibm-gsi-cloudnative-journey
linkchecker -r 3 -f linkcheckerrc public
