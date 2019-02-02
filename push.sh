#!/bin/sh
while getopts t: option 
do 
 case "${option}" 
 in 
 t) TYPE=${OPTARG};; 
 esac 
done 

if (($TYPE == "prod"))
then
	ionic cordova build browser --prod
fi
git add -A
git commit -m "a"
git push heroku master
echo done