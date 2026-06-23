import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { motion } from "framer-motion";
import Navbar from "../../../components/nav/Navbar";
import Footer from "../../../components/footer/Footer";
import kilimanjaroRoutes from "../../../../kilimanjaro-routes.json";

// Icons
import { FaArrowLeft, FaClock, FaMountain, FaUtensils, FaUserShield, FaCampground, FaDollarSign, FaInfoCircle, FaStar, FaUsers, FaCheckCircle } from "react-icons/fa";
import { IoWalkSharp } from "react-icons/io5";
import { MdOutlineSecurity } from "react-icons/md";

const CDN_URL = import.meta.env.VITE_CDN_URL;

interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  accommodation?: string;
  distance_km?: number;
  distance_mi?: number;
  duration_hours?: string;
  terrain?: string;
  elevation_start_m?: number;
  elevation_start_ft?: number;
  elevation_end_m?: number;
  elevation_end_ft?: number;
  altitude_gained_m?: number;
  altitude_lost_m?: number;
  ascent?: {
    distance_km?: number;
    distance_mi?: number;
    duration_hours?: string;
    elevation_start_m?: number;
    elevation_start_ft?: number;
    elevation_end_m?: number;
    elevation_end_ft?: number;
    terrain?: string;
  };
  descent?: {
    distance_km?: number;
    distance_mi?: number;
    duration_hours?: string;
    elevation_start_m?: number;
    elevation_start_ft?: number;
    elevation_end_m?: number;
    elevation_end_ft?: number;
  };
}

interface RouteDetail {
  id: string;
  title: string;
  duration: string;
  difficulty: string;
  scenery: string;
  traffic: string;
  description: string;
  highlights: string[];
  imageSrc: string;
  features: string[];
  itinerary: ItineraryDay[];
  included: {
    crew?: string[];
    equipment?: string[];
    food_and_drink?: string[];
    health_and_safety?: string[];
    fees?: string[];
    accommodation_and_transfers?: string[];
  };
  excluded: string[];
  pricing?: {
    "1_person"?: number;
    "2_3_people"?: number;
    "4_6_people"?: number;
    "7_plus_people"?: number;
    currency?: string;
  };
  tipping_guide?: {
    lead_guide_per_day?: number;
    assistant_guide_per_day?: number;
    cook_per_day?: number;
    porter_per_day?: number;
    currency?: string;
  };
}

const KilimanjaroRouteDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<"overview" | "itinerary" | "pricing" | "prep">("overview");
  const [activeDay, setActiveDay] = useState<number>(0);

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  const routeDataRaw = kilimanjaroRoutes.find((r) => r.id === id);
  if (!routeDataRaw) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <main className="grow flex flex-col items-center justify-center py-20 px-6 font-body">
          <h2 className="text-3xl font-black text-deep-charcoal mb-4">Route Not Found</h2>
          <p className="text-muted-grey mb-8">The requested Kilimanjaro route could not be found.</p>
          <button
            onClick={() => navigate("/routes")}
            className="px-6 py-3 bg-primary text-white font-bold rounded-xl flex items-center gap-2 hover:bg-primary-dark transition shadow-md cursor-pointer"
          >
            <FaArrowLeft /> Back to All Routes
          </button>
        </main>
        <Footer />
      </div>
    );
  }

  // Cast JSON data safely
  const route = routeDataRaw as unknown as RouteDetail;

  // Resolve Image
  const resolvedImageSrc = route.imageSrc ? `${CDN_URL}/src${route.imageSrc}` : `${CDN_URL}/src/assets/img/machame.jpg`;

  // Estimate a success rate based on duration
  const successRate = route.duration.includes("9")
    ? "95%"
    : route.duration.includes("8")
    ? "90%"
    : route.duration.includes("7")
    ? "85%"
    : route.duration.includes("6")
    ? "75%"
    : "60%";

  return (
    <div className="min-h-screen w-full flex flex-col bg-gray-50 font-body">
      <Navbar />

      {/* Header Back Button Row */}
      <div className="pt-24 pb-4 px-6 md:px-12 max-w-7xl mx-auto w-full">
        <button
          onClick={() => navigate("/routes")}
          className="flex items-center gap-2 text-sm font-bold text-gray-600 hover:text-primary transition group cursor-pointer"
        >
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          Back to Routes Listing
        </button>
      </div>

      {/* Hero Banner Section */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto w-full mb-12">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[400px] md:h-[500px]">
          {/* Background Image */}
          <img
            src={resolvedImageSrc}
            alt={route.title}
            className="w-full h-full object-cover"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
          
          {/* Hero Content */}
          <div className="absolute bottom-0 left-0 p-6 md:p-12 w-full flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-3xl">
              {/* Badges */}
              <div className="flex flex-wrap gap-2.5 mb-4">
                <span className="bg-primary text-white text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full border border-primary/20">
                  {route.duration}
                </span>
                <span className={`text-white text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full border ${
                  route.difficulty === "Medium"
                    ? "bg-emerald-600 border-emerald-500"
                    : route.difficulty === "Hard"
                    ? "bg-amber-600 border-amber-500"
                    : "bg-rose-600 border-rose-500"
                }`}>
                  {route.difficulty} Difficulty
                </span>
                <span className="bg-white/20 backdrop-blur-md text-white text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full">
                  Success Rate: {successRate}
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tight">
                {route.title}
              </h1>
              <p className="text-gray-200/90 text-sm md:text-base mt-4 font-medium leading-relaxed max-w-2xl">
                {route.description}
              </p>
            </div>
            {/* Quick Pricing widget */}
            {route.pricing?.["2_3_people"] && (
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl text-white shadow-lg flex flex-col items-center justify-center min-w-[180px]">
                <span className="text-xs font-bold text-gray-300 uppercase tracking-wider">Starting From</span>
                <span className="text-3xl font-black mt-1">${route.pricing["2_3_people"]}</span>
                <span className="text-[10px] text-gray-300 font-semibold mt-1">per person (group price)</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Main Details Grid */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto w-full pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Columns (Tabs & Tabs Content) */}
          <div className="lg:col-span-2 flex flex-col">
            {/* Tab Controls */}
            <div className="flex border-b border-gray-200 overflow-x-auto scrollbar-none mb-8">
              {[
                { id: "overview", label: "Overview" },
                { id: "itinerary", label: "Daily Itinerary" },
                { id: "pricing", label: "Pricing & Inclusions" },
                { id: "prep", label: "Climb Prep & Safety" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`py-4 px-6 font-bold text-sm border-b-2 transition-all shrink-0 cursor-pointer ${
                    activeTab === tab.id
                      ? "border-primary text-primary"
                      : "border-transparent text-muted-grey hover:text-deep-charcoal"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Panels */}
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-md border border-gray-100">
              
              {/* PANEL 1: OVERVIEW */}
              {activeTab === "overview" && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-black text-deep-charcoal mb-4">Route Highlights</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {route.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start gap-3 bg-gray-50 p-4 rounded-2xl border border-gray-200/50">
                          <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                            <FaCheckCircle size={14} />
                          </span>
                          <span className="text-sm font-semibold text-gray-700 leading-relaxed">
                            {highlight}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-deep-charcoal mb-4">Route Characteristics</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="p-4 bg-gray-50 border border-gray-150 rounded-2xl flex flex-col items-center justify-center text-center">
                        <FaStar className="text-amber-500 mb-2" size={20} />
                        <span className="text-xs font-bold text-gray-400 uppercase">Scenery</span>
                        <span className="text-sm font-extrabold text-deep-charcoal mt-1">{route.scenery}</span>
                      </div>
                      <div className="p-4 bg-gray-50 border border-gray-150 rounded-2xl flex flex-col items-center justify-center text-center">
                        <FaUsers className="text-primary mb-2" size={20} />
                        <span className="text-xs font-bold text-gray-400 uppercase">Traffic</span>
                        <span className="text-sm font-extrabold text-deep-charcoal mt-1">{route.traffic}</span>
                      </div>
                      <div className="p-4 bg-gray-50 border border-gray-150 rounded-2xl flex flex-col items-center justify-center text-center">
                        <FaCampground className="text-secondary mb-2" size={20} />
                        <span className="text-xs font-bold text-gray-400 uppercase">Lodging</span>
                        <span className="text-sm font-extrabold text-deep-charcoal mt-1">
                          {route.id.includes("marangu") ? "Wooden Huts" : "Mobile Camping"}
                        </span>
                      </div>
                      <div className="p-4 bg-gray-50 border border-gray-150 rounded-2xl flex flex-col items-center justify-center text-center">
                        <FaClock className="text-primary mb-2" size={20} />
                        <span className="text-xs font-bold text-gray-400 uppercase">Climb Period</span>
                        <span className="text-sm font-extrabold text-deep-charcoal mt-1">{route.duration}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* PANEL 2: DAILY ITINERARY */}
              {activeTab === "itinerary" && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col md:flex-row gap-8">
                  {/* Daily Selection Tabs */}
                  <div className="flex md:flex-col gap-2 overflow-x-auto md:w-32 border-b md:border-b-0 md:border-r border-gray-150 pb-4 md:pb-0 shrink-0 scrollbar-none">
                    {route.itinerary.map((day, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveDay(idx)}
                        className={`py-2.5 px-4 font-bold text-xs uppercase rounded-xl tracking-wider text-left transition shrink-0 cursor-pointer ${
                          activeDay === idx
                            ? "bg-primary text-white shadow-md"
                            : "text-muted-grey hover:bg-gray-100 hover:text-deep-charcoal"
                        }`}
                      >
                        Day {day.day === 0 ? "Arr" : day.day === route.itinerary.length - 1 && day.day !== 0 ? "Dep" : day.day}
                      </button>
                    ))}
                  </div>

                  {/* Day Content */}
                  <div className="grow space-y-6">
                    <div>
                      <span className="text-xs font-extrabold text-primary uppercase tracking-widest">
                        {route.itinerary[activeDay].day === 0 ? "Arrival / Briefing" : `Day ${route.itinerary[activeDay].day} Detail`}
                      </span>
                      <h4 className="text-2xl font-black text-deep-charcoal mt-1">
                        {route.itinerary[activeDay].title}
                      </h4>
                    </div>

                    <p className="text-muted-grey text-sm font-medium leading-relaxed">
                      {route.itinerary[activeDay].description}
                    </p>

                    {/* Stats grid for active day */}
                    {(route.itinerary[activeDay].distance_km || route.itinerary[activeDay].terrain || route.itinerary[activeDay].elevation_end_m || route.itinerary[activeDay].ascent) && (
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-gray-100 pt-6">
                        {/* Distance */}
                        {route.itinerary[activeDay].distance_km && (
                          <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-xl bg-gray-50 border border-gray-150 flex items-center justify-center text-primary">
                              <IoWalkSharp size={18} />
                            </div>
                            <div>
                              <div className="text-[10px] text-gray-400 font-bold uppercase">Distance</div>
                              <div className="text-sm font-extrabold text-deep-charcoal">
                                {route.itinerary[activeDay].distance_km} km / {route.itinerary[activeDay].distance_mi} mi
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Duration */}
                        {route.itinerary[activeDay].duration_hours && (
                          <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-xl bg-gray-50 border border-gray-150 flex items-center justify-center text-primary">
                              <FaClock size={16} />
                            </div>
                            <div>
                              <div className="text-[10px] text-gray-400 font-bold uppercase">Trek Duration</div>
                              <div className="text-sm font-extrabold text-deep-charcoal">
                                {route.itinerary[activeDay].duration_hours} hrs
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Terrain */}
                        {route.itinerary[activeDay].terrain && (
                          <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-xl bg-gray-50 border border-gray-150 flex items-center justify-center text-primary">
                              <FaMountain size={16} />
                            </div>
                            <div>
                              <div className="text-[10px] text-gray-400 font-bold uppercase">Terrain</div>
                              <div className="text-sm font-extrabold text-deep-charcoal truncate max-w-[140px]">
                                {route.itinerary[activeDay].terrain}
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Starting Elevation */}
                        {route.itinerary[activeDay].elevation_start_m && (
                          <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-xl bg-gray-50 border border-gray-150 flex items-center justify-center text-primary">
                              <FaMountain size={16} />
                            </div>
                            <div>
                              <div className="text-[10px] text-gray-400 font-bold uppercase">Start Elev</div>
                              <div className="text-sm font-extrabold text-deep-charcoal">
                                {route.itinerary[activeDay].elevation_start_m}m ({route.itinerary[activeDay].elevation_start_ft}ft)
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Ending Elevation */}
                        {route.itinerary[activeDay].elevation_end_m && (
                          <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-xl bg-gray-50 border border-gray-150 flex items-center justify-center text-primary">
                              <FaMountain size={16} />
                            </div>
                            <div>
                              <div className="text-[10px] text-gray-400 font-bold uppercase">End Elev</div>
                              <div className="text-sm font-extrabold text-deep-charcoal">
                                {route.itinerary[activeDay].elevation_end_m}m ({route.itinerary[activeDay].elevation_end_ft}ft)
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Lodging */}
                        {route.itinerary[activeDay].accommodation && (
                          <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-xl bg-gray-50 border border-gray-150 flex items-center justify-center text-primary">
                              <FaCampground size={16} />
                            </div>
                            <div>
                              <div className="text-[10px] text-gray-400 font-bold uppercase">Lodging</div>
                              <div className="text-sm font-extrabold text-deep-charcoal truncate max-w-[140px]">
                                {route.itinerary[activeDay].accommodation}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Special Ascent / Descent Sub-sections (for summit night day) */}
                    {route.itinerary[activeDay].ascent && (
                      <div className="mt-6 bg-gray-50 border border-gray-200/60 p-5 rounded-2xl space-y-4">
                        <h5 className="font-extrabold text-sm text-deep-charcoal uppercase tracking-wider flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                          Summit Ascent Details
                        </h5>
                        <p className="text-xs text-muted-grey font-semibold leading-relaxed">
                          The final climb begins around midnight.
                          Terrain: {route.itinerary[activeDay].ascent?.terrain || "Scree & ice/snow"}.
                          Ascending from {route.itinerary[activeDay].ascent?.elevation_start_m}m ({route.itinerary[activeDay].ascent?.elevation_start_ft}ft) to {route.itinerary[activeDay].ascent?.elevation_end_m}m ({route.itinerary[activeDay].ascent?.elevation_end_ft}ft) over {route.itinerary[activeDay].ascent?.duration_hours} hours.
                        </p>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}

              {/* PANEL 3: PRICING & INCLUSIONS */}
              {activeTab === "pricing" && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
                  {route.pricing && (
                    <div>
                      <h3 className="text-2xl font-black text-deep-charcoal mb-4 flex items-center gap-2">
                        <FaDollarSign className="text-primary" />
                        Trek Package Pricing
                      </h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="p-4 bg-gray-50 border border-gray-150 rounded-2xl flex flex-col items-center justify-center">
                          <span className="text-[10px] text-gray-400 font-bold uppercase">Solo Climber</span>
                          <span className="text-2xl font-black text-deep-charcoal mt-1">${route.pricing["1_person"]}</span>
                        </div>
                        <div className="p-4 bg-gray-50 border border-gray-150 rounded-2xl flex flex-col items-center justify-center">
                          <span className="text-[10px] text-gray-400 font-bold uppercase">2-3 People</span>
                          <span className="text-2xl font-black text-deep-charcoal mt-1">${route.pricing["2_3_people"]}</span>
                        </div>
                        <div className="p-4 bg-gray-50 border border-gray-150 rounded-2xl flex flex-col items-center justify-center">
                          <span className="text-[10px] text-gray-400 font-bold uppercase">4-6 People</span>
                          <span className="text-2xl font-black text-deep-charcoal mt-1">${route.pricing["4_6_people"]}</span>
                        </div>
                        <div className="p-4 bg-gray-50 border border-gray-150 rounded-2xl flex flex-col items-center justify-center">
                          <span className="text-[10px] text-gray-400 font-bold uppercase">7+ People</span>
                          <span className="text-2xl font-black text-deep-charcoal mt-1">${route.pricing["7_plus_people"]}</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Included / Excluded columns */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-gray-100 pt-8">
                    <div>
                      <h4 className="text-lg font-black text-emerald-700 mb-4 flex items-center gap-2">
                        <FaCheckCircle /> Included in Package
                      </h4>
                      <ul className="space-y-3.5">
                        {Object.values(route.included).flat().map((inc, i) => (
                          <li key={i} className="text-xs font-semibold text-gray-600 flex items-start gap-2 leading-relaxed">
                            <span className="text-emerald-500 shrink-0 mt-0.5">•</span>
                            {inc}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-black text-rose-700 mb-4 flex items-center gap-2">
                        <FaInfoCircle /> Excluded / Extras
                      </h4>
                      <ul className="space-y-3.5">
                        {route.excluded.map((exc, i) => (
                          <li key={i} className="text-xs font-semibold text-gray-600 flex items-start gap-2 leading-relaxed">
                            <span className="text-rose-500 shrink-0 mt-0.5">•</span>
                            {exc}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* PANEL 4: PREP & SAFETY */}
              {activeTab === "prep" && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-black text-deep-charcoal mb-4 flex items-center gap-2">
                      <MdOutlineSecurity className="text-primary" />
                      Medical & Mountain Safety
                    </h3>
                    <p className="text-muted-grey text-sm font-semibold leading-relaxed mb-6">
                      Safety is our primary objective. Our team performs daily medical checks using pulse oximeters, assesses acute mountain sickness (AMS) symptom cards, and carries emergency oxygen systems.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 bg-gray-50 border border-gray-150 rounded-2xl flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                          <FaUserShield size={14} />
                        </div>
                        <div>
                          <h5 className="font-extrabold text-sm text-deep-charcoal">WFR-Trained Guides</h5>
                          <p className="text-xs text-muted-grey mt-1 font-semibold leading-relaxed">
                            Every lead guide is a Wilderness First Responder certified professional.
                          </p>
                        </div>
                      </div>
                      <div className="p-4 bg-gray-50 border border-gray-150 rounded-2xl flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                          <FaUtensils size={14} />
                        </div>
                        <div>
                          <h5 className="font-extrabold text-sm text-deep-charcoal">Nutritious Diet</h5>
                          <p className="text-xs text-muted-grey mt-1 font-semibold leading-relaxed">
                            Three fresh cooked meals daily, rich in carbs and protein, designed for high-altitude energy.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {route.tipping_guide && (
                    <div className="border-t border-gray-100 pt-8">
                      <h3 className="text-2xl font-black text-deep-charcoal mb-4">Mountain Tipping Guide</h3>
                      <p className="text-muted-grey text-sm font-semibold leading-relaxed mb-6">
                        Tipping the mountain crew is standard custom in Tanzania. Tips are collected as a group pool at the end of the climb during the gate ceremony.
                      </p>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="p-4 bg-gray-50 border border-gray-150 rounded-2xl flex flex-col items-center">
                          <span className="text-[10px] text-gray-400 font-bold uppercase">Lead Guide</span>
                          <span className="text-xl font-black text-deep-charcoal mt-1">${route.tipping_guide.lead_guide_per_day} / day</span>
                        </div>
                        <div className="p-4 bg-gray-50 border border-gray-150 rounded-2xl flex flex-col items-center">
                          <span className="text-[10px] text-gray-400 font-bold uppercase">Assistant Guide</span>
                          <span className="text-xl font-black text-deep-charcoal mt-1">${route.tipping_guide.assistant_guide_per_day} / day</span>
                        </div>
                        <div className="p-4 bg-gray-50 border border-gray-150 rounded-2xl flex flex-col items-center">
                          <span className="text-[10px] text-gray-400 font-bold uppercase">Head Cook</span>
                          <span className="text-xl font-black text-deep-charcoal mt-1">${route.tipping_guide.cook_per_day} / day</span>
                        </div>
                        <div className="p-4 bg-gray-50 border border-gray-150 rounded-2xl flex flex-col items-center">
                          <span className="text-[10px] text-gray-400 font-bold uppercase">Porters (Each)</span>
                          <span className="text-xl font-black text-deep-charcoal mt-1">${route.tipping_guide.porter_per_day} / day</span>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              )}

            </div>
          </div>

          {/* Right Column (Inquiry Sidebar Card) */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-muted-grey rounded-3xl p-6 md:p-8 shadow-lg sticky top-28 space-y-6">
              <div>
                <h4 className="text-xl font-black text-deep-charcoal">Book Your Expedition</h4>
                <p className="text-xs text-muted-grey font-semibold mt-1.5 leading-relaxed">
                  Ready to stand on top of Africa? Inquire about the {route.title} and receive a customized quote.
                </p>
              </div>

              {/* Inquiry form */}
              <div className="space-y-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] text-gray-400 font-extrabold uppercase tracking-wider">Trek Route</label>
                  <input
                    type="text"
                    disabled
                    value={route.title}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 font-bold text-xs text-gray-600 focus:outline-none"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] text-gray-400 font-extrabold uppercase tracking-wider">Preferred Month</label>
                  <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 font-bold text-xs text-deep-charcoal focus:outline-none cursor-pointer">
                    <option>January</option>
                    <option>February</option>
                    <option>March</option>
                    <option>June</option>
                    <option>July</option>
                    <option>August</option>
                    <option>September</option>
                    <option>October</option>
                    <option>December</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] text-gray-400 font-extrabold uppercase tracking-wider">Group Size</label>
                  <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 font-bold text-xs text-deep-charcoal focus:outline-none cursor-pointer">
                    <option>1 Climber (Solo)</option>
                    <option>2 - 3 Climbers</option>
                    <option>4 - 6 Climbers</option>
                    <option>7+ Climbers</option>
                  </select>
                </div>
              </div>

              {/* Book buttons */}
              <button
                onClick={() => {
                  const url = `https://wa.me/255762000000?text=Hi!%20I'm%20interested%20in%20booking%20the%20${encodeURIComponent(route.title)}%20(${route.duration}).`;
                  window.open(url, "_blank");
                }}
                className="w-full py-3.5 bg-secondary hover:bg-secondary-dark text-white font-extrabold text-xs uppercase tracking-wider rounded-xl transition shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                Inquire on WhatsApp
              </button>

              <div className="text-[10px] text-center font-bold text-muted-grey border-t border-gray-100 pt-4 flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                Guides available for custom departures
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default KilimanjaroRouteDetailPage;
