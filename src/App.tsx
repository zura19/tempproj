import { Route, Routes } from "react-router-dom";
import "./App.css";
import PostPage from "./pages/PostPage";
import HomePage from "./pages/HomePage";
import AppLayout from "./Components/AppLayout";
import CalendarPage from "./pages/CalendarPage";

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts" element={<PostPage />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Route>
    </Routes>
  );
}

export default App;
