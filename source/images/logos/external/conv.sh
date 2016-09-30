#!/bin/bash
output_dir=site
for image in "$@"
do
  mkdir -p "$output_dir"
  name=`basename ${image%.*}`
  outName="$output_dir/$name.png"
  command="convert $image -background none -transparent white -resize 250x250 -gravity center -extent 250x250 $outName"
  echo -e "Converting $image to $outName with command: '$command'..."
  $command
done
