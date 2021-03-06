import git from 'simple-git/promise';

/**
 * Make an autogenerated commit with the "decaffeinate" author.
 */
export default async function makeCommit(commitMessage) {
  const userEmail = await git().raw(['config', 'user.email']);
  const author = `decaffeinate <${userEmail}>`;
  await git().commit(commitMessage, {'--author': author, '--no-verify': null});
}
