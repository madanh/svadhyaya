module.exports = function(eleventyConfig) {
  eleventyConfig.addCollection("writingPractice", function(collectionApi) {
    return collectionApi.getFilteredByTag("writing practice");
  });
  eleventyConfig.addCollection("thoughts", function(collectionApi) {
    return collectionApi.getFilteredByTag("thoughts");
  });
};

