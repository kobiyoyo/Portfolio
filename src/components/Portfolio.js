import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Spinner } from 'reactstrap';
import PortfolioList from './PortfolioList';

const Portfolio = () => {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    handleApi();
  }, []);
  const handleApi = () => {
    axios.get('https://gitconnected.com/v1/portfolio/kobiyoyo')
      .then(res => {
        console.log(res.data.projects);
        setTimeout(() => {
          setProfiles(res.data.projects);
          setLoading(false);
        }, 500);
      })
      .catch(err => console.log(err));
  };

  return (
    <section className="portfoliopage" id="portfolio">
      <h2 className="portfoliopage__title title">PORTFOLIO</h2>
      {loading ? <Spinner color="warning" />
        : profiles.map((profile, key) => (

          <PortfolioList
            key={key}
            name={profile.name}
            displayName={profile.displayName}
            summary={profile.summary}
            images={profile.images.map(res => res.resolutions.desktop.url)}
            website={profile.website}
            libraries={profile.libraries}
            languages={profile.languages}
            githubUrl={profile.githubUrl}
          />

        ))}

    </section>

  );
};

export default Portfolio;
