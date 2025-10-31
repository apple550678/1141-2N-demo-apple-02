# w02_booklist_02 — 程式逐行解說

本文件彙整此專案的主要檔案，逐行說明每段程式與其作用，方便學習與查閱。

目錄

- index.html
- src/main.jsx
- src/App2_02.jsx
- src/App_02.jsx
- src/App.jsx
- src/booklist_data2.js
- src/booklist_data.js
- src/App_02.scss
- package.json
- vite.config.js
- eslint.config.js

—

index.html
1: <!doctype html>
宣告 HTML5 文件類型，讓瀏覽器用標準模式解析。
2: <html lang="en">
HTML 根節點，語系為英文。
3: <head>
頁首區塊開始，放置中繼資料與資源載入。
4: <meta charset="UTF-8" />
網頁字元編碼為 UTF-8。
5: <link rel="icon" type="image/svg+xml" href="/vite.svg" />
設定網站圖示，使用 Vite 提供的 SVG。
6: <meta name="viewport" content="width=device-width, initial-scale=1.0" />
RWD 視口設定，讓行動裝置正確縮放。
7: <title>w02_booklist_02</title>
瀏覽器分頁標題。
8: </head>
結束 head。
9: <body>
內容區塊開始。
10: <div id="root"></div>
React 掛載點，前端 App 會插入在此。
11: <script type="module" src="/src/main.jsx"></script>
以 ES module 載入 React 入口檔。
12: </body>
結束 body。
13: </html>
結束 HTML 文件。

—

src/main.jsx
1: import { StrictMode } from 'react'
從 React 引入 StrictMode，開發時提供額外檢查與警告。
2: import { createRoot } from 'react-dom/client'
引入 React 18+ 建立 root 的 API。
3: // import './index.css'
註解掉全域樣式，未使用。
4: import App2_02 from './App2_02.jsx'
匯入主畫面元件 App2_02。
6: createRoot(document.getElementById('root')).render(
取得 #root 元素並建立 React root，準備渲染。
7: <StrictMode>
啟用嚴格模式包覆整個 App（開發用途）。
8: <App2_02 />
渲染主元件。
9: </StrictMode>
結束嚴格模式。
10: )
執行 render。

—

src/App2_02.jsx
1: import './App_02.scss'
匯入 SCSS 樣式，控制版面與 RWD。
2: import books_data from './booklist_data2'
匯入書籍資料陣列。
4: console.log('books_data', books_data)
在開發者工具印出資料，便於確認。
6: const App2_02 = () => {
宣告函式型元件 App2_02。
7: return (
回傳 JSX。
8: <>
空片段，作為包裝容器。
9: <Booklist_02 />
渲染書單清單元件。
10: </>
結束片段。
11: )
結束回傳。
12: }
結束 App2_02 定義。
14: const Booklist_02 = () => {
宣告書單列表元件。
15: return (
回傳 JSX。
16: <section className='booklist'>
容器節點，對應 SCSS 的 .booklist 樣式。
17: {books_data.map((book) => {
以 map 迭代每本書資料。
18: const { id, img, title, author } = book
解構出每本書的屬性。
19: return <Book_02 key={id} img={img} title={title} author={author} />
渲染單書元件，並以 id 作為 React key。
20: })}
結束 map。
21: </section>
結束容器。
22: )
結束回傳。
23: }
結束 Booklist_02 定義。
25: const Book_02 = ({ img, title, author }) => {
宣告單一本書卡片元件，從 props 解構屬性。
26: return (
回傳 JSX。
27: <article className='book'>
書卡容器，對應 SCSS 的 .book 樣式。
28: <img src={img} />
書封圖片，來源為資料中的 img。
29: <div className='bookinfo'>
書籍文字資訊容器。
30: <h1>{title}</h1>
顯示書名。
31: <h4>{author}</h4>
顯示作者。
32: </div>
結束資訊容器。
33: </article>
結束卡片。
34: )
結束回傳。
35: }
結束 Book_02 定義。
37: export default App2_02
導出主元件供 main.jsx 使用。

—

src/App_02.jsx
1: import './App_02.scss'
匯入相同 SCSS 樣式。
2: import books_data from './booklist_data2'
匯入同樣的資料來源。
4: console.log('books_data', books_data)
開發時檢查資料。
6: const App_02 = () => {
另一個版本的主元件（不拆子元件）。
7: return (
回傳 JSX。
8: <section className='booklist'>
外層容器。
9: {books_data.map((book) => {
逐筆渲染書籍。
10: return (
回傳每筆的卡片元素。
11: <article className='book'>
卡片容器。
12: <img src={book.img} />
書封圖片。
13: <div className='bookinfo'>
文字資訊容器。
14: <h1>{book.title}</h1>
書名。
15: <h4>{book.author}</h4>
作者。
16: </div>
結束資訊容器。
17: </article>
結束卡片。
18: )
結束回傳。
19: })}
結束 map。
20: </section>
結束容器。
21: )
結束回傳。
22: }
結束元件。
24: export default App_02
導出，供需要時使用（目前 main.jsx 未使用）。

