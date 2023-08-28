import React, { useState } from "react";
export const yapilacaklar = [
  { id: "1", iş: "iş1" },
  { id: "2", iş: "iş2" },
  { id: "3", iş: "iş3" },
  { id: "4", iş: "iş4" },
  { id: "5", iş: "iş5" },
  { id: "6", iş: "iş6" },
];
export default function YapilacaklarListesi() {
  const [Box, setBox] = useState(null);

  const işaretle = (id) => {
    Box === id ? setBox(null) : setBox(id);
  };
  const ClassAdiAl = (id) => {
    Box === id ? "active" : "";
  };
  return (
    <div className="container">
      <h2>Yapılacak İşler</h2>
      <div>
        {yapilacaklar.map((item) => (
          <div className="div-isler" key={item.id}>
            <label htmlFor={item.id}>
              {/* inputa verilen id ile labela verilen for(ancak burada htmlFor) kelimeye click edilince check eder. */}
              {item.iş}
            </label>
            <input
              type="checkbox"
              id={item.id}
              onClick={() => işaretle(item.id)}
              className={ClassAdiAl(item.id)}
            ></input>
          </div>
        ))}
      </div>
    </div>
  );
}
