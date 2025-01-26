# Cardboard Crack

Cardboard Crack is a modern web application designed for trading card enthusiasts. It offers users the ability to upload and view PDF files, making it easy to share and read deck lists, tournament reports, and other card-related documents directly in the app.

## Features

- **PDF Upload and Viewer**: Upload PDF files and view their contents seamlessly within the app.
- **Modern UI/UX**: Optimized for dark themes with accessible and user-friendly designs.
- **Responsive Design**: Fully responsive layout, ensuring the app looks great on all devices.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [Angular CLI](https://angular.io/cli)
- [NVM](https://github.com/nvm-sh/nvm) (Node Version Manager)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/dills122/cardboard-crack.git
   ```

2. Install the required Node.js version:

   ```bash
   nvm install lts/iron
   nvm use lts/iron
   ```

3. Install Rush globally:

   ```bash
   npm install -g @microsoft/rush
   ```

4. Set up the project:

   ```bash
   cd ./cardboard-crack
   rush update
   ```

5. Start the frontend application:
   ```bash
   cd ./apps/frontend
   rushx start
   ```

The app will be available at `http://localhost:4200/`.

### Current Look

Parsing Page

![Parsing View](/assets/parsing-view.png)

Partial View of List Page

![Partial List View](/assets//partial-list-view.png)

### Building for Production

To build the app for production:

```bash
ng build --prod
```

The build artifacts will be stored in the `dist/` directory.

## Technologies Used

- **Framework**: [Angular](https://angular.io/)
- **UI Components**: [PrimeNG](https://primeng.org/)
- **Styling**: Tailwind CSS
- **PDF Rendering**: [PDF.js](https://mozilla.github.io/pdf.js/)
- **Ace Editor**: [Ace](https://ace.c9.io/)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
