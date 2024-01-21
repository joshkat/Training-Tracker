import Template from "./Template";
export default function TemplateView({ templates, setCurrentTemplate }) {
  return (
    // adjust the second value in the height calc depending on what other things are added to home
    <>
      {templates === null ? (
        <span className="loading loading-spinner w-24 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-4 justify-items-center overflow-scroll h-[calc(100vh - (65px))] no-scrollbar">
          {templates.map(templateObj => (
            <Template
              title={templateObj.title}
              summary={templateObj.summary}
              lastTrained={templateObj.lastTrained.seconds}
              index={templateObj.id}
              key={templateObj.id}
              setCurrentTemplate={setCurrentTemplate}
            />
          ))}
        </div>
      )}
    </>
  );
}
