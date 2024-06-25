import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom';
import '@testing-library/jest-dom/extend-expect';
import AddTodo from "./component//AddTodo.js";
import TodoList from "./component//todos.js";
import App from './App';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

 test('test that App component doesn\'t add a task without task name', () => {
    render(<App />);

    const initialTasks = screen.queryAllByRole('listitem');
    const addButton = screen.getByTestId('new-item-button');

    fireEvent.click(addButton);

    const updatedTasks = screen.queryAllByRole('listitem');
    expect(updatedTasks.length).toBe(initialTasks.length);
 });
