import React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom'; // ייבוא useNavigate


function MyComponent() {
  const navigate = useNavigate(); // שימוש ב-useNavigate לניווט

  return (
    
    <Button 
  onClick={() => navigate('/next')}
  sx={{
    backgroundColor: '#ffffff',
    color: '#333333', // צבע טקסט רגיל
    fontSize: '16px',
    fontWeight: '500',
    borderRadius: '12px',
    border: '1px solid #cccccc',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    position: 'absolute',
    top: '330px',
    left: '42.8%',
    width: '160px',
    height: '45px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    letterSpacing: '0.5px',
    textTransform: 'none',
    '&:hover': {
      color: 'rgb(255, 255, 255)', // מה שביקשת
      backgroundColor: 'rgba(247, 247, 230, 0)', // רקע קצת יותר בהיר
      boxShadow: '0 8px 15px rgba(34, 22, 203, 0.6)', // הצללה כחולה כמו בבקשה
      transform: 'scale(1.05)', // הגדלה עדינה
    }
  }}
  
  
>
  !בואו ונתחיל
</Button>
  


    
  );
}

export default MyComponent;
