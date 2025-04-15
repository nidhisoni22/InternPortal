// Internship data - this would typically come from a backend API
const internships = [
    {
        id: 1,
        title: "Software Development Intern",
        company: "TCS",
        location: "Delhi",
        duration: "3 Months",
        stipend: 25000,
        workType: "On-site",
        category: "Software Development",
        description: "Join our team to work on cutting-edge technologies and gain hands-on experience in software development. You'll be working with experienced developers on real projects that impact millions of users worldwide. This internship offers a unique opportunity to learn and grow in a collaborative environment while contributing to meaningful work.",
        icon: "fas fa-laptop-code",
        applyBy: "June 30, 2025",
        startDate: "July 15, 2025",
        openings: 5,
        qualification: "Bachelor's/Master's in Computer Science or related field",
        experience: "No prior experience required",
        responsibilities: [
            "Develop and maintain software applications using modern programming languages and frameworks",
            "Collaborate with cross-functional teams to define, design, and ship new features",
            "Write clean, maintainable, and efficient code",
            "Participate in code reviews and contribute to technical discussions",
            "Debug production issues and implement fixes",
            "Learn and adopt best practices for software development"
        ],
        requirements: [
            "Currently pursuing a degree in Computer Science, Software Engineering, or related field",
            "Strong programming skills in at least one language (Java, Python, C++, JavaScript, etc.)",
            "Basic understanding of data structures and algorithms",
            "Familiarity with web technologies (HTML, CSS, JavaScript) is a plus",
            "Good problem-solving skills and attention to detail",
            "Excellent communication and teamwork abilities",
            "Eagerness to learn and grow in a fast-paced environment"
        ],
        perks: [
            "Competitive stipend",
            "Flexible working hours",
            "Mentorship from experienced professionals",
            "Opportunity to work on real-world projects",
            "Certificate of completion",
            "Possibility of pre-placement offer based on performance",
            "Networking opportunities with industry professionals"
        ]
    },
    {
        id: 2,
        title: "Data Science / AI Specialist Intern",
        company: "Infosys",
        location: "Gurgaon",
        duration: "6 Months",
        stipend: 30000,
        workType: "Hybrid",
        category: "Data Science",
        description: "Join Infosys's data science team to work on challenging problems and gain hands-on experience with big data and machine learning. You'll collaborate with experienced data scientists to analyze complex datasets, build predictive models, and extract meaningful insights that drive business decisions.",
        icon: "fas fa-chart-line",
        applyBy: "July 15, 2025",
        startDate: "August 1, 2025",
        openings: 3,
        qualification: "Bachelor's/Master's in Computer Science, Statistics, Mathematics or related field",
        experience: "Basic knowledge of Python and statistics required",
        responsibilities: [
            "Collecting, cleaning, and analyzing datasets",
            "Building and testing machine learning models",
            "Performing exploratory data analysis (EDA)",
            "Visualizing data for insights and presentations",
            "Assisting in deploying AI models into production",
            "Researching latest AI/ML trends and tools",
            "Documenting experiments and model performance",
            "Creating tech-related content or blog posts (optional for outreach or brand awareness)"
        ],
        requirements: [
            "Currently pursuing a degree in Computer Science, Statistics, Mathematics, or related field",
            "Proficiency in Python programming and data analysis libraries (Pandas, NumPy)",
            "Basic understanding of machine learning concepts and algorithms",
            "Familiarity with SQL and database concepts",
            "Strong analytical and problem-solving skills",
            "Good communication skills to present findings clearly",
            "Ability to work in a collaborative environment"
        ],
        perks: [
            "Competitive stipend",
            "Flexible work arrangement (hybrid model)",
            "Access to Infosys's learning resources and certifications",
            "Mentorship from industry experts",
            "Networking opportunities within Infosys",
            "Certificate of completion",
            "Possibility of full-time employment based on performance"
        ]
    },
    {
        id: 3,
        title: "Digital Marketing Intern",
        company: "Wipro",
        location: "Delhi",
        duration: "4 Months",
        stipend: 15000,
        workType: "Hybrid",
        category: "Digital Marketing",
        description: "Join Wipro's marketing team to gain hands-on experience in digital marketing strategies and campaigns. You'll assist in planning and executing marketing initiatives, managing social media accounts, and analyzing campaign performance metrics to drive customer engagement and business growth.",
        icon: "fas fa-bullhorn",
        applyBy: "June 25, 2025",
        startDate: "July 10, 2025",
        openings: 8,
        qualification: "Bachelor's in Marketing, Communications, Business, or related field",
        experience: "Familiarity with social media platforms required",
        responsibilities: [
            "Assist in developing and implementing digital marketing campaigns",
            "Create and schedule content for various social media platforms",
            "Monitor and analyze campaign performance metrics",
            "Conduct market research and competitor analysis",
            "Support email marketing initiatives",
            "Contribute to content creation for blogs and websites",
            "Assist with SEO and SEM strategies"
        ],
        requirements: [
            "Currently pursuing a degree in Marketing, Communications, Business, or related field",
            "Strong understanding of social media platforms and digital marketing concepts",
            "Basic knowledge of SEO and SEM principles",
            "Familiarity with marketing analytics tools",
            "Excellent written and verbal communication skills",
            "Creative thinking and problem-solving abilities",
            "Self-motivated with the ability to work independently in a remote setting"
        ],
        perks: [
            "Competitive stipend",
            "Flexible work hours",
            "Remote work opportunity",
            "Mentorship from Wipro marketing professionals",
            "Exposure to industry-leading marketing practices",
            "Certificate of completion",
            "Networking opportunities with Wipro teams"
        ]
    },
    {
        id: 4,
        title: "Product Manager Intern",
        company: "Tech Mahindra",
        location: "Gurgaon",
        duration: "3 Months",
        workType: "On-site",
        category: "Product Management",
        description: "A Product Manager Internship provides hands-on experience in managing the lifecycle of a product, from ideation to launch. Interns in this role will work closely with cross-functional teams (engineering, design, marketing, and sales) to ensure products meet customer needs and business goals. As a product manager intern, you'll assist in gathering market research, defining product requirements, creating roadmaps, and ensuring smooth product development and delivery. This internship helps you develop skills in strategic thinking, leadership, market analysis, and communication—all essential for a career in product management.",
        icon: "fas fa-tasks",
        applyBy: "July 5, 2025",
        startDate: "July 25, 2025",
        openings: 3,
        qualification: "Bachelor's in Business, Computer Science, Engineering, or related field",
        experience: "Basic understanding of product development processes preferred",
        responsibilities: [
            "Assisting in developing product roadmaps and defining product vision",
            "Gathering and analyzing customer feedback, market trends, and competitor analysis to inform product decisions",
            "Collaborating with design, engineering, and marketing teams to create detailed product specifications and ensure product delivery",
            "Participating in defining user stories, use cases, and product requirements",
            "Helping to track project timelines, budgets, and milestones, ensuring product is delivered on time and within scope",
            "Assisting in managing product backlogs and prioritizing features based on business goals",
            "Communicating product updates to stakeholders and preparing reports and presentations",
            "Optionally sharing product management tips, case studies, and process improvements through LinkedIn, a personal blog, or a portfolio site"
        ],
        requirements: [
            "Currently pursuing a degree in Business, Computer Science, Engineering, or related field",
            "Strong analytical and problem-solving skills",
            "Excellent communication and presentation abilities",
            "Basic understanding of software development processes",
            "Ability to work cross-functionally with diverse teams",
            "Attention to detail and organizational skills",
            "User-centric mindset and passion for creating great products"
        ],
        perks: [
            "Exposure to Tech Mahindra's product development lifecycle",
            "Mentorship from experienced product managers",
            "Access to product management tools and resources",
            "Certificate of completion",
            "Networking opportunities within Tech Mahindra",
            "Potential for future employment opportunities"
        ]
    },
    {
        id: 5,
        title: "Cybersecurity Specialist Intern",
        company: "HCL Technologies",
        location: "Delhi",
        duration: "6 Months",
        stipend: 40000,
        workType: "On-site",
        category: "Cybersecurity",
        description: "A Cybersecurity Specialist Internship provides a deep dive into protecting organizations from digital threats and vulnerabilities. Interns assist in identifying, analyzing, and responding to security risks, as well as developing strategies to safeguard networks, systems, and data. This internship prepares you for real-world cybersecurity challenges, from penetration testing to security policy management.",
        icon: "fas fa-shield-alt",
        applyBy: "June 20, 2025",
        startDate: "July 5, 2025",
        openings: 3,
        qualification: "Bachelor's/Master's in Computer Science, IT, Cybersecurity, or related field",
        experience: "Basic understanding of network security and cybersecurity principles required",
        responsibilities: [
            "Assisting with vulnerability assessments and penetration testing",
            "Analyzing network traffic and identifying potential threats",
            "Assisting in developing and enforcing security policies and procedures",
            "Monitoring security tools (e.g., SIEM systems, firewalls) for suspicious activity",
            "Helping to ensure compliance with industry regulations (e.g., GDPR, HIPAA)",
            "Supporting incident response efforts and creating post-mortem reports",
            "Documenting security best practices and threat intelligence findings",
            "Optionally sharing cybersecurity learning experiences or projects online"
        ],
        requirements: [
            "Currently pursuing a degree in Computer Science, IT, Cybersecurity, or related field",
            "Basic understanding of networking and security concepts",
            "Familiarity with operating systems (Windows, Linux)",
            "Knowledge of common security tools and technologies",
            "Strong analytical and problem-solving skills",
            "Attention to detail and methodical approach to work",
            "Good communication skills for reporting security findings"
        ],
        perks: [
            "Competitive stipend",
            "Exposure to HCL's enterprise-level security infrastructure",
            "Mentorship from experienced cybersecurity professionals",
            "Access to security tools and platforms",
            "Opportunity to earn industry certifications",
            "Networking opportunities within HCL Technologies",
            "Certificate of completion",
            "Possibility of full-time employment based on performance"
        ]
    },
    {
        id: 6,
        title: "Business Development Intern",
        company: "Cognizant",
        location: "Delhi",
        duration: "4 Months",
        stipend: 18000,
        workType: "Hybrid",
        category: "Business Development",
        description: "Join Cognizant's business development team to identify new business opportunities, develop growth strategies, and build relationships with potential clients. You'll assist in preparing business proposals and presentations while learning about business development in a global technology company.",
        icon: "fas fa-users",
        applyBy: "July 10, 2025",
        startDate: "August 1, 2025",
        openings: 3,
        qualification: "Bachelor's/Master's in Business, Marketing, or related field",
        experience: "Strong communication and analytical skills required",
        responsibilities: [
            "Identify and research potential business opportunities and partnerships",
            "Assist in developing business growth strategies",
            "Help prepare business proposals and presentations",
            "Support relationship building with potential clients",
            "Conduct market analysis and competitive intelligence",
            "Assist with tracking business development metrics",
            "Participate in client meetings and networking events"
        ],
        requirements: [
            "Currently pursuing a degree in Business, Marketing, or related field",
            "Understanding of business development principles",
            "Strong research and analytical skills",
            "Excellent presentation and communication abilities",
            "Proficiency in MS Office (especially PowerPoint and Excel)",
            "Self-motivated with a proactive approach to problem-solving",
            "Interest in building client relationships and networking"
        ],
        perks: [
            "Competitive stipend",
            "Flexible work arrangement (hybrid model)",
            "Exposure to business development in a global technology company",
            "Mentorship from experienced business development professionals",
            "Access to Cognizant's learning resources",
            "Certificate of completion",
            "Networking opportunities within Cognizant"
        ]
    },
    {
        id: 7,
        title: "Artificial Intelligence (AI) Engineer Intern",
        company: "Microsoft",
        location: "Gurgaon",
        duration: "6 Months",
        stipend: 40000,
        workType: "Hybrid",
        category: "Artificial Intelligence",
        description: "An AI Engineer Internship is ideal for students or early professionals eager to dive deep into artificial intelligence, machine learning, and deep learning. Interns in this role assist in developing, training, and deploying intelligent systems that solve real-world problems—ranging from automation and natural language processing to computer vision and recommendation engines.",
        icon: "fas fa-robot",
        applyBy: "August 15, 2025",
        startDate: "September 1, 2025",
        openings: 2,
        qualification: "Bachelor's/Master's in Computer Science, AI, Machine Learning or related field",
        experience: "Basic knowledge of Python and machine learning libraries required",
        responsibilities: [
            "Building and testing AI/ML models using real-world datasets",
            "Preprocessing large datasets and engineering features",
            "Researching the latest AI techniques and implementing them in projects",
            "Collaborating with data scientists and software developers",
            "Evaluating and optimizing model performance",
            "Assisting in AI deployment (e.g., using Flask, FastAPI, or cloud platforms)",
            "Writing documentation and contributing to project reports",
            "Sharing technical content or code to GitHub or LinkedIn (optional but valuable for personal branding)"
        ],
        requirements: [
            "Currently pursuing a degree in Computer Science, AI, Machine Learning, or related field",
            "Proficiency in Python programming and ML libraries (TensorFlow, PyTorch, scikit-learn)",
            "Understanding of machine learning algorithms and deep learning concepts",
            "Familiarity with data preprocessing and feature engineering techniques",
            "Strong analytical and problem-solving skills",
            "Good communication skills to present findings and collaborate with teams",
            "Ability to work in a fast-paced, collaborative environment"
        ],
        perks: [
            "Competitive stipend",
            "Flexible work arrangement (hybrid model)",
            "Access to Microsoft's AI resources and tools",
            "Mentorship from experienced AI engineers",
            "Networking opportunities within Microsoft",
            "Certificate of completion",
            "Possibility of full-time employment based on performance"
        ]
    },
    {
        id: 14,
        title: "Cloud Architect Intern",
        company: "Amazon Web Services",
        location: "Delhi",
        duration: "6 Months",
        stipend: 45000,
        workType: "Hybrid",
        category: "Cloud Computing",
        description: "A Cloud Architect Internship offers hands-on experience in designing, implementing, and managing scalable cloud infrastructure. Interns support cloud-based projects, learn about architecture best practices, and gain exposure to platforms like AWS, Microsoft Azure, or Google Cloud Platform (GCP). This role is essential for those aiming to help organizations transition to and optimize cloud environments securely and efficiently.",
        icon: "fas fa-cloud",
        applyBy: "July 30, 2025",
        startDate: "August 15, 2025",
        openings: 3,
        qualification: "Bachelor's/Master's in Computer Science, IT, or related field",
        experience: "Basic knowledge of cloud platforms and networking concepts required",
        responsibilities: [
            "Assisting in the design of cloud-based solutions and architectures",
            "Supporting migration of applications or infrastructure to the cloud",
            "Learning and implementing Infrastructure-as-Code (IaC) using tools like Terraform or AWS CloudFormation",
            "Monitoring cloud resources and helping optimize for cost, security, and performance",
            "Assisting in cloud automation and deployment pipelines (CI/CD)",
            "Documenting architecture diagrams, technical procedures, and system designs",
            "Collaborating with DevOps and security teams to ensure compliance",
            "Optionally sharing learnings, projects, or architecture case studies online"
        ],
        requirements: [
            "Currently pursuing a degree in Computer Science, IT, or related field",
            "Basic understanding of cloud computing concepts and services",
            "Familiarity with at least one major cloud platform (AWS, Azure, or GCP)",
            "Knowledge of networking fundamentals and security principles",
            "Basic scripting or programming skills (Python, Bash, etc.)",
            "Ability to learn new technologies quickly",
            "Good communication and documentation skills"
        ],
        perks: [
            "Competitive stipend",
            "Flexible work arrangement (hybrid model)",
            "Access to AWS's cloud resources and tools",
            "Mentorship from experienced cloud architects",
            "AWS certification preparation support",
            "Networking opportunities within Amazon Web Services",
            "Certificate of completion",
            "Possibility of full-time employment based on performance"
        ]
    },
    {
        id: 9,
        title: "Cloud Architect Intern",
        company: "Amazon Web Services",
        location: "Delhi",
        duration: "6 Months",
        workType: "Hybrid",
        category: "Cloud Computing",
        description: "A Cloud Architect Internship offers hands-on experience in designing, implementing, and managing scalable cloud infrastructure. Interns support cloud-based projects, learn about architecture best practices, and gain exposure to platforms like AWS, Microsoft Azure, or Google Cloud Platform (GCP). This role is essential for those aiming to help organizations transition to and optimize cloud environments securely and efficiently.",
        icon: "fas fa-cloud",
        applyBy: "July 30, 2025",
        startDate: "August 15, 2025",
        openings: 3,
        qualification: "Bachelor's/Master's in Computer Science, IT, or related field",
        experience: "Basic knowledge of cloud platforms and networking concepts required",
        responsibilities: [
            "Assisting in the design of cloud-based solutions and architectures",
            "Supporting migration of applications or infrastructure to the cloud",
            "Learning and implementing Infrastructure-as-Code (IaC) using tools like Terraform or AWS CloudFormation",
            "Monitoring cloud resources and helping optimize for cost, security, and performance",
            "Assisting in cloud automation and deployment pipelines (CI/CD)",
            "Documenting architecture diagrams, technical procedures, and system designs",
            "Collaborating with DevOps and security teams to ensure compliance",
            "Optionally sharing learnings, projects, or architecture case studies online"
        ],
        requirements: [
            "Currently pursuing a degree in Computer Science, IT, or related field",
            "Basic understanding of cloud computing concepts and services",
            "Familiarity with at least one major cloud platform (AWS, Azure, or GCP)",
            "Knowledge of networking fundamentals and security principles",
            "Basic scripting or programming skills (Python, Bash, etc.)",
            "Ability to learn new technologies quickly",
            "Good communication and documentation skills"
        ],
        perks: [
            "Flexible work arrangement (hybrid model)",
            "Access to AWS's cloud resources and tools",
            "Mentorship from experienced cloud architects",
            "AWS certification preparation support",
            "Networking opportunities within Amazon Web Services",
            "Certificate of completion",
            "Possibility of full-time employment based on performance"
        ]
    },
    {
        id: 15,
        title: "Blockchain Developer Intern",
        company: "Ethereum Foundation",
        location: "Delhi",
        duration: "6 Months",
        workType: "Hybrid",
        category: "Blockchain Development",
        description: "A Blockchain Developer Internship is an opportunity to work on developing decentralized applications (dApps) and contributing to blockchain-based solutions. Interns in this role gain hands-on experience in blockchain platforms like Ethereum, Binance Smart Chain, Solana, and others. You'll learn about smart contracts, cryptographic protocols, consensus algorithms, and how blockchain can be leveraged for different industries such as finance, supply chain, and healthcare.",
        icon: "fas fa-link",
        applyBy: "August 30, 2025",
        startDate: "September 15, 2025",
        openings: 2,
        qualification: "Bachelor's/Master's in Computer Science, Cryptography, or related field",
        experience: "Basic knowledge of programming and blockchain concepts required",
        responsibilities: [
            "Developing and deploying smart contracts using Solidity, Vyper, or similar languages",
            "Assisting in the design and architecture of blockchain-based systems",
            "Contributing to the development of decentralized applications (dApps)",
            "Writing and testing code for blockchain protocols and platforms",
            "Collaborating with front-end developers to integrate blockchain functionality into applications",
            "Assisting in the implementation of blockchain solutions in production environments",
            "Contributing to the security of blockchain applications and understanding cryptography",
            "Optionally sharing blockchain project progress, coding tutorials, and insights through blogs, LinkedIn, or GitHub"
        ],
        requirements: [
            "Currently pursuing a degree in Computer Science, Cryptography, or related field",
            "Basic understanding of blockchain technology and distributed systems",
            "Familiarity with at least one programming language (JavaScript, Python, etc.)",
            "Interest in smart contracts and decentralized applications",
            "Problem-solving skills and attention to detail",
            "Ability to learn new technologies quickly",
            "Good communication and teamwork abilities"
        ],
        perks: [
            "Flexible work arrangement (hybrid model)",
            "Access to blockchain development tools and resources",
            "Mentorship from experienced blockchain developers",
            "Networking opportunities within the blockchain community",
            "Certificate of completion",
            "Possibility of full-time employment based on performance"
        ]
    },
    {
        id: 16,
        title: "Investment Banker Intern",
        company: "Goldman Sachs",
        location: "Gurgaon",
        duration: "6 Months",
        workType: "On-site",
        category: "Finance",
        description: "An Investment Banker Internship offers exposure to the world of corporate finance, mergers and acquisitions (M&A), capital raising, and market analysis. Interns in this role assist in financial modeling, preparing pitch books, performing due diligence, and analyzing market trends to support investment decisions. This internship prepares you for a high-pressure, dynamic environment where attention to detail and analytical skills are paramount.",
        icon: "fas fa-chart-line",
        applyBy: "July 30, 2025",
        startDate: "August 15, 2025",
        openings: 3,
        qualification: "Bachelor's/Master's in Finance, Economics, Business, or related field",
        experience: "Strong analytical skills and financial knowledge required",
        responsibilities: [
            "Assisting in financial analysis, including building financial models (DCF, LBO, M&A models)",
            "Preparing presentations, pitch books, and reports for clients",
            "Conducting market research and industry analysis",
            "Supporting the due diligence process in M&A transactions",
            "Participating in the preparation of documentation for initial public offerings (IPOs) or bond issuances",
            "Assisting in valuations of companies and assets",
            "Collaborating with senior bankers and clients to understand their financial needs",
            "Optionally sharing insights from market analysis, financial trends, and valuation techniques through blogs, LinkedIn, or personal finance platforms"
        ],
        requirements: [
            "Currently pursuing a degree in Finance, Economics, Business, or related field",
            "Strong understanding of financial concepts and markets",
            "Excellent analytical and quantitative skills",
            "Proficiency in Excel and financial modeling",
            "Attention to detail and ability to work under pressure",
            "Strong communication and presentation skills",
            "Interest in investment banking and capital markets"
        ],
        perks: [
            "Exposure to high-profile financial transactions",
            "Mentorship from experienced investment bankers",
            "Networking opportunities within the financial industry",
            "Access to financial research and resources",
            "Certificate of completion",
            "Possibility of full-time employment based on performance"
        ]
    },
    {
        id: 17,
        title: "Digital Marketing Specialist Intern",
        company: "Google",
        location: "Delhi",
        duration: "4 Months",
        workType: "Hybrid",
        category: "Digital Marketing",
        description: "A Digital Marketing Specialist Internship provides practical experience in planning, executing, and optimizing online marketing campaigns across multiple digital channels. Interns in this role work with tools like Google Analytics, SEO, social media platforms, email marketing, and content marketing to drive brand awareness, engagement, and conversions. This internship prepares you to analyze data, create targeted strategies, and understand the ever-changing landscape of digital marketing.",
        icon: "fas fa-bullhorn",
        applyBy: "August 15, 2025",
        startDate: "September 1, 2025",
        openings: 5,
        qualification: "Bachelor's in Marketing, Communications, Business, or related field",
        experience: "Familiarity with digital marketing platforms and analytics tools preferred",
        responsibilities: [
            "Assisting with the development and execution of digital marketing strategies across channels (e.g., social media, SEO, PPC, email)",
            "Managing social media accounts and scheduling posts",
            "Conducting keyword research and optimizing website content for SEO",
            "Analyzing website traffic, campaign performance, and social media metrics using tools like Google Analytics",
            "Supporting the creation of email marketing campaigns and newsletters",
            "Assisting with content creation (blogs, social media posts, infographics)",
            "Helping develop and execute paid advertising campaigns (e.g., Google Ads, Facebook Ads)",
            "Optionally sharing insights, campaign results, and strategies through blogs, LinkedIn, or personal websites"
        ],
        requirements: [
            "Currently pursuing a degree in Marketing, Communications, Business, or related field",
            "Understanding of digital marketing principles and channels",
            "Familiarity with social media platforms and content creation",
            "Basic knowledge of SEO and SEM concepts",
            "Analytical mindset and ability to interpret data",
            "Creative thinking and strong communication skills",
            "Ability to work in a fast-paced, collaborative environment"
        ],
        perks: [
            "Flexible work arrangement (hybrid model)",
            "Access to Google's marketing tools and resources",
            "Mentorship from experienced digital marketers",
            "Networking opportunities within Google",
            "Certificate of completion",
            "Possibility of full-time employment based on performance"
        ]
    },
    {
        id: 18,
        title: "Chartered Accountant (CA) Intern",
        company: "Deloitte",
        location: "Delhi",
        duration: "6 Months",
        workType: "On-site",
        category: "Accounting",
        description: "A Chartered Accountant (CA) Internship offers an opportunity to gain hands-on experience in financial accounting, auditing, taxation, and corporate law. Interns in this role work closely with senior accountants and managers to prepare financial statements, audit reports, and tax returns, while also gaining exposure to financial analysis and compliance regulations. This internship provides the foundation for a career in accounting and equips you with the technical knowledge required to manage financial operations, reporting, and auditing.",
        icon: "fas fa-calculator",
        applyBy: "July 30, 2025",
        startDate: "August 15, 2025",
        openings: 4,
        qualification: "Bachelor's/Master's in Accounting, Finance, or related field",
        experience: "Basic knowledge of accounting principles required",
        responsibilities: [
            "Assisting in the preparation of financial statements, balance sheets, and income statements",
            "Supporting the auditing process, including fieldwork, documentation, and reporting",
            "Assisting in preparing tax returns and ensuring compliance with tax laws and regulations",
            "Helping with internal control evaluations and recommending improvements",
            "Conducting financial analysis, including cost analysis and budgeting",
            "Providing assistance in corporate governance and legal compliance matters",
            "Participating in the preparation of management reports and financial analysis",
            "Optionally sharing insights on accounting trends, tax planning strategies, and financial analysis on blogs or LinkedIn"
        ],
        requirements: [
            "Currently pursuing a degree in Accounting, Finance, or related field",
            "Strong understanding of accounting principles and financial reporting",
            "Familiarity with accounting software and tools",
            "Attention to detail and analytical skills",
            "Good communication and presentation abilities",
            "Ability to work with confidential information",
            "Interest in auditing, taxation, and financial analysis"
        ],
        perks: [
            "Exposure to diverse accounting practices",
            "Mentorship from experienced chartered accountants",
            "Access to professional accounting resources",
            "Networking opportunities within Deloitte",
            "Certificate of completion",
            "Possibility of full-time employment based on performance"
        ]
    },
    {
        id: 19,
        title: "Full-Stack Developer Intern",
        company: "Microsoft",
        location: "Gurgaon",
        duration: "6 Months",
        workType: "Hybrid",
        category: "Web Development",
        description: "A Full-Stack Developer Internship provides hands-on experience in developing both the front-end and back-end of web applications. Interns in this role work with technologies such as HTML, CSS, JavaScript, React, Node.js, databases (e.g., MySQL, MongoDB), and web frameworks to build, test, and deploy web-based solutions. This internship offers an in-depth understanding of web development processes, user interface design, server-side scripting, and data management, giving you the foundation to become a versatile developer capable of handling both client-side and server-side development tasks.",
        icon: "fas fa-laptop-code",
        applyBy: "August 15, 2025",
        startDate: "September 1, 2025",
        openings: 3,
        qualification: "Bachelor's/Master's in Computer Science, Software Engineering, or related field",
        experience: "Basic programming knowledge and web development concepts required",
        responsibilities: [
            "Assisting with the design and implementation of the front-end and back-end of web applications",
            "Writing clean, reusable, and maintainable code using programming languages like JavaScript, Python, or Ruby",
            "Developing and integrating RESTful APIs for communication between the front-end and back-end",
            "Collaborating with UI/UX designers to implement user-friendly and responsive designs",
            "Assisting in database management, including designing and optimizing schemas, writing queries, and managing data flow",
            "Participating in code reviews, troubleshooting issues, and optimizing application performance",
            "Deploying and maintaining web applications on cloud platforms such as AWS, Azure, or Heroku",
            "Optionally sharing coding projects, tutorials, and insights on GitHub, LinkedIn, or a personal blog"
        ],
        requirements: [
            "Currently pursuing a degree in Computer Science, Software Engineering, or related field",
            "Knowledge of front-end technologies (HTML, CSS, JavaScript, React/Angular/Vue)",
            "Familiarity with back-end programming languages (Node.js, Python, Ruby, etc.)",
            "Basic understanding of databases and SQL",
            "Problem-solving skills and attention to detail",
            "Ability to work in a collaborative environment",
            "Eagerness to learn new technologies and frameworks"
        ],
        perks: [
            "Flexible work arrangement (hybrid model)",
            "Access to Microsoft's development tools and resources",
            "Mentorship from experienced developers",
            "Networking opportunities within Microsoft",
            "Certificate of completion",
            "Possibility of full-time employment based on performance"
        ]
    },
    {
        id: 20,
        title: "Data Analyst Intern",
        company: "Amazon",
        location: "Delhi",
        duration: "6 Months",
        workType: "Hybrid",
        category: "Data Analysis",
        description: "A Data Analyst Internship offers hands-on experience in analyzing and interpreting complex data sets to help organizations make data-driven decisions. Interns in this role work with tools like Excel, SQL, Python, R, and Tableau to gather, clean, analyze, and visualize data. This internship prepares you to work with business intelligence tools, conduct statistical analyses, and communicate findings effectively through reports and presentations.",
        icon: "fas fa-chart-bar",
        applyBy: "July 30, 2025",
        startDate: "August 15, 2025",
        openings: 4,
        qualification: "Bachelor's/Master's in Statistics, Mathematics, Computer Science, or related field",
        experience: "Basic knowledge of data analysis tools and statistical concepts required",
        responsibilities: [
            "Collecting, cleaning, and organizing large data sets from multiple sources",
            "Analyzing data to identify trends, patterns, and insights that can drive business decisions",
            "Creating and maintaining dashboards and reports using tools like Excel, Power BI, or Tableau",
            "Writing SQL queries to extract data from databases and conducting data manipulations",
            "Assisting with data visualization and preparing presentations for stakeholders",
            "Collaborating with teams to understand business requirements and deliver actionable insights",
            "Optionally sharing data analysis techniques, visualizations, and insights through blogs, LinkedIn, or personal websites"
        ],
        requirements: [
            "Currently pursuing a degree in Statistics, Mathematics, Computer Science, or related field",
            "Proficiency in Excel and basic understanding of SQL",
            "Familiarity with data visualization tools (Tableau, Power BI, etc.)",
            "Basic knowledge of programming languages for data analysis (Python, R)",
            "Strong analytical and problem-solving skills",
            "Attention to detail and ability to work with large datasets",
            "Good communication skills to present findings effectively"
        ],
        perks: [
            "Flexible work arrangement (hybrid model)",
            "Access to Amazon's data analysis tools and resources",
            "Mentorship from experienced data analysts",
            "Networking opportunities within Amazon",
            "Certificate of completion",
            "Possibility of full-time employment based on performance"
        ]
    },
    {
        id: 21,
        title: "UX Designer Intern",
        company: "Apple",
        location: "Delhi",
        duration: "6 Months",
        workType: "Hybrid",
        category: "UX/UI Design",
        description: "A UX Designer Internship provides hands-on experience in designing user-centered digital experiences for websites, mobile apps, and other digital products. Interns in this role work with design tools such as Figma, Sketch, Adobe XD, and InVision to create wireframes, prototypes, and user flows. This internship helps you understand the principles of user experience design, including usability, accessibility, and interaction design, while working closely with developers and product teams to deliver seamless user experiences.",
        icon: "fas fa-pencil-ruler",
        applyBy: "August 15, 2025",
        startDate: "September 1, 2025",
        openings: 2,
        qualification: "Bachelor's/Master's in Design, HCI, or related field",
        experience: "Basic knowledge of design principles and tools required",
        responsibilities: [
            "Assisting in user research through surveys, interviews, and usability testing",
            "Creating wireframes, prototypes, and user flows to visualize design concepts",
            "Collaborating with the design team to implement user feedback and improve design iterations",
            "Helping to conduct competitor analysis and research on industry trends",
            "Assisting with creating personas, journey maps, and site maps",
            "Participating in design critiques and brainstorming sessions",
            "Working alongside developers to ensure design implementation meets user needs",
            "Optionally sharing design projects, process insights, and UX tips through a personal blog, portfolio, or social media"
        ],
        requirements: [
            "Currently pursuing a degree in Design, Human-Computer Interaction, or related field",
            "Familiarity with design tools (Figma, Sketch, Adobe XD, etc.)",
            "Understanding of user-centered design principles",
            "Basic knowledge of visual design and typography",
            "Ability to think critically and solve design problems",
            "Good communication and presentation skills",
            "Interest in user research and usability testing"
        ],
        perks: [
            "Flexible work arrangement (hybrid model)",
            "Access to Apple's design resources and tools",
            "Mentorship from experienced UX designers",
            "Networking opportunities within Apple",
            "Certificate of completion",
            "Possibility of full-time employment based on performance"
        ]
    },
    {
        id: 22,
        title: "Project Manager Intern",
        company: "Infosys",
        location: "Delhi",
        duration: "6 Months",
        workType: "On-site",
        category: "Project Management",
        description: "A Project Manager Internship provides practical experience in managing projects from initiation to completion. Interns in this role assist senior project managers in overseeing project timelines, resources, budgets, and stakeholders. You'll gain hands-on experience in planning, executing, and monitoring projects, ensuring they meet deadlines, stay within scope, and achieve business objectives. This internship helps you develop critical skills in leadership, communication, risk management, and problem-solving, which are essential for a successful career in project management.",
        icon: "fas fa-project-diagram",
        applyBy: "July 30, 2025",
        startDate: "August 15, 2025",
        openings: 3,
        qualification: "Bachelor's/Master's in Business, Engineering, or related field",
        experience: "Basic understanding of project management concepts required",
        responsibilities: [
            "Assisting in the planning and execution of project activities, ensuring tasks are completed on time",
            "Helping to monitor project progress, track milestones, and update project plans as needed",
            "Coordinating with stakeholders, clients, and team members to ensure communication is clear and efficient",
            "Maintaining project documentation, such as project charters, timelines, risk assessments, and status reports",
            "Assisting in managing project budgets, resources, and timelines",
            "Conducting project meetings and preparing agendas, minutes, and follow-up actions",
            "Helping identify potential risks and providing solutions to mitigate them",
            "Optionally sharing project management tips, case studies, and process improvements through LinkedIn or personal blogs"
        ],
        requirements: [
            "Currently pursuing a degree in Business, Engineering, or related field",
            "Understanding of project management methodologies (Agile, Scrum, Waterfall)",
            "Strong organizational and time management skills",
            "Excellent communication and interpersonal abilities",
            "Proficiency in project management tools (MS Project, Jira, Trello, etc.)",
            "Analytical thinking and problem-solving skills",
            "Ability to work in a team environment"
        ],
        perks: [
            "Exposure to diverse projects and industries",
            "Mentorship from experienced project managers",
            "Access to project management tools and resources",
            "Networking opportunities within Infosys",
            "Certificate of completion",
            "Possibility of full-time employment based on performance"
        ]
    }
];

