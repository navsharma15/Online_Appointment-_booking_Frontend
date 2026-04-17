import Notification from '../models/Notification.js';

export const getNotifications = async (req, res) => {
    const notifications = await Notification.find({ userId: req.user._id })
        .sort({ createdAt: -1 });
    res.json(notifications);
};

export const markAsRead = async (req, res) => {
    const { id } = req.params;
    const notification = await Notification.findById(id);

    if (notification) {
        notification.read = true;
        await notification.save();
        res.json({ message: 'Notification marked as read' });
    } else {
        res.status(404).json({ message: 'Notification not found' });
    }
};
