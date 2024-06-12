import { User } from "../models/userModal";
export const getUser = async () => {
    const users = await User.find();
    return users;
};
