#!/bin/bash

lines = scss-lint | tee >(wc -l)

if [ lines === 0 ]; then
    echo Success
else
    exit
fi