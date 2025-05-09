export interface ExperienceItem {
    year: string;
    title: string;
    description: string;
    side?: 'start' | 'end'; 
  }
  
  const experience: ExperienceItem[] = [
    {
      year: '2022',
      title: 'Cybersecurity Intern at XYZ',
      description: 'Worked on penetration testing, vulnerability scanning, and SIEM dashboard monitoring.',
      side: 'start',
    },
    {
      year: '2023',
      title: 'CTF Participant – National Cyber League',
      description: 'Competed in national-level Capture The Flag competitions.',
      side: 'end',
    },
    {
      year: '2024',
      title: 'Freelance Security Auditor',
      description: 'Audited web apps and reported OWASP Top 10 vulnerabilities.',
      side: 'start',
    },
  ];
  
  export default experience;
  