import tableauProject from "@/assets/images/Co2 Emission Dashboard.png";
import pythonCorrelationPage from "@/assets/images/python-correlation.png";
import sqlCleaningProject from "@/assets/images/SQL-data-cleaning.png";
import sqlExplorationProject from "@/assets/images/SQL-exploration.png";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import Image from 'next/image';
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    company: "Tableau",
    year: "Visualization",
    title: "Tableau Co2 Dashboard",
    results: [
      { title: "Interactive Visualizations" },
      { title: "Data-Driven Analysis" },
      { title: "User-Friendly Design" },
    ],
    link: "https://public.tableau.com/app/profile/isak.hugosson/viz/Co2EmissionDashboard_16991278146540/Dashboard1",
    image: tableauProject,
  },
  {
    company: "Python",
    year: "Data Science",
    title: "Correlation Analysis in Python",
    results: [
      { title: "Exploratory Data Analysis" },
      { title: "Correlation Visualization" },
      { title: "Actionable Insights" },
    ],
    link: "https://github.com/isakhugosson/DataAnalysis/blob/main/Movie%20Correlation%20Project.ipynb",
    image: pythonCorrelationPage,
  },
  {
    company: "SQL",
    year: "Data Transformation",
    title: "Data Cleaning in SQL (SSMS)",
    results: [
      { title: "Data Standardization" },
      { title: "Data Structuring and Enrichment" },
      { title: "Quality and Performance Improvements" },
    ],
    link: "https://github.com/isakhugosson/DataAnalysis/blob/main/SQLDataCleaning.sql",
    image: sqlCleaningProject,
  },
  {
    company: "SQL",
    year: "Data transformation",
    title: "Data Exploration of App Store in SQL",
    results: [
      { title: "Genre Distribution and Statistics" },
      { title: "Paid vs. Free Rating Comparison" },
      { title: "Language Support Impact" },
    ],
    link: "https://github.com/isakhugosson/DataAnalysis/blob/main/SQLAppStoreExploration.sql",
    image: sqlExplorationProject,
  },
];

export const ProjectsSection = () => {
  return (
  <section id="projects" className="pb-16 lg:py-25">
    <div className="container">
      <SectionHeader 
        eyebrow="Real-world Results" 
        title="Featured Projects" 
        description="See how I transformed concepts into engaging digital experiences."
      />
      <div className="flex flex-col mt-10 md:mt-20 gap-20">
        {portfolioProjects.map((project, projectIndex) => (
          <Card 
              key={project.title} 
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
              style={{
                top: `calc(64px + ${projectIndex * 40}px`
              }}
            >
            <div className="lg:grid lg:grid-cols-2 lg:gap-16">
              <div className="lg:pb-16">
                <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                  <span>{project.company}</span>
                  <span>&bull;</span>
                  <span>{project.year}</span>
                </div>
                <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">{project.title}</h3>
                <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                  {project.results.map((result) => (
                  <li className="flex gap-2 text-sm md:text-base text-white/50">
                    <CheckCircleIcon className="size-5 md:size-6"/>
                    <span>{result.title}</span>
                  </li>
                  ))}
                </ul>
                <a href={project.link}>
                  <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 hover:bg-white/70 hover:text-gray-900 transition duration-300">
                    <span>View Project</span>
                    <ArrowUpRightIcon className="size-4 inline-flex items-center justify-center gap-2"/>
                  </button>
                </a>
              </div>
              <div className="relative">
                <Image 
                  src={project.image} 
                  alt={project.title}
                  className="rounded-3xl mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none" 
                />
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  </section>
  );
};
