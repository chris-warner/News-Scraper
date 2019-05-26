var cheerio = require("cheerio");
var axios = require("axios");

var scrape = () => {
return axios.get("https://www.ign.com/articles?tags=news").then((res)=>{
var $ = cheerio.load(res.data);
console.log("scraping data");
var articles = [];
$(".listElmnt  ").each(function(i, element) {

    var head = $(this)
    .find("a")
    .text()
    .trim();
    console.log(head);

  var url = $(this)
    .find("a")
    .attr("href");
    console.log(url);

  var sum = $(this)
    .find("p")
    .text()
    .trim();
    console.log(sum);

    if (head && sum && url) {
        var headNeat = head.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();
        var sumNeat = sum.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();
        var dataToAdd = {
          headline: headNeat,
          summary: sumNeat,
          url: "https://www.ign.com/" + url
        };

        articles.push(dataToAdd);
      }
    });
    return articles;
  });
};

module.exports = scrape;
