import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import UserInputItem from '../UserInputItem'
import './index.css'

const CharacterCounter = () => {
  const [text, setText] = useState('')
  const [inputs, setInputs] = useState([]) // {id, value} objects

  const onAdd = () => {
    if (text.trim() === '') return
    setInputs(prev => [...prev, {id: uuidv4(), value: text}])
    setText('') // reset box
  }

  const onChange = e => setText(e.target.value)

  const noInputs = inputs.length === 0

  return (
    <div className="app-container">
      <h1 className="title">Character Counter</h1>

      <div className="input-card">
        <input
          type="text"
          value={text}
          onChange={onChange}
          placeholder="Enter text here"
          className="text-input"
        />
        <button type="button" onClick={onAdd} className="add-btn">
          Add
        </button>
      </div>

      {noInputs ? (
        <div className="no-view">
          <img
            src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
            alt="no user inputs"
            className="no-img"
          />
        </div>
      ) : (
        <ul className="list">
          {inputs.map(item => (
            <UserInputItem key={item.id} value={item.value} />
          ))}
        </ul>
      )}
    </div>
  )
}

export default CharacterCounter
