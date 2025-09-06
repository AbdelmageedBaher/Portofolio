"use client"
import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ bgcolor: 'background.paper', width: '100%' }}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Education" {...a11yProps(0)} />
          <Tab label="Skills" {...a11yProps(1)} />
          <Tab label="Projects" {...a11yProps(2)} />
          <Tab label="Courses" {...a11yProps(3)} />
        </Tabs>
      </AppBar>

      {/* Education */}
      <TabPanel value={value} index={0} dir={theme.direction} className="bg-[#121212]">
        <ul className="text-white text-[15px] lg:text-xl">
          <li className="py-2">MTI University | Computer Science and Artificial Intelligence</li>
        </ul>
      </TabPanel>

      {/* Skills */}
      <TabPanel value={value} index={1} dir={theme.direction} className="bg-[#121212]">
        <ul className="text-white text-[11px] lg:text-xl">
          <li className="py-2">HTML5</li>
          <li className="py-2">CSS3</li>
          <li className="py-2">JavaScript (ES6+)</li>
          <li className="py-2">TypeScript</li>
          <li className="py-2">React.js</li>
          <li className="py-2">Next.js</li>
          <li className="py-2">Redux / Context API</li>
          <li className="py-2">Tailwind CSS, Bootstrap</li>
          <li className="py-2">Material UI, Shadcn/ui</li>
        </ul>
      </TabPanel>

      {/* Projects */}
      <TabPanel value={value} index={2} dir={theme.direction} className="bg-[#121212]">
        <ul className="text-white text-[15px] lg:text-xl">
          <li className="py-2">Built a responsive React Ecommerce site with Tailwind, axios, useQuery, and Context API</li>
          <li className="py-2">Built a responsive Next.js portfolio site with Tailwind and Material UI</li>
        </ul>
      </TabPanel>

      {/* Courses */}
      <TabPanel value={value} index={3} dir={theme.direction} className="bg-[#121212]">
        <ul className="text-white text-[15px] lg:text-xl">
          <li className="py-2">Frontend Diploma at Route Academy</li>
          <li className="py-2">Completed Route Academy Frontend Diploma | Feb 2025</li>
        </ul>
      </TabPanel>
    </Box>
  );
}
