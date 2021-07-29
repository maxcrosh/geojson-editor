import React, { useRef, useState, useEffect } from 'react'
import H from "@here/maps-api-for-javascript"

import { MapContainerStyled } from './style'

export const MapContainer = props => {
    const { apikey } = props

    const mapRef = useRef()
    const [map, setMap] = useState()

    useEffect(() => {
        if (!map) {
            const platform = new H.service.Platform({
                apikey: apikey
            })
    
            const layers = platform.createDefaultLayers()
            
            const tileService = platform.getMapTileService({type: 'base'})
            const tileLayer = tileService.createTileLayer('maptile', 'reduced.day', 256, 'png8', {})
            tileLayer.setMin(2)

            const map = new H.Map(
                mapRef.current,
                tileLayer,
                {
                    pixelRatio: window.devicePixelRatio,
                    center: {lat: 0, lng: 0},
                    zoom: 2,
                }
            )

            const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map))
            behavior.disable(H.mapevents.Behavior.Feature.FRACTIONAL_ZOOM)

            const ui = new H.ui.UI(map)

            // Map default layers customization 
            const mapSettingsControl = new H.ui.MapSettingsControl({
                baseLayers: [{
                    label: 'Reduced map',
                    layer: tileLayer
                },
                {
                    label: 'Normal day',
                    layer: layers.raster.normal.map
                },
                {
                    label: 'Satellite',
                    layer: layers.raster.satellite.map
                }, 
                {
                    label: 'Normal night',
                    layer: layers.raster.normal.basenight
                }, 
                {
                    label: 'Base night',
                    layer: layers.raster.normal.xbasenight
                }],
                alignment: "right-bottom"
            })
    
            ui.addControl('mapsettings', mapSettingsControl)

            // Zoom Control
            const zoomControl = new H.ui.ZoomControl({fractionalZoom: false, alignment: "right-middle"})
            ui.addControl('zoom', zoomControl)

            // DZoom rectange
            const zoomRectangle = new H.ui.ZoomRectangle({alignment: "right-middle"})
            ui.addControl('zoomrectange', zoomRectangle)

            // Distance Measurement control
            const scaleBar = new H.ui.ScaleBar({alignment: "bottom-right"})
            ui.addControl('scalebar', scaleBar)

            window.addEventListener('resize', () => map.getViewPort().resize())
            
            setMap(map)
        }
    }, [map, apikey])

    return <MapContainerStyled ref={mapRef}/>
}