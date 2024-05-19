import React from 'react';
import axios from 'axios';

export const deleteNote = async (id, setRefresh) => {
  try {
    // Delete note
    await axios.delete(`/notes/${id}`, {withCredentials: true});

    // Fetch notes
    setRefresh(prevRefresh => !prevRefresh);
  } catch (error) {
    console.error("Error deleting note: ", error);
  }
};

