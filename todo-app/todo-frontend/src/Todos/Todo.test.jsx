// @vitest-environment jsdom
import '@testing-library/jest-dom/vitest'
import { describe, it, expect, vi, afterEach } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Todo from './Todo'

afterEach(cleanup)

describe('Todo component', () => {
  it('renders todo text and status', () => {
    const todo = {
      _id: '1',
      text: 'Learn about containers',
      done: false
    }

    render(
      <Todo
        todo={todo}
        deleteTodo={() => {}}
        completeTodo={() => {}}
      />
    )

    expect(screen.getByText('Learn about containers')).toBeInTheDocument()
    expect(screen.getByText('This todo is not done')).toBeInTheDocument()
  })

  it('calls deleteTodo when Delete is clicked', async () => {
    const user = userEvent.setup()
    const todo = {
      _id: '1',
      text: 'Learn about containers',
      done: false
    }
    const deleteTodo = vi.fn()

    render(
      <Todo
        todo={todo}
        deleteTodo={deleteTodo}
        completeTodo={() => {}}
      />
    )

    await user.click(screen.getByRole('button', { name: 'Delete' }))

    expect(deleteTodo).toHaveBeenCalledWith(todo)
  })

  it('calls completeTodo when Set as done is clicked', async () => {
    const user = userEvent.setup()
    const todo = {
      _id: '1',
      text: 'Learn about containers',
      done: false
    }
    const completeTodo = vi.fn()

    render(
      <Todo
        todo={todo}
        deleteTodo={() => {}}
        completeTodo={completeTodo}
      />
    )

    await user.click(screen.getByRole('button', { name: 'Set as done' }))

    expect(completeTodo).toHaveBeenCalledWith(todo)
  })
})
