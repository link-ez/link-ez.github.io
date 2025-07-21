# 國高中學習討論區 靜態網站

## 安裝與啟動

1. 安裝相依套件：
   ```bash
   npm install
   ```
2. 啟動開發伺服器：
   ```bash
   npm start
   ```

## 部署到 GitHub Pages

1. 安裝 gh-pages 套件：
   ```bash
   npm install --save gh-pages
   ```
2. 在 `package.json` 加入：
   ```json
   "homepage": "https://你的GitHub帳號.github.io/discord-cool-site"
   ```
3. 新增部署指令到 `scripts`：
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d build"
   ```
4. 執行部署：
   ```bash
   npm run deploy
   ```

---

如需自訂內容，請修改 `src/App.js`。 