var express = require('express');
var router = express.Router();

// imgSrc: string;
// imgAlt: string;
// podName: string;
// author: string;

router.get('/', function (req, res, next) {
   const data = [
      {
         imgSrc:
            'https://images.unsplash.com/photo-1487530811176-3780de880c2d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
         imgAlt: 'The Bouquet',
         podName: 'Conversations in Bloom',
         author: 'Joe Rogan',
      },
      {
         imgSrc:
            'https://images.unsplash.com/photo-1530121512448-fd5dd6cc5967?q=80&w=2141&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
         imgAlt: 'Ocean Calm',
         podName: 'Sea of Thoughts',
         author: 'Sarah Koenig',
      },
      {
         imgSrc:
            'https://images.unsplash.com/photo-1715439668047-c2be77f8319d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
         imgAlt: 'Mountain Hike',
         podName: 'Trail Blazers',
         author: 'Malcolm Gladwell',
      },
      {
         imgSrc:
            'https://images.unsplash.com/photo-1471440671318-55bdbb772f93?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
         imgAlt: 'City Lights',
         podName: 'Midnight Rambles',
         author: 'Terry Gross',
      },
      {
         imgSrc:
            'https://images.unsplash.com/photo-1495904786722-d2b5a19a8535?q=80&w=2096&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
         imgAlt: 'Desert Road',
         podName: 'Lonely Travels',
         author: 'NPR',
      },
   ];
   res.send(data);
});

module.exports = router;
