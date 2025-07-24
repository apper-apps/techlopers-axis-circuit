import React from "react"
import Label from "@/components/atoms/Label"
import Input from "@/components/atoms/Input"
import Textarea from "@/components/atoms/Textarea"

const FormField = ({ 
  label, 
  required = false, 
  error = null, 
  type = "text",
  multiline = false,
  className = "",
  ...props 
}) => {
  const InputComponent = multiline ? Textarea : Input
  
  return (
    <div className={`space-y-2 ${className}`}>
      <Label required={required}>
        {label}
      </Label>
      <InputComponent
        type={type}
        error={!!error}
        {...props}
      />
      {error && (
        <p className="text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  )
}

export default FormField