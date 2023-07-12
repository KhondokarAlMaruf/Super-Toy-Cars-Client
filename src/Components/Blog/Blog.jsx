const Blog = () => {
  return (
    <div>
      <h2 className="font-bold">
        1. What is an access token and refresh token? How do they work and where
        should we store them on the client-side??
      </h2>
      <h4>
        Ans: An access token is a credential that grants access to protected
        resources or performs authorized actions on behalf of a user. It is
        typically short-lived and is obtained after successful authentication. A
        refresh token, on the other hand, is a long-lived credential used to
        obtain a new access token when the current one expires. Access tokens
        work by including them in each request to the server as a form of
        authentication. The server verifies the token to ensure the user is
        authenticated and has the necessary permissions to access the requested
        resource. When the access token expires, the client can use the refresh
        token to obtain a new access token without requiring the user to
        reauthenticate. On the client-side, access tokens and refresh tokens
        should be stored securely. Best practices include storing them in secure
        storage mechanisms provided by the client platform, such as Keychain on
        iOS or SharedPreferences on Android. It is important to ensure they are
        encrypted and protected from unauthorized access. Additionally, access
        tokens should be stored in a way that prevents client-side JavaScript
        code from accessing them, such as in an HTTP-only cookie or in memory,
        to mitigate against Cross-Site Scripting (XSS) attacks.
      </h4>
      <h2 className="font-bold">2. Compare SQL and NoSQL databases? </h2>
      <h4>
        Ans: SQL databases use a structured data model with predefined schemas,
        ideal for complex relationships and data integrity. NoSQL databases
        offer more flexibility in data models, are highly scalable, and suitable
        for handling large volumes of unstructured or semi-structured data.
      </h4>
      <h2 className="font-bold">3. What is express js? What is Nest JS?</h2>
      <h4>
        Ans: Express.js is a popular web application framework for Node.js. It
        provides a simple and minimalist approach to building web servers and
        APIs. Express.js offers various features, middleware, and routing
        capabilities to handle HTTP requests and responses efficiently. It is
        widely used for building lightweight and scalable web applications.
        Nest.js, on the other hand, is a progressive Node.js framework for
        building efficient, scalable, and maintainable server-side applications.
        It combines the elements of both Express.js and Angular to provide a
        robust and modular architecture. Nest.js uses TypeScript as its primary
        language and follows a dependency injection pattern, making it
        well-suited for enterprise-level applications. It offers features like
        dependency injection, declarative modules, decorators, and strong
        typing, enabling developers to build scalable and testable applications.
      </h4>
      <h2 className="font-bold">
        4. What is MongoDB aggregate and how does it work?
      </h2>
      <h4>
        Ans: Express.js is a popular web application framework for Node.js. It
        provides a simple and minimalist approach to building web servers and
        APIs. Express.js offers various features, middleware, and routing
        capabilities to handle HTTP requests and responses efficiently. It is
        widely used for building lightweight and scalable web applications.
        Nest.js, on the other hand, is a progressive Node.js framework for
        building efficient, scalable, and maintainable server-side applications.
        It combines the elements of both Express.js and Angular to provide a
        robust and modular architecture. Nest.js uses TypeScript as its primary
        language and follows a dependency injection pattern, making it
        well-suited for enterprise-level applications. It offers features like
        dependency injection, declarative modules, decorators, and strong
        typing, enabling developers to build scalable and testable applications.
      </h4>
    </div>
  );
};

export default Blog;
