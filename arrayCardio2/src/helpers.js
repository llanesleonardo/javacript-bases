export const sum = (a, b) => a + b

/*INICIO*/
export const functionAtLeastThisYear = (year, thisYear) =>
  new Date().getFullYear() - year >= thisYear

/**FIN */

/*INICIO*/

export const getDaysLived = (year, month = 1, day = 1) => {
  const dayDiff = new Date().getTime() - new Date(year, month, day).getTime()
  const dayInMiliSeconds = 1000 * 3600 * 24
  return Math.ceil(dayDiff / dayInMiliSeconds)
}

/**FIN */

/*INICIO*/
export const functionUderThisYear = (year, thisYear) =>
  new Date().getFullYear() - year < thisYear
/**FIN */

/*INICIO*/
export const functionOlderThanThisYear = (year, thisYear) =>
  new Date().getFullYear() - year > thisYear
/**FIN */

/*INICIO*/
export const functionFindCommentId = (commentId, thisCommentID) =>
  commentId === thisCommentID

/**FIN */

/*INICIO*/
export const functionFindCommentIdAndDelete = (commentId, thisCommentID) =>
  commentId !== thisCommentID

/**FIN */
