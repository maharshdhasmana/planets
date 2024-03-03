# React user management app

## Table of Contents

- [Introduction](#introduction)
- [Project Overview](#project-overview)
- [Installation](#installation)
- [Usage](#usage)
- [Dependencies](#dependencies)

## Introduction

This project utilizes Vite and React for front-end development. It uses json-server to mock api routes.

## Project Overview

The project consists of the following key components:

- **Search Result:** Initially shows all the available data in db.
- **Search Bar:** Allows new users to search for planets by name inside db.
- **Filters:** Allows user to filter planets based on color, size, shape.
- **Sharable Link:** Easily shareable link based on the filter/search parameters

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/maharshdhasmana/planets.git
   cd planets
   ```

## usage

1. Install Dependencies
   ```sh
    npm install
   ```
2. Run Json-Server
   ```sh
   json-server -p 8000 data.json
   ```
3. Start Development Server
   ```sh
   npm run dev
   ```
4. Open your browser and navigate to http://localhost:5173 to access the application.

## Dependencies

- **Vite:** Fast development server and build tool for modern web development.
- **React:** A JavaScript library for building user interfaces.
- **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
- **NextUI** A Prebuilt component library based on tailwind.
- **React-Redux** eact Redux is the official React UI bindings layer for Redux. It lets your React components read data from a Redux store, and dispatch actions.
- **Other dependencies:** Check the `package.json` file for a complete list of project dependencies.
