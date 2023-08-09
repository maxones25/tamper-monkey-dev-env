# Tamper Monkey

Version: 1.0.0

## Description

Tamper Monkey is a project designed for integration with userscript managers like Tampermonkey. It uses a Webpack-based build system to compile and serve assets, and it can watch for changes during development.

## Getting Started

### Prerequisites

Ensure you have Node.js installed. If not, download and install it from [nodejs.org](https://nodejs.org/).

### Installation

1. Clone the repository.
2. Navigate to the project directory.
3. Run the following command to install the required dependencies:

```bash
npm install
```

## Running the Development Server

Start the development server with:

```bash
npm start
```

The server runs on port 3000 by default. Open http://localhost:3000 in your browser to view the project.

### Build Configuration

Webpack is used for bundling the JavaScript files, and Babel is configured to transpile modern JavaScript down to older versions for compatibility. Plugins for tampering with the header and updating the version can be found in the Webpack configuration.

#### Output Directory

The bundled JavaScript files are saved in the **build** directory.

#### Custom Plugins

- **TampermonkeyHeaderPlugin**: A custom plugin to add the header to the user script.
- **UpdateVersionPlugin**: A custom plugin to update the version.

### License

This project is licensed under the ISC License.

### Author

Maximilian Stock
