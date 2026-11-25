import { plugins, CATEGORIES } from "./data.js";

const filterEl = document.querySelector("#category-filter");
const catalogEl = document.querySelector("#catalog");
const searchEl = document.querySelector('#search-input');

// Categories filter
function renderFilter() {
  if (!filterEl) return;
  filterEl.textContent = "";

  CATEGORIES.forEach(({ value, label }) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = label;
    filterEl.appendChild(option);
  });
}

function getFilteredPlugins() {
  const category = filterEl ? filterEl.value : 'all';
  const query = searchEl ? searchEl.value.trim().toLowerCase() : '';

  return plugins.filter((plugin) => {
    const byCategory = category === 'all' || plugin.category === category;

    const bySearch =
      !query ||
      plugin.name.toLowerCase().includes(query) ||
      plugin.description.toLowerCase().includes(query) ||
      plugin.tags.some((tag) => tag.toLowerCase().includes(query));

    return byCategory && bySearch;
  });
}

function updateCatalog() {
  renderCatalog(getFilteredPlugins());
}

export function initCatalog() {
  renderFilter();
  if (filterEl) filterEl.addEventListener("change", updateCatalog);
  if (searchEl) searchEl.addEventListener("input", updateCatalog);
  updateCatalog();
}


// Catalog
function createPluginCard(plugin) {
  const article = document.createElement("article");
  article.className = "border-2 border-gray-200 pl-6 py-6";

  const name = document.createElement("h3");
  name.className = "text-3xl";
  name.textContent = plugin.repo;

  const desc = document.createElement("p");
  desc.className = "pt-2";
  desc.textContent = plugin.description;

  const url = document.createElement("p");
  url.className = "pt-1 text-sm";
  url.textContent = "url: ";

  const link = document.createElement("a");
  link.href = plugin.url;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.textContent = plugin.url.replace(/^https?:\/\//, "");
  url.appendChild(link);

  const category = document.createElement("p");
  category.className = "pt-1 text-sm";
  category.textContent = `category: ${plugin.category}`;

  const tags = document.createElement("p");
  tags.className = "pt-2 text-sm italic";
  tags.textContent = `tags: ${plugin.tags.join(", ")}`;

  article.append(name, desc, url, category, tags);
  return article;
}

export function renderCatalog(list = plugins) {
  catalogEl.textContent = "";
  const fragment = document.createDocumentFragment();
  list.forEach((plugin) => fragment.appendChild(createPluginCard(plugin)));
  catalogEl.appendChild(fragment);
}
