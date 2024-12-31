/* eslint-disable @typescript-eslint/no-explicit-any */
import { Editor } from "@tinymce/tinymce-react";
import { MutableRefObject } from "react";

declare type TextEditorComponentProps = {
  editorRef: MutableRefObject<any>;
};

export default function TextEditorComponent(props: TextEditorComponentProps) {
  const { editorRef } = props;

  const key = import.meta.env.VITE_TEXTEDITOR_KEY;

  return (
    <Editor
      apiKey={key}
      onInit={(_evt, editor) => (editorRef.current = editor)}
      initialValue="<p>This is the initial content of the editor.</p>"
      init={{
        height: 500,
        menubar: false,
        plugins: [
          "advlist",
          "autolink",
          "lists",
          "link",
          "image",
          "charmap",
          "preview",
          "anchor",
          "searchreplace",
          "visualblocks",
          "code",
          "fullscreen",
          "insertdatetime",
          "media",
          "table",
          "code",
          "help",
          "wordcount"
        ],
        toolbar:
          "undo redo | blocks | " +
          "bold italic forecolor | alignleft aligncenter " +
          "alignright alignjustify | bullist numlist outdent indent | " +
          "removeformat | help",
        content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
      }}
    />
  );
}
