import { fetchPlaceholders } from '/scripts/aem.js';

// fetch placeholders from the 'en' folder
const placeholders = await fetchPlaceholders('placeholder');
// retrieve the value for key 'foo'
const { foo } = placeholders;