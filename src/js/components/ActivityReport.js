import React from 'react';

import Table from './table/Table.js';
import MedalsList from './MedalsList.js';

class ActivityReport extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.report);
    let report = this.props.report;

    return (
      <div className="activity-report">
        <div className="report-overview">
          <h4 className="report-title">Post Game Report</h4>
        </div>
        <div className="report-scoreboard">
          <Table data={report.entries} 
            alphaScore={report.teams[0].score.basic.displayValue}
            bravoScore={report.teams[1].score.basic.displayValue}
          />
        </div>
        <MedalsList player={report.entries[0]}/>
      </div>
    )
  }
}

export default ActivityReport;
