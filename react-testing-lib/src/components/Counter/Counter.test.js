import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Provider } from "react-redux"
import { createReduxStore } from "../../store/store"
import { renderTestApp } from "../../tests/helpers/renderTestApp"
import { renderWithRedux } from "../../tests/helpers/renderWithRedux"
import Counter from "./Counter"

describe('Counter test', () => {
    test('Test router', async () => {
        const { getByTestId } = render(renderTestApp(null, {
            route: '/',
            initialState: {
                counter: { value: 10 }
            }
        }))
        const incrementBtn = getByTestId('increment-btn')
        expect(getByTestId('value-title')).toHaveTextContent('10')
        userEvent.click(incrementBtn)
        expect(getByTestId('value-title')).toHaveTextContent('11')
    })
})