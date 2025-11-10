// This file sets up the SQLite database and creates necessary tables.
// Not yet functionable, work in progress


import * as FileSystem from 'expo-file-system';
import { openDatabase } from 'expo-sqlite';


export async function runSqlFile(dbName: String, sqlAssetPath: String) {
    const db = openDatabase(dbName);


};