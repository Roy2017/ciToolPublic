import chalk from 'chalk';

const main = (curVersion) => {
  setImmediate(() => {
    var npmview = require('npmview');
    npmview('xes-citool', function(err, version, moduleInfo) {
      if (err) {
        console.error(err);
        return;
      }

      // console.log('??', Number(curVersion.replace(/\./g, '')), Number(version.replace(/\./g, '')));

      if (Number(curVersion.replace(/\./g, '')) < Number(version.replace(/\./g, ''))) {
        console.log(chalk.red('' +
          '/**********************************\n' +
          'xes-citool有新版本了，请尽快升级！\n' +
          `Run: yarn upgrade xes-citool@${version}\n`+
          '**********************************/'
        ));
      }
    });
  })
}

export default main;
