#!/bin/bash

tree -H '.' -L 1 --noreport --charset utf-8 | sed -e '/<hr>/,+7d' > index.html
