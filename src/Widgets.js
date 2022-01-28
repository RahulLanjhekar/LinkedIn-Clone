import React from 'react';
import InfoIcon from '@material-ui/icons/Info';
import './Widgets.css'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const Widgets = () => {

    const newsArticle = (heading, subtitle) => {
        return (
            <div className="widgets__article">
                <div className="widgets__articleLeft">
                    <FiberManualRecordIcon />
                </div>

                <div className="widgets__articleRight">
                    <h4>{heading}</h4>
                    <p>{subtitle}</p>
                </div>
            </div>
        )
    }

  return (
      <div className="widgets">
          <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
          </div>
          {newsArticle("The top career experts to follow!", "Top news • 5,631 readers")}
          {newsArticle("Good habits to swear by during WFH!", "1d ago • 1,437 readers")}
          {newsArticle("How WFH is impacting women!", "6d ago • 17,774 readers")}
          {newsArticle("The fastest growing jobs in India!", "8d ago • 35,083 readers")}
          {newsArticle("Dolo’s rise to fame!", "7d ago • 31,295 readers")}

      </div>
  )
};

export default Widgets;
