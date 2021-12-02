import * as React from 'react';
import { withCookies, Cookies } from "react-cookie";
import Avatar from '../components/Avatar';
import FeedReader from '../components/FeedReader';
interface Cookie {
  username: string,
  seed: string,
  preferences: string[]
}
interface HomeProps {
  cookies: Cookies
}


const getSearchFromCookie = (cookie: Cookie) => {
  return cookie.preferences.reduce((p, c, i) => {
    return (i == 1)?
    `cat:${p}+OR+` + `cat:${c}`
    :
    `${p}+OR+` + `cat:${c}`
  });
}

const Home = (props: HomeProps) => {
  const cookieName = 'science-news-user-info';
  const cookie = props.cookies.get(cookieName) as Cookie;
  const apiUrl = "https://export.arxiv.org/api/query?search_query=";
  const resultsPerPage = 25;

  return (
    <section>
      <header>
        <Avatar seed={cookie.seed} />
        <br />
        Your Personalized Feed, {cookie.username}
      </header>
      <hr />
      <FeedReader
        baseUrl={apiUrl}
        searchQuery={getSearchFromCookie(cookie)}
        resultsPerPage={resultsPerPage}
        sortBy="lastUpdatedDate"
      />
    </section>
  );
}
export default withCookies(Home);