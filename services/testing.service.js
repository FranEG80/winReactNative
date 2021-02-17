import * as RNFS from 'react-native-fs';
import axios from 'axios';

const url =
  'http://localhost:3000/signature?region=eu&realmName=sanguino&characterName=kitonz';
const getSignature = () =>
  axios(url, {responseType: 'arraybuffer'}).then((e) => {
    // let ac = Buffer.from(e.data, 'base64')
    let ac = ArrayBuffer.from(e.data, 'base64');

    // new Buffer(e.data)
    // Buffer.from()
    return {e: ac.toString('base64'), type: e.headers['content-type']};
  });

const urlMovies = 'https://reactnative.dev/movies.json';
const getMoviesJson = async () => {
  try {
    let response = await fetch(urlMovies);
    let json = await response.json();
    return json.movies;
  } catch (error) {
    console.error(error);
  }
};

const readDirTesting = () => {
  // get a list of files and directories in the main bundle
  return RNFS.readDir(RNFS.MainBundlePath) // On Android, use "RNFS.DocumentDirectoryPath" (MainBundlePath is not defined)
    .then((result) => {
      console.log('GOT RESULT', result);

      // stat the first file
      return Promise.all([RNFS.stat(result[0].path), result[0].path]);
    })
    .then((statResult) => {
      if (statResult[0].isFile()) {
        // if we have a file, read it
        return RNFS.readFile(statResult[1], 'utf8');
      }

      return 'no file';
    })
    .then((contents) => {
      // log the file contents
      //console.log(contents);
    })
    .catch((err) => {
      console.log(err.message, err.code);
    });
};

const writeFileTesting = (data) => {
  var path = RNFS.DocumentDirectoryPath + '/test.txt';
  console.log(path);

  // write the file
  RNFS.writeFile(path, JSON.stringify(data), 'utf8')
    .then((success) => {
      console.log('FILE WRITTEN!');
    })
    .catch((err) => {
      console.log(err.message);
    });
};

export {getMoviesJson, readDirTesting, writeFileTesting, getSignature};
