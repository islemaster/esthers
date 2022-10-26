/*
Tests that explore every path through the game.
Checks for errors and dead-ends, and the expected size of the possibility space.

WARNING! These are very slow, can take 30s or more to finish.
*/

const test = require('tape');
const SyntheticPlayer = require('./SyntheticPlayer');

test('Full Explorations', async t => {
  const player = new SyntheticPlayer();
  await player.setup();
  t.teardown(async () => await player.teardown());

  t.test(`Every path`, async t => {
    await player.restart();

    await player.walk([
      'Play',
    ])
    const exploration = await player.exploreTo([`Now all we need is dessert`]);
    t.true(exploration.fullyExplored);
    t.end();
  });
});