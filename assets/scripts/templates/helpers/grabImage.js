'use strict'

const baseIconUrl = 'https://d1u1mce87gyfbn.cloudfront.net/hero/name/icon-portrait.png'

const replaceIconName = newName => baseIconUrl.replace('name', newName)

const images = {
  1: replaceIconName('ana'),
  2: replaceIconName('ashe'),
  3: replaceIconName('baptiste'),
  4: replaceIconName('bastion'),
  5: replaceIconName('brigitte'),
  6: replaceIconName('dva'),
  7: replaceIconName('doomfist'),
  8: replaceIconName('genji'),
  9: replaceIconName('hanzo'),
  10: replaceIconName('junkrat'),
  11: replaceIconName('lucio'),
  12: replaceIconName('mccree'),
  13: replaceIconName('mei'),
  14: replaceIconName('mercy'),
  15: replaceIconName('moira'),
  16: replaceIconName('orisa'),
  17: replaceIconName('pharah'),
  18: replaceIconName('reaper'),
  19: replaceIconName('reinhardt'),
  20: replaceIconName('roadhog'),
  21: replaceIconName('sigma'),
  22: replaceIconName('soldier-76'),
  23: replaceIconName('sombra'),
  24: replaceIconName('symmetra'),
  25: replaceIconName('torbjorn'),
  26: replaceIconName('tracer'),
  27: replaceIconName('widowmaker'),
  28: replaceIconName('winston'),
  29: replaceIconName('wrecking-ball'),
  30: replaceIconName('zarya'),
  31: replaceIconName('zenyatta')
}

const grabImage = id => images[id]

module.exports = grabImage
