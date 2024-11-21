const path = require("path");

module.exports = {
    mode: "development",
    entry: "./src/index.tsx",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.css$/, // Adicione esta regra para processar arquivos CSS
                use: ["style-loader", "css-loader", "postcss-loader"],
            },
        ],
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, "dist"),
        },
        historyApiFallback: true,
        open: true,
        port: 3000,
    },
};
