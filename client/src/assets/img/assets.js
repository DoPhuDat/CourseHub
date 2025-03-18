import logo from './logo.svg';
import favicon from './favicon.svg';
import logo_dark from './logo_dark.svg';
import search_icon from './search_icon.svg';
import cross_icon from './cross_icon.svg';
import upload_area from './upload_area.svg';
import sketch from './sketch.svg';
import microsoft_logo from './microsoft_logo.svg';
import walmart_logo from './walmart_logo.svg';
import accenture_logo from './accenture_logo.svg';
import adobe_logo from './adobe_logo.svg';
import slack_logo from './slack_logo.svg';
import paypal_logo from './paypal_logo.svg';
import course_1_thumbnail from './course_1.png';
import course_2_thumbnail from './course_2.png';
import course_3_thumbnail from './course_3.png';
import course_4_thumbnail from './course_4.png';
import star from './rating_star.svg';
import star_blank from './star_dull_icon.svg';
import profile_img_1 from './profile_img_1.png';
import profile_img_2 from './profile_img_2.png';
import profile_img_3 from './profile_img_3.png';
import arrow_icon from './arrow_icon.svg';
import down_arrow_icon from './down_arrow_icon.svg';
import time_left_clock_icon from './time_left_clock_icon.svg';
import time_clock_icon from './time_clock_icon.svg';
import user_icon from './user_icon.svg';
import home_icon from './home_icon.svg';
import add_icon from './add_icon.svg';
import my_course_icon from './my_course_icon.svg';
import person_tick_icon from './person_tick_icon.svg';
import facebook_icon from './facebook_icon.svg';
import instagram_icon from './instagram_icon.svg';
import twitter_icon from './twitter_icon.svg';
import file_upload_icon from './file_upload_icon.svg';
import appointments_icon from './appointments_icon.svg';
import earning_icon from './earning_icon.svg';
import dropdown_icon from './dropdown_icon.svg';
import patients_icon from './patients_icon.svg';
import play_icon from './play_icon.svg';
import blue_tick_icon from './blue_tick_icon.svg';
import course_4 from './course_4.png';
import profile_img from './profile_img.png';
import profile_img2 from './profile_img2.png';
import profile_img3 from './profile_img3.png';
import lesson_icon from './lesson_icon.svg';

export const assets = {
  logo,
  favicon,
  search_icon,
  sketch,
  microsoft_logo,
  walmart_logo,
  accenture_logo,
  adobe_logo,
  paypal_logo,
  course_1_thumbnail,
  course_2_thumbnail,
  course_3_thumbnail,
  course_4_thumbnail,
  star,
  slack_logo,
  star_blank,
  profile_img_1,
  profile_img_2,
  profile_img_3,
  arrow_icon,
  dropdown_icon,
  cross_icon,
  upload_area,
  logo_dark,
  down_arrow_icon,
  time_left_clock_icon,
  time_clock_icon,
  user_icon,
  home_icon,
  add_icon,
  my_course_icon,
  person_tick_icon,
  facebook_icon,
  instagram_icon,
  twitter_icon,
  course_4,
  file_upload_icon,
  appointments_icon,
  earning_icon,
  patients_icon,
  profile_img,
  profile_img2,
  profile_img3,
  play_icon,
  blue_tick_icon,
  lesson_icon,
};

export const dummyEducatorData = {
  _id: '675ac1512100b91a6d9b8b24',
  name: 'PhuDat',
  email: 'user.PhuDat@gmail.com',
  imageUrl:
    'https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18yclFkaDBOMmFqWnBoTTRBOXZUanZxVlo0aXYifQ',
  createdAt: '2024-12-12T10:56:17.930Z',
  updatedAt: '2024-12-12T10:56:17.930Z',
  __v: 0,
};

export const dummyTestimonial = [
  {
    name: 'Donald Jackman',
    role: 'SWE 1 @ Amazon',
    image: assets.profile_img_1,
    rating: Math.floor(Math.random() * (5 - 3 + 1)) + 3,
    feedback:
      "I've been using Imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.",
  },
  {
    name: 'Richard Nelson',
    role: 'SWE 2 @ Samsung',
    image: assets.profile_img_2,
    rating: Math.floor(Math.random() * (5 - 3 + 1)) + 3,
    feedback:
      "I've been using Imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.",
  },
  {
    name: 'James Washington',
    role: 'SWE 2 @ Google',
    image: assets.profile_img_3,
    rating: Math.floor(Math.random() * (5 - 3 + 1)) + 3,
    feedback:
      "I've been using Imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.",
  },
];

