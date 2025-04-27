import React, { useState, useEffect } from "react";

// ===== פונקציות עזר =====

const DaysFromYomIkar = (selectedDate) => {
  const baseDate = new Date(1178, 2, 22);
  const timeDifference = selectedDate - baseDate;
  return Math.floor(timeDifference / (1000 * 60 * 60 * 24));
};

const zmzm2 = (time) => {
  time.helek += Math.floor(time.shniot / 60);
  time.shniot %= 60;
  time.maalot += Math.floor(time.helek / 60);
  time.helek %= 60;
  if (time.maalot >= 360) time.maalot %= 360;
  return time;
};

const zmzm3 = (time) => {
  time.shniot += Math.floor(time.shlishiot / 60);
  time.shlishiot %= 60;
  time.helek += Math.floor(time.shniot / 60);
  time.shniot %= 60;
  time.maalot += Math.floor(time.helek / 60);
  time.helek %= 60;
  if (time.maalot >= 360) time.maalot %= 360;
  return time;
};

const zmzm4 = (time) => {
  time.shlishiot += Math.floor(time.reviot / 60);
  time.reviot %= 60;
  time.shniot += Math.floor(time.shlishiot / 60);
  time.shlishiot %= 60;
  time.helek += Math.floor(time.shniot / 60);
  time.shniot %= 60;
  time.maalot += Math.floor(time.helek / 60);
  time.helek %= 60;
  if (time.maalot >= 360) time.maalot %= 360;
  return time;
};

const multiplyTime = (time, multiplier) => ({
  maalot: time.maalot * multiplier,
  helek: time.helek * multiplier,
  shniot: time.shniot * multiplier,
  shlishiot: time.shlishiot * multiplier,
  reviot: time.reviot * multiplier,
});

const calculateTimeDifference = (BigTime, SmallTime) => {
  let maalotDiff = BigTime.maalot - SmallTime.maalot;
  let helekDiff = BigTime.helek - SmallTime.helek;
  let shniotDiff = BigTime.shniot - SmallTime.shniot;

  if (shniotDiff < 0) {
    helekDiff -= 1;
    shniotDiff += 60;
  }
  if (helekDiff < 0) {
    maalotDiff -= 1;
    helekDiff += 60;
  }
  if (maalotDiff < 0) maalotDiff += 360;

  return { maalot: maalotDiff, helek: helekDiff, shniot: shniotDiff };
};

const Double = (time) => {
  time.maalot *= 2;
  time.helek *= 2;
  time.shniot *= 2;
  return zmzm2(time);
};

const YareachTooSee = (maalot) => {
  if ((maalot >= 0 && maalot < 15) || (maalot >= 345 && maalot < 360)) return 15;
  if (maalot >= 15 && maalot < 60) return 15;
  if (maalot >= 60 && maalot < 120) return 30;
  if (maalot >= 120 && maalot < 165) return 15;
  if (maalot >= 165 && maalot < 195) return 0;
  if (maalot >= 195 && maalot < 240) return -15;
  if (maalot >= 240 && maalot < 300) return -30;
  if (maalot >= 300 && maalot < 345) return -15;
};

