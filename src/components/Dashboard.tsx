import React, { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

const Dashboard = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAdmin = async () => {
      const user = auth.currentUser;
      if (user) {
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists() && userDoc.data().role === "admin") {
          setIsAdmin(true);
        }
      }
      setLoading(false);
    };

    checkAdmin();
  }, []);

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (!isAdmin) {
    return <p>Acesso negado. Esta página é apenas para administradores.</p>;
  }

  return (
    <div>
      <h1>Dashboard do Administrador</h1>
      <p>Bem-vindo à área restrita.</p>
    </div>
  );
};

export default Dashboard;
