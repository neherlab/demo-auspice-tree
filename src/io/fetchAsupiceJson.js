import Axios from 'axios'

export function takeFirstMaybe(maybeArray) {
  if (!Array.isArray(maybeArray)) {
    return maybeArray
  }

  if (maybeArray.length > 0) {
    return maybeArray[0]
  }

  return undefined
}

export async function fetchAuspiceJson(router) {
  const jsonUrl = takeFirstMaybe(router.query?.['json'])
  if (jsonUrl) {
    try {
      const { data } = await Axios.get(jsonUrl)
      return data
    } catch (error) {
      console.error(error)
      // TODO: display error message to the user
    }
  }
  return undefined
}
