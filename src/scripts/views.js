function showHomeView(mainContent) {
    mainContent.innerHTML = `
        <section id="home">
            <div class="title">
                <span>home</span>
            </div>
            <container class="playlists-container">
                <!-- Home -->
            </container>
        </section>
    `;

    localStorage.setItem("current-view", JSON.stringify({ name: "home" }));
}

function showPlaylistView(mainContent, playlist) {
    mainContent.innerHTML = `
        <article id="playlist-view">
            <container class="wrapper">
                <!-- Zawartość widoku Playlisty -->
                <section>
                    <div class="playlist-info">
                        <div class="playlist-icon">
                            <img src="/src/assets/images/playlists/playlist-icon-basic.png">
                        </div>
                        <div class="info">
                            <p>Playlist</p>
                            <h1>${playlist.name}</h1>
                            <span>alex 11 songs 58 min 17 sec</span>
                        </div>
                    </div>
                </section>
                <div class="show-more"></div>
                <container class="playlists-container">
                    <div class="playlists-title">${playlist.id}</div>
                    <div class="wrapper"></div>
                </container>
            </container>
        </article>
    `;

    localStorage.setItem("current-view", JSON.stringify({ name: "playlist", view: playlist }));
}
