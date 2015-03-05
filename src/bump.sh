COMMITCOUNT=$(git rev-list HEAD --count)
sed -ri "s/@version.*/@version     ${COMMITCOUNT}/" meta.js
