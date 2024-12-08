# Unhandled Errors in Express.js Async Route Handlers

This repository demonstrates a common, yet subtle, error in Express.js applications: unhandled errors in asynchronous route handlers.  When an asynchronous operation within a route handler throws an error without proper error handling, the request might hang indefinitely without a response. This can lead to frustrating debugging sessions and unexpected application behavior.

The `bug.js` file showcases the problematic code. The `bugSolution.js` demonstrates the corrected version with proper error handling using async/await and try...catch blocks.

## How to Reproduce the Bug

1. Clone this repository.
2. Navigate to the directory.
3. Run `node bug.js`
4. Send a request to `/users/1` (or any ID).  Observe that there is no response.  (You may need to wait a few seconds).

## Solution

The solution involves using `async/await` and a `try...catch` block to gracefully handle any potential errors.  This ensures that the request is always responded to, even if an error occurs. The corrected code is in the `bugSolution.js` file.