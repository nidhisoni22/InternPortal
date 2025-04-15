// Internship data - this would typically come from a backend API
const internships = [
    {
        id: 1,
        title: "Software Development Intern",
        company: "TCS",
        location: "Delhi",
        duration: "3 Months",
        workType: "On-site",
        category: "Software Development",
        description: "Join our team to work on cutting-edge technologies and gain hands-on experience in software development. You'll be working with experienced developers on real projects.",
        icon: "fas fa-laptop-code"
    },
    {
        id: 2,
        title: "Data Science / AI Specialist Intern",
        company: "Infosys",
        location: "Gurgaon",
        duration: "6 Months",
        workType: "Hybrid",
        category: "Data Science",
        description: "Is designed for individuals passionate about leveraging data to extract insights, build models, and develop intelligent solutions. This role blends analytical skills with programming and machine learning knowledge to support business decisions, predictive modeling, and automation.",
        icon: "fas fa-chart-line"
    },
    {
        id: 3,
        title: "Digital Marketing Intern",
        company: "Wipro",
        location: "Delhi",
        duration: "4 Months",
        workType: "Hybrid",
        category: "Digital Marketing",
        description: "Assist in planning and executing digital marketing campaigns, managing social media accounts, and analyzing campaign performance metrics.",
        icon: "fas fa-bullhorn"
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
        icon: "fas fa-tasks"
    },
    {
        id: 5,
        title: "Cybersecurity Specialist Intern",
        company: "HCL Technologies",
        location: "Delhi",
        duration: "6 Months",
        workType: "On-site",
        category: "Cybersecurity",
        description: "A Cybersecurity Specialist Internship provides a deep dive into protecting organizations from digital threats and vulnerabilities. Interns assist in identifying, analyzing, and responding to security risks, as well as developing strategies to safeguard networks, systems, and data. This internship prepares you for real-world cybersecurity challenges, from penetration testing to security policy management.",
        icon: "fas fa-shield-alt"
    },
    {
        id: 6,
        title: "Business Development Intern",
        company: "Cognizant",
        location: "Delhi",
        duration: "4 Months",
        workType: "Hybrid",
        category: "Business Development",
        description: "Identify new business opportunities, develop growth strategies, and build relationships with potential clients. Assist in preparing business proposals and presentations.",
        icon: "fas fa-users"
    },
    {
        id: 7,
        title: "Content Writing Intern",
        company: "Netflix",
        location: "Gurgaon",
        duration: "3 Months",
        workType: "Hybrid",
        category: "Content Writing",
        description: "Create engaging content for our blog, social media, and marketing materials. Research industry trends and develop compelling narratives that resonate with our audience.",
        icon: "fas fa-globe"
    },
    {
        id: 8,
        title: "Social Media Marketing Intern",
        company: "McKinsey & Company",
        location: "Delhi",
        duration: "6 Months",
        workType: "On-site",
        category: "Social Media Marketing",
        description: "Manage social media accounts, create engaging content, and analyze performance metrics. Develop and implement social media strategies to increase brand awareness.",
        icon: "fas fa-hashtag"
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
        responsibilities: [
            "Assisting in the design of cloud-based solutions and architectures",
            "Supporting migration of applications or infrastructure to the cloud",
            "Learning and implementing Infrastructure-as-Code (IaC) using tools like Terraform or AWS CloudFormation",
            "Monitoring cloud resources and helping optimize for cost, security, and performance",
            "Assisting in cloud automation and deployment pipelines (CI/CD)",
            "Documenting architecture diagrams, technical procedures, and system designs",
            "Collaborating with DevOps and security teams to ensure compliance",
            "Optionally sharing learnings, projects, or architecture case studies online"
        ]
    },
    {
        id: 10,
        title: "Digital Content Creator Intern",
        company: "YouTube",
        location: "Delhi",
        duration: "3 Months",
        workType: "Hybrid",
        category: "Digital Marketing",
        description: "Create engaging digital content for various platforms. Apply creative techniques to enhance visual storytelling and maintain brand consistency.",
        icon: "fas fa-video"
    },
    {
        id: 11,
        title: "Web Designer Intern",
        company: "Infosys",
        location: "Gurgaon",
        duration: "6 Months",
        workType: "On-site",
        category: "Web Development",
        description: "Design user interfaces for websites and web applications. Create wireframes, mockups, and prototypes to visualize design concepts before implementation.",
        icon: "fas fa-palette"
    },
    {
        id: 12,
        title: "SEO/SEM Specialist Intern",
        company: "Zomato",
        location: "Delhi",
        duration: "4 Months",
        workType: "Hybrid",
        category: "Digital Marketing",
        description: "Optimize website content for search engines, conduct keyword research, and implement SEO strategies. Analyze performance metrics and suggest improvements.",
        icon: "fas fa-search-dollar"
    },
    {
        id: 13,
        title: "Artificial Intelligence (AI) Engineer Intern",
        company: "Microsoft",
        location: "Gurgaon",
        duration: "6 Months",
        workType: "Hybrid",
        category: "Artificial Intelligence",
        description: "An AI Engineer Internship is ideal for students or early professionals eager to dive deep into artificial intelligence, machine learning, and deep learning. Interns in this role assist in developing, training, and deploying intelligent systems that solve real-world problems.",
        icon: "fas fa-robot",
        responsibilities: [
            "Building and testing AI/ML models using real-world datasets",
            "Preprocessing large datasets and engineering features",
            "Researching the latest AI techniques and implementing them in projects",
            "Collaborating with data scientists and software developers",
            "Evaluating and optimizing model performance",
            "Assisting in AI deployment (e.g., using Flask, FastAPI, or cloud platforms)",
            "Writing documentation and contributing to project reports",
            "Sharing technical content or code to GitHub or LinkedIn (optional but valuable for personal branding)"
        ]
    },
    {
        id: 14,
        title: "Cloud Architect Intern",
        company: "Amazon Web Services",
        location: "Delhi",
        duration: "6 Months",
        workType: "Hybrid",
        category: "Cloud Computing",
        description: "A Cloud Architect Internship offers hands-on experience in designing, implementing, and managing scalable cloud infrastructure. Interns support cloud-based projects, learn about architecture best practices, and gain exposure to platforms like AWS, Microsoft Azure, or Google Cloud Platform (GCP). This role is essential for those aiming to help organizations transition to and optimize cloud environments securely and efficiently.",
        icon: "fas fa-cloud",
        responsibilities: [
            "Assisting in the design of cloud-based solutions and architectures",
            "Supporting migration of applications or infrastructure to the cloud",
            "Learning and implementing Infrastructure-as-Code (IaC) using tools like Terraform or AWS CloudFormation",
            "Monitoring cloud resources and helping optimize for cost, security, and performance",
            "Assisting in cloud automation and deployment pipelines (CI/CD)",
            "Documenting architecture diagrams, technical procedures, and system designs",
            "Collaborating with DevOps and security teams to ensure compliance",
            "Optionally sharing learnings, projects, or architecture case studies online"
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

// Items per page
const itemsPerPage = 6;
let currentPage = 1;

// Get URL parameters to determine current page
const urlParams = new URLSearchParams(window.location.search);
if (urlParams.has('page')) {
    currentPage = parseInt(urlParams.get('page'));
}

// Filter and sort state
let filters = {
    category: 'All Categories',
    location: 'All Locations',
    duration: 'Any Duration'
};

let sortBy = 'Newest First';

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Load filter values from URL or localStorage
    loadFilterState();

    // Set up event listeners for filters
    setupFilterListeners();

    // Set up event listeners for sorting
    setupSortListeners();

    // Display internships based on current filters and sort
    displayInternships();

    // Initialize Certificate Slider
    initCertificateSlider();
});

// Initialize Certificate Slider
function initCertificateSlider() {
    const certificateSlider = new Swiper(".certificate-slider", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 25,
        grabCursor: true,
        loop: true,
        speed: 800,
        effect: "coverflow",
        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 80,
            modifier: 1,
            slideShadows: false,
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".certificate-pagination",
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '"></span>';
            },
        },
        navigation: {
            nextEl: ".certificate-button-next",
            prevEl: ".certificate-button-prev",
        },
        breakpoints: {
            320: {
                spaceBetween: 15,
            },
            576: {
                spaceBetween: 20,
            },
            768: {
                spaceBetween: 25,
            },
        },
    });
}

