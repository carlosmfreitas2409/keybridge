const { normalize, dirname } = require('path');

const {
  main,
  name,
  author,
  version,
  displayName,
  description,
  resources,
} = require('./package.json');

const currentYear = new Date().getFullYear();
const authorInKebabCase = author.name.replace(/\s+/g, '-');
const appId = `com.${authorInKebabCase}.${name}`.toLowerCase();

const [nodeModules, devFolder] = normalize(dirname(main)).split(/\/|\\/g);
const devPath = [nodeModules, devFolder].join('/');

/** @type {import('electron-builder').Configuration} */
module.exports = {
  appId,
  productName: displayName,
  copyright: `Copyright © ${currentYear} - ${author.name}`,

  directories: {
    app: devPath,
    output: `dist/v${version}`,
  },

  mac: {
    icon: `${resources}/build/icons/icon.icns`,
    category: 'public.app-category.utilities',
  },

  dmg: {
    icon: false,
  },

  linux: {
    category: 'Utilities',
    synopsis: description,
    target: ['AppImage', 'deb', 'pacman', 'freebsd', 'rpm'],
  },

  win: {
    icon: `${resources}/build/icons/icon.ico`,
    target: ['nsis'],
  },
};
