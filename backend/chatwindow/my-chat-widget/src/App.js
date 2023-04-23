import logo from "./logo.svg";
import ChatWidget from "./ChatWidget.js";
import "./App.css";

function App() {
  return (
    <div>
      <header>
        <nav>{/* Navigation links */}</nav>
        <ChatWidget
          twilioNumber="+18446172010"
          moderatorPhoneNumber="+14044212714"
        />
      </header>
      <main>{/* Main content */}</main>
      <footer>
        <ChatWidget
          twilioNumber="+18446172010"
          moderatorPhoneNumber="+14044212714"
        />
        {/* Footer content */}
      </footer>
    </div>
  );
}

export default App;
