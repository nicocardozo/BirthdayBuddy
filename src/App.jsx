import List from './List'
import data from './data'
import { useState } from 'react'

const App = () => {
  const [people, setPeople] = useState(data)

  const clearList = () => {
    setPeople([])
  }

  const birthday = people.length === 1 ? 'birthday' : 'birthdays'

  return (
    <main>
      <section className="container">
        <h3>
          {people.length} {birthday} today:
        </h3>
        <List people={people} />
        <button className="btn btn-block" onClick={clearList}>
          Clear Birthday List
        </button>
      </section>
    </main>
  )
}
export default App
