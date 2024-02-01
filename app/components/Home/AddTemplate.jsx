import { useState } from "react";
import { handleAddTemplate } from "./helper/handleAddTemplate";
import Error from "../Error";
import { ensureNonEmptyInputs } from "./helper/ensureNonEmptyInputs";

export default function AddTemplate({ templates, setTemplates }) {
  return (
    <div className="flex justify-between ml-5 mr-5">
      <h2 className="text-xl font-bold">Templates</h2>
      <button
        className={`btn btn-sm ${
          templates === null ? "btn-disabled" : ""
        } to-disable`}
        onClick={() => {
          document.getElementById("add-template-modal").showModal();
        }}
      >
        Add Template
      </button>
      <AddTemplateModal templates={templates} setTemplates={setTemplates} />
    </div>
  );
}

function AddTemplateModal({ templates, setTemplates }) {
  const [workoutList, setWorkoutList] = useState(new Set());

  function clearModal() {
    document.querySelectorAll("#add-template-modal input")[0].value = "";
    document.querySelectorAll("#add-template-modal input")[1].value = "";
    document.querySelector("#add-template-modal textarea").value = "";
    setWorkoutList(new Set());
  }

  return (
    <dialog id="add-template-modal" className="modal">
      <div className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-[555px]">
        <Error
          errorText={
            "You need to add at least one workout to create a routine!!"
          }
          id={"at_least_one_workout"}
        />
        <Error
          errorText={"You need to have a name for your template!!"}
          id={"name_required"}
        />
      </div>
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
          <div className="join w-full mt-2 mb-2">
            <input
              type="text"
              className="input input-sm input-bordered w-full join-item"
              placeholder="Workout Name"
              id="workout_name"
            />
            <button
              className="btn btn-sm join-item btn-success"
              onClick={() => {
                const workoutName =
                  document.getElementById("workout_name").value;
                const newList = new Set([...workoutList]);
                newList.add(workoutName);
                setWorkoutList(newList);
                document.getElementById("workout_name").value = "";
              }}
            >
              Add Workout
            </button>
          </div>
          <WorkoutList list={workoutList} setList={setWorkoutList} />
        </div>
        <div className="modal-action">
          <form method="dialog">
            <button
              className="btn btn-success btn-sm"
              onClick={e => {
                const canContinue = ensureNonEmptyInputs(e, workoutList);
                if (canContinue) {
                  handleAddTemplate(templates, setTemplates, [...workoutList]);
                  clearModal();
                }
              }}
            >
              Create
            </button>
            <button className="btn btn-error btn-sm" onClick={clearModal}>
              Close
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
}

function WorkoutList({ list, setList }) {
  return (
    <div className="collapse collapse-arrow bg-base-200 text-black">
      <input type="checkbox" className="peer" defaultChecked />
      <div className="collapse-title bg-info">Workout List</div>
      <div className="collapse-content bg-info">
        {list.size === 0 ? (
          <h1 className="text-xl text-center">Your list is empty!!</h1>
        ) : (
          <ol className="list-decimal list-inside">
            {[...list].map((value, index) => (
              <li key={index} className="mb-2">
                <span className="join">
                  <span className="join-item pl-2 bg-white w-52 overflow-scroll flex items-center">
                    {value}
                  </span>
                  <button
                    className="join-item btn btn-sm"
                    onClick={() => {
                      const newList = new Set([...list]);
                      newList.delete(value);
                      console.log(newList);
                      setList(newList);
                    }}
                  >
                    ❌
                  </button>
                </span>
              </li>
            ))}
          </ol>
        )}
      </div>
    </div>
  );
}
