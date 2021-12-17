import { execSync } from 'child_process';

export const getGitInfos = () => {
  // 自动获取git 项目远程分支地址
  let branch = execSync('git rev-parse --abbrev-ref HEAD');
  branch = branch.toString('utf8').trim();
  let remote = execSync('git remote get-url origin')
    .toString('utf8').trim();
  // const remotePath = remote.match(/\/(\w+).git$/);
  const remotePath = remote.match(/\/(\S+).git$/);
  return ({
    remote,
    remotePath: remotePath[1],
    branch,
  });
};

export const getCommitMsg = async () => {
  const read = require('@commitlint/read').default;
  // 获取commit msg
  let input = await read({
    // edit: true,
    from: 'HEAD~2',
    to: 'HEAD~0',
    cwd: process.cwd(),
  }).catch(() => {});

  if (!input) {
    input = await read({ edit: true });
  }

  const messages = (Array.isArray(input) ? input : [input])
    .filter((message) => typeof message === 'string')
    .filter((message) => message.trim() !== '')
    .filter(Boolean)
    .filter((message) => message.indexOf('chore(release)') == -1); // 过滤发版信息

  if (!messages || !messages[0]) {
    throw new Error('commit messages no find!');
  }
  return messages[0]
}
