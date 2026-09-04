export interface LeadershipMember {
  id: string;
  name: string;
  role: string;
  education: string;
  experience: string;
  responsibilities: string;
  image?: string;
}

export const leadershipData: LeadershipMember[] = [
  {
    id: 'dr-anand',
    name: 'Dr. Anand Prakash Mishra',
    role: 'Founder',
    education: 'Ph.D. & LLB | M.Sc in Chemistry | B.Sc in PCM',
    experience: 'Over 30 years of experience in teaching at Allahabad University.',
    responsibilities: 'Technical aspects, business development, strategic planning, and overall company growth.'
  },
  {
    id: 'mr-mayank',
    name: 'Mr. Mayank Prakash Mishra',
    role: 'CEO',
    education: 'MBA in HR & Marketing | B.Tech Mechanical Engineering',
    experience: 'Over 10 years of industry experience.',
    responsibilities: 'Technical aspects, business development, strategic planning, and overall company growth.'
  },
  {
    id: 'mr-saurabh',
    name: 'Mr. Saurabh Kumar Pandey',
    role: 'Technical Head',
    education: 'B.Tech Mechanical Engineering',
    experience: 'Over 10 years of industry experience.',
    responsibilities: 'Technical aspects, business development, strategic planning, and overall company growth.'
  },
  {
    id: 'mr-gyanendra',
    name: 'Mr. Gyanendra Mishra',
    role: 'Operation Head',
    education: 'B.Tech Chemical Engineering',
    experience: 'Over 12 years of industry experience.',
    responsibilities: 'Technical aspects, business development, strategic planning, and overall company growth.'
  },
  {
    id: 'mrs-neha',
    name: 'Mrs. Neha Tripathi',
    role: 'Finance & IT Head',
    education: 'Computer Engineering',
    experience: 'Over 10 years of experience in the IT sector.',
    responsibilities: 'Business development, strategic planning, and overall company growth.'
  },
  {
    id: 'mr-aditya',
    name: 'Mr. Aditya Prakash Mishra',
    role: 'O&M Manager',
    education: 'B.Sc in PCM',
    experience: 'Industry professional.',
    responsibilities: 'Program management, operations, and business consistency for overall company growth.'
  },
  {
    id: 'mr-abhishek',
    name: 'Mr. Abhishek Kumar Singh',
    role: 'Assistant Manager',
    education: 'Diploma in Mechanicals',
    experience: 'Industry professional.',
    responsibilities: 'Program management, operations, and business consistency for overall company growth.'
  }
];
