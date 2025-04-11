import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast';

axios.defaults.baseURL = 'https://connections-api.goit.global';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;
    
    if (token) {
      setAuthHeader(token);
    } else {
      clearAuthHeader();
    }

    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;
    
    if (token) {
      setAuthHeader(token);
    } else {
      clearAuthHeader();
    }

    try {
      const response = await axios.post('/contacts', contact);
      toast.success('Contact added successfully');
      return response.data;
    } catch (error) {
      toast.error('Failed to add contact');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateContact = createAsyncThunk(
  'contacts/updateContact',
  async ({ id, ...contact }, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;
    
    if (token) {
      setAuthHeader(token);
    } else {
      clearAuthHeader();
    }

    try {
      const response = await axios.patch(`/contacts/${id}`, contact);
      toast.success('Contact updated successfully');
      return response.data;
    } catch (error) {
      toast.error('Failed to update contact');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;
    
    if (token) {
      setAuthHeader(token);
    } else {
      clearAuthHeader();
    }

    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      toast.success('Contact deleted successfully');
      return response.data;
    } catch (error) {
      toast.error('Failed to delete contact');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
); 