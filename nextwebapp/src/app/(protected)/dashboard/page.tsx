"use client";
import { useSession } from "next-auth/react";

const Dashboard = () => {

    const { data: session, status } = useSession();
    console.log(session, status, "WTF");

    return <div>Dashboard</div>;
};

export default Dashboard;
