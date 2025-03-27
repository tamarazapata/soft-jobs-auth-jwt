import { createContext, useState } from 'react'

const Context = createContext()

const ContextProvider = ({ children }) => {
    const [developer, setDeveloper] = useState(() => {
        const saved = sessionStorage.getItem('developer')
        return saved ? JSON.parse(saved) : null
})

const updateDeveloper = (data) => {
    setDeveloper(data)
    sessionStorage.setItem('developer', JSON.stringify(data))
}

return (
    <Context.Provider
        value={{
            getDeveloper: developer,
        setDeveloper: updateDeveloper
        }}
    >
        {children}
    </Context.Provider>
    )
}

export { ContextProvider }
export default Context
