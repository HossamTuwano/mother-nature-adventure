import PackageCard from "./PackageCard";
import { packagesData } from "./packagesData";
import Button from "../ui/Button";

const OurPackages = () => {
  return (
    <section className="py-20 px-6 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-earth-tone">Packages</span>
            </h2>
            <p className="text-muted-grey">
              Whether you're seeking a high-adrenaline trek or a luxurious escape, we have the perfect package tailored for your adventure.
            </p>
          </div>
          <Button text="View All Packages" variant="primary" className="hidden md:block" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packagesData.map((pkg) => (
            <PackageCard key={pkg.id} {...pkg} />
          ))}
        </div>
        
        <div className="mt-8 flex justify-center md:hidden">
          <Button text="View All Packages" variant="primary" />
        </div>
      </div>
    </section>
  );
};

export default OurPackages;
