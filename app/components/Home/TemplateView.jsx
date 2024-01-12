import Template from "./Template";
export default function TemplateView() {
  return (
    // adjust the second value in the height calc depending on what other things are added to home
    <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-4 justify-items-center overflow-scroll h-[calc(100vh - (65px))] no-scrollbar">
      <Template
        title={"You know what they do to guys like us in prison"}
        summary={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur perferendis dolore exercitationem minus accusantium? Reprehenderit aliquid adipisci debitis vitae distinctio repellat repudiandae! Quis consequatur consequuntur quaerat cum earum nisi natus? "
        }
        lastTrained={"some date"}
      />
      <Template
        title={"You know what they do to guys like us in prison"}
        summary={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur perferendis dolore exercitationem minus accusantium? Reprehenderit aliquid adipisci debitis vitae distinctio repellat repudiandae! Quis consequatur consequuntur quaerat cum earum nisi natus? "
        }
        lastTrained={"some date"}
      />
      <Template
        title={"You know what they do to guys like us in prison"}
        summary={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur perferendis dolore exercitationem minus accusantium? Reprehenderit aliquid adipisci debitis vitae distinctio repellat repudiandae! Quis consequatur consequuntur quaerat cum earum nisi natus? "
        }
        lastTrained={"some date"}
      />
    </div>
  );
}
