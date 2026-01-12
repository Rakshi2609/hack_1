## Campus Connect

Campus Connect is a comprehensive Next.js-based platform designed to foster collaboration and communication among students. It provides a seamless environment for discovering peers, collaborating on projects, participating in discussions, and engaging in real-time chat through public channels or direct messages. The application features an enhanced user experience with rich profiles, instant notifications, and robust moderation tools to ensure a safe and productive community.

## 🎨 Recent Updates

### Landing Page Redesign
The landing page has been completely reworked with a modern, aesthetic design featuring:
- **Smooth Animations**: FadeIn effects, pulsing spotlights, and floating glows create a dynamic visual experience
- **Enhanced Hero Section**: Full viewport hero with gradient backgrounds and animated elements
- **Interactive Feature Cards**: Hover effects with shimmer animations and 3D transforms
- **Improved Visual Hierarchy**: Better typography scaling, spacing, and color gradients
- **Responsive Design**: Optimized for all screen sizes with smooth transitions

### New Features
- **Campus Canteen**: Browse menus from 3 campus canteens (North Square, Gazebo, Gymkhana) with prices, reviews, and ratings
- **Interactive Quizzes**: 6 quiz categories with difficulty levels, time limits, and point systems
- **Events Listing**: Display campus events with dates, locations, and tags
- **Admin System**: Script to promote users to admin role (`npm run make-admin`)

## Features

### Core Functionality

- **User Authentication**: Secure login and signup using Firebase Authentication.
- **User Profiles**: Detailed profiles with skills, interests, social links, and direct messaging capabilities.
- **Real-Time Chat**: Support for public channels, direct messages, reactions, stickers, replies, and moderation.
- **Notifications**: Browser-level notifications for direct messages, in addition to in-app toasts.
- **User Directory**: Searchable and filterable list of users by name, branch, skills, with pagination.

### Collaboration Tools

#### 💬 **Real-Time Chat** (`/chat`)
A comprehensive messaging system designed for seamless communication:
- **Universal Channel**: Campus-wide public channel for announcements and general discussions
- **Direct Messages (DMs)**: Private one-on-one conversations with any user
- **Message Features**:
  - Text messages with rich formatting
  - Reactions and emoji support
  - Reply to specific messages (threading)
  - Stickers and GIF support
  - Message editing and deletion
- **User Presence**: See who's online with real-time status indicators
- **Browser Notifications**: Get native desktop/mobile alerts for new DMs even when the page is not active
- **Message Management**: Pin important DMs, mark as read/unread
- **Advanced Moderation**: Automatic toxicity detection and profanity filtering
- **User Controls**: Block users, report inappropriate content

**Getting Started with Chat:**
1. Log in to your account
2. Navigate to `/chat` or click "Chat" in the navbar
3. Click "Universal" for campus-wide discussions
4. Click "Direct Messages" to chat privately with users
5. Enable browser notifications for instant alerts

#### 📚 **Resources** (`/resources`)
Access and share academic materials and learning resources:
- **Resource Library**: Browse a comprehensive collection of study materials
- **Upload & Share**: Contribute your notes, PDFs, and study guides
- **Categories**: Organized by subjects, courses, and topics
- **Search & Filter**: Quickly find relevant materials
- **Rating System**: Help others discover quality content
- **Version Control**: Track resource updates and revisions
- **Download Management**: Save resources for offline access

**How to Use Resources:**
1. Visit `/resources` from the navbar
2. Browse by category or use the search bar
3. Click on any resource to view details
4. Download or bookmark useful materials
5. Upload your own resources to help the community

#### 💡 **Discussions** (`/discussions`)
Engage in meaningful conversations and get help:
- **Threaded Discussions**: Create topics on any subject
- **Categories**: Academic, Career, Technical, General, etc.
- **Rich Text Editor**: Format your posts with code blocks, images, and links
- **Voting System**: Upvote helpful answers and quality posts
- **Best Answer**: Mark accepted solutions to help others
- **Follow Topics**: Get notified of new replies
- **Search**: Find existing discussions before creating new ones
- **Tags**: Organize and filter discussions by relevant keywords

**Starting a Discussion:**
1. Go to `/discussions`
2. Click "New Discussion" or "Create Thread"
3. Choose a relevant category
4. Write a descriptive title
5. Add details, code snippets, or screenshots
6. Tag appropriately for better discovery
7. Post and engage with replies

#### 🚀 **Projects** (`/projects`)
Collaborate on real-world projects and build your portfolio:
- **Project Creation**: Start new projects with detailed descriptions
- **Team Building**: Find teammates by skills and interests
- **Project Details**:
  - Title, description, and objectives
  - Required skills and tech stack
  - Timeline and milestones
  - GitHub/portfolio links
- **Search & Filter**: Discover projects by tech stack, status, or team needs
- **Collaboration**: Connect with project owners via DM
- **Showcase**: Display completed projects on your profile
- **Categories**: Web Dev, Mobile Apps, ML/AI, Hardware, Research, etc.

