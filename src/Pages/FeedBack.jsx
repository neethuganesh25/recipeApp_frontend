import React, { useState } from 'react';
import FeedUpload from '../feed/FeedUpload';
import FeedView from '../feed/FeedView';
import Header from '../components/Header';
import Footer from '../components/Footer';


function FeedBack() {
  const [addStatus, setAddStatus] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleAddStatus = async (status) => {
    setLoading(true);
    try {
      setAddStatus(status);
    } catch (err) {
      setError("Failed to add feedback. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <div className="feedback-container">
        <FeedUpload setAddStatus={handleAddStatus} />
        {loading && <p>Loading...</p>}
        {error && <p className="text-danger">{error}</p>}
        <div className="feedback-view-container">
          <FeedView addStatus={addStatus} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default FeedBack;
