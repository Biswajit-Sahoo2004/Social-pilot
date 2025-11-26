// import React from "react";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
//   CartesianGrid,
//   BarChart,
//   Bar
// } from "recharts";

// const PerformanceChart = () => {
//   // Mock demo data (later replaced by Supabase analytics)
//   const data = [
//     { month: "Jan", reach: 4000, engagement: 2400 },
//     { month: "Feb", reach: 3500, engagement: 2210 },
//     { month: "Mar", reach: 5000, engagement: 2290 },
//     { month: "Apr", reach: 4780, engagement: 2000 },
//     { month: "May", reach: 5890, engagement: 2500 },
//     { month: "Jun", reach: 6390, engagement: 3000 },
//   ];

//   return (
//     <div className="glass-card p-6 rounded-2xl card-float">
//       <h2 className="text-white text-xl font-semibold mb-4">Performance Trends</h2>

//       {/* LINE CHART */}
//       <div className="w-full h-64 mb-10">
//         <ResponsiveContainer width="100%" height="100%">
//           <LineChart data={data}>
//             <CartesianGrid stroke="rgba(255,255,255,0.1)" />
//             <XAxis dataKey="month" stroke="white" />
//             <YAxis stroke="white" />
//             <Tooltip contentStyle={{ background: "rgba(0,0,0,0.7)", borderRadius: "8px" }} />
//             <Line type="monotone" dataKey="reach" stroke="#8A2BE2" strokeWidth={3} />
//           </LineChart>
//         </ResponsiveContainer>
//       </div>

//       {/* BAR CHART */}
//       <div className="w-full h-64">
//         <ResponsiveContainer width="100%" height="100%">
//           <BarChart data={data}>
//             <CartesianGrid stroke="rgba(255,255,255,0.1)" />
//             <XAxis dataKey="month" stroke="white" />
//             <YAxis stroke="white" />
//             <Tooltip contentStyle={{ background: "rgba(0,0,0,0.7)", borderRadius: "8px" }} />
//             <Bar dataKey="engagement" fill="#4ECDC4" />
//           </BarChart>
//         </ResponsiveContainer>
//       </div>
//     </div>
//   );
// };

// export default PerformanceChart;
