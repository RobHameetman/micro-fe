![@micro-fe/create][header]

![Version](https://img.shields.io/npm/v/@micro-fe/create)
![Downloads](https://img.shields.io/npm/dt/@micro-fe/create)
![Build](https://img.shields.io/bitbucket/pipelines/micro-fe/master)
![License](https://img.shields.io/npm/l/@micro-fe/create)

# 📦 @micro-fe/create

This project is a curated collection of public packages for personal use across
distributed and internal solutions.

- [📦 @micro-fe/create](#%f0%9f%93%a6-micro-fecreate)
  - [💼 Getting Started](#%f0%9f%92%bc-getting-started)
    - [📚 Prerequisites](#%f0%9f%93%9a-prerequisites)
    - [📲 Installing](#%f0%9f%93%b2-installing)
  - [🛥 Deployment](#%f0%9f%9b%a5-deployment)
  - [🧾 Project Dependencies](#%f0%9f%a7%be-project-dependencies)
  - [🏷 Versioning](#%f0%9f%8f%b7-versioning)
  - [📜 Authors](#%f0%9f%93%9c-authors)
  - [📄 License](#%f0%9f%93%84-license)

## 💼 Getting Started

These instructions will get you a copy of the project up and running on your
local machine for development and testing purposes. See deployment for notes on
how to deploy the project on a live system.

### 📚 Prerequisites

What things you need to install the software and how to install them

- Node v10+
- NPM v6+

### 📲 Installing

To install the project, clone and build the repo, then use `npm` to install
dependencies for each package.

```bash
git clone git@bitbucket.org:micro-fe.git
cd packages/eslint-config
npm i
```

## 🛥 Deployment

Each package is versioned and deployed independently with `npm`:

```bash
npm version patch
npm publish
```

## 🧾 Project Dependencies

- [TypeScript](https://www.typescriptlang.org/) - Implementation language
- [NPM](https://www.npmjs.com/) - Dependency Management

## 🏷 Versioning

I use [SemVer](http://semver.org/) for versioning. For the versions available,
see the [tags on this repository](https://github.com/RobHameetman/micro-fe/tags/).

## 📜 Authors

- **Robert Hameetman** - _<engineering@robhameetman.com>_

See also the list of [contributors](https://github.com/RobHameetman/micro-fe/graphs/contributors) who participated in this project.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

[header]: /.github/readme-create.png '@micro-fe/create'
