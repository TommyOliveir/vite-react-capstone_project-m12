
import { useState,  useRef } from 'react'

function useHover() {
    const [hovered, setHovered] = useState(false)
    const ref = useRef(null)

    function enter() {
        setHovered(true)
    }

    function leave() {
        setHovered(false)
    }

    
    return [hovered, enter, leave]

}

export default useHover
