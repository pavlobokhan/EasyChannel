export const $log = (log) => {
  console.log(log)
  return null
}

export const $apiUrl = process.env.VUE_APP_API_BASE_URL + '/'

export const $get = (object, path, value = null) => {
  return path.toString().split('.').reduce((prevObj, key) => prevObj && prevObj[key], object) || value
}