function Song(title, artist) {
    this.title = title;
    this.artist = artist;
}

Song.prototype.getTitle = function() {
    return this.title;
}

Song.prototype.getArtist = function() {
    return this.artist;
}

Song.prototype.persistFavoriteStatus = function(value) {
    var favorites = JSON.parse(window.localStorage.getItem('favorites')) || [];
    var serializedSong = JSON.stringify(this);
    if(value) {
        if (favorites.indexOf(serializedSong) === -1) {
            favorites.push(serializedSong);
        }
    } else {
        var index = favorites.indexOf(serializedSong);
        if (index > -1) {
            favorites.splice(index, 1);
        }
    }
    window.localStorage.setItem('favorites', JSON.stringify(favorites));
};


