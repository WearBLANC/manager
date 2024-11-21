import React from "react";
import { useEffect, useState } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

const Dashboard: React.FC = () => {
  const [user, setUser] = useState<any>(null);
  const [isAdmin, setIsAdmin] = useState(false);

  // Mock: Define roles (in production, use Firestore or a backend service)
  const adminEmails = ["admin@example.com"]; // Replace with actual admin emails or roles.

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      if (currentUser && adminEmails.includes(currentUser.email || "")) {
        setIsAdmin(true);
      } else {
        setIsAdmin(false);
      }
    });

    return () => unsubscribe();
  }, []);

  if (!user) {
    return (
      <div>
        <h1>Access Denied</h1>
        <p>You must be logged in to view this page.</p>
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div>
        <h1>Access Denied</h1>
        <p>You do not have the necessary permissions to access this page.</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <p>Welcome, {user.email}!</p>
      <div>
        {/* Add admin-specific features here */}
        <p>Here you can manage users, view analytics, and more.</p>
      </div>
    </div>
  );
};

export default Dashboard;
