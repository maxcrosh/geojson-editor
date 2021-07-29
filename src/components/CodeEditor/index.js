import React from 'react'
import AceEditor from "react-ace"

import "ace-builds/src-noconflict/mode-json"
import "ace-builds/src-noconflict/theme-tomorrow"

export const CodeEditor = props => {
    const { value } = props

    return (
        <AceEditor
          mode="json"
          theme="tomorrow"
          // onChange={onChange}
          fontSize={15}
          value={value}
          width='100%'
          height='100%'
          name="json_code_editor"
          editorProps={{ $blockScrolling: true }}
        />
    )
}