import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { renderWithRouter } from "../../tests/helpers/renderWithRouter"
import NavBar from "./NavBar"



describe('USERS TEST', () => {
    test('test user link', async () => {
        render(renderWithRouter(<NavBar />))
        const userslink = screen.getByTestId('user-link')
        userEvent.click(userslink)
        expect(screen.getByTestId('users-page')).toBeInTheDocument()
    })

    test('test about link', async () => {
        render(renderWithRouter(<NavBar />))
        const aboutlink = screen.getByTestId('about-link')
        userEvent.click(aboutlink)
        expect(screen.getByTestId('about-page')).toBeInTheDocument()
    })

    test('test main link', async () => {
        render(renderWithRouter(<NavBar />))
        const mainlink = screen.getByTestId('main-link')
        userEvent.click(mainlink)
        expect(screen.getByTestId('main-page')).toBeInTheDocument()
    })
})