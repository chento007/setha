"use client";
import { useTheme } from 'next-themes'
import React, { useState, useEffect } from 'react'

export default function ThemeSwitcher() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false)
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }
    return (
        <div>
            the current theme is :{theme}
            <button onClick={() => setTheme("light")}>Light mode</button>
            <button onClick={() => setTheme("dark")}>Dark mode</button>=
        </div>
    )
}
