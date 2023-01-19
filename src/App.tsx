import { useEffect } from "react";
import Editor from "./components/editor/Editor";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import data from "../public/data.json";
import { documentActions } from "./redux/document-slice";
import { Toaster, toast } from "react-hot-toast";

function App() {
  const isMenuOpen = useAppSelector((state) => state.ui.isMenuOpen);
  const isDarkTheme = useAppSelector((state) => state.ui.isDarkTheme);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(documentActions.loadDocuments(data));
  }, []);

  return (
    <div className={`${isDarkTheme ? "dark" : ""} grid wrapper ${isMenuOpen ? "menu-open" : ""}`}>
      <Sidebar />
      <div>
        <Header />
        <main>
          <Editor />
        </main>
      </div>
      <Toaster
        toastOptions={{
          duration: 2000,
        }}
      />
    </div>
  );
}

export default App;
