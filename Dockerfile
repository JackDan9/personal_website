FROM node:12-alpine as builder

ENV PROJECT_ENV production

WORKDIR /frontend-data

