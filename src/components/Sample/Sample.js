import React from 'react';
import PropTypes from 'prop-types';
import styles from './Sample.scss';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.scss';
import base from './samples/base';
import absolute from './samples/absolute';
import relative from './samples/relative';
import react from './samples/react';

const Sample = ({visible, styleParams, toggleSample}) => {
  const display = visible ? 'block' : 'none';
  return !!visible && (
  <div className="modal" tabindex="-1" role="dialog" style={{display}}>
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-body">
      <Tabs>
      <TabList>
        <Tab>Vanilla (Absolute)</Tab>
        <Tab>Vanilla (Relative)</Tab>
        <Tab>React (Absolute)</Tab>
      </TabList>

      <TabPanel>
        <pre>
          <textarea onClick={e => e.target.select()} value={
`${base(styleParams)}
${absolute}`
            }/>
        </pre>
      </TabPanel>
      <TabPanel>
      <pre>
          <textarea onClick={e => e.target.select()} value={
`${base(styleParams)}
${relative}`
            }/>
        </pre>
      </TabPanel>
      <TabPanel>
      <pre>
          <textarea onClick={e => e.target.select()} value={
`import React from 'react';
import ReactDOM from 'react-dom';
${base(styleParams)}
${react}`
            }/>
        </pre>
      </TabPanel>
    </Tabs>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={() => toggleSample()}>Close</button>
      </div>
    </div>
  </div>
</div>
)
};

export default Sample;
