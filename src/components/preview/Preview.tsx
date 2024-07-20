import '../../App';


interface PreviewProps {
  textPreview: string;
}

export const Preview = (props: PreviewProps) => {
  return (
    <div className={"items-center justify-center flex flex-col"}>
      <center className={"text-2xl font-syne  "}>Preview</center>
      <div className={"w-2/3"} dangerouslySetInnerHTML={{__html: props.textPreview}}/>

      <div className={"w-2/3"}>
        <center className={"text-2xl font-syne"}>HTML</center>
        {props.textPreview}
      </div>
    </div>
  );
};
