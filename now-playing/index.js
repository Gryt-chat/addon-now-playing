// Now Playing for Gryt: whatever your media controls say is playing, as a "Listening to" card.
// Needs the media and activity permissions, which Gryt asks you to allow when you turn it on.

let current = null;

function cardFor(playing) {
  return {
    type: "listening",
    name: playing.player,
    details: playing.title,
    state: playing.artist ? `by ${playing.artist}` : undefined,
    startedAt: Date.now(),
  };
}

function update(playing) {
  const key = playing ? `${playing.key}\u001f${playing.title}\u001f${playing.artist ?? ""}` : null;
  if (key === current) return;
  current = key;
  // A new track starts its own clock, the way Discord shows it.
  if (playing) void gryt.activity.set(cardFor(playing));
  else void gryt.activity.clear();
}

void gryt.media.current().then(update);
gryt.media.on(update);
