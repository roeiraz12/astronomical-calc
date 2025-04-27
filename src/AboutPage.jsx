import React from "react";

const AboutPage = () => {
  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(to right, #f8f9fa, #e0e0e0)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "40px"
    }}>
      <div style={{
        backgroundColor: "white",
        borderRadius: "12px",
        boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
        padding: "30px",
        maxWidth: "800px",
        width: "100%",
        textAlign: "center",
        animation: "fadeIn 1s ease forwards",
        opacity: 0
      }}>
        <h1 style={{
          marginBottom: "20px",
          color: "#333",
          fontSize: "36px"
        }}>אודות האתר</h1>

        <p style={{
          fontSize: "18px",
          lineHeight: "1.8",
          color: "#555",
          marginBottom: "20px"
        }}>
          האתר נבנה במטרה להציג חישובים אסטרונומיים מתקדמים בצורה פשוטה וברורה,
          תוך דגש על דיוק, נוחות שימוש וחוויית משתמש מודרנית ונעימה.
          <br /><br />
          האתר מאפשר לחשב מיקום שמש וירח בהתבסס על תאריך נבחר, 
          ומתחשב בנתונים מתמטיים מורכבים, כולל חישוב מסלול אמיתי.
        </p>

        

        <p style={{
          marginTop: "30px",
          fontSize: "16px",
          color: "#777"
        }}>
          פרויקט זה פותח כחלק מתיק העבודות שלי, והוא מציג יכולות תכנות, עיצוב חוויית משתמש, 
          וניהול חישובים מתקדמים
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
