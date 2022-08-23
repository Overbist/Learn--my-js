import { useState } from "react"
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from "react-icons/ai"

export function Accordion({ item }) {
  const [isSelected, setIsSelected] = useState(false)

  function toggle() {
    setIsSelected((isSelected) => !isSelected)
  }

  return (
    <div className="accordion">
      <h3
        className={`accordion__title ${isSelected ? "accordion__title--open" : ""}`}
        onClick={toggle}
      >
        {item.question}
        <span className="accordion__icon">
          {isSelected ? <AiOutlineMinusSquare size={20} /> : <AiOutlinePlusSquare size={20} />}
        </span>
      </h3>
      <div className={`accordion__content ${isSelected ? "accordion__content--open" : ""}`}>
        {item.answer && <p className="accordion__row">{item.answer}</p>}
        {item.example && <p className="accordion__row">{item.example}</p>}
      </div>
    </div>
  )
}
