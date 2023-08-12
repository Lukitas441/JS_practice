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
}

const updateCollection = (records, id, prop, value) => {
    if(!value) delete records[id][prop]
    if(value !== '') {
        if(prop === 'tracks') {
            records[id][prop] = records[id][prop] || []
            records[id][prop].push(value)
        } else {
            records[id][prop] = value
        }
    }
    return records
}

updateCollection(recordCollection, 1245, 'artist', 'Melanie Martinez')
updateCollection(recordCollection, 1245, 'tracks', 'Cry Baby')
console.log(recordCollection)