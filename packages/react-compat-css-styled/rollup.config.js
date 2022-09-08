
import builder from "@daybrush/builder";
import reactCompat from "rollup-plugin-react-compat";

const external = {
    "react-simple-compat": "react-simple-compat",
    "@daybrush/utils": "utils",
    "css-styled": "css-styled",
    "framework-utils": "framework-utils"
};


const reactPlugin = reactCompat({
    useReactCompat: true,
})



export default builder([
    {
        sourcemap: false,
        input: "src/index.esm.ts",
        output: "./dist/styled.esm.js",
        exports: "named",
        format: "es",
        plugins: [reactPlugin],
        external,
    },
    {
        sourcemap: false,
        input: "src/index.cjs.ts",
        output: "./dist/styled.cjs.js",
        exports: "named",
        plugins: [reactPlugin],
        format: "cjs",
        external,
    },
]);