// Get the internship ID from the URL
const urlParams = new URLSearchParams(window.location.search);
let internshipId = 1; // Default to the first internship if no ID is provided

if (urlParams.has('id')) {
    internshipId = parseInt(urlParams.get('id'));
}

// Find the internship with the matching ID
const internship = internships.find(item => item.id === internshipId) || internships[0];

// Function to populate the page with internship details
function populateInternshipDetails() {
    // Update header section
    document.getElementById('internship-icon').className = internship.icon;
    document.getElementById('internship-title').textContent = internship.title;
    document.getElementById('company-name').textContent = internship.company;
    document.getElementById('location').textContent = internship.location;
    document.getElementById('duration').textContent = internship.duration;
    // Hide stipend information
    const stipendElement = document.getElementById('stipend').parentElement;
    if (stipendElement) {
        stipendElement.style.display = 'none';
    }
    document.getElementById('work-type').textContent = internship.workType;
    document.getElementById('apply-by').textContent = `Apply by ${internship.applyBy}`;

    // Update about section
    document.getElementById('description').textContent = internship.description;

    // Program structure paragraph has been removed

    // Update responsibilities section
    const responsibilitiesList = document.getElementById('responsibilities');
    responsibilitiesList.innerHTML = '';
    internship.responsibilities.forEach(responsibility => {
        const li = document.createElement('li');
        li.textContent = responsibility;
        responsibilitiesList.appendChild(li);
    });

    // Update requirements section
    const requirementsList = document.getElementById('requirements');
    requirementsList.innerHTML = '';
    internship.requirements.forEach(requirement => {
        const li = document.createElement('li');
        li.textContent = requirement;
        requirementsList.appendChild(li);
    });

    // Update perks section
    const perksList = document.getElementById('perks');
    perksList.innerHTML = '';
    internship.perks.forEach(perk => {
        const li = document.createElement('li');
        li.textContent = perk;
        perksList.appendChild(li);
    });

    // Company description section has been removed

    // Update apply section
    document.getElementById('deadline').textContent = internship.applyBy;
    document.getElementById('openings').textContent = internship.openings;
    document.getElementById('start-date').textContent = internship.startDate;
    document.getElementById('qualification').textContent = internship.qualification;
    document.getElementById('experience').textContent = internship.experience;

    // Update page title
    document.title = `${internship.title} at ${internship.company} - InternPortal`;

    // Set up apply button
    const applyButton = document.querySelector('.apply-btn');
    applyButton.addEventListener('click', function() {
        alert(`Application submitted for ${internship.title} at ${internship.company}!`);
    });

    // Similar internships section removed
}

// Function to set up similar internships has been removed

// Initialize the page when DOM is loaded
document.addEventListener('DOMContentLoaded', populateInternshipDetails);
