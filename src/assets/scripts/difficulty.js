export const determineDifficulty = (hp, damage) => {
  if (damage <= 12 && hp <= 70 || damage <= 7 && hp <= 130 || damage <= 30 && hp <= 25) {
    return 'easy'
  } else if (damage <= 15 && hp <= 80 || damage <= 9 && hp <= 140 || damage <= 30 && hp <= 35)   {
    return 'medium'
  } else {
    return 'hard'
  }
}