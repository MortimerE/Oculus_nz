import React, { createContext, useEffect, useState } from "react";
import { getPortfolio, getConfig } from "../api/api";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [scrollTo, setScrollTo] = useState("");
  const [homePageData, setHomePageData] = useState([]);
  const [latestNewsData, setLatestNewsData] = useState([]); // [featuredArticle, newArticle, nextSeminar
  const [aboutUsData, setAboutUsData] = useState([]); // [description, founded, team, locale, image
  const [associations, setAssociations] = useState([]);
  const [career, setCareer] = useState([]); // [description, image, title, url

  const [portfolio, setPortfolio] = useState([]);
  const [portfolioRoutes, setPortfolioRoutes] = useState([]);
  const [resources, setResources] = useState([]);
  const [resourceRoutes, setResourceRoutes] = useState([]);
  const [articles, setArticles] = useState([]);
  const [articleRoutes, setArticleRoutes] = useState([]);
  const [seminars, setSeminars] = useState([]);
  const [seminarRoutes, setSeminarRoutes] = useState([]);
  const [config, setConfig] = useState([]);
  
  // ... other state variables you might need
  const invokeGetHomePageData = async () => {
    try {
      const res = await getHomePageData();
      let ret = [];
      if (res && res.data && res.data.data) {
        let home = res.data.data;
        let arr = home.split(",");
        arr.forEach((el) => ret.push(el.trim()));
      }
      setHomePageData([...ret]);
    } catch {
      console.log("couldnt fetch home page data");
      setConfig([]);
    }
  };

  const invokeGetLatestNewsData = async () => {
    try {
      const res = await getLatestNewsData();
      let ret = [];
      if (res && res.data && res.data.data) {
        let news = res.data.data;
        let arr = news.split(",");
        arr.forEach((el) => ret.push(el.trim()));
      }
      setLatestNewsData([...ret]);
    } catch {
      console.log("couldnt fetch latest news data");
      setConfig([]);
    }
  };

  const invokeGetAboutUsData = async () => {
    try {
      const res = await getAboutUsData();
      let ret = [];
      if (res && res.data && res.data.data) {
        let about = res.data.data;
        let arr = about.split(",");
        arr.forEach((el) => ret.push(el.trim()));
      }
      setAboutUsData([...ret]);
    } catch {
      console.log("couldnt fetch about us data");
      setConfig([]);
    }
  };

  const invokeGetAssociations = async () => {
    try {
      const res = await getAssociations();
      let ret = [];
      if (res && res.data && res.data.data) {
        let assoc = res.data.data;
        let arr = assoc.split(",");
        arr.forEach((el) => ret.push(el.trim()));
      }
      setAssociations([...ret]);
    } catch {
      console.log("couldnt fetch associations");
      setConfig([]);
    }
  };

  const invokeGetCareer = async () => {
    try {
      const res = await getCareer();
      let ret = [];
      if (res && res.data && res.data.data) {
        let career = res.data.data;
        let arr = career.split(",");
        arr.forEach((el) => ret.push(el.trim()));
      }
      setCareer([...ret]);
    } catch {
      console.log("couldnt fetch career");
      setConfig([]);
    }
  };


  const invokeGetPortfolio = async () => {
    try {
      const res = await getPortfolio();
      let port = res.data.data;
      let temp = [];
      let tempRoutes = [];
      port.forEach((el) => {
        temp.push(el.attributes);
        console.log(el.attributes);
        tempRoutes.push({
          routeName: el.attributes.name,
          data: el.attributes,
        });
      });
      setPortfolio([...temp]);
      setPortfolioRoutes([...tempRoutes]);
    } catch {
      console.log("couldnt fetch portfolio");
    }
  };

  const invokeGetResources = async () => {
    try {
      const res = await getResources();
      let reso = res.data.data;
      let temp = [];
      let tempRoutes = [];
      reso.forEach((el) => {
        temp.push(el.attributes);
        tempRoutes.push({
          routeName: el.attributes.name,
          data: el.attributes,
        });
      });
      setResources([...temp]);
      setResourceRoutes([...tempRoutes]);
    } catch {
      console.log("couldnt fetch resources");
    }
  };

  const invokeGetArticles = async () => {
    try {
      const res = await getArticles();
      let art = res.data.data;
      let temp = [];
      let tempRoutes = [];
      art.forEach((el) => {
        temp.push(el.attributes);
        tempRoutes.push({
          routeName: el.attributes.name,
          data: el.attributes,
        });
      });
      setArticles([...temp]);
      setArticleRoutes([...tempRoutes]);
    } catch {
      console.log("couldnt fetch articles");
    }
  };

  const invokeGetSeminars = async () => {
    try {
      const res = await getSeminars();
      let sem = res.data.data;
      let temp = [];
      let tempRoutes = [];
      sem.forEach((el) => {
        temp.push(el.attributes);
        tempRoutes.push({
          routeName: el.attributes.name,
          data: el.attributes,
        });
      });
      setSeminars([...temp]);
      setSeminarRoutes([...tempRoutes]);
    } catch {
      console.log("couldnt fetch seminars");
    }
  };

  const invokeGetConfig = async () => {
    try {
      const res = await getConfig();
      let ret = [];
      if (res && res.data && res.data.data) {
        let conf = res.data.data.attributes.featuredIds;
        let arr = conf.split(",");
        arr.forEach((el) => ret.push(el.trim()));
      }
      setConfig([...ret]);
    } catch {
      console.log("couldnt fetch config");
      setConfig([]);
    }
  };

  // Invoking the methods on component mount
  useEffect(() => {
    invokeGetHomePageData();
    invokeGetLatestNewsData();
    invokeGetAboutUsData();
    invokeGetAssociations();

    invokeGetPortfolio();
    invokeGetResources();
    invokeGetArticles();
    invokeGetSeminars();
    invokeGetConfig();
    // Add other invocation you may need here
  }, []);

  const state = {
    scrollTo: scrollTo,
    homePageData: homePageData,
    latestNewsData: latestNewsData,
    aboutUsData: aboutUsData,
    associations: associations,

    portfolio: portfolio,
    portfolioRoutes: portfolioRoutes,
    resources: resources,
    resourceRoutes: resourceRoutes,
    articles: articles,
    articleRoutes: articleRoutes,
    seminars: seminars,
    seminarRoutes: seminarRoutes,
    config: config,
    // ... other state variables you might need
  };

  const api = {
    setScrollTo: setScrollTo,
    setHomePageData: setHomePageData,
    setLatestNewsData: setLatestNewsData,
    setAboutUsData: setAboutUsData,
    setAssociations: setAssociations,


    setPortfolio: setPortfolio,
    setPortfolioRoutes: setPortfolioRoutes,
    setResources: setResources,
    setResourceRoutes: setResourceRoutes,
    setArticles: setArticles,
    setArticleRoutes: setArticleRoutes,
    setSeminars: setSeminars,
    setSeminarRoutes: setSeminarRoutes,
    setConfig: setConfig,
    // ... other state-setting functions
  };

  return (
    <AppContext.Provider value={{ state, api }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;

