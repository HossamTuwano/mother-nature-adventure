import React, { useState } from "react";
import { useNavigate } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { FaCheckCircle, FaStar, FaUsers, FaArrowRight, FaExchangeAlt, FaTrophy, FaCompass } from "react-icons/fa";

interface ComparisonRow {
  id: string;
  name: string;
  duration: string;
  days: number;
  difficulty: "Medium" | "Hard" | "Very Hard";
  successRateVal: number; // average success rate for progress bar
  successRate: string;
  sceneryStars: number;
  scenery: string;
  trafficVal: number; // 1 (Very Low), 2 (Low), 3 (Medium), 4 (High)
  traffic: string;
  bestFor: string;
  accommodation: "Huts" | "Camping Tents";
}

const comparisonData: ComparisonRow[] = [
  {
    id: "marangu",
    name: "Marangu Route",
    duration: "5-6 Days",
    days: 6,
    difficulty: "Medium",
    successRateVal: 60,
    successRate: "50% - 70%",
    sceneryStars: 3,
    scenery: "Good",
    trafficVal: 4,
    traffic: "High",
    bestFor: "Comfort seekers (sleeping in wooden huts) & budget climbers",
    accommodation: "Huts",
  },
  {
    id: "machame",
    name: "Machame Route",
    duration: "6-7 Days",
    days: 7,
    difficulty: "Hard",
    successRateVal: 80,
    successRate: "75% - 85%",
    sceneryStars: 5,
    scenery: "Excellent",
    trafficVal: 4,
    traffic: "High",
    bestFor: "Scenic variety & physically active climbers who like steep trails",
    accommodation: "Camping Tents",
  },
  {
    id: "lemosho",
    name: "Lemosho Route",
    duration: "7-8 Days",
    days: 8,
    difficulty: "Hard",
    successRateVal: 88,
    successRate: "85% - 90%",
    sceneryStars: 5,
    scenery: "Excellent",
    trafficVal: 3,
    traffic: "Medium",
    bestFor: "High summit success rate, scenic beauty & gradual altitude gain",
    accommodation: "Camping Tents",
  },
  {
    id: "northern",
    name: "Northern Circuit",
    duration: "8-9 Days",
    days: 9,
    difficulty: "Hard",
    successRateVal: 93,
    successRate: "90% - 95%",
    sceneryStars: 5,
    scenery: "Excellent",
    trafficVal: 1,
    traffic: "Very Low",
    bestFor: "Solitude seekers, maximum acclimatization & panoramic views",
    accommodation: "Camping Tents",
  },
  {
    id: "rongai",
    name: "Rongai Route",
    duration: "6-7 Days",
    days: 7,
    difficulty: "Medium",
    successRateVal: 75,
    successRate: "70% - 80%",
    sceneryStars: 4,
    scenery: "Very Good",
    trafficVal: 2,
    traffic: "Low",
    bestFor: "Rainy season climbs (dry rain shadow side) & quiet routes",
    accommodation: "Camping Tents",
  },
  {
    id: "umbwe",
    name: "Umbwe Route",
    duration: "6-7 Days",
    days: 7,
    difficulty: "Very Hard",
    successRateVal: 55,
    successRate: "50% - 70%",
    sceneryStars: 4,
    scenery: "Very Good",
    trafficVal: 1,
    traffic: "Very Low",
    bestFor: "Experienced high-altitude trekkers seeking a steep challenge",
    accommodation: "Camping Tents",
  },
];

