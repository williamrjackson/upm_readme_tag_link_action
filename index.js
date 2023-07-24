const core = require('@actions/core');

function run() {
  var fs = require('fs')
    const readmePath = core.getInput('path');
    const maj = core.getInput('major');
    const min = core.getInput('minor');
    const pch = core.getInput('patch');
    fs.readFile(readmePath, 'utf8', function (err, data) {
      if (err) {
        core.setFailed(err);
      } else {
        const regexMinor =/#v{1}\d{1,2}\.\d{1,2}/g
        const regexPatch =/#v{1}\d{1,2}\.\d{1,2}\.\d{1,3}/g
        let updated = data.replace(regexMinor, `#v${maj}.${min}`);
        updated = updated.replace(regexPatch, `#v${maj}.${min}.${pch}`);
        fs.writeFile(readmePath, updated, function (err) {
          if (err) {
            core.setFailed(err);
          }
      });
    }
  });
}

run();
