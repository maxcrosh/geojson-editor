// Node modules
import React, { useState } from 'react'

// Custom components
import { MapContainer } from '../MapContainer'
import { GeocoderSearch } from '../GeocoderSearch'
import { CodeEditor } from '../CodeEditor'

// Config
import { API_KEY } from '../../config'


// Styled components
import { 
  MainContainer,
  MapSection, 
  EditorSection, 
  MapNavbar,
  BrandContainer,
  SearchContainer,
  Label,
} from './style'

// Icons
import {
  IoMapSharp,
  IoSearchSharp,
} from 'react-icons/io5'

export const App = props => {
  

  const [geojson, setGeojson] = useState(`{\n  "type": "FeatureCollection",\n  "features": []\n}`)

  const icon_size = 20

  return (
    <MainContainer>
      <MapSection>
        <MapNavbar>
          <BrandContainer>
            <IoMapSharp size={icon_size}/>
            <Label>Geojson Editor</Label>
          </BrandContainer>
          <SearchContainer>
            <IoSearchSharp size={icon_size}/>
            <GeocoderSearch placeholder='Address search'/>
          </SearchContainer>
        </MapNavbar>
        <MapContainer apikey={API_KEY}/>
      </MapSection>
      <EditorSection>
        <CodeEditor value={geojson}/>
      </EditorSection>
    </MainContainer>
  )
}
