const avatars = [
  'https://gamepedia.cursecdn.com/overwatch_gamepedia/d/d2/PI_Reinhardt_Scar.png',
  'https://gamepedia.cursecdn.com/overwatch_gamepedia/d/d6/PI_Warcraft_Jaina_Proudmoore.png',
  'https://gamepedia.cursecdn.com/overwatch_gamepedia/4/4c/PI_Warcraft_Alliance.png',
  'https://gamepedia.cursecdn.com/overwatch_gamepedia/0/0d/PI_Warcraft_Horde.png',
  'https://gamepedia.cursecdn.com/overwatch_gamepedia/c/ca/PI_D.Va_Bunny.png',
  'https://gamepedia.cursecdn.com/overwatch_gamepedia/8/83/PI_Combat_Medic.png',
  'https://gamepedia.cursecdn.com/overwatch_gamepedia/c/c8/PI_Hanzo_Shimada.png',
  'https://gamepedia.cursecdn.com/overwatch_gamepedia/4/43/PI_L%C3%BAcio_Kamb%C3%B4.png',
  'https://gamepedia.cursecdn.com/overwatch_gamepedia/a/a8/PI_Zenyatta_Harmony.png',
  'https://gamepedia.cursecdn.com/overwatch_gamepedia/8/85/PI_Widowmaker_Baiser.png'
]

const getAvatar = () => {
  const index = Math.floor(Math.random() * avatars.length)
  return avatars[index]
}

module.exports = {
  getAvatar
}
