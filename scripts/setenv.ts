const { writeFile } = require('fs');
const { argv } = require('yargs');

// read environment variables from .env file
require('dotenv').config();

// read the command line arguments passed with yargs
const environment = argv.environment;
const isProduction = environment === 'prod';

const targetPath = isProduction
    ? `./src/environments/environment.prod.ts`
    : `./src/environments/environment.ts`;


// Validates if variable was loaded from dotenv    
if (!process.env.KEY) {
    console.error('All the required environment variables were not provided!');
    process.exit(-1);
}
console.log(' -------------- Variable values ​​loaded successfully!!! --------------');

// we have access to our environment variables
// in the process.env object thanks to dotenv
const environmentFileContent = `
export const environment = {
   production: ${isProduction},
   POPULAR_MOVIES: '${process.env.POPULAR_MOVIES}',
   DETAILS_MOVIE: '${process.env.DETAILS_MOVIE}',
   SEARCH_MOVIE: '${process.env.SEARCH_MOVIE}',
   KEY: '${process.env.KEY}',
   LANGUAGE:'${process.env.LANGUAGE}',
};
`;

// write the content to the respective file
writeFile(targetPath, environmentFileContent, function (err: any) {
    if (err) {
        console.log(err);
    }

    console.log(`Teste das variables to ${targetPath}`);
});