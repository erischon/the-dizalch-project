"use client";

import { useState } from "react";

import ProjectCard from "@/components/portfolio/projectCard";
import SectionTitle from "@/components/portfolio/sectionTitle";
import Pagination from "@/components/portfolio/Pagination";

import { paginate } from "@/lib/paginate";
import { projectsListPageSize } from "@/lib/constants";

/**
 * @description Displays a list of projects
 * @version 1.0.0
 */
export default function Projects({ projects }: { projects: ProjectMeta[] }) {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = projectsListPageSize;

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  const paginatedProjects = paginate(projects, currentPage, pageSize);

  return (
    <section className="my-8 mx-auto">
      <SectionTitle title="Projets" />

      <div className="grid sm:grid-cols-2 gap-3 my-8">
        {paginatedProjects.map((project: any) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <Pagination
        items={projects.length} // 100
        currentPage={currentPage} // 1
        pageSize={pageSize} // 10
        onPageChange={onPageChange}
      />
    </section>
  );
}
