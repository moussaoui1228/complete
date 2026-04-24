const mongoose = require('mongoose');
const dotenv = require('dotenv');
const { ShippingRate } = require('./models/ShippingRate');
const { Settings } = require('./models/Settings');
const { OliveCategory } = require('./models/OliveCategory');
const { PressingService } = require('./models/PressingService');

dotenv.config();

const wilayas = [
    // ... (wilayas array remains same)
];


const oliveCategories = [
    { name: 'Récolte Précoce (Vert)', price_per_liter: 1200 },
    { name: 'Récolte Standard (Noir)', price_per_liter: 800 },
    { name: 'Biologique Certifié', price_per_liter: 1500 },
];

const pressingServices = [
    { name: 'Service de Trituration (Semi-Automatique)', category: 'extra_virgin', fee: 35 },
];

async function seed() {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB');

    // Shipping rates
    await ShippingRate.deleteMany({});
    // ... (insertion logic remains same)
    console.log('✅ Shipping rates seeded');


    // Olive Categories (NEW)
    await OliveCategory.deleteMany({});
    await OliveCategory.insertMany(oliveCategories);
    console.log('✅ Olive categories seeded');

    // Pressing Services (NEW)
    await PressingService.deleteMany({});
    await PressingService.insertMany(pressingServices);
    console.log('✅ Pressing services seeded');

    // Global settings
    await Settings.deleteMany({});
    await Settings.create({ pressing_percentage_taken: 30 });
    console.log('✅ Global settings seeded');

    await mongoose.disconnect();
    console.log('🎉 Seeding complete!');
}

seed().catch((err) => {
    console.error('Seed error:', err);
    process.exit(1);
});
