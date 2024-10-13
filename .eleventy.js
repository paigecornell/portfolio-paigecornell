const { DateTime } = require('luxon');

module.exports = function (eleventyConfig) {
  // watch these for changes
  eleventyConfig.addWatchTarget("./src/assets/");
  eleventyConfig.addWatchTarget("./src/fonts/");
  eleventyConfig.addWatchTarget("./src/images/");
  eleventyConfig.addWatchTarget("./src/sass/");
  // copy these folders to public folder
  eleventyConfig.addPassthroughCopy('./src/assets');
  eleventyConfig.addPassthroughCopy('./src/fonts');
  eleventyConfig.addPassthroughCopy("./src/images");
  eleventyConfig.addPassthroughCopy('./src/style.css');
  eleventyConfig.addPassthroughCopy('./src/admin');

  eleventyConfig.addShortcode('year', () => `${new Date().getFullYear()}`);

  eleventyConfig.addFilter('postDate', (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat(
      'LLLL dd, yyyy '
    );
  });

  return {
    dir: {
      input: 'src/',
      output: 'public/',
    },
  };
};
