#!/usr/bin/env bash

set -o errexit
set -o nounset
set -o pipefail
trap "exit" INT

# Removes "Anonymous function declarations cause Fast Refresh to not preserve local component state. Please add a name to your function." warning.
# Reason: https://github.com/vercel/next.js/issues/15696
sed -i.bak 's/warn=onWarning;/warn=function(){};/g' node_modules/next/dist/build/babel/plugins/no-anonymous-default-export.js
