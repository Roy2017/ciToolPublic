function getExePath(extName) {
  var strPath = process.env['PATH'];

  var t = strPath.split(';')
  console.dir(t );

  var nodePath = strPath.split(';').filter((str) => {
    if (str.toLowerCase(extName).indexOf(extName.toLowerCase()) > 0) {
      return true;
    }
  }) || [];

  return nodePath[0];
}

let gitPath = '';

export default () => {
  if (!gitPath) {
    const basePath = getExePath('git').replace(/(git)[\\|\/\w+]+/gi, '$1');
    gitPath = `${basePath}\\bin\\bash.exe`;
  }
  return ({
    gitPath,
  });
}