// Load filter state from URL parameters or localStorage
function loadFilterState() {
    // Check URL parameters first
    if (urlParams.has('category')) {
        filters.category = urlParams.get('category');
    } else if (localStorage.getItem('internshipFilters')) {
        // Fall back to localStorage if available
        filters = JSON.parse(localStorage.getItem('internshipFilters'));
    }

    // Set form values based on filters
    document.getElementById('categoryFilter').value = filters.category;
    document.getElementById('locationFilter').value = filters.location;
    document.getElementById('durationFilter').value = filters.duration;

    // Set sort dropdown value
    if (urlParams.has('sort')) {
        sortBy = urlParams.get('sort');
    } else if (localStorage.getItem('internshipSort')) {
        sortBy = localStorage.getItem('internshipSort');
    }

    // Update sort dropdown text
    const sortDropdown = document.getElementById('sortDropdown');
    if (sortDropdown) {
        sortDropdown.textContent = sortBy;
    }
}

// Set up event listeners for filter controls
function setupFilterListeners() {
    // Filter form submission - only apply filters when the button is clicked
    const filterForm = document.querySelector('.filter-section form');
    if (filterForm) {
        filterForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get all filter values when form is submitted
            const categoryFilter = document.getElementById('categoryFilter');
            if (categoryFilter) {
                filters.category = categoryFilter.value;
            }

            const locationFilter = document.getElementById('locationFilter');
            if (locationFilter) {
                filters.location = locationFilter.value;
            }

            const durationFilter = document.getElementById('durationFilter');
            if (durationFilter) {
                filters.duration = durationFilter.value;
            }

            // Stipend and work from home filters removed

            // Save filter state and navigate to page 1
            saveFilterState();
            navigateToPage(1);
        });
    }
}

