import styled from 'styled-components/macro'

export const MainContainer = styled.div`
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 3fr 1fr;
    // grid-gap: 0.5vw;
    height: 100vh;
    width: 100vw;
`

export const MapSection = styled.div`
    height: 100%;
    width: 100%;
`

export const EditorSection = styled.div`

`

export const MapNavbar = styled.div`
    display: flex;
    height: 50px;
    width: 100%;
    align-items: center;
    justify-content: space-between;
`
export const BrandContainer = styled.div`
    display: flex;
    margin-left: 10px;
`

export const Label = styled.div`
    font-weight: bold;
    font-size: 15px;
    margin: 0px 3px;
`

export const SearchContainer = styled.div`
    display: flex;
    margin-right: 10px;
`