import User from '../models/User.js';

export const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id).select('-password');
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error fetching user' });
    }
};

export const getUserProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user._id);

        if (user) {
            res.json({
                _id: user._id,
                name: user.name,
                email: user.email,
                category: user.category,
                title: user.title,
                description: user.description,
                experience: user.experience,
                profileImage: user.profileImage,
                isProfileComplete: user.isProfileComplete
            });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        console.error('Get profile error:', error);
        res.status(500).json({ message: 'Error fetching profile' });
    }
};

export const updateUserProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user._id);

        if (user) {
            user.category = req.body.category || user.category;
            user.title = req.body.title || user.title;
            user.description = req.body.description || user.description;
            user.experience = req.body.experience !== undefined ? req.body.experience : user.experience;
            user.profileImage = req.body.profileImage !== undefined ? req.body.profileImage : user.profileImage;
            user.isProfileComplete = true;
            user.role = 'expert'; // Once profile is complete, they become an expert

            const updatedUser = await user.save();

            res.json({
                _id: updatedUser._id,
                name: updatedUser.name,
                email: updatedUser.email,
                category: updatedUser.category,
                title: updatedUser.title,
                description: updatedUser.description,
                experience: updatedUser.experience,
                profileImage: updatedUser.profileImage,
                isProfileComplete: updatedUser.isProfileComplete
            });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        console.error('Update profile error:', error);
        res.status(500).json({ message: error.message || 'Error updating profile' });
    }
};

export const getAllUsers = async (req, res) => {
    const { category, search, page = 1, limit = 9 } = req.query;
    const skip = (page - 1) * limit;

    let query = { isProfileComplete: true };

    if (category && category !== 'All') {
        query.category = category;
    }

    if (search) {
        query.$or = [
            { name: { $regex: search, $options: 'i' } },
            { title: { $regex: search, $options: 'i' } },
            { description: { $regex: search, $options: 'i' } }
        ];
    }

    // Exclude current user from listing
    if (req.user) {
        query._id = { $ne: req.user.id };
    }

    try {
        const totalUsers = await User.countDocuments(query);
        const users = await User.find(query)
            .select('-password')
            .skip(skip)
            .limit(Number(limit))
            .sort({ createdAt: -1 });

        res.json({
            users,
            page: Number(page),
            pages: Math.ceil(totalUsers / limit),
            totalUsers
        });
    } catch (error) {
        console.error('Get all users error:', error);
        res.status(500).json({ message: 'Error fetching users' });
    }
};
