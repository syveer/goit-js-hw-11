// main.js
import { searchImages } from './api.js';
import { showLoader, hideLoader, showError, showResults } from './ui.js';

document.addEventListener('DOMContentLoaded', () => {
  const searchForm = document.getElementById('search-form');

  searchForm.addEventListener('submit', async event => {
    event.preventDefault();

    const searchInput = document.getElementById('search-query');
    const query = searchInput.value.trim();

    if (query === '') {
      showError('Please enter a search query.');
      return;
    }

    try {
      showLoader();
      const results = await searchImages(query);
      showResults(results.hits);
    } catch (error) {
      showError('An error occurred while fetching images. Please try again.');
    } finally {
      hideLoader();
    }
  });
});
