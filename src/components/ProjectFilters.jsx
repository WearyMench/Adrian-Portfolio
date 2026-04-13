import React from "react";
import { motion } from "framer-motion";
import { FaSearch, FaFilter, FaSort, FaTimes } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const ProjectFilters = ({
  filters,
  setFilters,
  availableLanguages,
  availableTopics,
  totalProjects,
}) => {
  const { t } = useTranslation();
  const handleSearchChange = (e) => {
    setFilters((prev) => ({ ...prev, search: e.target.value }));
  };

  const handleLanguageFilter = (language) => {
    setFilters((prev) => ({
      ...prev,
      languages: prev.languages.includes(language)
        ? prev.languages.filter((lang) => lang !== language)
        : [...prev.languages, language],
    }));
  };

  const handleTopicFilter = (topic) => {
    setFilters((prev) => ({
      ...prev,
      topics: prev.topics.includes(topic)
        ? prev.topics.filter((t) => t !== topic)
        : [...prev.topics, topic],
    }));
  };

  const handleSortChange = (e) => {
    setFilters((prev) => ({ ...prev, sortBy: e.target.value }));
  };

  const clearAllFilters = () => {
    setFilters({
      search: "",
      languages: [],
      topics: [],
      sortBy: "updated",
    });
  };

  const hasActiveFilters =
    filters.search || filters.languages.length > 0 || filters.topics.length > 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="project-filters"
    >
      {/* Search Bar */}
      <div className="search-container">
        <div className="search-input-wrapper">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder={t("works.filters.search")}
            value={filters.search}
            onChange={handleSearchChange}
            className="search-input"
          />
          {filters.search && (
            <button
              onClick={() => setFilters((prev) => ({ ...prev, search: "" }))}
              className="clear-search"
              aria-label={t("works.filters.clearSearch")}
            >
              <FaTimes />
            </button>
          )}
        </div>
        <div className="results-count">
          {totalProjects} {t("works.filters.results", { count: totalProjects })}
        </div>
      </div>

      {/* Filters and Sort */}
      <div className="filters-container">
        <div className="filters-section">
          <h3 className="filters-title">
            <FaFilter />
            {t("works.filters.title")}
          </h3>

          {/* Language Filters */}
          {availableLanguages.length > 0 && (
            <div className="filter-group">
              <h4>{t("works.filters.languages")}</h4>
              <div className="filter-tags">
                {availableLanguages.slice(0, 8).map((language) => (
                  <button
                    key={language}
                    onClick={() => handleLanguageFilter(language)}
                    className={`filter-tag ${
                      filters.languages.includes(language) ? "active" : ""
                    }`}
                  >
                    {language}
                  </button>
                ))}
                {availableLanguages.length > 8 && (
                  <span className="more-indicator">
                    {t("works.filters.moreCount", {
                      count: availableLanguages.length - 8,
                    })}
                  </span>
                )}
              </div>
            </div>
          )}

          {/* Topic Filters */}
          {availableTopics.length > 0 && (
            <div className="filter-group">
              <h4>{t("works.filters.topics")}</h4>
              <div className="filter-tags">
                {availableTopics.slice(0, 6).map((topic) => (
                  <button
                    key={topic}
                    onClick={() => handleTopicFilter(topic)}
                    className={`filter-tag ${
                      filters.topics.includes(topic) ? "active" : ""
                    }`}
                  >
                    {topic}
                  </button>
                ))}
                {availableTopics.length > 6 && (
                  <span className="more-indicator">
                    {t("works.filters.moreCount", {
                      count: availableTopics.length - 6,
                    })}
                  </span>
                )}
              </div>
            </div>
          )}
        </div>

        <div className="sort-section">
          <h3 className="sort-title">
            <FaSort />
            {t("works.filters.sort")}
          </h3>
          <select
            value={filters.sortBy}
            onChange={handleSortChange}
            className="sort-select"
          >
            <option value="updated">{t("works.sort.updated")}</option>
            <option value="created">{t("works.sort.created")}</option>
            <option value="stars">{t("works.sort.stars")}</option>
            <option value="forks">{t("works.sort.forks")}</option>
            <option value="name">{t("works.sort.name")}</option>
          </select>
        </div>

        {/* Clear Filters */}
        {hasActiveFilters && (
          <button onClick={clearAllFilters} className="clear-filters-btn">
            <FaTimes />
            {t("works.filters.clear")}
          </button>
        )}
      </div>

      {/* Active Filters Display */}
      {hasActiveFilters && (
        <div className="active-filters">
          <span className="active-filters-label">
            {t("works.filters.activeLabel")}
          </span>
          {filters.search && (
            <span className="active-filter">
              "{filters.search}"
              <button
                onClick={() => setFilters((prev) => ({ ...prev, search: "" }))}
                className="remove-filter"
              >
                <FaTimes />
              </button>
            </span>
          )}
          {filters.languages.map((language) => (
            <span key={language} className="active-filter">
              {language}
              <button
                onClick={() => handleLanguageFilter(language)}
                className="remove-filter"
              >
                <FaTimes />
              </button>
            </span>
          ))}
          {filters.topics.map((topic) => (
            <span key={topic} className="active-filter">
              {topic}
              <button
                onClick={() => handleTopicFilter(topic)}
                className="remove-filter"
              >
                <FaTimes />
              </button>
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default ProjectFilters;
