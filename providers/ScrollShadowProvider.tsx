"use client"

import * as React from "react"
import {ScrollShadow} from "@nextui-org/react";

export function ShadowProvider({ children}: any) {
  return (
  <ScrollShadow hideScrollBar={true} size={100} className="w-full h-screen bg-pink-400">
    {children}
  </ScrollShadow>
)}
