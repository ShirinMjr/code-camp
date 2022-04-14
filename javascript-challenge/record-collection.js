/**
 * You are given an object literal representing a part of your musical album collection.
 * Each album has a unique id number as its key and several other properties.
 * Not all albums have complete information.
 * You start with an updateRecords function that takes
 *  an object literal, records, containing the musical album collection, an id, a prop (like artist or tracks), and a value. 
 * Complete the function using the rules below to modify the object passed to the function.
 * Your function must always return the entire record collection object.
 * If prop isn't tracks and value isn't an empty string, update or set that album's prop to value.
 * If prop is tracks but the album doesn't have a tracks property, create an empty array and add value to it.
 * If prop is tracks and value isn't an empty string, add value to the end of the album's existing tracks
 * array.
 * If value is an empty string, delete the given prop property from the album.
 * Note: A copy of the recordCollection object is used for the tests.
 */

// Setup
const recordCollection = {
    2548: {
        albumTitle: 'Slippery When Wet',
        artist: 'Bon Jovi',
        tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
        albumTitle: '1999',
        artist: 'Prince',
        tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
        artist: 'Robert Palmer',
        tracks: []
    },
    5439: {
        albumTitle: 'ABBA Gold'
    }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
    //If prop isn't tracks and value isn't an empty string, update or set that album's prop to value.
    if (prop != "tracks" && value != "") {
        console.log("update or set that album's prop to value " + id);
        records[id][prop] = value;
        //If prop is tracks but the album doesn't have a tracks property, create an empty array and add value to it.
    } else if (prop === "tracks" && records[id].hasOwnProperty(prop) == false) {
        console.log("create empty array for " + id + " and add value(adding tracks with value)");
        records[id][prop] = [];
        records[id][prop].push(value);
        //records[id][prop]=[value];
        //If prop is tracks and value isn't an empty string, add value to the end of the album's existing tracks array.
    } else if (prop === "tracks" && value != "") {
        console.log("Adding value to the end of the album's existing tracks array for " + id);
        records[id][prop].push(value);
        //If value is an empty string, delete the given prop property from the album.
    } else if (value === "") {
        console.log("tracks should not be set for " + id)
        delete records[id][prop];
    }
    return records;
}

console.log("==================");
console.log(JSON.stringify(updateRecords(recordCollection, 5439, 'artist', 'ABBA')));
console.log("==================");
console.log(JSON.stringify(updateRecords(recordCollection, 5439, 'tracks', 'Take a Chance on Me')));
console.log("==================");
console.log(JSON.stringify(updateRecords(recordCollection, 1245, "tracks", "Addicted to Love")));
console.log("==================");
console.log(JSON.stringify(updateRecords(recordCollection, 2548, "artist", "")));
