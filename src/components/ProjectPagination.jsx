import React from "react";
import { motion } from "framer-motion";
import {
  FaChevronLeft,
  FaChevronRight,
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const ProjectPagination = ({
  currentPage,
  totalPages,
  totalProjects,
  projectsPerPage,
  onPageChange,
  onProjectsPerPageChange,
}) => {
  const { t } = useTranslation();
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push("...");
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push("...");
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push("...");
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push("...");
        pages.push(totalPages);
      }
    }

    return pages;
  };

  const startIndex = (currentPage - 1) * projectsPerPage + 1;
  const endIndex = Math.min(currentPage * projectsPerPage, totalProjects);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="project-pagination"
    >
      {/* Projects Info */}
      <div className="pagination-info">
        <span>
          {t("works.pagination.showing")} {startIndex}-{endIndex}{" "}
          {t("works.pagination.of")} {totalProjects}{" "}
          {t("works.pagination.projects")}
        </span>

        <div className="projects-per-page">
          <label htmlFor="projects-per-page">
            {t("works.pagination.perPage")}
          </label>
          <select
            id="projects-per-page"
            value={projectsPerPage}
            onChange={(e) => onProjectsPerPageChange(Number(e.target.value))}
            className="projects-per-page-select"
          >
            <option value={6}>6</option>
            <option value={12}>12</option>
            <option value={18}>18</option>
            <option value={24}>24</option>
          </select>
        </div>
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="pagination-controls">
          {/* First Page */}
          <button
            onClick={() => onPageChange(1)}
            disabled={currentPage === 1}
            className="pagination-btn first-page"
            aria-label={t("works.pagination.first")}
          >
            <FaAngleDoubleLeft />
          </button>

          {/* Previous Page */}
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="pagination-btn prev-page"
            aria-label={t("works.pagination.prev")}
          >
            <FaChevronLeft />
          </button>

          {/* Page Numbers */}
          <div className="page-numbers">
            {getPageNumbers().map((page, index) => (
              <React.Fragment key={index}>
                {page === "..." ? (
                  <span className="page-ellipsis">...</span>
                ) : (
                  <button
                    onClick={() => onPageChange(page)}
                    className={`pagination-btn page-number ${
                      currentPage === page ? "active" : ""
                    }`}
                    aria-label={`${t("works.pagination.page")} ${page}`}
                    aria-current={currentPage === page ? "page" : undefined}
                  >
                    {page}
                  </button>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Next Page */}
          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="pagination-btn next-page"
            aria-label={t("works.pagination.next")}
          >
            <FaChevronRight />
          </button>

          {/* Last Page */}
          <button
            onClick={() => onPageChange(totalPages)}
            disabled={currentPage === totalPages}
            className="pagination-btn last-page"
            aria-label={t("works.pagination.last")}
          >
            <FaAngleDoubleRight />
          </button>
        </div>
      )}
    </motion.div>
  );
};

export default ProjectPagination;
