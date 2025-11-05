import { render, screen, fireEvent } from '@testing-library/react'
import App from '../../App'

describe('App', () => {
    test('renders Vite + React heading', () => {
        render(<App />)
        expect(screen.getByText(/Vite \+ React/i)).toBeInTheDocument()
    })

    test('renders counter and increments on click', () => {
        render(<App />)

        // Find the button
        const button = screen.getByRole('button', { name: /count is/i })
        expect(button).toHaveTextContent('count is 0')

        // Simulate a click
        fireEvent.click(button)
        expect(button).toHaveTextContent('count is 1')

        // Simulate another click
        fireEvent.click(button)
        expect(button).toHaveTextContent('count is 2')
    })


})
