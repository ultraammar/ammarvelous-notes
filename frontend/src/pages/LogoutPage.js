import React, { useEffect } from 'react'
import authStore from 'stores/authStore';

export default function LogoutPage() {

    const store = authStore();
    useEffect(()=>{
        store.logout();
    }, []);
  return (
    <h3>You are now logged out.</h3>
  )
}
