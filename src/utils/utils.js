/**
 * Fetches data from network resource
 * @param {string} url - network URL
 * @param {function} successCallback - callback function on success
 */

export function getData(url,successCallback) {
  let request = new XMLHttpRequest()
  request.onreadystatechange = (e) => {
    if (request.readyState !== 4) {
      return;
    }
    if (request.status === 200) {
      let res = JSON.parse(request.responseText)
      if (typeof successCallback === 'function') {
        successCallback(res)
        return true
      }
    } else {
      console.warn('error')
      return false
    }
  }
  request.open('GET',url)
  request.send()
}