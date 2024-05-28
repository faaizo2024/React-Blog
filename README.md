
## Components

- **App Component**: The main component that encapsulates the entire application.
- **BlogProvider Component**: Manages the global state using `useContext` and provides this state to other components.
- **Header Component**: Displays the top navigation header.
- **PostsList Component**: Fetches and displays the list of blog posts. It uses the `PostItem` component to render each individual post.
- **PostItem Component**: A child component of `PostsList` responsible for displaying the title and excerpt of each blog post.
- **Footer Component**: Displays the footer of the application.

## Objectives

1. **Set Up BlogProvider**: Implement `BlogProvider` to handle the global state, including the posts. Utilize `useState` to store the posts and `useEffect` to fetch posts from a mock API or a local JSON file when the component mounts.
2. **Develop PostsList and PostItem Components**:
   - **PostsList**: This component should use `useContext` to access the posts from `BlogProvider`. It renders a list where each post is represented by a `PostItem`.
   - **PostItem**: Renders the individual post details like the title and an excerpt. This helps keep the posts list organized and modular.
3. **Style Your Components**: Apply styles using Tailwind CSS using ready-made components from Tailbits.com or Flowbite.com. Ensure your `PostsList` and `PostItem` components are visually appealing and responsive.
4. **Implement Header and Footer**: Create simple and functional header and footer components. The header could include the blog’s title or logo, and the footer might feature copyright or a developer’s link.

