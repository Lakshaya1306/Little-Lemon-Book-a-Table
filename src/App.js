import React from "react";
import Header from "./components/Header";
import BookingForm from "./components/BookingForm";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <main>
        <BookingForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