export const dummyDashboardData = {
  totalEarnings: 707.38,
  enrolledStudentsData: [
    {
      courseTitle: 'Introduction to JavaScript',
      student: {
        _id: 'user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V',
        name: 'Great Stack',
        imageUrl:
          'https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ycVFsdmFMSkw3ckIxNHZMU2o4ZURWNEtmR2IifQ',
      },
    },
    {
      courseTitle: 'Advanced Python Programming',
      student: {
        _id: 'user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V',
        name: 'Great Stack',
        imageUrl:
          'https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ycVFsdmFMSkw3ckIxNHZMU2o4ZURWNEtmR2IifQ',
      },
    },
    {
      courseTitle: 'Web Development Bootcamp',
      student: {
        _id: 'user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V',
        name: 'Great Stack',
        imageUrl:
          'https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ycVFsdmFMSkw3ckIxNHZMU2o4ZURWNEtmR2IifQ',
      },
    },
    {
      courseTitle: 'Data Science with Python',
      student: {
        _id: 'user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V',
        name: 'Great Stack',
        imageUrl:
          'https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ycVFsdmFMSkw3ckIxNHZMU2o4ZURWNEtmR2IifQ',
      },
    },
    {
      courseTitle: 'Cybersecurity Basics',
      student: {
        _id: 'user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V',
        name: 'Great Stack',
        imageUrl:
          'https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ycVFsdmFMSkw3ckIxNHZMU2o4ZURWNEtmR2IifQ',
      },
    },
  ],
  totalCourses: 8,
};

export const dummyStudentEnrolled = [
  {
    student: {
      _id: 'user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V',
      name: 'PhuDat',
      imageUrl:
        'https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ycVFsdmFMSkw3ckIxNHZMU2o4ZURWNEtmR2IifQ',
    },
    courseTitle: 'Introduction to JavaScript',
    purchaseDate: '2024-12-20T08:39:55.509Z',
  },
  {
    student: {
      _id: 'user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V',
      name: 'PhuDat',
      imageUrl:
        'https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ycVFsdmFMSkw3ckIxNHZMU2o4ZURWNEtmR2IifQ',
    },
    courseTitle: 'Introduction to JavaScript',
    purchaseDate: '2024-12-20T08:59:49.964Z',
  },
  {
    student: {
      _id: 'user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V',
      name: 'PhuDat',
      imageUrl:
        'https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ycVFsdmFMSkw3ckIxNHZMU2o4ZURWNEtmR2IifQ',
    },
    courseTitle: 'Advanced Python Programming',
    purchaseDate: '2024-12-20T11:03:42.931Z',
  },
  {
    student: {
      _id: 'user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V',
      name: 'PhuDat',
      imageUrl:
        'https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ycVFsdmFMSkw3ckIxNHZMU2o4ZURWNEtmR2IifQ',
    },
    courseTitle: 'Web Development Bootcamp',
    purchaseDate: '2024-12-20T11:04:48.798Z',
  },
];

