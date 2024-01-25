"use client";

import { deleteTemplate } from "@/app/utils/firebaseInit";
import { formatDate } from "./helper/formatDate";
import { handleDeleteTemplate } from "./helper/handleDeleteTemplate";

export default function Template({
  title,
  summary,
  lastTrained,
  setCurrentTemplate,
  id,
  setTemplates,
}) {
  return (
    <>
      <div
        className="card w-44 h-40 md:h-52 lg:w-96 md:w-80 sm:w-72 bg-base-200 border-gray-500 border-2 overflow-scroll no-scrollbar"
        onClick={() => {
          setCurrentTemplate(id);
          document.getElementById("workout-routing-modal").showModal();
        }}
      >
        <div className="card-body p-3">
          <div className="flex justify-between">
            <h2 className="card-title overflow-scroll no-scrollbar whitespace-nowrap">
              {title}
            </h2>
            <details
              className="dropdown dropdown-end"
              onClick={e => {
                e.stopPropagation();
                console.log("not a");
              }}
            >
              <summary className="bg-info dark:bg-slate-800 w-8 rounded-lg text-center">
                •••
              </summary>
              <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box">
                <li>
                  <a>Edit</a>
                </li>
                <li>
                  <a>Rename</a>
                </li>
                <li>
                  <a onClick={() => handleDeleteTemplate(id, setTemplates)}>
                    Delete
                  </a>
                </li>
              </ul>
            </details>
          </div>
          <p className="overflow-scroll no-scrollbar h-11 md:h-24 text-xs">
            {summary}
          </p>
          <p className="text-xs h-1">
            🕑 <i>{formatDate(lastTrained)}</i>
          </p>
        </div>
      </div>
    </>
  );
}
