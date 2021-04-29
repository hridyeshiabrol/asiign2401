import "./App.css";
import React from "react";
import { PieChart, Pie, Tooltip ,  } from "recharts";

const data01 = [
  { name: "Group1", studentnumber: 100 },
  { name: "Group2", studentnumber: 95 },
  { name: "Group3", studentnumber: 33 },
  { name: "Group4", studentnumber: 44 },
  { name: "Group5", studentnumber: 57 },
  { name: "Group6", studentnumber: 68 },
  { name: "Group7", studentnumber: 71 },
  { name: "Group8", studentnumber: 82 },
  { name: "Group9", studentnumber: 93 },
  { name: "Group10", studentnumber: 84 },
  { name: "Group11", studentnumber: 75 },
  { name: "Group12", studentnumber: 26 },

  { name: "Group13", studentnumber: 1 },
  { name: "Group14", studentnumber: 5 },
  { name: "Group15", studentnumber: 3 },
  { name: "Group16", studentnumber: 4 },
  { name: "Group17", studentnumber: 57 },
  { name: "Group18", studentnumber: 68 },
  { name: "Group19", studentnumber: 71 },
  { name: "Group20", studentnumber: 82 },
  { name: "Group21", studentnumber: 93 },
  { name: "Group22", studentnumber: 84 },
  { name: "Group23", studentnumber: 75 },
  { name: "Group24", studentnumber: 26 },
  { name: "Group25", studentnumber: 6 },

];

export default function App() {
  return (
    <div className="style">
    <center> <h2>Pie Chart Of Records</h2></center>
   
    <PieChart width={2000} height={1000}>
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
