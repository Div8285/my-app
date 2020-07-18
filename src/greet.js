import React from 'react'

function Person({props}) {
    return (
        (props.person.value).filter(a =>
            a.toLowerCase().includes(props.t.toLowerCase())
        )
    )
}

export default Person