// Set up event listeners for sorting
function setupSortListeners() {
    // Sort dropdown items
    const sortItems = document.querySelectorAll('.dropdown-item');
    sortItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            sortBy = this.textContent;
            localStorage.setItem('internshipSort', sortBy);

            // Update dropdown button text
            const sortDropdown = document.getElementById('sortDropdown');
            if (sortDropdown) {
                sortDropdown.textContent = sortBy;
            }

            // Re-display internships with new sort
            displayInternships();
        });
    });
}

// Save filter state to localStorage
function saveFilterState() {
    localStorage.setItem('internshipFilters', JSON.stringify(filters));
}

// Navigate to a specific page with current filters and sort
function navigateToPage(page) {
    // Build query string with filters and sort
    let queryParams = new URLSearchParams();
    queryParams.set('page', page);

    if (filters.category !== 'All Categories') {
        queryParams.set('category', filters.category);
    }

    if (filters.location !== 'All Locations') {
        queryParams.set('location', filters.location);
    }

    if (filters.duration !== 'Any Duration') {
        queryParams.set('duration', filters.duration);
    }

    // Stipend and work from home filters removed

    if (sortBy !== 'Newest First') {
        queryParams.set('sort', sortBy);
    }

    // Determine which page file to navigate to
    let pageFile = 'internship.html';
    if (page === 2) {
        pageFile = 'internship-page2.html';
    } else if (page === 3) {
        pageFile = 'internship-page3.html';
    }

    // Navigate to the page with query parameters
    window.location.href = pageFile + '?' + queryParams.toString();
}

