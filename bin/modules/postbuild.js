const { writeFile } = require('fs/promises');
const { resolve, normalize, dirname } = require('path');

const packageJSON = require('../../package.json');

async function createPackageJSONDistVersion() {
  const { main, scripts, resources, devDependencies, ...rest } = packageJSON;

  const [nodeModules, devFolder] = normalize(dirname(main)).split(/\/|\\/g);
  const devPath = [nodeModules, devFolder].join('/');

  const packageJSONDistVersion = {
    main: './main/index.js',
    ...rest,
  };

  try {
    await writeFile(
      resolve(devPath, 'package.json'),
      JSON.stringify(packageJSONDistVersion, null, 2),
    );
  } catch ({ message }) {
    console.log(`
    🛑 Something went wrong!\n
      🧐 There was a problem creating the package.json dist version...\n
      👀 Error: ${message}
    `);
  }
}

createPackageJSONDistVersion();
