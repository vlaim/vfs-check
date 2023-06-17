# vfs-check

[![Software License][ico-license]](LICENSE.md)

A tiny puppeteer script to check availability of visa in vfs global system.
Tested for [Polish visa application in Saint Petersburg, RU](https://www.vfsglobal.com/Poland/Russia/SaintPetersburg/track-application1.html)

Requires [Node.js](https://nodejs.org/en/download/) installed on your computer locally. 

# Disclamer

**Please not that this script is not for booking an available slot in VFS, but for checking the status of existing one.**

## Usage 

1. Copy .env-dist to .env 

```
cp .env-dist to .env
```

2. Provide your case number and birthdate in .env file

```
APPLICATION_NUMBER=PLSP/xxxxxx/xxxx/xx
BIRTHDATE=xx/xx/xxxx
```

3. Install dependencies and run the scipt

```
npm i 
npm run 
```


## License

**vfs-check** is released under the MIT License. See the bundled LICENSE.md for details.

[ico-license]: https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square


