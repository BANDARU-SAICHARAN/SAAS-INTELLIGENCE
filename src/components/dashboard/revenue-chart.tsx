"use client";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  Tooltip,
} from "recharts";

const data = [
  { month: "Jan", revenue: 12000 },
  { month: "Feb", revenue: 18000 },
  { month: "Mar", revenue: 24000 },
  { month: "Apr", revenue: 22000 },
  { month: "May", revenue: 31000 },
  { month: "Jun", revenue: 42000 },
  { month: "Jul", revenue: 48000 },
];

export default function RevenueChart() {
  return (
    <div className="h-72 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="revenue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#06b6d4" stopOpacity={0} />
            </linearGradient>
          </defs>

          <XAxis
            dataKey="month"
            tick={{ fill: "#94a3b8" }}
            axisLine={false}
            tickLine={false}
          />

          <Tooltip />

          <Area
            type="monotone"
            dataKey="revenue"
            stroke="#06b6d4"
            strokeWidth={3}
            fill="url(#revenue)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}