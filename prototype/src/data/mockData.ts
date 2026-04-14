export type SourceType = 'sharepoint' | 'engage-conversation' | 'engage-answer' | 'web';

export interface Source {
  id: number;
  title: string;
  type: SourceType;
  url: string;
  snippet: string;
  metadata: {
    author?: string;
    authorRole?: 'admin' | 'expert' | 'member';
    authorInitials?: string;
    authorAvatarColor?: string;
    avatarPhoto?: string;
    date?: string;
    community?: string;
    site?: string;
    isVerifiedAnswer?: boolean;
    isBestAnswer?: boolean;
    fileType?: 'docx' | 'pptx' | 'xlsx' | 'pdf' | 'aspx';
    domain?: string;
    sensitivityLabel?: string;
    likes?: number;
    replies?: number;
  };
}

export interface Question {
  id: string;
  author: string;
  authorInitials: string;
  avatarColor: string;
  date: string;
  seenBy: number;
  title: string;
  body?: string;
  replies: number;
  expertComment?: {
    author: string;
    authorInitials: string;
    role: 'admin' | 'expert';
    text: string;
    date: string;
  };
}

export interface AgentAnswer {
  id: string;
  agentName: string;
  draftedDate: string;
  content: string;
  sources: Source[];
  reasoning?: string;
}

export interface CardData {
  question: Question;
  answer: AgentAnswer;
  sources: Source[];
}

// ═══════════════════════════════════════════════════════════════════════════
// Card 1 — IT Help Desk: MFA setup
// ═══════════════════════════════════════════════════════════════════════════

const sources1: Source[] = [
  {
    id: 1,
    title: 'New Hire IT Onboarding Checklist 2026',
    type: 'sharepoint',
    url: '#',
    snippet: '"All new employees must complete their IT setup within the first 5 business days. This includes MFA enrollment, Intune device registration, and access requests for team SharePoint sites."',
    metadata: {
      author: 'Sarah Chen',
      authorRole: 'admin',
      authorInitials: 'SC',
      authorAvatarColor: '#0078d4',
      date: 'Mar 15, 2026',
      site: 'IT Knowledge Base',
      fileType: 'docx',
      sensitivityLabel: 'Confidential\\Internal-Only',
    },
  },
  {
    id: 2,
    title: 'How do I reset my MFA after replacing my phone?',
    type: 'engage-answer',
    url: '#',
    snippet: '"Go to aka.ms/mfasetup, sign in, remove your old device from Security Info, then add your new one. If you\'re locked out and can\'t access the portal, contact the IT Help Desk directly and they can issue a temporary access pass so you can complete the setup without needing your old device."',
    metadata: {
      author: 'Mona Kane',
      authorRole: 'expert',
      authorInitials: 'MK',
      authorAvatarColor: '#5b5fc7',
      avatarPhoto: 'logos/Avatar-1.svg',
      date: 'Feb 28, 2026',
      community: 'IT Help Desk',
      isVerifiedAnswer: true,
      isBestAnswer: true,
      likes: 7,
      replies: 4,
    },
  },
  {
    id: 3,
    title: 'VPN Troubleshooting – GlobalProtect Common Fixes',
    type: 'sharepoint',
    url: '#',
    snippet: '"If VPN drops frequently, verify you are running GlobalProtect 6.2.1 or later. Go to Settings > About to check. Older versions are no longer supported after April 15."',
    metadata: {
      author: 'Mike Torres',
      authorInitials: 'MT',
      authorAvatarColor: '#ca5010',
      date: 'Jan 10, 2026',
      site: 'IT Support Portal',
      fileType: 'pdf',
    },
  },
  {
    id: 4,
    title: 'How to request equipment for remote workers?',
    type: 'engage-conversation',
    url: '#',
    snippet: '"Remote workers can request monitors, keyboards, and headsets through the IT Equipment Portal. Standard packages ship within 5-7 business days. If you need expedited shipping for an urgent setup, contact your manager to approve priority fulfillment through the portal."',
    metadata: {
      author: 'Lydia Bauer',
      authorRole: 'expert',
      authorInitials: 'LB',
      authorAvatarColor: '#c43e1c',
      avatarPhoto: 'logos/Avatar-2.svg',
      date: 'Mar 2, 2026',
      community: 'IT Help Desk',
      isBestAnswer: true,
      likes: 3,
      replies: 6,
    },
  },
  {
    id: 5,
    title: 'Enroll devices in Microsoft Intune',
    type: 'web',
    url: 'https://learn.microsoft.com/en-us/mem/intune/',
    snippet: '"Enroll devices in Microsoft Intune to manage and secure your organization\'s devices. Supported platforms include Windows, macOS, iOS, and Android."',
    metadata: {
      domain: 'learn.microsoft.com',
      date: 'Updated Mar 2026',
    },
  },
];

