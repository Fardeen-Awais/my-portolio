"use client"

import * as React from "react"
import {NextUIProvider} from "@nextui-org/react";

export function ThemeProvider({ children}: any) {
  return <NextUIProvider>{children}</NextUIProvider>
}
