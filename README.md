# Node-Angular-Electron-Quickstart

Simple base for an Electron app with a Node backend and an Angular frontend.

## Development

### Backend

All backend code is built with Node.

The `main.ts` file is the entrypoint. It handles Electron but can be run independently as well.

Before running for the first time, run `npm i` to install dependencies.

Run `npm run dev` for a dev server. The app will automatically reload if you change any of the source files. This will not launch an Electron instance but can be accessed using a browser or other tool.

Run `npm run tsc` to build the project. The build artifacts will be stored in the `/dist` directory, and are used by Electron.

### Frontend

The frontend is built with Angular and is stored in the frontend folder, so the below commands should be run from inside `/frontend`.

Before running for the first time, run `npm i` and `npm install -g @angular/cli` to install dependencies and the Angular CLI.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/` in a browser. The app will automatically reload if you change any of the source files.

Run `ng build --prod` to build the project. The build artifacts will be stored in the `frontend/dist/frontend` directory.

### Electron

The `npm run electron` command can be used to run the most recent build of the backend (which serves the most recent build of the frontend) in an Electron container.

## Deployment

Running `npm run build` from the root of the project will install all dependencies, build the frontend and backend, and use Electron to compile the app for `win32`, `darwin`, and `linux` platforms. Builds are stored in `/build`.