export const dummyCourses = [
  {
    _id: '605c72efb3f1c2b1f8e4e1a1',
    courseTitle: 'Learn MongoDB in 1 Hour',
    courseDescription:
      '<h2>Learn the Basics of MongoDB</h2><p>MongoDB is a powerful NoSQL database designed for scalability and flexibility. In this course, you will learn the fundamentals of MongoDB, including document-based data storage, collections, and querying techniques.</p><p>This course is perfect for beginners who want to start their journey in database management. By the end of this course, you will be able to design efficient database structures and interact with MongoDB using CRUD operations.</p><ul><li>Understand the basics of NoSQL databases</li><li>Learn how to perform CRUD operations</li><li>Design scalable and flexible database schemas</li></ul>',
    coursePrice: 49.99,
    isPublished: true,
    discount: 20,
    courseContent: [
      {
        chapterId: 'chapter1',
        chapterOrder: 1,
        chapterTitle: 'Getting Started with MongoDB',
        chapterContent: [
          {
            lectureId: 'lecture1',
            lectureTitle: 'What is JavaScript?',
            lectureDuration: 16,
            lectureUrl: 'https://youtu.be/c2M-rlkkT5o?si=qYOnAdJ3x4F9VFqJ',
            isPreviewFree: true,
            lectureOrder: 1,
          },
          {
            lectureId: 'lecture2',
            lectureTitle: 'Setting Up Your Environment',
            lectureDuration: 19,
            lectureUrl: 'https://youtu.be/c2M-rlkkT5o?si=qYOnAdJ3x4F9VFqJ',
            isPreviewFree: false,
            lectureOrder: 2,
          },
        ],
      },
      {
        chapterId: 'chapter2',
        chapterOrder: 2,
        chapterTitle: 'Variables and Data Types',
        chapterContent: [
          {
            lectureId: 'lecture3',
            lectureTitle: 'Understanding Variables',
            lectureDuration: 20,
            lectureUrl: 'https://youtu.be/c2M-rlkkT5o?si=qYOnAdJ3x4F9VFqJ',
            isPreviewFree: true,
            lectureOrder: 1,
          },
          {
            lectureId: 'lecture4',
            lectureTitle: 'Data Types in JavaScript',
            lectureDuration: 10,
            lectureUrl: 'https://youtu.be/c2M-rlkkT5o?si=qYOnAdJ3x4F9VFqJ',
            isPreviewFree: false,
            lectureOrder: 2,
          },
        ],
      },
    ],
    educator: '675ac1512100b91a6d9b8b24',
    enrolledStudents: [
      'user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V',
      'user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V',
      'user_2qjlgkAqIMpiR2flWIRzvWKtE0w',
    ],
    rating: Math.floor(Math.random() * (5 - 3 + 1)) + 3,
    createdAt: '2024-12-17T08:16:53.622Z',
    updatedAt: '2025-01-02T04:47:44.701Z',
    __v: 4,
    courseThumbnail: 'https://img.youtube.com/vi/c2M-rlkkT5o/maxresdefault.jpg',
  },
  {
    _id: '675ac1512100b91a6d9b8b24',
    courseTitle: 'Express JS Full Course',
    courseDescription:
      '<h2>Deep Dive into Express.js</h2><p>Express.js is a fast and minimalist web framework for Node.js, designed to simplify backend development. In this course, you will learn advanced Express.js concepts such as middleware, routing, authentication, and performance optimization.</p><p>This course is perfect for developers who have a basic understanding of JavaScript and want to build scalable web applications. By the end of this course, you will be able to develop efficient APIs and web applications using Express.js.</p><ul><li>Master middleware and routing</li><li>Implement authentication and authorization</li><li>Optimize performance and security</li></ul>',
    coursePrice: 79.99,
    isPublished: true,
    discount: 15,
    courseContent: [
      {
        chapterId: 'chapter1',
        chapterOrder: 1,
        chapterTitle: 'Advanced Data Structures',
        chapterContent: [
          {
            lectureId: ' lecture1',
            lectureTitle: 'Lists and Tuples',
            lectureDuration: 720,
            lectureUrl: 'https://youtu.be/HdLIMoQkXFA',
            isPreviewFree: true,
            lectureOrder: 1,
          },
          {
            lectureId: 'lecture2',
            lectureTitle: 'Dictionaries and Sets',
            lectureDuration: 850,
            lectureUrl: 'https://youtu.be/HdLIMoQkXFA',
            isPreviewFree: false,
            lectureOrder: 2,
          },
        ],
      },
      {
        chapterId: 'chapter2',
        chapterOrder: 2,
        chapterTitle: 'Object-Oriented Programming',
        chapterContent: [
          {
            lectureId: 'lecture3',
            lectureTitle: 'Classes and Objects',
            lectureDuration: 900,
            lectureUrl: 'https://youtu.be/HdLIMoQkXFA',
            isPreviewFree: true,
            lectureOrder: 1,
          },
          {
            lectureId: 'lecture4',
            lectureTitle: 'Inheritance and Polymorphism',
            lectureDuration: 950,
            lectureUrl: 'https://youtu.be/HdLIMoQkXFA',
            isPreviewFree: false,
            lectureOrder: 2,
          },
        ],
      },
    ],
    educator: '675ac1512100b91a6d9b8b24',
    enrolledStudents: [
      'user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V',
      'user_2qjlgkAqIMpiR2flWIRzvWKtE0w',
    ],
    rating: Math.floor(Math.random() * (5 - 3 + 1)) + 3,
    createdAt: '2024-12-17T08:16:53.622Z',
    updatedAt: '2025-01-02T06:47:54.446Z',
    __v: 3,
    courseThumbnail: 'https://img.youtube.com/vi/nH9E25nkk3I/maxresdefault.jpg',
  },
  {
    _id: '605c72efb3f1c2b1f8e4e1ae',
    courseTitle: 'React Tutorial for Beginners',
    courseDescription:
      "<h2>Protect Systems and Networks</h2><p>Cybersecurity is critical in today's digital age. This course introduces the fundamentals of cybersecurity, including threat analysis, ethical hacking, and secure programming practices.</p><p>By the end of this course, you will understand how to identify vulnerabilities and implement security measures effectively.</p><ul><li>Understand security protocols</li><li>Learn about encryption techniques</li><li>Conduct basic penetration testing</li></ul>",
    coursePrice: 69.99,
    isPublished: true,
    discount: 15,
    courseContent: [
      {
        chapterId: 'chapter1',
        chapterOrder: 1,
        chapterTitle: 'Introduction to Cybersecurity',
        chapterContent: [
          {
            lectureId: 'lecture1',
            lectureTitle: 'What is Cybersecurity?',
            lectureDuration: 10,
            lectureUrl: 'https://youtu.be/samplelink5',
            isPreviewFree: true,
            lectureOrder: 1,
          },
          {
            lectureId: 'lecture2',
            lectureTitle: 'Types of Cyber Threats',
            lectureDuration: 18,
            lectureUrl: 'https://youtu.be/samplelink6',
            isPreviewFree: false,
            lectureOrder: 2,
          },
        ],
      },
      {
        chapterId: 'chapter2',
        chapterOrder: 2,
        chapterTitle: 'Basic Security Practices',
        chapterContent: [
          {
            lectureId: 'lecture3',
            lectureTitle: 'Password Management',
            lectureDuration: 15,
            lectureUrl: 'https://youtu.be/samplelink7',
            isPreviewFree: true,
            lectureOrder: 1,
          },
          {
            lectureId: 'lecture4',
            lectureTitle: 'Network Security Essentials',
            lectureDuration: 20,
            lectureUrl: 'https://youtu.be/SqcY0GlETPk?si=WWytA2wkqRYybKdH',
            isPreviewFree: false,
            lectureOrder: 2,
          },
        ],
      },
    ],
    educator: '675ac1512100b91a6d9b8b24',
    enrolledStudents: [
      'user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V',
      'user_2qjlgkAqIMpiR2flWIRzvWKtE0w',
    ],
    rating: Math.floor(Math.random() * (5 - 3 + 1)) + 3,
    createdAt: '2024-12-27T11:30:00.000Z',
    updatedAt: '2024-12-31T04:14:49.773Z',
    __v: 2,
    courseThumbnail: 'https://img.youtube.com/vi/SqcY0GlETPk/maxresdefault.jpg',
  },
  {
    _id: '605c72efb3f1c2b1f8e4e1a7',
    courseTitle: 'Node.js Full Course for Beginners',
    courseDescription:
      '<h2>Become a Full-Stack Web Developer</h2><p>This comprehensive bootcamp covers everything you need to know to become a full-stack web developer. From HTML and CSS to JavaScript and backend technologies, this course is designed to take you from beginner to job-ready.</p><p>Throughout the course, you will work on real-world projects, build a portfolio, and gain the skills necessary to succeed in the tech industry.</p><ul><li>Learn front-end and back-end development</li><li>Build responsive and dynamic web applications</li><li>Understand databases and server-side programming</li></ul>',
    coursePrice: 99.99,
    isPublished: true,
    discount: 25,
    courseContent: [
      {
        chapterId: 'chapter1',
        chapterOrder: 1,
        chapterTitle: 'HTML & CSS Basics',
        chapterContent: [
          {
            lectureId: 'lecture1',
            lectureTitle: 'Introduction to HTML',
            lectureDuration: 600,
            lectureUrl: 'https://youtu.be/-HeadgoqJ7A',
            isPreviewFree: true,
            lectureOrder: 1,
          },
          {
            lectureId: 'lecture2',
            lectureTitle: 'Styling with CSS',
            lectureDuration: 720,
            lectureUrl: 'https://youtu.be/-HeadgoqJ7A',
            isPreviewFree: false,
            lectureOrder: 2,
          },
        ],
      },
      {
        chapterId: 'chapter2',
        chapterOrder: 2,
        chapterTitle: 'JavaScript Fundamentals',
        chapterContent: [
          {
            lectureId: 'lecture3',
            lectureTitle: 'JavaScript Basics',
            lectureDuration: 800,
            lectureUrl: 'https://youtu.be/-HeadgoqJ7A',
            isPreviewFree: true,
            lectureOrder: 1,
          },
          {
            lectureId: 'lecture4',
            lectureTitle: 'DOM Manipulation',
            lectureDuration: 850,
            lectureUrl: 'https://youtu.be/-HeadgoqJ7A',
            isPreviewFree: false,
            lectureOrder: 2,
          },
        ],
      },
    ],
    educator: '675ac1512100b91a6d9b8b24',
    enrolledStudents: [
      'user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V',
      'user_2qjlgkAqIMpiR2flWIRzvWKtE0w',
    ],
    rating: Math.floor(Math.random() * (5 - 3 + 1)) + 3,
    createdAt: '2024-12-17T08:16:53.622Z',
    updatedAt: '2024-12-31T05:31:27.290Z',
    __v: 2,
    courseThumbnail: 'https://img.youtube.com/vi/f2EqECiTBL8/maxresdefault.jpg',
  },
  {
    _id: '605c72efb3f1c2b1f8e4e1ac',
    courseTitle: 'Cloud Computing Essentials',
    courseDescription:
      '<h2>Master Cloud Fundamentals</h2><p>Learn the foundations of cloud computing and explore popular cloud platforms like AWS, Azure, and Google Cloud. This course is ideal for IT professionals and developers looking to transition to cloud-based solutions.</p><p>By the end of this course, you will understand cloud services, deployment models, and best practices for using cloud resources efficiently.</p><ul><li>Understand cloud architecture</li><li>Learn to work with AWS, Azure, and GCP</li><li>Explore serverless computing and storage solutions</li></ul>',
    coursePrice: 69.99,
    isPublished: true,
    discount: 20,
    courseContent: [
      {
        chapterId: 'chapter1',
        chapterOrder: 1,
        chapterTitle: 'Cloud Fundamentals',
        chapterContent: [
          {
            lectureId: 'lecture1',
            lectureTitle: 'What is Cloud Computing?',
            lectureDuration: 600,
            lectureUrl: 'https://youtu.be/-HeadgoqJ7A',
            isPreviewFree: true,
            lectureOrder: 1,
          },
          {
            lectureId: 'lecture2',
            lectureTitle: 'Cloud Service Models',
            lectureDuration: 720,
            lectureUrl: 'https://youtu.be/-HeadgoqJ7A',
            isPreviewFree: false,
            lectureOrder: 2,
          },
        ],
      },
      {
        chapterId: 'chapter2',
        chapterOrder: 2,
        chapterTitle: 'Exploring Cloud Platforms',
        chapterContent: [
          {
            lectureId: 'lecture3',
            lectureTitle: 'AWS Basics',
            lectureDuration: 800,
            lectureUrl: 'https://youtu.be/-HeadgoqJ7A',
            isPreviewFree: true,
            lectureOrder: 1,
          },
          {
            lectureId: 'lecture4',
            lectureTitle: 'Introduction to Google Cloud',
            lectureDuration: 850,
            lectureUrl: 'https://youtu.be/-HeadgoqJ7A',
            isPreviewFree: false,
            lectureOrder: 2,
          },
        ],
      },
    ],
    educator: '675ac1512100b91a6d9b8b24',
    enrolledStudents: ['user_2qjlgkAqIMpiR2flWIRzvWKtE0w'],
    rating: Math.floor(Math.random() * (5 - 3 + 1)) + 3,
    createdAt: '2024-12-17T08:16:53.622Z',
    updatedAt: '2024-12-31T05:32:55.357Z',
    __v: 1,
    courseThumbnail: 'https://img.youtube.com/vi/0yboGn8errU/maxresdefault.jpg',
  },
  {
    _id: '605c72efb3f1c2b1f8e4e1ad',
    courseTitle: 'Data Science with Python',
    courseDescription:
      '<h2>Start Your Data Science Journey</h2><p>Data Science is one of the most in-demand fields in the world. This course teaches you the essentials of data analysis, visualization, and machine learning using Python. Learn libraries like Pandas, NumPy, Matplotlib, and Scikit-learn.</p><p>By the end of this course, you will be equipped to work on real-world data projects and gain insights from data.</p><ul><li>Data cleaning and preprocessing</li><li>Exploratory Data Analysis (EDA)</li><li>Build predictive models</li></ul>',
    coursePrice: 89.99,
    isPublished: true,
    discount: 20,
    courseContent: [
      {
        chapterId: 'chapter1',
        chapterOrder: 1,
        chapterTitle: 'Python for Data Science',
        chapterContent: [
          {
            lectureId: 'lecture1',
            lectureTitle: 'Python Basics',
            lectureDuration: 30,
            lectureUrl: 'https://youtu.be/samplelink1',
            isPreviewFree: true,
            lectureOrder: 1,
          },
          {
            lectureId: 'lecture2',
            lectureTitle: 'Working with NumPy',
            lectureDuration: 25,
            lectureUrl: 'https://youtu.be/samplelink2',
            isPreviewFree: false,
            lectureOrder: 2,
          },
        ],
      },
      {
        chapterId: 'chapter2',
        chapterOrder: 2,
        chapterTitle: 'Data Visualization',
        chapterContent: [
          {
            lectureId: 'lecture3',
            lectureTitle: 'Introduction to Matplotlib',
            lectureDuration: 20,
            lectureUrl: 'https://youtu.be/samplelink3',
            isPreviewFree: true,
            lectureOrder: 1,
          },
          {
            lectureId: 'lecture4',
            lectureTitle: 'Advanced Visualizations with Seaborn',
            lectureDuration: 25,
            lectureUrl: 'https://youtu.be/samplelink4',
            isPreviewFree: false,
            lectureOrder: 2,
          },
        ],
      },
    ],
    educator: '675ac1512100b91a6d9b8b24',
    enrolledStudents: [
      'user_2qjlgkAqIMpiR2flWIRzvWKtE0w',
      'user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V',
      'user_2qjlgkAqIMpiR2flWIRzvWKtE0w',
    ],
    rating: Math.floor(Math.random() * (5 - 3 + 1)) + 3,
    createdAt: '2024-12-27T10:00:00.000Z',
    updatedAt: '2024-12-31T09:57:48.992Z',
    __v: 3,
    courseThumbnail: 'https://img.youtube.com/vi/E4znbZgUWzA/maxresdefault.jpg',
  },
  {
    _id: '605c72efb3f1c2b1f8e4e1aa',
    courseTitle: 'Data Science and Machine Learning',
    courseDescription:
      '<h2>Unlock the Power of Data</h2><p>This course provides a comprehensive introduction to data science and machine learning. You will learn how to analyze data, build predictive models, and apply machine learning algorithms to real-world problems.</p><p>By the end of this course, you will have a solid understanding of data manipulation, visualization, and machine learning techniques, enabling you to make data-driven decisions.</p><ul><li>Understand data analysis and visualization</li><li>Learn machine learning algorithms and their applications</li><li>Work with popular data science libraries like Pandas and Scikit-Learn</li></ul>',
    coursePrice: 89.99,
    isPublished: true,
    discount: 30,
    courseContent: [
      {
        chapterId: 'chapter1',
        chapterOrder: 1,
        chapterTitle: 'Introduction to Data Science',
        chapterContent: [
          {
            lectureId: 'lecture1',
            lectureTitle: 'What is Data Science?',
            lectureDuration: 600,
            lectureUrl: 'https://youtu.be/-HeadgoqJ7A',
            isPreviewFree: true,
            lectureOrder: 1,
          },
          {
            lectureId: 'lecture2',
            lectureTitle: 'Data Collection and Cleaning',
            lectureDuration: 720,
            lectureUrl: 'https://youtu.be/-HeadgoqJ7A',
            isPreviewFree: false,
            lectureOrder: 2,
          },
        ],
      },
      {
        chapterId: 'chapter2',
        chapterOrder: 2,
        chapterTitle: 'Machine Learning Basics',
        chapterContent: [
          {
            lectureId: 'lecture3',
            lectureTitle: 'Supervised vs Unsupervised Learning',
            lectureDuration: 800,
            lectureUrl: 'https://youtu.be/-HeadgoqJ7A',
            isPreviewFree: true,
            lectureOrder: 1,
          },
          {
            lectureId: 'lecture4',
            lectureTitle: 'Building Your First Model',
            lectureDuration: 850,
            lectureUrl: 'https://youtu.be/-HeadgoqJ7A',
            isPreviewFree: false,
            lectureOrder: 2,
          },
        ],
      },
    ],
    educator: '675ac1512100b91a6d9b8b24',
    enrolledStudents: ['user_2qjlgkAqIMpiR2flWIRzvWKtE0w'],
    rating: Math.floor(Math.random() * (5 - 3 + 1)) + 3,
    createdAt: '2024-12-17T08:16:53.622Z',
    updatedAt: '2025-01-02T06:53:59.753Z',
    __v: 1,
    courseThumbnail: 'https://img.youtube.com/vi/631lFJdQvoo/maxresdefault.jpg',
  },
  {
    _id: '605c72efb3f1c2b1f8e4e1ab',
    courseTitle: 'Introduction to Cybersecurity',
    courseDescription:
      '<h2>Protect the Digital World</h2><p>This course covers the essentials of cybersecurity, including understanding threats, vulnerabilities, and how to secure systems against cyber-attacks. Ideal for beginners, this course will prepare you for a career in cybersecurity.</p><p>By the end of this course, you will be able to identify and mitigate risks, implement security best practices, and understand the fundamentals of encryption and network security.</p><ul><li>Understand common cybersecurity threats</li><li>Learn about encryption and secure communication</li><li>Explore tools for penetration testing</li></ul>',
    coursePrice: 59.99,
    isPublished: true,
    discount: 15,
    courseContent: [
      {
        chapterId: 'chapter1',
        chapterOrder: 1,
        chapterTitle: 'Cybersecurity Basics',
        chapterContent: [
          {
            lectureId: 'lecture1',
            lectureTitle: 'Introduction to Cybersecurity',
            lectureDuration: 700,
            lectureUrl: 'https://youtu.be/-HeadgoqJ7A',
            isPreviewFree: true,
            lectureOrder: 1,
          },
          {
            lectureId: 'lecture2',
            lectureTitle: 'Understanding Cyber Threats',
            lectureDuration: 750,
            lectureUrl: 'https://youtu.be/-HeadgoqJ7A',
            isPreviewFree: false,
            lectureOrder: 2,
          },
        ],
      },
      {
        chapterId: 'chapter2',
        chapterOrder: 2,
        chapterTitle: 'Network Security Fundamentals',
        chapterContent: [
          {
            lectureId: 'lecture3',
            lectureTitle: 'Securing Networks',
            lectureDuration: 800,
            lectureUrl: 'https://youtu.be/-HeadgoqJ7A',
            isPreviewFree: true,
            lectureOrder: 1,
          },
          {
            lectureId: 'lecture4',
            lectureTitle: 'Firewalls and VPNs',
            lectureDuration: 850,
            lectureUrl: 'https://youtu.be/-HeadgoqJ7A',
            isPreviewFree: false,
            lectureOrder: 2,
          },
        ],
      },
    ],
    educator: '675ac1512100b91a6d9b8b24',
    enrolledStudents: ['user_2qjlgkAqIMpiR2flWIRzvWKtE0w'],
    rating: Math.floor(Math.random() * (5 - 3 + 1)) + 3,
    createdAt: '2024-12-17T08:16:53.622Z',
    updatedAt: '2025-01-02T06:56:13.208Z',
    __v: 1,
    courseThumbnail: 'https://img.youtube.com/vi/WbV3zRgpw_E/maxresdefault.jpg',
  },
];
