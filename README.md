# Frontend Technical Test

This technical test is designed for candidates applying for the Frontend Developer position. The test evaluates your ability to implement a responsive product filtering interface using modern web technologies.

## Objective

Create a responsive product filtering interface by implementing:

1. The layout using HTML and TailwindCSS
2. Filter functionality using JavaScript
based on the provided prototype design.

[View Interactive Prototype](https://www.figma.com/proto/BrGlZUi7JuPD4QeQPTpEk1/Frontend-Test?node-id=73-303&node-type=frame&t=VkF95nAL8XPPOSHB-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=73%3A303&show-proto-sidebar=1 "Prototype")

[View Design Specifications](https://www.figma.com/design/BrGlZUi7JuPD4QeQPTpEk1/Frontend-Test?m=auto&t=rLB5lIKk9OtSA0Uf-1 "Design File")

### Filter Implementation Requirements

The filter functionality should:

1. Display a modal with filter options when clicking the filter button
2. Allow multiple option selection
3. Show selected filter count on the button and activate clear functionality
4. Filter products based on selected options when closing modal
5. Reset all filters and reload full product list when clicking clear
6. Include three filter categories:
   - Rubia (id=1)
   - Morena (id=2)
   - Roja (id=3)

### Technical Specifications

1. **Styling**: Implement using TailwindCSS
   - Use current setup for local compilation
   - Include proper configuration
   - Only the TailwindCSS structure and setup will be evaluated

2. **JavaScript Requirements**:
   - Write code in ES6
   - Allowed libraries:
     - Alpine.js for reactive UI
     - HTMX.js for dynamic updates
   - Use products.json for data source

### Responsive Design Requirements

While the prototype focuses on mobile layout, the implementation must be responsive:

- Mobile: Follow prototype design
- Desktop: Optimize layout (e.g., 4-column product grid)

### Provided Resources

- Product images: Located in `app/static/img`
- UI icons: Available in `templates/svg`

### Bonus Feature

For additional credit, implement:

- Filter persistence across page reloads

## Setup Instructions

### Prerequisites

- [Rye](https://rye.astral.sh/) for Python package management
- [Node.js and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) for JavaScript dependencies

## Installation Steps

1. **Clone the repository**

2. **Install Python dependencies**

   ```bash
   rye sync
   ```

3. **Install Node.js dependencies**

   ```bash
   npm install
   ```

4. **Start the development servers**

   Open two terminal windows and run:

   Terminal 1 - Django server:

   ```bash
   rye run python manage.py runserver
   ```

   Terminal 2 - Tailwind CSS compiler:

   ```bash
   rye run python manage.py tailwind start
   ```

5. **Access the development site**

   Open your browser and navigate to: [http://localhost:8000](http://localhost:8000)

## Docker Alternative

If using Docker, simply run:

```bash
docker compose build
docker compose up
```

## Tech Stack

### Django

We use Django, a high-level Python web framework, as the foundation of our web application. Django provides a robust and scalable architecture, allowing us to quickly develop and deploy our prototype. Its modular design and extensive library of third-party packages make it an ideal choice for building complex web applications.

### Tailwind CSS

Tailwind CSS is a utility-first CSS framework that allows us to write more concise and maintainable CSS code. We use Tailwind to style our application, leveraging its pre-defined classes and utility functions to quickly create a visually appealing and responsive user interface.

### Alpine.js

Alpine.js is a lightweight JavaScript framework that provides a simple and intuitive way to create interactive web applications. We use Alpine to add dynamic behavior to our application, such as conditional rendering and event handling.

### HTMX

HTMX is a modern JavaScript library that provides a set of tools for building interactive web applications. We use HTMX to create reusable, modular components that can be easily composed together to build complex user interfaces. HTMX's focus on simplicity and ease of use makes it an ideal choice for building fast and efficient web applications.

### Rye

Rye is a Python package that provides a set of tools for building and deploying web applications. We use Rye to manage our application's dependencies, configure our environment, and run our application in development and production modes. Rye's simplicity and flexibility make it an ideal choice for building and deploying web applications.
