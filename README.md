## Usage

First clone this repository to your laptop. You must have Node (> v4) and [yarn](https://yarnpkg.com/lang/en/docs/install/) installed.

```bash
cd ~/code/<your_github_nickname>
git clone git@github.com:w410x/javascript-packages-boilerplate.git
cd javascript-packages-boilerplate
rm -rf .git
yarn install
code . # Open this folder in your text editor
```

Make sure you have `./node_modules/.bin` in your `$PATH`! This way you can run this:

```bash
webpack-dev-server
```
