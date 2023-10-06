"use client";

import AnimatedCursor from "react-animated-cursor";
import { isMobile } from "react-device-detect";
type Props = {};
const Cursor = (props: Props) => {
  console.log(isMobile);
  return (
    !isMobile && (
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        color="255, 255, 255"
        outerStyle={{
          border: "3px solid #fff",
        }}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
          {
            target: ".purple",
            innerScale: 0.8,
            outerStyle: {
              border: "4px solid #7a75ff",
            },
          },
          {
            target: ".gray",
            innerScale: 0.8,
            outerStyle: {
              border: "4px solid rgba(255,255,255,0.30)",
            },
          },
        ]}
      />
    )
  );
};
export default Cursor;
