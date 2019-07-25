'use strict'

const baseUrl = 'https://d1u1mce87gyfbn.cloudfront.net/hero/name/icon-portrait.png'

const replaceName = newName => baseUrl.replace('name', newName)

const images = {
  1: replaceName('ana'),
  2: replaceName('ashe'),
  3: replaceName('baptiste'),
  4: replaceName('bastion'),
  5: replaceName('brigitte'),
  6: replaceName('dva'),
  7: replaceName('doomfist'),
  8: replaceName('genji'),
  9: replaceName('hanzo'),
  10: replaceName('junkrat'),
  11: replaceName('lucio'),
  12: replaceName('mccree'),
  13: replaceName('mei'),
  14: replaceName('mercy'),
  15: replaceName('moira'),
  16: replaceName('orisa'),
  17: replaceName('pharah'),
  18: replaceName('reaper'),
  19: replaceName('reinhardt'),
  20: replaceName('roadhog'),
  21: replaceName('sigma'),
  22: replaceName('soldier-76'),
  23: replaceName('sombra'),
  24: replaceName('symmetra'),
  25: replaceName('torbjorn'),
  26: replaceName('tracer'),
  27: replaceName('widowmaker'),
  28: replaceName('winston'),
  29: replaceName('wrecking-ball'),
  30: replaceName('zarya'),
  31: replaceName('zenyatta')
}

const grabImage = id => {
  return images[id]
}

module.exports = grabImage
