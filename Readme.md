Scoutnet - SCSS Wordpress template.
========================================

[![Join the chat at https://gitter.im/ScoutnetBE/Scoutnet-Wordpress-Theme](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/ScoutnetBE/Scoutnet-Wordpress-Theme?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![Build Status](https://travis-ci.org/ScoutnetBE/Scoutnet-Wordpress-Theme.svg?branch=%23fix-SCSS-lint-issues)](https://travis-ci.org/ScoutnetBE/Scoutnet-Wordpress-Theme)
[![devDependency Status](https://david-dm.org/ScoutnetBE/Scoutnet-Wordpress-Theme/dev-status.svg)](https://david-dm.org/ScoutnetBE/Scoutnet-Wordpress-Theme#info=devDependencies)

***This SCSS port is out of support***
The Sass file for the wordpress theme, That is currently in active development by Scoutnet Belguim. 

## What's included in the sass folder?

```bash
scss/
├── modules/
│   └── _variables.scss
├── partials/
│   ├── _breadcrumbs.scss
│   ├── _buttons.scss
│   ├── _comments.scss
│   ├── _content.scss
│   ├── _events.scss
│   ├── _fonts.scss
│   ├── _footer.scss
│   ├── _general.scss
│   ├── _header.scss
│   ├── _headings.scss
│   ├── _images.scss
│   ├── _reset.scss
│   └── _wrapper.scss
└── style.scss
```

## Requirements. 

- Ruby. 
- NodeJS
- Ruby gem scss
- Checkstyle gem.

## Installation.

1. Open your terminal. or command prompt. 
2. Install Sass. `gem install sass`
3. Install checkstyle reporter. `gem install scss_lint_reporter_checkstyle`
4. Double check the installation. `sass -v`.

## Compile sass 

#### Terminal:

Navigate to the project root directory, 
And then run the command: 

```bash 
scss styles.scss path/to/output/<filename>.scss
```

#### Using GulpJS:

1. navigate the to project foler. 
2. Install the dependencies with `npm install`.
3. type `gulp help` for displaying a description off the build in commands. 
4. or type `gulp compile` to create the css cheet.