// Filter internships based on current filters
function filterInternships() {
    return internships.filter(internship => {
        // Category filter
        if (filters.category !== 'All Categories') {
            // Handle consolidated categories
            if (filters.category === 'Digital Marketing' &&
                (internship.category === 'Digital Marketing' || internship.category === 'Social Media Marketing')) {
                // Allow both Digital Marketing and Social Media Marketing when Digital Marketing is selected
            } else if (filters.category === 'Finance' &&
                      (internship.category === 'Finance' || internship.category === 'Accounting')) {
                // Allow both Finance and Accounting when Finance is selected
            } else if (internship.category !== filters.category) {
                return false;
            }
        }

        // Location filter
        if (filters.location !== 'All Locations' && internship.location !== filters.location) {
            return false;
        }

        // Duration filter
        if (filters.duration !== 'Any Duration') {
            const months = parseInt(internship.duration);
            if (filters.duration === '1-3 Months' && (months < 1 || months > 3)) {
                return false;
            } else if (filters.duration === '3-6 Months' && (months < 3 || months > 6)) {
                return false;
            } else if (filters.duration === '6+ Months' && months < 6) {
                return false;
            }
        }

        // Stipend filter and Work from home filter removed

        return true;
    });
}

// Sort internships based on current sort option
function sortInternships(filteredInternships) {
    return filteredInternships.sort((a, b) => {
        if (sortBy === 'Newest First') {
            return b.id - a.id; // Assuming newer internships have higher IDs
        } else if (sortBy === 'Duration: Short to Long') {
            return parseInt(a.duration) - parseInt(b.duration);
        } else if (sortBy === 'Location: A to Z') {
            return a.location.localeCompare(b.location);
        }
        return 0;
    });
}

// Display internships based on current page, filters, and sort
function displayInternships() {
    // For the initial page load, just show the current page's internships
    // Only filter and sort when the user applies filters or changes sort

    // Get the page-specific internships (6 per page)
    let pageInternships;

    // Check if we have filters applied
    const hasFilters = (
        filters.category !== 'All Categories' ||
        filters.location !== 'All Locations' ||
        filters.duration !== 'Any Duration'
    );

    // If filters are applied or sort is changed, filter and sort all internships
    if (hasFilters || sortBy !== 'Newest First') {
        const filteredInternships = filterInternships();
        const sortedInternships = sortInternships(filteredInternships);

        // Calculate pagination
        const totalPages = Math.ceil(sortedInternships.length / itemsPerPage);
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        pageInternships = sortedInternships.slice(startIndex, endIndex);

        // Get container for internship cards
        const container = document.querySelector('.col-lg-9');
        if (!container) return;

        // Clear existing internship cards
        const existingCards = container.querySelectorAll('.internship-card');
        existingCards.forEach(card => card.remove());

        // Insert header before pagination
        const header = container.querySelector('.d-flex.justify-content-between');

        // Update internship count in header
        const countElement = header.querySelector('h2');
        if (countElement) {
            countElement.textContent = `Available Internships (${filteredInternships.length})`;
        }

        // Create and append internship cards
        pageInternships.forEach(internship => {
            const card = createInternshipCard(internship);
            // Insert before pagination
            const pagination = container.querySelector('nav');
            container.insertBefore(card, pagination);
        });

        // Update pagination
        updatePagination(totalPages);
    } else {
        // If no filters applied, just use the default page internships
        // This preserves the original static content when no filters are applied
        // We don't need to do anything here as the HTML already has the internships
        // Just update the header to show the total count
        const container = document.querySelector('.col-lg-9');
        if (container) {
            const header = container.querySelector('.d-flex.justify-content-between');
            if (header) {
                const countElement = header.querySelector('h2');
                if (countElement) {
                    countElement.textContent = `Available Internships (${internships.length})`;
                }
            }
        }
    }
}

