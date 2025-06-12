import { Hero, Searchbar, CustomFilter } from "@/components";

export default function Home() {
  return (
      <main className="overflow-hidden">
        <Hero/>
        <div className="mt-12 padding-x padding-y max-width" id="discover">
           <div className="home__text-container">
            <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
            <p>Discover the best car deals and services</p> 
           </div>
           <div className="home__filters">
            <Searchbar />

            <div className="home__filter-container">
              <CustomFilter title="fuel" options={["all", "petrol", "diesel", "electric", "hybrid"]} />
              <CustomFilter title="year" options={["2023", "2022", "2021", "2020", "2019"]} />
              <CustomFilter title="transmission" options={["all", "automatic", "manual"]} />
              <CustomFilter title="drive" options={["all", "4wd", "fwd", "rwd"]} />
            </div>
           </div>
        </div>
      </main>
  );
}
