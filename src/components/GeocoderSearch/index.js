import React from 'react'

import {
    SearchInput,
} from './style'

export const GeocoderSearch = props => {
    const { placeholder } = props
    
    return <SearchInput placeholder={placeholder}/>
}