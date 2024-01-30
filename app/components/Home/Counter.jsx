/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import Image from "next/image";

export default function Counter({ count, setCount, isActive }) {
  useEffect(() => {
    let interval;
    if (isActive) {
      interval = setInterval(() => {
        setCount(prevCount => prevCount + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isActive]);

  function formatTime(time) {
    // Pad single digit numbers with a leading zero
    return time.toString().padStart(2, "0");
  }

  return (
    <div className="flex bg-base-200 px-3 rounded-md gap-2">
      <Image src="/timer.svg" height={20} width={20} alt="⏱" />
      <div className="countdown font-mono text-xl items-center">
        {count >= 3600 ? (
          <>
            <span style={{ "--value": formatTime(Math.floor(count / 3600)) }}>
              {formatTime(Math.floor(count / 3600))}
            </span>
            :
          </>
        ) : (
          ""
        )}
        <span
          style={{ "--value": formatTime(Math.floor((count % 3600) / 60)) }}
        >
          {formatTime(Math.floor((count % 3600) / 60))}
        </span>
        :
        <span style={{ "--value": formatTime(count % 60) }}>
          {formatTime(count % 60)}
        </span>
      </div>
    </div>
  );
}