// Create an internship card element
function createInternshipCard(internship) {
    const card = document.createElement('div');
    card.className = 'internship-card';

    card.innerHTML = `
        <div class="card-body">
            <div class="d-flex align-items-center mb-3">
                <div class="bg-light rounded-circle p-3 me-3">
                    <i class="${internship.icon} text-primary fs-4"></i>
                </div>
                <div>
                    <h5 class="internship-title">${internship.title}</h5>
                    <p class="company-name mb-0">${internship.company}</p>
                </div>
            </div>
            <div class="internship-details">
                <div class="detail-item">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>${internship.location}</span>
                </div>
                <div class="detail-item">
                    <i class="fas fa-calendar-alt"></i>
                    <span>${internship.duration}</span>
                </div>
                <div class="detail-item">
                    <i class="fas fa-home"></i>
                    <span>${internship.workType}</span>
                </div>
            </div>
            <p class="mb-3">${internship.description}</p>
            <div class="d-flex justify-content-between align-items-center">
                <span class="badge bg-success">Actively Hiring</span>
                <a href="#" class="btn btn-outline-primary" data-id="${internship.id}">View Details</a>
            </div>
        </div>
    `;

    // Add event listener to view details button
    const viewDetailsBtn = card.querySelector('.btn-outline-primary');
    viewDetailsBtn.addEventListener('click', function(e) {
        e.preventDefault();
        showInternshipDetails(internship.id);
    });

    return card;
}

// Update pagination controls
function updatePagination(totalPages) {
    const pagination = document.querySelector('.pagination');
    if (!pagination) return;

    // Update previous button
    const prevButton = pagination.querySelector('.page-item:first-child');
    if (currentPage === 1) {
        prevButton.classList.add('disabled');
        prevButton.querySelector('a').setAttribute('aria-disabled', 'true');
        prevButton.querySelector('a').setAttribute('tabindex', '-1');
    } else {
        prevButton.classList.remove('disabled');
        prevButton.querySelector('a').removeAttribute('aria-disabled');
        prevButton.querySelector('a').removeAttribute('tabindex');
        prevButton.querySelector('a').addEventListener('click', function(e) {
            e.preventDefault();
            navigateToPage(currentPage - 1);
        });
    }

    // Update page buttons
    const pageButtons = pagination.querySelectorAll('.page-item:not(:first-child):not(:last-child)');
    pageButtons.forEach((button, index) => {
        const pageNum = index + 1;
        if (pageNum === currentPage) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }

        button.querySelector('a').addEventListener('click', function(e) {
            e.preventDefault();
            navigateToPage(pageNum);
        });
    });

    // Update next button
    const nextButton = pagination.querySelector('.page-item:last-child');
    if (currentPage === totalPages || totalPages === 0) {
        nextButton.classList.add('disabled');
        nextButton.querySelector('a').setAttribute('aria-disabled', 'true');
        nextButton.querySelector('a').setAttribute('tabindex', '-1');
    } else {
        nextButton.classList.remove('disabled');
        nextButton.querySelector('a').removeAttribute('aria-disabled');
        nextButton.querySelector('a').removeAttribute('tabindex');
        nextButton.querySelector('a').addEventListener('click', function(e) {
            e.preventDefault();
            navigateToPage(currentPage + 1);
        });
    }
}

// Show internship details (redirect to details page)
function showInternshipDetails(internshipId) {
    const internship = internships.find(item => item.id === internshipId);
    if (!internship) return;

    // Redirect to the internship details page with the internship ID
    window.location.href = `internship-details.html?id=${internshipId}`;
}

// Add event listeners to all View Details buttons on page load
document.addEventListener('DOMContentLoaded', function() {
    // Add event listeners to any static View Details buttons
    const viewDetailsButtons = document.querySelectorAll('.btn-outline-primary');
    viewDetailsButtons.forEach((button, index) => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            // Use index + 1 as the ID if no data-id attribute is present
            const internshipId = parseInt(button.getAttribute('data-id') || (index + 1));
            showInternshipDetails(internshipId);
        });
    });
});
