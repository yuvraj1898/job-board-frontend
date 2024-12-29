import React from 'react';
import { Descriptions } from 'antd';
import { Grid } from '@mui/material';

const JobDescription = ({ items }) => (
  <Grid item >
    <Descriptions
      title="Job Details"
      bordered  
      className="bg-white p-4 rounded-lg"
      column={{
        xs: 1,
        sm: 2,
        md: 3,
        lg: 3,
        xl: 4,
        xxl: 4,
      }}
    >
     
      {items.map((item, index) => (
        <Descriptions.Item
          key={index}
          label={item.label}
          span={item.span || 1} // Default span
        >
          {item.children}
        </Descriptions.Item>
      ))}
    </Descriptions>
  </Grid>
);

export default JobDescription;