const question1: Question = {
  id: 'q1',
  author: 'Robert Tolbert',
  authorInitials: 'RT',
  avatarColor: '#8764b8',
  date: 'Apr 23',
  seenBy: 13,
  title: 'How do I set up MFA on my new device after replacing my phone?',
  body: "I just got a new phone and can't access my accounts because MFA is tied to my old device. What's the process to re-enroll?",
  replies: 3,
  expertComment: {
    author: 'Mona Kane',
    authorInitials: 'MK',
    role: 'expert',
    text: 'agent can you answer this using the IT Knowledge Base?',
    date: 'Apr 23',
  },
};

const answer1: AgentAnswer = {
  id: 'a1',
  agentName: 'IT Help Desk agent',
  draftedDate: '4hr ago',
  content: `To re-enroll MFA on your new device, follow these steps:

**Go to the MFA setup portal** at aka.ms/mfasetup and sign in with your work account [1].

**Remove your old device** from the Security Info page — select the old phone entry and click "Delete" [1].

**Add your new device** by clicking "+ Add sign-in method" and selecting "Authenticator app" or "Phone" depending on your preference [2].

**Complete verification** by scanning the QR code with the Microsoft Authenticator app on your new phone, or entering the verification code sent to your new number [2].

**If you're locked out** and can't access the portal, contact the IT Help Desk directly. They can issue a temporary access pass so you can complete the setup [3].

**Note:** Make sure to also update your device enrollment in Intune to keep your new phone compliant with company policies [5].

The standard turnaround for help desk MFA resets is same-day during business hours [4].`,
  sources: sources1,
  reasoning: 'Searching Engage community for posts about MFA device re-enrollment after phone replacement.\nFound a verified answer from a community expert describing the same scenario. Now searching SharePoint for official IT documentation on the MFA reset process.\nFound the MFA Self-Service Reset Guide on the IT Knowledge Base SharePoint site with step-by-step instructions. Cross-referencing with Intune device enrollment requirements.\nSynthesizing into a final answer covering how to request a reset, the self-service portal steps, Intune re-enrollment, and expected turnaround time.',
};

// ═══════════════════════════════════════════════════════════════════════════
// Card 2 — HR Benefits: Wellness program enrollment
// ═══════════════════════════════════════════════════════════════════════════

