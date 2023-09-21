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
              url: 'Frontend'
            },
            {
              title: 'Backend',
              url: 'Backend'
            },
            {
              title: 'Database',
              url: 'Database'
            },
          ]
        },
        {
          title: 'Art',
          url:'Art',
        },
      ]
    },
    {
      title: 'About',
      url: '/about',
    },
  ];