import { useState } from "react"

export default function Dropdown({itensdropdown, refreshchars}) {
    return (
        <>
            <select name="selecttipo" onChange={(e) => refreshchars(e.target.value)}>
                {itensdropdown.map((item) => (
                    <option value={item}>{item}</option>
                ))}
            </select>
        </>
    )
}