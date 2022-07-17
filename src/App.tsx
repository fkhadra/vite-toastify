import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import "./App.css";

function App() {
  return (
    <div>
      <button
        onClick={() => {
          toast.info("Message");
        }}
      >
        Notify
      </button>
      <ToastContainer />
    </div>
  );
}

export default App;
