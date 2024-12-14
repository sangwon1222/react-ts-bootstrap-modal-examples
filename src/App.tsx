import React from "react";
import "./App.css";
import { InnerScrollModal } from "./components/InnerScrollModal.tsx";
import { DemoModal } from "./components/DemoModal.tsx";
import { ScrollModal } from "./components/ScrollModal.tsx";
import { StaticBackDrop } from "./components/StaticBackDrop.tsx";
import { CenterModal } from "./components/CenterModal.tsx";
import { CenterInnerScrollModal } from "./components/CenterInnerScrollModal.tsx";

export default function App() {
  return (
    <div className="App">
      <header role="banner">
        <h1>모달 구현</h1>
      </header>

      <main role="main">
        {/* 데모 모달 */}
        <DemoModal />

        {/* 정적 배경 모달 */}
        <StaticBackDrop />

        {/* 스크롤 모달 */}
        <ScrollModal />

        {/* 내부 스크롤 모달 */}
        <InnerScrollModal />

        {/* 레이아웃 수직 중앙 모달 */}
        <CenterModal />

        {/* 레이아웃 수직 중앙 모달 */}
        <CenterInnerScrollModal />
      </main>

      <footer role="contentinfo"></footer>
    </div>
  );
}
