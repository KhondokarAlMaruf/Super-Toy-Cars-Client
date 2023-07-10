const Blog = () => {
  return (
    <div className="bg-pink-100 py-10 my-10">
      <h2>
        1. What is an access token and refresh token? How do they work and where
        should we store them on the client-side??
      </h2>
      <h4>
        Ans: Uncontrolled components have their own internal state managed by
        the DOM, while controlled components have their state managed by React.
        Controlled components use the value prop and onChange event handler to
        handle form input, whereas uncontrolled components rely on the DOM for
        state management. Controlled components provide more control and
        validation options, while uncontrolled components offer simplicity and
        flexibility.
      </h4>
      <h2>2. How to validate React props using PropTypes?</h2>
      <h4>
        Ans: To validate React props using PropTypes, install the prop-types
        package, import PropTypes, define propTypes for the component with the
        desired type validation, and mark required props using .isRequired. This
        helps catch prop-related errors during development.
      </h4>
      <h2>3. Tell us the difference between nodejs and express js?</h2>
      <h4>
        Ans: Node.js is a runtime environment that allows running JavaScript
        code on the server-side, while Express.js is a web application framework
        that simplifies building web servers and APIs using Node.js.
      </h4>
      <h2>4. What is a custom hook, and why will you create a custom hook?</h2>
      <h4>
        Ans: A custom hook is a reusable function in React. It is created to
        encapsulate and share logic or state between multiple components,
        promoting reusability, abstraction, and code organization.
      </h4>
    </div>
  );
};

export default Blog;
