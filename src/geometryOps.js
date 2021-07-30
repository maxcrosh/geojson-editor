import H from "@here/maps-api-for-javascript"

export const createLayer = () => new H.map.Group()

export const createMarker = (lat, lng, attrs={}) => {
    const marker = new H.map.Marker({lat: lat, lng: lng})
    marker.setData(attrs)
    return marker
}

// const createPolyline = (lat, lng, attrs) => {
//     const marker = new H.map.Marker({lat: lat, lng: lng})
//     marker.setData(attrs)
//     return marker
// }