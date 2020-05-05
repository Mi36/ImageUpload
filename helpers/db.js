import SQLite from 'react-native-sqlite-storage';
//SQLite.DEBUG(true);
//SQLite.enablePromise(false); // set this to false , otherwise there is chances for error.

const db = SQLite.openDatabase('places.db'); // this creates a database
//this will run when ever this file runs

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS places (id INTEGER PRIMARY KEY NOT NULL, title TEXT NOT NULL, imageUri TEXT NOT NULL, address TEXT NOT NULL, lat REAL NOT NULL, lng REAL NOT NULL)',
        [],
        () => {
          resolve();
          console.log('created');
        },
        (_, err) => {
          reject(err);
        },
      );
    });
  });
  return promise;
};

export const insertPlace = (title, imageUri, address, lat, lng) => {
  const promise = new Promise((resolve, reject) => {
    //id auto generated
    db.transaction(tx => {
      tx.executeSql(
        `INSERT INTO places (title, imageUri, address, lat, lng) VALUES (?, ?, ?, ?, ?)`,
        [title, imageUri, address, lat, lng],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
          console.log(err);
          console.log('rejected');
        },
      );
    });
  });
  return promise;
};

export const fetchPlace = () => {
  const promise = new Promise((resolve, reject) => {
    //id auto generated
    db.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM places`,
        [],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
          console.log(err);
          console.log('rejected');
        },
      );
    });
  });
  return promise;
};

// export const insertPlace = (title, imageUri, address, lat, lng) => {
//   db.transaction(tx => {
//     tx.executeSql('INSERT INTO places VALUES (?, ?, ?, ?, ?)', [
//       title,
//       imageUri,
//       address,
//       lat,
//       lng,
//     ]);
//   });
// };
