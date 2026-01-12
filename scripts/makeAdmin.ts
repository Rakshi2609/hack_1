import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';

// Load environment variables
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });
dotenv.config({ path: path.resolve(process.cwd(), '.env') });

// User schema (inline)
const UserSchema = new mongoose.Schema({
    firebaseUid: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    role: {
        type: String,
        enum: ['student', 'admin', 'alumni'],
        default: 'student'
    },
    branch: { type: String },
    year: { type: Number },
    bio: { type: String },
    skills: [{ type: String }],
    interests: [{ type: String }],
    socialLinks: {
        github: String,
        linkedin: String,
        portfolio: String,
    },
    profileLocked: {
        type: Boolean,
        default: false,
    },
    acceptedGuidelines: {
        type: Boolean,
        default: false,
    },
    blockedUsers: [{ type: String }],
    dmLastRead: {
        type: Map,
        of: Date,
        default: {}
    },
    pinnedDms: [{ type: String }],
    lastActive: { type: Date },
    createdAt: { type: Date, default: Date.now },
});

const User = mongoose.models.User || mongoose.model('User', UserSchema);

async function makeAdmin() {
    const MONGODB_URI = process.env.MONGODB_URI;
    const ADMIN_EMAIL = 'rashith.ganjimut2024@vitstudent.ac.in';

    if (!MONGODB_URI) {
        console.error('❌ MONGODB_URI not found in environment variables');
        process.exit(1);
    }

    try {
        console.log('🔌 Connecting to MongoDB...');
        await mongoose.connect(MONGODB_URI);
        console.log('✅ Connected to MongoDB');

        const user = await User.findOne({ email: ADMIN_EMAIL });

        if (!user) {
            console.log(`❌ User with email ${ADMIN_EMAIL} not found`);
            console.log('💡 User must sign up first before being made admin');
            process.exit(1);
        }

        if (user.role === 'admin') {
            console.log(`✅ User ${ADMIN_EMAIL} is already an admin`);
        } else {
            user.role = 'admin';
            await user.save();
            console.log(`✅ Successfully made ${ADMIN_EMAIL} an admin!`);
        }

        await mongoose.connection.close();
        console.log('🔌 MongoDB connection closed');
        process.exit(0);
    } catch (error) {
        console.error('❌ Error:', error);
        await mongoose.connection.close();
        process.exit(1);
    }
}

makeAdmin();
