import { useEffect } from 'react';

const PageTitle = ({ title }) => {
  useEffect(() => {
    document.title = title || 'EcoAdventure'; // Set title or default to 'EcoAdventure'
  }, [title]); // When title changes, update the page title
  
  return null; // This component doesn't render anything on the page
};

export default PageTitle;
