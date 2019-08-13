'use strict'

const baseIconUrl = 'https://d1u1mce87gyfbn.cloudfront.net/hero/name/icon-portrait.png'
const baseFullUrl = 'https://d1u1mce87gyfbn.cloudfront.net/hero/name/full-portrait.png'

const replaceIconName = newName => baseIconUrl.replace('name', newName)
const replaceFullName = newName => baseFullUrl.replace('name', newName)

const images = {
  1: {
    icon: replaceIconName('ana'),
    full: replaceFullName('ana')
  },
  2: {
    icon: replaceIconName('ashe'),
    full: replaceFullName('ashe')
  },
  3: {
    icon: replaceIconName('baptiste'),
    full: replaceFullName('baptiste')
  },
  4: {
    icon: replaceIconName('bastion'),
    full: replaceFullName('bastion')
  },
  5: {
    icon: replaceIconName('brigitte'),
    full: replaceFullName('brigitte')
  },
  6: {
    icon: replaceIconName('dva'),
    full: replaceFullName('dva')
  },
  7: {
    icon: replaceIconName('doomfist'),
    full: replaceFullName('doomfist'),
  },
  8: {
    icon: replaceIconName('genji'),
    full: replaceFullName('genji')
  },
  9: {
    icon: replaceIconName('hanzo'),
    full: replaceFullName('hanzo')
  },
  10: { 
    icon: replaceIconName('junkrat'),
    full: replaceFullName('junkrat')
  },
  11: { 
    icon: replaceIconName('lucio'),
    full: replaceFullName('lucio')
  },
  12: { 
    icon: replaceIconName('mccree'),
    full: replaceFullName('mccree')
  },
  13: { 
    icon: replaceIconName('mei'),
    full: replaceFullName('mei')
  },
  14: { 
    icon: replaceIconName('mercy'),
    full: replaceFullName('mercy')
  },
  15: { 
    icon: replaceIconName('moira'),
    full: replaceFullName('moira')
  },
  16: { 
    icon: replaceIconName('orisa'),
    full: replaceFullName('orisa')
  },
  17: { 
    icon: replaceIconName('pharah'),
    full: replaceFullName('pharah')
  },
  18: { 
    icon: replaceIconName('reaper'),
    full: replaceFullName('reaper')
  },
  19: { 
    icon: replaceIconName('reinhardt'),
    full: replaceFullName('reinhardt')
  },
  20: { 
    icon: replaceIconName('roadhog'),
    full: replaceFullName('roadhog')
  },
  21: { 
    icon: replaceIconName('sigma'),
    full: replaceFullName('sigma')
  },
  22: { 
    icon: replaceIconName('soldier-76'),
    full: replaceFullName('soldier-76')
  },
  23: { 
    icon: replaceIconName('sombra'),
    full: replaceFullName('sombra')
  },
  24: { 
    icon: replaceIconName('symmetra'),
    full: replaceFullName('symmetra')
  },
  25: { 
    icon: replaceIconName('torbjorn'),
    full: replaceFullName('torbjorn')
  },
  26: { 
    icon: replaceIconName('tracer'),
    full: replaceFullName('tracer')
  },
  27: { 
    icon: replaceIconName('widowmaker'),
    full: replaceFullName('widowmaker')
  },
  28: { 
    icon: replaceIconName('winston'),
    full: replaceFullName('winston')
  },
  29: { 
    icon: replaceIconName('wrecking-ball'),
    full: replaceFullName('wrecking-ball')
  },
  30: { 
    icon: replaceIconName('zarya'),
    full: replaceFullName('zarya')
  },
  31: { 
    icon: replaceIconName('zenyatta'),
    full: replaceFullName('zenyatta')
  }
}

const grabImage = (id, full=false) => {
  const image = images[id]
  return full ? image.icon : image.full
}

module.exports = grabImage
