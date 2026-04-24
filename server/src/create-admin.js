const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');
const { User } = require('./models/User');

dotenv.config();

async function createAdmin() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('✅ Connected to MongoDB');

        const adminEmail = 'admin@tazdayth.com';
        const existingAdmin = await User.findOne({ email: adminEmail });

        if (existingAdmin) {
            console.log('⚠️ Admin user already exists. Promoting to owner role...');
            existingAdmin.role = 'owner';
            await existingAdmin.save();
            console.log('✅ Admin promoted successfully.');
        } else {
            console.log('🚀 Creating new admin user...');
            const hashedPassword = await bcrypt.hash('adminthazdayth', 12);
            await User.create({
                first_name: 'Admin',
                last_name: 'TAZDAYTH',
                email: adminEmail,
                phone: '0000000000',
                password: hashedPassword,
                role: 'owner',
            });
            console.log('✅ Admin user created successfully.');
        }

        await mongoose.disconnect();
    } catch (err) {
        console.error('❌ Error creating admin:', err);
    }
}

createAdmin();
