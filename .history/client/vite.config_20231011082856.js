import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import { defineConfig } from "vite";

// export default defineConfig({
//   resolve: {
//     plugins: [react()],
//     alias: {
//       web3: "web3/dist/web3.min.js",
//     },

//     // or
//     // alias: [
//     //   {
//     //     find: 'web3',
//     //     replacement: 'web3/dist/web3.min.js',
//     //   },
//     // ],
//   },
// });

//vitejs.dev/config/
 export default defineConfig({
  plugins: [react()],
});
