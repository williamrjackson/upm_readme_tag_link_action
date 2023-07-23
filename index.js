const core = require('@actions/core');

function run() {
  var fs = require('fs')
    const readmePath = core.getInput('path');
    const version = core.getInput('version-number');
    fs.readFile(readmePath, 'utf8', function (err, data) {
      if (err) {
        core.setFailed(err);
      } else {
        const regex =/#v{1}\d{1,2}\.\d{1,2}\.\d{1,3}/g
        let replaced = data.replace(regex, `#v${version}`);
        fs.writeFile(readmePath, replaced, function (err) {
          if (err) {
            core.setFailed(err);
          }
      });
    }
  });
}

run();