export function setCookie(cName, cValue, expDays) {
  let date = new Date()
  date.setTime(date.getTime() + expDays * 24 * 60 * 60 * 1000)
  const expires = 'expires=' + date.toUTCString()
  document.cookie = cName + '=' + cValue + '; ' + expires + '; path=/'
}

export function getCookie(cName) {
  const name = cName + '='
  const cDecoded = decodeURIComponent(document.cookie)
  const cArr = cDecoded.split('; ')
  let res
  cArr.forEach((val) => {
    if (val.indexOf(name) === 0) res = val.substring(name.length)
  })
  return res
}
