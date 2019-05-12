const NODE_ENV = process.env.NODE_ENV || "development";

const IS_DEV = NODE_ENV === "development";
const PORT = IS_DEV ? 8080 : process.env.PORT;
const requestUri = IS_DEV ? `http://localhost:${PORT}/api` : "https://dev.pobo.ru/api";

module.exports = {
    IS_DEV,
    PORT,
    requestUri,
};
