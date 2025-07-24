import React, { forwardRef } from "react"
import { cn } from "@/utils/cn"

const Label = forwardRef(({ 
  className = "", 
  required = false,
  children,
  ...props 
}, ref) => {
  return (
    <label
      ref={ref}
      className={cn(
        "text-sm font-medium leading-none text-gray-700 mb-2 block",
        className
      )}
      {...props}
    >
      {children}
      {required && <span className="text-red-500 ml-1">*</span>}
    </label>
  )
})

Label.displayName = "Label"

export default Label