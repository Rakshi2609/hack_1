import dbConnect from '../src/lib/db';
import User from '../src/models/User';
import Project from '../src/models/Project';
import DiscussionThread from '../src/models/DiscussionThread';
import mongoose from 'mongoose';

async function seed() {
  await dbConnect();

  // Clear existing data
  await User.deleteMany({});
  await Project.deleteMany({});
  await DiscussionThread.deleteMany({});

  // Create dummy users
  const users = await User.insertMany([
    {
      firebaseUid: 'uid1',
      email: 'alice@example.com',
      name: 'Alice',
      role: 'student',
      branch: 'CSE',
      year: 3,
      bio: 'Enthusiastic coder.',
      skills: ['React', 'Node.js'],
      interests: ['Web Development', 'AI'],
      socialLinks: { github: 'alicehub', linkedin: 'alicein', portfolio: '' },
      profileLocked: false,
      acceptedGuidelines: true,
      blockedUsers: [],
      lastActive: new Date(),
      createdAt: new Date(),
    },
    {
      firebaseUid: 'uid2',
      email: 'bob@example.com',
      name: 'Bob',
      role: 'alumni',
      branch: 'ECE',
      year: 4,
      bio: 'Hardware hacker.',
      skills: ['Verilog', 'IoT'],
      interests: ['Robotics', 'Embedded'],
      socialLinks: { github: 'bobhub', linkedin: 'bobin', portfolio: '' },
      profileLocked: false,
      acceptedGuidelines: true,
      blockedUsers: [],
      lastActive: new Date(),
      createdAt: new Date(),
    },
  ]);

  // Create dummy projects
  const projects = await Project.insertMany([
    {
      teamMembers: [users[0]._id, users[1]._id],
      title: 'Smart Attendance',
      description: 'Automated attendance using face recognition.',
      techStack: ['React', 'Python', 'OpenCV'],
      demoLink: 'https://demo.com/attendance',
      repoLink: 'https://github.com/alicehub/attendance',
      images: [],
      isFeatured: true,
      createdAt: new Date(),
    },
  ]);

  // Create dummy discussion threads
  await DiscussionThread.insertMany([
    {
      authorId: users[0]._id,
      title: 'How to get started with AI?',
      content: 'Looking for resources to start learning AI.',
      category: 'AI',
      tags: ['ai', 'beginner'],
      upvotes: [users[1]._id],
      comments: [
        {
          authorId: users[1]._id,
          content: 'Check out Coursera and fast.ai!',
          createdAt: new Date(),
        },
      ],
      createdAt: new Date(),
    },
  ]);

  console.log('Dummy data seeded!');
  await mongoose.disconnect();
}

seed().catch((e) => {
  console.error(e);
  process.exit(1);
});
