import SQLite from 'react-native-sqlite-storage';
SQLite.DEBUG(true);
SQLite.enablePromise(false); // set this to false , otherwise there is chances for error.

const db = SQLite.openDatabase('places.db', '1.0', 'Test Database', 200000); // this creates a database
//this will run when ever this file runs

export const init = () => {
  //creates table if it does not exist
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS places (id INTEGER PRIMARY KEY NOT NULL,title TEXT NOT NULL,image TEXT NOT NULL, address TEXT NOT NULL ,lat REAL NOT NULL,lng REAL NOT NULL);',
        [],
        () => {
          resolve();
        },
        (_, err) => {
          reject(err);
        },
      );
    });
  });
  return promise;
};
