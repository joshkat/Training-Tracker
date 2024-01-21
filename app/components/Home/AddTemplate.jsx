import { addTemplateToUser } from "@/app/utils/firebaseInit";
import { v4 as uuidv4 } from "uuid";
export default function AddTemplate({ templates, setTemplates }) {
  function convertToUnix() {
    const date = new Date();
    const milliseconds = date.getTime();
    const seconds = Math.floor(milliseconds / 1000);
    const nanoseconds = (milliseconds % 1000) * 1e6;

    return { nanoseconds, seconds };
  }

  async function handleAddTemplate() {
    const title = document.querySelector("#add-template-modal input").value;
    const summary = document.querySelectorAll("#add-template-modal textarea")[0]
      .value;
    const workoutList = document
      .querySelectorAll("#add-template-modal textarea")[1]
      .value.split(",");
    const uuid = uuidv4();
    const lastTrained = convertToUnix();
    const newTemplate = {
      id: uuid,
      lastTrained: lastTrained,
      summary: summary,
      title: title,
    };
    const tempTemplates = [...templates, newTemplate];

    setTemplates(null);
    addTemplateToUser(newTemplate, workoutList)
      .then(() => {
        setTemplates(tempTemplates); // once template added set it on frontend as well
      })
      .catch(() => {
        console.error("Something didn't go to plan");
      });
  }

  function clearModal() {
    document.querySelector("#add-template-modal input").value = "";
    document.querySelectorAll("#add-template-modal textarea")[0].value = "";
    document.querySelectorAll("#add-template-modal textarea")[1].value = "";
  }
  return (
    <div className="flex justify-between ml-5 mr-5">
      <h2 className="text-xl font-bold">Templates</h2>
      <button
        className={`btn btn-sm ${templates === null ? "btn-disabled" : ""}`}
        onClick={() => {
          document.getElementById("add-template-modal").showModal();
        }}
      >
        Add Template
      </button>
      <dialog id="add-template-modal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Create Template</h3>
          <p className="py-1">Enter template info below</p>
          <div>
            <input
              type="text"
              className="input input-sm input-bordered w-full"
              placeholder="Name"
            />
            <textarea
              type="text"
              className="input input-bordered mt-2 w-full"
              placeholder="Summary"
            />
            <textarea
              type="text"
              className="input input-bordered mt-2 w-full h-32"
              placeholder={`Comma seperated list of exercises\n(e.g. Flat Bench,Chest Flies,...)\nNot following this input style WILL cause weird behavior`}
            />
          </div>
          <div className="modal-action">
            <form method="dialog">
              <button
                className="btn btn-success btn-sm"
                onClick={handleAddTemplate}
              >
                Add
              </button>
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-error btn-sm" onClick={clearModal}>
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}