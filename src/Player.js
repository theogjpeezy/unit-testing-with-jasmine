function Player() {
}
Player.prototype.play = function(song) {
    this.currentlyPlayingSong = song;
    this.isPlaying = true;
};

Player.prototype.pause = function() {
    this.isPlaying = false;
};

Player.prototype.resume = function() {
    if (this.isPlaying) {
    throw new Error("song is already playing");
    }

    this.isPlaying = true;
};

Player.prototype.makeFavorite = function() {
    this.currentlyPlayingSong.persistFavoriteStatus(true);
};

Player.prototype.getFavorites = function() {
    var favorites = JSON.parse(window.localStorage.getItem('favorites')) || [];
    var songs = [];
    for (var i = 0; i < favorites.length; i++) {
        songs.push(JSON.parse(favorites[i]));
    }
    return songs;
};

Player.prototype.clearFavorites = function() {
    window.localStorage.removeItem('favorites');
}