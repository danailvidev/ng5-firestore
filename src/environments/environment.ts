// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase : {
    apiKey: 'AIzaSyBSvJRmeAoMfWQFSaOX1yEp3xBpccOcYho',
    authDomain: 'courses-fe7dd.firebaseapp.com',
    databaseURL: 'https://courses-fe7dd.firebaseio.com',
    projectId: 'courses-fe7dd',
    storageBucket: 'courses-fe7dd.appspot.com',
    messagingSenderId: '895043635483'
  }
};
