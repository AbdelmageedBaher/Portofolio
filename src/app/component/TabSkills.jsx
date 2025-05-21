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
          <Typography>{children}</Typography>
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
    <Box sx={{ bgcolor: 'background.paper', width: { xs: '100%',sm: '100%', md: '100%'}}} >
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
          <Tab label="experience" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      
      <TabPanel  value={value} index={0} dir={theme.direction} className="bg-[#121212]">
        <span className="text-white  text-[15px] text-base  lg:text-xl">
            <li className="py-2" >MTI University | Computer Science and Artificial Intelligence</li>
            <li className="py-2">Frontend Diploma at Route Academy</li>
        </span>      
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction} className="bg-[#121212]">
        <span className="text-white  text-[11px] text-base  lg:text-xl">
            <li className="py-2">HTML5</li>
            <li className="py-2">CSS3</li>
            <li className="py-2">JavaScript (ES6+) </li>
            <li className="py-2">TypeScript </li>
            <li className="py-2">React.js</li>
            <li className="py-2">Next.js</li>
            <li className="py-2">Redux / Context API </li>
            <li className="py-2">Tailwind CSS</li>
            <li className="py-2">Material UI, Bootstrap</li>
        </span>
      </TabPanel>
      <TabPanel value={value} index={2} dir={theme.direction} className="bg-[#121212]">
        <span className="text-white  text-[15px] text-base  lg:text-xl">
            <li className="py-2">Built a responsive React Ecommerce site with Tailwind, axios, use query and context Api</li>
            <li className="py-2">Built a responsive Next portfolio site with Tailwind and Material UI</li>
            <li className="py-2">Completed Route Academy Frontend Diploma</li>
        </span> 
      </TabPanel>
    </Box>
  );
}
