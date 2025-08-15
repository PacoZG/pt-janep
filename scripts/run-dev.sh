#!/usr/bin/env bash

taskDone () {
  echo -e "\033[01;32mDone!\033[0m\n"
}

animate() {
  local message=$1
  local i=0
  local dots=("..." " .." "  ." "   " ".  " ".. ")
  while [ $i -lt 6 ]; do
    printf "\r\x1b[5m\033[01;34m%s %s\033[00m" "$message" "${dots[$((i % ${#dots[@]}))]}"
    sleep 0.3
    ((i++))
  done
  printf "\r\x1b[5m\033[01;34m%s ...\033[00m\n" "$message"
}

animate "Opening http://localhost:3000 in the browser"
open http://localhost:3000
taskDone

animate "Running development environment"
next dev --turbopack
taskDone

