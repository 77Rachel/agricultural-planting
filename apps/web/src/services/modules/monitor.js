import hyRequest from '../request'

export function getMonitor() {
  return hyRequest.get({
    url: "/mv/url?id=5436712",
  })
}