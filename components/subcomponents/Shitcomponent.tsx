import React from 'react'
// import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
// import { annotate } from 'rough-notation';
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
const Shitcomponent = () => {
//    const [show, setShow] = React.useState(false)
   
    return (
        <RoughNotationGroup show={true}>
        <RoughNotation type="underline" order="3">
          Hello,
        </RoughNotation>
        <RoughNotation type="circle" order="2">
          This is
        </RoughNotation>
        <RoughNotation type="underline" order="1">
          a Test
        </RoughNotation>
      </RoughNotationGroup>
    )
}

export default Shitcomponent