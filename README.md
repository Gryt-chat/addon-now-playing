# Now Playing

A [Gryt](https://gryt.chat) addon that puts what you're listening to on your member card: "Listening to Spotify, Harbour Lights by Tove".

Needs Gryt 1.13.0-beta.7 or newer, the first version with the media and activity permissions.

It reads your computer's media controls, so it works with Spotify, Apple Music, TIDAL, YouTube in a browser, and anything else that shows up in them. It checks every fifteen seconds. When nothing is playing, the card comes down.

## Install

1. Download `now-playing.zip` from the [latest release](https://github.com/Gryt-chat/addon-now-playing/releases/latest).
2. In Gryt, open Settings → Addons → Open addons folder, and unzip it there, so you get a `now-playing` folder.
3. Turn it on in Settings → Addons, and allow the two permissions it asks for.

Gryt tells you when a newer release is out.

## What it's allowed to do

- **media**: see what your media controls say is playing. Only the track, artist, album and player, nothing else you have open.
- **activity**: put a "Listening to" card on your profile, on every server you're on.

Nothing is read until the addon is on. Turning it off takes the card down.

On a Mac, the system keeps its own "now playing" to Apple's apps, so Gryt asks Spotify and Music directly, and macOS asks you once whether Gryt may. Other players on a Mac aren't seen yet.

## How it works

It's the whole addon: [`now-playing/index.js`](now-playing/index.js) listens with `gryt.media.on` and sets the card with `gryt.activity.set`. It's also meant as an example to copy for your own addon.

## License

MIT
