const { writeFileSync, existsSync, unlinkSync } = require('fs');
const util = require('util');
const environments = require('./src/environments/environments.config.js');
const branch = process.argv[2];
console.log(branch)

try {
  if (!environments.hasOwnProperty(branch)) {
    console.error('Branch name not present in environments config object. Exiting...');
    process.exit(1);
  }

  console.log(`Writing environment files for branch ${branch}`);

  for (const build in environments[branch]) {
    const filePath = `./src/environments/environment.${build}.ts`;
    if (existsSync(filePath)) {
      unlinkSync(filePath);
      console.log(`Previous file deleted in ${filePath}`);
    };
    const fileContent = `export const environment = ${util.inspect(environments[branch][build])}\n`;
    writeFileSync(filePath, fileContent);
    if (existsSync(filePath)) console.log(`${build} environment file written in ${filePath}:\n${fileContent}`);
  };
} catch (err) {
  console.error('Error writing environment files:', err);
};
