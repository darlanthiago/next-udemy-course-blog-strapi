"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ env }) => ({
    connection: {
        client: "pg",
        connection: {
            host: env("DATABASE_HOST"),
            port: env.int("DATABASE_PORT"),
            database: env("DATABASE_NAME"),
            user: env("DATABASE_USERNAME"),
            password: env("DATABASE_PASSWORD"),
            ssl: env.bool("DATABASE_SSL"),
        },
        debug: false,
    },
});