const sources2: Source[] = [
  {
    id: 1,
    title: '2026 Employee Wellness Program Overview',
    type: 'sharepoint',
    url: '#',
    snippet: '"The 2026 Wellness Program includes gym reimbursement up to $1,200/year, mental health sessions (6 per quarter), and ergonomic equipment stipends for remote employees."',
    metadata: {
      author: 'Priya Sharma',
      authorRole: 'admin',
      authorInitials: 'PS',
      authorAvatarColor: '#881798',
      date: 'Jan 5, 2026',
      site: 'HR Central',
      fileType: 'pptx',
    },
  },
  {
    id: 2,
    title: 'Benefits Enrollment Deadlines & Instructions',
    type: 'sharepoint',
    url: '#',
    snippet: '"Open enrollment for wellness benefits runs January 15 – February 28. Changes take effect March 1. Late enrollments require manager approval and a completed Exception Request form."',
    metadata: {
      author: 'HR Team',
      authorInitials: 'HR',
      authorAvatarColor: '#107c10',
      date: 'Jan 2, 2026',
      site: 'HR Central',
      fileType: 'xlsx',
    },
  },
  {
    id: 3,
    title: 'Can I still enroll in the wellness program after the deadline?',
    type: 'engage-answer',
    url: '#',
    snippet: '"Yes — you can submit a late enrollment via the Exception Request form on HR Central. Your manager needs to approve it, and it typically takes 3-5 business days to process. Once approved, your benefits will be retroactive to the date you submitted the request form."',
    metadata: {
      author: 'Maria Lopez',
      authorRole: 'member',
      authorInitials: 'ML',
      authorAvatarColor: '#498205',
      avatarPhoto: 'logos/Avatar-3.svg',
      date: 'Mar 10, 2026',
      community: 'HR Benefits & Perks',
      isVerifiedAnswer: true,
      likes: 5,
      replies: 8,
    },
  },
];

const question2: Question = {
  id: 'q2',
  author: 'James Mitchell',
  authorInitials: 'JM',
  avatarColor: '#498205',
  date: 'Apr 22',
  seenBy: 8,
  title: 'How do I enroll in the employee wellness program?',
  body: "I missed the open enrollment window. Is there a way to still sign up for the gym reimbursement benefit?",
  replies: 1,
  expertComment: undefined,
};

const answer2: AgentAnswer = {
  id: 'a2',
  agentName: 'HR Benefits agent',
  draftedDate: '2hr ago',
  content: `You can still enroll in the wellness program after the deadline by submitting an Exception Request:

**Standard enrollment** runs January 15 – February 28 each year, with changes taking effect March 1 [2].

**Late enrollment** is possible — submit the Exception Request form available on the HR Central SharePoint site. You'll need your manager's approval [3].

**Gym reimbursement** covers up to $1,200 per year. The program also includes 6 mental health sessions per quarter and ergonomic equipment stipends for remote workers [1].

**Processing time** for late enrollments is typically 3-5 business days after manager approval [3].

Once approved, your benefits will be retroactive to your enrollment date [2].`,
  sources: sources2,
  reasoning: 'Searching Engage community for posts and discussions about late enrollment in the corporate wellness program.\nFound an Engage post from an HR expert confirming that late enrollment exceptions exist. Now searching SharePoint for official enrollment documents and deadlines.\nFound the Benefits Enrollment Timeline spreadsheet with Q2 deadline details and the Wellness Program Overview presentation with tier information.\nSynthesizing into a final answer covering the late enrollment exception process, required approvals, and available program tiers.',
};

// ═══════════════════════════════════════════════════════════════════════════
// Card 3 — Sales Ops: RFP submission process
// ═══════════════════════════════════════════════════════════════════════════

