#!/bin/bash

command= scss-lint | tee >(wc -l)

if [ "$command" = "0" ]; then
    echo Success
else
    echo "Lint errors found."
    exit
fi