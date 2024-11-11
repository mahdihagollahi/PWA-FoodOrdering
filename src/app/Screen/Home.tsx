// "use client";
// import React, { useState, useEffect } from "react";

// import Todo from "../Componnent/Todo";
// import Navbar from "../Componnent/Navbar";
// import Footer from "../Componnent/Footer";

// const App: React.FC = () => {
//   const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

//   const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.checked) {
//       setTheme("dark");
//     } else setTheme("light");
//   };

//   useEffect(() => {
//     localStorage.setItem("theme", theme);

//     document.querySelector("html")?.setAttribute("data-theme", theme);
//   }, [theme]);
//   return (
//     <div>
//       <Navbar handleToggle={handleToggle} />
//       <Todo />
//       <Footer />
//     </div>
//   );
// };

// export default App;


// App.tsx
// "use client"
// import React, { useState, useEffect } from 'react';

// import Todo from "../Componnent/Todo";
// import Navbar from "../Componnent/Navbar";
// import Footer from "../Componnent/Footer";

// const App: React.FC = () => {
//   const [theme, setTheme] = useState<string>(localStorage.getItem("theme") || "light");

//   const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setTheme(e.target.checked ? "dark" : "light");
//   };

//   useEffect(() => {
//     localStorage.setItem("theme", theme);
//     document.querySelector("html")?.setAttribute("data-theme", theme);
//   }, [theme]);

//   return (
//     <div>
//       <Navbar handleToggle={handleToggle} />
//       <Todo />
//       <Footer />
//     </div>
//   );
// };

// export default App;



// App.tsx
'use client'
import React, { useState, useEffect } from 'react';

import Todo from "../Componnent/Todo";
import Navbar from "../Componnent/Navbar";
import Footer from "../Componnent/Footer";
const App: React.FC = () => {
  const [theme, setTheme] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem("theme") || "light";
    }
    return "light";
  });

  const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTheme(e.target.checked ? "dark" : "light");
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem("theme", theme);
      document.querySelector("html")?.setAttribute("data-theme", theme);
    }
  }, [theme])

  return (
    <div>
      <Navbar handleToggle={handleToggle} />
      <Todo event="Sample Event" state="Sample State" />
      <Footer />
    </div>
  );
};

export default App;


