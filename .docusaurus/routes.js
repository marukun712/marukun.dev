
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/',
    component: ComponentCreator('/','deb'),
    exact: true
  },
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug','3d6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config','914'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content','c28'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry','0da'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes','244'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog','3cf'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive','f4c'),
    exact: true
  },
  {
    path: '/blog/marukun.dev開設',
    component: ComponentCreator('/blog/marukun.dev開設','a00'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags','e13'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus','8be'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello','51f'),
    exact: true
  },
  {
    path: '/blog/tags/marukun',
    component: ComponentCreator('/blog/tags/marukun','c3a'),
    exact: true
  },
  {
    path: '/blog/tags/ガジェット',
    component: ComponentCreator('/blog/tags/ガジェット','562'),
    exact: true
  },
  {
    path: '/blog/tags/キーボード',
    component: ComponentCreator('/blog/tags/キーボード','b32'),
    exact: true
  },
  {
    path: '/blog/tags/自己紹介',
    component: ComponentCreator('/blog/tags/自己紹介','c10'),
    exact: true
  },
  {
    path: '/blog/キーキャップ買った',
    component: ComponentCreator('/blog/キーキャップ買った','fa2'),
    exact: true
  },
  {
    path: '/docs/tags',
    component: ComponentCreator('/docs/tags','0cc'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page','be1'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs','760'),
    routes: [
      {
        path: '/docs/electronでアプリ開発/congratulations',
        component: ComponentCreator('/docs/electronでアプリ開発/congratulations','4ba'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/electronでアプリ開発/create-a-blog-post',
        component: ComponentCreator('/docs/electronでアプリ開発/create-a-blog-post','c3c'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/electronでアプリ開発/create-a-document',
        component: ComponentCreator('/docs/electronでアプリ開発/create-a-document','814'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/electronでアプリ開発/create-a-page',
        component: ComponentCreator('/docs/electronでアプリ開発/create-a-page','d2a'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/electronでアプリ開発/deploy-your-site',
        component: ComponentCreator('/docs/electronでアプリ開発/deploy-your-site','fc3'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro','aed'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/outguessで遊ぶ/manage-docs-versions',
        component: ComponentCreator('/docs/outguessで遊ぶ/manage-docs-versions','a3f'),
        exact: true,
        'sidebar': "tutorialSidebar"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
