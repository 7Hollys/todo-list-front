export default (date: string) => {
  const createdDay = new Date(date)
  const today = new Date()

  const yy = createdDay.getFullYear().toString()
  const mm = () => {
    if (createdDay.getMonth().toString().length < 2) {
      return `0${createdDay.getMonth()}`
    } else {
      return createdDay.getMonth()
    }
  }
  const dd = () => {
    if (createdDay.getDate().toString().length < 2) {
      return `0${createdDay.getDate()}`
    } else {
      return createdDay.getDate()
    }
  }

  const SECOND = 60 - 1
  const MINUTE = 3600 - 1
  const HOUR = 86400 - 1
  const THREE_DAY = 259200 - 1

  const elapsedTime = (today.getTime() - createdDay.getTime()) / 1000

  if (elapsedTime < SECOND) {
    return `${elapsedTime.toFixed(0)}초 전`
  }
  if (elapsedTime < MINUTE) {
    return `${(elapsedTime / SECOND).toFixed(0)}분 전`
  }
  if (elapsedTime < HOUR) {
    return `${(elapsedTime / MINUTE).toFixed(0)}시간 전`
  }
  if (elapsedTime < THREE_DAY) {
    return `${(elapsedTime / HOUR).toFixed(0)}일 전`
  } else {
    return `${yy}.${mm()}.${dd()}`
  }
}
