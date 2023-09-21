//import React from "react";

export const menuItems = [
    {
      title: 'Home',
      url: '/',
    },
    {
      title: 'Projects',
      url: '/Projects',
      submenu: [
        {
          title: 'Summit',
          url:'Summit',
          submenu: [
            {
              title: 'Frontend',
              url: 'Summit Frontend'
            },
            {
              title: 'Backend',
              url: 'Summit Backend'
            },
            {
              title: 'Database',
              url: 'Summit Database'
            },
          ]
        },
        {
          title: 'Art',
          url:'Art',
          submenu:[
            {
              title: 'Art Projects',
              url: 'Art Projects'
            },
            {
              title: 'Website',
              url: 'Personal Website'
            }
          ]
        },
      ]
    },
    {
      title: 'About',
      url: '/about',
    },
  ];