# 📝 Redux Toolkit 表單與搜尋功能專案

## 🌟 簡介
這是一個基於 **React.js** 和 **Redux Toolkit** 的前端專案，主要用於管理表單輸入和列表數據，並提供動態搜尋與總金額計算功能。

專案使用 **configureStore** 來設定全域狀態，透過 **createSlice** 定義 reducers 和 **extraReducers** 處理額外邏輯，並從 **useSelector** 取得 state 來產生衍生狀態 (derived state)。

## 🎨 主要功能

- **表單輸入**：使用者可提交名稱與金額，並新增至列表。
- **使用 Redux Toolkit 管理狀態**，包括 `createSlice` 和 `extraReducers`。
- **從 useSelector 取出 state，計算 derived state** (如總金額計算)。
- **動態搜尋**：輸入關鍵字即可篩選符合條件的列表項目。
- **自動計算總金額**，即時更新。
