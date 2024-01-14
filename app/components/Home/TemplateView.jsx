"use client";
import Template from "./Template";
export default function TemplateView({ setCurrentTemplate }) {
  const temp = [0, 1, 2, 3];
  return (
    // adjust the second value in the height calc depending on what other things are added to home
    <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-4 justify-items-center overflow-scroll h-[calc(100vh - (65px))] no-scrollbar">
      {temp.map((val, index) => (
        <Template
          title={"You know what they do to guys like us in prison"}
          summary={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur perferendis dolore exercitationem minus accusantium? Reprehenderit aliquid adipisci debitis vitae distinctio repellat repudiandae! Quis consequatur consequuntur quaerat cum earum nisi natus? "
          }
          lastTrained={"some date"}
          index={index}
          key={index}
          setCurrentTemplate={setCurrentTemplate}
        />
      ))}
    </div>
  );
}
