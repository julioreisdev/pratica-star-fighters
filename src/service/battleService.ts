import axios from "axios"

export default async function battleService(firstUser: string, secondUser: string) {
  let dataFirstUser = []
  let dataSecondUser = []

  try {
    const promiseFirstUser = await axios.get(`https://api.github.com/users/${firstUser}/repos`);
    dataFirstUser = promiseFirstUser.data;
    const promiseSecondUser = await axios.get(`https://api.github.com/users/${secondUser}/repos`);
    dataSecondUser = promiseSecondUser.data;
  } catch (error) {
    throw { error }
  }

  let countFirst: number = 0
  let countSecond: number = 0

  for (let i = 0; i < dataFirstUser.length; i++) {
    countFirst = countFirst + Number(dataFirstUser[i]['stargazers_count'])
    countSecond = countSecond + Number(dataSecondUser[i]['stargazers_count'])
  }

  let winner: string | null = ''
  let loser: string | null = ''
  let draw: boolean = false

  if (countFirst > countSecond) {
    winner = firstUser
    loser = secondUser
    draw = false
  } else if (countSecond > countFirst) {
    winner = secondUser
    loser = firstUser
    draw = false
  } else {
    winner = null
    loser = null
    draw = true
  }

  const result = {
    winner,
    loser,
    draw,
  }

  return result
}