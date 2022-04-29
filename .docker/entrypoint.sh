#!/bin/bash

npx prisma migrate dev --name init
npm install
npm run build
npm run start:dev
