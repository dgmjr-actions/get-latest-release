import { Octokit } from "@octokit/core";

// console.log(process.argv);

// https://github.com/octokit/core.js#readme
const octokit = new Octokit({
  auth: process.argv[2],
});

let _latestRelease: string = "";

console.log(`Token: ${process.argv.slice(1)[0]}`);

const owner = process.argv[3].split("/")[0];
const repo = process.argv[3].split("/")[1];
(async () => {
  let latestRelease = await octokit.request(
    "GET /repos/{owner}/{repo}/releases/latest",
    {
      owner: owner,
      repo: repo,
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    }
  );

  console.log(latestRelease.data.tag_name);
  _latestRelease = latestRelease.data.tag_name;
})();

export const LatestRelease = _latestRelease;