const RouteComparisonTable: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<"matrix" | "compare">("matrix");
  const [routeAId, setRouteAId] = useState<string>("lemosho");
  const [routeBId, setRouteBId] = useState<string>("marangu");

  const routeA = comparisonData.find((r) => r.id === routeAId) || comparisonData[2];
  const routeB = comparisonData.find((r) => r.id === routeBId) || comparisonData[0];

  const getTrafficColor = (val: number) => {
    if (val === 4) return "text-red-500 bg-red-50 border-red-200";
    if (val === 3) return "text-orange-500 bg-orange-50 border-orange-200";
    if (val === 2) return "text-yellow-500 bg-yellow-50 border-yellow-200";
    return "text-green-500 bg-green-50 border-green-200";
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mt-16 w-full font-body"
    >
      {/* Title & Tab Bar */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-8 gap-6">
        <div>
          <span className="text-xs uppercase tracking-widest font-extrabold text-primary mb-2 block">
            Plan Your Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-deep-charcoal tracking-tight flex items-center gap-3">
            <FaCompass className="text-primary animate-spin-slow" />
            Route Planning Hub
          </h2>
          <p className="text-muted-grey text-base mt-2 max-w-2xl leading-relaxed">
            Choose the optimal approach. Use our interactive matrix or compare two routes side-by-side to understand success rates, scenery, and difficulties.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex bg-gray-100 p-1.5 rounded-2xl border border-gray-200 shadow-inner">
          <button
            onClick={() => setActiveTab("matrix")}
            className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${
              activeTab === "matrix"
                ? "bg-white text-primary shadow-md"
                : "text-gray-600 hover:text-deep-charcoal"
            }`}
          >
            Comparison Matrix
          </button>
          <button
            onClick={() => setActiveTab("compare")}
            className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 flex items-center gap-2 ${
              activeTab === "compare"
                ? "bg-white text-primary shadow-md"
                : "text-gray-600 hover:text-deep-charcoal"
            }`}
          >
            <FaExchangeAlt />
            Side-by-Side Compare
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {activeTab === "matrix" ? (
          <motion.div
            key="matrix"
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 15 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-3xl p-6 md:p-8 shadow-2xl border border-gray-100/50 overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[800px]">
                <thead>
                  <tr className="border-b border-gray-150 text-gray-400">
                    <th className="pb-4 font-bold text-xs uppercase tracking-wider">Route</th>
                    <th className="pb-4 font-bold text-xs uppercase tracking-wider">Days</th>
                    <th className="pb-4 font-bold text-xs uppercase tracking-wider">Difficulty</th>
                    <th className="pb-4 font-bold text-xs uppercase tracking-wider">Summit Success Rate</th>
                    <th className="pb-4 font-bold text-xs uppercase tracking-wider">Scenery Rating</th>
                    <th className="pb-4 font-bold text-xs uppercase tracking-wider">Traffic / Crowds</th>
                    <th className="pb-4 font-bold text-xs uppercase tracking-wider">Lodging</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {comparisonData.map((row, index) => (
                    <tr key={index} className="hover:bg-gray-50/70 transition-all duration-200 group">
                      {/* Name */}
                      <td className="py-5 pr-4">
                        <div className="font-extrabold text-base text-deep-charcoal group-hover:text-primary transition-colors">
                          {row.name}
                        </div>
                        <div className="text-xs text-muted-grey mt-1 max-w-[240px] font-medium leading-relaxed">
                          {row.bestFor}
                        </div>
                      </td>

                      {/* Duration */}
                      <td className="py-5 pr-4">
                        <span className="font-bold text-sm text-deep-charcoal bg-gray-50 border border-gray-200/50 px-2.5 py-1 rounded-lg">
                          {row.duration}
                        </span>
                      </td>

                      {/* Difficulty */}
                      <td className="py-5 pr-4">
                        <span
                          className={`inline-flex px-2.5 py-1 rounded-full text-xs font-bold ${
                            row.difficulty === "Medium"
                              ? "bg-emerald-50 text-emerald-700 border border-emerald-100"
                              : row.difficulty === "Hard"
                              ? "bg-amber-50 text-amber-700 border border-amber-100"
                              : "bg-rose-50 text-rose-700 border border-rose-100"
                          }`}
                        >
                          {row.difficulty}
                        </span>
                      </td>

                      {/* Success Rate Progress */}
                      <td className="py-5 pr-4">
                        <div className="flex flex-col gap-1.5 w-40">
                          <span className="text-sm font-bold text-deep-charcoal">{row.successRate}</span>
                          <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden border border-gray-200/20">
                            <div
                              className={`h-full rounded-full ${
                                row.successRateVal >= 90
                                  ? "bg-gradient-to-r from-emerald-400 to-teal-500"
                                  : row.successRateVal >= 75
                                  ? "bg-gradient-to-r from-primary to-amber-500"
                                  : "bg-gradient-to-r from-orange-400 to-rose-500"
                              }`}
                              style={{ width: `${row.successRateVal}%` }}
                            />
                          </div>
                        </div>
                      </td>

                      {/* Scenery Stars */}
                      <td className="py-5 pr-4">
                        <div className="flex items-center gap-0.5">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <FaStar
                              key={i}
                              size={12}
                              className={i < row.sceneryStars ? "text-amber-500" : "text-gray-200"}
                            />
                          ))}
                          <span className="text-xs font-bold text-gray-700 ml-1.5">{row.scenery}</span>
                        </div>
                      </td>

                      {/* Traffic */}
                      <td className="py-5 pr-4">
                        <span
                          className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-bold border ${getTrafficColor(
                            row.trafficVal
                          )}`}
                        >
                          <FaUsers size={12} />
                          {row.traffic}
                        </span>
                      </td>

                      {/* Accommodation */}
                      <td className="py-5 text-sm font-semibold text-gray-600">
                        {row.accommodation}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="compare"
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 15 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-3xl p-6 md:p-8 shadow-2xl border border-gray-100/50"
          >
            {/* Interactive Selectors */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 items-center pb-8 border-b border-gray-100">
              {/* Route A Select */}
              <div className="lg:col-span-2 flex flex-col gap-2">
                <label className="text-xs font-extrabold text-gray-400 uppercase tracking-wider">Compare Route A</label>
                <select
                  value={routeAId}
                  onChange={(e) => setRouteAId(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3 font-bold text-deep-charcoal focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 cursor-pointer"
                >
                  {comparisonData.map((r) => (
                    <option key={r.id} value={r.id} disabled={r.id === routeBId}>
                      {r.name} ({r.duration})
                    </option>
                  ))}
                </select>
              </div>

              {/* Verses Icon */}
              <div className="flex justify-center items-center lg:col-span-1">
                <div className="w-12 h-12 bg-primary/10 text-primary border border-primary/20 rounded-full flex items-center justify-center font-black text-base shadow-sm">
                  VS
                </div>
              </div>

              {/* Route B Select */}
              <div className="lg:col-span-2 flex flex-col gap-2">
                <label className="text-xs font-extrabold text-gray-400 uppercase tracking-wider">Compare Route B</label>
                <select
                  value={routeBId}
                  onChange={(e) => setRouteBId(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3 font-bold text-deep-charcoal focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 cursor-pointer"
                >
                  {comparisonData.map((r) => (
                    <option key={r.id} value={r.id} disabled={r.id === routeAId}>
                      {r.name} ({r.duration})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Side by Side Contrast Rows */}
            <div className="mt-8 space-y-6">
              {/* Metric 1: Duration */}
              <div className="grid grid-cols-3 items-center py-2">
                <div className="text-right pr-6 font-bold text-sm md:text-base text-deep-charcoal">
                  {routeA.duration}
                </div>
                <div className="text-center font-extrabold text-xs uppercase tracking-wider text-gray-400 bg-gray-50 border border-gray-200/50 py-1.5 rounded-full">
                  Duration
                </div>
                <div className="text-left pl-6 font-bold text-sm md:text-base text-deep-charcoal">
                  {routeB.duration}
                </div>
              </div>

              {/* Metric 2: Success Rate */}
              <div className="grid grid-cols-3 items-center py-2">
                <div className="text-right pr-6 flex flex-col items-end gap-1">
                  <span className="font-extrabold text-lg text-deep-charcoal flex items-center gap-1.5">
                    {routeA.successRateVal > routeB.successRateVal && (
                      <FaTrophy className="text-amber-500 text-sm" />
                    )}
                    {routeA.successRate}
                  </span>
                  <div className="w-24 bg-gray-100 h-2 rounded-full overflow-hidden border border-gray-200/10">
                    <div className="bg-primary h-full rounded-full" style={{ width: `${routeA.successRateVal}%` }} />
                  </div>
                </div>
                <div className="text-center font-extrabold text-xs uppercase tracking-wider text-gray-400 bg-gray-50 border border-gray-200/50 py-1.5 rounded-full">
                  Success Rate
                </div>
                <div className="text-left pl-6 flex flex-col items-start gap-1">
                  <span className="font-extrabold text-lg text-deep-charcoal flex items-center gap-1.5">
                    {routeB.successRateVal > routeA.successRateVal && (
                      <FaTrophy className="text-amber-500 text-sm" />
                    )}
                    {routeB.successRate}
                  </span>
                  <div className="w-24 bg-gray-100 h-2 rounded-full overflow-hidden border border-gray-200/10">
                    <div className="bg-primary h-full rounded-full" style={{ width: `${routeB.successRateVal}%` }} />
                  </div>
                </div>
              </div>

              {/* Metric 3: Scenery */}
              <div className="grid grid-cols-3 items-center py-2">
                <div className="text-right pr-6 flex items-center justify-end gap-1.5 font-bold text-sm md:text-base text-deep-charcoal">
                  <span>{routeA.scenery}</span>
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <FaStar
                        key={i}
                        size={10}
                        className={i < routeA.sceneryStars ? "text-amber-500" : "text-gray-200"}
                      />
                    ))}
                  </div>
                </div>
                <div className="text-center font-extrabold text-xs uppercase tracking-wider text-gray-400 bg-gray-50 border border-gray-200/50 py-1.5 rounded-full">
                  Scenery
                </div>
                <div className="text-left pl-6 flex items-center justify-start gap-1.5 font-bold text-sm md:text-base text-deep-charcoal">
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <FaStar
                        key={i}
                        size={10}
                        className={i < routeB.sceneryStars ? "text-amber-500" : "text-gray-200"}
                      />
                    ))}
                  </div>
                  <span>{routeB.scenery}</span>
                </div>
              </div>

              {/* Metric 4: Difficulty */}
              <div className="grid grid-cols-3 items-center py-2">
                <div className="text-right pr-6">
                  <span
                    className={`inline-flex px-2.5 py-1 rounded-full text-xs font-bold ${
                      routeA.difficulty === "Medium"
                        ? "bg-emerald-50 text-emerald-700 border border-emerald-100"
                        : routeA.difficulty === "Hard"
                        ? "bg-amber-50 text-amber-700 border border-amber-100"
                        : "bg-rose-50 text-rose-700 border border-rose-100"
                    }`}
                  >
                    {routeA.difficulty}
                  </span>
                </div>
                <div className="text-center font-extrabold text-xs uppercase tracking-wider text-gray-400 bg-gray-50 border border-gray-200/50 py-1.5 rounded-full">
                  Difficulty
                </div>
                <div className="text-left pl-6">
                  <span
                    className={`inline-flex px-2.5 py-1 rounded-full text-xs font-bold ${
                      routeB.difficulty === "Medium"
                        ? "bg-emerald-50 text-emerald-700 border border-emerald-100"
                        : routeB.difficulty === "Hard"
                        ? "bg-amber-50 text-amber-700 border border-amber-100"
                        : "bg-rose-50 text-rose-700 border border-rose-100"
                    }`}
                  >
                    {routeB.difficulty}
                  </span>
                </div>
              </div>

              {/* Metric 5: Traffic */}
              <div className="grid grid-cols-3 items-center py-2">
                <div className="text-right pr-6">
                  <span
                    className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-bold border ${getTrafficColor(
                      routeA.trafficVal
                    )}`}
                  >
                    {routeA.traffic}
                  </span>
                </div>
                <div className="text-center font-extrabold text-xs uppercase tracking-wider text-gray-400 bg-gray-50 border border-gray-200/50 py-1.5 rounded-full">
                  Traffic
                </div>
                <div className="text-left pl-6">
                  <span
                    className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-bold border ${getTrafficColor(
                      routeB.trafficVal
                    )}`}
                  >
                    {routeB.traffic}
                  </span>
                </div>
              </div>

              {/* Metric 6: Accommodation */}
              <div className="grid grid-cols-3 items-center py-2">
                <div className="text-right pr-6 font-bold text-sm text-gray-700">{routeA.accommodation}</div>
                <div className="text-center font-extrabold text-xs uppercase tracking-wider text-gray-400 bg-gray-50 border border-gray-200/50 py-1.5 rounded-full">
                  Accommodation
                </div>
                <div className="text-left pl-6 font-bold text-sm text-gray-700">{routeB.accommodation}</div>
              </div>

              {/* Metric 7: Best For */}
              <div className="grid grid-cols-3 items-center py-2">
                <div className="text-right pr-6 text-xs md:text-sm font-semibold text-muted-grey max-w-[250px] ml-auto leading-relaxed">
                  {routeA.bestFor}
                </div>
                <div className="text-center font-extrabold text-xs uppercase tracking-wider text-gray-400 bg-gray-50 border border-gray-200/50 py-1.5 rounded-full">
                  Best For
                </div>
                <div className="text-left pl-6 text-xs md:text-sm font-semibold text-muted-grey max-w-[250px] mr-auto leading-relaxed">
                  {routeB.bestFor}
                </div>
              </div>
            </div>

            {/* Quick Verdict Banner */}
            <div className="mt-8 bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/20 rounded-2xl p-5 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                  <FaCheckCircle size={18} />
                </div>
                <div>
                  <h4 className="font-extrabold text-sm text-deep-charcoal">Quick Acclimatization Winner</h4>
                  <p className="text-xs text-muted-grey mt-0.5">
                    {routeA.days > routeB.days
                      ? `${routeA.name} provides better altitude safety due to its ${routeA.duration} climb.`
                      : routeB.days > routeA.days
                      ? `${routeB.name} provides better altitude safety due to its ${routeB.duration} climb.`
                      : "Both routes have equivalent climbing durations."}
                  </p>
                </div>
              </div>
              <button
                onClick={() => {
                  navigate("/routes");
                }}
                className="px-5 py-2.5 bg-primary hover:bg-primary-dark text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md shrink-0 flex items-center gap-2"
              >
                Inquire About Route
                <FaArrowRight />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default RouteComparisonTable;
