// import React from 'react'

interface IProps {
    text: string,
}


export default function Greeting({ text }: IProps) {
    return (
        <div>Hello, {text}!</div>
    )
}