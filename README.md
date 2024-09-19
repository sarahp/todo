
# Todo App

A simple Todo App built with React, TypeScript, and Axios, which fetches data from the JSONPlaceholder API and displays it in a paginated table. The app is designed to be responsive, mobile-friendly, and handles error and loading states gracefully. It uses **Recoil** for state management to provide an efficient and scalable way to manage application state.

## Features

- **React** and **TypeScript**: Ensures a strongly typed application with reusable components.
- **Axios**: Handles HTTP requests to fetch todo data from the JSONPlaceholder API.
- **Recoil**: Manages the global state of todos, loading, error, and pagination.
- **Pagination**: View the todos in chunks of configurable sizes (10-40 rows).
- **Responsive Design**: Works well on mobile and desktop screens.
- **Error Handling**: Gracefully handles API errors and loading states.

## Getting Started

Follow these instructions to get the project up and running on your local machine.

### Prerequisites

- Node.js (v12.x or later)
- npm (v6.x or later)

### Installation

1. Clone the repository:

   \`\`\`bash
   git clone https://github.com/your-username/todo-app.git
   cd todo-app
   \`\`\`

2. Install the dependencies:

   \`\`\`bash
   npm install
   \`\`\`

3. Create a `.env` file in the root of the project and add the following:

   \`\`\`bash
   REACT_APP_TODO_API=https://jsonplaceholder.typicode.com/todos
   \`\`\`

4. Start the development server:

   \`\`\`bash
   npm start
   \`\`\`

5. Open [http://localhost:3000](http://localhost:3000) to view the app in the browser.

### Running Tests

To run the tests (if you have set up testing), use the following command:

\`\`\`bash
npm test
\`\`\`

## Recoil - State Management

This application uses **Recoil** for state management, which is a modern and efficient state management library for React applications. Recoil allows for a fine-grained reactive state model where state is shared across components with minimal boilerplate.

Recoil atoms store the state, while selectors compute derived state and offer flexibility to handle more complex logic in a scalable way. In this Todo App, Recoil atoms are used to manage:

- The list of todos
- Loading and error states
- Pagination details like current page and items per page

To learn more about Recoil, visit the official documentation:

- [Recoil GitHub Repository](https://github.com/facebookexperimental/Recoil)
- [Recoil Documentation](https://recoiljs.org/)

## File Structure

\`\`\`bash
.
├── src/
│   ├── components/
│   │   ├── TodoTable.tsx       # Main component to display todo items
│   ├── recoil/
│   │   ├── atoms.ts            # Recoil atoms for managing global state
│   │   ├── types.ts            # TypeScript types
│   ├── services/
│   │   ├── api.ts              # Axios service to fetch todos
├── .env                        # Environment variables
├── package.json
├── README.md                   # Project documentation
└── tsconfig.json               # TypeScript configuration
\`\`\`

## Built With

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
- [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript at Any Scale.
- [Axios](https://axios-http.com/) - Promise based HTTP client for the browser and Node.js.
- [Recoil](https://recoiljs.org/) - State management library for React.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
