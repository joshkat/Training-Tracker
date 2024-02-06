import Image from "next/image";

export default function WorkoutListItem({
  workoutName,
  bodyPart,
  imageURL,
  equipment,
  instructions,
}) {
  return (
    <div className="collapse collapse-arrow bg-base-200 mb-5">
      <input type="radio" name="my-accordion-1" />
      <div className="collapse-title text-md md:text-xl font-medium">
        <div className="flex">
          <div>
            <Image
              className="rounded-md"
              src={`/guide${imageURL}`}
              height={150}
              width={150}
              alt={`img_for_${imageURL}`}
            />
          </div>
          <div className="ml-10 w-full">
            <p className="font-bold">{workoutName}</p>
            <p>💪 {bodyPart}</p>
            <p>🧰 {equipment}</p>
          </div>
        </div>
      </div>

      <div className="collapse-content">
        <ul className="list-decimal list-inside">
          {instructions.map((instruction, index) => (
            <li key={index} className="mb-1">
              {instruction}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