const EmthzaShemeshPage = () => {
  const [inputYear, setInputYear] = useState('');
  const [daysDifference, setDaysDifference] = useState(null);
  const [isCalculated, setIsCalculated] = useState(false);
  const [formattedDate, setFormattedDate] = useState("");

  const [FixedEmtza, setFixedEmtza] = useState({ maalot: 0, helek: 0, shniot: 0 });
  const [FixedGova, setFixedGova] = useState({ maalot: 0, helek: 0, shniot: 0 });
  const [Maslul, setMaslul] = useState({ maalot: 0, helek: 0, shniot: 0 });
  const [mana, setMana] = useState({ maalot: 0, helek: 0, shniot: 0 });
  const [RealShemeshPosition, setRealShemeshPosition] = useState({ maalot: 0, helek: 0, shniot: 0 });

  const [FixedEmtzaYareach, setFixedEmtzaYareach] = useState({ maalot: 0, helek: 0, shniot: 0 });
  const [FixedMaslulYareach, setFixedMaslulYareach] = useState({ maalot: 0, helek: 0, shniot: 0 });
  const [Tikun, setTikun] = useState(0);
  const [Kaful, setKaful] = useState({ maalot: 0, helek: 0, shniot: 0 });

  const handleInputChange = (e) => {
    setInputYear(e.target.value);
  };

  const handleValidation = () => {
    const day = Number(document.getElementById('Day').value);
    const month = Number(document.getElementById('Month').value);

    if (inputYear >= 1000 && inputYear <= 3000 && day && month) {
      const parsedDate = new Date(inputYear, month - 1, day);
      setFormattedDate(parsedDate.toLocaleDateString());
      setDaysDifference(DaysFromYomIkar(parsedDate));
      setIsCalculated(true);
    } else {
      alert('אנא הכנס תאריך חוקי (שנה בין 1000 ל-3000)');
    }
  };

  useEffect(() => {
    if (daysDifference !== null) {
      const EmthzaShemesh1day = { maalot: 0, helek: 0, shniot: 0, shlishiot: 0, reviot: 12773988 };
      const multipliedTime = multiplyTime(EmthzaShemesh1day, daysDifference);

      multipliedTime.maalot += 7;
      multipliedTime.helek += 3;
      multipliedTime.shniot += 32;

      setFixedEmtza(zmzm4(multipliedTime));

      const GovaShemesh1Day = { maalot: 0, helek: 0, shniot: 0, shlishiot: 9 };
      const MultipliedGova = multiplyTime(GovaShemesh1Day, daysDifference);

      MultipliedGova.maalot += 86;
      MultipliedGova.helek += 45;
      MultipliedGova.shniot += 8;

      setFixedGova(zmzm3(MultipliedGova));

      const MaslulTemp = calculateTimeDifference(multipliedTime, MultipliedGova);
      setMaslul(MaslulTemp);

      const manaTemp = { maalot: 0, helek: (MaslulTemp.maalot % 30) * 2, shniot: 0 };
      setMana(zmzm2(manaTemp));

      let tikunVal = YareachTooSee(multipliedTime.maalot);
      setTikun(tikunVal);

      const RealShemeshTemp = zmzm2(calculateTimeDifference(multipliedTime, manaTemp));
      setRealShemeshPosition(RealShemeshTemp);

      const EmthzaYareach1day = { maalot: 0, helek: 0, shniot: 13 * 60 * 60 + 10 * 60 + 35 };
      const multipliedTimeYareach = multiplyTime(EmthzaYareach1day, daysDifference);
      multipliedTimeYareach.maalot += 31;
      multipliedTimeYareach.helek += 14 + tikunVal;
      multipliedTimeYareach.shniot += 43;
      setFixedEmtzaYareach(zmzm2(multipliedTimeYareach));

      const EmthzaMaslul1day = { maalot: 0, helek: 0, shniot: 13 * 60 * 60 + 3 * 60 + 54 };
      const multipliedTimeMaslul = multiplyTime(EmthzaMaslul1day, daysDifference);
      multipliedTimeMaslul.maalot += 84;
      multipliedTimeMaslul.helek += 28;
      multipliedTimeMaslul.shniot += 42;
      setFixedMaslulYareach(zmzm2(multipliedTimeMaslul));

      setKaful(Double(calculateTimeDifference(multipliedTime, multipliedTimeYareach)));
    }
  }, [daysDifference]);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>הכנס תאריך כאן</h2>

      <div style={{
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
  flexWrap: "wrap",
  marginBottom: "20px",
  direction: "rtl"
}}>
  
  <input
    type="number"
    value={inputYear}
    onChange={handleInputChange}
    placeholder="הכנס שנה"
    style={{
      height: "35px",
      width: "120px",
      fontSize: "16px",
      textAlign: "center",
      borderRadius: "6px",
      padding: "0 10px"
    }}
  />

  <select id="Month" defaultValue="" style={{
    height: "40px",
    width: "120px",
    fontSize: "16px",
    borderRadius: "6px",
    padding: "0 10px"
  }}>
    <option value="">--בחר חודש--</option>
    {[...Array(12)].map((_, i) => (
      <option key={i + 1} value={i + 1}>{i + 1}</option>
    ))}
  </select>

  <select id="Day" defaultValue="" style={{
    height: "40px",
    width: "100px",
    fontSize: "16px",
    borderRadius: "6px",
    padding: "0 10px"
  }}>
    <option value="">--בחר יום--</option>
    {[...Array(31)].map((_, i) => (
      <option key={i + 1} value={i + 1}>{i + 1}</option>
    ))}
  </select>

  

  <button
    onClick={handleValidation}
    style={{
      height: "40px",
      fontSize: "16px",
      borderRadius: "6px",
      backgroundColor: "#4CAF50",
      color: "white",
      border: "none",
      cursor: "pointer",
      padding: "0 20px",
      transition: "background-color 0.3s"
    }}
    onMouseOver={(e) => e.target.style.backgroundColor = '#45a049'}
    onMouseOut={(e) => e.target.style.backgroundColor = '#4CAF50'}
  >
    התחל לחשב
  </button>
</div>



      <hr style={{ width: "60%", margin: "auto", marginBottom: "20px" }} />

      {isCalculated && (
  <div style={{
    marginTop: "20px",
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "20px",
    justifyItems: "center"
  }}>
    {[
      { label: "התאריך הנבחר", value: formattedDate },
      { label: "אמצע השמש", value: `${FixedEmtza.maalot}° : ${FixedEmtza.helek}' : ${FixedEmtza.shniot}''` },
      { label: "גובה השמש", value: `${FixedGova.maalot}° : ${FixedGova.helek}' : ${FixedGova.shniot}''` },
      { label: "מסלול השמש", value: `${Maslul.maalot}°` },
      { label: "מנת המסלול", value: `${mana.maalot}° : ${mana.helek}'` },
      { label: "מיקום השמש האמיתי", value: `${RealShemeshPosition.maalot}° : ${RealShemeshPosition.helek}' : ${RealShemeshPosition.shniot}''` },
      { label: "אמצע ירח", value: `${FixedEmtzaYareach.maalot}° : ${FixedEmtzaYareach.helek}' : ${FixedEmtzaYareach.shniot}''` },
      { label: "אמצע מסלול ירח", value: `${FixedMaslulYareach.maalot}° : ${FixedMaslulYareach.helek}' : ${FixedMaslulYareach.shniot}''` },
      { label: "תיקון", value: `${Tikun}'` },
      { label: "מרחק כפול", value: `${Kaful.maalot}° : ${Kaful.helek}' : ${Kaful.shniot}''` }
    ].map((item, idx) => (
      <div key={idx} style={{
        backgroundColor: "#f9f9f9",
        padding: "10px",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        width: "220px",
        minHeight: "100px",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        animation: "fadeIn 1s ease forwards",   // ✅ שורת האנימציה
        opacity: 0                                // ✅ מתחיל מוסתר
      }}>
        <p style={{ margin: "5px 0", fontWeight: "bold" }}>{item.label}</p>
        <p style={{ margin: "0" }}>{item.value}</p>
      </div>
    ))}
  </div>
)}

</div>
  );
};

export default EmthzaShemeshPage;