const sources3: Source[] = [
  {
    id: 1,
    title: 'RFP Response Playbook – FY26',
    type: 'sharepoint',
    url: '#',
    snippet: '"All RFP responses must be reviewed by Legal and Pricing before submission. Use the RFP Tracker in SharePoint to log new opportunities and assign workstream owners."',
    metadata: {
      author: 'David Kim',
      authorRole: 'admin',
      authorInitials: 'DK',
      authorAvatarColor: '#005a9e',
      date: 'Feb 1, 2026',
      site: 'Sales Operations Hub',
      fileType: 'docx',
      sensitivityLabel: 'Confidential\\Internal-Only',
    },
  },
  {
    id: 2,
    title: 'Sales Operations Hub - RFP Tracker',
    type: 'sharepoint',
    url: '#',
    snippet: '"Use the RFP Tracker to view active opportunities, deadlines, assigned reviewers, and submission status. Filter by region, deal size, or stage."',
    metadata: {
      site: 'Sales Operations Hub',
      fileType: 'aspx',
    },
  },
  {
    id: 3,
    title: 'Tips for winning enterprise RFPs',
    type: 'engage-conversation',
    url: '#',
    snippet: '"The key is starting early — at least 3 weeks before deadline. Assign a dedicated writer, get technical review from Solutions Engineering, and always include customer references. We\'ve seen win rates jump 30% when proposals include at least two relevant customer case studies with measurable outcomes."',
    metadata: {
      author: 'Lisa Chen',
      authorRole: 'expert',
      authorInitials: 'LC',
      authorAvatarColor: '#8764b8',
      avatarPhoto: 'logos/Avatar-4.svg',
      date: 'Mar 18, 2026',
      community: 'Sales Operations',
      likes: 12,
      replies: 4,
    },
  },
  {
    id: 4,
    title: 'RFP best practices for enterprise software',
    type: 'web',
    url: 'https://learn.microsoft.com/en-us/partner-center/',
    snippet: '"Focus on demonstrating measurable business outcomes. Include implementation timelines, support SLAs, and integration capabilities with the customer\'s existing tech stack."',
    metadata: {
      domain: 'learn.microsoft.com',
      date: 'Updated Feb 2026',
    },
  },
];

const question3: Question = {
  id: 'q3',
  author: 'Aisha Patel',
  authorInitials: 'AP',
  avatarColor: '#c43e1c',
  date: 'Apr 21',
  seenBy: 22,
  title: "What's the process for submitting an RFP response?",
  body: "Our team received a large enterprise RFP due in 3 weeks. What are the required steps and approvals before we can submit?",
  replies: 5,
  expertComment: {
    author: 'David Kim',
    authorInitials: 'DK',
    role: 'admin',
    text: 'Great question — check the RFP Playbook on the Sales Ops Hub. Agent, please summarize the process.',
    date: 'Apr 21',
  },
};

const answer3: AgentAnswer = {
  id: 'a3',
  agentName: 'Sales Operations agent',
  draftedDate: '6hr ago',
  content: `Here's the standard RFP submission process:

**Log the opportunity** in the RFP Tracker on the Sales Operations Hub SharePoint site. Assign workstream owners for each section [1][2].

**Draft the response** — start at least 3 weeks before the deadline. Assign a dedicated writer and get technical review from Solutions Engineering [3].

**Required reviews** — all RFP responses must be reviewed by Legal and Pricing before submission. Log review requests in the tracker [1].

**Include key elements:** measurable business outcomes, implementation timelines, support SLAs, and integration details [4].

**Always include customer references** — this is consistently flagged as a differentiator in winning proposals [3].

**Submit via the tracker** — update the status to "Submitted" once complete. The Sales Ops team monitors deadlines and will flag overdue items [2].`,
  sources: sources3,
  reasoning: 'Searching Engage community for posts about the RFP submission workflow and best practices.\nFound a community discussion with practical tips on winning RFP strategies. Now searching SharePoint for the official RFP process documentation.\nFound the RFP Response Playbook on SharePoint with the formal 5-stage workflow. Now searching curated web sources for industry best practices on proposal management.\nFound supplementary guidance from external documentation. Synthesizing into a final answer covering the end-to-end RFP workflow, key deadlines, review stages, and community-sourced winning tips.',
};

// ═══════════════════════════════════════════════════════════════════════════
// Exports
// ═══════════════════════════════════════════════════════════════════════════

export const mockCards: CardData[] = [
  { question: question1, answer: answer1, sources: sources1 },
  { question: question2, answer: answer2, sources: sources2 },
  { question: question3, answer: answer3, sources: sources3 },
];

// Legacy exports for backward compat
export const mockQuestion = question1;
export const mockAgentAnswer = answer1;
export const mockSources = sources1;
