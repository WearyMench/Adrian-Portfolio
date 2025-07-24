import React, { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaCode, FaSpinner, FaFilter } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";
import ProjectFilters from "../components/ProjectFilters";
import ProjectPagination from "../components/ProjectPagination";
import githubService from "../services/githubService";
import {
  WorksContainer,
  WorksContent,
  WorksTitle,
  WorksGrid,
  WorksEmpty,
  WorksError,
} from "./Works.styles";

const Works = () => {
  const { t } = useTranslation();
  const [allProjects, setAllProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Filtros y paginación
  const [filters, setFilters] = useState({
    search: "",
    languages: [],
    topics: [],
    sortBy: "updated",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [projectsPerPage, setProjectsPerPage] = useState(12);

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    try {
      setLoading(true);
      setError(null);
      const showcaseRepos = await githubService.getShowcaseRepositories();
      setAllProjects(showcaseRepos);
    } catch (err) {
      console.error("Error loading projects:", err);
      // Si es un error de rate limit, mostrar mensaje específico
      if (err.message && err.message.includes("403")) {
        setError(t("works.error.rateLimit"));
      } else {
        setError(t("works.error.title"));
      }
    } finally {
      setLoading(false);
    }
  };

  // Obtener lenguajes y topics únicos para los filtros
  const availableLanguages = useMemo(() => {
    const languages = new Set();
    allProjects.forEach((project) => {
      if (project.language) {
        languages.add(project.language);
      }
    });
    return Array.from(languages).sort();
  }, [allProjects]);

  const availableTopics = useMemo(() => {
    const topics = new Set();
    allProjects.forEach((project) => {
      if (project.topics) {
        project.topics.forEach((topic) => topics.add(topic));
      }
    });
    return Array.from(topics).sort();
  }, [allProjects]);

  // Filtrar y ordenar proyectos
  const filteredProjects = useMemo(() => {
    let filtered = [...allProjects];

    // Filtro por búsqueda
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      filtered = filtered.filter(
        (project) =>
          project.name.toLowerCase().includes(searchLower) ||
          (project.description &&
            project.description.toLowerCase().includes(searchLower))
      );
    }

    // Filtro por lenguajes
    if (filters.languages.length > 0) {
      filtered = filtered.filter(
        (project) =>
          project.language && filters.languages.includes(project.language)
      );
    }

    // Filtro por topics
    if (filters.topics.length > 0) {
      filtered = filtered.filter(
        (project) =>
          project.topics &&
          filters.topics.some((topic) => project.topics.includes(topic))
      );
    }

    // Ordenamiento
    switch (filters.sortBy) {
      case "created":
        filtered.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        break;
      case "stars":
        filtered.sort((a, b) => b.stargazersCount - a.stargazersCount);
        break;
      case "forks":
        filtered.sort((a, b) => b.forksCount - a.forksCount);
        break;
      case "name":
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default: // 'updated'
        filtered.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
    }

    return filtered;
  }, [allProjects, filters]);

  // Paginación
  const totalProjects = filteredProjects.length;
  const totalPages = Math.ceil(totalProjects / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const endIndex = startIndex + projectsPerPage;
  const currentProjects = filteredProjects.slice(startIndex, endIndex);

  // Resetear página cuando cambian los filtros
  useEffect(() => {
    setCurrentPage(1);
  }, [filters]);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleProjectsPerPageChange = (newPerPage) => {
    setProjectsPerPage(newPerPage);
    setCurrentPage(1);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.2,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <WorksContainer>
      <WorksContent>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <WorksTitle>
            <motion.h1 variants={titleVariants}>{t("works.title")}</motion.h1>
            <motion.p variants={subtitleVariants}>
              {t("works.subtitle")}
            </motion.p>
          </WorksTitle>

          {loading ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="loading-container"
            >
              <div className="loading-spinner">
                <FaSpinner />
              </div>
              <p>{t("works.loading")}</p>
            </motion.div>
          ) : error ? (
            <WorksError>
              <div className="error-content">
                <FaCode />
                <h2>{t("works.error.title")}</h2>
                <p>{error}</p>
                <button onClick={loadProjects} className="retry-button">
                  {t("works.error.retry")}
                </button>
              </div>
            </WorksError>
          ) : allProjects.length === 0 ? (
            <WorksEmpty>
              <div className="empty-content">
                <FaGithub />
                <h2>{t("works.empty.title")}</h2>
                <p>{t("works.empty.description")}</p>
                <div className="empty-actions">
                  <a
                    href={`https://github.com/WearyMench`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-link"
                  >
                    <FaGithub />
                    {t("works.empty.github")}
                  </a>
                  <button onClick={loadProjects} className="refresh-button">
                    {t("works.empty.refresh")}
                  </button>
                </div>
              </div>
            </WorksEmpty>
          ) : (
            <>
              {/* Filtros */}
              <ProjectFilters
                filters={filters}
                setFilters={setFilters}
                availableLanguages={availableLanguages}
                availableTopics={availableTopics}
                totalProjects={totalProjects}
              />

              {/* Grid de proyectos */}
              {currentProjects.length > 0 ? (
                <>
                  <WorksGrid>
                    {currentProjects.map((project, index) => (
                      <ProjectCard
                        key={project.id}
                        project={project}
                        index={index}
                        onOpenModal={handleOpenModal}
                      />
                    ))}
                  </WorksGrid>

                  {/* Paginación */}
                  <ProjectPagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    totalProjects={totalProjects}
                    projectsPerPage={projectsPerPage}
                    onPageChange={handlePageChange}
                    onProjectsPerPageChange={handleProjectsPerPageChange}
                  />
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="no-results"
                >
                  <div className="no-results-content">
                    <FaFilter />
                    <h3>No se encontraron proyectos</h3>
                    <p>
                      No hay proyectos que coincidan con los filtros aplicados.
                      Intenta ajustar los filtros o la búsqueda.
                    </p>
                    <button
                      onClick={() =>
                        setFilters({
                          search: "",
                          languages: [],
                          topics: [],
                          sortBy: "updated",
                        })
                      }
                      className="clear-filters-btn"
                    >
                      Limpiar filtros
                    </button>
                  </div>
                </motion.div>
              )}
            </>
          )}
        </motion.div>
      </WorksContent>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </WorksContainer>
  );
};

export default Works;
