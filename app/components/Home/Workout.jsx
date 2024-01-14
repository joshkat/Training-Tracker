export default function Workout({
  name,
  sets,
  notes,
  updateSets,
  updateNotes,
  removeWorkout,
}) {
  // sets is an array of objects that takes the shape of {lbs:int, reps:int}
  const handleSetChange = (setIndex, updatedSet) => {
    const newSets = [...sets];
    newSets[setIndex] = updatedSet;
    updateSets(newSets);
  };

  const handleAddSet = () => {
    const lastSet = sets[sets.length - 1] || { lbs: 0, reps: 0 }; // Get the last set or default to 0 if no sets exist
    const newSet = { ...lastSet }; // Create a new set based on the last set's data
    const newSets = [...sets, newSet];
    updateSets(newSets); // Update sets with the new set added
  };

  const handleRemoveLastSet = () => {
    if (sets.length > 0) {
      const newSets = sets.slice(0, -1); // Remove the last set
      updateSets(newSets); // Update sets with the last set removed
    }
  };

  return (
    <div className="card w-full bg-base-200 mb-5">
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <button
          className="btn btn-error btn-sm absolute right-3 top-2"
          onClick={removeWorkout}
        >
          Delete
        </button>
        <textarea
          type="text"
          className="input rounded-sm"
          placeholder="Notes on this routine"
          defaultValue={notes}
          onBlur={e => updateNotes(e.target.value)}
        />

        <div className="overflow-x-auto">
          <table className="table table-xs md:table-md">
            <thead>
              <tr>
                <th>Set</th>
                <th>lbs</th>
                <th>reps</th>
                <th>✅</th>
              </tr>
            </thead>
            <tbody>
              {sets.map((setObj, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>

                  <td>
                    <input
                      className="input input-xs w-20 lg:w-52 md:w-32 md:input-sm"
                      type="number"
                      value={setObj.lbs}
                      onChange={e =>
                        handleSetChange(index, {
                          ...setObj,
                          lbs: e.target.value,
                        })
                      }
                    />
                  </td>

                  <td>
                    <input
                      className="input input-xs w-20 lg:w-52 md:w-32 md:input-sm"
                      type="number"
                      value={setObj.reps}
                      onChange={e =>
                        handleSetChange(index, {
                          ...setObj,
                          reps: e.target.value,
                        })
                      }
                    />
                  </td>
                  <td>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex w-full">
          <button
            className="flex-grow btn btn-xs btn-success"
            onClick={handleAddSet}
          >
            Add Set
          </button>
          <div className="divider divider-horizontal bg-top-transparent"></div>
          <button
            className="flex-grow btn btn-xs btn-error"
            onClick={handleRemoveLastSet}
          >
            Remove Set
          </button>
        </div>
      </div>
    </div>
  );
}
