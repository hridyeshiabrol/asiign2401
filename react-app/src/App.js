import "./App.css";
import React from "react";
import { PieChart, Pie, Tooltip ,  } from "recharts";

const data01 = [
  { name: "College1", studentnumber: 100 },
  { name: "College2", studentnumber: 95 },
  { name: "College3", studentnumber: 33 },
  { name: "College4", studentnumber: 44 },
  { name: "College5", studentnumber: 57 },
  { name: "College6", studentnumber: 68 },
  { name: "College7", studentnumber: 71 },
  { name: "College8", studentnumber: 82 },
  { name: "College9", studentnumber: 93 },
  { name: "College10", studentnumber: 84 },
  { name: "College11", studentnumber: 75 },
  { name: "College12", studentnumber: 26 },

  { name: "College13", studentnumber: 1 },
  { name: "College14", studentnumber: 5 },
  { name: "College15", studentnumber: 3 },
  { name: "College16", studentnumber: 4 },
  { name: "College17", studentnumber: 57 },
  { name: "College18", studentnumber: 68 },
  { name: "College19", studentnumber: 71 },
  { name: "College20", studentnumber: 82 },
  { name: "College21", studentnumber: 93 },
  { name: "College22", studentnumber: 84 },
  { name: "College23", studentnumber: 75 },
  { name: "College24", studentnumber: 26 },
  { name: "College25", studentnumber: 6 },

];

export default function App() {
  return (
    <div className="style">
    <center> <h2>Pie Chart Of Records</h2></center>
   
    <PieChart width={900} height={900}>
      <Pie width={800} height={900}
        dataKey="studentnumber"
        isAnimationActive={false}
        data={data01}
        cx={600}
        cy={300}
        outerRadius={200}
        fill="#8884d9"
        label
      />
      <Tooltip />
    </PieChart>
    </div>
  );
}
