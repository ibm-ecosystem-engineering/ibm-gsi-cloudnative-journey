#!/usr/bin/env sh


PORT=${1:-8000}

ls -l /site

mkdocs serve --livereload -a "0.0.0.0:${PORT}"
echo "Dev environment running with live reloading enabled. Open http://localhost:${PORT}/ibm-gsi-cloudnative-journey/ to see the site"
