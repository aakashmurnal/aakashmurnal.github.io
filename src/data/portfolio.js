import {
  SiSelenium, SiRobotframework,
  SiJenkins, SiDocker, SiKubernetes,
  SiPostman, SiApachejmeter, SiGit, SiJira, SiGitlab,
  SiPython, SiConfluence, SiPycharm,
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';
import { VscVscode } from 'react-icons/vsc';
import {
  HiCode, HiCube, HiLightningBolt, HiCloud, HiCog, HiChip,
} from 'react-icons/hi';

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export const stats = [
  { value: 8, suffix: '+', label: 'Years Experience', icon: 'calendar' },
  { value: 10, suffix: '+', label: 'Projects Delivered', icon: 'rocket' },
  { value: 95, suffix: '%', label: 'Automation Coverage', icon: 'shield' },
  { value: 30, suffix: '+', label: 'Tools & Technologies', icon: 'tools' },
];

export const skills = [
  {
    title: 'AI & Modern QA',
    icon: HiChip,
    color: '#a855f7',
    items: [
      { name: 'AI Automation (MCP Server)' },
      { name: 'AI Test Generation' },
      { name: 'Cloud-Native QA' },
      { name: 'Cross-Functional Leadership' },
      { name: 'Agile & Scrum' },
    ],
  },
  {
    title: 'Test Automation',
    icon: HiCube,
    color: '#6366f1',
    items: [
      { name: 'Robot Framework', icon: SiRobotframework },
      { name: 'Selenium', icon: SiSelenium },
      { name: 'Playwright' },
      { name: 'Testim AI' },
      { name: 'Postman', icon: SiPostman },
      { name: 'JMeter', icon: SiApachejmeter },
      { name: 'LoadRunner' },
    ],
  },
  {
    title: 'QA Strategy',
    icon: HiLightningBolt,
    color: '#f59e0b',
    items: [
      { name: 'Shift-Left Testing' },
      { name: 'Shift-Right Testing' },
      { name: 'CI/CD Quality Gates' },
      { name: 'Release Readiness' },
      { name: 'Defect Lifecycle' },
      { name: 'Quality Metrics' },
    ],
  },
  {
    title: 'Cloud & DevOps',
    icon: HiCloud,
    color: '#06b6d4',
    items: [
      { name: 'AWS', icon: FaAws },
      { name: 'Docker', icon: SiDocker },
      { name: 'Kubernetes', icon: SiKubernetes },
      { name: 'Jenkins', icon: SiJenkins },
      { name: 'GitLab CI', icon: SiGitlab },
    ],
  },
  {
    title: 'Tools & Platforms',
    icon: HiCog,
    color: '#10b981',
    items: [
      { name: 'TestRail' },
      { name: 'JIRA', icon: SiJira },
      { name: 'Confluence', icon: SiConfluence },
      { name: 'Git', icon: SiGit },
      { name: 'VS Code', icon: VscVscode },
      { name: 'PyCharm', icon: SiPycharm },
    ],
  },
  {
    title: 'Programming',
    icon: HiCode,
    color: '#ec4899',
    items: [
      { name: 'Python', icon: SiPython },
      { name: 'SQL' },
      { name: 'Shell Scripting' },
    ],
  },
];

export const experiences = [
  {
    role: 'Senior Test Automation Engineer',
    company: 'Cyble (YC W21) - Endpoint Security - EDR - Cyber Security Domain',
    period: 'Apr 2025 - Present',
    description: 'Cyble Titan is an Endpoint Protection Platform delivering real-time visibility, intelligent threat detection, and automated incident response across desktops, servers, and cloud workloads - integrated with Cyble Vision Threat Intelligence for actionable insights at machine speed.',
    points: [
      'Owned QA strategy from requirements to release, accelerating delivery timelines while maintaining release quality',
      'Identified design and specification gaps early, reducing downstream defects and rework',
      'Designed and executed end-to-end test plans (Smoke, Functional, Regression, Integration) across AWS Cloud and On-Prem',
      'Executed functional, regression, and integration testing, delivering release-ready quality under Agile timelines',
      'Designed scalable UI & API automation frameworks, increasing regression coverage by 50% via AI-Assisted MCP Server automation',
      'Performed API and system load testing using JMeter and LoadRunner to validate scalability, reliability, and system behavior under peak load conditions',
      'Defined release readiness criteria and quality metrics, enabling faster release cycles without compromising production stability',
    ],
    tech: ['Playwright', 'Robot Framework', 'Python', 'JMeter', 'LoadRunner', 'AWS', 'MCP Server'],
  },
  {
    role: 'Test & Evaluation Engineer II',
    company: 'ACS Global Tech (Client: Boeing) - Aerospace Domain',
    period: 'Jul 2024 - Dec 2024',
    contractNote: 'On Enterprise Project Contract with Boeing',
    description: 'FTCS manages flight test scheduling, administration, instrumentation, data retrieval, and configuration - supporting Test Item Requirement List (TIRL), Flight Test Plan (FTP), and Flight Test Instrumentation Requirement (FTIR).',
    points: [
      'Delivered UI and API test automation for aerospace workflows within a regulated, project-based engagement',
      'Executed mission-critical test cycles under aerospace compliance standards, mitigating operational risks',
      'Supported release readiness through structured test planning, execution, and defect reporting',
    ],
    tech: ['Selenium', 'Postman', 'Python', 'Jenkins', 'JIRA'],
  },
  {
    role: 'Lead Software Engineer - QE',
    company: 'Zymr, Inc. (Client: Virsec) - Cyber Security Domain',
    period: 'Apr 2021 - Jun 2024',
    description: 'Virsec detects real attacks within milliseconds and takes automated protective actions - terminating web sessions, quarantining and restoring files, blocking TCP connections, or integrating with network devices to block access at the network level.',
    points: [
      'Led Agile QA strategy aligned with product and engineering goals to enable predictable releases',
      'Led automation framework modernization by introducing Robot Framework, reducing maintenance effort by 30-40%',
      'Built keyword-driven UI & API automation, reducing test creation and maintenance effort by 30%',
      'Executed Functional, Integration, and Regression tests across AWS and On-Prem environments, ensuring compliance',
      'Stabilized flaky automation tests, improving CI/CD pipeline reliability and nightly build success rates',
      'Executed API and system load testing using JMeter and LoadRunner to assess scalability and performance',
      'Owned QA environments and defect lifecycle, ensuring visibility and fast resolution across teams',
    ],
    tech: ['Robot Framework', 'Python', 'Selenium', 'JMeter', 'AWS', 'Docker'],
  },
  {
    role: 'QA Automation Engineer',
    company: 'Sift Consultancy (Client: Zenefits) - Human Resource Management Domain',
    period: 'Jul 2019 - Apr 2021',
    description: 'Zenefits is a cloud-based SaaS platform for managing human resources with a focus on health insurance coverage, featuring four modules: HR, Payroll, PayConnect, and Benefits.',
    points: [
      'Devised QA strategies from business requirements within Agile, ensuring timely and quality releases',
      'Designed and executed test automation scripts using Robot Framework and Python',
      'Configured and managed AWS services, optimizing QA environments for cloud and on-prem testing',
      'Executed Smoke, Functional, Regression, and Integration tests; stabilized CI/CD pipelines',
    ],
    tech: ['Robot Framework', 'Python', 'AWS', 'Jenkins', 'JIRA'],
  },
  {
    role: 'Test and Implementation Engineer',
    company: 'VAPS Technosoft Pvt Ltd - Education Domain',
    period: 'Apr 2018 - Dec 2018',
    description: 'School Management application designed for institutes from Pre-Nursery to College, covering modules like Admission, Fees, Exam, Pay Care, Front Office, Library, Sports, Birthday, COE, and Alumni.',
    points: [
      'Assessed business requirements and transformed them into comprehensive QA strategies aligned with Agile',
      'Designed and optimized test scenarios, prepared detailed Test Reports, Test Plans and Test Estimates',
      'Created accurate Test Cases and Test Data, adapting to evolving requirements and feature enhancements',
    ],
    tech: ['Manual Testing', 'JIRA', 'TestRail', 'SQL'],
  },
  {
    role: 'Software Engineer',
    company: 'MastercomTelco Solutions (I) Pvt Ltd - Telecom Domain',
    period: 'Jun 2017 - Mar 2018',
    description: 'Network monitoring and data polling platform for network elements using SNMP protocol, alerting end users about individual elements in the connected network to enable fast resolution.',
    points: [
      'Analyzed workflows, identified gaps, and converted requirements into actionable QA strategies',
      'Evaluated system specifications and formulated robust regression and validation plans for platform stability',
    ],
    tech: ['Manual Testing', 'SNMP', 'Test Planning'],
  },
];

export const projects = [
  {
    title: 'AI-Powered Test Generator',
    description:
      'Analyzes PRDs to auto-generate test plans, cases, and execution reports using LLM prompts with anti-hallucination guardrails.',
    tech: ['Python', 'OpenAI API', 'Prompt Engineering'],
    impact: 'Reduced test planning effort by 40%',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  },
  {
    title: 'AI Automation with MCP Server',
    description:
      'Accelerated test creation using AI-Assisted automation with MCP Server, enabling rapid regression coverage expansion for Cyber Security platform.',
    tech: ['MCP Server', 'Python', 'Robot Framework', 'AI'],
    impact: 'Increased regression coverage by 50%',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  },
  {
    title: 'E2E Automation Framework',
    description:
      'Keyword-driven modular framework with Robot Framework, reusable keywords, custom Python libraries for UI & API automation.',
    tech: ['Robot Framework', 'Python', 'Selenium', 'Browser Library'],
    impact: 'Reduced maintenance effort by 30-40%',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
  },
  {
    title: 'Load Testing',
    description:
      'API and system load testing pipeline using JMeter and LoadRunner to validate scalability, reliability, and system behavior under peak load.',
    tech: ['JMeter', 'LoadRunner', 'AWS', 'Grafana'],
    impact: 'Validated system stability under peak traffic',
    gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
  },
  {
    title: 'CI/CD Quality Gates',
    description:
      'Defined release readiness criteria and quality metrics integrated into CI/CD pipelines, stabilizing flaky tests and nightly build success rates.',
    tech: ['Jenkins', 'GitLab CI', 'Docker', 'AWS'],
    impact: 'Faster release cycles, stable pipelines',
    gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
  },
  {
    title: 'Cloud-Native QA Platform',
    description:
      'End-to-end QA across AWS Cloud and On-Prem environments with automated Smoke, Functional, Regression, and Integration testing.',
    tech: ['AWS', 'Docker', 'Kubernetes', 'Playwright'],
    impact: 'Seamless testing across cloud & on-prem',
    gradient: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
  },
];

export const certifications = [
  { title: 'AWS Certified Solutions Architect - Associate', subtitle: 'Amazon Web Services', link: 'https://www.credly.com/badges/590085fb-2493-4987-bc6c-389136fe1f38/public_url' },
  { title: 'Foundations of Operationalizing MITRE ATT&CK', subtitle: 'AttackIQ Academy', link: 'https://www.credly.com/badges/d4faa5ca-9c83-4672-b310-2b5d44d857d4/linked_in_profile' },
  { title: 'Python (Basic) Certificate', subtitle: 'HackerRank', link: 'https://www.hackerrank.com/certificates/8e39181fcad5' },
];