**How to Start a Project:**
1. Navigate to `/projects`
2. Click "Create New Project" button
3. Fill in project details:
   - **Title**: Clear, concise project name
   - **Description**: Detailed overview, goals, and scope
   - **Tech Stack**: Languages, frameworks, and tools
   - **Skills Needed**: What expertise you're looking for
   - **Team Size**: How many members you need
   - **Timeline**: Expected duration
4. Add relevant tags for discoverability
5. Click "Create" to publish
6. Interested users will reach out via DM or project comments
7. Update project status as you progress (Planning → In Progress → Completed)

**Joining a Project:**
1. Browse projects at `/projects`
2. Use filters to find matches for your skills
3. Read project details carefully
4. Click "Contact" or "Express Interest"
5. Send a DM introducing yourself and your relevant experience

#### 🎓 **Skills Marketplace** (`/skills`)
Exchange knowledge and learn from peers:
- **Skill Listings**: Browse skills offered and requested
- **Types**: 
  - OFFER: Skills you can teach others
  - REQUEST: Skills you want to learn
- **Categories**: Academic and Non-Academic
- **Status Tracking**: Open vs. Closed opportunities
- **Direct Contact**: Message users directly to coordinate
- **Profiles**: View user expertise and background
- **Tags**: Filter by specific technologies or topics

**Using the Skills Marketplace:**
1. Visit `/skills`
2. Toggle between "Skills Offered" and "Skills Requested"
3. Use search and filters to find matches
4. Click on listings to see details
5. Contact users via their profile or DM

#### 🎯 **Interactive Quizzes** (`/quizzes`)
Test your knowledge and compete with peers:
- **6 Quiz Categories**:
  - JavaScript Fundamentals
  - Data Structures & Algorithms
  - React Basics
  - Database Management
  - Python Programming
  - Machine Learning Basics
- **Difficulty Levels**: Easy, Medium, Hard
- **Timed Challenges**: Beat the clock
- **Points System**: Earn points and climb the leaderboard
- **Progress Tracking**: Monitor your improvement
- **Detailed Results**: Review answers and explanations

#### 📅 **Events** (`/events`)
Stay updated on campus activities:
- **Event Listings**: Hackathons, workshops, seminars, cultural events
- **Event Details**: Date, time, location, description
- **Tags**: Filter by event type
- **RSVP**: Express interest in attending
- **Reminders**: Get notified before events start

#### 🍽️ **Campus Canteen** (`/canteen`)
Explore dining options across campus:
- **3 Canteen Locations**:
  - North Square (Near Main Gate)
  - Gazebo (Central Garden Area)
  - Gymkhana (Sports Complex)
- **Menu Items**: Prices, descriptions, availability
- **Ratings**: 5-star rating system for each item
- **User Reviews**: Read and write reviews
- **Filters**: Sort by canteen, availability, or price

### Administrative Features

- **Moderation**: Built-in toxicity detection, profanity filtering, and content moderation using libraries like `leo-profanity` and `bad-words`.
- **Reports**: Report inappropriate content or users.
- **User Management**: Block users, manage user roles.
- **Statistics**: View platform statistics and analytics.
- **Debug and Testing**: API endpoints for debugging, testing, and health checks.

### Additional Capabilities

- **Screenshot Generation**: Automated screenshot capabilities using Puppeteer.
- **File Drive**: Manage files and documents.
- **Seed Data**: Populate the database with initial data.
- **Force Repair**: Administrative tools for data repair.

## Tech Stack

- **Frontend**: Next.js 16 with App Router, TypeScript, Mantine UI 8.x, React Toastify
- **Backend**: Next.js API Routes, MongoDB with Mongoose
- **Authentication**: Firebase Auth and Firebase Admin SDK
- **Real-Time Communication**: Socket.io for chat
- **Styling**: PostCSS with Mantine presets, CSS Modules with animations
- **Icons**: Tabler Icons, Lucide React
- **Moderation**: Leo Profanity, Bad Words libraries
- **Automation**: Puppeteer for browser automation
- **Development**: ts-node for running TypeScript scripts

## Prerequisites

Before running the application, ensure you have the following installed:

- **Node.js**: Version 18 or higher
- **MongoDB**: A running MongoDB instance (local or cloud)
- **Firebase Project**: Set up a Firebase project with Authentication enabled

## Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/tanushbhootra576/camp.git
   cd camp
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Environment Setup**:
   Create a `.env.local` file in the root directory and add the following variables:

   ```env
   # Firebase Configuration
   NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

   # MongoDB
   MONGODB_URI=mongodb://localhost:27017/campus-connect

   # Other configurations (if any)
   ```

4. **Database Setup**:
   Ensure MongoDB is running and accessible. You can seed initial data using the `/api/seed` endpoint.

## Usage

### Getting Started

1. **Development Server**:

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

2. **Build for Production**:

   ```bash
   npm run build
   npm start
   ```

3. **Linting**:
   ```bash
   npm run lint
   ```

4. **Make User Admin**:
   ```bash
   npm run make-admin
   ```
   Note: User must sign up first. Edit `scripts/makeAdmin.ts` to change the admin email.

### Quick Start Guide

