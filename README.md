---
title: Get latest release
authors:
  - dgmjr
description: Retrieves the latest release number for a repo
keywords:
  - github actions
  - ci/cd
slug: restore-dotnet-file
project: Dgmjr.Actions
type: readme
license: MIT
---

# Get latest release

Retrieves the latest release number for a repo

## Usage

```yaml
  ...
    - id: get-foo-bar-latest
    uses: dgmjr-actions/get-latest-release@v0.0.1
      with: 
      TOKEN: ${{ GITHUB_TOKEN }}
      repo: foo/bar
    - it: call foo/bar
     uses: foo/bar@${{ steps.get-foo-bar-latest.outputs.latest-release }}
  ...
```
