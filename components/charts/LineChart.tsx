"use client";

import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export function LineChart({ title, values }: { title: string; values: number[] }) {
  return (
    <Line
      data={{
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
          {
            label: title,
            data: values,
            borderColor: "#ec6f9d",
            backgroundColor: "rgba(236, 111, 157, 0.16)",
            tension: 0.42,
            fill: true
          }
        ]
      }}
      options={{
        responsive: true,
        plugins: { legend: { display: false }, title: { display: false } },
        scales: { y: { grid: { color: "rgba(201, 167, 255, 0.18)" } }, x: { grid: { display: false } } }
      }}
    />
  );
}