—

src/App.jsx
1: import { useState } from 'react'
React 範例元件使用 useState（Vite 預設模板）。
2: import reactLogo from './assets/react.svg'
匯入 React 圖示。
3: import viteLogo from '/vite.svg'
匯入 Vite 圖示（以根路徑存取 public 的資源）。
4: import './App.css'
匯入對應 CSS（模板檔）。
6: function App() {
宣告模板 App 元件。
7: const [count, setCount] = useState(0)
宣告狀態 count 與更新函式。
9-22: （模板畫面）
顯示兩個 Logo、標題、按鈕累加計數，文字說明 HMR。
24: export default App
導出模板元件（目前未被 main.jsx 使用）。

—

src/booklist_data2.js
1: const books_data = [
宣告一個陣列，存放六本書的資料。
2-26: 每個物件包含 { id, img, title, author }

- id: 唯一識別碼（給 React key）。
- img: 書封圖片 URL。
- title: 書名（可含前綴序號）。
- author: 作者名稱。
  28: export default books_data
  導出此陣列供 App 匯入使用。

—

src/booklist_data.js
1: const books_data = [
另一份範例資料，六本書但皆為同一張圖片與作者（示範用途）。
2-26: 結構同上，數據內容不同。
28: export default books_data
導出此陣列（目前未在 main.jsx 用到）。

—

src/App_02.scss
1: \* {
全域選擇器，設定基礎盒模型與間距。
2: margin: 0;
清除預設外距。
3: padding: 0;
清除預設內距。
4: box-sizing: border-box;
包含 padding 與 border 在元素尺寸計算內。
5: }
結束全域設定。
7: .booklist {
書單容器樣式。
8: width: 90%;
容器寬度 90%（居中時保留左右留白）。
9: display: grid;
使用 CSS Grid 佈局。
10: gap: 1.5rem;
卡片之間間距。
11: margin: 3rem auto;
上下 3rem，左右自動（居中）。
13: .book {
卡片樣式，巢狀於 .booklist 內。
14: background-color: #eee;
淺灰底色。
15: border-radius: 0.5rem;
圓角。
16: padding: 1rem;
內距。
18: img {
卡片中的圖片樣式。
19: width: 100%;
滿版寬度，配合卡片寬。
20: height: 220px;
固定高度，確保卡片整齊。
21: object-fit: cover;
保持比例裁切填滿。
22: margin: 0 auto;
置中（若小於容器寬）。
23: }
結束 img。
24: }
結束 .book。
26: .bookinfo {
文字資訊區塊。
27: font-family: 'Roboto', 'sans-serif';
指定字體族。
28: color: #444;
文字主色。
30: h1 {
書名樣式。
31: font-size: 1rem;
字級。
32: font-weight: 600;
半粗。
33: padding-top: 0.5rem;
與圖片距離。
34: }
結束 h1。
36: h4 {
作者樣式。
37: font-size: 0.8rem;
較小字級。
38: padding-top: 0.5rem;
與標題距離。
39: color: #666;
次要色。
40: }
結束 h4。
41: }
結束 .bookinfo。
42: }
結束 .booklist。
44: @media screen and (min-width: 500px) {
視窗 ≥ 500px 時的 RWD 設定。
45: .booklist {
針對容器調整欄數。
46: grid-template-columns: repeat(2, 1fr);
顯示 2 欄。
47: }
48: }
50: @media screen and (min-width: 700px) {
視窗 ≥ 700px。
51: .booklist {
52: grid-template-columns: repeat(3, 1fr);
顯示 3 欄。
53: }
54: }
56: @media screen and (min-width: 900px) {
視窗 ≥ 900px。
57: .booklist {
58: grid-template-columns: repeat(4, 1fr);
顯示 4 欄。
59: }
60: }
62: @media screen and (min-width: 1100px) {
視窗 ≥ 1100px。
63: .booklist {
64: grid-template-columns: repeat(5, 1fr);
顯示 5 欄。
65: }
66: }
68: @media screen and (min-width: 1300px) {
視窗 ≥ 1300px。
69: .booklist {
70: max-width: 1500px;
設定容器最大寬度，避免過寬。
71: grid-template-columns: repeat(6, 1fr);
顯示 6 欄。
72: }
73: }

—

package.json
1: {
JSON 開始。
2: "name": "w02_booklist_02",
專案名稱。
3: "private": true,
私有專案（不發佈至 npm）。
4: "version": "0.0.0",
版本號（範例值）。
5: "type": "module",
使用 ES Modules（import/export）。
6: "scripts": {
NPM 腳本區塊。
7: "dev": "vite",
啟動開發伺服器。
8: "build": "vite build",
打包建置。
9: "lint": "eslint .",
執行 ESLint 檢查。
10: "preview": "vite preview"
預覽打包結果的伺服器。
11: },
結束 scripts。
12: "dependencies": {
正式依賴。
13: "react": "^19.1.1",
React 核心。
14: "react-dom": "^19.1.1",
React DOM 綁定。
15: "sass": "^1.93.2"
編譯 SCSS。
16: },
17: "devDependencies": {
開發依賴。
18: "@eslint/js": "^9.36.0",
ESLint JS 規則。
19: "@types/react": "^19.1.13",
React 型別（即便 JS 專案，也常用於 IDE 提示）。
20: "@types/react-dom": "^19.1.9",
React DOM 型別。
21: "@vitejs/plugin-react": "^5.0.3",
Vite React 外掛（含 Fast Refresh）。
22: "eslint": "^9.36.0",
ESLint 主程式。
23: "eslint-plugin-react-hooks": "^5.2.0",
React Hooks 的 lint 規則。
24: "eslint-plugin-react-refresh": "^0.4.20",
React Fast Refresh 的 lint 支援。
25: "globals": "^16.4.0",
提供常見環境全域變數定義。
26: "vite": "^7.1.7"
Vite 主程式。
27: }
結束 devDependencies。
28: }
JSON 結束。

—

vite.config.js
1: import { defineConfig } from 'vite'
從 Vite 匯入 defineConfig 工具函式。
2: import react from '@vitejs/plugin-react'
匯入 React 外掛（支援 JSX 與 Fast Refresh）。
4: // https://vite.dev/config/
官方設定文件連結（註解）。
5: export default defineConfig({
輸出 Vite 設定物件。
6: plugins: [react()],
啟用 React 外掛。
7: })
設定結束。

—

eslint.config.js
1: import js from '@eslint/js'
匯入 ESLint 官方 JS 規則集合。
2: import globals from 'globals'
匯入常見環境全域變數定義。
3: import reactHooks from 'eslint-plugin-react-hooks'
匯入 React Hooks 規則外掛。
4: import reactRefresh from 'eslint-plugin-react-refresh'
匯入 React Refresh 規則外掛。
5: import { defineConfig, globalIgnores } from 'eslint/config'
匯入 ESLint 設定工具。
7: export default defineConfig([
匯出 ESLint 設定（支援陣列形式，便於逐層合併）。
8: globalIgnores(['dist']),
忽略 dist 目錄（打包輸出）。
9: {
一般 JS/JSX 規則設定開始。
10: files: ['**/*.{js,jsx}'],
指定套用檔案類型。
11: extends: [
繼承規則集合。
12: js.configs.recommended,
ESLint 官方建議規則。
13: reactHooks.configs['recommended-latest'],
React Hooks 建議規則（最新版）。
14: reactRefresh.configs.vite,
針對 Vite 的 React Refresh 規則。
15: ],
16: languageOptions: {
語言與解析選項。
17: ecmaVersion: 2020,
指定 ECMAScript 版本（語法支援）。
18: globals: globals.browser,
啟用瀏覽器全域變數（如 window、document）。
19: parserOptions: {
解析器選項。
20: ecmaVersion: 'latest',
使用最新語法解析。
21: ecmaFeatures: { jsx: true },
啟用 JSX 解析。
22: sourceType: 'module',
模組化（import/export）。
23: },
24: },
25: rules: {
自訂規則。
26: 'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
未使用變數報錯，但忽略全大寫/底線開頭（常見常數命名）。
27: },
28: },
29: ])
設定結束。

—

使用與學習建議

- 從 src/main.jsx → App2_02.jsx → Booklist_02/Book_02 的資料流理解 React 元件組合。
- 將 src/App_02.jsx 與 src/App2_02.jsx 對照，體會「拆分子元件」帶來的可讀性與可維護性。
- 用瀏覽器 DevTools 觀察 console.log 輸出，檢查資料結構是否如預期。
- 嘗試在 booklist_data2.js 新增第 7 本書，觀察排版如何在不同斷點調整欄數。
- 若要切換到未拆分版本，可在 src/main.jsx 改成 import 與渲染 App_02。
