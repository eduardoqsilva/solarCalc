import { IconContext, IconProps } from "@phosphor-icons/react"
import { ChangeEvent, useState } from "react"
import { colors } from "../../styles/variables"
import { InputWrapperStyled, WarningStyled } from "./inputs.styled"



type SetState = React.Dispatch<React.SetStateAction<any>>

interface InputNumber {
  label: string
  icon: React.ReactElement<IconProps>
  getValue: [SetState, any, string] | SetState
  requered?: boolean
  characters?: {min: number, max: number}
  placeholder: string
  name: string
  isValue: string
}

export function InputNumber({label, icon, requered, characters, getValue, placeholder, name, isValue}: InputNumber) {

  const [warning, setWarning] = useState(false)

  const msg = () => {
    const m = characters 
      ? `O valor deve estar entre ${characters.min} e ${characters.max}`
      : `Verifique os valores`
    return m
  }

  function isValid(text:string, currentTarget:any) {
    
    if(characters) { 
      if(text) {
        if (Number(text) >= characters.min && Number(text) <= characters.max) {
          currentTarget.setCustomValidity('')
          setWarning(false)
        }else {
          currentTarget.setCustomValidity(msg())
          setWarning(true)
        }
      }else {
        setWarning(true)
        currentTarget.setCustomValidity(msg())
      }
    } else {
      if(text !== '') {
        setWarning(false)
      }else{
        setWarning(true)
        currentTarget.setCustomValidity(msg())
      }
    }
  }
  
  function setValue(e:ChangeEvent<HTMLInputElement>) {
    const text = e.currentTarget.value
    
    isValid(text, e.currentTarget)
    
    if(Array.isArray(getValue)) {
      const [setValueOut, valueOut, key] = getValue
      setValueOut({
        ...valueOut,
        [key]: text
      })
    }else {
      getValue(text)
    }
  }
  

  return (
    <div>
      <InputWrapperStyled warning={warning} >
        <label>{label}:</label>
        <IconContext.Provider
          value={{
            size: 28,
            color: warning ? colors.red : colors.yellow,
            weight: "regular"
          }}
        >
          {icon}
        </IconContext.Provider>
        <input
          type="number"
          placeholder={placeholder}
          name={name}
          step={0.0000001}
          required={requered}
          value={isValue}
          onChange={setValue}
          onInvalid={setValue}
          onBlur={setValue}
        />
      </InputWrapperStyled>
      <WarningStyled warning={warning} >
        {msg()}
      </WarningStyled>
    </div>
  )
}