"use client";

import useOtherUser from "@/app/hooks/useOtherUser";
import { Conversation, User } from "@prisma/client";
import { format } from "date-fns";
import { useMemo } from "react";

interface ProfileDrawerProps {
    isOpen: boolean;
    onClose: () => void;
    data: Conversation & {
        users: User[]
    }
}

const ProfileDrawer: React.FC<ProfileDrawerProps> = ({
    isOpen,
    onClose,
    data
}) => {
    const otherUser = useOtherUser(data);

    const joinedDate = useMemo(() => {
        return format(new Date(otherUser.createAt), 'PP');
    }, [otherUser.createAt]);

    console.log("joinedDate", joinedDate);
    

    return (
        <div>
            Profile Drawer
        </div>
    );
};

export default ProfileDrawer;
