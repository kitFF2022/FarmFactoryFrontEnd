// devServer: {
//     contentBase: path.resolve("./build"),
//     index: "index.html",
//     // 클라이언트 포트는 3000
//     port: 3000,
//     proxy: {
//       '/user_inform': {
//       	// 서버 포트는 3001
//         target: 'http://localhost:3001/',
//         changeOrigin: true,
//       }
//     }
//   },