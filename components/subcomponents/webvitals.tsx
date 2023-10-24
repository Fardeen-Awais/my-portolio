import { useInView } from "framer-motion";
import React, { useRef, useState } from "react";
import { CircularProgress } from "@nextui-org/react";

interface WebVitalsProps {
  value: number;
  isInView: boolean;
}

const WebVitals = ({ value,isInView }: any) => {
  
  const [values, setValue] = useState(value);
  console.log({value, isInView})

  // if (isInView === true) {
  //   const interval = setInterval(() => {
  //     setValue((v: number) => (v >= values ? values : v + 10));
  //   }, 1500);
  //   return () => clearInterval(interval);
  // }

  const interval = setInterval(() => {
    if (isInView === true) {
      setValue((v: number) => (v >= value ? value : v + 10));
      return () => {
        clearInterval(interval);
      };
    }
    else if (isInView === false) {
      setValue((v: number) => (v >= value ? 0 : v + 10));
      return () => {
        clearInterval(interval);
      };
    }
  }, 1500);

  // React.useEffect(() => {
  //   const interval = setInterval(() => {
  //     setValue((v:any) => (v >= value ? 0 : v + 10));
  //   }, 500);

  //   return () => clearInterval(interval);
  // }, [isInView]);

  return (
    <div className="relative h-full w-full">
      <CircularProgress
        aria-label="Loading..."
        classNames={{
          svg: "w-36 h-36 drop-shadow-md",
          track: "stroke-black/10",
          value: "text-3xl font-semibold text-green-900 dark:text-green-300",
          indicator: "shadow-xl",
        }}
        size="lg"
        value={values}
        color="success"
        showValueLabel={true}
      />
    </div>
  );
};

export default WebVitals;