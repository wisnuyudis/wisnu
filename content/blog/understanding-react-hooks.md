---
title: Understanding React Hooks
date: 2024-09-25
tags: ["react", "hooks", "javascript"]
---

# Understanding React Hooks

React Hooks have revolutionized the way we write React components. They allow us to use state and other React features without writing a class component.

![React Hooks](https://picsum.photos/800/300)

## What are React Hooks?

Hooks are functions that let you "hook into" React state and lifecycle features from function components. They were introduced in React 16.8 and have become the standard way to write React components.

### Key Benefits

1. **Simplified component logic**
2. **Better code reuse**
3. **Easier testing**
4. **Smaller bundle sizes**

## useState Hook

The `useState` hook is the most basic hook that lets you add state to functional components:

```javascript
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

## useEffect Hook

The `useEffect` hook lets you perform side effects in function components:

```javascript
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

## Custom Hooks

You can create your own hooks to extract component logic into reusable functions:

```javascript
import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
}
```

## Best Practices

1. **Always use hooks at the top level** - Don't call hooks inside loops, conditions, or nested functions
2. **Use custom hooks for complex logic** - Extract reusable stateful logic
3. **Optimize with useMemo and useCallback** - Prevent unnecessary re-renders
4. **Keep effects focused** - Split unrelated logic into separate useEffect calls

## Conclusion

React Hooks provide a more direct API to the React concepts you already know. They make it easier to share stateful logic between components and help you write cleaner, more maintainable code.

As you continue your React journey, mastering hooks will significantly improve your development experience and code quality.