import React from "react";
import Navbar from "../../components/nav/Navbar";
import Footer from "../../components/footer/Footer";
import { motion } from "framer-motion";
import KilimanjaroRouteCard from "../../components/routes/KilimanjaroRouteCard";
import RouteComparisonTable from "../../components/routes/RouteComparisonTable";
const CDN_URL = import.meta.env.VITE_CDN_URL;


import kilimanjaroRoutes from "../../../kilimanjaro-routes.json";

const routes = kilimanjaroRoutes.map((route) => ({
  id: route.id,
  title: route.title,
  duration: route.duration,
  difficulty: route.difficulty,
  description: route.description,
  imageSrc: route.imageSrc ? `${CDN_URL}/src${route.imageSrc}` : `${CDN_URL}/src/assets/img/machame.jpg`,
  features: route.features || [],
}));

const KilimanjaroRoutesPage: React.FC = () => {
  return (
    <div className="min-h-screen w-full flex flex-col bg-gray-50">
      {/* Header */}
      <Navbar />

      {/* Main Content Area - Empty for now */}
      <main className="grow ">
        <div className="flex h-screen bg-white text-deep-charcoal font-body">
          {/* Fixed Left Sidebar */}
          <aside className="w-1/3 h-full border-r border-muted-grey p-8 flex flex-col justify-center sticky top-0">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="max-w-sm"
            >
              <h1 className="text-5xl font-bold leading-tight mb-6">
                Conquer the{" "}
                <span className="text-earth-tone">Roof of Africa</span>
              </h1>
              <p className="text-muted-grey text-lg mb-8 leading-relaxed">
                Explore our curated Kilimanjaro routes. Whether you seek the
                fastest path or the most scenic journey, we provide the
                expertise to get you to the summit.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm font-semibold">
                  <div className="w-2 h-2 rounded-full bg-earth-tone" />
                  <span>Professional Mountain Guides</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-semibold">
                  <div className="w-2 h-2 rounded-full bg-earth-tone" />
                  <span>High Summit Success Rate</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-semibold">
                  <div className="w-2 h-2 rounded-full bg-earth-tone" />
                  <span>Eco-Friendly Expeditions</span>
                </div>
              </div>
            </motion.div>
          </aside>

          {/* Scrollable Right Content */}
          <main className="w-2/3 h-full overflow-y-auto p-8 scroll-smooth pt-24">
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 pb-12">
              {routes.map((route, index) => (
                <KilimanjaroRouteCard
                  key={index}
                  id={route.id}
                  title={route.title}
                  duration={route.duration}
                  difficulty={route.difficulty}
                  description={route.description}
                  imageSrc={route.imageSrc}
                  features={route.features}
                />
              ))}
            </div>
          </main>
        </div>

        {/* Comparison Section below the Split Section */}
        <div className="w-full bg-white border-t border-muted-grey py-16 px-8">
          <div className="max-w-7xl mx-auto">
            <RouteComparisonTable />
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default KilimanjaroRoutesPage;
