# React Articles Application

This project is a React and TypeScript application that fetches articles from a REST API and displays them in a visually appealing manner.

## Overview

The application includes two views:
1. A front page that displays a list of articles with a title, summary, and a numbered box.
2. A detail page that shows the full content of an article when a user selects it from the list.

## Technologies Used

- **React**: Used for building the user interface.
- **TypeScript**: Ensures strong typing and helps prevent bugs during development.
- **React Router (`react-router-dom ^6.26.2`)**: For client-side routing to switch between the article list and article details pages.
- **CSS (Flexbox)**: For styling and ensuring a responsive layout with three articles per row on larger screens.
- **Fetch API**: To make requests to the provided REST API and retrieve the articles.
- **State Management**: Managed using React’s `useState` and `useEffect` hooks.
- **Error Handling**: Implemented in both the API calls and UI rendering.

## Approach

### 1. Fetching Articles
- The articles are fetched from two API endpoints: one for all articles and another for article details based on the `id`.
- `async/await` with the `fetch` API is used to handle asynchronous operations.
- Articles are sorted by `id` in ascending order before being displayed.

### 2. State Management
- The application uses `useState` to manage the list of articles, the selected article, loading states, and errors.
- For example, when fetching articles, the loading state is displayed until the data is retrieved.

### 3. Routing
- **React Router** is used to navigate between the article list and article detail pages.
- The detail view for a specific article is routed by its `id` parameter.

### 4. Layout and Styling
- Flexbox is used to create a responsive layout, ensuring that three articles appear per row on larger screens and stack vertically on smaller screens.
- The article title, summary, and number are styled neatly in the card layout for readability.
- The article detail page follows a similar structure, with titles and content displayed responsively.

### 5. Error Handling
- Errors are handled by catching errors during API requests and displaying user-friendly error messages in the UI.
- Error boundaries prevent the application from breaking due to data-fetching issues.

### 6. Sorting
- After fetching the articles, they are sorted by `id` using `array.sort()` to ensure they are displayed in the correct order for a better user experience.

## Challenges Faced & Solutions

### 1. API Data Handling
- **Challenge**: Ensuring that API data is fetched correctly and displayed without affecting performance.
- **Solution**: Using `useEffect` for data fetching on component mount, and proper state management to store and display the data.

### 2. Responsive Layout
- **Challenge**: Making sure that the layout is responsive and works well on both large and small screens.
- **Solution**: Flexbox was used to create a flexible layout that adjusts automatically depending on the screen size.

### 3. Handling Loading & Error States
- **Challenge**: Managing loading and error states to ensure a smooth user experience.
- **Solution**: Conditional rendering was implemented to show appropriate loading spinners or error messages when necessary.

### 4. Title & Article Number Alignment
- **Challenge**: Long titles and article numbers were breaking the layout.
- **Solution**: Flexbox and CSS techniques like `word-wrap`, `nowrap`, and proper spacing were used to ensure clean and responsive alignment.

## How to Run the Project

1. Clone the repository to your local machine.
2. Run `npm install` to install all dependencies.
3. Start the development server by running `npm start`.
4. The application will be available at `http://localhost:3000`.
