![@micro-fe][logo]

![Version](https://img.shields.io/npm/v/@micro-fe)
![Downloads](https://img.shields.io/npm/dt/@micro-fe)
![Build](https://img.shields.io/bitbucket/pipelines/micro-fe/master)
![License](https://img.shields.io/npm/l/@micro-fe)

# 📦 @micro-fe

This project is a curated collection of NPM initializers for generating Micro-frontends
and micro-frontend structural patterns.

* [💼 Getting Started](#markdown-header-getting-started)
  * [📚 Prerequisites](#markdown-header-prerequisites)
  * [📲 Installing](#markdown-header-installing)
* [🛠 Testing](#markdown-header-testing)
  * [🔁 E2E](#markdown-header-e2e)
  * [🛁 Static Analysis](#markdown-header-static-analysis)
* [🛥 Deployment](#markdown-header-deployment)
* [🧾 Important Dependencies](#markdown-header-important-dependencies)
* [🙌🏼 Adding Banners](#markdown-header-adding-banners)
* [🏷 Versioning](#markdown-header-versioning)
* [📜 Authors](#markdown-header-authors)
* [📄 License](#markdown-header-license)
* [📯 Acknowledgments](#markdown-header-acknowledgments)

## 💼 Getting Started

The instructions below will get you a copy of the project up and running on your
local machine for development and testing purposes. See deployment for notes on
how to deploy the project on a live system.

To use this project to bootstrap your micro-frontend project, run the following
in your terminal:

```bash
npm init @micro-fe
```

### 📚 Prerequisites

What things you need to install the software and how to install them

* Node v12+
* NPM v6+

### 📲 Installing

To install the project, clone and build the repo, then use `npm` to install
dependencies for each package.

```bash
git clone git@bitbucket.org:micro-fe.git
cd micro-fe
npm i
```

## 🛥 Deployment

Each package is versioned and deployed independently with `npm`:

```bash
npm version patch
npm publish
```

## 🧾 Project Dependencies

* [TypeScript](https://www.typescriptlang.org/) - Implementation language
* [NPM](https://www.npmjs.com/) - Dependency Management

## 🏷 Versioning

I use [SemVer](http://semver.org/) for versioning. For the versions available,
see the [tags on this repository](https://github.com/RobHameetman/packages/tags/).

## 📜 Authors

* **Robert Hameetman** - *<engineering@robhameetman.com>*

See also the list of [contributors](https://github.com/RobHameetman/packages/graphs/contributors) who participated in this project.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

[logo]: /.github/logo.png "@micro-fe"
