import {HeaderNB} from "../components/header/HeaderNB";
import { Editor } from '@tinymce/tinymce-react';
import { Editor as TinyMCEEditor } from 'tinymce';
import React, {useRef, useState} from 'react';
import {Preview} from "../components/preview/Preview";



export const NovoPost = () => {
  const [textoBlog, setTextoBlog] = useState<string>("");
  const editorRef = useRef<TinyMCEEditor | null>(null);
  const apiKeyTinyMCE = process.env.TINYMCE_API_KEY
  const log = () => {
    if (editorRef.current) {
      setTextoBlog(editorRef.current.getContent());
    }
  };

  return(
    <div className={"w-screen h-screen  bg-[#CAE0E6]"}>
      <HeaderNB label={"NOVO POST - ADM"}/>

      <div>
        <Editor
          apiKey='3swcqhv7jcy0rpapjv0qmvlax9btdb4mguuu5yzaimrmse05'
          onInit={(_evt, editor) => editorRef.current = editor}
          // onChange={log}
          onEditorChange={log}

          init={{
            toolbar: 'undo redo | styles | bold italic | alignleft aligncenter alignright alignjustify | outdent indent',
            menubar: false
          }}
        />
    </div>

      <Preview textPreview={textoBlog} />

    </div>
  )

}
