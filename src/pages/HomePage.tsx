import { PlanetsAnimation } from "../components/PlanetsAnimation";

// Front page test.

export function HomePage() {
  return (
    <>
      <div className="flex flex-col justify-center items-center md:flex-row md:items-start md:gap-8">
        <div className="pt-8">
          <h1>Norja Diesel</h1>
          <h2>Full Stack Developer</h2>
        </div>
        <PlanetsAnimation size={400} />
      </div>
    </>
  );
}
