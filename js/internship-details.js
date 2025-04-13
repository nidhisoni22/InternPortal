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
        ],
        companyDescription: "Tata Consultancy Services (TCS) is an Indian multinational information technology services and consulting company headquartered in Mumbai. TCS is one of the largest Indian companies by market capitalization and is among the most valuable IT services brands worldwide. The company provides a wide range of services including consulting, application development, infrastructure support, and business process outsourcing."
    },
    {
        id: 2,
        title: "Data Science Intern",
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
            "Collect, process, and analyze large datasets using data science tools and techniques",
            "Develop and implement machine learning models to solve business problems",
            "Create data visualizations to communicate insights effectively",
            "Collaborate with cross-functional teams to understand data requirements",
            "Assist in developing and maintaining data pipelines",
            "Document methodologies, analyses, and results"
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
        ],
        companyDescription: "Infosys Limited is an Indian multinational information technology company that provides business consulting, information technology and outsourcing services. The company was founded in Pune and is headquartered in Bangalore. Infosys is the second-largest Indian IT company after TCS and is known for its innovative approach to software development and digital transformation."
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
        ],
        companyDescription: "Wipro Limited is an Indian multinational corporation that provides information technology, consulting and business process services. The company is headquartered in Bangalore and operates in over 60 countries. Wipro has a strong focus on sustainability and is known for its commitment to ecological and social initiatives alongside its business operations."
    },
    {
        id: 4,
        title: "Web Development Intern",
        company: "Tech Mahindra",
        location: "Gurgaon",
        duration: "3 Months",
        stipend: 20000,
        workType: "On-site",
        category: "Web Development",
        description: "Join Tech Mahindra's web development team to create responsive websites and web applications using modern frameworks. You'll work with front-end and back-end technologies to build user-friendly interfaces and implement functionality that meets business requirements.",
        icon: "fas fa-code",
        applyBy: "July 5, 2025",
        startDate: "July 25, 2025",
        openings: 2,
        qualification: "Bachelor's in Computer Science, IT, or related field",
        experience: "Basic knowledge of HTML, CSS, and JavaScript required",
        responsibilities: [
            "Develop responsive websites and web applications using HTML, CSS, and JavaScript",
            "Work with modern frameworks like React, Angular, or Vue.js",
            "Implement back-end functionality using Node.js, PHP, or other technologies",
            "Collaborate with designers and product managers to implement user interfaces",
            "Optimize applications for maximum speed and scalability",
            "Ensure cross-browser compatibility and responsive design",
            "Debug and fix issues in existing web applications"
        ],
        requirements: [
            "Currently pursuing a degree in Computer Science, IT, or related field",
            "Proficiency in HTML, CSS, and JavaScript",
            "Familiarity with at least one modern web framework (React, Angular, Vue.js)",
            "Basic understanding of back-end technologies is a plus",
            "Knowledge of responsive design principles",
            "Problem-solving skills and attention to detail",
            "Ability to work collaboratively in a team environment"
        ],
        perks: [
            "Competitive stipend",
            "Exposure to Tech Mahindra's web development practices",
            "Mentorship from experienced developers",
            "Access to modern development tools and resources",
            "Certificate of completion",
            "Networking opportunities within Tech Mahindra",
            "Potential for future employment opportunities"
        ],
        companyDescription: "Tech Mahindra Limited is an Indian multinational information technology company and a subsidiary of the Mahindra Group. The company provides IT services and solutions to various industries including telecommunications, manufacturing, and financial services. Tech Mahindra is known for its expertise in digital transformation, consulting, and business re-engineering services."
    },
    {
        id: 5,
        title: "Sales and Marketing Intern",
        company: "HCL Technologies",
        location: "Delhi",
        duration: "6 Months",
        stipend: 35000,
        workType: "On-site",
        category: "Sales and Marketing",
        description: "Join HCL Technologies to gain exposure to sales strategies, marketing campaigns, and customer relationship management. You'll assist in developing sales strategies, conducting market research, and creating marketing materials while working alongside experienced professionals.",
        icon: "fas fa-bullhorn",
        applyBy: "June 20, 2025",
        startDate: "July 5, 2025",
        openings: 4,
        qualification: "Bachelor's/Master's in Marketing, Business, or related field",
        experience: "Basic understanding of marketing principles required",
        responsibilities: [
            "Assist in developing and implementing sales and marketing strategies",
            "Conduct market research and competitor analysis",
            "Create marketing materials and content for various channels",
            "Support lead generation and customer acquisition efforts",
            "Help analyze marketing campaign performance and metrics",
            "Assist with customer relationship management",
            "Participate in sales meetings and contribute to discussions"
        ],
        requirements: [
            "Currently pursuing a degree in Marketing, Business, or related field",
            "Strong understanding of marketing principles and strategies",
            "Proficiency in MS Office and digital marketing tools",
            "Knowledge of social media platforms and content creation",
            "Excellent written and verbal communication skills",
            "Creative thinking and problem-solving abilities",
            "Ability to work in a fast-paced, collaborative environment"
        ],
        perks: [
            "Competitive stipend",
            "Exposure to various aspects of sales and marketing",
            "Mentorship from marketing professionals",
            "Networking opportunities within HCL Technologies",
            "Certificate of completion",
            "Structured learning and development program",
            "Potential for full-time employment based on performance"
        ],
        companyDescription: "HCL Technologies Limited is an Indian multinational information technology services and consulting company headquartered in Noida. HCL Technologies offers services including software-led IT solutions, remote infrastructure management, engineering and R&D services, and business process outsourcing. The company has offices in 50 countries and operates across various industry verticals."
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
        ],
        companyDescription: "Cognizant is a multinational information technology services and consulting company with a significant presence in India. The company provides digital, technology, consulting, and operations services. Cognizant is known for its expertise in healthcare, financial services, and retail industries, offering innovative solutions to help businesses transform their operations and customer experiences."
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

    // Ensure the program structure information remains after description is updated
    const aboutSection = document.getElementById('description').parentElement;
    const programStructureP = aboutSection.querySelector('p:nth-child(3)');
    if (!programStructureP) {
        const newP = document.createElement('p');
        newP.innerHTML = '<strong>Program Structure:</strong> 60% of the content is focused on the learning phase, while the remaining 40% involves hands-on experience through a live project. Based on the company\'s evaluation of performance, a Pre-Placement Offer (PPO) may be extended.';
        aboutSection.appendChild(newP);
    }

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

    // Update company description
    document.getElementById('company-description').textContent = internship.companyDescription;

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
