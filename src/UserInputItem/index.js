import './index.css'

const UserInputItem = ({value}) => (
  <li className="item">
    <p className="value">{value}</p>
    <p className="count">{value.length}</p>
  </li>
)

export default UserInputItem
