# Script for Jenkins to run
#
# Author: EC
# Date: 10/01/15

echo ''
echo '*********************'
echo 'starting build script'
echo '*********************'
echo ''
# get commiters name
name=$(git show -s --pretty=%an)
echo 'Jenkins Build #'$BUILD_NUMBER ' by ' $name

# remove node_modules to catch any wildcard
# version issues
#rm -rf node_modules
npm install

# Run developers tests
gulp test
npm start & gulp protractor

# Run custom build tasks


# target FH git repo
# git remote add fh git@git.us.feedhenry.com:ea-sandbox/Session-Service-Cloud-App.git
# git checkout master
# git add -A
# git commit -am 'Jenkins Build'
# git pull origin master
# git pull fh master
# git push fh master



echo ''
echo '*********************'
echo 'finished build script'
echo '*********************'
