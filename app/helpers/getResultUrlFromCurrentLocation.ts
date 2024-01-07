import { CurrentLocation } from '@/app/types'

const FILTER_OUT = 'FILTER_OUT'

export default function getResultUrlFromCurrentLocation(
  currentLocation: CurrentLocation
) {
  const urlParts = [
    '/result',
    encodeURIComponent(currentLocation.country || '-'),
    encodeURIComponent(currentLocation.administrativeAreaLevel1 || '-'),
    encodeURIComponent(currentLocation.administrativeAreaLevel2 || '-'),
    encodeURIComponent(currentLocation.locality || '-'),
    encodeURIComponent(currentLocation.postalCode || '-'),
  ]

  return urlParts.join('/')
}
