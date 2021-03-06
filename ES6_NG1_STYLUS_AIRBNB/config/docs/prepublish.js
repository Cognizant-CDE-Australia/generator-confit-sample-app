'use strict';

// START_CONFIT_GENERATED_CONTENT
// Update the swanky.config.yaml file's version number
const latestVersion = require('latest-version');
const fs = require('fs');
const pkgName = 'es-6-ng-1-stylus-airbnb';
const pkgRepo = 'repo';
// END_CONFIT_GENERATED_CONTENT


// START_CONFIT_GENERATED_CONTENT
latestVersion(pkgName).then(version => {
  console.log(`Latest version of ${pkgName}: ${version}`);

  // Read Swanky config YAML file, modify the version and server-path, then save it again
  let text = fs.readFileSync('docs/swanky.config.yaml', 'utf8');

  text = text.replace(/^version:.*$/m, `version: ${version}`);
  text = text.replace(/^serverPath:.*$/m, `serverPath: ${pkgRepo}`);

  fs.writeFileSync('docs/swanky.config.yaml', text, 'utf8');
});
// END_CONFIT_GENERATED_CONTENT

