import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {formatDistance} from 'date-fns';
import {formatDate, formatDateAbsolute} from '../utils/common-functions';
import {RESOURCES_META} from '../constants';
import {featureFlags} from '../conf/settings';

import ResourcesTable from './res_table';
import ResourcesLevel from './res_level';
import ResourcesMap from './res_map';
import TimeSeries from './res_timeseries';

function Resources(props) {
  const [resourcesData, setResourcesData] = useState({});
  const [fetched, setFetched] = useState(false);
  const [graphOption, setGraphOption] = useState(1);
  const [lastUpdated, setLastUpdated] = useState('');
  const [timeseries, setTimeseries] = useState({});
  // const [activityLog, setActivityLog] = useState([]);
  const [timeseriesMode, setTimeseriesMode] = useState(false);
  const [timeseriesLogMode, setTimeseriesLogMode] = useState(false);
  const [regionHighlighted, setRegionHighlighted] = useState(undefined);
  const date = '2020-05-30';
  const [dataURL, setDataURL] = useState('https://demo6934508.mockable.io/med_resources_timeline.json');
  
  useEffect(() => {
    if (fetched === false) {
      getResourcesData();
    }
  }, [fetched]);

  const getResourcesData = async () => {
    try {
      const [responseTimeline] = await Promise.all([
        axios.get(
          dataURL
        ),
      ]);
      setResourcesData(responseTimeline.data);
      setLastUpdated(responseTimeline.data.last_updated_time);
      setFetched(true);
      const timelineUpdated = [];
      Object.keys(responseTimeline.data.timeline).map(function (key, index) {
        const row = {};
        responseTimeline.data.legend.map(function (subkey, index2) {
          row[subkey] = responseTimeline.data.timeline[key][index2];
          row['u' + subkey] = 0;
        });
        if (index > 0) {
          responseTimeline.data.legend.map(function (subkey, index2) {
            row['u' + subkey] =
              responseTimeline.data.timeline[key][index2] -
              responseTimeline.data.timeline[
                Object.keys(responseTimeline.data.timeline)[index - 1]
              ][index2];
          });
        }
        row['date'] = new Date(key);
        timelineUpdated.push(row);
      });
      setTimeseries(timelineUpdated);
    } catch (err) {
      console.log(err);
    }
  };

  const showDataData = () => {
    setDataURL('https://demo6934508.mockable.io/med_resources_timeline.json');
    featureFlags.showUtilization = true;
    setFetched(false);
  }

  const showRealData = () => {
    setDataURL('https://vics-core.github.io/covid-api/medresources/timeline.json');
    featureFlags.showUtilization = false;
    setFetched(false);
  }

  const onHighlightState = (state, index) => {
    if (!state && !index) setRegionHighlighted(null);
    else setRegionHighlighted({state, index});
  };
  const onHighlightDistrict = (district, state, index) => {
    if (!state && !index && !district) setRegionHighlighted(null);
    else setRegionHighlighted({district, state, index});
  };

  return (
    <React.Fragment>
      <div className="Home">  
        <div className="home-left">
          <div className="header fadeInUp" style={{animationDelay: '1s'}}>
            <div className="header-mid">
              <div className="titles">
                <h1>Available Medical Resources</h1>
                <a className="demo" onClick={showDataData}> Demo Data </a>&nbsp;
                <a className="real" onClick={showRealData}> Real Data </a>
                <h6 style={{fontWeight: 600}}>
                  Proposed addition to covid tracker
                </h6>
              </div>
              <div className="last-update">
                <h6>Last Updated</h6>
                <h6 style={{color: '#28a745', fontWeight: 600}}>
                  {isNaN(Date.parse(formatDate(lastUpdated)))
                    ? ''
                    : formatDistance(
                        new Date(formatDate(lastUpdated)),
                        new Date()
                      ) + ' Ago'}
                </h6>
                <h6 style={{color: '#28a745', fontWeight: 600}}>
                  {isNaN(Date.parse(formatDate(lastUpdated)))
                    ? ''
                    : formatDateAbsolute(lastUpdated)}
                </h6>
              </div>
            </div>
          </div>

          <ResourcesLevel
            data={resourcesData}
            resourcesMeta={RESOURCES_META}
            date={date}
            featureFlags={featureFlags}
          />
          <ResourcesTable
            data={resourcesData}
            onHighlightState={onHighlightState}
            onHighlightDistrict={onHighlightDistrict}
            date={date}
          />
        </div>

        <div className="home-right">
          {fetched && (
            <React.Fragment>
              <ResourcesMap
                data={resourcesData}
                regionHighlighted={regionHighlighted}
                resourcesMeta={RESOURCES_META}
                currentDate={date}
                flags={featureFlags}
              />

              <div
                className="timeseries-header fadeInUp"
                style={{animationDelay: '2.5s'}}
              >
                <h1>Resource Trends</h1>
                <div className="tabs">
                  <div
                    className={`tab ${graphOption === 1 ? 'focused' : ''}`}
                    onClick={() => {
                      setGraphOption(1);
                    }}
                  >
                    <h4>Cumulative</h4>
                  </div>
                  <div
                    className={`tab ${graphOption === 2 ? 'focused' : ''}`}
                    onClick={() => {
                      setGraphOption(2);
                    }}
                  >
                    <h4>Daily</h4>
                  </div>
                </div>

                <div className="scale-modes">
                  <label>Scale Modes</label>
                  <div className="timeseries-mode">
                    <label htmlFor="timeseries-mode">Uniform</label>
                    <input
                      type="checkbox"
                      checked={timeseriesMode}
                      className="switch"
                      aria-label="Checked by default to scale uniformly."
                      onChange={(event) => {
                        setTimeseriesMode(!timeseriesMode);
                      }}
                    />
                  </div>
                  <div
                    className={`timeseries-logmode ${
                      graphOption !== 1 ? 'disabled' : ''
                    }`}
                  >
                    <label htmlFor="timeseries-logmode">Logarithmic</label>
                    <input
                      type="checkbox"
                      checked={graphOption === 1 && timeseriesLogMode}
                      className="switch"
                      disabled={graphOption !== 1}
                      onChange={(event) => {
                        setTimeseriesLogMode(!timeseriesLogMode);
                      }}
                    />
                  </div>
                </div>
              </div>

              <TimeSeries
                timeseries={timeseries}
                type={graphOption}
                mode={timeseriesMode}
                logMode={timeseriesLogMode}
              />
            </React.Fragment>
          )}
        </div>
      </div>
    </React.Fragment>
  );
}

export default Resources;
