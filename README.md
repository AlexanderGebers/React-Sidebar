# Simple sidebar with React + React Router

Simple sidebar on the left side, App content next to it.
Menu items can be added within the ``Sidebar-Component``.

    data object => menuItems

Item text & page route must be provided.

## Setup

ViteJS is my 1st choice development tool. NodeJS must be installed on your local machine.
I´m using VSCode.

Steps to create an React project from scratch with ViteJS.

    npm create vite@latest

#### Choose a project name, React & JavaScript for the project settings.

    cd <projectfolder>

    # install all dependencies
    npm install

    # install React Router additionally
    npm install react-router-dom

    # start VSCode
    code .

    # in VSCode Terminal, start the local development-server, provided by ViteJS
    npm run dev

    ready to code your React App :) 

## Conventions

Components are in the ``components`` folder.

Application pages are in the ``pages`` folder.