#### For New Users:
1. **Sign Up**: Navigate to `/signup` and create an account using your email
2. **Complete Profile**: Go to `/profile` and add:
   - Your name, branch, and year
   - Skills and interests
   - Social links (GitHub, LinkedIn, Portfolio)
   - Bio
3. **Explore Features**:
   - Browse users at `/users`
   - Join discussions at `/discussions`
   - Find or offer skills at `/skills`
   - Check out projects at `/projects`
   - Take quizzes at `/quizzes`
   - Chat with peers at `/chat`

#### For Project Creators:
1. **Plan Your Project**: Define goals, tech stack, and team requirements
2. **Create Listing**: Go to `/projects` → "Create New Project"
3. **Add Details**: Clear description, required skills, timeline
4. **Promote**: Share in the Universal chat channel
5. **Review Applications**: Check DMs from interested users
6. **Collaborate**: Use chat for team communication

#### For Learners:
1. **Find Resources**: Visit `/resources` for study materials
2. **Join Discussions**: Ask questions at `/discussions`
3. **Take Quizzes**: Test knowledge at `/quizzes`
4. **Connect**: Find mentors and peers at `/users`
5. **Practice**: Join or create projects at `/projects`

## Admin Setup

To grant admin privileges to a user:

1. Ensure the user has signed up through the platform
2. Update the `ADMIN_EMAIL` in `scripts/makeAdmin.ts` if needed (default: rashith.ganjimut2024@vitstudent.ac.in)
3. Run: `npm run make-admin`
4. The script will connect to MongoDB and update the user's role to 'admin'

See [ADMIN_SETUP.md](ADMIN_SETUP.md) for detailed instructions.


## Browser Notifications

To enable browser notifications for direct messages:

1. Navigate to the chat section at `/chat`
2. Click the bell icon next to "Direct Messages"
3. Allow notifications in the browser prompt
4. Receive native alerts even when the page is not active
5. Notifications include sender name and message preview

**Benefits:**
- Never miss important messages
- Stay connected even when working on other tabs
- Instant alerts for time-sensitive communications
- Works on desktop and mobile browsers

## Key Features Explained

### 🔒 **Security & Moderation**
- **Automated Content Filtering**: Uses `leo-profanity` and `bad-words` libraries
- **Toxicity Detection**: AI-powered inappropriate content detection
- **User Reports**: Report users or content for manual review
- **Block System**: Block users to prevent unwanted interactions
- **Admin Controls**: Dedicated admin panel for content management

### 👥 **User Discovery**
- **Search**: Find users by name, email, or skills
- **Filters**: Branch, year, skills, interests
- **Profiles**: Detailed user profiles with:
  - Skills and expertise
  - Social media links
  - Bio and interests
  - Active projects
  - Contribution history
- **Direct Contact**: One-click DM from any profile

### 📊 **Analytics & Stats**
- Platform-wide statistics
- User activity tracking
- Popular resources and discussions
- Project completion rates
- Quiz leaderboards

## Deployment

The application is optimized for deployment on Vercel:

1. Push your code to a Git repository.
2. Connect the repository to Vercel.
3. Set environment variables in Vercel dashboard.
4. Deploy automatically on push to main branch.

Ensure `npm run build` passes locally before deployment.

## Project Structure

```
camp/
├── public/                 # Static assets
├── scripts/                # Utility scripts
│   └── makeAdmin.ts        # Admin role assignment script
├── src/
│   ├── app/                # Next.js App Router
│   │   ├── api/            # API routes
│   │   ├── canteen/        # Canteen menus page
│   │   ├── chat/           # Chat page
│   │   ├── discussions/    # Discussions page
│   │   ├── events/         # Events page
│   │   ├── login/          # Login page
│   │   ├── profile/        # Profile page
│   │   ├── projects/       # Projects page
│   │   ├── quizzes/        # Quizzes page
│   │   ├── signup/         # Signup page
│   │   ├── skills/         # Skills page
│   │   ├── users/          # Users directory
│   │   ├── page.tsx        # Landing page (redesigned)
│   │   └── page.module.css # Landing page styles
│   ├── blocklists/         # Moderation word lists
│   ├── components/         # Reusable React components
│   ├── lib/                # Utility libraries
│   ├── models/             # Mongoose models
│   └── types/              # TypeScript type definitions
├── ADMIN_SETUP.md          # Admin setup documentation
├── eslint.config.mjs       # ESLint configuration
├── next.config.ts          # Next.js configuration
├── package.json            # Dependencies and scripts
├── postcss.config.mjs      # PostCSS configuration
├── tsconfig.json           # TypeScript configuration
└── vercel.json             # Vercel deployment config
```

## Contributing

We welcome contributions to Campus Connect!

1. Fork the repository.
2. Create a feature branch from `main`.
3. Make your changes and ensure `npm run lint` and `npm run build` pass.
4. Test your changes thoroughly.
5. Submit a pull request with a clear description of the changes.
6. Include screenshots or recordings for UI changes.

### ✨ Developed by Tanush Bhootra

## Acknowledgments

- Thanks to the Next.js team for the excellent framework.
- Mantine UI for beautiful and accessible components.
- Firebase for robust authentication and backend services.
- All contributors and the open-source community.
# hack_1
