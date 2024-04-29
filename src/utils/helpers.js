export function setCookie(cName, cValue, expDays) {
  let date = new Date()
  date.setTime(date.getTime() + expDays * 24 * 60 * 60 * 1000)
  const expires = `expires=${date.toUTCString()}`
  document.cookie = `${cName}=${cValue}; ${expires}; path=/; SameSite=Strict;`
}

export function getCookie(cName) {
  const name = `${cName}=`
  const cDecoded = decodeURIComponent(document.cookie)
  const cArr = cDecoded.split('; ')
  let res
  cArr.forEach((val) => {
    if (val.indexOf(name) === 0) res = val.substring(name.length)
  })
  return res
}

export function removeBodyScroll(modalIsOpen, width = 1440) {
  if (modalIsOpen && window.innerWidth < width) {
    document.body.classList.add('overflow-hidden')
  } else {
    document.body.classList.remove('overflow-hidden')
  }
}

export function animateProgressBar(elem, delay) {
  const end = Date.now() + delay
  const frame = () => {
    let timeLeft = Math.max(0, end - Date.now())
    elem.style.width = (100 * timeLeft) / delay + '%'
    if (timeLeft === 0) return
    requestAnimationFrame(frame)
  }
  requestAnimationFrame(frame)
}

export function formatDate(publishDate) {
  const options = {
    weekday: undefined,
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  }

  return new Date(publishDate).toLocaleDateString('en-us', options)
}

export function diffArrays(arr1, arr2) {
  if (!arr1 || !arr2) return

  const lArr1 = [...arr1]
  const lArr2 = [...arr2]

  return lArr1.sort().join(',') !== lArr2.sort().join(',')
}

export function isObjEmpty(obj) {
  if (!obj) return

  return JSON.stringify(obj) === '{}'
}
