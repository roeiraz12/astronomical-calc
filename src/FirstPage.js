//30.6.1178 


import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // שימי לב לייבוא Link!
import MyComponent from './MyComponent';
import SecondPage from './calc';
import AboutPage from './AboutPage'; // הוספת דף האודות


// הודעת הפתיחה של עמוד הנחיתה
function Message() {
  return (
    <center>
      <br></br>
      <h1 className="title">ברוכים הבאים לאתר קידוש החודש של הרמב"ם</h1>  
      <br></br>
      <br></br>
      <h2 className="subtitle">כאן ניתן לחשב האם ייראה הירח היום לפי שיטת הרמב"ם</h2>


    </center>
  );
}

// רכיב הבית שמציג את ההודעה והכפתור לניווט
function Home() {
  return (
    <div>
      <Message />
      <MyComponent />
    </div>
  );
}

// עיצוב של הלינקים
const linkStyle = {
  color: "#f0f0f0",
  textDecoration: "none",
  fontSize: "18px",
  fontWeight: "300", // פונט דק
  letterSpacing: "1px",
  transition: "all 0.3s",
  padding: "6px 8px",
  borderBottom: "2px solid transparent",
  fontFamily: "'Roboto', sans-serif" // כאן הוא מוגדר
};


// עמוד ראשון עם ניתוב
function FirstPage() {
  return (
    <Router>
      <div className="background">

      <nav style={{
  backgroundColor: "#000",
  padding: "3px 30px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "40px",
  position: "sticky",
  top: 0,
  zIndex: 1000,
  boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
  fontFamily: "'Roboto', sans-serif"
}}>
  <Link
    to="/about"
    style={linkStyle}
    onMouseEnter={(e) => e.target.style.borderBottom = "2px solid #f0f0f0"}
    onMouseLeave={(e) => e.target.style.borderBottom = "2px solid transparent"}
  >
    אודות
  </Link>

  <Link
    to="/next"
    style={linkStyle}
    onMouseEnter={(e) => e.target.style.borderBottom = "2px solid #f0f0f0"}
    onMouseLeave={(e) => e.target.style.borderBottom = "2px solid transparent"}
  >
    חישוב
  </Link>

 


  <Link
    to="/"
    style={linkStyle}
    onMouseEnter={(e) => e.target.style.borderBottom = "2px solid #f0f0f0"}
    onMouseLeave={(e) => e.target.style.borderBottom = "2px solid transparent"}
  >
    בית
  </Link>

</nav>




        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/next" element={<SecondPage />} />
          <Route path="/about" element={<AboutPage />} />

        </Routes>
      </div>




      <footer style={{
  backgroundColor: "#46484a",
  color: "#f0f0f0",
  fontSize: "14px",
  textAlign: "center",
  padding: "10px 0",
  marginTop: "40px",
  fontFamily: "'Roboto', sans-serif",
  borderTop: "1px solid rgba(255, 255, 255, 0.1)"
}}>
  <p style={{ margin: "5px" }}>© 2025  רועי ראז - כל הזכויות שמורות</p>
  <p style={{ margin: "5px" }}>
    <a href="mailto:halelibuzaglo@gmail.com" style={{ color: "#f0f0f0"}}>roeiraz817@gmail.com</a>
  </p>
</footer>

    </Router>

    
  );
}

export default FirstPage;
