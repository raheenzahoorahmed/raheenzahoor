**1. What is a Cloudflare Worker?**  
A Cloudflare Worker is a small piece of JavaScript code that runs on Cloudflare's edge network, letting you handle web requests really close to the user. It's a lightweight way to build APIs or modify requests/responses without needing a full backend server.

**2. How does a Worker handle HTTP requests and return responses?**  
A Worker listens for HTTP requests using an event listener, processes them with JavaScript, and sends back a response using the `Response` object—kind of like writing a mini web server right in your code.

**3. What is Cloudflare D1? What are some pros and cons of using it?**  
Cloudflare D1 is a database service built on SQLite and designed to work smoothly with Workers. It's easy to use and fast at the edge, but since it's still new, it might lack some advanced features and isn’t ideal for super complex databases yet.

**4. How does client-side JavaScript call an external API?**  
Client-side JavaScript can call an external API using the `fetch()` function, which sends a request to the API URL and waits for the response to come back, usually in JSON format.

**5. What is the benefit of deploying APIs to the edge instead of traditional servers?**  
Putting APIs on the edge makes them respond faster because they’re closer to the user geographically. It also helps reduce server load and can scale better during traffic spikes.
