import React from 'react'
import AceEditor from "react-ace"

import "ace-builds/src-noconflict/mode-json"
import "ace-builds/src-noconflict/theme-tomorrow"

export const CodeEditor = props => {
    const {
      value,
      setGeojson,
    } = props

    const validateJSON = json_data => {
      try {
        let parsedJSON = JSON.parse(json_data)
        console.log('JSON successfully parsed')
        return parsedJSON
  
      } catch (err) {
        console.log(err.message)
        return false
      }
    } 

    const onChange = json_data => {
      console.log(json_data)
      validateJSON(json_data)
      setGeojson(json_data)
    }

    return (
        <AceEditor
          mode="json"
          theme="tomorrow"
          fontSize={15}
          width='100%'
          height='100%'
          name="json_code_editor"
          editorProps={{ $blockScrolling: true }}
          setOptions={{ useWorker: false }}
          value={value}
          onChange={onChange}
        />
    )
}